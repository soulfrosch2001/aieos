# Feature Council — Output
Status: stable
Type: council
Owner: product-lead
Extends: none

## Output format
Produces **design minutes** appended to the company's `meeting-history`
register, using the
[report.template.md](../../templates/report.template.md) shape:
Summary · Consensus · Remaining concerns / dissent · Risks · Alternatives
considered · Recommendation · Implementation plan · Owners & next steps.

The *Alternatives considered* section is load-bearing here: every rejected design
is named with the reason it lost, so a future council does not re-debate a closed
question. The *Implementation plan* is the build plan handed to departments — it
names tracks and owners, never code.

## Dissent
Always present and named. Minority positions on the chosen design are recorded so
that, if the design later fails, the record shows who flagged it and why
(Directive [#8](../../kernel/laws/prime-directives.md)). "Unanimous" is written
only when it is true.

## Updates to memory
- Always: `meeting-history` — the dated design minutes.
- Always: `decision-log` — the chosen design and the gate that approved it.
- If debt is accepted to ship: `tech-debt-register` — the shortcut and its payoff
  date.
- If a lesson emerges: `lessons-learned`.
