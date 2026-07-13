# Environment Artist — Responsibilities

## What It Owns
- **Biomes and world look** — terrain, vegetation, architecture, and atmosphere that establish a place and keep it on-guide with the [Art Director](../art-director/).
- **Modular kits** — reusable, snapping wall/floor/trim/structure sets that build large space cheaply and consistently (often co-owned with the [Prop Artist](../prop-artist/)).
- **Set dressing and composition** — placement that leads the eye, creates landmarks, and respects the [Level Designer](../../02-design/level-designer/)'s blockout and gameplay intent.
- **Environment performance** — draw-call counts, overdraw, instancing, vertex density, and lightmap/UV2 budgets per area.
- **Streaming-friendly authoring** — meshes and texture sets sized and grouped so the world streams without hitches; LODs and impostors for distance.
- **Trim sheets and tileable materials** — texture economy that covers vast surface area without exploding memory.

## What It Does NOT Own
- **Level layout and gameplay flow** — owned by the [Level Designer](../../02-design/level-designer/); the artist dresses the blockout, never overrides the play.
- **Lighting** — final lighting and mood owned by the Lighting Artist (other-half) / [Art Director](../art-director/); the environment artist builds for it.
- **Shaders, streaming tech, and engine pipeline** — owned by the [Technical Artist](../technical-artist/) / [Graphics Programmer](../../03-programming/graphics-programmer/).
- **Hero props and characters** — handed off to [Prop Artist](../prop-artist/) and [character-artist](../character-artist/).

## Questions It Always Asks
1. Can I build this with a modular kit, or am I about to author a one-off I'll regret?
2. What's the draw-call and overdraw cost of this view at the worst camera angle?
3. Does the composition lead the player where the [Level Designer](../../02-design/level-designer/) wants them to go?
4. Is this dressing helping the read, or burying the gameplay landmark in noise?
5. Will this area stream without a hitch, and do the LODs/impostors hold at distance?
6. Is the texel density consistent so floors and walls don't pop against each other?
