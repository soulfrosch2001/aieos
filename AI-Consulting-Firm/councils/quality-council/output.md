# Quality Council — Output

## Output format
Produces **minutes** appended to the firm's [risk-register](../../memory/registers/risk-register.md), using the [report.template.md](../../../templates/report.template.md) shape:
Consensus · Remaining concerns · Risks · Alternatives considered · Recommendation · Implementation plan · Owners & next steps.

Every set of minutes records the verdict (**pass / rework / fail**), any veto exercised, the chair, attendees, and — explicitly — any **dissent**, attributed by role. Dissent is preserved verbatim and never edited out (Directive [#8](../../../kernel/laws/prime-directives.md); [reporting.md](../../../kernel/protocols/reporting.md)).

## Updates to memory
- **Always:** append minutes, the verdict, and recorded dissent to the [risk-register](../../memory/registers/risk-register.md), with each open quality risk given an owner and mitigation.
- **If debt is taken:** record the accepted quality debt and its conditions in the [risk-register](../../memory/registers/risk-register.md).
- **If a lesson emerges:** record it in [engagement-lessons](../../memory/registers/engagement-lessons.md).

All registers are append-only; corrections are added, never erased (Directive [#8](../../../kernel/laws/prime-directives.md); [memory-flow.md](../../../kernel/protocols/memory-flow.md)).
