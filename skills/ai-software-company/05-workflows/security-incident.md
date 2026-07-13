# Workflow: Security Incident

**Purpose:** Contain and eradicate a security breach end to end.
**Engagement Tier:** T4 (see [../00-company/engagement-tiers.md](../00-company/engagement-tiers.md)).

## Trigger
Confirmed or suspected breach, intrusion, leaked credential, or exploit in the wild.

## Participants
[../06-councils/security-council/](../06-councils/security-council/) leads, with the
Chief Auditor as accountable owner and the
[../02-engineering/security-engineer/](../02-engineering/security-engineer/) responding.

## Inputs
Detection signal, affected assets/data, blast-radius estimate, access logs.

## Steps
1. **Detect** — security-engineer — confirm true positive; classify severity.
2. **Contain** — security-council — isolate systems, rotate/revoke credentials.
3. **Eradicate** — security-engineer — remove foothold, patch the vector.
4. **Recover** — security-council — restore from clean state, monitor for recurrence.
5. **Postmortem** — Chief Auditor — blameless review, disclosure decision.

## Approval Gates
- **Gate 1 — Containment:** Chief Auditor confirms blast radius is bounded.
- **Gate 2 — Eradication verified:** Chief Auditor signs off before recovery.

## Outputs
Containment record, eradication notes, recovery plan, disclosure statement.

## Completion Criteria
Vector closed, systems clean, monitoring in place, disclosure handled, postmortem done.

## Memory Updates
Root cause and controls to
[../07-memory/lessons-learned.md](../07-memory/lessons-learned.md).

## Failure / Rollback
If eradication is incomplete, re-isolate and escalate via
[incident-response.md](incident-response.md).
