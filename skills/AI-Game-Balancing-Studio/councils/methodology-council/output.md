# Methodology Council — Output
Status: stable
Type: council
Owner: ceo
Extends: architecture-council

## Output format
Produces **minutes** appended to the
[balance-decisions](../../memory/registers/balance-decisions.md) register, using
the [report.template.md](../../../templates/report.template.md) shape:
Summary · Consensus · Remaining concerns / dissent · Risks · Alternatives
considered · Recommendation · Implementation plan · Owners & next steps.

Read for this council: *Summary* states the method question and the verdict;
*Alternatives considered* names the rival methods weighed and what each traded away
— a method decision with no recorded alternative is incomplete; *Implementation
plan* states the blast radius and which prior balance decisions the change re-opens.

## Dissent
Always present and named (Directive
[#8](../../../kernel/laws/prime-directives.md)). A minority view that a method is
unsound, or that the trade-off was misjudged, is recorded so the next methodology
question starts from the argument. Dissent is never suppressed.

## Updates to memory
- **Always**: [balance-decisions](../../memory/registers/balance-decisions.md) —
  the dated minutes, the method verdict, the executive sign-off, and named dissent.
- If the change defers part of the rollout (method debt):
  [balance-backlog](../../memory/registers/balance-backlog.md) — what is owed and
  by when.
- If a lesson emerges:
  [balancing-history](../../memory/registers/balancing-history.md) — what the
  method change taught.
- If the method touches the kernel or stdlib: a change **proposal**, not a quiet
  edit (Directive [#6](../../../kernel/laws/prime-directives.md)).
