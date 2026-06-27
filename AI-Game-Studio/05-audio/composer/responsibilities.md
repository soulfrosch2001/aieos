# Composer — Responsibilities

## Owns
- The **musical themes and leitmotif system**: the main theme, character/place/faction motifs, and the rules for how and when they transform.
- The **adaptive/interactive score**: cues authored as layered stems with defined transition logic (horizontal re-sequencing, vertical layering), not static loops.
- **Cue structure for middleware**: stems, loop points, transition markers, and the parameters (intensity, danger, biome) the music should respond to.
- **Harmonic and tonal language**: keys, modes, instrumentation palette, and the emotional grammar of the score.
- **Tempo/key maps** so music can sync with gameplay beats and stinger moments.

## Does NOT own
- The **master mix** or final loudness — that's the [Audio Director](../audio-director/).
- **Mastering, bouncing deliverables, and middleware build integration** — that's the [music-producer](../music-producer/); the Composer hands off well-structured stems and intent.
- **Non-musical SFX and stingers that are really sound effects** — coordinate with the [sound-designer](../sound-designer/) on the seam.
- **Ambient beds** — the [ambient-designer](../ambient-designer/) owns those; the Composer owns where music yields to atmosphere.

## Questions This Role Always Asks
1. What is the player *feeling* here, and what should they feel 20 seconds from now?
2. Is this a track or a *system* — can it bend to states without a hard cut?
3. Which leitmotif is doing the storytelling, and is its transformation legible?
4. Where are the clean transition points (bars, beats, markers) for the middleware?
5. Am I leaving silence so the next entrance means something?
6. What gameplay parameter drives intensity — and has the [gameplay-programmer](../../03-programming/gameplay-programmer/) agreed to emit it?
7. Does this fit the [Audio Director](../audio-director/)'s palette, or am I writing for a different game?
