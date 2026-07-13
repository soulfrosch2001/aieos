<!-- Memory register (append-mostly). Contract: ../../../kernel/contracts/memory-register.md -->

# Rights and Sales
Status: stable
Type: memory-register
Owner: production-director
Extends: roadmap

**Purpose:** the forward-looking record of the house's rights, schedule, and sales
position — the single source of "what ships when, in what formats and territories,
and how it is selling" that every department inherits.
**Discipline:** append-mostly — a deferred date or reordered slot is corrected with
a new dated entry that supersedes the old one, never by rewriting the line
([Directive #8](../../../kernel/laws/prime-directives.md)).

## Schema
| Column | Meaning |
|--------|---------|
| Date | When the entry was recorded (YYYY-MM-DD). |
| Title | The work this entry concerns. |
| Horizon | `now` · `next` · `later` — committed sequencing band. |
| Rights | Territories/formats cleared: e.g. `WORLD print+ebook`, `NA only`. |
| On-sale | Sequenced on-sale date, or `TBD`. |
| Status | `planned` · `in-production` · `on-sale` · `dropped`. |
| Supersedes | Date of the prior entry this replaces, or `—`. |
| Note | Sales position or scheduling rationale. |

## Example entry
| 2026-06-26 | The Quiet Tide | next | WORLD print+ebook | 2026-10-06 | in-production | — | Lead autumn title; on-sale set after editing Gate B cleared. |

## Who updates this & when
The production-director appends after a [manuscript-acquisition](../../workflows/manuscript-acquisition.md)
clears rights, after [editing-pipeline](../../workflows/editing-pipeline.md) confirms
a manuscript-ready date, and after [book-release](../../workflows/book-release.md)
locks an on-sale date or records sales. Department leads propose; only the
production-director commits sequencing, so the schedule stays a single coherent voice
([decision-authority](../../../kernel/laws/decision-authority.md)).

## Flow
- Knowledge flows **down**: the schedule propagates House → Department → Agent as
  committed direction every level executes against.
- Decisions of consequence (a major reschedule or a rights reversal) flow **up** as
  a report to the Enterprise roadmap.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
