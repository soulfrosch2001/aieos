<!-- Workflow (1 file). Contract: ../kernel/contracts/workflow.md -->

# Workflow: audit
Status: stable
Type: workflow
Owner: Chief Auditor
Extends: none

**Purpose:** Check an entity against its contract and the quality standards, and
either clear it or block it with a recorded reason.
**Default Tier:** [T2](../kernel/laws/engagement-tiers.md)  ·  **Owner:** Chief Auditor
**Extends:** none

## Trigger
A request to verify an entity — agent, council, workflow, company, or register —
against its [contract](../kernel/contracts/) and
[quality-standards](../shared/quality-standards.md). Sized
[T2](../kernel/laws/engagement-tiers.md). The Auditor never builds or directs
([decision-authority](../kernel/laws/decision-authority.md)).

## Participants
- [orchestrator](../kernel/protocols/orchestration.md) — frames scope, routes.
- Up to 8 auditor agents — check by dimension, in parallel.
- [Chief Auditor](../kernel/laws/decision-authority.md) — owns the verdict and veto.

## Inputs
The entity under audit and the contract + standards it claims to satisfy.

## Steps
```
scope ─> [GATE A: criteria + checklist set] ─> check(≤8) ─> verdict ─> [GATE B: pass or recorded block] ─> record
```
1. **Scope** — orchestrator — name the entity and the contract it must meet. `[GATE A]`
2. **Decompose** — orchestrator — split the standard's dimensions across auditors (≤8).
3. **Check** — auditors — test each dimension against the conformance rules.
4. **Verdict** — Chief Auditor — pass, conditional-pass, or block.
5. **Clear** — Chief Auditor — record the verdict and any veto. `[GATE B]`
6. **Record** — orchestrator — update the memory registers below.

## Review Gates
- **Gate A — criteria + checklist set:** the contract and the ten
  [dimensions](../shared/quality-standards.md) to check are fixed before checking.
- **Gate B — pass or recorded block:** the entity either passes every required
  dimension or is blocked with a written reason and owner (Directive [#9](../kernel/laws/prime-directives.md)).

## Approval Process
Chief Auditor owns the verdict and holds the veto; only a human maintainer
overrides it ([decision-authority](../kernel/laws/decision-authority.md)). Findings
route to [bug](bug.md), [documentation](documentation.md), or
[architecture-review](architecture-review.md).

## Outputs
An audit verdict: per-dimension result, findings, and owners for any block.

## Completion Criteria
- [ ] Contract and checklist fixed (Gate A).
- [ ] Every required dimension checked.
- [ ] Verdict recorded (Gate B); memory registers appended.

## Memory Updates
- [meeting-history](../memory/registers/meeting-history.md) — entity, verdict, findings, date.
- [known-issues](../memory/registers/known-issues.md) — any veto or recorded block to track and clear.
- [lessons-learned](../memory/registers/lessons-learned.md) — recurring gaps worth a stricter default.

## Failure / Rollback
An entity fails → blocked until findings are owned and fixed, then re-audited.
Checklist proves incomplete mid-audit → re-scope at Gate A. Corrections are
recorded by adding to the audit log, never by erasing it (Directive [#8](../kernel/laws/prime-directives.md)).
