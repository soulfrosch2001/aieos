# Workflow: ability-design

**Purpose:** Design an active or passive ability — a player power with a cost, a cooldown, and a place in the build space — that creates decisions, not just damage.
**Default Tier:** T2 (a new ability). T3 if it introduces a new resource or interacts with the whole kit.

## Purpose
An ability is a *decision under a constraint*: when do I spend it, and what do I give up? Abilities with no opportunity cost are stat sticks. This pipeline protects the decision space and the synergy graph from degenerate combos.

## Participants
- [systems-designer](../02-design/systems-designer/) — owns resource, cooldown, synergy model.
- [combat-designer](../02-design/combat-designer/) — moment-to-moment use and counterplay.
- [gameplay-programmer](../03-programming/gameplay-programmer/) — ability framework hooks.
- [vfx-artist](../04-art/vfx-artist/) + [sound-designer](../05-audio/sound-designer/) — readable cast and effect.
- [balance-designer](../02-design/balance-designer/) — power budget vs cost.
- [gameplay-council](../08-councils/gameplay-council/); [economy-council](../08-councils/economy-council/) if it touches resources.

## Inputs
- Ability pitch + the decision it creates.
- Existing kit / synergy graph from [../10-memory/game-design-decisions.md](../10-memory/game-design-decisions.md).
- Resource/cooldown conventions.

## Steps
```
pitch → council scope → cost+cooldown model → prototype → [GATE: meaningful decision?] →
synergy/abuse audit → VFX/SFX readability → balance → QA → memory
```
1. **Pitch** — systems-designer states the ability and its opportunity cost.
2. **Scope** — [gameplay-council](../08-councils/gameplay-council/) confirms it adds a decision, not just power.
3. **Cost model** — define resource, cooldown, cast time, counterplay.
4. **Prototype** — gameplay-programmer builds it on the ability framework.
5. **Decision gate** — does the player face a real "when/whether" choice? **No decision, no ship.**
6. **Abuse audit** — systems-designer hunts degenerate combos and infinite loops.
7. **Readability** — vfx/sfx make cast + effect legible (especially in PvP/co-op).
8. **Balance** — [balancing.md](balancing.md) sets power vs cost.
9. **QA + record** — gameplay-tester validates; systems-designer updates memory.

## Review Gates
- **Gate A — Decision go:** the ability creates a choice.
- **Gate B — Abuse audit:** no infinite/degenerate combos (hard block).
- **Gate C — Readability:** cast and effect are clear to player and opponents.

## Approval Process
T2: [gameplay-council](../08-councils/gameplay-council/) + Orchestrator. T3 (new resource): [creative-director](../01-executive/creative-director/) sign-off, [systems-designer](../02-design/systems-designer/) accountable.

## Outputs
Shippable ability: framework data, VFX/SFX, balanced cost/power, synergy notes, telemetry.

## Completion Criteria
Decision gate passed, abuse audit clean, readable, balanced, memory updated.

## Memory Updates
- [../10-memory/game-design-decisions.md](../10-memory/game-design-decisions.md) — synergy graph entry.
- [../10-memory/balancing-history.md](../10-memory/balancing-history.md) — power/cost baseline.
