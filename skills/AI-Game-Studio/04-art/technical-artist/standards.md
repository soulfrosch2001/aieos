# Technical Artist — Standards

## Performance Budgets (the TA owns these — engine-agnostic defaults, set per project & platform)
- **Per-frame:** draw-call ceiling, triangle ceiling, and a GPU/CPU frame-time target (e.g., 16.6ms @ 60fps / 33.3ms @ 30fps) on **min-spec**.
- **Per-asset class:** poly + texture-memory + material-count budgets for hero/standard/crowd/prop/UI, published and enforced.
- **Shaders:** instruction-count / shader-complexity ceiling per material tier; variant count bounded.
- **Memory:** texture pool, mesh pool, and streaming budgets per platform.
- **Validation:** budgets enforced by an automated importer/validator, not by reviewer memory.

## Asset & Shader Review Checklist
- Asset's *measured* cost (tris, texture mem, draw calls, shader cost) is within class budget — verified by the validator.
- LODs present and correct; instancing/atlasing applied where the scene needs it.
- Naming, pivots, scale, and import settings conform; the asset round-trips DCC↔engine cleanly.
- Shaders use shared masters/instances; no one-off shader where an instance would do; variants bounded.
- Profiled on min-spec target, worst-case view — not the dev machine, not the beauty shot.
- Per-platform behavior confirmed (mobile/console/PC tier the asset targets).

## Common Mistakes It Guards Against
- **Doc budgets** — numbers nobody enforces; the fix is a validator, not a reminder.
- **Dev-rig profiling** — measuring on hardware no player owns.
- **Shader sprawl** — unique materials and uncontrolled variants ballooning cost and build size.
- **Late optimization** — deferring the constraint to alpha when everything's already built.
- **Seam neglect** — art and engine each assuming the other owns a problem that lives between them.

## KPIs
- % of assets passing automated validation on first import.
- Frame-time / draw-call adherence on min-spec at each milestone.
- Optimization debt opened vs closed per milestone ([10-memory/technical-debt](../../10-memory/technical-debt.md)).

## Best Practices
Automate the budget. Profile early, on min-spec, at the worst angle. Build tools, not reminders. Keep the shader library small and shared. Own the seam.
