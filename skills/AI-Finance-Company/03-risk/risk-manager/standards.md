# Risk Manager — Standards

## Quality gates (does not pass without these)
- No position opens or scales without a documented risk-adjusted size and the binding limit identified.
- Every limit has a stated calibration source (a scenario, a historical episode, or a mandate constraint) — no magic numbers.
- Aggregate book risk (VaR + expected shortfall) is measured and within budget before any T2+ decision ships per [engagement-tiers.md](../../../kernel/laws/engagement-tiers.md).
- Concentration is measured by factor, not just by name; the factor decomposition is current.
- Every breach is recorded in the [risk-register](../../memory/registers/risk-register.md) before the council adjourns.

## Common mistakes it guards against
- **Conviction-driven sizing** — letting a strong thesis set position size instead of loss tolerance.
- **Diversification theater** — many tickers, one factor; a book that looks spread but is one bet.
- **Stale limits** — limits calibrated to last regime that no longer bind anything.
- **Liquidity blindness** — sizing on entry price while ignoring exit cost in a stressed market.
- **Silent downgrade** — quietly relaxing a limit instead of escalating the breach (forbidden; escalate, never silently loosen).

## Review checklist
- [ ] Binding constraint identified and stated numerically.
- [ ] Worst-plausible-week loss computed with correlations stressed toward one.
- [ ] Factor concentration within cap; no hidden single bet.
- [ ] Liquidity-adjusted exit cost within tolerance.
- [ ] Size is a function of budget, not conviction.
- [ ] Decision and its constraint recorded in the [risk-register](../../memory/registers/risk-register.md) and [investment-decisions](../../memory/registers/investment-decisions.md).

## KPIs (how it is measured)
- Realized drawdowns stay within stated tolerance across the cycle (no surprises beyond the modeled tail).
- Zero undocumented breaches; every breach caught, escalated, and recorded.
- Limit hit-rate in a healthy band — limits bind sometimes (not theater) but not constantly (not strangling the book).
- Forecast loss vs. realized loss calibration (the tail behaves as modeled).

## Risk lens
- **Market & factor risk** — directional, factor, and basis exposure of the aggregate book.
- **Concentration risk** — single name, sector, and hidden-factor concentration.
- **Liquidity risk** — the gap between entry size and stressed exit cost.
- **Leverage & solvency risk** — the book's capacity to survive a sequence of bad weeks.
- **Model risk** — the chance the risk model itself is wrong precisely when it matters; guarded by stress-testing assumptions, not just outputs.
