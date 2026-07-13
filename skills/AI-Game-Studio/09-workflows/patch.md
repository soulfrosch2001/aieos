# Workflow: patch

**Purpose:** Bundle and ship a planned update — bug fixes, balance changes, small content — to a live game on a predictable cadence.
**Default Tier:** **T2 — Significant** (a scheduled live update). Larger content rides [dlc.md](dlc.md)/[expansion.md](expansion.md).

## Purpose
A patch is the steady heartbeat of a live game. Unlike a [hotfix.md](hotfix.md), it is planned, batched, and fully tested — players trust a studio whose patches don't introduce new fires. This workflow assembles a patch from the backlog, certifies it, and ships it with clear notes.

## Participants
- [producer](../06-production/producer/) — owns scope and the patch train.
- [roadmap-manager](../06-production/roadmap-manager/) — slots the patch on the cadence.
- Implementing engineers per fix/feature (various departments).
- [balance-designer](../02-design/balance-designer/) — balance changes via [balancing.md](balancing.md).
- [qa-lead](../07-qa/qa-lead/) + [regression-tester](../07-qa/regression-tester/) — certification.
- [release-council](../08-councils/release-council/) — patch Go/No-Go.
- [community-manager](../11-marketing/community-manager/) — patch notes + sentiment.

## Inputs
- Prioritized backlog: [../10-memory/known-bugs.md](../10-memory/known-bugs.md), [../10-memory/community-feedback.md](../10-memory/community-feedback.md), [../10-memory/balancing-history.md](../10-memory/balancing-history.md).
- The patch cadence slot from [../10-memory/roadmap.md](../10-memory/roadmap.md).

## Steps
```
scope from backlog → lock contents → build → full regression + balance verify → patch notes →
[GATE: Go/No-Go] → deploy → monitor → memory
```
1. **Scope** — producer + roadmap-manager pick fixes/changes that fit the slot and risk budget.
2. **Lock contents** — freeze the manifest; late additions need explicit re-approval.
3. **Build & integrate** — engineers land fixes; balance changes go through [balancing.md](balancing.md).
4. **Certify** — qa-lead runs full regression; verify balance changes against data.
5. **Patch notes** — community-manager drafts clear, honest notes (including known issues).
6. **Go/No-Go gate** — release-council approves; veto holders present.
7. **Deploy & monitor** — ship on cadence; watch telemetry + sentiment for new fires.
8. **Record** — producer updates memory.

## Review Gates
- **Gate A — Content lock:** the manifest is frozen and reviewed.
- **Gate B — Regression gate:** full regression green; no new crashes (hard block).
- **Gate C — Go/No-Go gate:** [release-council](../08-councils/release-council/) approves.

## Approval Process
T2: [release-council](../08-councils/release-council/) + [producer](../06-production/producer/). [qa-lead](../07-qa/qa-lead/) holds the regression veto; [production-director](../01-executive/production-director/) owns the ship call.

## Outputs
A shipped patch, patch notes, certification record, and a monitored post-deploy window.

## Completion Criteria
Content lock + regression + Go/No-Go gates passed, patch live, no new incidents in the watch window, memory updated.

## Memory Updates
- [../10-memory/known-bugs.md](../10-memory/known-bugs.md) — fixed items → closed.
- [../10-memory/balancing-history.md](../10-memory/balancing-history.md) — shipped tuning.
- [../10-memory/roadmap.md](../10-memory/roadmap.md) — patch shipped.
- [../10-memory/community-feedback.md](../10-memory/community-feedback.md) — post-patch sentiment.
