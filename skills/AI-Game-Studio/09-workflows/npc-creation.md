# Workflow: npc-creation

**Purpose:** Create a non-combat NPC — vendor, quest-giver, companion, or ambient character — with believable behavior, voice, and a clear functional role.
**Default Tier:** T1 (ambient/vendor) to **T2** (companion or branching quest-giver with systemic ties).

## Purpose
NPCs are the world's social texture. A flat NPC breaks immersion faster than a missing texture. This pipeline ties function (what service the NPC provides) to fiction (who they are) so they feel authored, not placed.

## Participants
- [narrative-designer](../02-design/narrative-designer/) — character, voice, dialogue role.
- [quest-designer](../02-design/quest-designer/) — if the NPC drives quests/branches.
- [gameplay-programmer](../03-programming/gameplay-programmer/) — interaction, schedule, services.
- [character-artist](../04-art/character-artist/) + [animator](../04-art/animator/) — appearance and idle/talk anims.
- [voice-director](../05-audio/voice-director/) — VO casting and direction.
- [ui-artist](../04-art/ui-artist/) — dialogue/vendor UI if needed.
- [narrative-council](../08-councils/narrative-council/) — tone and continuity.
- [accessibility-tester](../07-qa/accessibility-tester/) — subtitles, dialogue skip, readability.

## Inputs
- Functional role: vendor, quest-giver, lore, companion, ambient.
- Location & schedule context from [level-designer](../02-design/level-designer/).
- World/continuity bible in [../10-memory/game-design-decisions.md](../10-memory/game-design-decisions.md).

## Steps
```
role brief → narrative council tone → character + dialogue → interaction build →
art/anim/VO → continuity check → accessibility QA → memory
```
1. **Role brief** — narrative-designer defines function + one-line character.
2. **Tone check** — [narrative-council](../08-councils/narrative-council/) confirms voice fits the world (T2+).
3. **Dialogue & service design** — narrative + quest designers write trees and service logic.
4. **Interaction build** — gameplay-programmer wires interaction, schedule, vendor/quest hooks.
5. **Art, animation, VO** — character-artist, animator, voice-director deliver presence.
6. **Continuity check** — narrative-designer verifies lore/name/timeline consistency.
7. **Accessibility QA** — subtitles, skip, contrast, controller nav.
8. **Record** — narrative-designer updates memory.

## Review Gates
- **Gate A — Tone go (T2+):** voice consistent with the world bible.
- **Gate B — Function works:** vendor/quest/companion services have no dead-ends or soft-locks.
- **Gate C — Accessibility:** full subtitle + skip support.

## Approval Process
T1: [narrative-designer](../02-design/narrative-designer/) + [lead-game-designer](../02-design/lead-game-designer/). T2: [narrative-council](../08-councils/narrative-council/) + Orchestrator.

## Outputs
Shippable NPC: dialogue, services, art/anim, VO, schedule, subtitles, telemetry on interactions.

## Completion Criteria
Tone go (T2+), services dead-end-free, accessibility complete, continuity verified, memory updated.

## Memory Updates
- [../10-memory/game-design-decisions.md](../10-memory/game-design-decisions.md) — character role + continuity entry.
- [../10-memory/known-bugs.md](../10-memory/known-bugs.md) — deferred schedule/pathing issues.
