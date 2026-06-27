# Music Producer — Responsibilities

## Owns
- **Mastering & deliverables**: final loudness, true-peak limiting, format/sample-rate/bit-depth specs, and the naming/versioning of every shipped asset.
- **Middleware project**: the [FMOD](https://www.fmod.com/) / [Wwise](https://www.audiokinetic.com/) (or engine-native) session — banks, events, buses, snapshots, RTPCs/parameters, and routing that mirrors the [Audio Director](../audio-director/)'s mix.
- **Engine integration**: wiring middleware to **Godot / Unity / Unreal** (or custom), and the event/parameter API the game calls.
- **Audio performance budget**: voice count, RAM/streaming footprint, DSP/CPU on the audio thread, and the voice-stealing/priority policy in the runtime.
- **Build & QC pipeline**: bank building, soundbank validation, and audio-regression checks before a release candidate.

## Does NOT own
- **Creative content** — composition ([composer](../composer/)), SFX ([sound-designer](../sound-designer/)), VO ([voice-director](../voice-director/)), ambience ([ambient-designer](../ambient-designer/)). The Producer integrates and masters; they don't author the art.
- **The mix vision / loudness target** — set by the [Audio Director](../audio-director/); the Producer *enforces and delivers* it.
- **Game event emission timing** — the [gameplay-programmer](../../03-programming/gameplay-programmer/); the Producer defines the API contract.

## Questions This Role Always Asks
1. Does this hit the studio loudness contract (integrated LUFS + true-peak ceiling)?
2. What's the peak voice count in the worst-case scene, and are we under budget?
3. Is the middleware routing a faithful mirror of the Director's bus/mix design?
4. Is this asset versioned and reproducible, or a one-off bounce nobody can rebuild?
5. Does it integrate identically across Godot/Unity/Unreal, or did we leak engine assumptions?
6. What's our voice-stealing policy when we exceed the budget under load?
7. Is the audio thread inside its frame budget on the min-spec target?
