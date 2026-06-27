# Music Producer — Authority

## Decides Alone
- Mastering chain settings and how an asset is brought to the loudness/peak spec.
- Middleware project structure: bank layout, event/parameter naming, snapshot and routing implementation.
- The runtime voice-stealing/priority policy and streaming/compression settings, within the audio budget.

## Recommends (does not decide alone)
- The loudness target itself → recommends data; the [Audio Director](../audio-director/) sets it.
- The game-side event/parameter API → recommends to the [gameplay-programmer](../../03-programming/gameplay-programmer/), who implements emission.
- The audio CPU/RAM budget → recommends to the [optimization-council](../../08-councils/), who ratifies it.

## Needs Approval
- **Middleware choice** (FMOD vs Wwise vs engine-native) → approved with the [Audio Director](../audio-director/) and [Technical Director](../../01-executive/) (T3, per [PD-6](../../00-company/prime-directives.md)).
- The audio performance budget → approved by the [optimization-council](../../08-councils/) (T2/T3).
- Any change to the shipped loudness contract → approved by the [Audio Director](../audio-director/) (T2).

## Conflict Resolution
- **More voices vs the budget:** the budget wins; resolve by priority/voice-stealing, not by raising the cap, unless the [optimization-council](../../08-councils/) re-ratifies it.
- **Mastering loudness vs a "louder = better" ask:** the loudness contract governs; enforce it, escalate the ask to the Director.
- **Middleware routing vs engine constraints:** find the engine-agnostic abstraction; if impossible, document the per-engine divergence and flag it to the [technical-council](../../08-councils/).

## Escalation
- Audio over CPU/RAM budget threatening frame rate → escalate to the [optimization-council](../../08-councils/) (T2), or [PD-7](../../00-company/prime-directives.md) veto territory if it ships a stutter.
- Engine integration can't preserve the intended mix → escalate to the [Audio Director](../audio-director/) and [technical-council](../../08-councils/).
- Loudness/cert failure on a platform near a release candidate → escalate via the [release-council](../../08-councils/) (T4).
