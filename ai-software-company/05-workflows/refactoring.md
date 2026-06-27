# Workflow: refactoring

**Purpose:** Improve internal structure with zero observable behavior change.
**Engagement Tier:** T1 (local) or T2 (cross-cutting). See [../00-company/engagement-tiers.md](../00-company/engagement-tiers.md).

## Trigger
A proposal to reduce tech debt or clarify code, often from the continuous-improvement scan.

## Participants
Proposing engineer leads; [software-architect](../02-engineering/software-architect/) approves T2 scope;
peer + [qa-engineer](../02-engineering/qa-engineer/) review.

## Inputs
- Target code + the smell/debt it addresses.
- Existing test coverage of the affected behavior.

## Steps
1. **Propose** — engineer — written rationale + blast radius; T2 also needs architect sign-off.
2. **Approve** — software-architect (T2) / peer (T1) — go/no-go.
3. **Pin behavior** — engineer — add characterization tests if coverage is thin.
4. **Refactor behind tests** — engineer — restructure with the suite green throughout.
5. **Review** — peer + qa — confirm no behavior change per [code-review.md](code-review.md).

## Approval Gates
- **Gate 1 — Approve scope:** architect (T2) confirms it is worth doing and bounded.
- **Gate 2 — No behavior change:** identical test outcomes before/after; any diff in behavior blocks.

## Outputs
Restructured code; new characterization tests; tech-debt register update.

## Completion Criteria
Same external behavior, full suite green, reviewed and merged, debt entry closed.

## Memory Updates
Tech-debt register (closed item); architecture-decisions if structure shifted materially.

## Failure / Rollback
Tests reveal behavior drift → revert immediately; reopen as a [new-feature.md](new-feature.md) or [bug-fix.md](bug-fix.md).
