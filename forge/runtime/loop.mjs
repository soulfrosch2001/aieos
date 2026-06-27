// Forge runtime — the engine. plan → act → observe → reflect as roles in ONE message
// stream (not four model calls). The code's only jobs: thread tool results back, enforce
// the guardrails the model can't self-enforce (gate-before-finish, step ceiling, stuck
// detection), keep the run robust and observable, and write an auditable, append-mostly
// trace under forge/runs/.
import fs from 'node:fs';
import path from 'node:path';
import { performance } from 'node:perf_hooks';
import { callModel, trimMessages } from './llm.mjs';
import { toolSchemas, runTool } from './tools.mjs';
import { makePlan, applyPlanUpdate, renderPlan } from './plan.mjs';
import { evaluate } from './eval.mjs';
import { appendLesson } from './memory.mjs';
import { delegate } from './subagent.mjs';

export async function runLoop({
  system, goal, ctx, model, dryRun, agent = 'agent',
  memoryBlock = '',
  depth = 0,
  maxSteps = Number(process.env.FORGE_MAX_STEPS) || 20,
  onEvent = () => {},
}) {
  // Memory & retrieval: the opening user turn carries the goal plus any retrieved memory,
  // so the agent starts already aware of relevant prior decisions and lessons.
  const opening = memoryBlock ? `${memoryBlock}\n\n---\n\n# Goal\n${goal}` : goal;
  const messages = [{ role: 'user', content: opening }];
  // The tool set depends on depth: the `delegate` schema is only advertised when sub-agents
  // are enabled AND there is depth budget left (see tools.subagentsEnabled).
  const tools = toolSchemas({ depth });
  const maxDepth = Number(process.env.FORGE_MAX_DEPTH) || 1;
  const steps = [];

  let gateClean = false;   // has run_gate passed since the last write?
  let dirtyWrites = false; // are there writes not yet cleared by a passing gate?
  let outcome = 'budget_exhausted';
  let summary = '';
  let plan = null;         // explicit checklist, persisted to trace.data.plan
  const totals = { ms: 0, usage: { input_tokens: 0, output_tokens: 0 } };

  const trace = openTrace(ctx.repoRoot, agent, { goal, model: model || null, dryRun: !!dryRun });
  let bareEndTurns = 0;            // consecutive assistant turns with no tool use
  let lastSig = null, sameCount = 0; // consecutive identical tool calls

  for (let n = 1; n <= maxSteps; n++) {
    // Trim before each call so long runs stay within context (never drops the first user
    // turn or the last tool result). No-op when under budget and under --dry-run anyway.
    const trimmed = trimMessages(messages);
    if (trimmed !== messages) { messages.length = 0; messages.push(...trimmed); }

    const t0 = performance.now();
    const { content, stop_reason, usage } = await callModel({ system, messages, tools, model, dryRun });
    const callMs = Math.round(performance.now() - t0);
    totals.ms += callMs;
    if (usage) {
      totals.usage.input_tokens += usage.input_tokens || 0;
      totals.usage.output_tokens += usage.output_tokens || 0;
    }
    messages.push({ role: 'assistant', content });

    const blocks = Array.isArray(content) ? content : [{ type: 'text', text: String(content ?? '') }];
    const text = blocks.filter((b) => b.type === 'text').map((b) => b.text).join('\n').trim();
    const toolUses = blocks.filter((b) => b.type === 'tool_use');

    if (text) onEvent({ kind: 'plan', n, text });

    const step = { n, text, actions: [], stop_reason, ms: callMs, usage: usage || null };

    // No tool use → a stall. Nudge once, then give up as incomplete.
    if (toolUses.length === 0) {
      if (stop_reason === 'end_turn' && ++bareEndTurns >= 2) {
        outcome = 'incomplete'; summary = text || 'Stopped: no tool use.';
        steps.push(step); appendStep(trace, step);
        break;
      }
      messages.push({ role: 'user', content: 'Use a tool to make progress, or call `finish`.' });
      steps.push(step); appendStep(trace, step);
      continue;
    }
    bareEndTurns = 0;

    const results = [];
    let stop = false;

    for (const tu of toolUses) {
      const sig = tu.name + ':' + JSON.stringify(tu.input || {});
      if (sig === lastSig) sameCount++; else { lastSig = sig; sameCount = 1; }

      // Planning tools are handled in-runtime: they mutate the plan and touch no files.
      if (tu.name === 'plan' || tu.name === 'update_plan') {
        plan = tu.name === 'plan' ? makePlan(tu.input || {}) : applyPlanUpdate(plan, tu.input || {});
        trace.data.plan = plan;
        const view = renderPlan(plan);
        results.push({ type: 'tool_result', tool_use_id: tu.id, content: view || 'plan updated', is_error: false });
        step.actions.push({ name: tu.name, input: tu.input, ok: true, output: view });
        onEvent({ kind: 'observe', n, name: tu.name, ok: true });
        continue;
      }

      // Sub-delegation: run a bounded child loop in-lane (same ctx/workspace, its own
      // trace + gate). Hard depth guardrail FIRST — if we are already at the cap, refuse
      // and return a tool_result, never recursing. A successful sub-run's writes leave the
      // workspace dirty, so we conservatively re-arm the gate requirement.
      if (tu.name === 'delegate') {
        if (depth >= maxDepth) {
          const msg = `GUARDRAIL: delegation depth cap reached (depth ${depth} ≥ ${maxDepth}). Do the work directly.`;
          results.push({ type: 'tool_result', tool_use_id: tu.id, content: msg, is_error: true });
          step.actions.push({ name: 'delegate', input: tu.input, ok: false, output: msg });
          onEvent({ kind: 'observe', n, name: 'delegate', ok: false });
          continue;
        }
        onEvent({ kind: 'act', n, name: 'delegate', input: tu.input });
        const td = performance.now();
        let dr;
        try {
          dr = await delegate({ task: (tu.input && tu.input.task) || '', ctx, model, dryRun, depth: depth + 1, system, agent });
        } catch (e) {
          dr = { output: 'GUARDRAIL/ERROR: ' + e.message, result: { outcome: 'error', gateClean: false } };
        }
        const subMs = Math.round(performance.now() - td);
        totals.ms += subMs;
        const subDone = dr.result && dr.result.outcome === 'done';
        // A sub-run that reached `done` has already satisfied its OWN gate-before-finish
        // guardrail (it shares this workspace), so it leaves nothing ungated for the parent.
        // We only re-arm the parent's gate requirement if the sub-run ended dirty: it wrote
        // but its gate was not clean (only possible when it did NOT reach a clean finish).
        const subWrote = dr.result && dr.result.steps
          ? dr.result.steps.some((s) => (s.actions || []).some((a) => a.name === 'write_file' && a.ok))
          : false;
        if (subWrote && !(dr.result && dr.result.gateClean)) { dirtyWrites = true; gateClean = false; }
        results.push({ type: 'tool_result', tool_use_id: tu.id, content: dr.output, is_error: !subDone });
        step.actions.push({ name: 'delegate', input: tu.input, ok: !!subDone, output: dr.output, ms: subMs });
        onEvent({ kind: 'observe', n, name: 'delegate', ok: !!subDone });
        continue;
      }

      if (tu.name === 'finish') {
        // Directive #9 — never finish on dirty writes without a passing gate since.
        if (dirtyWrites && !gateClean) {
          const msg = 'GUARDRAIL: Directive #9 — run_gate must pass since your last write before finishing.';
          results.push({ type: 'tool_result', tool_use_id: tu.id, content: msg, is_error: true });
          step.actions.push({ name: 'finish', input: tu.input, ok: false, output: msg });
          onEvent({ kind: 'observe', n, name: 'finish', ok: false });
          continue;
        }
        outcome = 'done';
        summary = (tu.input && tu.input.summary) || '';
        step.actions.push({ name: 'finish', input: tu.input, ok: true, output: summary });
        onEvent({ kind: 'act', n, name: 'finish', ok: true });
        stop = true;
        break;
      }

      onEvent({ kind: 'act', n, name: tu.name, input: tu.input });
      const ta = performance.now();
      const r = await runTool(tu.name, tu.input || {}, ctx);
      const toolMs = Math.round(performance.now() - ta);
      totals.ms += toolMs;

      if (tu.name === 'write_file' && r.ok) { dirtyWrites = true; gateClean = false; }
      if (tu.name === 'run_gate') gateClean = r.ok; // a failing gate is an observation, not a stop

      results.push({ type: 'tool_result', tool_use_id: tu.id, content: r.output ?? '', is_error: !r.ok });
      step.actions.push({ name: tu.name, input: tu.input, ok: r.ok, output: r.output ?? '', ms: toolMs });
      onEvent({ kind: 'observe', n, name: tu.name, ok: r.ok });
    }

    steps.push(step); appendStep(trace, step);

    if (stop) break;

    // Thread observations back as the next user turn; reflection is the model's next text.
    // If there is an active plan, echo it so the model always sees its own intent.
    if (results.length) {
      const planView = plan ? renderPlan(plan) : '';
      if (planView && !results.some((r) => String(r.content).startsWith('Current plan:'))) {
        results.push({ type: 'text', text: '\n' + planView });
      }
      messages.push({ role: 'user', content: results });
    }

    // Stuck: the same exact tool call 3× in a row gets us nowhere.
    if (sameCount >= 3) {
      outcome = 'stuck';
      summary = 'Stopped: repeated the same action ' + sameCount + ' times.';
      break;
    }
  }

  // Structural self-check (advisory, deterministic, model-free) before closing the trace.
  const evaluation = evaluate({ goal, steps, outcome, summary, gateClean });
  onEvent({ kind: 'eval', evaluation });

  // Memory: a successful run leaves a dated lesson behind (trusted-runtime write).
  let lessonPath = null;
  if (outcome === 'done') {
    lessonPath = appendLesson(ctx.repoRoot, { goal, agent, outcome, summary, gateClean });
  }

  const record = closeTrace(trace, { steps, outcome, summary, gateClean, plan, totals, evaluation });
  onEvent({ kind: 'done', outcome, summary, gateClean, tracePath: record.tracePath, evaluation, totals, lessonPath });
  return { outcome, summary, gateClean, tracePath: record.tracePath, steps, evaluation, totals, plan, lessonPath };
}

