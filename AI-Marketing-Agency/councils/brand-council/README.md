# Brand Council
Status: stable
Type: council
Owner: strategy-director
Extends: architecture-council

## Purpose
The council that **adjudicates brand and positioning decisions** — the single
question it answers: *is this the right brand and positioning choice, and what are
we deliberately trading away to make it?* It owns the cross-cutting decisions no
single department can own alone: brand voice, positioning, message architecture,
and naming. It does **not** scope or gate individual campaigns (that is the
[campaign-council](../campaign-council/)), and it never writes the creative — a
council **decides, it never builds** (Directive
[#2](../../../kernel/laws/prime-directives.md)). It inherits the stdlib
[architecture-council](../../../councils/architecture-council/README.md) and adds
local strictness: brand coherence is enforced by the chair's veto.

## Participants
- **Chair** (breaks deadlocks): [strategy-director](../../01-executive/strategy-director)
  — bound to the CTO authority level and the brand veto in
  [decision-authority.md](../../../kernel/laws/decision-authority.md).
- **Core** (must attend): [brand-strategist](../../02-strategy/brand-strategist/),
  [positioning-strategist](../../02-strategy/positioning-strategist/),
  [content-strategist](../../03-content/content-strategist/), and the
  [chief-auditor](../../01-executive/chief-auditor) (quality/process veto, never
  directs).
- **Advisory** (as needed): [market-researcher](../../02-strategy/market-researcher/),
  [performance-marketer](../../04-performance/performance-marketer/) when
  performance data bears on positioning.

## When convened
At [T3](../../../kernel/laws/engagement-tiers.md) — a strategic, cross-department
brand bet. Not standing; convened for one question, then disbanded. T3 requires
council **plus** executive sign-off
([engagement-tiers.md](../../../kernel/laws/engagement-tiers.md)).

## Inputs
- The brand/positioning problem statement and the audience it serves (Directive
  [#1](../../../kernel/laws/prime-directives.md)).
- At least two viable positioning options with trade-offs.
- The blast radius — what existing campaigns, assets, and equity shift if this
  changes.
- Relevant prior calls from
  [brand-decisions](../../memory/registers/brand-decisions.md) and
  [audience-insights](../../memory/registers/audience-insights.md).

## Index
- [process.md](process.md)
- [output.md](output.md)
