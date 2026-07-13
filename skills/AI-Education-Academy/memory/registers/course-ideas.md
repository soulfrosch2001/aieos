# Course Ideas
Status: stable
Type: memory-register
Owner: course-author
Extends: future-improvements

**Purpose:** the academy's backlog of future courses and lessons — ideas surfaced
during design, authoring, and delivery, parked with enough context to prioritize
later without re-discovering them.
**Discipline:** append-mostly — an idea is never deleted; it is **closed** by a dated
entry recording whether it was built, merged, or declined, and why.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When logged (YYYY-MM-DD). |
| Idea | Stable id, e.g. `IDEA-031`. |
| Title | The proposed course or lesson. |
| Rationale | The learner need or gap it would serve. |
| Source | Where it surfaced (workflow, cohort, request). |
| Status | `parked` · `scheduled` · `built` · `declined`. |
| Resolution | If closed: outcome and reason, or `—`. |

## Example entry
| 2026-06-26 | IDEA-031 | Evaluating LLM Agents in Production | Cohorts ask for it after the RAG course; clear next step | course-design fan-out | parked | — |

## Who updates this & when
The [course-author](../../03-content/course-author/) appends whenever a workflow
surfaces an adjacent need — typically during
[course-design](../../workflows/course-design.md) decomposition or after a
[lesson-production](../../workflows/lesson-production.md) run reveals a gap.
Prioritization decisions are recorded here, never argued from memory
(Directive [#6](../../../kernel/laws/prime-directives.md)).

## Flow
- Knowledge flows **down** from the parent register `future-improvements` to this
  academy register.
- Decisions of consequence flow **up**: an idea that matures into an enterprise-level
  program proposal is promoted to the Enterprise.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
