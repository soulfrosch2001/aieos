# Balance Council — Output
Status: draft
Type: council
Owner: balance-designer
Extends: performance-council ([../../../councils/performance-council/output.md](../../../councils/performance-council/output.md))

## Output format
Produces a **balance review report** appended to the studio's
[balancing-history register](../../memory/registers/balancing-history.md), using
the [report.template.md](../../../templates/report.template.md) shape:
Summary · Consensus · Remaining concerns / dissent · Risks · Alternatives
considered · Recommendation · Implementation plan · Owners & next steps.

Read for this council: *Summary* carries the headline budget-vs-actual numbers
(win-rate spread, dominant-strategy reading); *Recommendation* is the verdict
(pass / re-tune-before-ship / accept-as-debt / escalate); *Alternatives
considered* names the tuning paths weighed and rejected. Every figure cites its
measurement method and sample — an unmethodical number does not enter the record.

## Dissent
Always present and named. A minority view that a budget is unrealistic, or that a
soft breach should block, is recorded so the next review starts from the argument,
not from scratch (Directive [#8](../../../kernel/laws/prime-directives.md)).

## Updates to memory
- Always: [balancing-history](../../memory/registers/balancing-history.md) — the
  dated review report and the verdict against its budget.
- If a breach is accepted to ship: recorded in
  [balancing-history](../../memory/registers/balancing-history.md) as debt — the
  budget owed and the date it must be repaid.
- Always cross-references the
  [playtest-feedback register](../../memory/registers/playtest-feedback.md) the
  numbers were drawn from.
- If a budget itself is found wrong: a contract-change proposal (Directive
  [#7](../../../kernel/laws/prime-directives.md)), not a quiet edit.
