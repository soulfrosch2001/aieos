# Physics Programmer — Standards

## Coding Standards

- **Fixed timestep only** — all simulation runs on the fixed tick via an accumulator; the value is a named constant, not a magic number.
- **No physics in variable update** — no forces, impulses, velocity, or transform writes in render/`Update`-style callbacks. Reads for interpolation only.
- **Deterministic ordering** — bodies, contacts, islands, and queries iterate in a stable, defined order; no reliance on hash-map or pointer-address ordering.
- **Collision layers documented** — the layer/mask matrix lives in one place with comments; no undocumented magic layer bits.
- **No NaN tolerance** — clamp/validate inputs; a NaN in the sim is a fail-fast, not a warning.

### Godot
Physics in `_physics_process`; never in `_process`. Document the layer/mask grid. Pin the physics tick rate.

### Unity
Physics in `FixedUpdate`; enable interpolation on visible Rigidbodies. Stable `fixedDeltaTime`. Prefer Unity Physics (DOTS) where determinism is required.

### Unreal
Sim on fixed substep via Chaos; no movement logic in `Tick` render path. Configure async/substep explicitly.

## Review Checklist

- [ ] All sim logic runs on the fixed timestep; nothing physics-related in variable update.
- [ ] Render reads interpolated state, never raw sim transforms.
- [ ] Fast/thin bodies have CCD; CCD is not enabled globally "just in case."
- [ ] Iteration order is deterministic; no RNG without a seed.
- [ ] Collision layers/masks are documented and unchanged unintentionally.
- [ ] No NaN paths; bodies sleep and come to rest (no resting jitter).
- [ ] If determinism is required, the replay determinism test passes.

## Common Mistakes

- **Framerate-coupled sim** — moving bodies by `delta` in `Update`; the world differs at 30 vs 144 fps.
- **Tunnelling** — fast or thin objects with discrete collision and no CCD.
- **Nondeterministic iteration order** — relying on hash/pointer order; replays drift.
- **Jitter from missing interpolation** — rendering raw sim state, so bodies stutter between ticks.
- **Unbounded contacts** — no sleeping, no broadphase budget; contact count explodes and tanks the frame.

## Quality Gates

- **Replay determinism test must pass** — record an input sequence, replay it, assert bit-identical (or tolerance-defined) world state. Blocks merge when determinism is a requirement.
- **No tunnelling in the CCD test scene** — fast/thin projectiles against thin walls register hits, every run.
- **Sim budget held** — sim ms/frame within budget under the worst-case density scene.
- **Rest stability** — stacked/resting bodies sleep and do not buzz.

## Performance Checklist

- [ ] **Sim ms/frame** within budget under worst case.
- [ ] **Broadphase pair count** bounded; partitioning matches world shape.
- [ ] **Contact count** bounded; sleeping enabled and effective.
- [ ] **Query cost** (raycasts/overlaps) profiled; no per-frame query storms.
- [ ] Escalate budget overruns to the [Performance Council](../../08-councils/performance-council/).

## Best Practices

- Decouple sim and render; interpolate. Always.
- Make determinism testable from day one — record/replay harness before it's "needed."
- Budget CCD per body class; profile broadphase before scaling content.
- Validate cross-platform float behaviour early when lockstep/replay is on the roadmap.
- Fail fast on NaN; clamp velocities and penetration depth.

## KPIs

- **Sim ms/frame** — within budget under worst-case density.
- **Determinism test pass rate** — 100% where determinism is required.
- **Tunnelling incidents** — trending to zero in shipped builds.
- **Jitter reports** — resting/render jitter reports trending to zero.
