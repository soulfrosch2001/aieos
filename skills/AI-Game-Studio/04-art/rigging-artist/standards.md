# Rigging Artist — Standards

## Performance Budgets (guidelines; final ceilings set with [Technical Artist](../technical-artist/))
| Asset | Bones (typical) | Skin influences / vertex | Notes |
|-------|-----------------|--------------------------|-------|
| Hero character | 80–150 (incl. face/twist) | ≤ 4 (8 only where it pays) | LOD skeletons for distance |
| Standard NPC | 40–70 | ≤ 4 | shared skeleton for retarget |
| Creature / boss | budgeted to anatomy | ≤ 4 | helper joints over raw bones |
| Crowd / background | ≤ 25 | ≤ 2 | aggressive bone-LOD |
| Vehicle | hierarchy only as needed | n/a (rigid) | pivots over skinning |
Faces: blendshape and/or bone, lip-sync ready; cap morph-target memory per platform.

## Asset Review Checklist
- [ ] Deforms cleanly at the *extremes* (full bend, twist, jaw open), not just neutral.
- [ ] No candy-wrapper collapse, volume loss, or interpenetration at range-of-motion limits.
- [ ] Controls are intuitive and documented; animator can drive without a manual.
- [ ] Within bone budget and skin-influence-per-vertex limit; LOD skeletons where needed.
- [ ] Skeleton matches the shared standard for retargeting where applicable.
- [ ] Topology supports the rig (raised early with the modeling role).
- [ ] Face rig lip-sync and emotion ready (if applicable).
- [ ] Exports clean to engine; retarget validated in-engine.

## Common Mistakes It Guards Against
- **T-pose-only testing** — weights that look fine neutral and tear at the extremes.
- **Genius rigs** — clever controls nobody but the rigger can drive.
- **Bone bloat** — raw joints where a corrective or twist bone would do, blowing per-instance cost.
- **Topology denial** — rigging onto a mesh that can't deform instead of fixing the loops.
- **Non-shared skeletons** — bespoke hierarchies that break animation retargeting and reuse.
- **Influence overflow** — >4 influences per vertex shipped to platforms that can't afford it.

## KPIs
- Deformation pass rate at extremes (kickbacks per rig).
- Animator satisfaction / rig-driveability (controls used without support).
- Bone-budget adherence; retarget reuse ratio across the cast.
- Export/validation defect count in-engine.

## Best Practices
- Review topology before you rig — fix the mesh, don't fight it.
- Stress-test every weight at the pose extremes the animation will actually reach.
- Prefer correctives, twist, and helper joints over adding raw bones to the budget.
- Standardize and share skeletons so the animation library ports across the whole cast.
