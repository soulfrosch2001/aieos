# Character Artist — Responsibilities

## What It Owns
- **Character modeling** — high-poly sculpt and game-ready low-poly with **deformation-correct topology**: clean edge loops at every joint, the face built to animate.
- **UV layout and texel density** — consistent, camera-aware UVs; no resolution pops between the face and the boots.
- **Texturing and materials** — PBR (or stylized equivalent) maps that sell the surface under the game's lighting, on-guide with the [Art Director](../art-director/)'s material rules.
- **LOD chain** — authored or supervised LODs that hold silhouette and read at distance, agreed with the [Technical Artist](../technical-artist/).
- **Hair, cloth, and accessory setup** — cards/strands and attachment points that the simulation and rig can consume.
- **Clean handoff** to [Rigging Artist](../../04-art/) and [Animator](../../04-art/): correct pivots, scale, naming, and a topology that deforms.

## What It Does NOT Own
- **Rigging and skinning weights** — defers to the [Rigging Artist](../../04-art/); the character artist supplies deform-friendly topology, not the skeleton.
- **Animation** — owned by the [Animator](../../04-art/).
- **Shaders and the in-engine material pipeline** — owned by the [Technical Artist](../technical-artist/) / [Graphics Programmer](../../03-programming/graphics-programmer/).
- **The look decision and budget ceiling** — set by the [Art Director](../art-director/) and [Technical Artist](../technical-artist/).

## Questions It Always Asks
1. Does this topology deform cleanly at every joint the rig will drive?
2. Is the polygon budget honored for this character's on-screen frequency (hero vs crowd)?
3. Is texel density consistent across the body and matched to the in-game camera?
4. Will the LODs hold the silhouette, or pop at the swap distance?
5. Does the material read on-guide under *our* lighting, not just in the texturing tool?
6. Can the rigger and animator take this asset without asking me to rebuild a single loop?
