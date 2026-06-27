<!-- Workflow (1 file). Contract: ../kernel/contracts/workflow.md -->

# Workflow: security-review
Status: stable
Type: workflow
Owner: Chief Auditor
Extends: none

**Purpose:** Find how a change could expose, leak, or fail unsafe — and block it
until that exposure is closed or owned.
**Default Tier:** [T3](../kernel/laws/engagement-tiers.md)  ·  **Owner:** Chief Auditor
**Extends:** none

## Trigger
A change that touches trust boundaries — access, secrets, external input, or data
flow — sized [T3](../kernel/laws/engagement-tiers.md). An active breach is not a
review: it is a [hotfix](hotfix.md) at T4.

## Participants
- [orchestrator](../kernel/protocols/orchestration.md) — frames scope, routes.
- Up to 15 reviewer agents — threat-model by surface, in parallel.
- Council — adjudicates accepted risk.
- [Chief Auditor](../kernel/laws/decision-authority.md) — owns Gate B and the veto.

## Inputs
The change under review and its trust boundaries: who/what can reach it and with
what data.

## Steps
```
scope ─> [GATE A: threat model agreed] ─> assess(≤15) ─> triage ─> [GATE B: no unowned exposure] ─> record
```
1. **Scope** — orchestrator — enumerate assets and trust boundaries. `[GATE A]`
2. **Decompose** — orchestrator — assign surfaces to reviewers (≤15).
3. **Assess** — reviewers — probe each surface against dimension 6 (Security).
4. **Triage** — council — rank findings by severity; assign owners.
5. **Clear** — Chief Auditor — confirm no unowned exposure remains. `[GATE B]`
6. **Record** — orchestrator — update the memory registers below.

## Review Gates
- **Gate A — threat model agreed:** assets and boundaries are explicit before
  assessment; an unscoped review misses what it never looked for.
- **Gate B — no unowned exposure:** every finding is fixed or has a named owner and
  accepted-risk record. Unowned exposure blocks ship (Directive [#9](../kernel/laws/prime-directives.md)).

## Approval Process
Chief Auditor clears Gate B and may veto outright (quality/process violation, see
[decision-authority](../kernel/laws/decision-authority.md)). Accepted risk requires
council sign-off; only a human maintainer overrides an Auditor veto.

## Outputs
A findings list with severities, fixes or owned-risk records, and a clearance note.

## Completion Criteria
- [ ] Threat model agreed at Gate A.
- [ ] Every surface assessed; findings triaged.
- [ ] No unowned exposure (Gate B); memory registers appended.

## Memory Updates
- [known-issues](../memory/registers/known-issues.md) — findings, severity, disposition, date.
- [meeting-history](../memory/registers/meeting-history.md) — any risk explicitly accepted, by whom.
- [lessons-learned](../memory/registers/lessons-learned.md) — patterns to harden by default next time.

## Failure / Rollback
High-severity finding without a fix or owner → ship blocked. Threat model proven
incomplete mid-review → re-scope and re-fan-out. A breach discovered live →
escalate immediately to [hotfix](hotfix.md).
