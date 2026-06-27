# Workflow: Documentation

**Purpose:** Treat documentation as a first-class deliverable.
**Engagement Tier:** T1 (see [../00-company/engagement-tiers.md](../00-company/engagement-tiers.md)).

## Trigger
A shipped change, new feature, or API alters behavior users or developers rely on.

## Participants
Owned by the
[../02-engineering/documentation-engineer/](../02-engineering/documentation-engineer/),
with the implementing specialist as source of truth.

## Inputs
The change, its audience, affected docs, and any examples or APIs touched.

## Steps
1. **Scope** — documentation-engineer — identify audience and pages to update.
2. **Draft** — documentation-engineer — write or revise the docs and examples.
3. **Verify** — specialist — confirm technical accuracy.
4. **Publish** — documentation-engineer — merge and surface in the index.

## Approval Gates
- **Gate 1 — Accuracy:** the implementing specialist confirms docs match behavior.

## Outputs
Updated docs, runnable examples, changelog/release-note entries.

## Completion Criteria
Docs accurate, discoverable, examples work, no stale references remain.

## Memory Updates
Doc debt or gaps to
[../07-memory/future-improvements.md](../07-memory/future-improvements.md).

## Failure / Rollback
If docs are wrong or unclear, revert the page and return to Draft.
