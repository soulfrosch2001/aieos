# Performance Council — Output
Status: stable
Type: council
Owner: performance-lead
Extends: none

## Output format
Produces a **performance review report** appended to the company's
`meeting-history` register, using the
[report.template.md](../../templates/report.template.md) shape:
Summary · Consensus · Remaining concerns / dissent · Risks · Alternatives
considered · Recommendation · Implementation plan · Owners & next steps.

Read for this council: *Summary* carries the headline budget-vs-actual numbers;
*Recommendation* is the verdict (pass / fix-before-ship / accept-as-debt /
escalate); *Alternatives considered* names the optimization paths weighed and
rejected. Every figure cites its measurement method — an unmethodical number does
not enter the record.

## Dissent
Always present and named. A minority view that a budget is unrealistic, or that a
soft breach should block, is recorded so the next review starts from the argument,
not from scratch (Directive [#8](../../kernel/laws/prime-directives.md)).

## Updates to memory
- Always: `meeting-history` — the dated review report.
- Always: `decision-log` — the verdict and the budget it was measured against.
- If a breach is accepted to ship: `tech-debt-register` — the budget owed and the
  date it must be repaid.
- If a budget itself is found wrong: a kernel/contract change proposal (Directive
  [#7](../../kernel/laws/prime-directives.md)), not a quiet edit.
