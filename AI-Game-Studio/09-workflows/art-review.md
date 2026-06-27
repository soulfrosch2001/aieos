# Workflow: art-review

**Purpose:** Review art assets for direction consistency, technical budget, and in-context readability before they enter the build.
**Default Tier:** T1 (an asset batch) to **T2** (a new biome/character set defining a look).

## Purpose
Art review protects the *coherence* of the game's look and the *budget* that keeps it running. A gorgeous asset that breaks the style or blows the texture budget is a liability. The [art-council](../08-councils/art-council/) judges against the art bible and the technical-art budgets together.

## Participants
- The contributing artist (e.g. [environment-artist](../04-art/environment-artist/), [character-artist](../04-art/character-artist/), [prop-artist](../04-art/prop-artist/)).
- [art-director](../04-art/art-director/) — guardian of the visual direction.
- [art-council](../08-councils/art-council/) — the deciding body.
- [technical-artist](../04-art/technical-artist/) — budgets (tris, texels, draw calls, materials).
- [lighting-artist](../04-art/lighting-artist/) — reads under real lighting.
- [performance-tester](../07-qa/performance-tester/) — in-scene cost.

## Inputs
- The asset(s) + the art bible / reference from [../10-memory/game-design-decisions.md](../10-memory/game-design-decisions.md).
- Technical budgets per asset class.

## Steps
```
submit asset → direction check → [GATE: on-style?] → budget check → in-context lighting review →
gameplay readability → verdict → memory
```
1. **Submit** — artist presents the asset in-engine, in a representative scene.
2. **Direction check** — art-director + council compare against the bible.
3. **Style gate** — on-direction or send back; consistency beats individual brilliance.
4. **Budget check** — technical-artist verifies tris/texels/materials/draw calls.
5. **Lighting review** — lighting-artist confirms it reads under the game's lighting.
6. **Gameplay readability** — important props/enemies must read against backgrounds (silhouette, contrast).
7. **Verdict + record** — council issues pass/revise/reject; art-director logs decisions.

## Review Gates
- **Gate A — Style gate:** consistent with the art bible (hard block on direction breaks).
- **Gate B — Budget gate:** within technical-art budgets.
- **Gate C — Readability gate:** gameplay-critical assets read in context.

## Approval Process
T1: [art-director](../04-art/art-director/) + [art-council](../08-councils/art-council/) chair. T2 (look-defining): full [art-council](../08-councils/art-council/) verdict + [creative-director](../01-executive/creative-director/) sign-off. Budget overruns escalate to [technical-director](../01-executive/technical-director/).

## Outputs
Council verdict, revision list, accepted assets marked production-ready with budget notes.

## Completion Criteria
Style + budget + readability gates passed, verdict recorded.

## Memory Updates
- [../10-memory/meeting-history.md](../10-memory/meeting-history.md) — verdict + dissent.
- [../10-memory/technical-debt.md](../10-memory/technical-debt.md) — accepted budget exceptions.
