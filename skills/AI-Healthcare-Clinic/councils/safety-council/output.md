# Safety Council — Output

## Output format
Produces **minutes** appended to the clinic's
[incident-register](../../memory/registers/incident-register.md) register (which
extends the stdlib [known-issues](../../../memory/registers/known-issues.md) shape and
the cross-cutting [meeting-history](../../../memory/registers/meeting-history.md)),
following [report.template.md](../../../templates/report.template.md): Consensus ·
Remaining concerns · Risks · Alternatives considered · Recommendation · Implementation
plan · Owners & next steps. Each entry carries the safety verdict (**clear** / **clear
with conditions** / **blocked**) and the cited control or evidence basis.

## Recording dissent
Every registered objection and every open compliance or safety flag is preserved by
name in the minutes' **Dissent** field, even when overruled. A reversal of a prior
verdict is a new, superseding entry — the original is never edited (Directive
[#8](../../../kernel/laws/prime-directives.md)). This is the strictness this council
adds over its stdlib security-council parent: a flag is never quietly closed, and a
chief-compliance-auditor veto is recorded with its basis.

## Updates to memory
- Always: append minutes, verdict, and cited basis to
  [incident-register](../../memory/registers/incident-register.md) and the
  cross-cutting [meeting-history](../../../memory/registers/meeting-history.md).
- If compliance debt or a conditional clearance is taken: record the open flag, its
  owner, and its required evidence in
  [incident-register](../../memory/registers/incident-register.md).
- If a lesson emerges (a recurring control miss, a privacy gap that should have been
  caught earlier): append it to
  [care-lessons](../../memory/registers/care-lessons.md).
