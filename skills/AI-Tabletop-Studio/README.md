# AI Tabletop Studio

Status: draft
Type: company
Owner: ceo
Extends: kernel + stdlib

A studio that designs **board, card, and tabletop games** — the kind that live on a
table, in players' hands, measured in turns and not frames. It ships rules, components,
and balance, not binaries.

It is also the **first kernel-native AIEOS company**: born inheriting the kernel, with
**zero forking**. Where the earlier studios were built standalone and later mapped onto
the OS, this one was *conceived* on the OS. Nothing here re-implements a law, a council
shape, or a memory schema that the kernel already provides — by design. That makes the
studio the living proof that the operating system works: if a real company can stand up
entirely out of inherited parts, the kernel is more than documentation.

## Why "born inheriting"

The kernel's [Directive #6 — inherit, don't fork](../kernel/laws/prime-directives.md)
says duplicated structure is a bug. Most companies pay lip service to that and quietly
copy. This studio takes it literally: every council `Extends` a stdlib blueprint, every
workflow `Extends` a stdlib workflow, every register `Extends` a stdlib schema, and the
only thing that is ever *added* locally is **stricter** rule — never a weaker one, never
a parallel copy. Read [`../kernel/loader/resolution-order.md`](../kernel/loader/resolution-order.md):
overrides happen **by name** and may only **add strictness**. The studio honours that to
the letter.

The orchestrator follows suit. Per [Directive #2](../kernel/laws/prime-directives.md), the
`studio-orchestrator` **routes and never builds** — it sizes a request against the
engagement tiers, fans work out, and gets out of the way.

## Repo map

```
AI-Tabletop-Studio/
  00-company/      COMPANY.md charter · AIEOS.md adapter · org-chart.md
  01-executive/    ceo · design-director · producer · chief-auditor · studio-orchestrator
  02-game-design/  lead-game-designer · systems-designer · balance-designer
  03-content/      rules-writer · narrative-designer · component-designer
  04-playtesting/  playtest-lead · playtester
  councils/        design-council · balance-council        (extend stdlib councils)
  workflows/       rules-design.md · playtest.md · expansion.md  (extend stdlib workflows)
  memory/          architecture.md · registers/             (extend stdlib schemas)
  reports/         health-report.md
```

Every **role is a 5-file folder** (`README · responsibilities · authority · craft ·
standards`); every **council is a 3-file folder** (`README · process · output`);
workflows and registers are single append-mostly files. The full convention set:
[`../shared/conventions.md`](../shared/conventions.md).

## How to read this studio

- **What it is and who it serves** → [`00-company/COMPANY.md`](00-company/COMPANY.md)
- **How it mounts onto AIEOS** (inheritance, overrides, mounting) →
  [`00-company/AIEOS.md`](00-company/AIEOS.md)
- **Who reports to whom** → [`00-company/org-chart.md`](00-company/org-chart.md)

### Departments

- [`01-executive/`](01-executive/) — CEO, design-director (owns design coherence and
  holds the design veto), producer (delivery), chief-auditor (quality veto), and the
  studio-orchestrator (routes, never builds).
- [`02-game-design/`](02-game-design/) — the mechanics: lead-game-designer,
  systems-designer, balance-designer.
- [`03-content/`](03-content/) — the artifacts players touch: rules-writer,
  narrative-designer, component-designer.
- [`04-playtesting/`](04-playtesting/) — the truth tellers: playtest-lead, playtester.

### Councils, workflows, memory

- [`councils/`](councils/) — [design-council](councils/design-council/) and
  [balance-council](councils/balance-council/), each extending a stdlib council
  blueprint.
- [`workflows/`](workflows/) — [rules-design](workflows/rules-design.md),
  [playtest](workflows/playtest.md), [expansion](workflows/expansion.md), each extending
  a stdlib workflow.
- [`memory/`](memory/) — [architecture](memory/architecture.md) plus the
  [registers](memory/registers/): design-decisions, balancing-history, playtest-feedback.
- [`reports/`](reports/) — the studio [health-report](reports/health-report.md).

## The kernel it inherits

The studio adds local craft on top of these, and nothing more:

- [`../kernel/`](../kernel/) — laws (prime directives, engagement tiers, decision
  authority), protocols, contracts, and the loader's resolution order.
- [`../templates/`](../templates/) — the canonical shapes for agents, councils,
  workflows, registers, companies, and adapters.
- [`../workflows/`](../workflows/) — the standard library of workflows this studio's
  local workflows extend.
- [`../councils/`](../councils/) — the standard library of council blueprints this
  studio's councils extend.
- [`../memory/`](../memory/) — the standard library of memory schemas this studio's
  registers extend.

Significant work is debated before it is built and gated before it ships
([Directive #3](../kernel/laws/prime-directives.md),
[Directive #9](../kernel/laws/prime-directives.md)). The disagreement between a
balance-designer and a systems-designer is not friction to be smoothed over — it is the
mechanism. A game that no one argued about is a game no one stress-tested.
