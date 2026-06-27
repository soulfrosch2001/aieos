# Design Council — Output
Status: draft
Type: council
Owner: design-director
Extends: feature-council ([../../../councils/feature-council/output.md](../../../councils/feature-council/output.md))

## Output format
Produces **design minutes** appended to the studio's
[design-decisions register](../../memory/registers/design-decisions.md), using the
[report.template.md](../../../templates/report.template.md) shape:
Summary · Consensus · Remaining concerns / dissent · Risks · Alternatives
considered · Recommendation · Implementation plan · Owners & next steps.

The *Alternatives considered* section is load-bearing here: every rejected design
is named with the reason it lost, so a future council does not re-debate a closed
core loop. The *Implementation plan* is the build plan handed to the game-design
and content departments — it names tracks and owners, never component art.

## Dissent
Always present and named. A minority position on the chosen design is recorded so
that, if the design later fails at the table, the record shows who flagged it and
why (Directive [#8](../../../kernel/laws/prime-directives.md)). "Unanimous" is
written only when it is true.

## Updates to memory
- Always: [design-decisions](../../memory/registers/design-decisions.md) — the
  dated design minutes and the chosen direction.
- If a balance risk is accepted to proceed: a note to
  [balancing-history](../../memory/registers/balancing-history.md) flagging the
  owed review.
- If a lesson emerges from a past design: recorded with the decision and surfaced
  to the studio architecture note in [memory/](../../memory/README.md).
