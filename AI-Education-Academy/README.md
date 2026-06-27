# AI Education Academy
Status: stable
Type: company
Owner: dean
Extends: kernel + stdlib

AI Education Academy is a **kernel-native AIEOS company**: an online education
academy that designs curriculum, authors content, and delivers cohort-based learning.
It is born inheriting the [AIEOS kernel](../kernel/) and [standard library](../templates/)
and **forks nothing** — local files add only *stricter* rules on top of the kernel,
never looser ones. Its north star: every learner finishes a program able to *do* the
thing, not merely recall it — outcomes over coverage.

## Repository map
```
00-company/     charter, AIEOS mounting, org-chart, local rules (stricter only)
01-executive/   dean, academic-director, operations-director, chief-auditor, academy-orchestrator
02-curriculum/  curriculum-designer (lead), instructional-designer, assessment-designer
03-content/     course-author (lead), content-editor, media-producer
04-delivery/    instructor (lead), learning-experience-designer
councils/       curriculum-council, assessment-council
workflows/      course-design, lesson-production, assessment-review
memory/         pedagogy-decisions, learning-outcomes, course-ideas
reports/        KPI + health reports
```

## Start here
- [00-company/COMPANY.md](00-company/COMPANY.md) — the charter, inheritance, local overrides, and KPIs.
- [00-company/AIEOS.md](00-company/AIEOS.md) — how the academy mounts kernel-native into AIEOS.

## Departments
- [02-curriculum/](02-curriculum/) — owns program shape, learning paths, and assessment design.
- [03-content/](03-content/) — owns authored courses, editing, and media production.
- [04-delivery/](04-delivery/) — owns cohorts, instruction, and the learner experience.

## Councils
- [councils/curriculum-council/](councils/curriculum-council/) — extends stdlib `architecture-council`; chaired by the academic-director. Gates course coherence.
- [councils/assessment-council/](councils/assessment-council/) — extends stdlib `feature-council`; chaired by the assessment-designer. Gates assessment design.

## Workflows
- [workflows/course-design.md](workflows/course-design.md) — T2, extends stdlib `feature`.
- [workflows/lesson-production.md](workflows/lesson-production.md) — T1, extends stdlib `documentation`.
- [workflows/assessment-review.md](workflows/assessment-review.md) — T2, extends stdlib `audit`.

## Memory & reports
- [memory/](memory/) — append-mostly registers; see [memory/architecture.md](memory/architecture.md) for the four-level hierarchy.
- [reports/](reports/) — KPIs mapped to the ten [quality dimensions](../shared/quality-standards.md); see [reports/health-report.md](reports/health-report.md).

## Inherited from AIEOS
- [../kernel/](../kernel/) — laws ([Prime Directives](../kernel/laws/prime-directives.md)),
  [engagement tiers](../kernel/laws/engagement-tiers.md),
  [decision authority](../kernel/laws/decision-authority.md),
  [protocols](../kernel/protocols/), and the [loader](../kernel/loader/resolution-order.md).
- [../templates/](../templates/) — the standard library templates every entity here extends.

The academy authors nothing through its orchestrator: per
[Directive #2](../kernel/laws/prime-directives.md) the
[academy-orchestrator](01-executive/academy-orchestrator/) only routes, sizes, fans
out, and integrates.
