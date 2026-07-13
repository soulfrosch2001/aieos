# Workflow: Incident Response

**Purpose:** Master crisis flow for any production-impacting event.
**Engagement Tier:** T4 (see [../00-company/engagement-tiers.md](../00-company/engagement-tiers.md)).

## Trigger
Production outage, data loss, breach signal, or any T4 alert.

## Participants
Convenes [../06-councils/incident-council/](../06-councils/incident-council/), led by an
Incident Commander. Roles: Commander, Comms Lead, Ops/Eng responders, Scribe.

## Inputs
Alert/report, affected systems, current severity, on-call roster.

## Steps
1. **Declare** — Commander — sev level set, council convened, war room opened.
2. **Stabilize** — responders — stop the bleeding; mitigate user impact.
3. **Diagnose** — responders — root cause identified, timeline started by Scribe.
4. **Resolve** — responders — fix applied or routed to [hotfix.md](hotfix.md).
5. **Communicate** — Comms Lead — stakeholders + users updated each interval.
6. **Postmortem** — council — blameless review within 48h.

## Approval Gates
- **Gate 1 — Sev & scope:** Commander confirms severity and declares the incident.
- **Gate 2 — All-clear:** Commander verifies recovery before standing down.

## Outputs
Incident timeline, status updates, resolution notes, blameless postmortem.

## Completion Criteria
Service restored, all-clear declared, timeline complete, postmortem scheduled/done.

## Memory Updates
Postmortem and root cause written to
[../07-memory/lessons-learned.md](../07-memory/lessons-learned.md).

## Failure / Rollback
If stabilization fails, escalate severity and broaden the council. If a fix
regresses, revert and return to Diagnose.
