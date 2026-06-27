# update-memory.md — Append to Corporate Memory

> Paste this after a decision, review, or report to record it in
> [../07-memory/](../07-memory/). Memory is **append-mostly** — never rewrite history.

## Inputs (fill before running)
- **Event:** {{decision / review / report outcome}}
- **Date:** {{YYYY-MM-DD}}
- **Owner:** {{agent}}

## Prompt
> For the event above, append to **each** relevant register below using its own
> entry format and id scheme. Do not edit prior rows; add corrections as new dated
> rows. Keep every file ≤50 lines (split if needed).

## Routing — Which File Gets What
- **Architectural decision** → [../07-memory/architecture-decisions.md](../07-memory/architecture-decisions.md)
- **Shortcut / known risk** → [../07-memory/technical-debt.md](../07-memory/technical-debt.md)
- **Planned work / priority** → [../07-memory/roadmap.md](../07-memory/roadmap.md)
- **Council or meeting outcome** → [../07-memory/meeting-history.md](../07-memory/meeting-history.md)
- **Insight / what we'd do differently** → [../07-memory/lessons-learned.md](../07-memory/lessons-learned.md)

## Expected Output
A list of the exact rows appended, per file, with their new ids.
See discipline rules in [../00-company/conventions.md](../00-company/conventions.md).
