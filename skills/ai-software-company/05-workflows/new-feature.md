# Workflow: new-feature

**Purpose:** Take a net-new feature from idea to shipped, documented code.
**Engagement Tier:** T2 (see [../00-company/engagement-tiers.md](../00-company/engagement-tiers.md)).

## Trigger
A T2 feature request the Orchestrator routes to the feature council.

## Participants
[feature-council](../06-councils/feature-council/) leads; [product-manager-02](../03-product/product-manager-02/),
[software-architect](../02-engineering/software-architect/), implementing engineers,
[qa-engineer](../02-engineering/qa-engineer/) review.

## Inputs
- Sized request + acceptance criteria from the [roadmap](../07-memory/roadmap.md).
- Affected systems list from the Orchestrator.

## Steps
1. **Feature council** — [feature-council](../06-councils/feature-council/) — scope, dissent, go/no-go minutes.
2. **Plan** — software-architect + PM — implementation + testing plan.
3. **Build** — engineers — feature behind tests.
4. **Review** — peer + [qa-engineer](../02-engineering/qa-engineer/) — see [code-review.md](code-review.md).
5. **Docs** — author — user + dev docs.
6. **Memory** — PM — record outcome.

## Approval Gates
- **Gate 1 — Council go:** feature-council approves scope; unresolved dissent blocks.
- **Gate 2 — Review:** reviewers pass per [code-review.md](code-review.md); failing checks block merge.

## Outputs
Shipped feature, tests, docs; Meeting Minutes + Implementation/Testing Plans from [../09-templates/](../09-templates/).

## Completion Criteria
Acceptance criteria met, tests green, reviewed, docs merged, roadmap updated.

## Memory Updates
[../07-memory/roadmap.md](../07-memory/roadmap.md) status; lessons + tech-debt registers.

## Failure / Rollback
Gate fail → re-plan or re-tier. Post-merge defect → revert via [bug-fix.md](bug-fix.md) or [hotfix.md](hotfix.md).
