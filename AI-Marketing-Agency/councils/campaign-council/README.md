# Campaign Council
Status: stable
Type: council
Owner: operations-director
Extends: feature-council

## Purpose
The room where a **campaign is debated and gated before it launches** — the
agency's home of "discuss before you build" (Directive
[#3](../../../kernel/laws/prime-directives.md)). It decides *whether this campaign
launches, in what shape, against which budget and which guardrails*. It does
**not** write the creative, buy the media, or relitigate brand strategy already
settled in the [brand-council](../brand-council/). It inherits the stdlib
[feature-council](../../../councils/feature-council/README.md) and adds local
strictness: no campaign passes without verified measurement and a kill criterion.

## Participants
- **Chair** (breaks deadlocks): [operations-director](../../01-executive/operations-director)
  — owns delivery, capacity, and what ships when.
- **Core** (must attend): [performance-marketer](../../04-performance/performance-marketer/)
  (budget, channels, measurement), [content-strategist](../../03-content/content-strategist/)
  (creative and message), and the [chief-auditor](../../01-executive/chief-auditor)
  (quality/process veto, never directs).
- **Advisory** (as needed): [seo-specialist](../../04-performance/seo-specialist/),
  [brand-strategist](../../02-strategy/brand-strategist/), and the
  [strategy-director](../../01-executive/strategy-director) when the campaign touches
  brand (their veto applies).

## When convened
At [T2](../../../kernel/laws/engagement-tiers.md) — a campaign with real design and
spend choices. A [T3](../../../kernel/laws/engagement-tiers.md) strategic campaign
inherits this council and adds executive sign-off; it does not fork a new one
(Directive [#6](../../../kernel/laws/prime-directives.md)). Not standing.

## Inputs
- The campaign brief: objective, target audience, and the end user it serves
  (Directive [#1](../../../kernel/laws/prime-directives.md)).
- At least two candidate approaches to compare (channel mix / creative angle).
- The budget envelope, target metrics (CPA/ROAS/volume), and verified conversion
  tracking — no measurement, no gate.
- Brand constraints already settled, and the quality gates the campaign must meet.

## Index
- [process.md](process.md)
- [output.md](output.md)
