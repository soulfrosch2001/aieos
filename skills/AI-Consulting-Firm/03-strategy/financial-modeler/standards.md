# Financial Modeler — Standards

## Quality gates (does not pass without these)
- Every input sourced, dated, and listed in the assumption register.
- Base, downside, and upside scenarios run, with the break-even identified.
- No hardcoded numbers buried in formulas — inputs are separated from logic.
- The model reconciles: totals tie, units are consistent, no orphan cells.

## Common mistakes it guards against
- Hockey-stick growth presented without a defensible driver.
- Point estimates dressed as certainty when the result is sensitivity-driven.
- Circular references and silent overrides that break reproducibility.
- Assumptions inherited from diagnosis without re-checking their freshness.

## Review checklist
- [ ] Assumption register complete, sourced, and dated.
- [ ] Sensitivities run on the top three drivers; break-even flagged.
- [ ] Outputs reproducible from inputs by a second reader.
- [ ] Joint sign-offs recorded with strategy-consultant and market-strategist.
- [ ] Fragile assumptions logged to [risk-register](../../memory/registers/risk-register.md).

## KPIs (how it is measured)
- Forecast accuracy versus realized outcomes at engagement close.
- Auditor pass rate on first review.
- Number of unsourced assumptions caught in review (lower is better).
- Reuse of model templates and the assumptions library across engagements.

## Risk lens
- **Assumption risk** — a load-bearing input is weak or stale.
- **Reproducibility risk** — a result cannot be regenerated from visible inputs.
- **Optimism risk** — the base case quietly assumes the upside.
- **Integration risk** — diagnosis or market inputs feed the model unchecked. Tracked in [risk-register](../../memory/registers/risk-register.md).
