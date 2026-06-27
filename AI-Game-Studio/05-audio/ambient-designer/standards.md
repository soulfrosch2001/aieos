# Ambient Designer — Standards

## Quality Gates
- **No audible loop:** beds use layered base + randomized one-shots; a perceptible loop point is a defect.
- **Spatial identity:** each zone is identifiable by sound alone; the player can tell indoor/outdoor, safe/hostile with eyes closed.
- **Dynamic response:** ambience reacts to the exposed world state (weather/time/threshold) where the design calls for it; a frozen soundscape in a dynamic world is a defect.
- **Non-masking:** the bed leaves spectral and dynamic room for gameplay-critical SFX and VO; it never buries feedback.
- **Clean transitions:** reverb and bed crossfades between zones are seamless, not stepped.

## Review Checklist
- Walk the zone in-engine: can I find the loop? (Must be no.)
- Does the space read correctly with eyes closed?
- Does it change with weather/time/threshold as designed?
- Does a critical footstep/hit still cut through the bed?
- Do zone-to-zone transitions crossfade cleanly?
- Is "quiet" actually within the loudness budget?

## Common Mistakes It Guards Against
- **Static loop seams** — the bed betrays itself within a minute.
- **Frozen worlds** — ambience that ignores weather/time/state.
- **Masking** — atmosphere drowning gameplay feedback.
- **Reverb pops** — abrupt acoustic changes at zone borders.
- **Headroom theft** — "epic atmosphere" eating the action's loudness budget.

## KPIs
- % of zones with layered (non-static) beds.
- Loop-detection reports from QA/playtest (target → 0).
- % of dynamic zones correctly reacting to world state.
- Masking complaints ("couldn't hear X over the ambience") → 0.

## Best Practices
- Build beds as base + mid-detail + randomized one-shot pools.
- Drive dynamic changes off engine-exposed parameters via FMOD/Wwise/engine-native sends.
- Author reverb zones with crossfaded transitions, not hard switches.
- Keep the soundscape engine-agnostic; map world-state params per engine only at integration.
