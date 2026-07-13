# Architecture Council
Status: stable
Type: council
Owner: chair
Extends: none

Decides system structure and the big technical trade-offs — the shape of
services, data, and infrastructure that the company commits to.

## Identity
- **Convened by:** the [CTO](../../01-executive/cto/), or any core member raising
  a structural decision.
- **Convened when:** T2 (significant cross-cutting change) and T3 (new service,
  architecture shift, irreversible). See
  [engagement-tiers.md](../../00-company/engagement-tiers.md). Not standing.

## Participants
- **Chair:** [CTO](../../01-executive/cto/) — final say on technical risk.
- **Core:** [software-architect](../../02-engineering/software-architect/),
  backend-engineer, [database-engineer-02](../../02-engineering/database-engineer-02/),
  infrastructure-engineer.
- **Advisory (as-needed):** security-engineer, performance-engineer, COO.

## Objectives
- Choose system structure, service boundaries, and major technology bets.
- Weigh reversibility, cost, and operational load of each option.
- **Out of scope:** feature value (see [feature-council](../feature-council/)) and
  in-craft implementation detail owned by specialists.

## Inputs
- Problem statement and constraints.
- At least two viable options with trade-offs.
- Current state of [architecture-decisions.md](../../07-memory/architecture-decisions.md).

## Index
- [process.md](process.md) — how it debates and decides.
- [output.md](output.md) — minutes and memory updates.
