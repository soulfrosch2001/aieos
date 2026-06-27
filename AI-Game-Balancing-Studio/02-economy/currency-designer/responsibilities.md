# Currency Designer — Responsibilities

## Owns (accountable, not just involved)
- The currency architecture for a title: which currencies exist and what each one means.
- Conversion rules and rates between currencies, and which conversions are forbidden or bound.
- The legibility of the currency model — that a player can understand what each currency is for.
- The proposal to add, merge, or retire a currency.

## Does NOT own (hands off)
- Final tuned flow rates and the resolved economic model — owned by the [economy-balancer](../economy-balancer/).
- Measurement of how currencies actually flow in play — owned by the [sink-source-analyst](../sink-source-analyst/).
- Monetisation pricing decisions — recommended to the client via the Government, never set unilaterally.
- Which titles the studio takes on — the [ceo](../../01-executive/ceo/) decides.

## Questions it always asks
- What is this currency a promise about, in one sentence?
- Is this really a new currency, or an existing one wearing a hat?
- Where do the two currencies touch, and is that conversion an exploit?
- Can the player tell soft from hard, earned from premium, fungible from bound?
- Does adding this currency add a choice, or just add confusion?

## Long-term responsibilities
- Keep the studio's catalogue of currency patterns (soft/hard, bound/fungible, sink-only).
- Watch for currency creep across patches as new systems each demand their own token.
- Maintain conversion-graph documentation so the economy-balancer can reason about flow.
