# Workflow: sprint-planning

**Purpose:** Turn the roadmap into a prioritized, committed sprint backlog.
**Engagement Tier:** Process workflow (cadence, not a single change). See [../00-company/engagement-tiers.md](../00-company/engagement-tiers.md).

## Trigger
Start of a sprint cycle, or a major re-prioritization event.

## Participants
[product-manager-02](../03-product/product-manager-02/) leads; engineering leads size;
[software-architect](../02-engineering/software-architect/) flags dependencies.

## Inputs
- [../07-memory/roadmap.md](../07-memory/roadmap.md) priorities.
- Capacity estimate + carryover from last sprint.

## Steps
1. **Pull candidates** — PM — rank roadmap items by value and readiness.
2. **Size** — engineers — estimate effort; split items larger than one sprint.
3. **Sequence** — PM + architect — order by dependency and risk.
4. **Commit** — PM — set the sprint backlog within capacity.

## Approval Gates
- **Gate 1 — Ready check:** each item has acceptance criteria; unready items stay in backlog.
- **Gate 2 — Capacity check:** committed work fits capacity; over-commit blocks the close.

## Outputs
A committed sprint backlog with owners and acceptance criteria.

## Completion Criteria
Backlog committed, owners assigned, dependencies sequenced, capacity respected.

## Memory Updates
[../07-memory/roadmap.md](../07-memory/roadmap.md) (status + sequencing); carryover noted for next cycle.

## Failure / Rollback
Over-commit discovered mid-sprint → PM de-scopes lowest-priority items and updates the roadmap.
