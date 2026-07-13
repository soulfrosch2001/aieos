# 🎮 Gameplay Council
Status: stable
Type: council
Owner: chair
Extends: none

`Status: stable`

> Guards the question that beats every other: **is it fun, clear, and worth the player's
> time?** This is **Prime Directive #1** ([../../00-company/prime-directives.md](../../00-company/prime-directives.md))
> made into a decision body.

## Purpose
Decide the shape of mechanics, systems, and moment-to-moment feel before they are built.
The council weighs whether a feature serves the player experience, fits the design pillars,
and reads clearly — not just whether it is technically possible. It owns *what the player
does and feels*; it does **not** own how the engine implements it (that is the
[technical-council](../technical-council/)) or how it is tuned over time (that is
[economy-council](../economy-council/) / [balance](../../02-design/balance-designer/)).

## Participants
- **Chair:** [lead-game-designer](../../02-design/lead-game-designer/) — final say on feel and pillar fit.
- **Core members:**
  - [gameplay-designer](../../02-design/gameplay-designer/) — core loop and mechanics.
  - [combat-designer](../../02-design/combat-designer/) — encounter and combat feel.
  - [systems-designer](../../02-design/systems-designer/) — how systems interlock and emerge.
  - [gameplay-programmer](../../03-programming/gameplay-programmer/) — feasibility and feel-in-code.
  - [gameplay-tester](../../07-qa/gameplay-tester/) — the player's proxy; flags confusion and friction.
- **Advisory (as needed):** [level-designer](../../02-design/level-designer/),
  [progression-designer](../../02-design/progression-designer/),
  [creative-director](../../01-executive/creative-director/) for pillar conflicts.

## When Convened
- **T2** — a new mechanic, enemy archetype, ability, or core-loop change.
- **T3** — a new design pillar or signature feature → council **+** executive board.
- Not convened for **T0/T1** tuning (the specialist or [lead-game-designer](../../02-design/lead-game-designer/) handles it).

## Index
- [process.md](process.md) — how it debates, decides, and gates by tier.
- [output.md](output.md) — the Design Verdict deliverable and minutes template.
