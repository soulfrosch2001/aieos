# AI Film Studio
Status: stable
Type: company
Owner: ceo
Extends: kernel + stdlib

AI Film Studio is a **kernel-native** AIEOS company (kernel **1.1.0**) — a film
production studio that takes an idea and turns it into a finished film: good to
watch, sound to make, and honest about what it costs. We run three crafts end to end
— **development**, **production**, and **post-production** — held to a single line of
quality from the first pitch to the delivered master.

We were born on AIEOS. We forked nothing
([Directive #6](../kernel/laws/prime-directives.md)): everything we do not override
locally, we inherit from the [kernel](../kernel/) and the standard library
[templates](../templates/). Our north star (Directive #1) is the audience the film
is made for.

## Repo map
```
00-company/     charter, kernel-mount adapter, org-chart, stricter local rules
01-executive/   ceo · creative-director · line-producer · chief-auditor · studio-orchestrator
02-development/ screenwriter · story-editor · development-executive
03-production/  director · cinematographer · production-designer
04-post/        editor · vfx-supervisor
councils/       greenlight-council · creative-council
workflows/      development · production · post-production
memory/         greenlight-decisions · production-log · project-ideas
reports/        KPI + studio health reports
```

## Start here
- **Charter** — [00-company/COMPANY.md](00-company/COMPANY.md): what the studio does,
  what it inherits, and its stricter-only local rules.
- **Kernel mount** — [00-company/AIEOS.md](00-company/AIEOS.md): the
  executive→authority mapping and the by-name overrides that bind us to AIEOS.

## Departments
- [02-development/](02-development/) — pitch to greenlit script: writing, story
  editing, market case. Led by [screenwriter](02-development/screenwriter/).
- [03-production/](03-production/) — the shoot: direction, image, and physical world.
  Led by [director](03-production/director/).
- [04-post/](04-post/) — edit, finish, and deliver. Led by [editor](04-post/editor/).

## Councils, workflows, memory, reports
- [councils/](councils/) — [greenlight-council](councils/greenlight-council/)
  (extends stdlib feature-council, chair ceo) and
  [creative-council](councils/creative-council/) (extends stdlib architecture-council,
  chair creative-director).
- [workflows/](workflows/) — [development](workflows/development.md) (T2),
  [production](workflows/production.md) (T3),
  [post-production](workflows/post-production.md) (T3).
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
