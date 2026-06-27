<!-- Memory register (append-mostly). Contract: ../../kernel/contracts/memory-register.md -->

# Architecture Decisions
Status: stable
Type: memory-register
Owner: Chief Architect
Extends: none

**Purpose:** the company's ledger of binding technical decisions (ADRs) — the
choices that constrain future work and the reasoning that justified them.
**Discipline:** append-mostly — a decision is never edited; it is **reversed** by a
new entry that supersedes it and back-links the original, so the full reasoning
chain stays auditable.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When decided (YYYY-MM-DD). |
| ADR | Stable id, e.g. `ADR-014`. |
| Decision | The choice, stated as a commitment. |
| Context | The forces and constraints that pressed for it. |
| Alternatives | What was considered and rejected. |
| Status | `accepted` · `superseded` · `deprecated`. |
| Supersedes | ADR id this replaces, or `—`. |

## Example entry
| 2026-06-26 | ADR-014 | Adopt event-sourced order ledger | Reconciliation disputes need an immutable audit trail | CRUD table (rejected: no history); CDC stream (rejected: ops cost) | accepted | — |

## Who updates this & when
The Chief Architect appends after any T2+ design council that lands a binding
choice ([Directive #3](../../kernel/laws/prime-directives.md)). Engineers cite the
ADR id in code and reviews rather than re-arguing settled ground.

## Flow
- Decisions of consequence flow **up**: an ADR that binds beyond one department is
  promoted to the Company, and a cross-company precedent to the Enterprise.
See [../../kernel/protocols/memory-flow.md](../../kernel/protocols/memory-flow.md).
