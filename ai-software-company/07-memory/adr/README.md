# 07-memory/adr — Architecture Decision Records

Status: stable

One **immutable** decision per file, `ADR-NNNN-slug.md`, written from
[../../09-templates/decision-record-template.md](../../09-templates/decision-record-template.md)
and kept ≤50 lines. The **index** lives in
[../architecture-decisions.md](../architecture-decisions.md).

Records are never edited — to change one, write a new ADR that supersedes it and update the
old one's Status in the index. Rationale for this split:
[ADR-0002](ADR-0002-logs-as-index-and-entries.md).

## Records
- [ADR-0001-numbered-folder-memory.md](ADR-0001-numbered-folder-memory.md) — accepted.
- [ADR-0002-logs-as-index-and-entries.md](ADR-0002-logs-as-index-and-entries.md) — accepted.
- [ADR-0003-default-15-agent-fanout.md](ADR-0003-default-15-agent-fanout.md) — accepted.
- [ADR-0004-50-line-target-not-hard-cap.md](ADR-0004-50-line-target-not-hard-cap.md) — accepted.

## How to Append
1. Copy the template to `ADR-NNNN-slug.md` here; fill it; keep it ≤50 lines.
2. Add one index row to [../architecture-decisions.md](../architecture-decisions.md).
