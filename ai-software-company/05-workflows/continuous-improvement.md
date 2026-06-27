# Workflow: Continuous Improvement

**Purpose:** Post-task scan that emits improvement PROPOSALS only — never side edits.
**Engagement Tier:** T0 (see [../00-company/engagement-tiers.md](../00-company/engagement-tiers.md)).

## Trigger
Runs at the end of any completed task or workflow.

## Participants
The specialist who did the work, per
[../00-company/continuous-improvement.md](../00-company/continuous-improvement.md).

## Inputs
The completed change, observations made during it, and any friction encountered.

## Steps
1. **Scan** — specialist — note debt, gaps, and friction seen during the task.
2. **Filter** — specialist — keep only items in scope of what was observed.
3. **Propose** — specialist — append each as a PROPOSAL (no unrelated edits).

## Approval Gates
- **Gate 1 — Proposals only:** no code or unrelated files are changed; output is
  strictly appended proposals.

## Outputs
A list of improvement proposals — and nothing else.

## Completion Criteria
Proposals appended; the working tree carries no unrelated edits.

## Memory Updates
Proposals appended to
[../07-memory/future-improvements.md](../07-memory/future-improvements.md).

## Failure / Rollback
If the scan strays into unrelated edits, discard them and re-run as proposals only.
