<!-- Report / health snapshot. Template: ../../templates/report.template.md -->

# AI Tabletop Studio — Health Report
Type: report
Date: 2026-06-26
Author: Chief Auditor
Tier: T2

## Summary
A point-in-time health snapshot of the studio's flagship title against the ten
enterprise quality dimensions ([quality-standards.md](../../shared/quality-standards.md)).
The game is green on rules clarity and structurally sound, but balance variance
sits amber and playtest coverage of expansion content is below the bar — both
tracked below with owners.

## KPI snapshot
Each KPI maps to a quality dimension. Green/Amber/Red follow the gate convention
in [quality-standards.md](../../shared/quality-standards.md).

| KPI | Measures | Value | Target | Status | Dimension |
|-----|----------|-------|--------|--------|-----------|
| Rules clarity | First-read comprehension at the table (no rulebook re-reads per session) | 0.9 re-reads/session | ≤ 1.0 | Green | #2 Clarity |
| Balance variance | Spread of faction win-rates from 50% | ±9% | ≤ ±5% | Amber | #1 Correctness |
| Playtest coverage | Share of shipped components seen in ≥3 sessions | 71% | ≥ 90% | Red | #8 Testability |
| Component consistency | Cards/tokens conforming to the component spec | 98% | ≥ 99% | Green | #5 Consistency |
| Decision traceability | GDRs with recorded context + alternatives | 100% | 100% | Green | #9 Documentation |
| Memory hygiene | Balance changes with `After` measured (not `pending`) | 84% | ≥ 95% | Amber | #10 Memory hygiene |

## Consensus
Design and balance leads agree the core loop is shippable; the friction is
isolated to one over-performing faction and to expansion content that has not
cleared enough tables.

## Remaining concerns / dissent
The Balance Designer notes that ±9% variance is partly an artifact of low session
counts on new factions — coverage and balance are entangled, and the variance may
narrow once coverage rises. Recorded, not suppressed.

## Risks
- **Expansion ships under-tested (high).** At 71% coverage, a dominant strategy
  could reach print. Mitigation: gate expansion release on the coverage KPI.
- **Balance pendulum (medium).** Over-correcting the lead faction risks an
  over-nerf; the [balancing-history](../memory/registers/balancing-history.md)
  `After` discipline exists precisely to catch this.

## Alternatives considered
Shipping the expansion on schedule with current coverage (rejected: violates the
testability gate, [Prime Directive #9](../../kernel/laws/prime-directives.md)).

## Recommendation
Hold expansion release until playtest coverage reaches ≥ 90% and balance variance
returns to ≤ ±5%. Core set remains green and unblocked.

## Implementation plan
Parallelizable per the 15-agent fan-out ([Prime Directive #4](../../kernel/laws/prime-directives.md)):
two added playtest tables run concurrently with the balance pass on the lead
faction; rules and component work continue undisturbed.

## Owners & next steps
| Owner | Action | By when |
|-------|--------|---------|
| Playtest Lead | Run 2 added tables on expansion content; lift coverage to ≥ 90% | 2026-07-10 |
| Balance Designer | Tune lead faction; record `After` for all pending rows | 2026-07-10 |
| Producer | Re-snapshot KPIs and clear gate for expansion release | 2026-07-12 |

## Memory updates
- [playtest-feedback](../memory/registers/playtest-feedback.md) — coverage gaps logged as open PF items.
- [balancing-history](../memory/registers/balancing-history.md) — pending `After` values flagged for closure.
