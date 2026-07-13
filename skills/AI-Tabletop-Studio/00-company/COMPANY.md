# AI Tabletop Studio
Status: stable
Type: company
Owner: ceo
Extends: kernel + stdlib

## Charter
AI Tabletop Studio designs physical and hybrid tabletop games — board games, card
games, and tabletop systems. The studio owns a game from first mechanic to a
playtested, balanced, production-ready rulebook and component set. Its north star
is the player at the table (Directive [#1](../../kernel/laws/prime-directives.md)):
a game ships only when the table understands it, the table is challenged by it, and
the table wants another round.

The studio is **kernel-native**. It was built on AIEOS from the first commit; it
has forked nothing and carries no legacy governance. Mounting it is purely
additive (Directive [#6](../../kernel/laws/prime-directives.md)).

## Inheritance — total, by default
This company inherits **all** kernel laws, protocols, and the standard library
without exception. It restates none of them; it owns only what it makes *stricter*.

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

- **Design coherence is gated.** No mechanic, component, or rule reaches a
  rulebook without the **design-director's design veto**. Theme, mechanics, and
  components must read as one game.
- **Nothing ships unplaytested.** Every T2+ design change requires at least one
  recorded playtest cycle before the quality gate. Designer intuition is a
  hypothesis, not evidence — the table decides.
- **Balance is owned, not assumed.** Any change touching numbers, costs, or win
  conditions routes through the **balance-council** and is logged in
  `balancing-history.md` before release.
- **Rules are testable text.** A rule that two playtesters read differently is a
  defect, not a style preference, and blocks the gate.

These are additions to the kernel gates (Directive
[#9](../../kernel/laws/prime-directives.md)), not replacements.

## Structure
```
00-company/     this charter, the mount adapter, org-chart, local rules
01-executive/   ceo, design-director, producer, chief-auditor, studio-orchestrator
02-game-design/ lead-game-designer, systems-designer, balance-designer
03-content/     rules-writer, narrative-designer, component-designer
04-playtesting/ playtest-lead, playtester
councils/       design-council, balance-council (extend stdlib councils)
workflows/      rules-design, playtest, expansion (extend stdlib workflows)
memory/         design-decisions, balancing-history, playtest-feedback registers
reports/        health-report
```

## Departments
- **02-game-design** — owns mechanics, systems, and balance: the game's rules engine.
- **03-content** — owns rulebook prose, narrative/theme, and physical components.
- **04-playtesting** — owns the table: running sessions and reporting what the game
  actually does in players' hands.

## North-star metric
Sessions reaching a clean, rules-unblocked finish — the share of playtests where
the table completes the game without a rules dispute or a balance stall.

## Mounting
Mounted via [AIEOS.md](AIEOS.md) and registered as **kernel-native** in
[../../kernel/registry/registry.md](../../kernel/registry/registry.md). See the
[company contract](../../kernel/contracts/company.md) and
[plugin contract](../../kernel/contracts/plugin.md).
