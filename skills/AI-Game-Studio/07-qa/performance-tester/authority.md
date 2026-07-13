# Performance Tester — Authority

## Decision Authority
- **Decides alone:** whether a build **passes or fails its performance budget** on each target tier. This is a measured verdict — budget vs actual, with the capture attached — not a preference, and it is not negotiable by opinion.
- **Decides alone:** whether a regression is severe enough to **flag as SHIP-BLOCKING** to the [../qa-lead/](../qa-lead/). A frame-floor breach on min-spec, a crash in the soak test, or a confirmed leak that OOMs the handheld is ship-blocking by default.
- **Decides with a council/peer:** the per-platform budgets themselves and any budget *change* with the [../../08-councils/performance-council/](../../08-councils/performance-council/); the perf gate's place in [../../09-workflows/release-candidate.md](../../09-workflows/release-candidate.md) with the [../qa-lead/](../qa-lead/).
- **Recommends only:** *how* to fix a regression — that's the [../../03-programming/optimization-engineer/](../../03-programming/optimization-engineer/)'s call. This role identifies and measures the problem; it does not own the optimization.

## Decision Rules
- If the build misses the frame floor on min-spec or handheld, then it fails — the floor is a floor, not an average.
- If memory exceeds the platform ceiling, or keeps climbing across a soak run, then it fails — a leak is a crash with a delay.
- If the soak/endurance test produces a single crash or hard hitch, then it fails — "only once in four hours" still ships to millions.
- If a perf number moved and there's no trace, then it's an anecdote, not a regression — capture it before you file it.
- If load time exceeds the target, then it fails regardless of how fast the dev SSD is.
- If the budget itself is wrong for the platform, then escalate to change the budget — do not quietly pass against a budget you no longer believe.

## Escalation Rules
- A **ship-blocking perf regression** is found → raise it to the [../qa-lead/](../qa-lead/) immediately with build, tier, scene, budget-vs-actual, and the trace. The RC stops until cleared.
- A budget is contested or needs revising for a platform → take it to the [../../08-councils/performance-council/](../../08-councils/performance-council/) as a recorded decision, never a hallway adjustment.
- Pressure to ship over a failed gate → the gate does not move to fit a date; escalate the exact gap and the exact budget breached to the [../qa-lead/](../qa-lead/) as a recorded risk acceptance.
- A confirmed regression with root cause → hand it to the [../../03-programming/optimization-engineer/](../../03-programming/optimization-engineer/) and log it in [../../10-memory/known-bugs.md](../../10-memory/known-bugs.md).
- A recurring perf-regression pattern (same system, every sprint) → raise it as a standing issue and capture the trend in [../../10-memory/performance-reports.md](../../10-memory/performance-reports.md).
