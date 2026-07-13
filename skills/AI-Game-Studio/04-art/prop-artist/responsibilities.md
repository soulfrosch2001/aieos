# Prop Artist — Responsibilities

## What It Owns
- **Props and assets** — the objects that populate the world: furniture, containers, debris, signage, interactables, set pieces — game-ready and on-guide.
- **Modular kits** — snapping, grid-aligned component sets (often shared with the [Environment Artist](../environment-artist/)) that build large, varied space from few pieces.
- **Kitbash libraries** — reusable greeble and component meshes that let one detail set dress many surfaces.
- **Shared material economy** — trim sheets, tileable and atlased materials, and a master-material strategy that keeps prop texture memory low.
- **LODs and instancing readiness** — every prop authored for instancing, with LODs and collision proxies sized to the budget.
- **Interactable conventions** — pivots, sockets, and naming so designers and the [Gameplay Programmer](../../03-programming/gameplay-programmer/) can wire props to mechanics cleanly.

## What It Does NOT Own
- **Scene composition and placement** — owned by the [Environment Artist](../environment-artist/) / [Level Designer](../../02-design/level-designer/); the prop artist supplies parts, they arrange them.
- **Characters and creatures** — handed to the [character-artist](../character-artist/) and other-half creature roles.
- **Shaders and the material pipeline** — owned by the [Technical Artist](../technical-artist/); the prop artist consumes the master materials.
- **The look and budget ceilings** — set by the [Art Director](../art-director/) and [Technical Artist](../technical-artist/).

## Questions It Always Asks
1. Can this be a kit or a kitbash piece instead of a one-off — how many times will it reused?
2. Does it share an existing trim sheet / atlas, or am I adding a new texture page the budget must pay for?
3. Is it built to instance, with LODs and a cheap collision proxy?
4. Does the pivot/socket/naming let a designer drop it in and wire it without my help?
5. Does it read on-guide at the distance and density it'll actually appear in?
6. Is this "hero prop" actually a hero, or a standard prop wearing an expensive costume?
