# Architecture Council — Output

Status: stable
Type: council
Owner: CTO (chair)
Extends: none

## Output format
The council produces **minutes** appended to the company's `meeting-history`
register, using the [../../templates/report.template.md](../../templates/report.template.md)
shape. Required sections:

- **Summary** — the design decided and why it matters.
- **Consensus** — what every Core seat agreed on.
- **Remaining concerns / dissent** — named minority positions (never "none" unless
  truly unanimous).
- **Risks** — failure modes and severity; flag one-way doors.
- **Alternatives considered** — designs rejected and the precise reason.
- **Recommendation** — the chosen architecture.
- **Implementation plan** — decomposed into **up to 15 disjoint tracks** for
  department fan-out; the council does not build it.
- **Owners & next steps** — table of owner / action / by-when.

The minutes are a one-way door: corrected by appending, never by erasing
(Directive [#8](../../kernel/laws/prime-directives.md)).

## Updates to memory
- **Always:** `reports/meeting-history/` — the dated minutes (the decision of
  record).
- **If debt is taken:** `reports/tech-debt/` — the shortcut, why, and the payback
  trigger.
- **If a lesson emerges:** `memory/lessons/` — the durable architectural principle
  so the next council inherits it (Directive
  [#6](../../kernel/laws/prime-directives.md)).
