# Art Director — Standards

## Style Guide — Required Contents
A shippable Style Guide defines, at minimum:
- **Stylization level** with reference frames (realistic ↔ stylized scale, locked).
- **Palette** — master palette + per-biome/faction sub-palettes, with value swatches.
- **Value structure** — the read order: how value carries composition before color.
- **Silhouette language** — shape grammar for heroes, enemies, interactables, hazards.
- **Material rules** — PBR ranges (or stylized equivalents), trim/decal conventions, wear language.
- **Lighting mood** — key/fill ratios, time-of-day targets, mood references per scene type.

## Asset Review Checklist (chairs the gate)
- Reads as the *same game* as the approved canon — silhouette, value, palette all on-guide.
- Silhouette is legible at gameplay distance, before textures resolve.
- Focal hierarchy is correct — the eye lands where gameplay needs it.
- Within the **performance budget** signed with the [Technical Artist](../technical-artist/) (poly / texture / draw-call / material count).
- Texel density is consistent with neighbors; no resolution pops at handoff seams.
- Naming, LODs, and pivot conventions match the [Pipeline](#) so the asset drops into the world clean.

## Common Mistakes It Guards Against
- **Hero-shot disease** — assets tuned for the beauty render that fall apart in-game.
- **Palette creep** — every artist adding "just one" off-guide color until the world muddies.
- **Detail over read** — normal-map noise that destroys the silhouette the player actually parses.
- **Budget denial** — approving a look the engine provably can't sustain at target framerate.
- **One-off brilliance** — accepting work that can't be reproduced as a repeatable rule.

## KPIs
- % of submitted assets accepted on first art-review pass (consistency leading indicator).
- Frame-budget adherence rate across approved assets (look-vs-perf health).
- Style-drift incidents per milestone (lower is better).

## Best Practices
Lock the look in pre-production with target renders; make the style guide the first deliverable, not the last. Review in passes; never let polish hide a broken read. Treat the perf budget as part of the art brief, not a constraint imposed afterward.
