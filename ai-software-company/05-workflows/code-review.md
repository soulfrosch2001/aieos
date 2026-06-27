# Workflow: code-review

**Purpose:** Gate every change on correctness, quality, and safety before merge.
**Engagement Tier:** All tiers (depth scales with tier). See [../00-company/engagement-tiers.md](../00-company/engagement-tiers.md).

## Trigger
A change is ready for merge: open PR or equivalent.

## Participants
At least one peer reviewer; [qa-engineer](../02-engineering/qa-engineer/) for tests;
[security-engineer](../02-engineering/security-engineer/) for security-sensitive diffs.

## Inputs
- The diff, its plan, and passing CI.
- Linked workflow (feature, bug-fix, refactoring).

## Steps
1. **Self-review** — author — diff is minimal, scoped, CI green.
2. **Peer review** — reviewer — correctness, readability, design fit.
3. **Quality review** — [qa-engineer](../02-engineering/qa-engineer/) — test coverage + edge cases.
4. **Security pass** — security-engineer — only when the diff touches auth, data, or inputs.

## What reviewers check
Correctness · scope creep · naming/clarity · test coverage · error handling · security · perf regressions · docs.

## Approval Gates
- **Gate 1 — Approvals:** required reviewers approve; unresolved comment blocks merge.
- **Gate 2 — Green CI:** all checks pass; red CI blocks merge.

## Outputs
Approved, merged change; review comments archived on the PR.

## Completion Criteria
Required approvals granted, CI green, comments resolved, merged.

## Memory Updates
Recurring review findings feed the lessons-learned and continuous-improvement registers.

## Failure / Rollback
Changes requested → author revises and re-requests. Bad merge → revert and reopen the source workflow.
