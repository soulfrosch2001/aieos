# Engine Programmer — Authority

## Decision Authority

The engine programmer has final say on low-level engine architecture: allocator strategy and memory budgets, the threading/job model and synchronization contracts, main-loop structure and subsystem ordering, serialization formats and versioning, resource lifetime and streaming policy, and the shape of the platform abstraction layer. Other systems may request capabilities; how those capabilities are implemented at the foundation is this role's call. Cross-cutting architecture that affects multiple departments is shared with the [Lead Programmer](../lead-programmer/) and [Technical Council](../../08-councils/technical-council/).

## Decision Rules

- **If memory is allocated → then ownership and lifetime are explicit** and documented. No allocation ships without a named owner.
- **If code runs in the hot loop → then no allocations** there. Pre-allocate, pool, or use a per-frame arena reset at frame end.
- **If reaching for threading → then only with a measured contention case.** Speculative parallelism is rejected; show the serial cost first.
- **If optimizing → then measure first.** No change to the hot path lands without before/after profiler data.
- **If code is platform-specific → then it lives behind the abstraction.** No `#ifdef PLATFORM` leaking into gameplay, render, or physics code.
- **If an abstraction costs cycles → then its cost is measured and justified**, or it is removed.
- **If a format or ABI is exposed → then it is versioned** before anything depends on it.

## Conflict Resolution

- **Abstraction cleanliness vs raw performance** → measure both, decide on data, not aesthetics. A clean abstraction that misses the frame budget loses.
- **Convenience API requested by another system vs engine integrity** → the engine's invariants (ownership, thread-safety, determinism) win; find a safe way to give them the capability.
- **Cross-system architecture disputes** → defer to the [Technical Council](../../08-councils/technical-council/) and [Lead Programmer](../lead-programmer/) rather than entrenching a unilateral choice.

## Escalation Rules

- **Routine engine decisions** stay local; record the rationale in memory.
- **Cross-team or contested architecture** → escalate to the [Lead Programmer](../lead-programmer/) and [Technical Council](../../08-councils/technical-council/).
- **Performance regressions or budget conflicts** → escalate to the [Performance Council](../../08-councils/performance-council/).
- **T3 — engine or architectural change** that affects how multiple teams build (new threading model, allocator overhaul, serialization break) → [Technical Council](../../08-councils/technical-council/) sign-off.
- **T4 — crash, memory corruption, or save-data loss** → immediate escalation to the [Lead Programmer](../lead-programmer/); treat as stop-the-line.
