# Balance Council — Output
Status: stable
Type: council
Owner: balance-director
Extends: performance-council

## Output format
Produces **minutes** appended to the
[balance-decisions](../../memory/registers/balance-decisions.md) register, using
the [report.template.md](../../../templates/report.template.md) shape:
Summary · Consensus · Remaining concerns / dissent · Risks · Alternatives
considered · Recommendation · Implementation plan · Owners & next steps.

Read for this council: *Summary* carries the balance budget targeted and the
before/after numbers; *Recommendation* is the verdict (ship / revise-before-ship /
hold-for-evidence / escalate); *Alternatives considered* names the tuning paths
weighed and rejected. Every figure cites its measurement method — an unmethodical
number does not enter the record.

## Dissent
Always present and named (Directive
[#8](../../../kernel/laws/prime-directives.md)). A minority view — that a change is
under-evidenced, that a budget is wrong, or that a nerf overreaches — is recorded so
the next pass starts from the argument, not from scratch. Dissent is never
suppressed.

## Updates to memory
- **Always**: [balance-decisions](../../memory/registers/balance-decisions.md) —
  the dated minutes, the verdict, the evidence, and named dissent.
- If a change is shipped knowing it is incomplete (balance debt taken):
  [balance-backlog](../../memory/registers/balance-backlog.md) — what is owed and
  by when.
- If a lesson emerges:
  [balancing-history](../../memory/registers/balancing-history.md) — what the
  change taught about the title.
- If the *method* is found wanting: a referral to the
  [methodology-council](../methodology-council/), not a quiet edit (Directive
  [#6](../../../kernel/laws/prime-directives.md)).
