<!-- Workflow (1 file). Contract: ../kernel/contracts/workflow.md -->

# Workflow: hotfix
Status: stable
Type: workflow
Owner: Supreme Orchestrator
Extends: feature

**Purpose:** Stop active harm in production fast, then make the fix permanent and
learn from it — speed without abandoning the gates.
**Default Tier:** [T4](../kernel/laws/engagement-tiers.md)  ·  **Owner:** Supreme Orchestrator
**Extends:** [feature](feature.md)

## Trigger
Production is down, breached, or actively harming users — a
[T4](../kernel/laws/engagement-tiers.md) crisis. Government-coordinated, all hands.
Anything not actively harming users is a [bug](bug.md), not a hotfix.

## Participants
- [Supreme Orchestrator](../kernel/laws/decision-authority.md) — declares the incident, coordinates.
- Incident council — runs the response (T4 council).
- Up to 15 agents, all hands — contain, fix, verify.
- [Chief Auditor](../kernel/laws/decision-authority.md) — Gate B, even under pressure.

## Inputs
A live impact signal: what is broken, who is affected, since when.

## Steps
```
declare ─> contain ─> [GATE A: fix is safe to ship] ─> ship ─> [GATE B: harm stopped + no new harm] ─> postmortem ─> record
```
1. **Declare** — orchestrator — open the incident, assign an incident lead.
2. **Contain** — agents — stop the bleeding (rollback, flag-off, isolate).
3. **Fix** — agents — smallest safe corrective change. `[GATE A]`
4. **Ship** — incident lead — deploy the fix.
5. **Confirm** — Chief Auditor — verify harm stopped and nothing new broke. `[GATE B]`
6. **Postmortem** — incident council — root cause and follow-ups.
7. **Record** — orchestrator — update the memory registers below.

## Review Gates
- **Gate A — fix is safe to ship:** a second agent confirms the change does not
  widen the blast radius. Speed never removes this gate (Directive [#9](../kernel/laws/prime-directives.md)).
- **Gate B — harm stopped + no new harm:** the incident closes only when impact
  is verified gone and no regression introduced.

## Approval Process
Supreme Orchestrator declares and closes the incident; Chief Auditor holds Gate B.
Permanent follow-ups route to [feature](feature.md) or [bug](bug.md). See
[escalation](../kernel/protocols/escalation.md).

## Outputs
The deployed hotfix, a containment record, and a postmortem with follow-ups.

## Completion Criteria
- [ ] Harm contained, then stopped (Gate B).
- [ ] Postmortem written with root cause and dated follow-ups.
- [ ] Memory registers appended.

## Memory Updates
- [known-issues](../memory/registers/known-issues.md) — timeline, impact, containment, fix.
- [meeting-history](../memory/registers/meeting-history.md) — irreversible calls made under pressure.
- [lessons-learned](../memory/registers/lessons-learned.md) — postmortem findings and prevention follow-ups.

## Failure / Rollback
Fix fails or worsens impact → roll back to containment, try the next option.
Containment itself fails → escalate the incident scope. The temporary fix always
gets a permanent follow-up; an un-postmortemed incident is not closed.
