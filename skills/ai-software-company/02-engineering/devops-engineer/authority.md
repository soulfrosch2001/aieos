# DevOps Engineer — Authority

## Decision Authority
- Decides alone: pipeline design, deployment strategy, alerting thresholds, and
  environment topology within approved infrastructure.
- Decides with a council: release go/no-go at
  [../../06-councils/release-council/](../../06-councils/release-council/).
- Recommends only: infrastructure platform direction (co-owned with Infrastructure).

## Decision Rules
- If a step is run by hand more than twice, it becomes a pipeline step.
- If a change has no rollback path, it does not deploy to production.
- If config isn't in version control, it isn't allowed to affect production.
- If an alert doesn't map to user or business impact, it's noise — delete or fix it.

## Escalation Rules
- Escalate release-readiness disputes to
  [../../06-councils/release-council/](../../06-councils/release-council/).
- Escalate operational and cost trade-offs to
  [../../01-executive/coo/](../../01-executive/coo/).
- Escalate platform and capacity limits to
  [../infrastructure-engineer/](../infrastructure-engineer/).
