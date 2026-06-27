# lessons-learned.md — What Went Right/Wrong & The Lesson

> Corporate Memory: durable lessons fed by postmortems and retrospectives. The
> point is the lesson, not blame. Append-mostly: add lessons; never rewrite past
> ones (append a correction if a lesson is later refined).

## Entry Format
Columns: `ID | Date | Context | What Happened | Lesson | Action/Link`
- Lesson: the generalizable rule we now carry forward.

| ID | Date | Context | What Happened | Lesson | Action/Link |
|----|------|---------|---------------|--------|-------------|
| LL-001 | 2026-06-26 | Memory bootstrap | Registers needed one example each to be self-explaining | Seed every register with one worked example | this folder |
| LL-002 | 2026-06-26 | Framework self-audit (MTG-002) | Append-only logs collide with the 50-line cap | Unbounded logs must be index + per-entry files | [ADR-0002](adr/ADR-0002-logs-as-index-and-entries.md) |
| LL-003 | 2026-06-26 | Parallel build | 15 agents writing in parallel drifted on shared READMEs | Give each agent disjoint files + one shared template | [ADR-0003](adr/ADR-0003-default-15-agent-fanout.md) |

## How to Append
Add a new row with the next `LL-NNN` id after each postmortem. If a lesson is
superseded, append a new row referencing the old id — keep the original.
