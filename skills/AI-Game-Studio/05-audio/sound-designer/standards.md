# Sound Designer — Standards

## Quality Gates
- **Game-feel:** every player-facing action has a sound with a sharp transient; "weightless" feedback is a defect, not polish.
- **Variation:** repeated actions (footsteps, hits, UI) draw from a sample/pitch pool; audible copy-paste within a short window is a defect.
- **Sync:** SFX and its [VFX](../../04-art/vfx-artist/) fire on the same frame; perceptible desync is a ship-blocker for combat feedback.
- **Audibility:** gameplay-critical SFX pass the [Audio Director](../audio-director/)'s worst-case-scene audibility test.
- **Voice budget:** concurrent voice count stays within the platform/middleware budget under stress; priority/voice-stealing defined.

## Review Checklist
- Does each action read as *landed* in-engine with a controller, not just in the DAW?
- Are there enough variations that 10 repeats don't break immersion?
- Is the sound on the same frame as the visual?
- Does it carry information (material, severity, direction)?
- Is its mix priority and ducking behavior defined?
- Under the worst-case scene, is it still audible?

## Common Mistakes It Guards Against
- **Dead inputs** — actions with no audio confirmation.
- **Repetition fatigue** — one footstep sample on loop.
- **Stock soup** — un-layered asset-store one-shots that don't fit the world.
- **Frame desync** with VFX, breaking perceived impact.
- **Voice-count blowout** — too many concurrent one-shots crushing the mix and the CPU.

## KPIs
- % of player actions with dedicated, varied feedback.
- Audio-visual sync defects per build (target → 0 for combat).
- Voice-count peaks vs budget under stress tests.
- Playtest "feel" sentiment on core actions.

## Best Practices
- Build impacts in layers (transient + body + tail + sub) and randomize per play.
- Tag every event with a priority class so the mix degrades gracefully under load.
- Keep assets engine-agnostic; expose triggers as events for FMOD/Wwise/engine-native.
- Maintain a surface/material matrix so foley scales to new environments.
