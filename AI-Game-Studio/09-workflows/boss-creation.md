# Workflow: boss-creation

**Purpose:** Build a boss — a set-piece, multi-phase encounter that is the exam for a chapter's mechanics and a memory the player keeps forever.
**Default Tier:** **T3 — Strategic.** Bosses are pillars of pacing, marketing, and difficulty; they get exec attention.

## Purpose
A boss is the most expensive and most remembered content a studio ships. It must test what the player learned, escalate across phases, and be *fair on a clean run*. This is a heavyweight pipeline with explicit phase gating and an executive sign-off, because a bad boss tanks reviews.

## Participants
- [combat-designer](../02-design/combat-designer/) — encounter author and owner.
- [systems-designer](../02-design/systems-designer/) — phase logic, arena systems.
- [ai-programmer](../03-programming/ai-programmer/) + [gameplay-programmer](../03-programming/gameplay-programmer/) — phase state machine.
- [art-director](../04-art/art-director/) + [creature-artist](../04-art/creature-artist/) + [animator](../04-art/animator/) — spectacle and tells.
- [composer](../05-audio/composer/) + [sound-designer](../05-audio/sound-designer/) — phase-reactive music and audio cues.
- [narrative-designer](../02-design/narrative-designer/) — stakes and barks.
- [gameplay-council](../08-councils/gameplay-council/) + [animation-council](../08-councils/animation-council/) + [narrative-council](../08-councils/narrative-council/).
- [creative-director](../01-executive/creative-director/) — T3 sign-off; [chief-auditor](../01-executive/chief-auditor/) holds veto.

## Inputs
- Chapter mechanics this boss must examine.
- Difficulty target + accessibility plan ([accessibility-tester](../07-qa/accessibility-tester/)).
- Narrative beat from [../10-memory/game-design-decisions.md](../10-memory/game-design-decisions.md).

## Steps
```
exec pitch → multi-council scope → phase design → grey-box fight → [GATE: fight reads?] →
art/anim/audio spectacle → tuning per phase → accessibility → release-gate playtest → memory
```
1. **Exec pitch** — combat-designer + creative-director align the fight to the chapter's theme.
2. **Multi-council scope** — gameplay + animation + narrative councils approve the fantasy and phases.
3. **Phase design** — combat-designer maps each phase's *new question* and transition trigger.
4. **Grey-box fight** — programmers build the full phase machine on placeholders.
5. **Readability gate** — [animation-review.md](animation-review.md): every phase's tells legible at speed.
6. **Spectacle pass** — art, animation, VFX, and phase-reactive audio.
7. **Per-phase tuning** — [balancing.md](balancing.md) tuned phase by phase; check the *clean-run* fairness.
8. **Accessibility** — assist options, colorblind-safe tells, optional difficulty.
9. **Release-gate playtest** — heavy [playtesting.md](playtesting.md) including blind testers.
10. **Record** — combat-designer + narrative-designer update memory.

## Review Gates
- **Gate A — Multi-council go.**
- **Gate B — Readability per phase** (hard block).
- **Gate C — Clean-run fairness:** an expert must be able to take zero damage in principle.
- **Gate D — Exec go/no-go:** creative-director signs; chief-auditor may veto on quality/scope.

## Approval Process
T3: [creative-director](../01-executive/creative-director/) sign-off after multi-council go. [chief-auditor](../01-executive/chief-auditor/) veto per [Prime Directive 7](../00-company/COMPANY.md). [production-director](../01-executive/production-director/) confirms schedule cost.

## Outputs
Multi-phase boss with phase state machine, spectacle art/anim/audio, accessibility options, telemetry per phase, and a Go/No-Go verdict.

## Completion Criteria
All phase gates passed, clean-run fairness proven, accessibility shipped, exec go recorded, memory updated.

## Memory Updates
- [../10-memory/game-design-decisions.md](../10-memory/game-design-decisions.md) — the fight's thesis and dissent.
- [../10-memory/balancing-history.md](../10-memory/balancing-history.md) — per-phase tuning.
- [../10-memory/meeting-history.md](../10-memory/meeting-history.md) — the Go/No-Go.
- [../10-memory/lessons-learned.md](../10-memory/lessons-learned.md) — what the spectacle cost taught us.
