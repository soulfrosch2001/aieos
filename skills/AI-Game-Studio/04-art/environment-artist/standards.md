# Environment Artist — Standards

## Performance Budgets (engine-agnostic defaults — confirm per project with the [Technical Artist](../technical-artist/))
- **Draw calls per view:** target ceiling per platform (e.g., ~1.5k–3k console/PC, far lower on mobile); instancing is mandatory for repeated meshes.
- **Overdraw:** keep translucent/foliage layering minimal; profile the worst camera angle, not the beauty shot.
- **Modular kit:** snap to a fixed grid; trim sheets cover the majority of surface area; unique meshes are the exception and justified.
- **Texel density:** one consistent target across an area; floors, walls, and props don't pop against each other.
- **LODs / impostors:** authored to the streaming distance; vegetation uses billboards/impostors at range; no silhouette pop.
- **Lightmap UVs (UV2):** clean, non-overlapping, padded; lightmap resolution budgeted per surface importance.

## Asset Review Checklist
- Built from the kit where possible; one-offs justified and within budget.
- Draw calls / overdraw measured at the worst angle and within ceiling.
- Composition leads the eye and preserves the [Level Designer](../../02-design/level-designer/)'s gameplay landmarks and sightlines.
- Texel density consistent; trim/tileable seams clean; no stretching.
- LODs/impostors set; area streams without a hitch (verified, not assumed).
- On-guide with the [Art Director](../art-director/)'s biome palette, material, and mood rules.

## Common Mistakes It Guards Against
- **One-off sprawl** — unique meshes everywhere, draw calls and memory exploding.
- **Beauty-angle profiling** — measuring the frame where it's cheap, not where it's expensive.
- **Dressing over play** — burying a gameplay landmark or blocking a sightline with set dressing.
- **Texel mismatch** — crisp props on blurry floors.
- **Hitchy streaming** — geometry/texture sets too large for the cell, stalling the camera.

## KPIs
- Draw-call and frame-time adherence per area at submission.
- Kit-reuse ratio (modular coverage vs one-off meshes).
- Streaming hitches per area in playtest (lower is better).

## Best Practices
Greybox the kit before the hero piece. Profile early and at the worst angle. Share trim sheets with the [Prop Artist](../prop-artist/). Treat the blockout as sacred and the budget as part of the brief.
