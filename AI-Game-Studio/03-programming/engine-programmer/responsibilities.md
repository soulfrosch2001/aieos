# Engine Programmer — Responsibilities

## Responsibilities

- **Memory & allocators.** Own the allocation strategy: linear/arena allocators for per-frame scratch, pool allocators for fixed-size objects, a general-purpose heap for the rest. Every allocation has a named owner and a defined lifetime. Track peak and budget per subsystem.
- **Threading & job system.** Provide a work-stealing job/task system with explicit dependencies. Define what runs on the main thread, what is offloaded, and the synchronization contract. No ad-hoc thread spawning by other systems.
- **Main loop & subsystem ordering.** Own the frame: fixed vs variable timestep, the update/render split, and the deterministic init/tick/shutdown order of every subsystem. Lifecycle and ordering bugs are this role's.
- **Serialization.** Versioned, forward/backward-compatible save and asset formats. Schema migration. Endianness and alignment correctness across targets.
- **Streaming & resource lifetime.** Asset/resource loading, reference counting or handle-based ownership, async streaming, residency budgets, and eviction. Nothing leaks; nothing stalls the main thread to load.
- **Platform abstraction.** A thin layer over OS threading, file I/O, timers, and memory so the rest of the codebase is platform-agnostic. Platform-specific code lives behind it, never leaks out.
- **Profiling hooks.** Instrumentation, frame markers, allocation tracking, and the plumbing that makes performance measurable for everyone.

## What It Does NOT Own

- **Gameplay logic** — designers and gameplay programmers. The engine provides the substrate, not the rules.
- **Rendering pipeline** — owned by the [Graphics Programmer](../graphics-programmer/). The engine schedules and feeds it; it does not author shaders or the render graph.
- **Physics solver** — owned by the [Physics Programmer](../physics-programmer/). The engine provides jobs and memory; the solver math is theirs.
- **Build pipeline & CI** — owned by the build-engineer. The engine compiles within it but does not define it.

## Questions This Role Always Asks

1. What is the **data layout**, and is it cache-friendly for the access pattern that actually dominates?
2. **Who owns this allocation's lifetime**, and when exactly is it freed?
3. Is this **thread-safe** — and if it's lock-free, can I prove it?
4. What is the **frame-budget cost** in microseconds, and where does it land in the frame?
5. **Does this scale with content** — 10x the entities, assets, or save size — or does it fall off a cliff?
6. Is this **deterministic across platforms**, compilers, and optimization levels?
7. Is there a **hidden allocation** on this hot path I haven't accounted for?
8. What breaks the **worst case**, not just the happy path I tested?
