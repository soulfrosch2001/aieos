<!-- Report / health snapshot. Template: ../../templates/report.template.md -->

# AI Marketing Agency — Health Report
Type: report
Date: 2026-06-26
Author: chief-auditor
Tier: T2

## Summary
A point-in-time health snapshot of the agency's client delivery against the ten
enterprise quality dimensions ([quality-standards.md](../../shared/quality-standards.md)).
Brand conformance and decision traceability are green and the delivery engine is
sound, but measurement coverage on live campaigns sits amber and a backlog of parked
audience insights is going stale — both tracked below with owners.

## KPI snapshot
Each KPI maps to a quality dimension. Green/Amber/Red follow the gate convention in
[quality-standards.md](../../shared/quality-standards.md).

| KPI | Measures | Value | Target | Status | Dimension |
|-----|----------|-------|--------|--------|-----------|
| Brand conformance | Shipped assets passing the strategy-director brand check first pass | 96% | ≥ 95% | Green | #5 Consistency |
| On-brief accuracy | Content pieces matching brief + claims verified at Gate B | 94% | ≥ 95% | Amber | #1 Correctness |
| Measurement coverage | Live campaigns with attribution/tracking verified before launch | 88% | 100% | Red | #8 Testability |
| Message clarity | Assets passing first-read comprehension (no rewrite for clarity) | 0.8 rewrites/asset | ≤ 1.0 | Green | #2 Clarity |
| Decision traceability | BDRs with recorded context + alternatives | 100% | 100% | Green | #9 Documentation |
| Memory hygiene | Campaign rows with `Result` measured (not `pending`) | 90% | ≥ 95% | Amber | #10 Memory hygiene |

## Consensus
Strategy and operations agree the delivery pipeline is healthy and on-brand; the
friction is isolated to measurement setup running behind launch and to an
audience-insights backlog that no one has promoted or retired.

## Remaining concerns / dissent
The performance-marketer notes that 88% measurement coverage is partly campaigns
launched on borrowed client analytics where access lagged — the gap may be access,
not discipline. The market-researcher counters that parked insights aging out is a
real cost, not a recording artifact. Both recorded, neither suppressed.

## Risks
- **Unmeasured spend (high).** At 88% coverage, a campaign could run live without
  attribution — we cannot prove ROAS or kill a losing variant. Mitigation: hard-gate
  launch on the measurement KPI at [campaign-launch](../workflows/campaign-launch.md) Gate B.
- **Stale audience insights (medium).** Parked findings lose value as audiences
  shift; the [audience-insights](../memory/registers/audience-insights.md) status
  field exists precisely to force promote-or-retire decisions.

## Alternatives considered
Launching campaigns on schedule with partial tracking and backfilling measurement
(rejected: violates the testability gate, [Prime Directive #9](../../kernel/laws/prime-directives.md) —
a campaign we cannot measure is one we will not ship).

## Recommendation
Hold any campaign launch until measurement coverage reaches 100% at Gate B. Brand and
content delivery remain green and unblocked. Run a triage of the audience-insights
backlog to promote, validate, or retire each parked item.

## Implementation plan
Parallelizable per the 15-agent fan-out ([Prime Directive #4](../../kernel/laws/prime-directives.md)):
the measurement-setup fix on in-flight campaigns runs concurrently with the
audience-insights triage and with ongoing content production, undisturbed.

## Owners & next steps
| Owner | Action | By when |
|-------|--------|---------|
| performance-marketer | Verify tracking on all live campaigns; lift measurement coverage to 100% | 2026-07-10 |
| market-researcher | Triage parked audience-insights; promote, validate, or retire each | 2026-07-10 |
| chief-auditor | Re-snapshot KPIs and clear the launch gate | 2026-07-12 |

## Memory updates
- [campaign-results](../memory/registers/campaign-results.md) — `pending` rows flagged for closure once measured.
- [audience-insights](../memory/registers/audience-insights.md) — backlog items triaged with updated status.
