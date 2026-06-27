<!-- Memory register (append-mostly). Contract: ../../../kernel/contracts/memory-register.md -->

# Playtest Feedback
Status: stable
Type: memory-register
Owner: Playtest Lead
Extends: none

**Purpose:** the raw and triaged record of what actually happened at the table —
confusions, stalls, dominant strategies, "feel" complaints, and the moments
players loved. This is the studio's ground truth; design and balance answer to it.
**Discipline:** append-mostly — feedback is never deleted, even when wrong or
contradicted. A signal that later proved noise is marked `dismissed` with a
reason, never erased, because the dismissal itself is evidence.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When observed (YYYY-MM-DD). |
| PF | Stable id, e.g. `PF-018`. |
| Round | Playtest round / build tested. |
| Observation | What happened at the table, concretely. |
| Severity | `blocker` · `major` · `minor` · `delight`. |
| Disposition | `open` · `routed` · `fixed` · `dismissed`. |
| Routed to | Owner picking it up: GDR author, Balance Designer, Rules Writer. |

## Example entry
| 2026-06-26 | PF-018 | Round 11 (build 0.9) | Pyromancer won 7/8 tables; players stopped drafting alternatives | major | routed | Balance Designer → balancing-history |

## Who updates this & when
The Playtest Lead appends during and after every [playtest](../../workflows/playtest.md)
session, then triages severity and routes each item. The orchestrator
([Prime Directive #2 — routes, never builds](../../../kernel/laws/prime-directives.md))
dispatches routed items to the owning agent; the Playtest Lead closes the loop by
updating `Disposition` once the fix lands.

## Flow
- This register is company-only; it has no parent stdlib register.
- Decisions of consequence flow **up**: a recurring table failure becomes a
  [lessons-learned](../../../memory/registers/lessons-learned.md) entry at the
  enterprise level, and a balance signal feeds
  [balancing-history](balancing-history.md).
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
