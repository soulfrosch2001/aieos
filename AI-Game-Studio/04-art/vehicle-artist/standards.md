# Vehicle Artist — Standards

## Performance Budgets (guidelines; final ceilings set with [Technical Artist](../technical-artist/))
| Tier | Tris (LOD0) | Texture set | Material slots |
|------|------------|-------------|----------------|
| Hero driveable (close-up) | 60k–120k | up to 2× 4K | ≤ 4 |
| Standard vehicle | 20k–50k | 1× 2K–4K | ≤ 3 |
| Background / AI traffic | 3k–10k | shared atlas | 1–2 |
LOD chain: ~50% tri reduction per step, 3–4 levels. Damage variants must reuse the base UV/material set.

## Asset Review Checklist
- [ ] Silhouette reads the vehicle's function at 10m and in motion.
- [ ] Pivots verified: wheels turn, hatches open, turrets traverse without clipping.
- [ ] Within tri / texture / material budget; LODs present and validated in-engine.
- [ ] Clean / damaged / destroyed states are distinct and gameplay-readable.
- [ ] UVs clean, no wasted texel density on unseen faces; shared with damage variants.
- [ ] Edge loops at articulation points support [rigging](../rigging-artist/) deformation.
- [ ] Collision proxy authored; far simpler than render mesh.
- [ ] VFX/SFX mount points placed for [VFX Artist](../vfx-artist/) and [Sound Designer](../../05-audio/sound-designer/).
- [ ] Matches the [Art Director](../art-director/)'s style bible.

## Common Mistakes It Guards Against
- **Decoration over function** — greebles that imply no mechanism, panel lines that lie.
- **Silhouette starvation** — budget burned on invisible interior bolts.
- **Pivot blindness** — modeling without checking that articulated parts can actually move.
- **One-off everything** — bespoke geometry where shared kit would do, blowing the fleet budget.
- **Damage as afterthought** — destruction states that don't read as gameplay events.
- **Collision = render mesh** — shipping a 100k-tri hull as its own collider.

## KPIs
- % of fleet built from shared kit (higher is better).
- Budget adherence: assets shipped within tier ceiling on first review.
- Re-review rate (kickbacks per asset).
- Readability pass rate in playtest (function identified at distance).

## Best Practices
- Block out at true in-engine scale next to the character before detailing.
- Build kit pieces first; treat the fleet as a system, not a set of one-offs.
- Bake instead of model tertiary detail; let normal maps carry the bolts.
- Author damage states on the same UV layout so variants stay cheap.
