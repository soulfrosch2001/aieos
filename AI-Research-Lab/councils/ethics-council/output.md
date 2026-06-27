# Ethics Council — Output

## Output format
Produces **minutes** appended to the lab's
[findings](../../memory/registers/findings.md) register (and the cross-cutting
[meeting-history](../../../memory/registers/meeting-history.md)), following
[report.template.md](../../../templates/report.template.md):
Consensus · Remaining concerns · Risks · Alternatives considered · Recommendation ·
Implementation plan · Owners & next steps. Each entry carries the **gate decision**
(green / green-with-mitigations / red) and the **accepted-risk record** naming what
was accepted and who accepted it.

## Recording dissent
Every ethical objection is preserved by name in the **Dissent** field, even when
overruled by the chair. Caution is never edited out of the record. A reversal of a
prior gate decision is a new, superseding entry — the original stands (Directive
[#8](../../../kernel/laws/prime-directives.md)). This is the strictness this
council adds over its stdlib security-council parent: a registered ethical concern
is permanent.

## Updates to memory
- Always: append minutes + gate decision + accepted-risk record to
  [findings](../../memory/registers/findings.md) and
  [meeting-history](../../../memory/registers/meeting-history.md).
- If risk is accepted (a mitigation or staged-disclosure debt): record it in
  [experiment-log](../../memory/registers/experiment-log.md) with the named owner.
- If a lesson or near-miss emerges: append it to
  [experiment-log](../../memory/registers/experiment-log.md); route unresolved
  ethical threads to [open-questions](../../memory/registers/open-questions.md).
