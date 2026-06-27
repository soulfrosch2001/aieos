# Lead Programmer — Standards

## Coding Standards

- **Naming carries intent.** Names describe what a thing *is* or *does*, not its type or its author's mood. Booleans read as assertions (`isReady`, `hasTarget`). No abbreviations a newcomer can't expand.
- **Modularity with clear seams.** A module exposes a narrow interface and hides its guts. If you have to reach into another system's internals, the architecture is wrong — fix the seam, don't widen the hole.
- **No hidden global mutable state.** Globals are a hidden parameter to every function. State has exactly one owner; everyone else gets a reference or a copy, deliberately.
- **Data-driven design.** Tunable values, content, and config live in data, not code. Designers shouldn't need a programmer to change a number, and a rebuild shouldn't be the cost of a balance pass.

### Godot
GDScript: `snake_case` for functions/variables, `PascalCase` for classes and nodes, `CONSTANT_CASE` for constants. Type-hint everything in shipping code. Keep tunables in Resources; avoid leaning on Autoloads as a junk drawer of global state.

### Unity
C#: `PascalCase` for types/methods/properties, `camelCase` for locals, `_camelCase` for private fields. Serialize tunables via `[SerializeField]` or ScriptableObjects, not `public` fields. Enforce module boundaries with assembly definitions.

### Unreal
C++: `F`/`U`/`A`/`E` prefixes per Epic's convention, `PascalCase` throughout. UPROPERTY for anything the engine touches. Prefer data assets and Gameplay Tags over magic strings; keep authority logic server-side.

## Review Checklist

- Does the dependency direction hold — does this depend only on layers below it?
- Is there exactly one owner for every piece of state this touches?
- Could a tired junior read this in eighteen months without the author present?
- Are hot paths allocation-free and inside their frame budget?
- Is there a test (or a clear reason there isn't) for the behavior that matters?
- Does this add a second way to do something we already do once?
- If this is debt, is it ticketed in [technical-debt](../../10-memory/technical-debt.md) with an owner and a date?

## Common Mistakes

- "Temporary" hacks with no ticket — they become permanent and load-bearing.
- Reaching across a module boundary instead of fixing the interface.
- Premature abstraction for a second use case that never ships.
- Allocating in the hot loop and discovering it on the slowest target platform.
- Copy-paste divergence: three near-identical systems that must now all be patched.
- Hidden coupling through global singletons disguised as "managers."

## Quality Gates

These cannot ship:
- A red build, or a test suite that's "usually" green.
- A new crash-on-startup or a regression in the crash-free rate.
- A frame-budget regression on the minimum-spec target.
- Architecture-reshaping changes merged without Technical Council sign-off.
- Undocumented debt in a system other people depend on.

## Performance Checklist

- Every system has a **named frame budget** and is measured against it, not guessed.
- Hot paths are **allocation-free**; GC spikes and stalls are tracked as bugs.
- Optimization is **profiler-driven** — measure, change, re-measure, keep the evidence.
- Cross-system budget conflicts go to the [Performance Council](../../08-councils/performance-council/), not to whoever shouts loudest.
- Test on the **slowest supported platform**, regularly, not the week before cert.

## Best Practices

- Write the ADR the day you decide, not the day someone asks why.
- Make illegal states unrepresentable where the language lets you.
- Prefer deletion: leave the codebase smaller when you can.
- Commit small, review fast, keep the build green as a daily ritual.

## KPIs

- **Build green %** — fraction of the day mainline is green (target: very high; red is an incident).
- **Review latency** — median time from PR open to first review and to merge.
- **Debt burndown** — net change in the tech-debt ledger per sprint; debt should trend down, not just up.
- **Crash rate** — crash-free sessions / users, tracked release over release.
