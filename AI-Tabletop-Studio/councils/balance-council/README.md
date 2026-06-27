# Balance Council
Status: draft
Type: council
Owner: balance-designer
Extends: performance-council ([../../../councils/performance-council/README.md](../../../councils/performance-council/README.md))

## Purpose
The body that **reviews a balance change against the fairness budget** the game
agreed to meet — and rules on whether it ships, gets re-tuned, or escalates. It is
the studio's analog of the performance-council: where that council asks *are we
within budget*, this one asks *is it balanced and fair to every player*. The
budget here is the **win-rate spread, dominant-strategy ceiling, and feels-bad
floor**, not latency. It does **not** set the core design — it holds the numbers
honest after [design-council](../design-council/README.md) has chosen the shape.

## Charter
A balance review of one game, mode, or expansion against its declared fairness
budgets, typically at [T2](../../../kernel/laws/engagement-tiers.md). A balance
problem already in a shipped product that breaks competitive play is **not** this
council — it is a crisis, routed to the studio's incident path at
[T4](../../../kernel/laws/engagement-tiers.md).

## Participants
- **Chair** (breaks deadlocks): balance-designer — owns the fairness budgets and
  the measurement method (playtest data, simulation).
- **Core** (must attend): systems-designer (owns the mechanics under review),
  playtest-lead (owns the data).
- **Advisory** (as needed): lead-game-designer when a tuning tradeoff touches the
  intended experience, chief-auditor for the quality veto.

## When convened
At a balance gate, on a scheduled tuning review, or when playtest data trips a
warning threshold — at [T2](../../../kernel/laws/engagement-tiers.md), see
[engagement-tiers.md](../../../kernel/laws/engagement-tiers.md). Convened, not
standing (Directive [#3](../../../kernel/laws/prime-directives.md)).

## Inputs
- The declared fairness budgets: win-rate spread by seat/faction, max
  first-player advantage, dominant-strategy ceiling.
- Current measurements against those budgets, with the method stated (sample size,
  player skill band).
- The trend — is the imbalance widening across versions or a one-off.

## Index
- [process.md](process.md) — how the review runs.
- [output.md](output.md) — the verdict and what it files to memory.
