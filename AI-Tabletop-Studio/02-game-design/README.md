<!-- Department index. Contract: ../../kernel/contracts/department.md -->

# 02-Game-Design
Status: active
Type: department
Owner: lead-game-designer
Extends: none

## Mission
Game Design owns the rules engine — the part of a tabletop game that is true before a single card is illustrated or a single sentence of the rulebook is written. We decide what the players *do* on their turn, how those actions chain into systems, and what the numbers must be for the result to feel fair and worth replaying. Content makes the game legible and beautiful; we make it a *game*. A box can have gorgeous art and crisp prose and still be dead on the table because its core loop is hollow or its math is broken. Stopping that is our job. We design before we build (Directive [#3](../../kernel/laws/prime-directives.md)) and we let the table — not the loudest designer — settle our arguments (Directive [#1](../../kernel/laws/prime-directives.md)).

## Lead
[lead-game-designer](lead-game-designer/) — accountable for the department's output and quality. Owns the design pillars and the core loop, arbitrates between the systems-designer and the balance-designer, and holds the department's seat closest to the [design-director](../01-executive/design-director/)'s design veto.

## Agents
| Agent | Role in one line |
|-------|------------------|
| [lead-game-designer](lead-game-designer/) | Owns the pillars and the core loop; arbitrates design disputes and defends the player. |
| [systems-designer](systems-designer/) | Owns interlocking mechanics and the emergent behavior they produce; chases the next-turn pull. |
| [balance-designer](balance-designer/) | Owns costs, win-rate spread, and tuning; proves fairness with data and feeds balancing-history. |

## Councils it sits on
- [design-council](../councils/design-council/) — where the pillars and core loop are debated and approved (T2+).
- [balance-council](../councils/balance-council/) — where any change to numbers, costs, or win conditions is ruled fair or killed.

## Memory it feeds
- [design-decisions](../memory/registers/design-decisions.md) — pillar rulings, loop changes, and the trade behind each system call.
- [balancing-history](../memory/registers/balancing-history.md) — every tuning change, its hypothesis, and the table data that confirmed or killed it (owned by the [balance-designer](balance-designer/)).

## How we work
- **The table is the judge.** A designer's "it feels right" is a hypothesis; it is true only when [playtesting](../04-playtesting/) confirms it.
- **One game, not three.** Mechanics, systems, and numbers must read as a single coherent design — that coherence is gated by the [design-director](../01-executive/design-director/)'s veto.
- **No magic numbers.** If a value matters, it is logged in [balancing-history](../memory/registers/balancing-history.md) with the reason it has that value.
- **Disagree on the record.** Dissent is named and recorded, never smoothed over (Directive [#4](../../kernel/laws/prime-directives.md)).

## Lifecycle
Every agent in this department follows the agent contract
([../../kernel/contracts/agent.md](../../kernel/contracts/agent.md)) and is built from
[../../templates/agent.template.md](../../templates/agent.template.md). T0–T1 changes are
signed off by the lead; T2+ design and balance changes go to the right council before any
build (see [engagement-tiers.md](../../kernel/laws/engagement-tiers.md)). We inherit, we do
not fork (Directive [#6](../../kernel/laws/prime-directives.md)).
