<!-- Company plugin README. Contract: ../kernel/contracts/company.md -->

# AI Game Balancing Studio
Status: stable
Type: company
Owner: ceo
Extends: kernel + stdlib

**Purpose:** a game-balancing studio that tunes economy, difficulty and progression, and
competitive balance for games — taking a title's numbers from "feels off" to
"demonstrably tuned," every change grounded in evidence and recorded before it ships.

## A kernel-native AIEOS company
AI Game Balancing Studio is **born from the kernel (1.1.0) — it forks nothing**. It
inherits the [Prime Directives](../kernel/laws/prime-directives.md), the
[engagement tiers](../kernel/laws/engagement-tiers.md) (T0–T4),
[decision-authority](../kernel/laws/decision-authority.md), the
[protocols](../kernel/protocols/), and the stdlib library of
[workflows](../workflows/), [councils](../councils/), and
[memory schemas](../memory/registers/). Every local entity sets `Extends:` to its stdlib
parent and adds only what the balancing domain genuinely needs — evidenced tunes,
coherent loops, and reproducible patches.

**A studio that serves other studios.** Its clients are other AIEOS companies — Game,
Tabletop, and RPG studios that need their numbers tuned. It **never contacts those
studios directly**: every brief, dataset, and delivered patch passes through the
Government (Directive [#5](../kernel/laws/prime-directives.md),
[communication protocol](../kernel/protocols/communication.md)). See
[00-company/AIEOS.md](00-company/AIEOS.md) for how the studio mounts into the operating
system, and [00-company/COMPANY.md](00-company/COMPANY.md) for the charter.

## Repo map
```
00-company/     charter, org-chart, AIEOS mount
01-executive/   ceo · balance-director · operations-director · chief-auditor · studio-orchestrator
02-economy/     economy-balancer · currency-designer · sink-source-analyst
03-progression/ progression-balancer · difficulty-tuner · encounter-balancer
04-competitive/ meta-analyst · matchmaking-analyst
councils/       balance-council · methodology-council
workflows/      balance-pass · playtest-analysis · patch-balancing
memory/         registers: balance-decisions · balancing-history · balance-backlog
reports/        health report + KPIs
```

## Departments
- [02-economy](02-economy/) — owns currencies, sinks, sources, prices, and rewards: the money loop. Lead: economy-balancer.
- [03-progression](03-progression/) — owns difficulty, pacing, encounters, and the growth curve. Lead: progression-balancer.
- [04-competitive](04-competitive/) — owns the meta, matchups, and matchmaking fairness. Lead: meta-analyst.

## Councils
- [balance-council](councils/balance-council/) — coherence of a tune across the whole loop before release (extends stdlib performance-council; chaired by the balance-director).
- [methodology-council](councils/methodology-council/) — how the studio measures, models, and validates balance (extends stdlib architecture-council; chaired by the ceo).

## Workflows
- [balance-pass](workflows/balance-pass.md) — T2, a full balancing pass gated on evidence.
- [playtest-analysis](workflows/playtest-analysis.md) — T2, playtest and telemetry data into balance findings.
- [patch-balancing](workflows/patch-balancing.md) — T2, ship a balance patch with before/after hypotheses.

## Memory
- [memory/](memory/) — the studio's institutional memory and how it
  [plugs into the enterprise hierarchy](memory/architecture.md).
- Registers: [balance-decisions](memory/registers/balance-decisions.md),
  [balancing-history](memory/registers/balancing-history.md),
  [balance-backlog](memory/registers/balance-backlog.md).

## Reports
- [reports/](reports/) — [health report](reports/health-report.md): balancing KPIs against
  the ten quality dimensions.

## Inherited from AIEOS
- [../kernel/](../kernel/) — laws, protocols, loader, registry. The studio obeys, never edits.
- [../templates/](../templates/) — the templates every file here conforms to.
