# AI Marketing Agency

Status: stable
Type: company
Owner: ceo
Extends: kernel + stdlib

A **full-service marketing agency** — brand strategy, content, social, and
performance marketing for clients. It ships positioning, campaigns, and measured
results, not products.

It is a **kernel-native AIEOS company**: born inheriting the kernel, with **zero
forking**. It was not built standalone and later mapped onto the OS — it was
*conceived* on the OS. Nothing here re-implements a law, a council shape, or a memory
schema the kernel already provides. Every council `Extends` a stdlib blueprint, every
workflow `Extends` a stdlib workflow, every register `Extends` a stdlib schema, and
the only thing ever *added* locally is **stricter** rule — never a weaker one, never a
parallel copy. Overrides happen **by name** and may only **add strictness** (loader
[resolution-order](../kernel/loader/resolution-order.md)).

The orchestrator follows suit. Per [Directive #2](../kernel/laws/prime-directives.md),
the `agency-orchestrator` **routes and never builds** — it sizes a request against the
engagement tiers, fans work out across up to 15 tracks, integrates, and gets out of
the way. Creative and media work belongs to the agents.

## Repo map

```
AI-Marketing-Agency/
  00-company/      COMPANY.md charter · AIEOS.md adapter
  01-executive/    ceo · strategy-director · operations-director · chief-auditor · agency-orchestrator
  02-strategy/     brand-strategist · market-researcher · positioning-strategist
  03-content/      content-strategist · copywriter · social-media-manager
  04-performance/  performance-marketer · seo-specialist
  councils/        campaign-council · brand-council        (extend stdlib councils)
  workflows/       campaign-launch.md · content-production.md · brand-review.md  (extend stdlib workflows)
  memory/          architecture.md · registers/            (extend stdlib schemas)
  reports/         health-report.md
```

Every **role is a 5-file folder** (`README · responsibilities · authority · craft ·
standards`); every **council is a 3-file folder** (`README · process · output`);
workflows and registers are single append-mostly files. Full convention set:
[`../shared/conventions.md`](../shared/conventions.md).

## How to read this agency

- **What it is and who it serves** → [`00-company/COMPANY.md`](00-company/COMPANY.md)
- **How it mounts onto AIEOS** (inheritance, overrides, mounting) →
  [`00-company/AIEOS.md`](00-company/AIEOS.md)

### Departments

- [`01-executive/`](01-executive/) — CEO, strategy-director (owns brand/strategy
  coherence and holds the off-brand veto), operations-director (delivery and
  sequencing), chief-auditor (quality veto, never directs), and the
  agency-orchestrator (routes, never builds).
- [`02-strategy/`](02-strategy/) — the thinking: brand-strategist, market-researcher,
  positioning-strategist.
- [`03-content/`](03-content/) — what the audience reads: content-strategist,
  copywriter, social-media-manager.
- [`04-performance/`](04-performance/) — what moves the numbers: performance-marketer,
  seo-specialist.

### Councils, workflows, memory, reports

- [`councils/`](councils/) — [campaign-council](councils/campaign-council/) (chair
  operations-director, extends stdlib feature-council) and
  [brand-council](councils/brand-council/) (chair strategy-director, extends stdlib
  architecture-council).
- [`workflows/`](workflows/) — [campaign-launch](workflows/campaign-launch.md),
  [content-production](workflows/content-production.md),
  [brand-review](workflows/brand-review.md), each extending a stdlib workflow.
- [`memory/`](memory/) — [architecture](memory/architecture.md) plus the
  [registers](memory/registers/): brand-decisions, campaign-results,
  audience-insights — extending stdlib schemas, beside the seven inherited registers.
- [`reports/`](reports/) — the agency [health-report](reports/health-report.md).

## The kernel it inherits

The agency adds local craft on top of these, and nothing more:

- [`../kernel/`](../kernel/) — laws (prime directives, engagement tiers, decision
  authority), protocols, contracts, and the loader's resolution order.
- [`../templates/`](../templates/) — the canonical shapes for agents, councils,
  workflows, registers, companies, and adapters.

Significant work is debated before it is built and gated before it ships
([Directive #3](../kernel/laws/prime-directives.md),
[Directive #9](../kernel/laws/prime-directives.md)). The disagreement between a
positioning-strategist who wants a sharper, riskier stance and a performance-marketer
who wants what converts today is not friction to smooth over — it is the mechanism. A
campaign no one argued about is a campaign no one pressure-tested.
