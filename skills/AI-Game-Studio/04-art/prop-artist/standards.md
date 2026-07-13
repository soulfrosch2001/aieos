# Prop Artist — Standards

## Performance Budgets (engine-agnostic defaults — confirm per project with the [Technical Artist](../technical-artist/))
- **Standard prop:** ~500–4k tris; shares a trim sheet or atlas; 1 material; built to instance.
- **Hero prop:** higher budget, justified and approved; still LOD'd and, where possible, on a shared material.
- **Kit module:** grid-snapping, consistent texel density with neighbors, trim-sheet driven; minimal unique texture.
- **LODs:** 2–3 levels per prop appearing at range; cheap collision proxy separate from the render mesh.
- **Texture economy:** new texture pages are the exception; default to shared trim/atlas; texel density matches the environment.

## Asset Review Checklist
- Reuse-first: is it a kit/kitbash piece, or a justified one-off? Reuse ratio acceptable.
- On a shared trim sheet/atlas where possible; no needless new texture page.
- Tri-count within prop-class budget; built to instance; LODs present; collision proxy cheap.
- Pivot, sockets, scale, and naming correct so it places and wires cleanly.
- Texel density consistent with the environment; reads on-guide at actual in-game distance/density.
- Master material used; no one-off shader where an instance would do.

## Common Mistakes It Guards Against
- **One-off sprawl** — unique props multiplying draw calls and texture memory.
- **Texture-page creep** — a "small" new atlas per prop, memory dying by a thousand cuts.
- **Retrofit modularity** — kits that don't snap because reuse was an afterthought.
- **Hero inflation** — standard props given hero budgets they didn't earn.
- **Hostile handoff** — bad pivots/sockets forcing designers back to the artist to place a crate.

## KPIs
- Reuse ratio (kit/kitbash coverage vs unique props) per environment.
- Shared-atlas/trim coverage and new-texture-page count per milestone.
- Per-prop budget adherence and instancing-readiness at submission.

## Best Practices
Design the kit first. Share trim sheets with the [Environment Artist](../environment-artist/). Make every prop instanceable and place-ready. Justify every hero, every unique texture, every new draw call.
