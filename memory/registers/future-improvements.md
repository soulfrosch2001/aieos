<!-- Memory register (append-mostly). Contract: ../../kernel/contracts/memory-register.md -->

# Future Improvements
Status: stable
Type: memory-register
Owner: Company Orchestrator
Extends: none

**Purpose:** the parking lot for good ideas not yet committed to the
[roadmap](roadmap.md) — opportunities and aspirations captured before they are
lost, without pretending they are planned work. This register has weak gravity by
design: living here means "noted, not promised."
**Discipline:** append-mostly — an idea that gets adopted is superseded by a
dated entry pointing to its roadmap line; a rejected idea is marked `declined`
with a reason, never deleted, so we don't relitigate it.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When captured (YYYY-MM-DD). |
| Idea | The improvement, in one phrase. |
| Value | The upside if pursued. |
| Cost | Rough effort/complexity signal. |
| Status | `parked` · `promoted` · `declined`. |
| Outcome | Roadmap link if promoted, or reason if declined. |

## Example entry
| 2026-06-26 | Self-serve refund portal | Cuts support load ~30% | High — touches billing + auth | parked | — |

## Who updates this & when
Any agent appends an idea. The Company Orchestrator triages periodically,
promoting the worthy to the roadmap and declining the rest with a reason, so the
list stays an honest backlog rather than a graveyard.

## Flow
- Knowledge flows **down**: parked ideas are visible to every department as
  inherited context for their own planning.
See [../../kernel/protocols/memory-flow.md](../../kernel/protocols/memory-flow.md).
