# Workflow: bug-fixing

**Purpose:** Resolve a confirmed defect with a regression-proof, reviewed fix — and learn from it.
**Default Tier:** T1 (a normal defect). Live-game blockers go to [hotfix.md](hotfix.md) (T4) instead.

## Purpose
Bugs are the studio's interest payments on complexity. The rule that keeps the codebase honest: *no failing test, no fix.* A bug fixed without a reproduction is a bug that will return. This workflow captures the defect, fixes it minimally, and guards the regression.

## Participants
- One implementing engineer (department by component) leads — e.g. [gameplay-programmer](../03-programming/gameplay-programmer/), [engine-programmer](../03-programming/engine-programmer/).
- [bug-hunter](../07-qa/bug-hunter/) — confirms repro and severity.
- [regression-tester](../07-qa/regression-tester/) — owns the regression suite.
- One peer reviewer.
- [qa-lead](../07-qa/qa-lead/) — triage and severity authority.

## Inputs
- A bug report with reproduction steps from [../10-memory/known-bugs.md](../10-memory/known-bugs.md).
- Affected component + severity from triage.

## Steps
```
triage → reproduce (failing test) → [GATE: repro?] → minimal fix → regression test →
peer review → merge → record
```
1. **Triage** — qa-lead confirms severity and routes to the owning department.
2. **Reproduce** — engineer writes a *failing test / repro case* that captures the bug.
3. **Repro gate** — no reliable repro, no fix; bounce back to reporter.
4. **Minimal fix** — smallest change that makes the test pass; no opportunistic refactor.
5. **Regression test** — regression-tester adds the case to the suite.
6. **Review** — peer + QA approve; failing CI blocks merge.
7. **Record** — engineer updates memory and changelog.

## Review Gates
- **Gate A — Repro gate:** the failing case exists before any fix.
- **Gate B — Review gate:** peer + QA approve; CI green required to merge.

## Approval Process
T1: owning [lead-programmer](../03-programming/lead-programmer/) or department lead via the reviewer. Severity disputes escalate to [qa-lead](../07-qa/qa-lead/), who holds quality veto per [Prime Directive 7](../00-company/COMPANY.md).

## Outputs
Fix + regression test, changelog entry, updated bug status.

## Completion Criteria
Bug no longer reproduces, regression test green and committed, reviewed and merged, memory updated.

## Memory Updates
- [../10-memory/known-bugs.md](../10-memory/known-bugs.md) — status → fixed, with the fixing commit.
- [../10-memory/lessons-learned.md](../10-memory/lessons-learned.md) — if the root cause is instructive.
- [../10-memory/technical-debt.md](../10-memory/technical-debt.md) — if a shortcut was taken.
