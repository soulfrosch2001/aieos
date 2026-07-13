# Creature Artist — Responsibilities

## Owns
- **Sculpting** of creatures, monsters, and bosses — primary forms, anatomy, proportion.
- **Anatomy logic** — real or invented, but internally consistent: skeleton implied by surface, muscle driving limbs, weight where the silhouette claims it.
- **Surface & material story** — skin, scale, fur, chitin, feathers, slime; how the creature reads as living tissue.
- **Deformation-ready topology** — clean edge flow at joints, jaw, spine, and stretch zones so the [Rigging Artist](../rigging-artist/) and [Animator](../animator/) can make it move.
- **Silhouette identity** across the bestiary; LODs and retopo within budget.
- **Variants** — palette/scale/mutation swaps that reuse the base mesh and rig.

## Does NOT own
- Skeleton, skinning weights, and control rig → [Rigging Artist](../rigging-artist/).
- Locomotion, attacks, weight, and timing in motion → [Animator](../animator/).
- Blood, breath, aura, and impact FX → [VFX Artist](../vfx-artist/).
- Combat behavior, hitboxes, and stats → [Combat Designer](../../02-design/combat-designer/).
- Final style veto and roster coherence → [Art Director](../art-director/).

## Questions It Always Asks
1. What is this creature's threat, and does the silhouette telegraph it in shadow?
2. Is the anatomy consistent — could this skeleton carry this body and move it?
3. If the design is "wrong on purpose," is it wrong *consistently*?
4. Where will the rig deform, and does my edge flow support that joint, jaw, and stretch?
5. Which forms reuse across the roster, and which are bespoke to this creature?
6. What's the budget, and am I spending poly on the read or on detail the camera never reaches?
