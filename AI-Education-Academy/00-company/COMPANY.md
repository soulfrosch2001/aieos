# AI Education Academy
Status: stable
Type: company
Owner: dean
Extends: kernel + stdlib

## Charter
AI Education Academy is an online education academy. It designs curriculum, authors content, and delivers cohort-based learning. Its north star: every learner finishes a program able to *do* the thing, not merely recall it — outcomes over coverage.

We serve adult learners and teams who want rigorous, well-sequenced AI and technical education. The academy is born kernel-native: it inherits the AIEOS kernel and standard library wholesale and forks nothing. Local files add only *stricter* rules on top of the kernel — never looser ones.

## Inherited from AIEOS
- **Laws** — all [Prime Directives](../../kernel/laws/prime-directives.md), notably:
  - [#2 — orchestrators route, never author](../../kernel/laws/prime-directives.md)
  - [#4 — authority is explicit and bounded](../../kernel/laws/prime-directives.md)
  - [#5 — escalate rather than guess](../../kernel/laws/prime-directives.md)
  - [#6 — every decision leaves a trace](../../kernel/laws/prime-directives.md)
  - [#8 — quality gates are non-negotiable](../../kernel/laws/prime-directives.md)
- **Engagement tiers** — [T0–T4 sizing](../../kernel/laws/engagement-tiers.md).
- **Decision authority** — [level definitions](../../kernel/laws/decision-authority.md).
- **Protocols** — [communication](../../kernel/protocols/communication.md), [orchestration](../../kernel/protocols/orchestration.md), [escalation](../../kernel/protocols/escalation.md), [memory-flow](../../kernel/protocols/memory-flow.md), [lifecycle](../../kernel/protocols/lifecycle.md).
- **Loader** — [resolution order](../../kernel/loader/resolution-order.md).
- **Stdlib defaults** — every [workflow](../../workflows/), [council](../../councils/), [template](../../templates/), and [memory register](../../memory/) not overridden by name below.

## Local rules (stricter only)
These tighten the kernel for this academy; they never relax it.
- **Pedagogy veto is binding.** The academic-director ([CTO + pedagogy veto](../01-executive/academic-director/)) may block any course, lesson, or assessment that violates pedagogical coherence, even when delivery and schedule favor shipping. This is stricter than the kernel default, which grants the CTO-level veto on *technical* grounds.
- **No content ships without an assessment.** Every published lesson must trace to a measurable learning outcome reviewed under [assessment-review](../workflows/assessment-review.md). Coverage without assessment is treated as incomplete work under Directive #8.
- **Outcomes are recorded, always.** Every cohort closes by writing to the [learning-outcomes register](../memory/registers/learning-outcomes.md). Directive #6 is enforced at cohort granularity, not just decision granularity.
- **Orchestrator authors nothing.** Per Directive #2 the [academy-orchestrator](../01-executive/academy-orchestrator/) only routes, sizes, fans out, and integrates; it never writes curriculum, content, or assessments.

## Local overrides (by name)
| Entity | Overrides stdlib | Why |
|--------|------------------|-----|
| curriculum-council | architecture-council | Pedagogical structure is the academy's architecture; the chair is the academic-director. |
| assessment-council | feature-council | Assessment design is gated like a feature; the chair is the assessment-designer. |
| course-design | feature (workflow) | A course is the academy's unit of delivered value, sized T2. |
| lesson-production | documentation (workflow) | Lessons are authored content, sized T1. |
| assessment-review | audit (workflow) | Assessment quality is audited, sized T2. |
| pedagogy-decisions | architecture-decisions | Pedagogical choices are the academy's architecture record; owner academic-director. |
| learning-outcomes | lessons-learned | Cohort outcomes are the academy's lessons learned; owner curriculum-designer. |
| course-ideas | future-improvements | The backlog of future courses; owner course-author. |

## Structure
```
00-company/     charter, org-chart, local rules (stricter only)
01-executive/   dean, academic-director, operations-director, chief-auditor, academy-orchestrator
02-curriculum/  curriculum-designer (lead), instructional-designer, assessment-designer
03-content/     course-author (lead), content-editor, media-producer
04-delivery/    instructor (lead), learning-experience-designer
councils/       curriculum-council, assessment-council
workflows/      course-design, lesson-production, assessment-review
memory/         pedagogy-decisions, learning-outcomes, course-ideas
reports/        KPI + health reports
```

## Departments
- **02-curriculum** — owns program shape, learning paths, and assessment design.
- **03-content** — owns authored courses, editing, and media production.
- **04-delivery** — owns cohorts, instruction, and the learner experience.

## KPIs
- Learner completion rate per cohort.
- Outcome-attainment rate (assessed mastery vs. stated learning outcomes).
- Time-to-publish per lesson (lesson-production cycle time).
- Pedagogy-veto rate (signal of upstream design quality).

## Mounting
Mounted kernel-native via [AIEOS.md](./AIEOS.md). Registered in [../../kernel/registry/](../../kernel/registry/).
