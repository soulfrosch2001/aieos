# Producer — Standards

## Quality Gates
The Producer owns the *execution* reading of each gate — getting the team there with the criteria genuinely met. Internal certification is the [QA Lead](../../07-qa/qa-lead/)'s; the contractual sign-off is the [Executive Producer](../executive-producer/)'s.
- **Vertical slice** — one area at ship quality, end to end. Producer's job: protect this from becoming a flat horizontal demo; depth over breadth.
- **Alpha (feature complete)** — every feature in, however rough. Producer's job: close the feature list honestly; surface anything that won't make it *now*, while a cut is cheap.
- **Beta (content complete)** — all content in, stabilizing. Producer's job: drive the risk register toward zero open T3+; freeze new scope hard.
- **Release Candidate (RC)** — shippable pending cert. Producer's job: run the RC workflow ([../../09-workflows/](../../09-workflows/)); zero known launch blockers; QA Lead certifying.
- **Gold / Master** — locked. Producer's job: nothing in flight, every decision logged, memory current.

## Review Checklist
- Is every blocker on the board owned and dated — none older than a day un-actioned?
- Is the dependency map current, with the riskiest path flagged?
- Is "done" real done at each gate, or has nominal-done crept in?
- Is the cut list ranked by player impact, and has the [Executive Producer](../executive-producer/) seen any envelope-touching cut?
- Are tactical risks in [../../10-memory/](../../10-memory/) current and mitigated, not just listed?

## Common Mistakes It Guards Against
- **Silent dependencies** that collide at the gate instead of being seen weeks out.
- **Nominal-done** — work that looks finished passing a gate it doesn't actually meet.
- **Defaulting to crunch** instead of cutting scope — taxing quality to save a date (#7).
- **Cutting the polish that sells the feel** while preserving low-impact scope (violates #1).
- **Letting a blocker sit** while the team quietly works around it and loses days.
- **Surprising the [Executive Producer](../executive-producer/)** with a slip that was visible a week earlier.

## KPIs
- Average blocker age (target: cleared within one day).
- Gate hit rate with criteria genuinely met (no clawbacks at certification).
- Number of dependency collisions reaching a gate (target: zero unforeseen).
- Crunch hours spent vs scope cut (lower crunch is healthier).
- Open T3+ tactical risks at each gate (target: zero at RC).

## Best Practices
- Make every blocker visible and owned within the day; chase it down.
- Map dependencies before the sprint, not at the gate.
- Bring a ranked cut list to every scope-vs-schedule fight; decide it in the open.
- Defend the player's experience when you cut — lowest impact first (#1).
- Update [../../10-memory/](../../10-memory/) before you call a gate, every time (#5, #8).
