# Code Compliance Council — Output

## Output format
Produces **minutes** appended to the studio's [code-compliance-log](../../memory/registers/code-compliance-log.md) register (which extends the stdlib [known-issues](../../../memory/registers/known-issues.md) shape and the cross-cutting [meeting-history](../../../memory/registers/meeting-history.md)), following [report.template.md](../../../templates/report.template.md): Consensus · Remaining concerns · Risks · Alternatives considered · Recommendation · Implementation plan · Owners & next steps. Each entry carries the compliance verdict (**clear** / **clear with conditions** / **blocked**) and the cited code basis.

## Recording dissent
Every registered objection and every open compliance flag is preserved by name in the minutes' **Dissent** field, even when overruled. A reversal of a prior verdict is a new, superseding entry — the original is never edited (Directive [#8](../../../kernel/laws/prime-directives.md)). This is the strictness this council adds over its stdlib security-council parent: a compliance flag is never quietly closed, and a chief-auditor veto is recorded with its basis.

## Updates to memory
- Always: append minutes, verdict, and cited code basis to [code-compliance-log](../../memory/registers/code-compliance-log.md) and the cross-cutting [meeting-history](../../../memory/registers/meeting-history.md).
- If compliance debt or a conditional clearance is taken: record the open item, its owner, and its required evidence in [code-compliance-log](../../memory/registers/code-compliance-log.md).
- If a lesson emerges (a recurring code miss, a permit comment that should have been caught earlier): append it to [design-lessons](../../memory/registers/design-lessons.md).
