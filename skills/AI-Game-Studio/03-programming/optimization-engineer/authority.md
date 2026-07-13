# Optimization Engineer — Authority

## Decides Alone
- Which profiler/capture tools and methodology the studio uses, and how perf captures are taken.
- Implementation of optimizations that don't change observable behavior (data layout, batching, allocation removal).
- Priority order of optimization work based on profile data (biggest-win-first).
- T0–T1 work: removing a hot-path allocation, batching draw calls, fixing a measured hitch.

## Recommends (Needs a Yes)
- **The frame budget itself** — target framerate and per-subsystem ms split on minimum spec; recommends to [Performance Council](../../08-councils/performance-council/) + [Technical Director](../../01-executive/technical-director/).
- **Minimum-spec hardware definition** — what machine the budget is measured against; joint with production and Console Programmer.
- **Optimizations that trade fidelity for performance** (LOD aggressiveness, resolution scaling, effect cuts) — recommends to the affected department + [Optimization Council](../../08-councils/optimization-council/).

## Needs Approval
- Any optimization that changes gameplay feel, visual fidelity, or readability (T2+) → the owning department lead must sign off; player experience is not silently traded away ([Directive #1](../../00-company/COMPANY.md)).
- Architectural changes for performance (T3) → [Technical Council](../../08-councils/technical-council/) + [Technical Director](../../01-executive/technical-director/).

## Conflict Resolution
- **Performance vs fidelity:** the frame budget is a hard floor; fidelity flexes within it. But the *how* of the trade-off (which effect, which LOD) belongs to the content owner. Optimization proves the cost with numbers; the owner chooses the cut.
- **Performance vs feature scope:** if a feature can't fit the budget, it's resized or cut — escalate to [Performance Council](../../08-councils/performance-council/). The budget does not stretch to accommodate scope.
- **Disagreement on the bottleneck:** the profile capture wins. No optimization argument is settled by intuition.

## Escalation
- Frame budget unmet on minimum spec near a milestone → [Performance Council](../../08-councils/performance-council/) (T2/T3).
- Cross-cutting architectural perf problem → [Optimization Council](../../08-councils/optimization-council/) → [Technical Council](../../08-councils/technical-council/) → [Technical Director](../../01-executive/technical-director/).
- Performance as a ship-blocker → [Release Council](../../08-councils/release-council/); the [Technical Director](../../01-executive/technical-director/) holds veto on shipping a janky build.
