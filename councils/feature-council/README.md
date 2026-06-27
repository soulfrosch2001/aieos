# Feature Council
Status: stable
Type: council
Owner: product-lead
Extends: none

## Purpose
The room where a **significant feature is designed and debated before a line of
it is built** — the literal home of "discuss before you build" (Directive
[#3](../../kernel/laws/prime-directives.md)). It decides *what we are building and
why this shape over the alternatives*. It does **not** write the feature, pick
the sprint dates, or relitigate strategy already settled above it.

## Charter
One feature proposal at [T2](../../kernel/laws/engagement-tiers.md) — a new
feature or system with real design choices. One feature, one council.

## Participants
- **Chair** (breaks deadlocks): product-lead — owns the problem statement and the
  user value (Directive [#1](../../kernel/laws/prime-directives.md)).
- **Core** (must attend): engineering lead, design lead, the department that will
  own the feature in production.
- **Advisory** (as needed): security, data, the
  [performance-council](../performance-council/) chair when the feature touches a
  tier budget.

## When convened
At [T2](../../kernel/laws/engagement-tiers.md) — see
[engagement-tiers.md](../../kernel/laws/engagement-tiers.md). A T3 feature
inherits this council and adds executive sign-off; it does not fork a new one
(Directive [#6](../../kernel/laws/prime-directives.md)).

## Inputs
- The problem statement and the user it serves — no problem, no council.
- At least two candidate designs to compare (a single option is not a debate).
- The applicable tier budgets and quality gates the feature must meet.

## Index
- [process.md](process.md) — how the design debate runs.
- [output.md](output.md) — the decision and what it files to memory.
