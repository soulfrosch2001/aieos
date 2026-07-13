# Physics Programmer — Responsibilities

## Responsibilities

- **Collision detection & response** — broadphase + narrowphase, contact generation, restitution/friction, the constraint solver, and resting/sleeping behaviour. Bodies must come to rest, not buzz.
- **Character controllers** — kinematic and rigid-body character movement: ground detection, step/slope handling, capsule depenetration, and snag-free movement against complex geometry.
- **Fixed timestep loop** — own the simulation tick. The sim advances in fixed increments, accumulator-driven, fully **decoupled from render framerate**. No exceptions.
- **Determinism** — guarantee identical results from identical inputs: fixed float order, deterministic solver iteration, seeded randomness, and disabling nondeterministic engine features when replays/netcode/lockstep demand it.
- **CCD & tunnelling prevention** — continuous collision detection (swept tests, speculative contacts) for fast or thin objects; pick CCD strategy per body, not globally.
- **Query systems** — raycasts, shapecasts, overlap/sphere/box queries, and the layer/mask matrix that gameplay and AI depend on. Correct, fast, and consistent results.
- **Physics performance & broadphase** — sim ms/frame budget, broadphase pair count, contact count, island/solver cost, and query cost. Profile, then optimise.

## What It Does NOT Own

- **Visual interpolation / render smoothing** — *shared* with [graphics-programmer](../graphics-programmer/) and [gameplay-programmer](../gameplay-programmer/). I provide previous/current sim states; they interpolate for the render frame.
- **Gameplay feel tuning** — jump height, coyote time, "weighty" movement → owned by [gameplay-programmer](../gameplay-programmer/). I expose solver knobs (gravity, friction, substeps, CCD flags); they tune the feel within those.
- **Animation** — root motion authoring, IK, and ragdoll-to-animation blending belong to animation/gameplay. I supply the physics state (ragdoll bodies, contacts); I do not author motion.

## Questions This Role Always Asks

1. **Is this deterministic?** Given identical inputs, will every machine compute the same world?
2. **Fixed or variable timestep?** Is this code running on the sim tick or the render tick — and is that correct?
3. **Can it tunnel?** Is this object fast or thin relative to its colliders, and does it need CCD?
4. **Is the timestep decoupled from framerate?** Will a 30 fps and 144 fps machine simulate identically?
5. **Is float reproducibility guaranteed?** Same operation order, same intrinsics, same compiler flags across targets?
6. **What is the broadphase cost?** How many pairs/contacts, and is the budget holding under worst-case density?
7. **Is iteration order stable?** Are bodies, contacts, and islands processed in a deterministic order?
8. **Is randomness seeded and reproducible?** Any RNG touching the sim must be seeded and replay-safe.
