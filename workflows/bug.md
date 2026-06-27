<!-- Workflow (1 file). Contract: ../kernel/contracts/workflow.md -->

# Workflow: bug
Status: stable
Type: workflow
Owner: Department Lead
Extends: none

**Purpose:** Fix a single, reproducible defect with minimal ceremony and a
regression check that keeps it fixed.
**Default Tier:** [T1](../kernel/laws/engagement-tiers.md)  ·  **Owner:** Department Lead
**Extends:** none

## Trigger
A reported defect that is understood and scoped to one change — sized
[T1](../kernel/laws/engagement-tiers.md). If it is production-down, it is not a
bug: route to [hotfix](hotfix.md). If the cause is unknown, run
[research](research.md) first.

## Participants
- [orchestrator](../kernel/protocols/orchestration.md) — sizes and routes.
- 1–3 builder agents — reproduce and fix (T1 fan-out).
- Department Lead — Gate A and Gate B sign-off (no council at T1).

## Inputs
A reproduction (steps + expected vs. actual) and the affected artifact.

## Steps
```
reproduce ─> [GATE A: root cause + fix approved] ─> fix ─> [GATE B: regression check passes] ─> record
```
1. **Reproduce** — builder — confirm the defect deterministically.
2. **Diagnose** — builder — find the root cause, propose the smallest fix. `[GATE A]`
3. **Fix** — builder — apply the change; add a check that pins the behavior.
4. **Verify** — Department Lead — run the regression check + relevant gates. `[GATE B]`
5. **Record** — orchestrator — update the memory registers below.

## Review Gates
- **Gate A — root cause + fix approved:** the lead confirms cause, not symptom,
  before any change (Directive [#3](../kernel/laws/prime-directives.md) at T1 scope).
- **Gate B — regression check passes:** the new check and existing gates must
  pass (Directive [#9](../kernel/laws/prime-directives.md)).

## Approval Process
Department Lead signs both gates. See
[decision-authority](../kernel/laws/decision-authority.md). Chief Auditor may veto
on a quality violation.

## Outputs
The fix and a regression check that fails without it.

## Completion Criteria
- [ ] Root cause identified (Gate A), not just the symptom.
- [ ] Fix applied with a pinning regression check.
- [ ] Gate B passes; memory registers appended.

## Memory Updates
- [known-issues](../memory/registers/known-issues.md) — defect, root cause, fix, date.
- [lessons-learned](../memory/registers/lessons-learned.md) — recurring-pattern note if the cause repeats.

## Failure / Rollback
Cannot reproduce → close as not-a-defect or escalate to [research](research.md).
Fix introduces a regression at Gate B → revert and re-diagnose. Defect proves
systemic → re-size to [feature](feature.md) or [architecture-review](architecture-review.md).
