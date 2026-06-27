# Performance Council — Output

> Index: [README.md](README.md) · [process.md](process.md).

## Output Format
Every session produces minutes via
[../../09-templates/meeting-minutes-template.md](../../09-templates/meeting-minutes-template.md):
**Consensus · Remaining Concerns · Risks · Alternatives · Recommendation ·
Implementation Strategy · Owners**.

The recommendation must name:
- the **budget** (metric, threshold, environment),
- the **guard test** that fails the build if breached,
- the owning specialist.

## Updates To Memory
- [../../07-memory/meeting-history.md](../../07-memory/meeting-history.md) — append the minutes.
- [../../07-memory/architecture-decisions.md](../../07-memory/architecture-decisions.md) —
  if the decision changes a hot-path design.
- [../../07-memory/technical-debt.md](../../07-memory/technical-debt.md) —
  if a budget is deferred or accepted as debt.
- [../../07-memory/lessons-learned.md](../../07-memory/lessons-learned.md) —
  the root cause of any regression investigated.

## Handoff
Implementation runs through
[../../05-workflows/performance-investigation.md](../../05-workflows/performance-investigation.md).
