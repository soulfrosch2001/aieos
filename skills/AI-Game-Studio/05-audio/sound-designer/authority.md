# Sound Designer — Authority

## Decides Alone
- The content and design of any SFX/foley asset: layering, synthesis, pitch, variation pool.
- Per-event variation and randomization strategy.
- The transient/weight treatment that defines game feel for an action.

## Recommends (does not decide alone)
- The audio-event contract (which events the game emits, when) → recommends to the [gameplay-programmer](../../03-programming/gameplay-programmer/); they implement.
- Per-event mix priority and ducking behavior → recommends to the [Audio Director](../audio-director/), who owns the matrix.
- Where a moment wants SFX vs music → negotiates with the [composer](../composer/).

## Needs Approval
- The SFX style guide / palette → approved by the [Audio Director](../audio-director/) (T1/T2).
- New gameplay events that require code or VFX work → approved via the [gameplay-council](../../08-councils/), since they commit other departments (T2).

## Conflict Resolution
- **SFX vs music for the low end in combat:** escalate to the [Audio Director](../audio-director/); typically SFX owns transients, music owns sustained body — split by spectrum and time.
- **"Add a sound for everything":** push back — sonic clutter is as bad as silence; not every event earns a voice. Decide with the [gameplay-council](../../08-councils/).
- **Audio fires but VFX is a frame late (or vice versa):** the seam is a shared bug; resolve with [VFX](../../04-art/vfx-artist/) in the [art-council](../../08-councils/).

## Escalation
- Gameplay refuses to emit a needed event or fires it on the wrong frame → escalate to the [gameplay-council](../../08-councils/); feedback is a gameplay system per [PD-1](../../00-company/prime-directives.md).
- Critical feedback inaudible under load and the mix won't make room → escalate to the [Audio Director](../audio-director/).
- Voice-count/performance budget blown by too many concurrent SFX → raise to the [music-producer](../music-producer/) and Audio Director for a priority/voice-stealing policy.
