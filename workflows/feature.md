<!-- Workflow (1 file). Contract: ../kernel/contracts/workflow.md -->

# Workflow: feature
Status: stable
Type: workflow
Owner: Department Lead
Extends: none

**Purpose:** Turn a validated need into a shipped capability through design,
parallel build, and gated review.
**Default Tier:** [T2](../kernel/laws/engagement-tiers.md)  ·  **Owner:** Department Lead
**Extends:** none

## Trigger
A request for new capability that carries genuine design choices — sized
[T2](../kernel/laws/engagement-tiers.md) by the orchestrator. T3 escalates to a
council + executive; T0/T1 changes belong in [bug](bug.md) or a trivial edit.

## Participants
- [orchestrator](../kernel/protocols/orchestration.md) — sizes, decomposes, routes (never builds, Directive [#2](../kernel/laws/prime-directives.md)).
- Department Lead — owns the plan and Gate A sign-off.
- Council — debates the design (Directive [#3](../kernel/laws/prime-directives.md)).
- Up to 8 builder agents — disjoint tracks, parallel.
- [Chief Auditor](../kernel/laws/decision-authority.md) — Gate B, quality veto.

## Inputs
A north-star justification (Directive [#1](../kernel/laws/prime-directives.md)),
a clear definition of done, and the registers the feature will touch.

## Steps
```
intake ─> [GATE A: design approved] ─> fan-out(≤8) ─> integrate ─> [GATE B: gates pass] ─> record
```
1. **Intake** — orchestrator — size as T2, draft the problem and constraints.
2. **Design** — council — debate options, choose one, produce a plan. `[GATE A]`
3. **Decompose** — orchestrator — partition into ≤8 disjoint tracks.
4. **Build** — builder agents — implement in parallel, no shared file.
5. **Integrate** — orchestrator — resolve seams, assemble the whole.
6. **Verify** — Chief Auditor — run the tier's quality gates. `[GATE B]`
7. **Record** — orchestrator — update the memory registers below.

## Review Gates
- **Gate A — design approved:** no track launches until the council signs the plan.
- **Gate B — quality gates passed:** the feature does not ship until
  [quality-standards](../shared/quality-standards.md) gates pass.

## Approval Process
Council signs Gate A; Chief Auditor holds the Gate B veto. See
[decision-authority](../kernel/laws/decision-authority.md). T3 variants add
executive sign-off.

## Outputs
The shipped capability, its design record, and updated docs.

## Completion Criteria
- [ ] Plan approved at Gate A.
- [ ] All tracks integrated with no overlapping ownership.
- [ ] Gate B gates pass.
- [ ] Memory registers below appended.

## Memory Updates
- [meeting-history](../memory/registers/meeting-history.md) — the design choice and its rationale.
- [roadmap](../memory/registers/roadmap.md) — what shipped, owner, date.
- [lessons-learned](../memory/registers/lessons-learned.md) — anything the build taught.

## Failure / Rollback
Gate A fails → return to design, do not fan out. Gate B fails → block ship, route
defects back to the owning track, re-verify. A live regression escalates to
[hotfix](hotfix.md).
