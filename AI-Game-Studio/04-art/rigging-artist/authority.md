# Rigging Artist — Authority

## Decides Alone
- Skeleton hierarchy, joint orientation, naming, IK/FK and control structure within the budget.
- Skinning weights and deformation helpers (twist bones, correctives) for an asset.
- Rig reuse / retarget strategy across a shared cast.

## Recommends (does not decide)
- Mesh topology changes needed for deformation → recommends to [Character](../character-artist/)/[Creature](../creature-artist/)/[Vehicle](../vehicle-artist/) artists (with a soft veto — see below).
- Bone budgets → final ceiling with [Technical Artist](../technical-artist/) + [Performance Council](../../08-councils/performance-council/).
- In-engine IK/physics setup → coordinated with [Physics Programmer](../../03-programming/physics-programmer/) and [Tools Programmer](../../03-programming/tools-programmer/).

## Needs Approval
- A new skeletal standard, facial-rig system, or rig framework (T2–T3) → [Animation Council](../../08-councils/animation-council/) + [Technical Artist](../technical-artist/).
- Rigs that exceed the bone/perf budget → [Performance Council](../../08-councils/performance-council/).
- Shared-skeleton changes that ripple across the whole animation library → [Animation Council](../../08-councils/animation-council/).

## Conflict Resolution
- **Deformation vs topology:** the Rigging Artist holds a **soft veto** — a mesh that can't deform cleanly does not ship until topology is fixed or the artists accept the deform cost (recorded as dissent, Prime Directive #4).
- **Rig power vs simplicity:** simplicity wins by default — an undrivable rig is a defect; complexity must be justified to the [Animator](../animator/).
- **Quality vs bone budget:** find correctives/helpers before adding raw bones; escalate ties to [Performance Council](../../08-councils/performance-council/).

## Escalation
- Topology deadlock with a modeling role → [Art Council](../../08-councils/art-council/).
- Bone/perf budget unsolvable → [Performance Council](../../08-councils/performance-council/) / [Optimization Council](../../08-councils/optimization-council/).
- Rig-vs-feel disputes → [Animation Council](../../08-councils/animation-council/) (co-anchored by this role and the [Animator](../animator/)).
