# Learning Outcomes
Status: stable
Type: memory-register
Owner: curriculum-designer
Extends: lessons-learned

**Purpose:** the academy's ledger of what cohorts actually learned — outcome
attainment versus stated outcomes, and the teaching lessons that data taught us.
**Discipline:** append-mostly — a finding is never edited; a later cohort or a
re-analysis supersedes it with a new dated entry, so the trend stays auditable.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| Cohort | Cohort or course-run id. |
| Outcome | The learning outcome under measure. |
| Attainment | Assessed mastery vs. target (e.g. `78% vs 85%`). |
| Lesson | What the result taught about design or delivery. |
| Action | Change made or proposed in response. |
| Status | `open` · `applied` · `superseded`. |
| Supersedes | Prior entry id this updates, or `—`. |

## Example entry
| 2026-06-26 | C-AI-101-03 | Build a working RAG prototype | 78% vs 85% | Learners stalled on retrieval eval; the lesson under-practiced it | Added a graded retrieval-eval task to lesson 6 | applied | — |

## Who updates this & when
The [curriculum-designer](../../02-curriculum/curriculum-designer/) appends at cohort
close and after each [lesson-production](../../workflows/lesson-production.md) run,
and records audit findings surfaced by
[assessment-review](../../workflows/assessment-review.md). Every cohort closes by
writing here — Directive [#6](../../../kernel/laws/prime-directives.md) is enforced at
cohort granularity.

## Flow
- Knowledge flows **down** from the parent register `lessons-learned` to this academy
  register.
- Decisions of consequence flow **up**: a lesson that should bind every future cohort
  or program is promoted to the Enterprise.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
