# Release Council — Output

> Index: [README.md](README.md) · [process.md](process.md).

## Output Format
Each session produces minutes via
[../../09-templates/meeting-minutes-template.md](../../09-templates/meeting-minutes-template.md):
**Consensus · Remaining Concerns · Risks · Alternatives · Recommendation ·
Implementation Strategy · Owners**.

The recommendation is a recorded **GO** or **NO-GO**, with:
- the exact build / version,
- the rollback plan referenced,
- any Chief Auditor block, verbatim and attributed.

## Updates To Memory
- [../../07-memory/meeting-history.md](../../07-memory/meeting-history.md) — append the minutes.
- [../../07-memory/technical-debt.md](../../07-memory/technical-debt.md) —
  any debt shipped knowingly to make the date.
- [../../07-memory/lessons-learned.md](../../07-memory/lessons-learned.md) —
  if a no-go or a late blocker taught something.

## Handoff
A GO hands to [../../05-workflows/release.md](../../05-workflows/release.md).
A NO-GO returns the change to its originating workflow with owners.
