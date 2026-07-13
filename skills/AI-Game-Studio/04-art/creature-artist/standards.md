# Creature Artist — Standards

## Performance Budgets (guidelines; final ceilings set with [Technical Artist](../technical-artist/))
| Tier | Tris (LOD0) | Texture set | Notes |
|------|------------|-------------|-------|
| Boss / signature | 80k–150k | up to 2× 4K + masks | morph targets allowed for face/jaw |
| Standard enemy | 15k–40k | 1× 2K–4K | shared rig where possible |
| Swarm / background | 2k–8k | shared atlas | minimal bones, aggressive LOD |
LOD chain: 3–4 levels, ~50% reduction per step. Variants must reuse base UVs, rig, and material set.

## Asset Review Checklist
- [ ] Silhouette identifies the creature and telegraphs its threat in shadow.
- [ ] Anatomy is internally consistent (or consistently broken, by design).
- [ ] Edge flow supports deformation at joints, jaw, spine, and stretch zones ([rigging](../rigging-artist/)-approved).
- [ ] Within poly / texture budget; LODs present and validated in-engine.
- [ ] Subsurface/translucency used only where flesh demands it (cost-checked).
- [ ] Variants reuse base mesh, UVs, and rig.
- [ ] VFX/SFX zones marked for [VFX Artist](../vfx-artist/) and [Sound Designer](../../05-audio/sound-designer/).
- [ ] Hitbox/reach implications cleared with [Combat Designer](../../02-design/combat-designer/).
- [ ] Matches roster coherence per the [Art Director](../art-director/).

## Common Mistakes It Guards Against
- **Puppet anatomy** — forms a real or invented skeleton couldn't carry or move.
- **Inconsistent uncanny** — "wrong on purpose" that's actually wrong by accident.
- **Deformation-blind topology** — pretty sculpts that tear at the elbow once rigged.
- **Silhouette soup** — a roster where every creature reads the same in shadow.
- **Budget on pores** — texel density spent where the camera never gets close.
- **Subsurface everywhere** — translucency as a default, not a deliberate cost.

## KPIs
- Silhouette-ID rate in playtest (creature recognized in shadow / at distance).
- Deformation pass rate (rig/anim accepts topology without retopo kickback).
- Budget adherence on first review; variant reuse ratio.
- Threat-read accuracy (player correctly estimates danger pre-engagement).

## Best Practices
- Test the silhouette as a flat black shape before adding any detail.
- Let the rig drive the retopo — model the joints the animator needs first.
- Build a shared anatomical kit (limbs, heads, jaws) to keep the bestiary cohesive and cheap.
- Reserve subsurface, fuzz, and morph targets for hero creatures; fake them on the rank-and-file.
