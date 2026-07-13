# Ambient Designer — Authority

## Decides Alone
- The content and layering of any ambient bed and its one-shot pools.
- The dynamic behavior of a soundscape (weather/time/threshold logic) within agreed parameters.
- The reverb/acoustic character of each zone.

## Recommends (does not decide alone)
- The bed's level relative to action → recommends to the [Audio Director](../audio-director/), who owns the mix.
- The world-state parameters ambience reacts to (weather, biome, time) → recommends to the [gameplay-programmer](../../03-programming/gameplay-programmer/).
- The emotional floor of a quiet scene → negotiates with the [composer](../composer/).

## Needs Approval
- The ambience style guide / world sonic palette → approved by the [Audio Director](../audio-director/) (T1/T2).
- New dynamic systems requiring engine/middleware parameters or zone triggers → approved via the [gameplay-council](../../08-councils/) or [art-council](../../08-councils/) (T2), since they commit other departments.

## Conflict Resolution
- **Ambience masking gameplay feedback:** the bed yields — the [sound-designer](../sound-designer/)'s critical events win; re-EQ or duck the bed.
- **Ambience vs music for a quiet scene's floor:** escalate to the [Audio Director](../audio-director/); usually they alternate by zone, not stack.
- **"Loud atmosphere" eating headroom:** the Audio Director's loudness budget governs; atmosphere is texture, not volume.

## Escalation
- World-state parameters (weather/time/zone) aren't exposed by the engine → escalate to the [gameplay-council](../../08-councils/); dynamic ambience is a world-readability feature per [PD-1](../../00-company/prime-directives.md).
- Mood disagreement with art's lighting/visual direction → resolve in the [art-council](../../08-councils/); record dissent per [PD-4](../../00-company/prime-directives.md).
- Reverb/space conflicts with the master mix → escalate to the [Audio Director](../audio-director/).
