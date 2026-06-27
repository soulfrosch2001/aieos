# AI Game Balancing Studio
Status: stable
Type: company
Owner: ceo
Extends: kernel + stdlib

## Charter
AI Game Balancing Studio tunes games so they are fair, legible, and worth replaying.
It owns three balancing surfaces — **economy** (currencies, sinks, sources, prices),
**difficulty and progression** (pacing, encounters, the player's growth curve), and
**competitive balance** (the meta, matchups, matchmaking). The studio takes a title's
numbers from "feels off" to "demonstrably tuned": every change is grounded in evidence,
reasoned against the whole system, and recorded before it ships.

Its north star is the player's experience of fairness (Directive
[#1](../../kernel/laws/prime-directives.md)): a tune lands only when the system stays
coherent, the data backs it, and the game becomes more worth playing — not merely
different.

The studio is **kernel-native**. It was built on AIEOS from the first commit; it has
forked nothing and carries no legacy governance. Mounting it is purely additive
(Directive [#6](../../kernel/laws/prime-directives.md)).

## A studio that serves other studios
This studio's clients are other AIEOS companies — Game, Tabletop, and RPG studios that
need their numbers tuned. It **never contacts those studios directly**. Every brief,
question, dataset, and delivered tune passes through the Government, which routes work
in and integrates results out (Directive [#5](../../kernel/laws/prime-directives.md),
[communication protocol](../../kernel/protocols/communication.md)). Cross-company
silence is a hard rule, not a courtesy.

## Inheritance — total, by default
This company inherits **all** kernel laws, protocols, and the standard library without
exception. It restates none of them; it owns only what it makes *stricter*.

- **Laws** — all [Prime Directives](../../kernel/laws/prime-directives.md),
  the [engagement tiers T0–T4](../../kernel/laws/engagement-tiers.md), and
  [decision authority](../../kernel/laws/decision-authority.md).
- **Protocols** — communication, orchestration (15-agent fan-out), escalation,
  memory-flow, lifecycle, all from [../../kernel/protocols/](../../kernel/protocols/).
- **Stdlib** — every [workflow](../../workflows/), [council](../../councils/),
  [template](../../templates/), and [memory register](../../memory/) it does not
  override by name is inherited silently.

## Local rules — stricter only, never looser
A company may tighten a Kernel Law, never weaken one (Directive
[#6](../../kernel/laws/prime-directives.md)). The studio adds:

- **No tune without evidence.** Every numeric change cites data — playtest logs,
  telemetry, or a stated model. The balance-director **vetoes any change that is
  unsound or unevidenced**. Designer intuition is a hypothesis, not a result.
- **Balance is a system, not a knob.** A change to one number is reasoned against the
  whole loop. Economy, progression, and competitive effects are checked together
  through the **balance-council** before release.
- **Methodology is owned.** How the studio measures, models, and validates balance is
  governed by the **methodology-council** and may not drift silently per engagement.
- **Every tune is reproducible.** A change reaches a patch only when its before/after,
  rationale, and evidence are logged in
  [balance-decisions](../memory/registers/balance-decisions.md) and
  [balancing-history](../memory/registers/balancing-history.md).
- **The studio tunes; it does not design.** It adjusts an existing system's numbers
  and rules; it does not invent the client's game. Scope creep into design routes back
  through the Government.

These are additions to the kernel gates, not replacements.

## Structure
```
00-company/    this charter, the mount adapter, org-chart, this index
01-executive/  ceo, balance-director, operations-director, chief-auditor, studio-orchestrator
02-economy/    economy-balancer, currency-designer, sink-source-analyst
03-progression/ progression-balancer, difficulty-tuner, encounter-balancer
04-competitive/ meta-analyst, matchmaking-analyst
councils/      balance-council, methodology-council (extend stdlib councils)
workflows/     balance-pass, playtest-analysis, patch-balancing (extend stdlib workflows)
memory/        balance-decisions, balancing-history, balance-backlog registers
reports/       health-report
```

## Departments
- **02-economy** — owns currencies, sinks, sources, prices, and rewards: the money loop.
- **03-progression** — owns difficulty, pacing, encounters, and the growth curve.
- **04-competitive** — owns the meta, matchups, and matchmaking fairness.

## North-star metric
Tunes that hold — the share of shipped balance changes that survive the next playtest
or telemetry window without regression or rollback.

## Mounting
Mounted via [AIEOS.md](AIEOS.md) and registered as **kernel-native** in
[../../kernel/registry/registry.md](../../kernel/registry/registry.md). See the
[company contract](../../kernel/contracts/company.md) and
[plugin contract](../../kernel/contracts/plugin.md).
