<!-- Workflow (1 file). Contract: ../kernel/contracts/workflow.md -->

# Workflow: planning
Status: stable
Type: workflow
Owner: Department Lead
Extends: none

**Purpose:** Turn a goal into a sequenced, owned plan with disjoint tracks ready
to fan out — without building anything yet.
**Default Tier:** [T2](../kernel/laws/engagement-tiers.md)  ·  **Owner:** Department Lead
**Extends:** none

## Trigger
A goal that needs decomposition before execution — sized
[T2](../kernel/laws/engagement-tiers.md). Planning routes work; it never
implements it (Directive [#2](../kernel/laws/prime-directives.md)).

## Participants
- [orchestrator](../kernel/protocols/orchestration.md) — decomposes and partitions ownership.
- Council — pressure-tests sequence and priorities (Directive [#3](../kernel/laws/prime-directives.md)).
- Department Lead — owns the plan and Gate B sign-off.
- Affected track owners — confirm scope and dependencies.

## Inputs
A goal justified by user value (Directive [#1](../kernel/laws/prime-directives.md)),
known constraints, and the resources available.

## Steps
```
goal ─> [GATE A: goal + criteria clear] ─> decompose ─> sequence ─> [GATE B: tracks disjoint + owned] ─> record
```
1. **Frame** — orchestrator — state the goal and its done-criteria. `[GATE A]`
2. **Decompose** — orchestrator — break into the smallest independent units.
3. **Partition** — orchestrator — assign each unit a single owner; mark dependencies.
4. **Sequence** — council — order waves of ≤15 parallel tracks ([orchestration](../kernel/protocols/orchestration.md)).
5. **Confirm** — Department Lead — verify tracks are disjoint and owned. `[GATE B]`
6. **Record** — orchestrator — update the memory registers below.

## Review Gates
- **Gate A — goal + criteria clear:** no decomposition starts on a vague goal.
- **Gate B — tracks disjoint + owned:** no two tracks write the same artifact and
  every track has an owner. Overlap is a decomposition error
  ([orchestration](../kernel/protocols/orchestration.md)).

## Approval Process
Council pressure-tests; Department Lead signs the plan. T3 goals add executive
sign-off per [decision-authority](../kernel/laws/decision-authority.md).

## Outputs
A plan: ordered waves of disjoint, owned tracks with dependencies and criteria.

## Completion Criteria
- [ ] Goal and criteria explicit (Gate A).
- [ ] Tracks disjoint, owned, sequenced (Gate B).
- [ ] Memory registers appended.

## Memory Updates
- [roadmap](../memory/registers/roadmap.md) — goal, tracks, owners, sequence, date.
- [meeting-history](../memory/registers/meeting-history.md) — prioritization and trade-off calls.
- [lessons-learned](../memory/registers/lessons-learned.md) — estimation/sequencing notes for next time.

## Failure / Rollback
Tracks overlap → re-partition; never fan out overlapping ownership. Goal shifts
mid-plan → re-frame at Gate A, do not silently re-scope. A plan that can't be made
disjoint signals a missing [architecture-review](architecture-review.md).
