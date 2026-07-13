# Studio Health Report
Type: report
Date: 2026-06-27
Author: studio-orchestrator
Tier: T2

## Summary
A monthly read of AI Film Studio's health, mapping domain KPIs onto the ten
enterprise [quality dimensions](../../shared/quality-standards.md). This cycle the
studio is broadly healthy: greenlight discipline and delivery conformance are Green,
but production schedule variance is Amber, driven by night-shoot overruns, and is
dragging the on-budget figure. No delivery-spec failures are open.

## Consensus
The executives agree the development pipeline is strong — every greenlit project this
cycle cleared the creative veto and landed in a register — and that finished
deliveries are passing conformance on first submission. Memory discipline is sound.

## Remaining concerns / dissent
The [line-producer](../01-executive/line-producer/) holds that schedule variance
(Amber, dimension 7 Performance) is a real delivery risk and wants an earlier
shoot-readiness gate before night units roll. The
[creative-director](../01-executive/creative-director/) cautions that tightening the
schedule must not pressure the performance on set into being rushed — a recorded
tension, not a blocker.

## Risks
- **Schedule overrun (medium):** night-shoot setups run long and inflate budget
  variance.
- **Pipeline drift (low):** a finishing-tool change mid-project would reopen closed
  conformance findings.

## KPIs vs the ten quality dimensions
| KPI | This cycle | Status | Quality dimension(s) |
|-----|-----------|--------|----------------------|
| Greenlight precision (greenlit films that reach delivery) | 90% | Green | 1 Correctness · 2 Clarity |
| Creative coherence (cut clears creative-director without rework) | 88% | Green | 2 Clarity · 3 Modularity |
| Kernel inheritance (entities extending stdlib vs forking) | 100% | Green | 4 Reusability |
| Convention conformance (`npm test` 8-rule pass) | 100% | Green | 5 Consistency |
| Tier-fit (work sized to the right T0–T4 budget) | 94% | Green | 7 Performance |
| Gate-verification coverage (decisions backed by a passed gate) | 92% | Green | 8 Testability |
| Documentation completeness (READMEs + cross-links present) | 96% | Green | 9 Documentation |
| Memory-update rate (gated decisions recorded append-mostly) | 100% | Green | 10 Memory hygiene |
| Coverage completeness (scenes fully covered at wrap, no pickups) | 91% | Green | 1 Correctness |
| Delivery conformance (masters passing spec on first submission) | 100% | Green | 6 Security (fail-safe delivery) |
| On-schedule / on-budget at wrap (schedule + cost variance) | +5% schedule | Amber | 7 Performance |
| Audience outcome (test-screening / release satisfaction) | 4.3 / 5 | Green | 1 Correctness (north-star, Directive #1) |

## Alternatives considered
Holding the current single shoot-readiness check (rejected: it is the Amber driver).
Adding a third executive sign-off on the schedule (rejected: adds gate cost without
addressing pre-rigging, the real cause).

## Recommendation
Pilot a pre-rig checkpoint the day before night units, scoped so it readies lighting
without compressing the performance schedule. Re-measure schedule variance next
cycle.

## Implementation plan
The [cinematographer](../03-production/cinematographer/) and
[production-designer](../03-production/production-designer/) prototype the pre-rig
checkpoint in parallel; the [line-producer](../01-executive/line-producer/) and
[creative-director](../01-executive/creative-director/) jointly review it before it
becomes standard.

## Owners & next steps
| Owner | Action | By when |
|-------|--------|---------|
| cinematographer | Prototype night pre-rig checkpoint | 2026-07-11 |
| line-producer | Re-measure schedule + budget variance | next cycle |
| editor | Log the overrun pattern as a production lesson | 2026-07-04 |

## Memory updates
- [production-log](../memory/registers/production-log.md) — the night-shoot overrun
  pattern and the pre-rig checkpoint action.
- [greenlight-decisions](../memory/registers/greenlight-decisions.md) — if the
  checkpoint changes a project's budget band, record it as a superseding entry.
