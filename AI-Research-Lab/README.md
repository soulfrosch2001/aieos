# AI Research Lab

Status: stable
Type: company
Owner: lab-director
Extends: kernel + stdlib

A scientific **research lab**: it runs experiments, analyzes data, peer-reviews methods and
results, and publishes findings. It ships **knowledge** — reproducible, evidence-backed claims
— not product.

It is a **kernel-native AIEOS company**: born inheriting the kernel, with **zero forking**.
Nothing here re-implements a law, a council shape, or a memory schema the kernel already
provides. Every council `Extends` a stdlib blueprint, every workflow `Extends` a stdlib
workflow, every register `Extends` a stdlib schema, and the only thing ever *added* locally is
**stricter** rule — never a weaker one, never a parallel copy
([Directive #6 — inherit, don't fork](../kernel/laws/prime-directives.md);
[resolution-order](../kernel/loader/resolution-order.md): override by name, add strictness only).

The [lab-orchestrator](01-executive/lab-orchestrator/) follows
[Directive #2](../kernel/laws/prime-directives.md): it **routes and never runs the science** —
it sizes a research question against the engagement tiers, fans the work out, and integrates
the result.

## Repo map

```
AI-Research-Lab/
  00-company/      COMPANY.md charter · AIEOS.md adapter
  01-executive/    lab-director · research-director · operations-lead · chief-auditor · lab-orchestrator
  02-research/     principal-investigator · research-scientist · experimental-designer
  03-analysis/     data-scientist · statistician · replication-specialist
  04-publication/  science-writer · ethics-officer
  councils/        review-council · ethics-council        (extend stdlib councils)
  workflows/       experiment-design.md · peer-review.md · publication.md  (extend stdlib workflows)
  memory/          architecture.md · registers/           (extend stdlib schemas)
  reports/         health-report.md
```

Every **role is a 5-file folder** (`README · responsibilities · authority · craft ·
standards`); every **council is a 3-file folder** (`README · process · output`); workflows and
registers are single append-mostly files. The full convention set:
[`../shared/conventions.md`](../shared/conventions.md).

## How to read this lab

- **What it is and who it serves** → [`00-company/COMPANY.md`](00-company/COMPANY.md)
- **How it mounts onto AIEOS** (inheritance, overrides, mounting) →
  [`00-company/AIEOS.md`](00-company/AIEOS.md)

### Departments

- [`01-executive/`](01-executive/) — lab-director (sets the research agenda),
  research-director (owns scientific rigor and holds the rigor veto), operations-lead
  (research operations and timelines), chief-auditor (quality/ethics veto; runs conformance),
  and the lab-orchestrator (routes, never runs the science).
- [`02-research/`](02-research/) — the science: principal-investigator, research-scientist,
  experimental-designer.
- [`03-analysis/`](03-analysis/) — the truth tests: data-scientist, statistician,
  replication-specialist.
- [`04-publication/`](04-publication/) — getting it out honestly: science-writer,
  ethics-officer.

### Councils, workflows, memory

- [`councils/`](councils/) — [review-council](councils/review-council/) (chair:
  research-director, extends the stdlib architecture-council) and
  [ethics-council](councils/ethics-council/) (chair: ethics-officer, extends the stdlib
  security-council).
- [`workflows/`](workflows/) — [experiment-design](workflows/experiment-design.md),
  [peer-review](workflows/peer-review.md), [publication](workflows/publication.md), each
  extending a stdlib workflow.
- [`memory/`](memory/) — [architecture](memory/architecture.md) plus the
  [registers](memory/registers/): findings, experiment-log, open-questions.
- [`reports/`](reports/) — the lab [health-report](reports/health-report.md).

## The kernel it inherits

The lab adds local craft on top of these, and nothing more:

- [`../kernel/`](../kernel/) — laws (prime directives, engagement tiers, decision authority),
  protocols, contracts, and the loader's resolution order.
- [`../templates/`](../templates/) — the canonical shapes for agents, councils, workflows,
  registers, companies, and adapters.
- [`../workflows/`](../workflows/) — the standard library of workflows this lab's local
  workflows extend.
- [`../councils/`](../councils/) — the standard library of council blueprints this lab's
  councils extend.
- [`../memory/`](../memory/) — the standard library of memory schemas this lab's registers
  extend.

Significant work is debated before it is built and gated before it ships
([Directive #3](../kernel/laws/prime-directives.md),
[Directive #9](../kernel/laws/prime-directives.md)). The argument between a
[replication-specialist](03-analysis/replication-specialist/) who wants a result re-run and a
[principal-investigator](02-research/principal-investigator/) who wants to claim priority is not
friction to be smoothed over — it is the mechanism. A finding no one tried to break is a finding
no one should trust.
