# Workflow: enemy-creation

**Purpose:** Create a standard enemy that teaches the player something — a new threat, a new read, a new counter — and integrates cleanly with combat, AI, and the encounter sandbox.
**Default Tier:** T2 (a new combat actor). T1 if it is a palette/stat variant of an existing archetype.

## Purpose
Every enemy is a *question* the combat system asks the player. A good enemy has one clear tell, one clear counter, and a role in the ecology (chaff, threat, controller, etc.). This pipeline keeps enemies from becoming bullet-sponge noise.

## Participants
- [combat-designer](../02-design/combat-designer/) — owns the enemy's role and counterplay.
- [ai-programmer](../03-programming/ai-programmer/) — builds behavior trees / utility AI.
- [creature-artist](../04-art/creature-artist/) + [animator](../04-art/animator/) — silhouette, tells, anim set.
- [vfx-artist](../04-art/vfx-artist/) + [sound-designer](../05-audio/sound-designer/) — readability of attacks.
- [balance-designer](../02-design/balance-designer/) — stat block and damage budget.
- [gameplay-council](../08-councils/gameplay-council/) — scope; [animation-council](../08-councils/animation-council/) reviews tells.
- [bug-hunter](../07-qa/bug-hunter/) — AI edge cases (stuck, T-pose, infinite stagger).

## Inputs
- Role brief: where it fits in the enemy ecology and difficulty curve.
- Encounter contexts it must work in (from [level-designer](../02-design/level-designer/)).
- Damage/health budget from [../10-memory/balancing-history.md](../10-memory/balancing-history.md).

## Steps
```
role brief → council scope → behavior design → grey-box AI → art+anim tells →
readability gate → balance → encounter QA → memory
```
1. **Scope** — [gameplay-council](../08-councils/gameplay-council/) confirms the ecology role and counterplay.
2. **Behavior design** — combat-designer specifies states, tells, attack windows, aggro rules.
3. **Grey-box AI** — ai-programmer implements behavior on a placeholder mesh.
4. **Art & animation** — creature-artist + animator deliver silhouette and *legible tells*.
5. **Readability gate** — [animation-review.md](animation-review.md): can the player read the wind-up at gameplay speed?
6. **Balance** — balance-designer sets the stat block; run [balancing.md](balancing.md).
7. **Encounter QA** — bug-hunter stress-tests in real arenas (groups, ledges, navmesh gaps).
8. **Record** — combat-designer updates memory.

## Review Gates
- **Gate A — Role go:** the enemy isn't redundant with an existing archetype.
- **Gate B — Readability:** tells are visible and counterable; failing this is a hard block (it's an unfair enemy).
- **Gate C — AI robustness:** no nav-stuck, no soft-locks, recovers from edge cases.

## Approval Process
T2: [gameplay-council](../08-councils/gameplay-council/) + Orchestrator; [combat-designer](../02-design/combat-designer/) is accountable, [lead-game-designer](../02-design/lead-game-designer/) signs off.

## Outputs
Shippable enemy: AI, anim set, VFX/SFX, stat block, encounter notes, telemetry tags.

## Completion Criteria
Readability gate passed, AI robust across encounter contexts, balanced, QA green, memory updated.

## Memory Updates
- [../10-memory/game-design-decisions.md](../10-memory/game-design-decisions.md) — ecology role + counterplay.
- [../10-memory/balancing-history.md](../10-memory/balancing-history.md) — stat block baseline.
- [../10-memory/known-bugs.md](../10-memory/known-bugs.md) — any deferred AI edge cases.
