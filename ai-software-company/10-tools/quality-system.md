# quality-system.md — The Project Quality System

> Owned by the [Chief Auditor](../01-executive/chief-auditor/). The single source
> of truth for how project health is measured, scored, and reported.

## The 10 Tracked Dimensions
Every project is scored across these, each on a **0–5** scale:

1. **Architecture** — boundaries, coupling, fitness for purpose.
2. **Security** — exposure, secrets, authN/Z, dependency risk.
3. **Testing** — coverage, signal, flake rate.
4. **Performance** — latency, throughput, resource cost.
5. **Documentation** — accuracy, completeness, freshness.
6. **Maintainability** — readability, the 50-line rule, churn.
7. **Scalability** — headroom under load and data growth.
8. **Technical Debt** — known shortcuts and their interest.
9. **Developer Experience** — build, onboarding, feedback loops.
10. **User Experience** — task success, friction, accessibility.

## How Scores Are Produced
Each dimension maps to concrete metrics with thresholds — see
[metrics.md](metrics.md). The Chief Auditor converts each metric to a 0–5 band,
takes the dimension score, and records a one-line justification and trend (↑↓→).
**Overall health** is the mean of the ten, surfaced in the scorecard.

## Ownership
The [Chief Auditor](../01-executive/chief-auditor/) owns the system, signs off
reports, and is the only role that may change thresholds (via governance).

## When Reports Are Generated
- At **release gates** and tier T2+ engagements.
- **On demand** when any executive requests an audit.
- After significant architectural change.

Format: [../09-templates/health-report-template.md](../09-templates/health-report-template.md).
Process: [health-reports.md](health-reports.md).
