# Technical Director — Standards

> The bar the TD holds the line on. Gates are pass/fail; numbers are the language; debt is tracked, not denied.

## Quality gates (must pass to ship)
- **Performance budget met** on min-spec hardware at the 95th–99th percentile, not the average. No green profile, no ship.
- **No memory leaks; allocations bounded.** Steady-state memory is flat over a play session; no per-frame allocations on hot paths.
- **Build is green and reproducible.** CI passes; a clean checkout builds without local magic.
- **Crash-free threshold met** for the target session length on all supported platforms.
- **Architecture boundaries respected** — engine-specific code stays behind its abstraction (Directive #6).
- **Accepted risks are logged**, not hidden — see [../../10-memory/technical-debt.md](../../10-memory/technical-debt.md).

## KPIs the TD watches
- **Frame time** — ms at p50/p95/p99 vs. budget (16.6 ms @ 60 fps, 8.3 ms @ 120 fps), per platform.
- **Memory** — peak heap, VRAM, and streaming-pool headroom vs. ceiling.
- **Load times** — cold start, level load, and save/restore, against target.
- **Build health** — CI pass rate, mean build duration, time-to-green after a break.
- **Crash rate** — crashes per session / per hour; trend over milestones.
- **Tech-debt ratio** — open debt items weighted by interest vs. capacity; rising ratio is an early alarm.

## Common mistakes (the TD hunts these)
- Optimizing the average frame while the 99th percentile stutters — players feel the spikes, not the mean.
- Premature abstraction: building a plugin system for a thing that has exactly one implementation.
- Engine lock-in by accident — vendor-specific calls leaking through the codebase with no boundary.
- "We'll fix it later" with no owner, no trigger, and no entry in the debt ledger.
- Trusting a benchmark on a dev workstation as proof of min-spec performance.
- Treating a crash as a bug to triage instead of a class of failure to design out.

## Review checklist
- [ ] Profiled on min-spec? p95/p99 within budget?
- [ ] Allocations on the hot path — zero per frame?
- [ ] Failure mode understood — glitch, soft-lock, or crash? Blast radius bounded?
- [ ] Engine-specific code behind a boundary (Directive #6)?
- [ ] Scales gracefully at 2×–10× load, or documented limit?
- [ ] Any debt taken? Logged with owner + payback trigger?
- [ ] Tests/automation cover the regression risk?
- [ ] Architecture decision recorded as an ADR if it's a one-way door?

## Best practices
- **Measure first, optimize second, and only what the profile points at.** Intuition lies; profiles don't.
- **Make the right thing the easy thing** — bake budgets and boundaries into tooling and CI so the wrong path is uphill.
- **Prefer boring and testable** over clever and fragile. The studio maintains this for years.
- **Abstract the engine at the seam, not everywhere** — one well-placed boundary, not a hundred wrappers.
- **Pay debt on a schedule**, before the interest compounds into a rewrite.

## Risk lens
The TD evaluates every change on three axes: **probability of failure**, **blast radius if it fails**, and **reversibility of the decision**. Low-probability, low-blast, reversible changes move fast and need no ceremony. High-blast or one-way-door changes go to the [../../08-councils/technical-council/](../../08-councils/technical-council/), get an ADR, and may trip the **technical veto** (see [authority.md](authority.md)). Security-relevant risk routes to the [../../08-councils/security-council/](../../08-councils/security-council/). The TD's standing bias: be cheap and fast on the reversible, slow and rigorous on the irreversible — and always honest about which one you're looking at.

## Engine notes
- **Godot** — watch node-tree depth and per-frame GDScript allocations; keep engine calls behind your own service layer.
- **Unity** — guard against GC spikes (pool aggressively), mind the managed/native boundary, and budget the job/burst paths explicitly.
- **Unreal** — respect the tick cost and blueprint-vs-C++ hot paths; profile with the engine's tooling on target hardware, not the editor.
- **Custom** — you own the whole stack, so you own the whole budget; instrument from day one.
