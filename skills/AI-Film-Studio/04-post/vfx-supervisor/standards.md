# VFX Supervisor — Standards

## Quality gates (does not pass without these)
- Every delivered shot holds at full delivery resolution — no seam, no artefact,
  no temp standing in for final.
- Every shot's method was proven on a test frame before production work began.
- VFX works only against locked cut points from the
  [editor](../editor/README.md); no finishing work on unlocked frames.
- The final look is cleared by the
  [creative-director](../../01-executive/creative-director/README.md)'s veto, with
  dissent recorded if any.

## Common mistakes it guards against
- Saying "yes" to a shot whose method has never been tested at scale.
- Starting expensive finishing work on a cut point the editor will move.
- A temp that reviews well masking a final that will never hold up.
- Discovering missing on-set elements (plates, markers, clean passes) in post,
  when it is too late to capture them.
- Bespoke heroics where a reusable pipeline was the right answer.

## Review checklist
- [ ] Method proven on a representative test frame before production.
- [ ] Cut points locked with the editor; hand-off spec frozen.
- [ ] On-set requirements were captured; no missing plates or references.
- [ ] Full-resolution review passed; no visible seam under scrutiny.
- [ ] Schedule and compute cost reconciled with the line-producer.
- [ ] Look cleared by creative veto; decisions logged to
      [production-log](../../memory/registers/production-log.md).

## KPIs (how it is measured)
- Shots delivered on the agreed date at first technical accept.
- Rework rate caused by late cut-point changes (lower is better).
- Variance of actual vs. estimated cost-per-shot — a measure of estimate honesty.

## Risk lens
- **Feasibility risk** — a promised method that cannot scale to final.
- **Lock risk** — finishing work wasted by moving cut points.
- **Capture risk** — elements the shoot failed to provide that post cannot
  manufacture.
- **Seam risk** — effects that pass in the review room but fail at delivery
  resolution.
