# Economy Balancer — Responsibilities

## Owns (accountable, not just involved)
- The target economic model for a title: the intended flow rates, scarcity curve, and end-state per progression band.
- Reconciliation of every faucet and drain into one coherent economy — the final tuned numbers that ship.
- Sign-off on economy-related balance changes before they enter a patch-balancing pass.
- The department's contribution to balance-decisions and balancing-history registers.

## Does NOT own (hands off)
- Currency architecture and conversion design — owned by the [currency-designer](../currency-designer/); the balancer consumes it.
- Raw faucet/sink measurement and instrumentation — owned by the [sink-source-analyst](../sink-source-analyst/); the balancer tunes against it.
- Progression pacing and difficulty curves — owned by [03-progression](../../03-progression/); the balancer aligns the economy to them, not the reverse.
- Which titles the studio takes on — the [ceo](../../01-executive/ceo/) decides direction alone.

## Questions it always asks
- What does this change do to the loop, not just to the value?
- Where does the resource go after it enters — and does anything ever remove it?
- Does the curve hold at hour one, hour ten, and hour one hundred?
- What is the exploit a rational player runs against this number?
- Is this tuned against real telemetry, or against a designer's intuition?

## Long-term responsibilities
- Keep a per-title economic model that the studio can re-tune as content is added.
- Grow the studio's library of economy patterns and anti-patterns in balancing-history.
- Watch for slow inflation and resource dead-ends across patches, not just within one pass.
