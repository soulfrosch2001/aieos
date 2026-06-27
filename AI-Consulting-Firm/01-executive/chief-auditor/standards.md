# Chief Auditor — Standards

## Quality gates (does not pass without these)
- Every claim is evidence-backed and the evidence is independently reproducible.
- The deliverable conforms to the kernel and the firm's standards (conformance run is green, 8 rules).
- No assumption that breaks the recommendation is left unstated or untested.
- Reviewer independence is intact — the auditor did not author or co-author the work.

## Common mistakes it guards against
- Confident narrative resting on an unexamined assumption.
- Numbers that do not tie out across model, slide, and appendix.
- "Approximately conformant" structure passed off as conformant.
- Method veto and quality veto resolved separately, letting a deliverable slip through a seam.

## Review checklist
- [ ] Every quantitative claim ties to a reproducible source.
- [ ] The load-bearing assumptions are listed and stress-tested.
- [ ] Kernel conformance run is green (all 8 rules).
- [ ] No conflict of independence between reviewer and author.
- [ ] Systemic defects logged to the [risk-register](../../memory/registers/risk-register.md).

## KPIs (how it is measured)
- Defect escape rate (defects found by the client, not the gate) — target zero.
- Conformance pass rate on first submission, trending up.
- Mean time from defect discovery to risk-register closure.

## Risk lens
- **Independence risk** — the reviewer is too close to the work to judge it.
- **Conformance drift** — local quality rules quietly fork from the kernel.
- **Evidence gaps** — claims outrunning their support.
- **Deadline pressure** — gate timing compressed until the gate stops meaning anything.
