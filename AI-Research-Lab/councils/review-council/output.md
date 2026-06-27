# Review Council — Output

## Output format
Produces **minutes** appended to the lab's
[findings](../../memory/registers/findings.md) register (which extends the stdlib
[meeting-history](../../../memory/registers/meeting-history.md) /
architecture-decisions shape), following
[report.template.md](../../../templates/report.template.md):
Consensus · Remaining concerns · Risks · Alternatives considered · Recommendation ·
Implementation plan · Owners & next steps. Each entry also carries the soundness
grade (**sound** / **sound with revisions** / **not yet sound**).

## Recording dissent
Every registered objection is preserved by name in the minutes' **Dissent**
field, even when overruled by the chair. A reversal of a prior review is a new,
superseding entry — the original is never edited (Directive
[#8](../../../kernel/laws/prime-directives.md)). This is the strictness this
council adds over its stdlib parent: dissent on soundness is never dropped.

## Updates to memory
- Always: append minutes + soundness grade to
  [findings](../../memory/registers/findings.md) and the cross-cutting
  [meeting-history](../../../memory/registers/meeting-history.md).
- If rework or methodological debt is taken: record it in
  [experiment-log](../../memory/registers/experiment-log.md).
- If a lesson emerges (a recurring flaw, a method that failed): append it to
  [experiment-log](../../memory/registers/experiment-log.md), and route unresolved
  threads to [open-questions](../../memory/registers/open-questions.md).
