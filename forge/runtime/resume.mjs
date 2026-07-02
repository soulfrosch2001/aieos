// Forge runtime — resume context. A long-horizon Fable-5-style run doesn't have to happen
// inside one continuous process to FEEL continuous: given a prior run's trace (typically one
// that ended budget_exhausted or stuck), this builds a text block summarizing exactly what
// happened, so a NEW runLoop invocation picks up aware of it instead of starting blind. Pure
// — reads only the trace object already on disk; no model, no network, no I/O of its own.

// `trace` is the parsed JSON written by loop.mjs (openTrace/appendStep/closeTrace).
export function buildResumeContext(trace) {
  const lines = [`RESUMING a prior run that ended as "${trace.outcome}".`];
  if (trace.summary) lines.push(`Prior closing note: ${trace.summary}`);

  const stepCount = Array.isArray(trace.steps) ? trace.steps.length : 0;
  lines.push(`The prior attempt took ${stepCount} step(s); its gate was ` +
    `${trace.gateClean ? 'clean' : 'NOT clean'} at that point.`);

  if (trace.plan && Array.isArray(trace.plan.steps) && trace.plan.steps.length) {
    lines.push('Prior plan (pick up from the first unchecked item — do not repeat done work):');
    trace.plan.steps.forEach((s, i) => {
      const box = s.status === 'done' ? '[x]' : s.status === 'dropped' ? '[~]' : '[ ]';
      lines.push(`${i + 1}. ${box} ${s.text}`);
    });
  }

  // A short window into HOW it ended, not just that it ended — the model's own last few
  // reflections carry texture a bare outcome string doesn't (where it was stuck, what it
  // had just tried).
  const steps = Array.isArray(trace.steps) ? trace.steps : [];
  const tail = steps.slice(-3).filter((s) => s.text);
  if (tail.length) {
    lines.push('Last reflection(s) from the prior attempt:');
    for (const s of tail) lines.push(`- (step ${s.n}) ${s.text.split('\n')[0]}`);
  }

  if (trace.checkpoints && trace.checkpoints.length) {
    const last = trace.checkpoints[trace.checkpoints.length - 1];
    if (last.stagnant) lines.push('Note: the prior attempt was flagged as stalled (no measurable progress) near the end — consider a different approach than whatever it was doing.');
  }

  lines.push('Continue the work. Verify current state before assuming anything the prior attempt claimed; it may be incomplete or wrong.');
  return lines.join('\n');
}
