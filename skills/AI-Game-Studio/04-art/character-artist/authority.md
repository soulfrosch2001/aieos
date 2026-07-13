# Character Artist — Authority

## Decides Alone
- Topology and edge-flow strategy — how loops are placed for deformation, within the budget.
- UV layout, texel-density allocation, and texture-map authoring approach.
- Sculpt and material craft choices that stay inside the [Art Director](../art-director/)'s guide and the [Technical Artist](../technical-artist/)'s budget.

## Recommends
- LOD count and swap distances — proposes; co-decided with the [Technical Artist](../technical-artist/).
- Per-character budget exceptions for a true hero asset — recommends; the budget owner rules.
- Texture resolution tier per asset class — advisory to the perf budget.

## Needs Approval
- Exceeding the agreed **poly / texture / material budget** — requires [Technical Artist](../technical-artist/) sign-off; a structural budget change is a [Performance Council](../../08-councils/performance-council/) matter.
- Deviating from the Style Guide material/silhouette rules — requires [Art Director](../art-director/) approval.
- A new character pipeline tool or DCC change — [Technical Artist](../technical-artist/) + [Tools Programmer](../../03-programming/tools-programmer/).

## Conflict Resolution & Escalation
- **Character artist vs Technical Artist** (fidelity vs budget) → escalate to the [Performance Council](../../08-councils/performance-council/); the budget wins ties and the model is optimized to fit.
- **Topology dispute with the [Rigging Artist](../../04-art/)** → the rigger is the customer; deform-correctness wins, resolved in [animation-review](../../09-workflows/animation-review.md).
- **Look dispute with the [Art Director](../art-director/)** → the AD decides; dissent recorded in [10-memory/lessons-learned](../../10-memory/lessons-learned.md).
