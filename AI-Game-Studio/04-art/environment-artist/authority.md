# Environment Artist — Authority

## Decides Alone
- Set-dressing composition and prop placement within an approved blockout (without altering gameplay-critical space).
- Modular kit design — module breakdown, snapping conventions, trim-sheet strategy.
- Material and texel-density choices that stay on-guide and in budget.

## Recommends
- Streaming-cell boundaries and LOD/impostor distances — proposes; co-decided with the [Technical Artist](../technical-artist/).
- Where the blockout could change to serve the look — recommends to the [Level Designer](../../02-design/level-designer/), never imposes.
- Vegetation/instancing density tiers per platform — advisory to the perf budget.

## Needs Approval
- Altering a gameplay-critical layout element (cover, sightline, path width) — requires [Level Designer](../../02-design/level-designer/) sign-off.
- Exceeding the area **draw-call / overdraw / memory budget** — requires [Technical Artist](../technical-artist/) sign-off; structural change → [Performance Council](../../08-councils/performance-council/).
- New biome look not in the Style Guide — [Art Director](../art-director/) approval (new pillar → **T3** [Art Council](../../08-councils/art-council/)).

## Conflict Resolution & Escalation
- **Art vs play** (dressing fights the gameplay read) → the [Level Designer](../../02-design/level-designer/) owns playability; resolved in [art-review](../../09-workflows/art-review.md) with the [Art Director](../art-director/).
- **Look vs budget** → [Performance Council](../../08-councils/performance-council/); the budget wins ties, the scene is optimized to fit.
- **Streaming/hitch dispute** → joint call with the [Technical Artist](../technical-artist/) and [Optimization Engineer](../../03-programming/optimization-engineer/).
