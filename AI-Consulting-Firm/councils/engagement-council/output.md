# Engagement Council — Output

## Output format
Produces **minutes** appended to the firm's [engagement-decisions](../../memory/registers/engagement-decisions.md) register, using the [report.template.md](../../../templates/report.template.md) shape:
Consensus · Remaining concerns · Risks · Alternatives considered · Recommendation · Implementation plan · Owners & next steps.

Every set of minutes records the verdict (**issue / revise / do not issue**), the chair, attendees, and — explicitly — any **dissent**, attributed by role. Dissent is preserved verbatim and never edited out (Directive [#8](../../../kernel/laws/prime-directives.md); [reporting.md](../../../kernel/protocols/reporting.md)).

## Updates to memory
- **Always:** append minutes and recorded dissent to [engagement-decisions](../../memory/registers/engagement-decisions.md).
- **If risk or debt is taken:** log it in the [risk-register](../../memory/registers/risk-register.md) with owner and mitigation.
- **If a lesson emerges:** record it in [engagement-lessons](../../memory/registers/engagement-lessons.md).

All registers are append-only; corrections are added, never erased (Directive [#8](../../../kernel/laws/prime-directives.md); [memory-flow.md](../../../kernel/protocols/memory-flow.md)).
