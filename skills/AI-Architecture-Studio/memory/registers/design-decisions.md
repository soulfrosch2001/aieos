# Design Decisions
Status: stable
Type: memory-register
Owner: design-director
Extends: architecture-decisions

**Purpose:** the studio's ledger of binding design decisions (DDRs) — the choices
that constrain a project's design and the reasoning that justified them.
**Discipline:** append-mostly — a decision is never edited; it is **reversed** by a
new entry that supersedes it and back-links the original, so the full reasoning
chain stays auditable.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When decided (YYYY-MM-DD). |
| DDR | Stable id, e.g. `DDR-021`. |
| Project | Project code or name the decision binds. |
| Decision | The design choice, stated as a commitment. |
| Context | The site, brief, code, or budget forces that pressed for it. |
| Alternatives | Schemes considered and rejected, with the reason. |
| Status | `accepted` · `superseded` · `deprecated`. |
| Supersedes | DDR id this replaces, or `—`. |

## Example entry
| 2026-06-26 | DDR-021 | Riverside-Hall | Single-loaded north corridor for daylit studios | Deep plan would dark-core the studios; site faces north | Double-loaded plan (rejected: dark interior rooms); atrium (rejected: budget) | accepted | — |

## Who updates this & when
The [design-director](../../01-executive/design-director/) appends after any DDR
lands — typically at Gate B of [schematic-design](../../workflows/schematic-design.md)
or [design-development](../../workflows/design-development.md). Agents cite the DDR
id rather than re-arguing settled ground (Directive [#6](../../../kernel/laws/prime-directives.md)).
A design-veto stop is recorded here as a superseding entry.

## Flow
- Knowledge flows **down** from the parent register `architecture-decisions` to
  this studio register.
- Decisions of consequence flow **up**: a DDR that sets a precedent beyond one
  project is promoted to the Enterprise.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
