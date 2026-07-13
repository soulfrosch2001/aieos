# Workflows
Status: stable
Type: reference
Owner: academy-orchestrator
Extends: none

The academy's repeatable paths from trigger to memory update. Each workflow follows
[../../templates/workflow.template.md](../../templates/workflow.template.md) and
**extends a stdlib workflow by name** — we inherit the proven skeleton and tighten
it for education practice ([Directive #6](../../kernel/laws/prime-directives.md)).

The [academy-orchestrator](../01-executive/academy-orchestrator/) sizes every
request by [engagement tier](../../kernel/laws/engagement-tiers.md) and selects the
workflow; it routes, fans out, and integrates but never authors content
(Directive [#2](../../kernel/laws/prime-directives.md)). Heavier tiers add councils,
gates, and executive sign-off per
[decision-authority](../../kernel/laws/decision-authority.md).

## Index
| Workflow | Tier | Extends | Purpose |
|----------|------|---------|---------|
| [course-design](course-design.md) | [T2](../../kernel/laws/engagement-tiers.md) | stdlib `feature` | Design a course from outcomes to lessons. |
| [lesson-production](lesson-production.md) | [T1](../../kernel/laws/engagement-tiers.md) | stdlib `documentation` | Produce and review a single lesson. |
| [assessment-review](assessment-review.md) | [T2](../../kernel/laws/engagement-tiers.md) | stdlib `audit` | Review assessments for validity and outcome alignment. |

## The non-negotiable academy rule
No content advances without a measurable learning outcome it serves. A course is
designed from outcomes *down* to lessons (never the reverse), every lesson traces to
an outcome, and every outcome is assessed. Coverage without assessment is incomplete
work under [Directive #8](../../kernel/laws/prime-directives.md).

## Memory
Every workflow ends by appending to a local register in
[../memory/registers/](../memory/registers/): pedagogical choices to
[pedagogy-decisions](../memory/registers/pedagogy-decisions.md), cohort learning to
[learning-outcomes](../memory/registers/learning-outcomes.md), and surfaced course
ideas to [course-ideas](../memory/registers/course-ideas.md). A run that ships
without a memory update is incomplete (Directive #8).
