# Standards — Gameplay Designer

## Quality Gates
- **Empty-room gate:** Before any content is built on the verb, it must pass a blind playtest in a greybox room with nothing to fight, collect, or unlock. If testers play with it longer than asked "just because it feels good," it passes. If they put the controller down, it fails — no content ramp is approved.
- **Latency gate:** Press-to-feedback measured (not estimated) at ≤ 100ms for core verbs; flagged red above. Measurement is by capture/high-speed video or frame logging, never by feel-claim alone.
- **Juice-removal gate:** Disable all juice and the verb must still feel mechanically correct. If it doesn't, the underlying verb is broken and juice is hiding it — gate fails.

## Review Checklist
- [ ] Press-to-response latency measured and within budget (≤ 100ms; ideally 1–2 frames of logic).
- [ ] Input buffering, coyote time, and forgiveness windows present and tuned for a human, not a TAS.
- [ ] Hitstop, screenshake, camera kick, sound, and rumble are *choreographed* to land as one event, not stacked by accident.
- [ ] Verb is fun empty-handed (empty-room gate passed).
- [ ] Player always knows what state they're in and what to do *right now* (readability holds at speed).
- [ ] Dead zones, re-trigger timing, and hold-vs-tap all feel intentional, not default-engine.
- [ ] Any dissent on the locked feel recorded in [game-design-decisions](../../10-memory/game-design-decisions.md) per [Prime Directive #4](../../00-company/COMPANY.md).

## Common Mistakes
- Building content on an un-tuned verb and assuming "content will make it fun." It won't.
- Stacking juice to mask a mushy mechanic — makeup on a corpse.
- Adding visual flourish (anticipation frames, charge-up animations) that silently injects input latency.
- Tuning for frame-perfect input instead of a forgiving human; designing for the designer, not the player.
- Debating feel in a doc or a meeting instead of in a build.
- Over-juicing: shake and hitstop on *every* action desensitizes the player and tires the eyes — juice must be rationed to matter.

## Balancing Guidelines
Feel is balanced against responsiveness as the top constraint. Acceleration/deceleration curves should make the avatar feel weighted *without* feeling laggy — momentum is a flavor, latency is a defect, and they must not be confused. Forgiveness windows are tuned to absorb the median human's timing error (typically 3–6 frames of buffer/coyote) without making mistimed inputs feel "automatic." Juice intensity scales with event importance: a footstep gets a whisper, a critical landing gets the full choreography — reserve the loud feedback so it stays meaningful.

## KPIs / Metrics
- **Press-to-feedback latency** (ms / frames) — the cardinal metric.
- **Empty-room engagement time** — how long testers voluntarily mess with the verb alone.
- **Flow-break rate** — frequency of moments where testers visibly stall, hesitate, or lose track of state.
- **Forgiveness-save rate** — share of inputs rescued by buffering/coyote time (proxy for "feels precise").
- **Qualitative feel verbatims** — clustered tester language ("crunchy," "floaty," "mushy") mapped back to numbers.

## Best Practices
- Prototype the verb alone, in a greybox, before anything else exists. Defend that prototype's schedule.
- Measure latency; never trust a feel-claim that lacks a number.
- Choreograph juice as one event with a timeline, not a pile of independent effects.
- Tune in-hand, on the target controller and target framerate — feel is platform-specific.
- Ration loud feedback so it keeps meaning; silence makes the thunk land.
- Record every locked number and every dissent in memory — feel decisions are expensive to relearn.
