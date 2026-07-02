<!-- Memory register (append-mostly). Contract: ../../kernel/contracts/memory-register.md -->

# Forge Lessons
Status: experimental
Type: memory-register
Owner: CTO (Government)
Extends: lessons-learned

**Purpose:** what Forge runtime runs taught us, captured automatically so the next
run starts smarter than the last. The runtime appends one entry on every successful
run (`outcome: done`); the corpus it builds is retrieved and injected back into later
runs as a "Retrieved memory" block.
**Discipline:** append-mostly — entries are added, never edited or deleted; a lesson
that no longer holds is superseded by a newer entry, with the old one left in place so
we remember why we believed it ([Directive #8](../../kernel/laws/prime-directives.md)).

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| Trigger | The run that produced the entry (agent + outcome). |
| Lesson | The reusable takeaway — goal, agent, and what the run achieved. |
| Scope | `agent` · `department` · `company` — who it binds. |
| Confidence | `tentative` (gate not clean) · `firm` (gate clean). |
| Links | The trace or register that evidences it. |

## Example entry
| 2026-06-27 | balance-scout run (done) | Goal "list the repo and finish": dry-run loop completes end-to-end | agent | firm | memory/registers/forge-lessons.md |

## Who updates this & when
The Forge runtime appends an entry automatically on every `done` outcome, in the
trusted runtime (never via an agent's `write_file`, so the workspace guardrail is never
relaxed). Set `FORGE_MEMORY=off` to disable both the append and the retrieval injection.
The CTO curates: firm, broadly useful lessons graduate up into
[lessons-learned](lessons-learned.md).

## Flow
- Knowledge flows **down**: a lesson from one run is retrieved into later runs so the
  next agent does not relearn it ([Directive #6](../../kernel/laws/prime-directives.md)).
See [../../kernel/protocols/memory-flow.md](../../kernel/protocols/memory-flow.md).
| 2026-06-27 | balance-scout run (done) | Goal "List the repo and finish." via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-06-27 | balance-scout run (done) | Goal "smoke goal" via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-06-27 | balance-scout run (done) | Goal "List the repo and finish." via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-06-27 | balance-scout run (done) | Goal "List the repo and finish." via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-06-27 | balance-scout run (done) | Goal "List the repo and finish." via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-06-27 | balance-scout run (done) | Goal "Smoke test: list the repo and finish." via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-06-27 | balance-scout run (done) | Goal "delegate-smoke: decompose and finish" via balance-scout: Dry-run complete — the delegate sub-run path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-06-27 | balance-scout run (done) | Goal "Smoke test: list the repo and finish." via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-06-27 | balance-scout/sub run (done) | Goal "Sub-task: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-06-27 | balance-scout run (done) | Goal "Smoke test: list the repo and finish." via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-06-27 | balance-scout/sub run (done) | Goal "Sub-task: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-06-27 | balance-scout run (done) | Goal "delegate-smoke: decompose and finish" via balance-scout: Dry-run complete — the delegate sub-run path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-06-27 | balance-scout run (done) | Goal "List the repo and finish." via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-06-27 | balance-scout run (done) | Goal "List the repo and finish." via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-06-27 | balance-scout run (done) | Goal "Smoke test: list the repo and finish." via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-06-27 | balance-scout/sub run (done) | Goal "Sub-task: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-06-27 | balance-scout run (done) | Goal "delegate-smoke: decompose and finish" via balance-scout: Dry-run complete — the delegate sub-run path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-06-27 | balance-scout run (done) | Goal "balance economy telemetry" via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-06-27 | balance-scout run (done) | Goal "balance economy telemetry" via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-06-27 | balance-scout run (budget_exhausted) | Goal "force budget exhaustion test" via balance-scout: budget_exhausted: run ended as "budget_exhausted", not a model-driven finish | agent | tentative | memory/registers/forge-lessons.md |
| 2026-06-27 | balance-scout run (done) | Goal "balance economy telemetry" via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-06-27 | balance-scout run (done) | Goal "balance economy telemetry" via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-06-27 | balance-scout run (done) | Goal "balance economy" via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-06-27 | balance-scout run (done) | Goal "smoke" via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-06-27 | balance-scout run (done) | Goal "smoke" via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "smoke" via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "Smoke test: list the repo and finish." via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/baseline run (done) | Goal "Smoke test: list the repo and finish." via balance-scout/baseline: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/routed run (done) | Goal "Smoke test: list the repo and finish." via balance-scout/routed: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/baseline run (done) | Goal "Inspect the workspace and report what you see, then finish." via balance-scout/baseline: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/routed run (done) | Goal "Inspect the workspace and report what you see, then finish." via balance-scout/routed: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/baseline run (done) | Goal "Smoke test: list the repo and finish." via balance-scout/baseline: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/routed run (done) | Goal "Smoke test: list the repo and finish." via balance-scout/routed: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/baseline run (done) | Goal "Inspect the workspace and report what you see, then finish." via balance-scout/baseline: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/routed run (done) | Goal "Inspect the workspace and report what you see, then finish." via balance-scout/routed: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "smoke" via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "smoke" via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/baseline run (done) | Goal "Smoke test: list the repo and finish." via balance-scout/baseline: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/routed run (done) | Goal "Smoke test: list the repo and finish." via balance-scout/routed: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/baseline run (done) | Goal "Inspect the workspace and report what you see, then finish." via balance-scout/baseline: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/routed run (done) | Goal "Inspect the workspace and report what you see, then finish." via balance-scout/routed: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "smoke check router" via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "test max steps zero" via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "test claim" via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "list the repo and finish" via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "test goal" via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "delegate-smoke: decompose and finish" via balance-scout: Dry-run complete — the delegate sub-run path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task A: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task B: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "parallel-delegate-smoke: decompose two and finish" via balance-scout: Dry-run complete — the parallel delegate fan-out path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task A: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task B: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "parallel-delegate-smoke: decompose two and finish" via balance-scout: Dry-run complete — the parallel delegate fan-out path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (stuck) | Goal "checkpoint-smoke: run long enough" via balance-scout: Stopped: repeated the same action 3 times. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "checkpoint-smoke: run long enough" via balance-scout: Dry-run complete — ran long enough for a checkpoint to fire. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "Smoke test: list the repo and finish." via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task A: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task B: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "delegate-smoke: decompose and finish" via balance-scout: Dry-run complete — the parallel delegate fan-out path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task A: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task B: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "parallel-delegate-smoke: decompose two and finish" via balance-scout: Dry-run complete — the parallel delegate fan-out path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task A: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task B: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "delegate-smoke: decompose and finish" via balance-scout: Dry-run complete — the parallel delegate fan-out path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task A: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task B: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "delegate-smoke: decompose and finish" via balance-scout: Dry-run complete — the parallel delegate fan-out path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "delegate-smoke: decompose and finish" via balance-scout: Dry-run complete — the delegate sub-run path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task A: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task B: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "parallel-delegate-smoke: decompose two and finish" via balance-scout: Dry-run complete — the parallel delegate fan-out path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "checkpoint-smoke: run long enough" via balance-scout: Dry-run complete — ran long enough for a checkpoint to fire. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "Smoke test: list the repo and finish." via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "readmany-smoke: batch read two files" via balance-scout: Dry-run complete — the read_many batch path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "csv-smoke: write and verify" via balance-scout: Dry-run complete — the write_csv path works end-to-end. | agent | firm | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "csv-smoke: write and verify" via balance-scout: Dry-run complete — the write_csv path works end-to-end. | agent | firm | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "csv-smoke: write and verify" via balance-scout: Dry-run complete — the write_csv path works end-to-end. | agent | firm | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "Smoke test: list the repo and finish." via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "delegate-smoke: decompose and finish" via balance-scout: Dry-run complete — the delegate sub-run path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task A: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task B: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "parallel-delegate-smoke: decompose two and finish" via balance-scout: Dry-run complete — the parallel delegate fan-out path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "checkpoint-smoke: run long enough" via balance-scout: Dry-run complete — ran long enough for a checkpoint to fire. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "readmany-smoke: batch read two files" via balance-scout: Dry-run complete — the read_many batch path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "csv-smoke: write and verify" via balance-scout: Dry-run complete — the write_csv path works end-to-end. | agent | firm | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "runcode-smoke: run a script" via balance-scout: Dry-run complete — the run_code path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "runcode-smoke: run a script" via balance-scout: Dry-run complete — the run_code path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "delegate-smoke: decompose and finish" via balance-scout: Dry-run complete — the delegate sub-run path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task A: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task B: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "parallel-delegate-smoke: decompose two and finish" via balance-scout: Dry-run complete — the parallel delegate fan-out path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "checkpoint-smoke: run long enough" via balance-scout: Dry-run complete — ran long enough for a checkpoint to fire. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "readmany-smoke: batch read two files" via balance-scout: Dry-run complete — the read_many batch path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "csv-smoke: write and verify" via balance-scout: Dry-run complete — the write_csv path works end-to-end. | agent | firm | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "runcode-smoke: run a script" via balance-scout: Dry-run complete — the run_code path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "runcode-smoke: run a script" via balance-scout: Dry-run complete — the run_code path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "delegate-smoke: decompose and finish" via balance-scout: Dry-run complete — the delegate sub-run path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "pptx-smoke: write a deck" via balance-scout: Dry-run complete — the write_pptx path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "delegate-smoke: decompose and finish" via balance-scout: Dry-run complete — the delegate sub-run path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task A: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout/sub run (done) | Goal "Sub-task B: inspect the workspace and finish." via balance-scout/sub: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "parallel-delegate-smoke: decompose two and finish" via balance-scout: Dry-run complete — the parallel delegate fan-out path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "checkpoint-smoke: run long enough" via balance-scout: Dry-run complete — ran long enough for a checkpoint to fire. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "readmany-smoke: batch read two files" via balance-scout: Dry-run complete — the read_many batch path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "csv-smoke: write and verify" via balance-scout: Dry-run complete — the write_csv path works end-to-end. | agent | firm | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "runcode-smoke: run a script" via balance-scout: Dry-run complete — the run_code path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "pptx-smoke: write a deck" via balance-scout: Dry-run complete — the write_pptx path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "Smoke test: list the repo and finish." via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "stagnation-smoke: get stuck on purpose" via balance-scout: Dry-run complete — ran long enough to exercise stagnation detection. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "stagnation-smoke: get stuck on purpose" via balance-scout: Dry-run complete — ran long enough to exercise stagnation detection. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "stagnation-smoke: get stuck on purpose" via balance-scout: Dry-run complete — ran long enough to exercise stagnation detection. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "Smoke test: list the repo and finish." via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "Smoke test: list the repo and finish." via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "Smoke test: list the repo and finish." via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "Smoke test: list the repo and finish." via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "resume-smoke" via balance-scout: resume-context-absent | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "resume-smoke" via balance-scout: resume-context-seen | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "Smoke test: list the repo and finish." via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "delegate-smoke" via balance-scout: Dry-run complete — the delegate sub-run path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "parallel-delegate-smoke" via balance-scout: Dry-run complete — the parallel delegate fan-out path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "checkpoint-smoke" via balance-scout: Dry-run complete — ran long enough for a checkpoint to fire. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "readmany-smoke" via balance-scout: Dry-run complete — the read_many batch path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "csv-smoke" via balance-scout: Dry-run complete — the write_csv path works end-to-end. | agent | firm | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "runcode-smoke" via balance-scout: Dry-run complete — the run_code path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (stuck) | Goal "pptx-smoke" via balance-scout: Stopped: repeated the same action 3 times. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "stagnation-smoke" via balance-scout: Dry-run complete — ran long enough to exercise stagnation detection. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "resume-smoke" via balance-scout: resume-context-absent | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "pptx-smoke" via balance-scout: Dry-run complete — the write_pptx path works end-to-end. | agent | firm | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "Smoke test: list the repo and finish." via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "delegate-smoke" via balance-scout: Dry-run complete — the delegate sub-run path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "parallel-delegate-smoke" via balance-scout: Dry-run complete — the parallel delegate fan-out path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "checkpoint-smoke" via balance-scout: Dry-run complete — ran long enough for a checkpoint to fire. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "readmany-smoke" via balance-scout: Dry-run complete — the read_many batch path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "csv-smoke" via balance-scout: Dry-run complete — the write_csv path works end-to-end. | agent | firm | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "runcode-smoke" via balance-scout: Dry-run complete — the run_code path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "pptx-smoke" via balance-scout: Dry-run complete — the write_pptx path works end-to-end. | agent | firm | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "stagnation-smoke" via balance-scout: Dry-run complete — ran long enough to exercise stagnation detection. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "resume-smoke" via balance-scout: resume-context-absent | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "deliberation-smoke: stall on purpose" via balance-scout: Dry-run complete — ran long enough to exercise stagnation detection. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "critic-smoke: write, gate, finish" via balance-scout: Dry-run complete — the critic path works end-to-end. | agent | firm | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (stuck) | Goal "virtualcontext-smoke: plant a fact, pad, recall it" via balance-scout: Stopped: repeated the same action 3 times. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "virtualcontext-smoke: plant a fact, pad, recall it" via balance-scout: Dry-run complete — trimming archived early turns and recall resurfaced them. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "Smoke test: list the repo and finish." via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "delegate-smoke" via balance-scout: Dry-run complete — the delegate sub-run path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "parallel-delegate-smoke" via balance-scout: Dry-run complete — the parallel delegate fan-out path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "checkpoint-smoke" via balance-scout: Dry-run complete — ran long enough for a checkpoint to fire. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "readmany-smoke" via balance-scout: Dry-run complete — the read_many batch path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "csv-smoke" via balance-scout: Dry-run complete — the write_csv path works end-to-end. | agent | firm | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "runcode-smoke" via balance-scout: Dry-run complete — the run_code path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "pptx-smoke" via balance-scout: Dry-run complete — the write_pptx path works end-to-end. | agent | firm | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "stagnation-smoke" via balance-scout: Dry-run complete — ran long enough to exercise stagnation detection. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "resume-smoke" via balance-scout: resume-context-absent | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "deliberation-smoke" via balance-scout: Dry-run complete — ran long enough to exercise stagnation detection. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "critic-smoke" via balance-scout: Dry-run complete — the critic path works end-to-end. | agent | firm | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "critic-smoke" via balance-scout: Dry-run complete — the critic path works end-to-end. | agent | firm | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "virtualcontext-smoke" via balance-scout: Dry-run complete — trimming archived early turns and recall resurfaced them. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "stagnation-smoke" via balance-scout: Dry-run complete — ran long enough to exercise stagnation detection. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "Smoke test: list the repo and finish." via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "csv-smoke" via balance-scout: Dry-run complete — the write_csv path works end-to-end. | agent | firm | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "Smoke test: list the repo and finish." via balance-scout: Smoke test complete — Forge agent flow verified with repository listing. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "Smoke test: list the repo and finish." via balance-scout: Dry-run complete — the plan → act → observe → finish loop works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "delegate-smoke" via balance-scout: Dry-run complete — the delegate sub-run path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "parallel-delegate-smoke" via balance-scout: Dry-run complete — the parallel delegate fan-out path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "checkpoint-smoke" via balance-scout: Dry-run complete — ran long enough for a checkpoint to fire. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "readmany-smoke" via balance-scout: Dry-run complete — the read_many batch path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "csv-smoke" via balance-scout: Dry-run complete — the write_csv path works end-to-end. | agent | firm | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "runcode-smoke" via balance-scout: Dry-run complete — the run_code path works end-to-end. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "pptx-smoke" via balance-scout: Dry-run complete — the write_pptx path works end-to-end. | agent | firm | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "stagnation-smoke" via balance-scout: Dry-run complete — ran long enough to exercise stagnation detection. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "resume-smoke" via balance-scout: resume-context-absent | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "deliberation-smoke" via balance-scout: Dry-run complete — ran long enough to exercise stagnation detection. | agent | tentative | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "critic-smoke" via balance-scout: Dry-run complete — the critic path works end-to-end. | agent | firm | memory/registers/forge-lessons.md |
| 2026-07-02 | balance-scout run (done) | Goal "virtualcontext-smoke" via balance-scout: Dry-run complete — trimming archived early turns and recall resurfaced them. | agent | tentative | memory/registers/forge-lessons.md |
