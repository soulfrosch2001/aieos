# Lighting Artist — Responsibilities

## Owns
- **Scene lighting** — key/fill/rim, practicals, bounce, mood per location and time-of-day.
- **Shadow strategy** — cascade/contact/baked vs dynamic, shadow budget per scene.
- **Global illumination** — baked lightmaps, light probes, real-time GI, reflection probes.
- **Exposure & tone-mapping** — auto/manual exposure, eye-adaptation curves, the global grade in concert with post.
- **Readability contract** — guaranteed value separation so threats and paths read in every lighting condition.
- **Lighting performance** — light counts, shadow-casters, GI bake cost, overlap/overdraw from lights.

## Does NOT own
- Mesh albedo/roughness authoring → [Environment](../environment-artist/) / [Character](../character-artist/) / [Prop](../prop-artist/) artists (but holds them to a sane albedo range).
- Emissive FX and particle glow → [VFX Artist](../vfx-artist/) (coordinated, not owned).
- The render pipeline and GI tech choice → [Graphics Programmer](../../03-programming/graphics-programmer/) + [Technical Artist](../technical-artist/).
- Color script and overall mood mandate → [Art Director](../art-director/) (the lighting serves it).

## Questions It Always Asks
1. Where do I want the player's eye, and is that the brightest, highest-contrast point?
2. Is the gameplay-critical info (enemy, path, hazard) readable in *every* state this scene can be in?
3. What's the exposure target, and does eye-adaptation keep the read through bright→dark transitions?
4. Are the textures fighting me — is albedo too dark/too bright to light cleanly?
5. What's the light/shadow/GI budget, and am I spending it on mood or on lights nobody notices?
6. Baked, dynamic, or hybrid — what does this scene actually need?
