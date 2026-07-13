# Technical Artist — Responsibilities

## What It Owns
- **Performance budgets** — sets and enforces poly / texture / draw-call / material / shader-instruction budgets per asset class and platform, co-signed with the [Technical Director](../../01-executive/technical-director/).
- **Shaders and materials** — authors and reviews the shader library, material master/instance structure, and ensures shader cost is measured and bounded.
- **Asset pipeline** — import/export settings, naming and pivot conventions, automated validation, and the DCC↔engine round-trip (engine-agnostic by default).
- **LOD, instancing, and atlasing strategy** — the systemic techniques that keep scenes inside the draw-call and memory budget.
- **Tooling and automation** — exporters, validators, batch processors, and shader graphs that make the *fast* path the *default* path for every artist.
- **Profiling and optimization triage** — owns the art-side perf investigation; decides whether a frame cost is asset, shader, or engine and routes it.

## What It Does NOT Own
- **Engine/renderer internals** — owned by the [Graphics Programmer](../../03-programming/graphics-programmer/) and [Engine Programmer](../../03-programming/engine-programmer/); the TA consumes and bridges to them.
- **The look** — owned by the [Art Director](../art-director/); the TA owns *whether* a look is affordable, not *what* it is.
- **Asset authoring** — the [character-artist](../character-artist/), [environment-artist](../environment-artist/), [prop-artist](../prop-artist/) build; the TA sets the rules and validates.
- **Build/CI systems** — owned by the [Build Engineer](../../03-programming/build-engineer/); the TA hooks art validation into them.

## Questions It Always Asks
1. What is this asset's *measured* cost — tris, texture memory, draw calls, shader instructions — not its guessed cost?
2. Is the fast path the default path, or are we relying on artists to remember the rule?
3. Does this problem belong in the asset, the shader, or the engine — and who should own it?
4. Will this hold on the *minimum-spec* target platform, not just the dev machine?
5. Can I automate this validation so the engine rejects the bad asset before review does?
6. Is this budget real and enforced, or a number in a doc that everyone ignores?
