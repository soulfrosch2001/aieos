# metrics.md — Concrete Metrics Behind Each Dimension

> The measurable signals that drive the scores in
> [quality-system.md](quality-system.md). Each maps to a 0–5 band by threshold.

## Metric → Dimension → Threshold (5 = best)
| Dimension | Metric | How Gathered | Green (≥4) | Red (≤1) |
|-----------|--------|--------------|-----------|----------|
| Architecture | module coupling, cyclic deps | static analysis | 0 cycles | many cycles |
| Security | open criticals, secret leaks | scanner, audit | 0 | any critical |
| Testing | line/branch coverage | test runner | ≥80% | <40% |
| Testing | flake rate | CI history | <1% | >10% |
| Performance | p95 latency | load test / APM | within budget | 2× budget |
| Performance | change-failure rate | deploy logs | <15% | >45% |
| Documentation | doc freshness, broken links | link check | 0 stale | many |
| Maintainability | files >50 lines, churn | repo scan | 0 over | many over |
| Scalability | headroom at 2× load | load test | passes | fails |
| Technical Debt | open debt count, age | [../07-memory/technical-debt.md](../07-memory/technical-debt.md) | low/young | high/old |
| Developer Experience | build time, onboarding steps | timing | fast/few | slow/many |
| User Experience | task success, a11y defects | usability test | high/0 | low/many |

## Gathering Cadence
- **Per commit/CI:** coverage, flake, build time, files >50 lines.
- **Per release:** latency, change-failure rate, security scan, headroom.
- **Per audit:** doc freshness, debt review, UX metrics.

## Bands
Map each metric to 0–5; the dimension score is the weighted floor of its metrics
(a single Red caps the dimension at 2). Thresholds change only via governance.
