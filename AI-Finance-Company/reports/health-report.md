<!-- Report / Minutes. Built from ../../templates/report.template.md -->

# AI Finance Company — Health Report
Type: report
Date: 2026-06-26
Author: Finance Orchestrator
Tier: T2

## Summary
This quarter the firm measured its operating health against the ten quality
dimensions in [../../shared/quality-standards.md](../../shared/quality-standards.md).
Process discipline and compliance hygiene are green; the watch item is methodology
testability — too few theses carry an explicit, recorded falsification test. No
firm limit was breached.

## Consensus
The firm agreed that kernel-native inheritance is holding: every workflow extends a
stdlib procedure by name, every local register extends a stdlib schema, and Gate B
compliance clearance ran on 100% of trades.

## KPIs vs the ten quality dimensions
| KPI | Reads dimension | Green | This quarter | Status |
|-----|-----------------|-------|--------------|--------|
| Thesis evidence coverage — % of investment calls traceable to cited evidence | 1 Correctness | ≥ 95% | 97% | Green |
| Memo readability — % of theses a non-author reviewer cleared without rework | 2 Clarity | ≥ 90% | 88% | Amber |
| Stdlib reuse — % of local workflows/registers extending by name (no fork) | 4 Reusability | 100% | 100% | Green |
| Contract conformance — % of files passing the conformance checker | 5 Consistency | 100% | 100% | Green |
| Limit-breach incidents — firm risk limits violated in the period | 6 Security (fail-safe) | 0 | 0 | Green |
| Thesis cycle time — median days from frame to CIO Gate B | 7 Performance | ≤ 10 | 9 | Green |
| Falsification coverage — % of theses with a recorded falsification test | 8 Testability | ≥ 90% | 76% | Red |
| Compliance check coverage — % of trades with a pre-trade compliance check | 10 Memory hygiene | 100% | 100% | Green |

## Remaining concerns / dissent
The [Chief Investment Officer](../01-executive/chief-investment-officer/) flags the
red falsification-coverage number as a methodology gap and signals intent to use the
methodology veto on theses that ship without a falsification test. The
[risk-manager](../03-risk/risk-manager/) notes residual tech-sector concentration
near the soft cap and wants it tracked even though it is within limits — a standing
tension with analysis, which favors holding the position on conviction.

## Risks
- **Methodology drift (medium):** theses without falsification tests resist
  refutation and degrade decision quality over time.
- **Concentration creep (medium):** sector exposure near the cap leaves little
  headroom for a single adverse move.

## Alternatives considered
- Lowering the falsification-coverage target to match current practice — rejected:
  it would loosen a quality standard, which [resolution-order](../../kernel/loader/resolution-order.md)
  forbids (companies add strictness only).
- A blanket trim of the tech sleeve now — rejected: deferred to the next
  [portfolio-rebalance](../workflows/portfolio-rebalance.md) under risk and
  compliance gates rather than acted ad hoc.

## Recommendation
Make a recorded falsification test a hard Gate B item in
[investment-thesis](../workflows/investment-thesis.md), and carry the concentration
exposure as an open risk into the next [risk-review](../workflows/risk-review.md).

## Implementation plan
Two disjoint tracks, parallelizable per the
[fan-out](../../kernel/protocols/orchestration.md): (1) CIO updates the thesis Gate B
checklist; (2) risk-manager opens the concentration exposure in the register and
schedules the review. Both land before next quarter's report.

## Owners & next steps
| Owner | Action | By when |
|-------|--------|---------|
| Chief Investment Officer | Add falsification test as a Gate B blocker in investment-thesis | 2026-07-10 |
| Risk Manager | Open concentration exposure; schedule risk-review | 2026-07-03 |
| Chief Compliance Auditor | Confirm both controls in the next conformance pass | 2026-07-15 |

## Memory updates
- [investment-decisions](../memory/registers/investment-decisions.md) — the methodology change to the thesis Gate B, dated.
- [risk-register](../memory/registers/risk-register.md) — the tech-sector concentration exposure, severity, owner.
- [compliance-log](../memory/registers/compliance-log.md) — this quarter's 100% pre-trade check coverage and the conformance result.