// ---- Trace: append-mostly JSON under forge/runs/ (Directive #8). Written incrementally
// so a crash still leaves evidence on disk.
function openTrace(repoRoot, agent, head) {
  const dir = path.join(repoRoot, 'forge', 'runs');
  fs.mkdirSync(dir, { recursive: true });
  const ts = new Date().toISOString().replace(/:/g, '-');
  // Agent names can contain '/' (e.g. a sub-run's "parent/sub"); flatten to a safe slug so
  // the trace filename never spills into a non-existent subdirectory.
  const slug = String(agent).replace(/[^a-zA-Z0-9._-]+/g, '-');
  const tracePath = path.join(dir, `${ts}-${slug}.json`);
  const data = { ...head, agent, startedAt: new Date().toISOString(), steps: [], outcome: 'running', tracePath: rel(repoRoot, tracePath) };
  fs.writeFileSync(tracePath, JSON.stringify(data, null, 2));
  return { repoRoot, tracePath, data };
}

function appendStep(trace, step) {
  trace.data.steps.push(step);
  try { fs.writeFileSync(trace.tracePath, JSON.stringify(trace.data, null, 2)); } catch { /* best-effort */ }
}

function closeTrace(trace, { steps, outcome, summary, gateClean, plan, totals, evaluation }) {
  trace.data.steps = steps;
  trace.data.outcome = outcome;
  trace.data.summary = summary;
  trace.data.gateClean = gateClean;
  if (plan) trace.data.plan = plan;
  trace.data.totals = totals;
  trace.data.evaluation = evaluation;
  trace.data.endedAt = new Date().toISOString();
  fs.writeFileSync(trace.tracePath, JSON.stringify(trace.data, null, 2));
  return { tracePath: trace.tracePath };
}

function rel(root, p) {
  return path.relative(root, p).split(path.sep).join('/');
}
