# Workflow: Hotfix

**Purpose:** Minimal urgent fix to production with retroactive review.
**Engagement Tier:** T4 (see [../00-company/engagement-tiers.md](../00-company/engagement-tiers.md)).

## Trigger
A live incident needs an immediate fix that cannot wait for the full flow.

## Participants
Incident Commander authorizes; one specialist implements; one reviewer co-signs.
Spawned from [incident-response.md](incident-response.md).

## Inputs
Confirmed root cause, smallest viable fix, rollback plan.

## Steps
1. **Authorize** — Commander — approve the urgent path, scope the fix.
2. **Implement** — specialist — smallest change that resolves impact.
3. **Co-sign** — reviewer — fast sanity check; confirm rollback exists.
4. **Deploy** — specialist — ship and watch health.
5. **Retroactive review** — council — full review within 24h, post-incident.

## Approval Gates
- **Gate 1 — Authorize:** Commander confirms a hotfix (not full release) is warranted.
- **Gate 2 — Retroactive:** council validates the fix or schedules a proper follow-up.

## Outputs
The fix, deploy record, rollback plan, retroactive review notes.

## Completion Criteria
Impact resolved, health nominal, retroactive review completed.

## Memory Updates
Fix and follow-ups to
[../07-memory/lessons-learned.md](../07-memory/lessons-learned.md).

## Failure / Rollback
If the hotfix regresses, roll back immediately and escalate via
[incident-response.md](incident-response.md).
