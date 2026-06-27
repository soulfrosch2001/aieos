# Design Review Council — Output

## Output format
Produces **minutes** appended to the studio's [design-decisions](../../memory/registers/design-decisions.md) register (which extends the stdlib [architecture-decisions](../../../memory/registers/architecture-decisions.md) / [meeting-history](../../../memory/registers/meeting-history.md) shape), following [report.template.md](../../../templates/report.template.md): Consensus · Remaining concerns · Risks · Alternatives considered · Recommendation · Implementation plan · Owners & next steps. Each entry also carries the gate verdict (**pass** / **pass with conditions** / **return for rework**).

## Recording dissent
Every registered objection is preserved by name in the minutes' **Dissent** field, even when overruled by the chair's design veto. A reversal of a prior gate decision is a new, superseding entry — the original is never edited (Directive [#8](../../../kernel/laws/prime-directives.md)). This is the strictness this council adds over its stdlib parent: dissent on design coherence is never dropped.

## Updates to memory
- Always: append minutes and gate verdict to [design-decisions](../../memory/registers/design-decisions.md) and the cross-cutting [meeting-history](../../../memory/registers/meeting-history.md).
- If design debt or a conditional pass is taken: record the condition and its owner in [design-decisions](../../memory/registers/design-decisions.md) and any compliance flag in [code-compliance-log](../../memory/registers/code-compliance-log.md).
- If a lesson emerges (a recurring coherence flaw, a gate that should have caught more): append it to [design-lessons](../../memory/registers/design-lessons.md).
