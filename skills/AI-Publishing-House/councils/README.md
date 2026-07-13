# Councils

Status: stable
Type: council-index
Owner: house-orchestrator
Extends: none

## Purpose
Councils are where the house *discusses before it builds* (Directive
[#3](../../kernel/laws/prime-directives.md)). They are not standing committees;
each is convened for one question at the right tier, then disbanded. They decide;
they never build (Directive [#2](../../kernel/laws/prime-directives.md)).

Both councils here inherit a stdlib council and add only house-specific strictness
(Directive [#6](../../kernel/laws/prime-directives.md)).

## Councils
- [acquisition-council](acquisition-council/) — decides whether to acquire a
  manuscript. Chair: [ceo](../01-executive/ceo/). Extends the stdlib
  [feature-council](../../councils/feature-council/).
- [editorial-council](editorial-council/) — adjudicates editorial direction and
  standards. Chair: [editorial-director](../01-executive/editorial-director/).
  Extends the stdlib [architecture-council](../../councils/architecture-council/).

## How they fit
- Tiers are sized per [engagement-tiers.md](../../kernel/laws/engagement-tiers.md);
  T2 needs council, T3 needs council plus executive sign-off.
- Both councils append dated minutes and recorded dissent to a memory register
  (Directive [#8](../../kernel/laws/prime-directives.md)).
- Deadlocks escalate per
  [escalation.md](../../kernel/protocols/escalation.md).

## Index
- [acquisition-council/](acquisition-council/)
- [editorial-council/](editorial-council/)
