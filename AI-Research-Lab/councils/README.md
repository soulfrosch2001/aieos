# Councils

Status: stable
Type: index
Owner: lab-orchestrator
Extends: none

## Purpose
The lab's deliberative forums. Councils are **not standing** — each convenes for
one question, decides, records minutes and dissent, then disbands (Directive
[#3](../../kernel/laws/prime-directives.md), discuss before you build). They
decide; they never build (Directive [#2](../../kernel/laws/prime-directives.md)).
Each extends a stdlib council by name and may only add strictness, never loosen a
Kernel Law (Directive [#6](../../kernel/laws/prime-directives.md);
[resolution-order.md](../../kernel/loader/resolution-order.md)).

## The councils
- [review-council](review-council/README.md) — internal peer review of methods and
  findings. Chair: [research-director](../01-executive/research-director/README.md).
  Extends stdlib [architecture-council](../../councils/architecture-council/README.md).
- [ethics-council](ethics-council/README.md) — research ethics and risk gate, like
  a security gate. Chair: [ethics-officer](../04-publication/ethics-officer/README.md).
  Extends stdlib [security-council](../../councils/security-council/README.md).

## When convened
By tier — see [engagement-tiers.md](../../kernel/laws/engagement-tiers.md).
**T2** significant work gets a council sign-off; **T3** strategic work needs
council + executive. The [lab-orchestrator](../01-executive/lab-orchestrator/README.md)
routes the question and sizes the tier.

## Memory
Council outcomes are appended to the lab's [memory registers](../memory/README.md):
[findings](../memory/registers/findings.md) for decisions, with dissent preserved.
Records are append-only (Directive [#8](../../kernel/laws/prime-directives.md)).
