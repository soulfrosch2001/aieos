# VFX Artist — Standards

## Performance Budgets (guidelines; final ceilings set with [Technical Artist](../technical-artist/))
| Context | Live particles (frame) | Overdraw | Notes |
|---------|------------------------|----------|-------|
| Hero ability / boss | ≤ 2–4k on screen | ≤ 2× screen at peak | GPU sim, flipbooks over geometry |
| Standard combat hit | ≤ 300–800 | ≤ 1.5× local | pooled, short-lived |
| Ambient / environmental | ≤ 200 sustained | minimal | culled aggressively, LOD'd |
Rules: cap transparent layer depth; prefer flipbooks/decals over thousands of live particles; pool and cull off-screen; soft-particle only where intersection artifacts actually show.

## Asset Review Checklist
- [ ] Communicates a clear game state and reads within ~3 frames.
- [ ] Anticipation / impact / dissipation all present; impact frame matches anim + SFX.
- [ ] Readable against the worst-case background and at peak combat density.
- [ ] Within particle and overdraw budget; profiled at the worst camera angle.
- [ ] Uses the cheapest technique that reads (flipbook/decal/mesh before live sim).
- [ ] Emitters pooled and off-screen culled; LODs where applicable.
- [ ] AV-synced with [Sound Designer](../../05-audio/sound-designer/).
- [ ] Telegraphs cleared with [Combat Designer](../../02-design/combat-designer/); colors follow the FX vocabulary.

## Common Mistakes It Guards Against
- **Pretty noise** — spectacle that hides the gameplay it's supposed to clarify.
- **Overdraw blowout** — stacked alpha layers that tank FPS at the worst angle.
- **Missing wind-up** — skipping anticipation, killing the impact's punch.
- **Off-by-a-frame sync** — flash and sound landing on different frames.
- **Live-sim everything** — thousands of particles where a flipbook or decal would read identically.
- **Background blindness** — effects that vanish against bright/busy scenes.

## KPIs
- Frame-time cost of FX in combat (held under budget at peak density).
- Read-speed in playtest (state identified within target frames).
- AV-sync defect rate (flash/sound mismatches per review).
- % of effects using cheap techniques vs live simulation.

## Best Practices
- Lock timing in greybox before authoring any art.
- Treat the profiler as a brush — author with overdraw visualized on.
- Build a reusable FX vocabulary (color = element, shape = state) and never break it casually.
- Always review at 25% / 100% / 400% speed and with audio on.
