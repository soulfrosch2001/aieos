# Pedagogy Decisions
Status: stable
Type: memory-register
Owner: academic-director
Extends: architecture-decisions

**Purpose:** the academy's ledger of binding pedagogical decisions (PDRs) — the
teaching and assessment choices that constrain how courses are designed, and the
reasoning that justified them.
**Discipline:** append-mostly — a decision is never edited; it is **reversed** by a
new entry that supersedes it and back-links the original, so the full reasoning chain
stays auditable.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When decided (YYYY-MM-DD). |
| PDR | Stable id, e.g. `PDR-014`. |
| Scope | Program, course code, or `academy-wide`. |
| Decision | The pedagogical choice, stated as a commitment. |
| Context | The learner, outcome, or evidence forces that pressed for it. |
| Alternatives | Approaches considered and rejected, with the reason. |
| Status | `accepted` · `superseded` · `deprecated`. |
| Supersedes | PDR id this replaces, or `—`. |

## Example entry
| 2026-06-26 | PDR-014 | academy-wide | Every lesson opens with a do-first task before exposition | Recall-only lessons failed outcome attainment; learners need to apply early | Lecture-then-exercise (rejected: low transfer); video-only (rejected: passive) | accepted | — |

## Who updates this & when
The [academic-director](../../01-executive/academic-director/) appends after any PDR
lands — typically at Gate B of [course-design](../../workflows/course-design.md) or
at Gate B of [assessment-review](../../workflows/assessment-review.md). Agents cite
the PDR id rather than re-arguing settled ground
(Directive [#6](../../../kernel/laws/prime-directives.md)). A pedagogy-veto stop is
recorded here as a superseding entry.

## Flow
- Knowledge flows **down** from the parent register `architecture-decisions` to this
  academy register.
- Decisions of consequence flow **up**: a PDR that should bind every program rather
  than one course is promoted to the Enterprise.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
