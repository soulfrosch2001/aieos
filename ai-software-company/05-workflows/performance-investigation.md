# Workflow: Performance Investigation

**Purpose:** Diagnose and fix a performance regression against a budget.
**Engagement Tier:** T2 (see [../00-company/engagement-tiers.md](../00-company/engagement-tiers.md)).

## Trigger
Latency/throughput regression, budget breach, or a slow-path complaint.

## Participants
[../06-councils/performance-council/](../06-councils/performance-council/) leads, with the
[../02-engineering/performance-engineer/](../02-engineering/performance-engineer/) driving.

## Inputs
Reproduction or trace, current vs. target budget, affected workload, baseline metrics.

## Steps
1. **Measure** — performance-engineer — establish baseline; confirm the regression.
2. **Hypothesize** — performance-council — rank likely bottlenecks.
3. **Profile** — performance-engineer — confirm the real hotspot with data.
4. **Fix** — performance-engineer — apply the minimal targeted change.
5. **Verify budget** — performance-council — re-measure against the budget.

## Approval Gates
- **Gate 1 — Budget met:** council confirms the metric is back within budget with
  no new regressions elsewhere.

## Outputs
Profiling artifacts, before/after numbers, the fix, an updated budget note.

## Completion Criteria
Metric within budget, no regressions, results reproducible and recorded.

## Memory Updates
Findings and budget changes to
[../07-memory/lessons-learned.md](../07-memory/lessons-learned.md).

## Failure / Rollback
If the fix misses budget or regresses, revert and return to Hypothesize.
