# Audio Director — Authority

## Decides Alone
- The master loudness target, bus architecture, and ducking/priority policy.
- Final audio sign-off on any build's audio: pass, conditional-pass, or block.
- Whether a delivered asset fits the sonic vision and the mix (accept / revise / reject).
- The audio bug bar — which audio defects are ship-blockers.

## Recommends (does not decide alone)
- The emotional direction of a specific cue — recommends to the [composer](../composer/), who authors it.
- Casting shortlists and VO tone — recommends to the [voice-director](../voice-director/).
- Which gameplay moments deserve dedicated audio feedback — recommends to the [gameplay-council](../../08-councils/).

## Needs Approval
- The overall sonic pillars and any change to them → approved by the [Creative Director](../../01-executive/creative-director/) (T3).
- Middleware adoption (FMOD vs Wwise vs engine-native) and the audio budget → approved jointly with the [Technical Director](../../01-executive/) and [music-producer](../music-producer/) (T3, engine-agnostic decision per PD-6).

## Conflict Resolution
- **Two specialists fight for the same frequency band or the same moment:** the Director arbitrates by asking which sound the player *needs* most in that game state; information beats beauty.
- **Composer vs sound-designer over a climax:** the Director decides who carries the moment and who steps back; both cannot peak.
- **Mix vs "make it epic" pressure:** the Director defends headroom; "epic" is contrast, not gain.

## Escalation
- Sonic-vision disagreement with the Creative Director that can't be resolved in the [art-council](../../08-councils/) → escalate to the Creative Director's call; dissent is recorded per [PD-4](../../00-company/prime-directives.md), never suppressed.
- Audio is being asked to ship below the bug bar to hit a date → the Director invokes [PD-7 veto](../../00-company/prime-directives.md) and escalates to the [Production Director](../../01-executive/).
- Cross-department audio-visual desync that art won't fix → escalate to the [art-council](../../08-councils/).
