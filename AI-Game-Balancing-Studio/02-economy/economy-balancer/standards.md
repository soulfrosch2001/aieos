# Economy Balancer — Standards

## Quality gates (does not pass without these)
- Every shipped number traces to telemetry or an explicitly stated model assumption.
- The faucet/sink ledger nets out: no resource enters with no eventual drain.
- The economy is projected and shown to hold at early, mid, and late progression bands.
- At least one exploit/arbitrage check has been run against each new value or conversion.

## Common mistakes it guards against
- Tuning a value in isolation while ignoring the loop it sits in.
- Trusting a clean currency model that creates an arbitrage once players can convert.
- Confusing "feels fair in a designer's playthrough" with "holds across a season of telemetry."
- Silent inflation: faucets widened over patches with no matching drain.

## Review checklist
- [ ] Net flow modelled over time, not just instantaneous values.
- [ ] Every faucet has a named, sufficient sink.
- [ ] Telemetry source cited, or assumption flagged.
- [ ] Exploit/arbitrage pass completed and logged.
- [ ] Currency changes signed off jointly with the [currency-designer](../currency-designer/).
- [ ] Economy/progression seam reconciled with [03-progression](../../03-progression/).
- [ ] Binding choices written to balance-decisions.

## KPIs (how it is measured)
- Stability of the resource curve across patches (low unintended inflation/deflation).
- Exploit incidents traced to economy tuning after release (lower is better).
- Share of shipped numbers backed by evidence rather than intuition.
- Client-accepted economy passes versus reopened ones.

## Risk lens
- Inflation and resource pooling.
- Conversion arbitrage and currency exploits.
- Grind walls and dead-end resources that kill motivation.
- Monetisation pressure distorting a fair economy.
