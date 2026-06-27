# Workflow: animation-review

**Purpose:** Review animation for *readability and feel* — does the motion communicate intent at gameplay speed, and does it feel good? — before it locks into the build.
**Default Tier:** T1 (a clip set) to **T2** (a full character locomotion + combat set).

## Purpose
Animation is gameplay's handwriting. A beautiful attack that the player can't read is a bug; a snappy attack with weak tells is unfair. This review judges animation against *gameplay legibility first, polish second*, owned by the [animation-council](../08-councils/animation-council/).

## Participants
- [animator](../04-art/animator/) — presents the work.
- [animation-council](../08-councils/animation-council/) — the deciding body.
- [combat-designer](../02-design/combat-designer/) / [gameplay-designer](../02-design/gameplay-designer/) — judge tells vs design intent.
- [technical-artist](../04-art/technical-artist/) — rig, root motion, blend integrity.
- [gameplay-tester](../07-qa/gameplay-tester/) — verifies readability in-game, not in a viewer.
- [accessibility-tester](../07-qa/accessibility-tester/) — tells legible for low-vision/colorblind.

## Inputs
- The animation set + the design intent (what each motion must communicate).
- Frame-data targets (startup/active/recovery) from combat design.

## Steps
```
submit clips → in-engine review → [GATE: reads at speed?] → frame-data check →
tech check (rig/blend) → accessibility → verdict → memory
```
1. **Submit** — animator delivers clips integrated in-engine (not a render).
2. **In-engine review** — [animation-council](../08-councils/animation-council/) watches at real gameplay speed and camera.
3. **Readability gate** — can a first-time player read the wind-up and counter it? **No read, no pass.**
4. **Frame-data check** — startup/active/recovery match the combat-designer's intent.
5. **Tech check** — technical-artist verifies blends, root motion, no foot-sliding/popping.
6. **Accessibility** — tells survive colorblind and reduced-motion settings.
7. **Verdict** — council issues pass / revise / reject; animator updates memory on accepted changes.

## Review Gates
- **Gate A — Readability gate:** legible at gameplay speed (hard block).
- **Gate B — Frame-data gate:** timing matches design intent.
- **Gate C — Tech integrity:** no popping, sliding, or broken blends.

## Approval Process
T1: [animation-council](../08-councils/animation-council/) chair + [art-director](../04-art/art-director/). T2 set: full council verdict + [creative-director](../01-executive/creative-director/) awareness. Combat-design disputes escalate to [gameplay-council](../08-councils/gameplay-council/).

## Outputs
A council verdict (pass/revise/reject), a revision list, and accepted clips marked ready.

## Completion Criteria
Readability + frame-data + tech gates passed, accessibility verified, verdict recorded.

## Memory Updates
- [../10-memory/meeting-history.md](../10-memory/meeting-history.md) — the verdict and dissent.
- [../10-memory/lessons-learned.md](../10-memory/lessons-learned.md) — recurring readability failures.
