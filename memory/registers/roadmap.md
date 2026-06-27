<!-- Memory register (append-mostly). Contract: ../../kernel/contracts/memory-register.md -->

# Roadmap
Status: stable
Type: memory-register
Owner: Company Orchestrator
Extends: none

**Purpose:** the sequenced record of what a company intends to build, when, and
why — the single source of "what's next" that every department inherits.
**Discipline:** append-mostly — a deferred or reordered item is corrected with a
new dated entry that supersedes the old one, never by rewriting the line.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When the entry was recorded (YYYY-MM-DD). |
| Item | The initiative, named in one phrase. |
| Horizon | `now` · `next` · `later` — committed sequencing band. |
| Tier | Engagement tier of the work — [T0–T4](../../kernel/laws/engagement-tiers.md). |
| Status | `planned` · `in-progress` · `shipped` · `dropped`. |
| Supersedes | Date of the prior entry this replaces, or `—`. |
| Rationale | Why it sits here and now. |

## Example entry
| 2026-06-26 | Multi-tenant billing | next | T3 | planned | — | Unblocks the enterprise tier; revenue gate for Q3. |

## Who updates this & when
The Company Orchestrator appends after any planning council or reprioritization.
Department leads propose entries; only the Orchestrator commits sequencing, so the
roadmap stays a single coherent voice rather than a tug-of-war.

## Flow
- Knowledge flows **down**: the roadmap propagates from Company to Department to
  Agent as committed direction every level executes against.
- Decisions of consequence (a major reprioritization) flow **up** as a report to
  the Enterprise roadmap.
See [../../kernel/protocols/memory-flow.md](../../kernel/protocols/memory-flow.md).
