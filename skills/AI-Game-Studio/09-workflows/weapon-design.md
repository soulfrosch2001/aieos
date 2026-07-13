# Workflow: weapon-design

**Purpose:** Design a weapon that feels distinct in the hand — its own range, rhythm, risk, and reward — and slots cleanly into the combat economy.
**Default Tier:** T2 (a new weapon archetype). T1 if it is a stat/skin variant within an existing archetype.

## Purpose
A weapon is a relationship between the player and time-to-kill, reach, and commitment. Two weapons that play the same are one weapon and one wasted slot. This pipeline protects *feel* and *distinctness*, and guards the combat economy from power creep.

## Participants
- [combat-designer](../02-design/combat-designer/) — owns the weapon's identity and counterplay.
- [gameplay-programmer](../03-programming/gameplay-programmer/) — hit detection, recoil, swing arcs.
- [balance-designer](../02-design/balance-designer/) + [economy-designer](../02-design/economy-designer/) — damage budget and acquisition cost.
- [animator](../04-art/animator/) + [vfx-artist](../04-art/vfx-artist/) — anim set, impact, juice.
- [sound-designer](../05-audio/sound-designer/) — the all-important impact sound.
- [prop-artist](../04-art/prop-artist/) — the weapon model.
- [gameplay-council](../08-councils/gameplay-council/) + [economy-council](../08-councils/economy-council/).

## Inputs
- Archetype brief + the fantasy ("brutal slow hammer", "precise rifle").
- Combat economy targets from [../10-memory/balancing-history.md](../10-memory/balancing-history.md).
- TTK and range bands from existing weapons.

## Steps
```
fantasy brief → council scope → feel prototype → [GATE: distinct feel?] → anim/VFX/SFX juice →
balance + economy → QA → memory
```
1. **Fantasy brief** — combat-designer names the feel and the niche it fills.
2. **Scope** — [gameplay-council](../08-councils/gameplay-council/) confirms distinctness; [economy-council](../08-councils/economy-council/) sets acquisition cost.
3. **Feel prototype** — gameplay-programmer + combat-designer tune timing, reach, commitment on placeholders.
4. **Feel gate** — does it play unlike every other weapon? **Same feel, no ship.**
5. **Juice pass** — animator, vfx-artist, sound-designer add impact (especially SFX).
6. **Balance & economy** — [balancing.md](balancing.md) sets damage budget; economy-designer prices it.
7. **QA** — [gameplay-tester](../07-qa/gameplay-tester/) checks hit-reg, recoil, edge cases.
8. **Record** — combat-designer updates memory.

## Review Gates
- **Gate A — Niche go:** not redundant with an existing weapon.
- **Gate B — Feel gate:** distinct rhythm/reach/risk (hard block).
- **Gate C — Economy gate:** no power creep; acquisition cost matches power.

## Approval Process
T2: [gameplay-council](../08-councils/gameplay-council/) + [economy-council](../08-councils/economy-council/) jointly + Orchestrator. [combat-designer](../02-design/combat-designer/) accountable.

## Outputs
Shippable weapon: feel-tuned mechanics, anim/VFX/SFX, balanced stat block, economy price, telemetry.

## Completion Criteria
Feel gate passed, no power creep, hit-reg clean, economy priced, memory updated.

## Memory Updates
- [../10-memory/balancing-history.md](../10-memory/balancing-history.md) — damage budget + TTK band.
- [../10-memory/game-design-decisions.md](../10-memory/game-design-decisions.md) — the weapon's niche.
