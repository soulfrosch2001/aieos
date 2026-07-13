# future-improvements.md — Proposals Queue

> Corporate Memory: the governed queue of improvement proposals from continuous
> improvement. Per the Golden Rule, "propose, then build." Source process:
> [../00-company/continuous-improvement.md](../00-company/continuous-improvement.md).
> Append-mostly: add proposals and status changes; never delete a declined one.

## Entry Format
Columns: `ID | Date | Proposal | Replaces | Impact | Owner | Status`
- Status: `proposed | approved | declined`.

| ID | Date | Proposal | Replaces | Impact | Owner | Status |
|----|------|----------|----------|--------|-------|--------|
| FI-001 | 2026-06-26 | Backfill registers with real entries as work flows in | — | richer memory | product-manager-02 | proposed |
| FI-002 | 2026-06-26 | Add a worked end-to-end example (one request through all tiers) | — | faster onboarding | documentation-engineer | proposed |
| FI-003 | 2026-06-26 | Add an agent capability/routing index to speed Orchestrator selection | — | faster, better routing | software-architect | proposed |
| FI-004 | 2026-06-26 | Add a link-check convention/tool so stale links are caught automatically | — | fewer broken links | qa-engineer | proposed |
| FI-005 | 2026-06-26 | Default 15-agent parallel fan-out per request | ad-hoc agent counts | more throughput per request | executive-orchestrator | approved → [ADR-0003](adr/ADR-0003-default-15-agent-fanout.md) |

## How to Append
Add a new row with the next `FI-NNN` id. On a decision, set Status to `approved`
or `declined` and append a dated note. Approved items route to the relevant council
and land an ADR in [architecture-decisions.md](architecture-decisions.md).
