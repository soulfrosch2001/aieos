# Workflow: Testing

**Purpose:** Define test strategy and enforce quality gates before merge.
**Engagement Tier:** T1 (see [../00-company/engagement-tiers.md](../00-company/engagement-tiers.md)).

## Trigger
Any change that affects behavior, or a new feature entering implementation.

## Participants
Owned by the [../02-engineering/qa-engineer/](../02-engineering/qa-engineer/),
with the implementing specialist writing tests.

## Inputs
The change, acceptance criteria, risk areas, existing coverage and CI baseline.

## Steps
1. **Strategy** — qa-engineer — pick test levels (unit/integration/e2e) and risks.
2. **Author** — specialist — write tests for new and changed behavior.
3. **Run gates** — qa-engineer — execute suite; check coverage and flakiness.
4. **Sign off** — qa-engineer — approve when gates pass.

## Approval Gates
- **Gate 1 — Quality gate:** suite green, coverage meets bar, no known flakes,
  critical paths covered.

## Outputs
Test plan, new/updated tests, coverage report, CI run record.

## Completion Criteria
All gates pass, critical paths covered, results reproducible in CI.

## Memory Updates
Coverage gaps and flaky tests to
[../07-memory/future-improvements.md](../07-memory/future-improvements.md).

## Failure / Rollback
If a gate fails, block the merge and return to Author until green.
