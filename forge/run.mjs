#!/usr/bin/env node
// Forge runtime CLI — load an agent from its 5 contract files into a system prompt and
// run the plan→act→observe→reflect loop until it finishes.
//
//   node forge/run.mjs <agent-dir> "<goal>" [--dry-run] [--max-steps N] [--json]
//
// Model-agnostic: the model id comes ONLY from FORGE_MODEL. A live run (no --dry-run)
// with FORGE_MODEL unset errors clearly. --dry-run needs no model and no API key.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { runLoop } from './runtime/loop.mjs';
import { buildMemoryBlock } from './runtime/memory.mjs';
import { buildResumeContext } from './runtime/resume.mjs';
import { formatVerdict } from './runtime/eval.mjs';
import { preflight, maxTokens } from './runtime/llm.mjs';
import { checkHarmLaw } from './runtime/integrity.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..'); // forge/ → repo root

// Directive #11 integrity preflight. Runs FIRST, before any arg parsing, so it gates
// EVERY mode (--dry-run, --smoke, --json) and even malformed args. NON-DESTRUCTIVE: on
// failure it writes to stderr and exits — it never deletes, modifies, or exfiltrates
// anything (that would itself violate the directive it protects). When the law is intact
// it falls through and the normal run (including --dry-run) proceeds unchanged.
const harm = checkHarmLaw(repoRoot);
if (!harm.ok) {
  process.stderr.write('forge: refusing to run — Directive #11 (do no harm) integrity check failed: ' + harm.reason + '\n');
  process.stderr.write('forge: restore kernel/laws/harm-prevention.md and Directive #11 in prime-directives.md, then re-run. Nothing was modified.\n');
  process.exit(5);
}

let parsed;
try {
  parsed = parseArgs({
    allowPositionals: true,
    options: {
      'dry-run': { type: 'boolean', default: false },
      'max-steps': { type: 'string' },
      'max-tokens': { type: 'string' },
      smoke: { type: 'boolean', default: false },
      json: { type: 'boolean', default: false },
      resume: { type: 'string' },
    },
  });
} catch (e) {
  usage(e.message); process.exit(2);
}

const flags = parsed.values;

// --max-tokens is sugar for FORGE_MAX_TOKENS so the ceiling can be set inline; the runtime
// reads it back via the env (single source of truth, model-agnostic).
if (flags['max-tokens']) process.env.FORGE_MAX_TOKENS = String(flags['max-tokens']);

// --smoke: a trivial, capped, offline-friendly end-to-end run that needs no positionals.
// It supplies a default agent + goal and a tight step cap so it proves the loop fast.
const SMOKE_AGENT = 'forge/examples/balance-scout';
const SMOKE_GOAL = 'Smoke test: list the repo and finish.';

let [agentDir, goal] = parsed.positionals;
if (flags.smoke) {
  agentDir = agentDir || SMOKE_AGENT;
  goal = goal || SMOKE_GOAL;
  if (!flags['max-steps']) flags['max-steps'] = '4';
}

if (!agentDir || !goal) { usage('missing <agent-dir> or "<goal>"'); process.exit(2); }

const dryRun = flags['dry-run'];
const model = process.env.FORGE_MODEL;
// FORGE_MODEL is only mandatory when the API path is certain (a key is present and no
// other backend was forced). The claude-cli backend — forced or auto-selected on keyless
// machines — needs no model id: the CLI's own default (or the router's per-step --model)
// covers it, on subscription auth. Keyless with no CLI still stubs, which needs no model
// either; preflight reports which mode actually resolved.
if (!dryRun && !model && process.env.ANTHROPIC_API_KEY && process.env.FORGE_BACKEND !== 'claude-cli') {
  process.stderr.write('FORGE_MODEL is not set — export FORGE_MODEL=<model-id>, set FORGE_BACKEND=claude-cli, or pass --dry-run\n');
  process.exit(3);
}

const maxSteps = flags['max-steps'] ? Number(flags['max-steps']) : undefined;

const CONTRACT_FILES = ['README.md', 'responsibilities.md', 'authority.md', 'craft.md', 'standards.md'];

const PREAMBLE = `You are an AIEOS agent running inside the Forge runtime. You act by calling tools in a
plan → act → observe → reflect loop until the goal is met, then you call \`finish\`.

Operating rules (Kernel Directives):
- Stay in your lane (Directive #2): only do work this agent owns. Read anywhere in the
  repo, but write ONLY inside your workspace via \`write_file\`.
- Never cross company lines (Directive #5): the runtime physically confines your writes
  to your own workspace folder. Treat a GUARDRAIL refusal as a signal to self-correct.
- Never skip the gate (Directive #9): if you wrote any file, you MUST call \`run_gate\`
  and see it pass before you call \`finish\`. A failing gate is information — read it, fix,
  and re-run; do not finish on a dirty, ungated change.

Tools: list_dir, read_file, write_file (workspace only), run_gate, finish.

Work in small steps. Each turn: briefly state your plan/reflection as text, then call the
tools that advance the goal. When the goal is satisfied, call \`finish\` with a short
summary that ends with a one-line self-check of whether the goal was actually met.`;

// ---- Load the agent: 5 contract files → one labeled system prompt.
const agentAbs = path.resolve(repoRoot, agentDir);
const agentName = path.basename(agentAbs);
let system;
try {
  system = loadAgent(agentAbs);
} catch (e) {
  process.stderr.write('Cannot load agent: ' + e.message + '\n');
  process.exit(4);
}

// ---- Lane (Directive #5): workspace derives from the agent's OWN folder, never input.
const workspace = path.join(agentAbs, 'workspace');
fs.mkdirSync(workspace, { recursive: true });
const ctx = { repoRoot, workspace };

