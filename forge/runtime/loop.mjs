// Forge runtime — the engine. plan → act → observe → reflect as roles in ONE message
// stream (not four model calls). The code's only jobs: thread tool results back, enforce
// the guardrails the model can't self-enforce (gate-before-finish, step ceiling, stuck
// detection), keep the run robust and observable, and write an auditable, append-mostly
// trace under forge/runs/.
import fs from 'node:fs';
import path from 'node:path';
import { performance } from 'node:perf_hooks';
import { callModel, trimMessages } from './llm.mjs';
import { tiersFromEnv, choose, maxEscalations } from './router.mjs';
import { toolSchemas, runTool, subagentsEnabled } from './tools.mjs';
import { makePlan, applyPlanUpdate, renderPlan } from './plan.mjs';
import { evaluate } from './eval.mjs';
import { appendLesson } from './memory.mjs';
import { delegate } from './subagent.mjs';
import { checkpointInterval, maybeCheckpoint } from './checkpoint.mjs';

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

  // Cost router: resolve the tier ladder once from the environment. With only FORGE_MODEL
  // set, all three tiers collapse to it and routing is a no-op (byte-identical behaviour).
  // `escalated` is monotonic — a failed gate climbs the ladder and the run never drops back.
  const tiers = tiersFromEnv();
  const escCap = maxEscalations();
  let escalated = 0, lastGateFailed = false, lastEvalFailed = false;

  // Continuous self-verification: every `ckptInterval` steps, inject a free, deterministic
  // progress note (see checkpoint.mjs) instead of only reflecting once at the very end.
  const ckptInterval = checkpointInterval();
  const checkpoints = [];

  for (let n = 1; n <= maxSteps; n++) {
    // Trim before each call so long runs stay within context (never drops the first user
    // turn or the last tool result). No-op when under budget and under --dry-run anyway.
    const trimmed = trimMessages(messages);
    if (trimmed !== messages) { messages.length = 0; messages.push(...trimmed); }

    // Route this step to a tier BEFORE the call. The decision is computed and logged even
    // under --dry-run (where the stub ignores the model), which is how the routing logic is
    // proven offline. `chosenModel` falls back to the run-level `model` when no tiers are
    // configured, preserving today's behaviour exactly.
    const { tier, model: chosenModel } = choose(tiers, {
      stepIndex: n, escalated, lastGateFailed, lastEvalFailed,
    });
    const stepModel = chosenModel || model;

    const t0 = performance.now();
    const { content, stop_reason, usage } = await callModel({ system, messages, tools, model: stepModel, dryRun });
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
    // Always stamp the routed TIER — it is a policy label (cheap/mid/strong), not a model id,
    // so it is model-agnostic and proves the routing decision offline under --dry-run. The
    // concrete model id is stamped only when the ladder actually resolved one (FORGE_MODEL set),
    // so a keyless dry-run records the decision without inventing a model id.
    step.tier = tier;
    if (stepModel) step.model = stepModel;

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

    // One delegate call resolved to a plain result object — no shared-state mutation inside,
    // so it is safe to run several of these concurrently via Promise.all. Guardrails checked
    // FIRST and synchronously, exactly as before: a disabled-feature or over-cap call is
    // refused immediately and never reaches the async `delegate()` call. Defense in depth:
    // `subagentsEnabled` re-checks FORGE_SUBAGENTS here too, not just at schema-advertisement
    // time (tools.mjs) — a delegate tool_use should never arrive when the flag is off, but
    // the guardrail must not rely solely on the model having respected what it was offered.
    async function resolveDelegate(tu) {
      if (!subagentsEnabled(depth)) {
        const msg = depth >= maxDepth
          ? `GUARDRAIL: delegation depth cap reached (depth ${depth} ≥ ${maxDepth}). Do the work directly.`
          : 'GUARDRAIL: delegation is disabled (set FORGE_SUBAGENTS=on to enable).';
        return { tu, ok: false, output: msg, subMs: 0, subWrote: false, subGateClean: true };
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
      const subDone = dr.result && dr.result.outcome === 'done';
      const subWrote = dr.result && dr.result.steps
        ? dr.result.steps.some((s) => (s.actions || []).some((a) => a.name === 'write_file' && a.ok))
        : false;
      return { tu, ok: subDone, output: dr.output, subMs, subWrote, subGateClean: !!(dr.result && dr.result.gateClean) };
    }

    // Apply one resolved delegate result to the shared step/trace state, in the SAME shape
    // as the original inline handling (dirtyWrites/gateClean, results[], step.actions[],
    // onEvent 'observe', and totals.ms). Called once per delegate call, either right after
    // Promise.all (parallel fan-out) or inline (the single-call sequential path) — the state
    // mutation itself is always synchronous, so concurrent async work never races here.
    function applyDelegateResult(r) {
      handledIds.add(r.tu.id);
      totals.ms += r.subMs;
      if (r.subWrote && !r.subGateClean) { dirtyWrites = true; gateClean = false; }
      results.push({ type: 'tool_result', tool_use_id: r.tu.id, content: r.output, is_error: !r.ok });
      step.actions.push({ name: 'delegate', input: r.tu.input, ok: r.ok, output: r.output, ms: r.subMs });
      onEvent({ kind: 'observe', n, name: 'delegate', ok: r.ok });
    }

    // Async fan-out: when the model requests TWO OR MORE `delegate` calls in the SAME turn,
    // dispatch them concurrently (Promise.all) instead of one-at-a-time — independent
    // sub-tasks no longer wait on each other's wall-clock time. This is the runtime's answer
    // to "async sub-agent delegation": a single turn can spawn several ongoing sub-runs at
    // once. With 0 or 1 delegate calls the behavior is BYTE-IDENTICAL to before (falls
    // through to the sequential branch below) — this is purely additive, same as the router.
    const delegateCalls = toolUses.filter((tu) => tu.name === 'delegate');
    const handledIds = new Set();
    if (delegateCalls.length > 1) {
      const settled = await Promise.all(delegateCalls.map((tu) => resolveDelegate(tu)));
      for (const r of settled) applyDelegateResult(r);
    }

    for (const tu of toolUses) {
      if (handledIds.has(tu.id)) continue; // already resolved by the parallel fan-out above

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

      // Sub-delegation (single call this turn — the common case): run a bounded child loop
      // in-lane (same ctx/workspace, its own trace + gate), sequentially as before.
      if (tu.name === 'delegate') {
        const r = await resolveDelegate(tu);
        applyDelegateResult(r);
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
      if (tu.name === 'run_gate') {
        gateClean = r.ok; // a failing gate is an observation, not a stop
        // Escalation seam: a failed gate climbs the tier ladder, so the NEXT iteration
        // re-routes up (cheap → strong) — retry-with-a-stronger-model, capped by escCap.
        if (!r.ok) { lastGateFailed = true; if (escalated < escCap) escalated++; }
        else { lastGateFailed = false; }
      }

      results.push({ type: 'tool_result', tool_use_id: tu.id, content: r.output ?? '', is_error: !r.ok });
      step.actions.push({ name: tu.name, input: tu.input, ok: r.ok, output: r.output ?? '', ms: toolMs });
      onEvent({ kind: 'observe', n, name: tu.name, ok: r.ok });
    }

    // Continuous self-verification (advisory, deterministic, model-free): due only every
    // `ckptInterval` steps, and only while the run is still going (never on the step that
    // just called `finish`) — a mid-run progress note, not a second post-hoc verdict.
    const ckpt = stop ? null : maybeCheckpoint({ n, interval: ckptInterval, plan, dirtyWrites, gateClean, totals });
    if (ckpt) { step.checkpoint = ckpt; checkpoints.push(ckpt); onEvent({ kind: 'checkpoint', n, text: ckpt.text }); }

    steps.push(step); appendStep(trace, step);

    if (stop) break;

    // Thread observations back as the next user turn; reflection is the model's next text.
    // If there is an active plan, echo it so the model always sees its own intent.
    if (results.length) {
      const planView = plan ? renderPlan(plan) : '';
      if (planView && !results.some((r) => String(r.content).startsWith('Current plan:'))) {
        results.push({ type: 'text', text: '\n' + planView });
      }
      if (ckpt) results.push({ type: 'text', text: '\n' + ckpt.text });
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

  // Memory (state digest): EVERY run leaves a dated lesson behind, not just wins — a
  // stuck/incomplete run's working set survives into the next run's rehydration so
  // mid-run findings are not lost (owned-memory v1, layer B). appendLesson marks the row
  // `firm` only when the gate is clean, otherwise `tentative`, so non-`done` outcomes are
  // recorded as provisional. For a non-`done` outcome we synthesize a short digest from the
  // evaluation when the run left no summary, so the row still carries signal. Trusted-runtime
  // write (never via write_file), so the workspace guardrail is never relaxed.
  const digestSummary = summary || (outcome === 'done'
    ? ''
    : `${outcome}: ${(evaluation && evaluation.notes && evaluation.notes[0]) || 'no closing summary'}`);
  const lessonPath = appendLesson(ctx.repoRoot, { goal, agent, outcome, summary: digestSummary, gateClean });

  const record = closeTrace(trace, { steps, outcome, summary, gateClean, plan, totals, evaluation, checkpoints });
  onEvent({ kind: 'done', outcome, summary, gateClean, tracePath: record.tracePath, evaluation, totals, lessonPath });
  return { outcome, summary, gateClean, tracePath: record.tracePath, steps, evaluation, totals, plan, lessonPath, checkpoints };
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

function closeTrace(trace, { steps, outcome, summary, gateClean, plan, totals, evaluation, checkpoints }) {
  trace.data.steps = steps;
  trace.data.outcome = outcome;
  trace.data.summary = summary;
  trace.data.gateClean = gateClean;
  if (plan) trace.data.plan = plan;
  trace.data.totals = totals;
  trace.data.evaluation = evaluation;
  if (checkpoints && checkpoints.length) trace.data.checkpoints = checkpoints;
  trace.data.endedAt = new Date().toISOString();
  fs.writeFileSync(trace.tracePath, JSON.stringify(trace.data, null, 2));
  return { tracePath: trace.tracePath };
}

function rel(root, p) {
  return path.relative(root, p).split(path.sep).join('/');
}
