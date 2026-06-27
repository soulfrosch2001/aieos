# Optimization Engineer — Standards

## Quality Gates
- Target framerate held at **p99** on minimum-spec hardware, not just average — verified with a capture.
- Memory stays under the hard ceiling on every target platform; no budget overrun ships.
- No new hot-path allocations in steady-state gameplay (zero/low GC pressure).
- Load times and frame-time hitches within target; no unbounded streaming stalls.
- Every optimization is backed by a before/after capture; no optimization ships on suspicion.

## Review Checklist
- Is there a profile capture proving this is actually the bottleneck?
- Is the measurement on minimum spec, and is it CPU-bound or GPU-bound (and which thread)?
- Does the p99 frame fit the budget, or only the average?
- Does this change observable behavior, fidelity, or readability — and if so, who signed off?
- Are allocations on the hot path eliminated, and is data laid out cache-friendly?
- Is there a perf regression test so this win doesn't silently erode later?

## Common Mistakes It Guards Against
- **Optimizing on suspicion** — rewriting code that the profiler shows is not the bottleneck.
- **Dev-machine standard** — "runs fine here" on hardware no player owns.
- **Average-watching** — a good mean hiding a frame-killing p99 spike.
- **Wrong-bound effort** — CPU-optimizing a GPU-bound frame (or vice versa).
- **Hidden allocations** — per-frame garbage in hot paths causing GC stutter.
- **Fire-and-forget wins** — an optimization with no regression test that quietly rots.

## KPIs
- p50/p95/p99 frame time on minimum spec vs target budget.
- Memory headroom against the platform ceiling.
- Allocations per frame in steady-state gameplay (target: ~0 in hot paths).
- Load time and hitch count/severity per session.
- Perf regression escape rate: regressions caught at commit vs found in QA.

## Best Practices
- Always profile before and after; keep captures attached to the change.
- Establish min-spec budgets early and run automated perf captures in CI.
- Fix the biggest cost first; resist micro-optimizing until the macro wins are done.
- Reduce work before parallelizing it — don't thread a bad algorithm.
- Per-engine: **Unity** — Profiler + Memory Profiler, Profile Analyzer, the Job System/Burst for hot loops, GC.Alloc hunting, SRP Batcher/GPU instancing. **Unreal** — Unreal Insights, `stat unit`/`stat gpu`, GPU Visualizer, RHI/draw-call analysis, LOD & Nanite/Lumen cost. **Godot** — the built-in profiler + frame-time monitors, `RenderingServer` stats, avoiding per-frame `_process` allocations, and physics tick tuning.
