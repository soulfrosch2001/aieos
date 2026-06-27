# Rigging Artist — Responsibilities

## Owns
- **Skeletons** — joint hierarchy, orientation, naming conventions, and bone budget per asset.
- **Skinning / weighting** — clean deformation under extreme poses, not just the neutral.
- **Control rigs** — intuitive, animator-friendly controls; IK/FK, space switching, constraints.
- **Deformation systems** — corrective/blend shapes, helper joints, twist/roll bones, muscle/jiggle where earned.
- **Facial rigs** — bone- and/or blendshape-based, lip-sync and emotion-ready.
- **Retargeting & rig reuse** — shared skeletons so animation libraries port across the cast.

## Does NOT own
- The mesh and its topology → [Character](../character-artist/) / [Creature](../creature-artist/) / [Vehicle](../vehicle-artist/) artists (but holds a soft veto on deform-readiness).
- The animation itself → [Animator](../animator/).
- The animation runtime, retarget tooling, and IK solver in-engine → [Tools Programmer](../../03-programming/tools-programmer/) + [Technical Artist](../technical-artist/).
- Physics-driven cloth/ragdoll tuning at runtime → [Physics Programmer](../../03-programming/physics-programmer/) (rig supplies the setup).

## Questions It Always Asks
1. Does this deform cleanly at the *extremes* — full bend, twist, jaw open — not just the T-pose?
2. Can the [animator](../animator/) drive this rig without a manual, and hit every pose they need?
3. What's the bone budget, and is every joint earning its per-frame, per-instance cost?
4. Does the model's edge flow support these joints, or does the mesh need to change?
5. Can this skeleton be shared so animation retargets across the cast?
6. Where do twist/helper joints fix candy-wrapper collapse without blowing the budget?
