# Lighting Artist — Standards

## Performance Budgets (guidelines; final ceilings set with [Graphics Programmer](../../03-programming/graphics-programmer/) + [Technical Artist](../technical-artist/))
| Target | Dynamic shadow-casters | Lights affecting a pixel | GI |
|--------|------------------------|--------------------------|-----|
| Console/PC 60fps | 1 sun + few local casters/view | ≤ 3–4 overlapping | baked or bounded real-time |
| Mid/mobile | 1 dynamic (sun), rest baked | ≤ 2 overlapping | baked + probes |
| High-end showcase | several, budgeted | profiled per scene | Lumen/SDFGI within frame budget |
Rules: bake static lighting wherever the scene allows; cap light overlap (overdraw); keep albedo in a sane range (~0.04–0.9 linear) so lighting math behaves.

## Asset Review Checklist
- [ ] Composition reads in grayscale; the eye lands on the intended focal point.
- [ ] Gameplay-critical info readable in *every* state the scene can enter.
- [ ] Exposure/eye-adaptation keeps the read through bright→dark transitions.
- [ ] Within light / shadow-caster / GI budget; profiled at worst-case views.
- [ ] Baked vs dynamic strategy appropriate; lightmaps clean (no seams/leaks).
- [ ] Albedo of scene meshes within range; no lighting hacks masking bad textures.
- [ ] Colorblind/low-light accessibility checked with [Accessibility Tester](../../07-qa/accessibility-tester/).
- [ ] Matches the [Art Director](../art-director/)'s color script.

## Common Mistakes It Guards Against
- **More-lights syndrome** — fixing composition by adding lights instead of removing them.
- **Mood over read** — dark scenes where the enemy is invisible until it hits.
- **Exposure drift** — no adaptation, so transitions blow out or crush to black.
- **Albedo compensation** — silently lighting around bad textures instead of fixing them.
- **Bake neglect** — paying real-time cost for lighting that could and should be baked.
- **Light leaks & seams** — sloppy lightmap UVs and probe placement.

## KPIs
- Readability pass rate in playtest (threats/paths identified under each state).
- Frame-time spent on lighting/shadows/GI (held under budget).
- Grayscale-composition pass rate on first review.
- Accessibility/low-light defect count.

## Best Practices
- Review every scene in grayscale and through a colorblind simulator.
- Bake by default; go dynamic only where gameplay or mood demands it.
- Use rim/value separation to keep dark scenes readable instead of flooding them.
- Fix albedo at the source; never let lighting become a patch for bad textures.
