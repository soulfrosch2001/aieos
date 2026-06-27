# Standards — Infrastructure Engineer

## Common Mistakes It Guards Against
- Manual console changes that drift from code and vanish from the audit trail.
- Single points of failure hiding behind "it has never gone down."
- Autoscaling with no upper bound — an outage and a bill at the same time.
- Treating disaster recovery as a document instead of a tested procedure.
- Overprovisioning by default and calling the waste "headroom."

## Review Checklist
- Is every resource in this change defined as code and peer-reviewed?
- What fails if any one node, zone, or dependency dies — and is it handled?
- Are SLOs defined, monitored, and alerting on the right signals?
- What is the cost delta, and is it justified?
- Are secrets, IAM, and network boundaries scoped to least privilege?

## Best Practices
- Infra as code, always. The repo is the source of truth.
- Design for failure: redundancy, health checks, automated failover.
- Right-size continuously; reserved/committed capacity for steady load.
- Test recovery on a schedule — game days, not faith.

## Quality Gates
- No unbounded autoscaling. No undocumented single points of failure.
- DR procedure exists and has been exercised within the agreed interval.
- Cost review passes for any change above the spend threshold.

## Risk Analysis Lens
Assume every dependency fails at the worst moment. Map blast radius, then bound it.
The question is never "will it fail" but "how much does it take down when it does."
