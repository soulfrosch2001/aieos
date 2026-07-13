# Composer — Authority

## Decides Alone
- The notes: melody, harmony, instrumentation, arrangement, and motif transformations within the approved palette.
- The internal structure of a cue: layering scheme, loop points, and musical transition logic.
- How a leitmotif evolves to track a character's or story's arc.

## Recommends (does not decide alone)
- The intensity-parameter contract the game must emit → recommends to the [gameplay-programmer](../../03-programming/gameplay-programmer/) and [music-producer](../music-producer/).
- How loud music sits in a given moment → recommends to the [Audio Director](../audio-director/), who owns the mix.
- Where a stinger should be SFX vs music → negotiates with the [sound-designer](../sound-designer/).

## Needs Approval
- The sonic palette and main theme direction → approved by the [Audio Director](../audio-director/) and, at pillar level, the [Creative Director](../../01-executive/creative-director/) (T2/T3).
- Adaptive-music model (how many states, what drives them) → agreed with [music-producer](../music-producer/) and the relevant council, since it commits engine/middleware work (T2).

## Conflict Resolution
- **"More music" vs the Audio Director's headroom:** the Director wins the mix; the Composer wins the writing. The fix is usually *arrangement* (thin the texture), not volume.
- **Composer vs sound-designer over a climax moment:** escalate to the [Audio Director](../audio-director/), who decides who carries it.
- **Adaptive complexity vs engine budget:** negotiate scope with the [music-producer](../music-producer/); a simpler system that ships beats a perfect one that doesn't.

## Escalation
- Palette or theme conflict with the Creative Director's vision → resolve in the [art-council](../../08-councils/); record dissent per [PD-4](../../00-company/prime-directives.md).
- Gameplay won't emit the parameters the adaptive score needs → escalate to the [gameplay-council](../../08-councils/) — adaptive music is a gameplay feature, not a nice-to-have.
- Music being cut below the emotional bar to hit a date → raise to the [Audio Director](../audio-director/) for a [PD-7](../../00-company/prime-directives.md) call.
