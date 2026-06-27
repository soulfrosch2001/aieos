# Workflow: performance-optimization

**Purpose:** Find and fix the frame-time, memory, or load-time problems that are stealing the player's experience — measured, targeted, and verified, never guessed.
**Default Tier:** T1 (a local hotspot) to **T3** (architectural reframe, e.g. threading, streaming).

## Purpose
Performance is a feature the player feels before they see anything. Optimization without a profiler is superstition. This workflow enforces *profile first, fix the biggest cost, verify the win* — and protects against optimizations that trade frame-time for bugs.

## Participants
- [optimization-engineer](../03-programming/optimization-engineer/) — owns the investigation.
- [performance-tester](../07-qa/performance-tester/) — captures repeatable traces.
- [engine-programmer](../03-programming/engine-programmer/) / [graphics-programmer](../03-programming/graphics-programmer/) — system-specific fixes.
- [technical-artist](../04-art/technical-artist/) — art-budget offenders (overdraw, poly, texture).
- [performance-council](../08-councils/performance-council/) + [optimization-council](../08-councils/optimization-council/) for T2/T3.
- [technical-director](../01-executive/technical-director/) — T3 sign-off and veto.

## Inputs
- A repeatable bad-frame trace + the target budget (e.g. 16.6 ms at 60 fps).
- Target hardware tiers (min spec, consoles).
- Prior reports in [../10-memory/performance-reports.md](../10-memory/performance-reports.md).

## Steps
```
budget + repro trace → profile → rank costs → council? (T2/T3) → fix biggest cost →
re-profile → [GATE: win confirmed, no regress] → record
```
1. **Establish budget + repro** — performance-tester captures a deterministic worst-case trace.
2. **Profile** — optimization-engineer ranks costs (CPU/GPU/memory/IO); never guess.
3. **Scope** — T2/T3 to [performance-council](../08-councils/performance-council/) / [optimization-council](../08-councils/optimization-council/).
4. **Fix the biggest cost** — target the top of the profile, not the easiest line.
5. **Re-profile** — measure the same trace; confirm the win is real.
6. **Regression gate** — [regression-tester](../07-qa/regression-tester/) confirms no new bugs or visual loss.
7. **Record** — optimization-engineer logs the before/after.

## Review Gates
- **Gate A — Profile-backed:** every change traces to a measured cost.
- **Gate B — Win gate:** re-profile shows measurable improvement on target hardware.
- **Gate C — No-regression gate:** no new bugs, no unacceptable visual loss (hard block).

## Approval Process
T1: [optimization-engineer](../03-programming/optimization-engineer/) + peer. T2: [performance-council](../08-councils/performance-council/). T3 (architecture): [technical-director](../01-executive/technical-director/) sign-off, veto per [Prime Directive 7](../00-company/COMPANY.md).

## Outputs
Measured optimization, before/after trace, target-hardware verification, and a perf report entry.

## Completion Criteria
Budget met or measurably closer, no regression, target hardware verified, memory updated.

## Memory Updates
- [../10-memory/performance-reports.md](../10-memory/performance-reports.md) — **mandatory** before/after trace + fix.
- [../10-memory/architecture-decisions.md](../10-memory/architecture-decisions.md) — if T3 reframe.
- [../10-memory/technical-debt.md](../10-memory/technical-debt.md) — if a temporary hack was used.
