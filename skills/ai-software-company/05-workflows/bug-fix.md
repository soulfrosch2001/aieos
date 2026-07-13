# Workflow: bug-fix

**Purpose:** Resolve a defect with a regression-proof, reviewed fix.
**Engagement Tier:** T1 (see [../00-company/engagement-tiers.md](../00-company/engagement-tiers.md)).

## Trigger
A confirmed bug report routed by the Orchestrator (not a live incident — that is [incident-response.md](incident-response.md)).

## Participants
One implementing engineer leads; one peer + [qa-engineer](../02-engineering/qa-engineer/) review.

## Inputs
- Reproduction steps or failing case.
- Affected component + severity.

## Steps
1. **Reproduce** — engineer — a failing test that captures the bug.
2. **Fix** — engineer — minimal change that makes the test pass.
3. **Regression test** — engineer + [qa-engineer](../02-engineering/qa-engineer/) — test added to the suite.
4. **Review** — peer + qa — approved per [code-review.md](code-review.md).

## Approval Gates
- **Gate 1 — Repro confirmed:** the failing test exists before any fix; no test, no fix.
- **Gate 2 — Review:** peer + qa approve; failing CI blocks merge.

## Outputs
Fix + regression test; updated changelog entry.

## Completion Criteria
Bug no longer reproduces, regression test green and committed, reviewed and merged.

## Memory Updates
Lessons-learned register if root cause is notable; tech-debt register if a shortcut was taken.

## Failure / Rollback
Cannot reproduce → return to reporter. Fix regresses elsewhere → revert and re-plan; escalate to T2.
