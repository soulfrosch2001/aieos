<!-- Workflow (1 file). Contract: ../kernel/contracts/workflow.md -->

# Workflow: release
Status: stable
Type: workflow
Owner: COO
Extends: none

**Purpose:** Cut a versioned release from integrated work, verify it end-to-end,
and ship it with a clean record and a rollback ready.
**Default Tier:** [T3](../kernel/laws/engagement-tiers.md)  ·  **Owner:** COO
**Extends:** none

## Trigger
Integrated work is ready to ship as a named version — sized
[T3](../kernel/laws/engagement-tiers.md) because it crosses tracks and is
externally visible. The COO owns what ships when
([decision-authority](../kernel/laws/decision-authority.md)).

## Participants
- [orchestrator](../kernel/protocols/orchestration.md) — assembles the candidate, routes.
- [COO](../kernel/laws/decision-authority.md) — owns the go/no-go.
- Up to 15 agents — verify scope, docs, and migration in parallel.
- [Chief Auditor](../kernel/laws/decision-authority.md) — Gate B quality clearance.

## Inputs
A release candidate: the integrated changes, their scope, and a draft changelog.

## Steps
```
assemble ─> [GATE A: scope frozen] ─> verify(≤15) ─> [GATE B: gates pass + rollback ready] ─> ship ─> record
```
1. **Assemble** — orchestrator — gather the candidate and freeze its scope. `[GATE A]`
2. **Verify** — agents — confirm scope, docs, and migration path in parallel.
3. **Clear** — Chief Auditor — run the tier's quality gates; confirm rollback. `[GATE B]`
4. **Go/No-go** — COO — make the ship decision.
5. **Ship** — orchestrator — release the version, publish the changelog.
6. **Record** — orchestrator — update the memory registers below.

## Review Gates
- **Gate A — scope frozen:** the changelog matches the candidate; nothing ships
  that wasn't reviewed. Late additions re-open the gate.
- **Gate B — gates pass + rollback ready:** quality gates pass and a tested
  rollback exists before ship (Directives [#9](../kernel/laws/prime-directives.md), fail-safe).

## Approval Process
COO holds go/no-go; Chief Auditor clears Gate B and may veto. See
[decision-authority](../kernel/laws/decision-authority.md). A failed release
escalates to [hotfix](hotfix.md).

## Outputs
The shipped version, a published changelog, and a verified rollback.

## Completion Criteria
- [ ] Scope frozen and changelog accurate (Gate A).
- [ ] Quality gates pass and rollback tested (Gate B).
- [ ] Version shipped; memory registers appended.

## Memory Updates
- [roadmap](../memory/registers/roadmap.md) — version, scope, date, go/no-go owner.
- [meeting-history](../memory/registers/meeting-history.md) — the go/no-go and any deferred items.
- [lessons-learned](../memory/registers/lessons-learned.md) — release-process improvements.

## Failure / Rollback
Gate fails → no-go; defects route back to the owning track. Post-ship regression
→ execute the prepared rollback and open a [hotfix](hotfix.md). Scope changes
mid-flight → re-freeze at Gate A, never ship un-reviewed scope.
