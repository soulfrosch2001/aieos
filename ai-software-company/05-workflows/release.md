# Workflow: Release

**Purpose:** Ship a release through a go/no-go gate.
**Engagement Tier:** T2+ (see [../00-company/engagement-tiers.md](../00-company/engagement-tiers.md)).

## Trigger
A release candidate is ready and a ship decision is required.

## Participants
[../06-councils/release-council/](../06-councils/release-council/) runs go/no-go.
The [../01-executive/coo/](../01-executive/coo/) owns the release; the Chief Auditor
holds a blocking vote.

## Inputs
Release candidate, changelog, test/QA results, rollback plan, risk summary.

## Steps
1. **Stage** — COO — assemble candidate, changelog, and rollback plan.
2. **Go/No-Go** — release-council — review readiness; record each vote.
3. **Ship** — COO — deploy on approval; monitor health.
4. **Verify** — release-council — confirm post-release metrics are healthy.

## Approval Gates
- **Gate 1 — Go/No-Go:** council approves; the Chief Auditor may block on
  unresolved risk, compliance, or quality concerns.
- **Gate 2 — Post-release health:** COO confirms metrics nominal before closing.

## Outputs
Go/no-go minutes, deployment record, post-release health report.

## Completion Criteria
Released, metrics healthy, rollback plan validated, gate decisions recorded.

## Memory Updates
Decision and outcome to
[../07-memory/lessons-learned.md](../07-memory/lessons-learned.md).

## Failure / Rollback
On a no-go, return to the owning team. On post-release failure, execute the
rollback plan and route to [hotfix.md](hotfix.md).
