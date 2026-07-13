# Performance Council
Status: stable
Type: council
Owner: chair
Extends: none

> A **convened** council — it does not stand. See
> [../README.md](../README.md) and [../debate-protocol.md](../debate-protocol.md).

## Identity
- **Name:** Performance Council
- **Convened by:** the [performance-engineer](../../02-engineering/performance-engineer/) (chair).
- **Convened when:** a performance budget is at risk, breached, or a new budget
  must be set. Tier-driven via [../../00-company/engagement-tiers.md](../../00-company/engagement-tiers.md).

## Participants
- **Chair:** [performance-engineer](../../02-engineering/performance-engineer/).
- **Core:** the owning specialist(s) for the hot path; a reviewer.
- **Advisory (as-needed):** CTO for budget trade-offs; QA for regression scope.

## Objectives
- Decide and ratify **performance budgets** (latency, memory, throughput, cost).
- Authorize and scope **performance investigations**.
- Out of scope: shipping decisions (see [../release-council/](../release-council/)).

## Inputs
- Current budget vs. measured numbers, with a reproducible benchmark.
- The suspected regression's commit range or feature.
- A link to the [performance-investigation](../../05-workflows/performance-investigation.md) run, if open.

## Index
- [process.md](process.md) — discussion & decision rules.
- [output.md](output.md) — minutes & memory updates.
