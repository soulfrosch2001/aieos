# Workflow: deployment

**Purpose:** Ship an approved, merged change to an environment safely.
**Engagement Tier:** Scales with the change; T3+ for production-critical. See [../00-company/engagement-tiers.md](../00-company/engagement-tiers.md).

## Trigger
A merged, reviewed change cut for release (see [release.md](release.md)).

## Participants
[devops-engineer](../02-engineering/devops-engineer/) leads;
[infrastructure-engineer](../02-engineering/infrastructure-engineer/) + author on standby.

## Inputs
- Release artifact + version tag from [release.md](release.md).
- Green CI, migration plan, rollback plan.

## Steps
1. **Pre-flight** — devops-engineer — verify artifact, config, migrations, rollback ready.
2. **Stage** — devops-engineer — deploy to staging; run smoke tests.
3. **Promote** — devops-engineer — roll out to production (canary/blue-green where available).
4. **Verify** — devops + author — health checks, metrics, error rates within bounds.

## Approval Gates
- **Gate 1 — Pre-flight:** rollback + migration plans confirmed; missing plan blocks deploy.
- **Gate 2 — Health check:** post-deploy metrics nominal; breach triggers rollback.

## Outputs
Deployed version; deployment record; updated runbook notes.

## Completion Criteria
Promoted to production, health verified, version recorded, rollback path proven.

## Memory Updates
Deployment log; lessons-learned register on any incident or near-miss.

## Failure / Rollback
Health breach → devops-engineer executes rollback to last good version, then opens [hotfix.md](hotfix.md) or [incident-response.md](incident-response.md).
