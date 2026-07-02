// Forge runtime — native mode. FORGE_BACKEND=claude-native hands the WHOLE goal to one
// continuous `claude -p` session whose only hands are Forge's own tools, served over MCP
// (mcp-server.mjs). This is the closest the runtime gets to a Fable-5-style single mind:
// the CLI runs its native agentic loop — real structured tool calling, its own live
// context, no JSON-in-text protocol to parse — while Forge still owns every tool
// execution, every guardrail, and the trace.
//
// What moves where, honestly:
// - The step-by-step machinery of loop.mjs (per-step cost routing, checkpoints,
//   deliberation, critic) does NOT run here — the CLI's own loop replaces it. Native mode
//   trades Forge's mid-run instrumentation for native cognition; the classic backend
//   remains the choice when that instrumentation matters more.
// - The LAW does not move: writes stay confined (enforced inside the MCP server), and
//   Directive #9 is enforced POST-HOC and deterministically — the stream log records
//   every tool call, so "was there a clean run_gate after the last successful write?" is
//   a fact, not a trust. A run that wrote and never gated comes back `incomplete`, never
//   `done`.
// - The trace keeps the same shape (steps/actions/outcome/evaluation/totals) and lands in
//   the same forge/runs/, so inspect/cost/episodic memory work unchanged.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { evaluate } from './eval.mjs';
import { appendLesson } from './memory.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));

// The CLI's own toolbox stays denied — its only hands are the MCP-served Forge tools.
const DENIED_CLI_TOOLS = 'Bash,Edit,Write,Read,Glob,Grep,WebFetch,WebSearch,Task,NotebookEdit';

export function nativeEnabled() {
  return process.env.FORGE_BACKEND === 'claude-native';
}

export function nativeTimeoutMs() {
  const n = Number(process.env.FORGE_NATIVE_TIMEOUT_MS);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 900000; // a whole run in one call — generous
}

export async function runNative({ system, goal, ctx, model, agent = 'agent', maxSteps = 20, memoryBlock = '', resumeContext = '', onEvent = () => {} }) {
  // MCP config: one server, this repo's own file, context via env. --strict-mcp-config
  // keeps the user's personal MCP servers out of an agent run.
  const cfgPath = path.join(ctx.workspace, '.forge-mcp.json');
  const serverPath = path.join(here, 'mcp-server.mjs');
  fs.writeFileSync(cfgPath, JSON.stringify({
    mcpServers: {
      forge: {
        command: 'node',
        args: [serverPath],
        env: {
          FORGE_MCP_REPO_ROOT: ctx.repoRoot,
          FORGE_MCP_WORKSPACE: ctx.workspace,
          ...(process.env.FORGE_ALLOW_EXEC ? { FORGE_ALLOW_EXEC: process.env.FORGE_ALLOW_EXEC } : {}),
        },
      },
    },
  }, null, 2));

  const allowed = 'mcp__forge'; // server-level allow: every tool the forge MCP server offers
  const args = [
    '-p', '--output-format', 'stream-json', '--verbose',
    '--max-turns', String(maxSteps),
    '--mcp-config', cfgPath, '--strict-mcp-config',
    '--allowedTools', allowed,
    '--disallowedTools', DENIED_CLI_TOOLS,
  ];
  if (model) args.push('--model', model);

  const prefix = [memoryBlock, resumeContext].filter(Boolean);
  const prompt = [
    system,
    '',
    'NATIVE-MODE RULES: your ONLY tools are the mcp__forge__* ones — use them for every read and write.',
    'There is NO finish, plan or delegate tool in native mode — when the goal is met you simply stop, ending your final message with one line starting with "SUMMARY:".',
    'Directive #9 still binds: after ANY write tool succeeds you MUST call run_gate and see it pass before you stop.',
    '',
    ...(prefix.length ? [prefix.join('\n\n---\n\n'), '', '---', ''] : []),
    '# Goal',
    goal,
  ].join('\n');

  const t0 = Date.now();
  const r = spawnSync('claude', args, {
    input: prompt,
    timeout: nativeTimeoutMs(),
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
    shell: process.platform === 'win32',
    windowsHide: true,
  });
  const wallMs = Date.now() - t0;
  try { fs.unlinkSync(cfgPath); } catch { /* best-effort cleanup */ }
  if (r.error) throw new Error('claude CLI failed to run: ' + r.error.message);

  const events = String(r.stdout || '').split('\n').filter(Boolean).map((l) => {
    try { return JSON.parse(l); } catch { return null; }
  }).filter(Boolean);

  const { steps, gateClean, dirtyWrites, resultEvent } = interpret(events, onEvent);

  // Outcome, with the post-hoc Directive #9 verdict baked in: success from the CLI is not
  // enough — unverified writes demote to incomplete.
  let outcome, summary;
  if (!resultEvent) {
    outcome = 'error';
    summary = 'claude CLI produced no result event (exit ' + r.status + '): ' + String(r.stderr || '').slice(0, 300);
  } else {
    summary = extractSummary(resultEvent, steps);
    const ok = resultEvent.subtype === 'success';
    if (!ok) outcome = resultEvent.subtype === 'error_max_turns' ? 'budget_exhausted' : 'incomplete';
    else if (dirtyWrites && !gateClean) { outcome = 'incomplete'; summary += ' [Directive #9: writes were never verified by a clean gate — demoted from done]'; }
    else outcome = 'done';
  }

  const usage = (resultEvent && resultEvent.usage) || {};
  const totals = {
    ms: wallMs,
    usage: {
      input_tokens: Number(usage.input_tokens) || 0,
      output_tokens: Number(usage.output_tokens) || 0,
      cache_read_input_tokens: Number(usage.cache_read_input_tokens) || 0,
    },
  };

  const evaluation = evaluate({ goal, steps, outcome, summary, gateClean });
  const tracePath = writeTrace(ctx.repoRoot, agent, {
    goal, model: model || null, mode: 'claude-native', startedAt: new Date(t0).toISOString(),
    steps, outcome, summary, gateClean, totals, evaluation,
    sessionId: resultEvent ? resultEvent.session_id : null,
    endedAt: new Date().toISOString(),
  });
  const lessonPath = appendLesson(ctx.repoRoot, { goal, agent, outcome, summary, gateClean });
  onEvent({ kind: 'done', outcome, summary, gateClean, tracePath, evaluation, totals, lessonPath });
  return { outcome, summary, gateClean, tracePath, steps, evaluation, totals, lessonPath };
}

