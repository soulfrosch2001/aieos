# Workflow: audio-review

**Purpose:** Review audio — music, SFX, VO, ambience — for game feel, mix balance, and information value before it locks into the build.
**Default Tier:** T1 (a sound batch) to **T2** (an adaptive music system or a full mix pass).

## Purpose
Audio is half of game feel and a primary information channel — an enemy you hear before you see, an impact that sells a hit. Bad audio is fatigue; good audio is invisible until it's gone. This review judges sound against *information value and feel*, not just fidelity, under the [art-council](../08-councils/art-council/)'s sister review run by the audio department.

## Participants
- [audio-director](../05-audio/audio-director/) — guardian of the sonic identity.
- [sound-designer](../05-audio/sound-designer/) / [composer](../05-audio/composer/) / [ambient-designer](../05-audio/ambient-designer/) — present the work.
- [music-producer](../05-audio/music-producer/) — mix and mastering.
- [voice-director](../05-audio/voice-director/) — VO clarity and direction.
- [gameplay-tester](../07-qa/gameplay-tester/) — does audio convey gameplay info?
- [accessibility-tester](../07-qa/accessibility-tester/) — subtitles, visual sound cues, mono mix.

## Inputs
- The audio assets + the sonic intent (what each sound must tell the player).
- The mix bus targets and loudness standard.

## Steps
```
submit audio → in-game review → [GATE: conveys info + feels right?] → mix/loudness check →
VO clarity → accessibility → verdict → memory
```
1. **Submit** — author delivers audio playing in real gameplay context.
2. **In-game review** — audio-director judges feel and information value at game volume with SFX competing.
3. **Feel + info gate** — does the sound deliver feel *and* readable information? **Decorative-only, revise.**
4. **Mix check** — music-producer verifies bus balance and loudness; no masking of gameplay-critical SFX.
5. **VO clarity** — voice-director checks intelligibility over the mix.
6. **Accessibility** — subtitles/captions, visual cue support, mono fold-down sanity.
7. **Verdict + record** — audio-director issues pass/revise/reject and logs decisions.

## Review Gates
- **Gate A — Feel + info gate:** audio conveys gameplay information and feel.
- **Gate B — Mix gate:** loudness within standard; no critical-SFX masking (hard block).
- **Gate C — Accessibility gate:** captions + visual cues for key sounds.

## Approval Process
T1: [audio-director](../05-audio/audio-director/). T2 (adaptive system / full mix): [audio-director](../05-audio/audio-director/) + [creative-director](../01-executive/creative-director/) awareness. Mix-vs-design conflicts escalate to [gameplay-council](../08-councils/gameplay-council/).

## Outputs
Verdict, revision list, accepted audio marked ready with mix notes.

## Completion Criteria
Feel/info + mix + accessibility gates passed, verdict recorded.

## Memory Updates
- [../10-memory/meeting-history.md](../10-memory/meeting-history.md) — verdict + dissent.
- [../10-memory/lessons-learned.md](../10-memory/lessons-learned.md) — recurring mix/masking issues.
