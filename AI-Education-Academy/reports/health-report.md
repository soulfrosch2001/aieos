# Academy Health Report
Type: report
Date: 2026-06-26
Author: academy-orchestrator
Tier: T2

## Summary
A monthly read of AI Education Academy's health, mapping domain KPIs onto the ten
enterprise [quality dimensions](../../shared/quality-standards.md). This cycle the
academy is broadly healthy: outcome attainment and conformance are Green, but
lesson time-to-publish is Amber under content load, and one cohort fell short of its
outcome target. No published lesson is missing an outcome trace.

## Consensus
The directors agree the academy's pedagogical quality is holding and that
outcome-first design is paying off in attainment. Memory discipline is sound — every
cohort closed by writing to the [learning-outcomes register](../memory/registers/learning-outcomes.md).

## Remaining concerns / dissent
The [operations-director](../01-executive/operations-director/) holds that lesson
time-to-publish (Amber, dimension 7 Performance) is a delivery risk and wants more
parallel authoring in [lesson-production](../workflows/lesson-production.md). The
[academic-director](../01-executive/academic-director/) cautions that speeding
authoring must not weaken the editor and deliverability gates — a recorded tension
between schedule and pedagogical quality, not a blocker. The
[chief-auditor](../01-executive/chief-auditor/) notes the one below-target cohort is
already logged and actioned, not suppressed.

## Risks
- **Lesson publish latency (medium):** content load inflates time-to-publish and
  delays cohort starts.
- **Outcome drift (low):** a course outcome updated mid-cohort would reopen closed
  assessment findings.

## KPIs vs the ten quality dimensions
| KPI | This cycle | Status | Quality dimension(s) |
|-----|-----------|--------|----------------------|
| Outcome-attainment rate (assessed mastery vs stated outcomes) | 86% | Green | 1 Correctness (north-star, Directive #1) |
| Lesson-to-outcome trace coverage (every lesson maps to an outcome) | 100% | Green | 2 Clarity · 8 Testability |
| Assessment validity pass rate (items measuring their claimed outcome) | 92% | Green | 1 Correctness · 8 Testability |
| Kernel inheritance (entities extending stdlib vs forking) | 100% | Green | 4 Reusability |
| Convention conformance (`npm test` 8-rule pass) | 100% | Green | 5 Consistency |
| Tier-fit (work sized to the right T0–T4 budget) | 94% | Green | 7 Performance |
| Gate-verification coverage (decisions backed by a passed gate) | 95% | Green | 8 Testability |
| Documentation completeness (READMEs + cross-links present) | 97% | Green | 9 Documentation |
| Memory-update rate (gated decisions recorded append-mostly) | 100% | Green | 10 Memory hygiene |
| Course coherence rate (passes curriculum-council without rework) | 89% | Green | 2 Clarity · 3 Modularity |
| Lesson time-to-publish (production cycle time) | +12% vs target | Amber | 7 Performance |
| Cohorts below outcome target | 1 of 6 | Amber | 1 Correctness · 6 Security (fail-safe: no learner left unassessed) |

## Alternatives considered
Holding the current single-author lesson path (rejected: it is the Amber driver for
time-to-publish). Relaxing the Gate B editor sign-off to ship faster (rejected:
trades Correctness for Performance, which the local rules forbid). Adding a third
review gate (rejected: adds gate cost without addressing authoring throughput).

## Recommendation
Pilot parallel authoring inside [lesson-production](../workflows/lesson-production.md)
— split a course's lessons across authors with a shared editor — scoped so the editor
and instructor deliverability gates stay intact. Re-measure time-to-publish and
attainment next cycle.

## Implementation plan
The [course-author](../03-content/course-author/) and
[media-producer](../03-content/media-producer/) prototype parallel authoring on the
next course in parallel; the [content-editor](../03-content/content-editor/) and
[instructor](../04-delivery/instructor/) jointly confirm gate integrity before it
becomes standard. Fan-out is honoured where lessons are independent.

## Owners & next steps
| Owner | Action | By when |
|-------|--------|---------|
| course-author | Prototype parallel lesson authoring | 2026-07-10 |
| curriculum-designer | Re-analyse the below-target cohort and log the lesson | 2026-07-03 |
| operations-director | Re-measure time-to-publish next cycle | next cycle |

## Memory updates
- [learning-outcomes](../memory/registers/learning-outcomes.md) — the below-target
  cohort finding and the corrective action.
- [pedagogy-decisions](../memory/registers/pedagogy-decisions.md) — if parallel
  authoring is adopted, record it as a binding process decision.