// Fold the stream events into Forge-shaped steps: one step per assistant message, its
// tool_use blocks as actions, each action's ok resolved from the matching tool_result.
// Also derives the Directive #9 facts (any successful write_*? clean gate since?).
// Exported so the demotion logic is testable offline with synthetic events — the law's
// safety net must be provable without needing a live model to misbehave on cue.
export function interpret(events, onEvent = () => {}) {
  const steps = [];
  const byId = new Map(); // tool_use_id -> action record awaiting its result
  let gateClean = false, dirtyWrites = false, n = 0;
  let resultEvent = null;

  for (const ev of events) {
    if (ev.type === 'result') { resultEvent = ev; continue; }
    if (ev.type === 'assistant' && ev.message && Array.isArray(ev.message.content)) {
      n++;
      const step = { n, text: '', actions: [] };
      for (const b of ev.message.content) {
        if (b.type === 'text') step.text += (step.text ? '\n' : '') + b.text;
        else if (b.type === 'tool_use') {
          const name = String(b.name || '').replace(/^mcp__forge__/, '');
          const a = { name, input: b.input, ok: null, output: '' };
          step.actions.push(a);
          byId.set(b.id, a);
          onEvent({ kind: 'act', n, name, input: b.input });
        }
      }
      if (step.text) onEvent({ kind: 'plan', n, text: step.text });
      steps.push(step);
      continue;
    }
    if (ev.type === 'user' && ev.message && Array.isArray(ev.message.content)) {
      for (const b of ev.message.content) {
        if (b.type !== 'tool_result') continue;
        const a = byId.get(b.tool_use_id);
        if (!a) continue;
        a.ok = !b.is_error;
        a.output = clip(flatten(b.content), 2000);
        onEvent({ kind: 'observe', n: steps.length, name: a.name, ok: a.ok });
        if (a.name.startsWith('write_') && a.ok) { dirtyWrites = true; gateClean = false; }
        if (a.name === 'run_gate') gateClean = !!a.ok;
      }
    }
  }
  return { steps, gateClean, dirtyWrites, resultEvent };
}

function extractSummary(resultEvent, steps) {
  const raw = String(resultEvent.result || '').trim();
  const m = raw.match(/SUMMARY:\s*([\s\S]+)$/);
  if (m) return m[1].trim().slice(0, 500);
  if (raw) return raw.slice(0, 500);
  const last = [...steps].reverse().find((s) => s.text);
  return last ? last.text.slice(0, 500) : '';
}

function writeTrace(repoRoot, agent, data) {
  const dir = path.join(repoRoot, 'forge', 'runs');
  fs.mkdirSync(dir, { recursive: true });
  const ts = new Date().toISOString().replace(/:/g, '-');
  const slug = String(agent).replace(/[^a-zA-Z0-9._-]+/g, '-');
  const tracePath = path.join(dir, `${ts}-${slug}-native.json`);
  fs.writeFileSync(tracePath, JSON.stringify({ ...data, agent, tracePath: path.relative(repoRoot, tracePath).split(path.sep).join('/') }, null, 2));
  return tracePath;
}

function flatten(content) {
  if (typeof content === 'string') return content;
  if (!Array.isArray(content)) return '';
  return content.filter((c) => c.type === 'text').map((c) => c.text).join('\n');
}

function clip(s, max) {
  s = String(s || '');
  return s.length > max ? s.slice(0, max - 1) + '…' : s;
}
