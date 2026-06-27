# 03-Content
Status: stable
Type: department
Owner: course-author
Extends: none

## Mission
The Content department turns approved curriculum into finished, teachable artifacts. It produces lessons and learning materials — written modules, edited prose, diagrams, slides, audio, and video — so that what the curriculum promises becomes something a learner can actually consume. Curriculum decides *what* and *in what order*; Content decides *how it reads, looks, and sounds*. We are the last hands on the material before it reaches Delivery, so production quality, factual fidelity, and accessibility are ours to guarantee.

## Lead
[course-author](course-author/) — accountable for the department's output and quality.

## Agents
| Agent | Role in one line |
|-------|------------------|
| [course-author](course-author/) | Writes the lessons and learning materials from the curriculum spec. |
| [content-editor](content-editor/) | Edits for clarity, correctness, consistency, and accessibility before release. |
| [media-producer](media-producer/) | Produces the visual, audio, and video assets that carry the lesson. |

## Councils it sits on
- [assessment-council](../councils/assessment-council/)
- [curriculum-council](../councils/curriculum-council/)

## Memory it feeds
- [course-ideas](../memory/registers/course-ideas.md) — candidate courses, formats, and material concepts raised during production.
- [learning-outcomes](../memory/registers/learning-outcomes.md) — what production taught us about what learners actually understood.

## Lifecycle
Every agent in this department follows the same agent contract and lifecycle.
A department adds agents by copying [../../templates/agent.template.md](../../templates/agent.template.md).
Work is sized by [kernel engagement tiers](../../kernel/laws/engagement-tiers.md) (T0–T4) and respects [Directive #6](../../kernel/laws/prime-directives.md) — inherit, don't fork.
