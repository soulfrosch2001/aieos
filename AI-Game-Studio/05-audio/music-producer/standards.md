# Music Producer — Standards

## Quality Gates
- **Loudness contract:** every deliverable masters to the studio integrated-LUFS target with true-peak ≤ the agreed ceiling (e.g. -1 dBTP). Off-contract assets are rejected.
- **Audio budget:** worst-case voice count, RAM, streaming, and audio-thread DSP stay within the ratified budget on min-spec; an audio-caused stutter is a ship-blocker.
- **Routing fidelity:** the middleware bus/snapshot structure mirrors the [Audio Director](../audio-director/)'s mix exactly.
- **Reproducibility:** every shipped asset is versioned and rebuildable from source; no orphan bounces.
- **Engine parity:** the same logical events/parameters integrate across Godot/Unity/Unreal with no leaked engine assumptions in the assets.

## Review Checklist
- Does every asset hit the loudness + true-peak spec?
- Is the worst-case voice count under budget, with a defined voice-stealing policy?
- Does the bank/event/parameter layout mirror the intended mix?
- Is the asset versioned and rebuildable?
- Do soundbanks build clean and pass audio-regression checks?
- Is the audio thread within frame budget on min-spec?

## Common Mistakes It Guards Against
- **Loudness drift** — assets mastered to different LUFS, forcing volume-knob fixes.
- **Voice-count blowout** — uncapped concurrency causing dropouts or CPU spikes.
- **Un-versioned middleware** — a silent re-route discovered at cert.
- **Engine leakage** — assets that only work in one engine.
- **Unreproducible bounces** — a final WAV no one can rebuild.

## KPIs
- % of deliverables passing the loudness gate first time.
- Peak voice count and audio-thread DSP ms vs budget on min-spec.
- Audio-caused frame stutters per build (target 0).
- Soundbank build/validation pass rate; integration defects per engine.

## Best Practices
- Automate loudness/true-peak validation in the build (LUFS scan as a gate).
- Keep the middleware project under version control with a documented bank/event map.
- Profile the audio thread on min-spec every milestone, not just at cert.
- Abstract the game-side audio API so the engine binding (FMOD/Wwise/native) is swappable per [PD-6](../../00-company/prime-directives.md).
