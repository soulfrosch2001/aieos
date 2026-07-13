# Care Review Council — Output

## Output format
Produces **minutes** appended to the clinic's
[care-protocols](../../memory/registers/care-protocols.md) register (which extends the
stdlib [architecture-decisions](../../../memory/registers/architecture-decisions.md)
shape and the cross-cutting
[meeting-history](../../../memory/registers/meeting-history.md)), following
[report.template.md](../../../templates/report.template.md): Consensus · Remaining
concerns · Risks · Alternatives considered · Recommendation · Implementation plan ·
Owners & next steps. Each entry carries the care-process verdict (**adopt** /
**adopt with conditions** / **rejected**) and the basis for it.

## Recording dissent
Every registered objection and every open process-safety concern is preserved by name
in the minutes' **Dissent** field, even when overruled. A reversal of a prior verdict
is a new, superseding entry — the original is never edited (Directive
[#8](../../../kernel/laws/prime-directives.md)). This is the strictness this council
adds over its stdlib feature-council parent: a process-safety concern is never
quietly closed, and a chief-medical-officer process veto is recorded with its basis.

## Updates to memory
- Always: append minutes, verdict, and basis to
  [care-protocols](../../memory/registers/care-protocols.md) and the cross-cutting
  [meeting-history](../../../memory/registers/meeting-history.md).
- If process debt or a conditional adoption is taken: record the open item, its owner,
  and its required evidence in
  [care-protocols](../../memory/registers/care-protocols.md).
- If a lesson emerges (a recurring handoff failure, a step that should have been caught
  earlier): append it to [care-lessons](../../memory/registers/care-lessons.md).
