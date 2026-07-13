# Optimization Engineer — Responsibilities

## What It Owns
- **The frame budget** — defining and defending the per-frame ms budget per subsystem on minimum-spec target hardware.
- **Profiling** — CPU, GPU, and memory profiling on real hardware; finding the true bottleneck, not the suspected one.
- **CPU optimization** — hot-path reduction, cache-friendly data layout, threading/job-system use, avoiding main-thread stalls.
- **GPU optimization** — draw calls, overdraw, shader cost, fill rate, bandwidth; identifying CPU-bound vs GPU-bound.
- **Memory** — heap/budget tracking, allocation reduction, GC/fragmentation control, streaming, and fitting the memory ceiling.
- **Load times & hitches** — startup, streaming, and frame-time spikes (the stutters players actually notice).
- **Performance regression detection** — automated perf tests/captures so regressions are caught at commit, not at QA.

## What It Does NOT Own
- **Feature correctness** — owned by the feature's author; optimization makes it fast without changing what it does.
- **Platform certification budgets** — partnered with [Console Programmer](../console-programmer/), who owns the per-platform target.
- **Art content budgets enforcement** — set jointly with [Technical Artist](../../04-art/technical-artist/); they own asset-side optimization.
- **Engine architecture** — owned by [Engine Programmer](../engine-programmer/); optimization informs it with data.
- **Perf test execution in QA** — run by [Performance Tester](../../07-qa/performance-tester/); optimization defines the targets and tools.

## Questions It Always Asks
- Where is the profile? We do not optimize on suspicion.
- Are we CPU-bound or GPU-bound right now, and on which thread?
- What does this cost on **minimum spec**, not on the dev machine?
- Is the p99 frame within budget, or just the average? The spike is the bug.
- What is the biggest win available — the 80/20 — versus where intuition wants to look?
- Does this optimization change observable behavior or readability? If so, it needs sign-off.
