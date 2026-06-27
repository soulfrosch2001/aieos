// Forge runtime — in-lane sub-delegation. A bounded, recursive helper that lets an agent
// decompose a task into a sub-run with its OWN trace + gate, WITHOUT ever leaving the lane:
// same company, same workspace, same write-confinement (ctx is passed through unchanged),
// same gate. It is fenced two ways — OFF unless FORGE_SUBAGENTS=on (enforced where the tool
// schema is advertised) and hard-capped by depth (enforced in loop.mjs before this runs) —
// so default runs are byte-identical and recursion can never blow up.
//
// Model-agnostic and dry-run-safe: it only calls runLoop, which already stubs every
// model-dependent path under --dry-run. No new deps; Node built-ins only.
import { runLoop } from './loop.mjs';

// Run a child loop for `task`. Returns a compact tool_result-ready summary string plus the
// structured result. `depth` is the CHILD's depth (parent depth + 1); the caller is
// responsible for the depth-cap guardrail before invoking this.
export async function delegate({ task, ctx, model, dryRun, depth = 1, system, agent = 'agent' }) {
  const childAgent = `${agent}/sub`;
  // Sub-runs are deliberately short: a sub-task that needs 20 steps is not a sub-task.
  const maxSteps = Math.min(Number(process.env.FORGE_SUB_MAX_STEPS) || 6, 6);

  const res = await runLoop({
    system,
    goal: String(task || '').trim() || 'No sub-task provided.',
    ctx,            // same workspace + repoRoot → confinement preserved
    model,
    dryRun,
    agent: childAgent,
    depth,          // threaded so the child's own delegate calls hit the cap
    maxSteps,
    onEvent: () => {}, // the child writes its own trace; the parent stays quiet
  });

  const line = `sub-run [${childAgent}] → ${res.outcome}` +
    (res.summary ? `: ${res.summary}` : '') +
    ` (gate ${res.gateClean ? 'clean' : 'not clean'}; trace ${res.tracePath})`;

  return { output: line, result: res };
}
