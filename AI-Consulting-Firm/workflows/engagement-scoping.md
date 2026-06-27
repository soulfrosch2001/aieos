<!-- Workflow (1 file). Contract: ../../kernel/contracts/workflow.md -->

# Workflow: engagement-scoping
Status: stable
Type: workflow
Owner: operations-partner
Extends: planning

**Purpose:** Scope and staff a new engagement — turn a client problem into a
sized, owned engagement plan before any analysis begins.
**Default Tier:** [T2](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** operations-partner
**Extends:** stdlib [planning](../../workflows/planning.md)

## Trigger
A new client problem routed in by the [engagement-orchestrator](../01-executive/engagement-orchestrator/),
or a [managing-partner](../01-executive/managing-partner/) decision to pursue an
opportunity. Sizing to a tier ([engagement-tiers](../../kernel/laws/engagement-tiers.md))
is the first act — no scoping starts on an unsized request.

## Participants
- [engagement-orchestrator](../01-executive/engagement-orchestrator/) — sizes the request, decomposes, fans out (never delivers, Directive [#2](../../kernel/laws/prime-directives.md)).
- [operations-partner](../01-executive/operations-partner/) — owns staffing, sequencing, and the plan; Gate B sign-off.
- [engagement-director](../01-executive/engagement-director/) — owns analytical approach; holds the methodology veto.
- [managing-partner](../01-executive/managing-partner/) — decides whether the firm takes the engagement at all.
- [business-analyst](../02-diagnosis/business-analyst/) — frames the client problem to be scoped.

## Inputs
A stated client problem, the desired outcome (Directive [#1](../../kernel/laws/prime-directives.md)),
known constraints (budget, deadline, access), and current staff availability.

## Steps
```
problem ─> [GATE A: problem + outcome + tier clear] ─> decompose ─> staff ─> sequence ─> [GATE B: tracks disjoint + owned + staffed] ─> record
```
1. **Frame** — business-analyst — state the client problem and the outcome that defines success. `[GATE A]`
2. **Size** — engagement-orchestrator — fix the engagement tier ([engagement-tiers](../../kernel/laws/engagement-tiers.md)).
3. **Decompose** — engagement-orchestrator — break into the smallest independent diagnosis/strategy/implementation tracks.
4. **Staff** — operations-partner — assign each track a single owner; mark dependencies and load.
5. **Approve method** — engagement-director — confirm the analytical approach is sound; veto if not.
6. **Confirm** — operations-partner — verify tracks are disjoint, owned, and staffed. `[GATE B]`
7. **Record** — engagement-orchestrator — update the memory registers below.

## Review Gates
- **Gate A — problem + outcome + tier clear:** no decomposition starts on a vague problem or an unsized request. A scope without a defined client outcome is rejected (Directive [#1](../../kernel/laws/prime-directives.md)).
- **Gate B — tracks disjoint + owned + staffed:** no two tracks write the same artifact, every track has one owner, and the owner has capacity ([orchestration](../../kernel/protocols/orchestration.md), ≤15 parallel tracks).

## Approval Process
Engagement-director clears the method; operations-partner signs the staffing plan;
managing-partner decides the firm takes it. T3+ adds executive sign-off per
[decision-authority](../../kernel/laws/decision-authority.md).

## Outputs
A scoped engagement: tier, ordered waves of disjoint owned tracks, a staffing
assignment, dependencies, and the success criteria.

## Completion Criteria
- [ ] Problem, outcome, and tier explicit (Gate A).
- [ ] Tracks disjoint, owned, staffed, sequenced (Gate B).
- [ ] Method cleared by engagement-director.
- [ ] Memory registers appended.

## Memory Updates
- [engagement-decisions](../memory/registers/engagement-decisions.md) — the scope, tier, staffing, and any method ruling, dated.
- [risk-register](../memory/registers/risk-register.md) — scoping risks (access, data, deadline) flagged at intake.
- [engagement-lessons](../memory/registers/engagement-lessons.md) — sizing/staffing notes for the next engagement.

## Failure / Rollback
Tracks overlap → re-partition; never fan out overlapping ownership. Outcome shifts
mid-scope → re-frame at Gate A, never silently re-scope. Method veto at step 5 →
return to decompose. A problem that cannot be sized is escalated to the
managing-partner before any staff is committed.
