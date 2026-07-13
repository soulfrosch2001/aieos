# AI Architecture Studio
Status: stable
Type: company
Owner: principal
Extends: kernel + stdlib

AI Architecture Studio is a **kernel-native** AIEOS company — a building-architecture
firm that takes a site and a brief and turns them into buildings that are good to
be in, sound to build, and honest about what they cost. We run three crafts under
one roof — **design**, **technical engineering**, and **project delivery** — held
to a single line of quality from the first sketch to the final inspection.

We were born on AIEOS. We forked nothing
([Directive #6](../kernel/laws/prime-directives.md)): everything we do not
override locally, we inherit from the [kernel](../kernel/) and the standard
library [templates](../templates/). Our north star (Directive #1) is the people
who live, work, and move through what we build.

## Repo map
```
00-company/     charter, kernel-mount adapter, org-chart, stricter local rules
01-executive/   principal · design-director · project-director · chief-auditor · studio-orchestrator
02-design/      lead-architect · concept-architect · sustainability-designer
03-technical/   structural-engineer · building-systems-engineer · bim-specialist
04-delivery/    project-architect · construction-administrator
councils/       design-review-council · code-compliance-council
workflows/      schematic-design · design-development · permit-review
memory/         design-decisions · code-compliance-log · design-lessons
reports/        KPI + studio health reports
```

## Start here
- **Charter** — [00-company/COMPANY.md](00-company/COMPANY.md): what the studio
  does, what it inherits, and its stricter-only local rules.
- **Kernel mount** — [00-company/AIEOS.md](00-company/AIEOS.md): the
  executive→authority mapping and the by-name overrides that bind us to AIEOS.

## Departments
- [02-design/](02-design/) — design intent: concept, form, sustainability.
  Led by [lead-architect](02-design/lead-architect/).
- [03-technical/](03-technical/) — structure, building systems, coordinated BIM.
  Led by [structural-engineer](03-technical/structural-engineer/).
- [04-delivery/](04-delivery/) — permitting, construction administration, handover.
  Led by [project-architect](04-delivery/project-architect/).

## Councils, workflows, memory, reports
- [councils/](councils/) — [design-review-council](councils/design-review-council/)
  (extends stdlib architecture-council) and
  [code-compliance-council](councils/code-compliance-council/) (extends stdlib
  security-council).
- [workflows/](workflows/) — [schematic-design](workflows/schematic-design.md) (T2),
  [design-development](workflows/design-development.md) (T3),
  [permit-review](workflows/permit-review.md) (T3).
- [memory/](memory/) — the studio's append-mostly registers, plugged into the
  enterprise memory hierarchy ([memory-flow](../kernel/protocols/memory-flow.md)).
- [reports/](reports/) — KPI and [health report](reports/health-report.md) against
  the ten quality dimensions.

## Inherited from AIEOS (source of truth)
- [Prime Directives](../kernel/laws/prime-directives.md) — #2, #4, #5, #6, #8.
- [Engagement tiers T0–T4](../kernel/laws/engagement-tiers.md) ·
  [decision authority](../kernel/laws/decision-authority.md).
- [Protocols](../kernel/protocols/) and the
  [resolution order](../kernel/loader/resolution-order.md) that lets a local name
  shadow a stdlib one.
- Stdlib defaults — every [template](../templates/) we do not override by name.
