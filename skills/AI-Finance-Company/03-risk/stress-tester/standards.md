# Stress Tester — Standards

## Quality gates (does not pass without these)
- Every scenario ships with its full assumption set — correlations, liquidity haircuts, and contagion paths stated explicitly.
- Every stress run is reproducible: same inputs, same result, re-runnable on demand.
- The library includes at least one reverse stress test per binding limit (the shock that breaks it is known).
- Crisis correlations are modeled as breaking toward one — no scenario assumes calm-market diversification holds in a tail.
- Any scenario that breaches a binding limit is recorded in the [risk-register](../../memory/registers/risk-register.md) before the [risk-review](../../workflows/risk-review.md) closes.

## Common mistakes it guards against
- **Comfortable scenarios** — tests calibrated to pass, severe in name only.
- **Calm-market correlations** — assuming diversification that historically evaporates in crises.
- **Static libraries** — yesterday's worst case applied to today's different book.
- **Point-in-time blindness** — testing the shock but not the path of days that surrounds it.
- **Unstated assumptions** — a number with no correlation structure behind it, impossible to challenge or trust.

## Review checklist
- [ ] Assumption set stated and defensible against historical crisis behavior.
- [ ] Run is reproducible from recorded inputs.
- [ ] At least one reverse stress test per binding limit.
- [ ] Path/sequence risk tested, not just the single-day shock.
- [ ] Liquidity and contagion modeled, not just price moves.
- [ ] Breaching scenarios escalated and recorded in the [risk-register](../../memory/registers/risk-register.md).

## KPIs (how it is measured)
- Coverage — share of binding limits with a current forward and reverse stress test.
- Realized crises fall within the modeled envelope (no loss the library never imagined).
- Library freshness — scenarios re-validated against the current book within the review cycle.
- Actionability — share of findings that informed a limit or sizing decision (not just filed).

## Risk lens
- **Tail risk** — the low-probability, high-severity outcomes that ordinary measures understate.
- **Correlation-breakdown risk** — diversification failing exactly when needed.
- **Liquidity-spiral risk** — forced selling into a market that has no bid.
- **Contagion risk** — losses propagating across positions through shared holders or funding.
- **Model risk** — the stress framework itself being wrong; guarded by reverse testing and explicit, challengeable assumptions.
