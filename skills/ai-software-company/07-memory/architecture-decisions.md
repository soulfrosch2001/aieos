# architecture-decisions.md — ADR Index

> Corporate Memory: the index of all architecture decisions. Full records are immutable
> files under [adr/](adr/), one per decision (≤50 lines each). This split keeps an
> ever-growing log within the 50-line rule — see
> [ADR-0002](adr/ADR-0002-logs-as-index-and-entries.md).

## Index (newest at the bottom)
| ADR | Date | Title | Status |
|-----|------|-------|--------|
| [0001](adr/ADR-0001-numbered-folder-memory.md) | 2026-06-26 | Adopt numbered-folder Corporate Memory | accepted |
| [0002](adr/ADR-0002-logs-as-index-and-entries.md) | 2026-06-26 | Unbounded logs become index + per-entry files | accepted |
| [0003](adr/ADR-0003-default-15-agent-fanout.md) | 2026-06-26 | Default 15-agent parallel fan-out per request | accepted |
| [0004](adr/ADR-0004-50-line-target-not-hard-cap.md) | 2026-06-26 | 50-line limit is a default target, not a hard cap | accepted |

## How to Append
1. Write the full record as `adr/ADR-NNNN-slug.md` from
   [../09-templates/decision-record-template.md](../09-templates/decision-record-template.md).
2. Add one row above with the next `ADR-NNNN`. Never edit a past record; supersede it and
   set the old row's Status to `superseded by ADR-NNNN`.
