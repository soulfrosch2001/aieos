# standards.md — Engineering Standards The Company Holds

> Corporate Memory: the durable bar for how we structure and review work. These
> are stable expectations, not per-task style. Append-mostly: add or refine
> standards by appending a new row; never silently rewrite an agreed standard.

## Entry Format
Columns: `ID | Area | Standard | Rationale | Source/Link`
- Area: `naming | structure | review | docs | testing | security`.

| ID | Area | Standard | Rationale | Source/Link |
|----|------|----------|-----------|-------------|
| ST-001 | structure | Files target ≤50 lines (default, not a hard cap — ADR-0004); one concept per file | Keeps the company maintainable at scale | [../00-company/conventions.md](../00-company/conventions.md) |
| ST-002 | naming | Kebab-case, lowercase `.md`; preserve `-02` suffix | Predictable, stable references | [../00-company/conventions.md](../00-company/conventions.md) |
| ST-003 | review | Every major change produces minutes, risks, plan, debt review | Decisions are auditable | [../00-company/CLAUDE.md](../00-company/CLAUDE.md) |

## How to Append
Add a new row with the next `ST-NNN` id. To supersede a standard, append a new row
referencing the old id and note it as replaced — keep the original.