// ---- Resume (long-horizon runs across process boundaries): --resume <tracePath> reads a
// PRIOR trace and folds its plan/progress/last-reflection into this fresh run's opening turn
// (see runtime/resume.mjs), so a goal too big for one budget_exhausted run can be carried
// forward by re-invoking the CLI with the same agent + goal. Read eagerly (not inside run())
// so a bad path fails fast, before spending a preflight call.
let resumeContext = '';
let resumeTrace = null;
if (flags.resume) {
  const tracePath = path.isAbsolute(flags.resume) ? flags.resume : path.resolve(repoRoot, flags.resume);
  try {
    resumeTrace = JSON.parse(fs.readFileSync(tracePath, 'utf8'));
  } catch (e) {
    process.stderr.write('forge: cannot read --resume trace at ' + tracePath + ': ' + e.message + '\n');
    process.exit(6);
  }
  resumeContext = buildResumeContext(resumeTrace);
}

run();

async function run() {
  const json = flags.json;

  // Startup banner + preflight: echo the run's configuration and verify it can reach a
  // model BEFORE spending a turn. Stubbed offline (dry-run / no key) so --smoke needs no
  // model. A failed live preflight aborts with a clear reason instead of erroring mid-loop.
  // Suppressed under --json so machine-readable output stays a single JSON document.
  const pf = await preflight({ model, dryRun });
  if (!json) {
    process.stdout.write(
      `forge: agent=${agentName} model=${model || '(none)'} mode=${pf.mode} ` +
      `max-steps=${maxSteps ?? (Number(process.env.FORGE_MAX_STEPS) || 20)} ` +
      `max-tokens=${maxTokens()} memory=${process.env.FORGE_MEMORY === 'off' ? 'off' : 'on'} ` +
      `subagents=${process.env.FORGE_SUBAGENTS === 'on' ? 'on' : 'off'}\n` +
      `forge: preflight ${pf.ok ? 'ok' : 'FAILED'} — ${pf.reason}\n`
    );
    if (resumeTrace) {
      process.stdout.write(`forge: resuming from ${flags.resume} (prior outcome: ${resumeTrace.outcome})\n`);
    }
  }
  if (!pf.ok) { process.stderr.write('forge: aborting — ' + pf.reason + '\n'); process.exit(3); }

  // Memory & retrieval: gather durable project memory, score it against the goal, and
  // inject the top matches. Pure file I/O — needs no model, runs under --dry-run, and is
  // disabled by FORGE_MEMORY=off. Failure here must never block the run.
  let memoryBlock = '';
  try { memoryBlock = buildMemoryBlock(repoRoot, goal); } catch { memoryBlock = ''; }

  const res = await runLoop({
    system, goal, ctx, model, dryRun, agent: agentName, maxSteps, memoryBlock, resumeContext,
    onEvent: json ? () => {} : render,
  });

  if (json) {
    const trace = JSON.parse(fs.readFileSync(res.tracePath, 'utf8'));
    process.stdout.write(JSON.stringify(trace, null, 2) + '\n');
  } else {
    process.stdout.write('\n— outcome: ' + res.outcome + '\n');
    process.stdout.write('  gate clean: ' + res.gateClean + '\n');
    if (res.evaluation) process.stdout.write('  verdict: ' + formatVerdict(res.evaluation) + '\n');
    if (res.totals) process.stdout.write('  totals: ' + res.totals.ms + 'ms, ' +
      res.totals.usage.input_tokens + ' in / ' + res.totals.usage.output_tokens + ' out tok\n');
    if (res.summary) process.stdout.write('  summary: ' + res.summary + '\n');
    process.stdout.write('  trace: ' + path.relative(repoRoot, res.tracePath).split(path.sep).join('/') + '\n');
  }
  process.exit(res.outcome === 'done' ? 0 : 1);
}

function render(ev) {
  if (ev.kind === 'plan') process.stdout.write(`[${ev.n}] plan: ${ev.text.split('\n')[0]}\n`);
  if (ev.kind === 'act' && ev.name) process.stdout.write(`[${ev.n}] act ${ev.name}${ev.input ? ' ' + compact(ev.input) : ''}\n`);
  if (ev.kind === 'observe') process.stdout.write(`[${ev.n}] observe ${ev.name} → ${ev.ok ? 'ok' : 'error'}\n`);
}

function compact(input) {
  const s = JSON.stringify(input);
  return s.length > 80 ? s.slice(0, 77) + '...' : s;
}

function loadAgent(dir) {
  if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) throw new Error('not a directory: ' + dir);
  const parts = [PREAMBLE];
  for (const f of CONTRACT_FILES) {
    const p = path.join(dir, f);
    if (!fs.existsSync(p)) throw new Error('missing contract file: ' + f);
    parts.push(`## ${f}\n\n` + fs.readFileSync(p, 'utf8').trim());
  }
  return parts.join('\n\n---\n\n');
}

function usage(msg) {
  if (msg) process.stderr.write('forge/run.mjs: ' + msg + '\n');
  process.stderr.write('Usage: node forge/run.mjs <agent-dir> "<goal>" [--dry-run] [--max-steps N] [--max-tokens N] [--json] [--resume <tracePath>]\n');
  process.stderr.write('       node forge/run.mjs --smoke [--dry-run]   (trivial capped end-to-end run; defaults agent + goal)\n');
  process.stderr.write('       --resume points at a prior forge/runs/*.json trace; use the SAME <agent-dir> and "<goal>" as the run being resumed.\n');
}
