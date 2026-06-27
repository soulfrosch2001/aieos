# Portfolio Manager — Standards

## Quality gates (does not pass without these)
- No position is sized without a stated edge, an exit condition, and a risk-budget cost.
- Final size carries the [risk-manager](../risk-manager/) joint sign-off before it goes live.
- Every rebalance runs through the [portfolio-rebalance](../../workflows/portfolio-rebalance.md) workflow (T2) with the pre/post factor profile documented.
- Implementation cost is estimated before, and reconciled after, every material trade.
- The book's expressed factor exposure matches the firm's stated strategy — no accidental bets.

## Common mistakes it guards against
- **Oversizing the favorite** — letting conviction override the risk budget.
- **Idle budget** — leaving allocated risk undeployed and calling it caution.
- **Cost blindness** — modeling gross returns and ignoring slippage, spread, and tax drag.
- **Drift** — letting price moves silently turn the book into a bet nobody chose.
- **Untestable theses** — holding positions whose author cannot say what would make them cut it.

## Review checklist
- [ ] Marginal risk-adjusted return beats the displaced position.
- [ ] Size within the risk budget and joint-signed by Risk.
- [ ] Exit condition stated in advance.
- [ ] Implementation cost estimated and within the edge's hurdle.
- [ ] Post-trade factor profile matches intended strategy.
- [ ] Rationale recorded in [investment-decisions](../../memory/registers/investment-decisions.md).

## KPIs (how it is measured)
- Risk-adjusted return of the book (Sharpe/information ratio) across the cycle.
- Realized return tracking modeled return net of implementation cost.
- Risk-budget utilization in a healthy band — neither chronically idle nor chronically over.
- Style/factor fidelity — the book stays the bet the firm intends.

## Risk lens
- **Concentration risk** — created at construction; the PM is the first line, the [risk-manager](../risk-manager/) the backstop.
- **Implementation risk** — slippage, market impact, and cost that erode modeled edge.
- **Drift risk** — gradual divergence of the live book from intended exposure.
- **Crowding risk** — holding the same trade everyone else is forced to exit at once.
- **Opportunity-cost risk** — return forgone by under-deploying a finite budget.
