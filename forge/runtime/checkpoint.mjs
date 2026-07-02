// Forge runtime — periodic self-verification. eval.mjs produces a single verdict AFTER the
// loop ends; this fires DURING a run, every FORGE_CHECKPOINT_INTERVAL steps, so a long run
// checks its own progress against evidence instead of only reflecting at the very end —
// closing the "continuous self-verification" gap relative to Fable-5-style long-horizon
// runs. Pure — reads only state the loop already tracks (no model call, no I/O), so it is
// free and runs identically under --dry-run. Advisory only: it never gates anything, it
// only injects a progress note the model sees on its next turn (same channel the plan
// checklist is already echoed through).
//
// Stagnation detection: comparing this checkpoint's progress snapshot to the PREVIOUS one
// (planDone count if a plan exists, else writeActionCount) tells the loop whether the run
// is actually moving. loop.mjs feeds a true `stagnant` verdict into the cost router as an
// eval failure — the same escalation seam a failed gate already uses — so a run that has
// stopped making progress automatically gets a stronger model on its NEXT step, instead of
// only escalating when a gate explicitly fails. This is real signal, not decoration: it is
// the router's own `lastEvalFailed` input, which existed in router.mjs from the start but
// had nothing wiring it until now.

export function checkpointInterval() {
  const n = Number(process.env.FORGE_CHECKPOINT_INTERVAL);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 5; // default: every 5 steps
}

// Returns null when no checkpoint is due at step `n`, else a compact report object with a
// `text` field ready to inject as an observation, a `stagnant` verdict, and `snapshot` (pass
// back in as `prevSnapshot` on the NEXT call so stagnation can be judged against it).
export function maybeCheckpoint({ n, interval, plan, dirtyWrites, gateClean, totals, writeActionCount = 0, prevSnapshot = null }) {
  if (!Number.isInteger(n) || n <= 0 || n % interval !== 0) return null;

  const steps = plan && Array.isArray(plan.steps) ? plan.steps : [];
  const done = steps.filter((s) => s.status === 'done').length;
  const pending = steps.filter((s) => s.status === 'pending').length;
  const dropped = steps.filter((s) => s.status === 'dropped').length;
  const hasPlan = steps.length > 0;
  const planLine = hasPlan
    ? `${done}/${steps.length} plan step(s) done, ${pending} pending${dropped ? `, ${dropped} dropped` : ''}`
    : 'no explicit plan recorded';

  // Mirrors the exact finish-blocking condition in loop.mjs (Directive #9), so the note
  // never contradicts what `finish` will actually enforce.
  const gateLine = !dirtyWrites
    ? 'no writes yet'
    : gateClean
    ? 'writes so far are verified by a clean gate'
    : 'unverified writes pending — run_gate before finishing';

  // Judge progress by plan completion when a plan exists (the more precise signal); fall
  // back to write activity when there is none. Only meaningful once there IS a previous
  // snapshot to compare against — the first checkpoint of a run is never stagnant.
  const snapshot = { done, writeActionCount };
  const stagnant = !!prevSnapshot && (hasPlan
    ? prevSnapshot.done === done
    : prevSnapshot.writeActionCount === writeActionCount);

  const stagnantLine = stagnant
    ? ` No measurable progress since the last checkpoint (${interval} steps ago) — ` +
      'the current approach may not be working; consider a different angle before repeating it.'
    : '';

  const text = `[checkpoint @ step ${n}] ${planLine}. ${gateLine}.${stagnantLine} ` +
    'Ground any progress claim you make against this — do not report done work you have not verified.';

  return { n, planLine, gateLine, stagnant, snapshot, elapsedMs: totals ? totals.ms : 0, text };
}
