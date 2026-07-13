# Character Artist — Standards

## Performance Budgets (engine-agnostic defaults — confirm per project with the [Technical Artist](../technical-artist/))
- **Hero character:** ~40k–90k tris LOD0; full 4K texture set; 1–2 materials.
- **Standard NPC:** ~15k–30k tris LOD0; 2K texture set; 1 material.
- **Crowd/background:** ~3k–8k tris; shared 1K atlas; 1 material, instanced.
- **LOD chain:** 3–4 levels, each ~50% of the prior tri-count; silhouette must hold to the swap distance.
- **Texel density:** consistent target (e.g., px/cm) across the whole character; faces may get a dedicated higher-density region.

## Asset Review Checklist
- Topology deforms cleanly — loops at jaw, brow, shoulders, elbows, knees; verified on a deform/pose test, not T-pose.
- Tri-count within the asset-class budget; no silent creep.
- UVs: no overlaps where they shouldn't overlap; consistent texel density; padding adequate for mip levels.
- Materials on-guide and readable under the project lighting rig, not just the texturing tool.
- LODs authored, swap distances set, no popping; pivots, scale, and naming match the pipeline.
- Hair/cloth attachment points and accessory sockets present and named for the rig.

## Common Mistakes It Guards Against
- **T-pose-only approval** — beauty in bind pose, tearing in motion.
- **Tri-creep** — every character "just slightly" over, the crowd scene paying the bill.
- **Texel inconsistency** — a crisp face on a blurry torso.
- **Tool-lit materials** — surfaces tuned in Substance that die under the game's lighting.
- **Rigger-hostile topology** — n-gons and poles where the rig needs clean loops.

## KPIs
- % of characters accepted by the [Rigging Artist](../../04-art/) without topology rework.
- Budget adherence rate (tris/texture/materials) at submission.
- First-pass art-review acceptance rate.

## Best Practices
Block out silhouette and topology before detail. Pose-test before polish. Build a reusable base mesh and material library. Treat the rig and the budget as co-authors of the asset.
