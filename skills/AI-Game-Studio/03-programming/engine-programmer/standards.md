# Engine Programmer — Standards

## Coding Standards

- **Explicit ownership.** Every allocation, buffer, and handle has one clear owner and a defined lifetime. No ambiguous "who frees this?" code.
- **No hidden allocations.** Hot paths are allocation-free. No surprise heap traffic from temporaries, growth, or convenience containers.
- **RAII / lifetime discipline.** Acquire in constructor, release in destructor; deterministic teardown; no leaks on early-return or error paths.
- **Data layout.** Hot data is contiguous and cache-friendly. Prefer structure-of-arrays; keep cold data out of the hot struct.

### Godot
Use `RefCounted` for shared ownership and raw `Object` only with explicit lifetime management. Bind module APIs cleanly; never block the main loop in `_process`.

### Unity
Annotate `Allocator` lifetimes on every `NativeArray`; mark Burst-compatible jobs; zero managed allocations in per-frame code.

### Unreal
Use `UPROPERTY` to keep references GC-visible; respect `TSharedPtr`/`TUniquePtr` ownership; never hold raw `UObject*` across frames without GC awareness.

## Review Checklist

- [ ] Every allocation has a named owner and a clear free point.
- [ ] No allocations on the identified hot path.
- [ ] Shared state is either immutable, owned by one thread, or correctly synchronized — and it's proven, not assumed.
- [ ] Data layout matches the dominant access pattern.
- [ ] Serialization is versioned and round-trips across target platforms.
- [ ] Platform-specific code is behind the abstraction, not leaking.
- [ ] Error and early-return paths release everything.

## Common Mistakes

- **Hidden allocations** — a temporary `std::string`, container growth, or a closure capture allocating in the inner loop.
- **False sharing / data races** — hot variables sharing a cache line, or "obviously safe" shared writes that aren't.
- **Premature threading** — parallelizing before measuring; adding locks that serialize anyway.
- **Unbounded streaming** — loading without a residency budget or eviction, so memory grows with playtime.
- **Platform leaks** — `#ifdef` and OS calls bleeding out of the abstraction into gameplay/render code.

## Quality Gates

- No hot-path allocations in shipped builds (verified by allocation tracker).
- No data races (clean run under thread sanitizer / race detector).
- Serialization round-trip passes on every target platform.
- Peak memory within the declared subsystem budgets.
- No leaks at shutdown (clean allocator drain).

## Performance Checklist

- [ ] **Frame budget** — system fits its microsecond allotment in the worst case, not just average.
- [ ] **Allocations/frame** — at or near zero on the hot path; tracked and trending flat.
- [ ] **Cache misses** — measured on hot loops; layout adjusted where it matters.
- [ ] **Stalls** — no main-thread blocking on I/O, locks, or GPU sync.
- Regressions and budget conflicts go to the [Performance Council](../../08-councils/performance-council/).

## Best Practices

- Profile first, change second, re-profile to confirm.
- Pre-allocate and pool; reset per-frame arenas at frame end.
- Keep the main thread thin; express work as jobs with explicit dependencies.
- Version formats before anything depends on them.
- Bound everything that grows with content or playtime.

## KPIs

- **Frame-time stability** — low variance, flat 99th-percentile frame time.
- **Peak memory** — within budget, no growth-over-session creep.
- **Crash rate** — near zero from engine-layer faults (corruption, leaks, races).
- **Hitch count** — minimal frames exceeding the budget per session.
