# Performance Council
Status: stable
Type: council
Owner: performance-lead
Extends: none

## Purpose
The body that **reviews measured performance against the tier budgets** a system
agreed to meet, and rules on whether a regression ships, gets fixed, or escalates
to an incident. It decides *are we within budget, and if not, what we do about
it*. It does **not** set product strategy and does not design the feature — it
holds the numbers honest after [feature-council](../feature-council/) has chosen
the design.

## Charter
A performance review of one system or release against its declared budgets,
typically at [T2](../../kernel/laws/engagement-tiers.md). A budget breach that is
already customer-facing is **not** this council — it is a crisis, routed to the
[incident-council](../incident-council/) at
[T4](../../kernel/laws/engagement-tiers.md).

## Participants
- **Chair** (breaks deadlocks): performance-lead — owns the budgets and the
  measurement method.
- **Core** (must attend): the owning engineering lead, the SRE/observability
  owner.
- **Advisory** (as needed): product-lead when a budget tradeoff touches user
  value (Directive [#1](../../kernel/laws/prime-directives.md)), data owner.

## When convened
At a release gate, on a scheduled budget review, or when telemetry trips a
warning threshold — at [T2](../../kernel/laws/engagement-tiers.md), see
[engagement-tiers.md](../../kernel/laws/engagement-tiers.md). It is convened, not
standing (Directive [#3](../../kernel/laws/prime-directives.md)).

## Inputs
- The declared tier budgets (latency, cost, error rate, resource ceilings).
- Current measurements against those budgets, with the method stated.
- The trend — is the gap widening or one-off.

## Index
- [process.md](process.md) — how the review runs.
- [output.md](output.md) — the verdict and what it files to memory.
