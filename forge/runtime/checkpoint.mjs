// Forge runtime — periodic self-verification. eval.mjs produces a single verdict AFTER the
// loop ends; this fires DURING a run, every FORGE_CHECKPOINT_INTERVAL steps, so a long run
// checks its own progress against evidence instead of only reflecting at the very end —
// closing the "continuous self-verification" gap relative to Fable-5-style long-horizon
// runs. Pure — reads only state the loop already tracks (no model call, no I/O), so it is
// free and runs identically under --dry-run. Advisory only: it never gates anything, it
// only injects a progress note the model sees on its next turn (same channel the plan
// checklist is already echoed through).

export function checkpointInterval() {
  const n = Number(process.env.FORGE_CHECKPOINT_INTERVAL);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 5; // default: every 5 steps
}

// Returns null when no checkpoint is due at step `n`, else a compact report object with a
// `text` field ready to inject as an observation.
export function maybeCheckpoint({ n, interval, plan, dirtyWrites, gateClean, totals }) {
  if (!Number.isInteger(n) || n <= 0 || n % interval !== 0) return null;

  const steps = plan && Array.isArray(plan.steps) ? plan.steps : [];
  const done = steps.filter((s) => s.status === 'done').length;
  const pending = steps.filter((s) => s.status === 'pending').length;
  const dropped = steps.filter((s) => s.status === 'dropped').length;
  const planLine = steps.length
    ? `${done}/${steps.length} plan step(s) done, ${pending} pending${dropped ? `, ${dropped} dropped` : ''}`
    : 'no explicit plan recorded';

  // Mirrors the exact finish-blocking condition in loop.mjs (Directive #9), so the note
  // never contradicts what `finish` will actually enforce.
  const gateLine = !dirtyWrites
    ? 'no writes yet'
    : gateClean
    ? 'writes so far are verified by a clean gate'
    : 'unverified writes pending — run_gate before finishing';

  const text = `[checkpoint @ step ${n}] ${planLine}. ${gateLine}. ` +
    'Ground any progress claim you make against this — do not report done work you have not verified.';

  return { n, planLine, gateLine, elapsedMs: totals ? totals.ms : 0, text };
}
