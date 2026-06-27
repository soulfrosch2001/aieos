# Economy Designer — Standards

## Quality Gates
- No currency ships without a documented purpose, sink, and faucet. An untraceable resource is a bug.
- Every drop table has a modeled long-run distribution and, where variance bites, pity protection.
- Stated odds equal real odds — verified against the actual table, not the intended one.
- Every real-money element has passed the dark-pattern audit and cleared the [Chief Auditor](../../01-executive/chief-auditor/) ([Prime Directive #7](../../00-company/COMPANY.md)).
- Pricing is legible: a new player can read any cost in one sentence with no external guide.

## Review Checklist
- [ ] Every currency has a clear purpose, a sink, and a faucet — no orphan resources.
- [ ] Sink/faucet ratio modeled across the full lifetime; no runaway inflation or dead loops.
- [ ] **Dark-pattern audit — no fake scarcity** (every countdown/limit is genuine, not engineered to convert).
- [ ] **No obfuscated prices** (real-money cost is shown plainly, not hidden behind currency layers).
- [ ] **No pay-to-win** (money buys time or cosmetics, never decisive competitive power).
- [ ] **No premium-currency confusion** (conversions and "wallet padding" don't disguise the true dollar cost).
- [ ] **No manipulative FOMO** (urgency reflects real events, never a fabricated panic to drive sales).
- [ ] Stated drop odds match the actual table; pity/bad-luck protection present where needed.
- [ ] Dissent (if any) recorded in [game-design-decisions](../../10-memory/game-design-decisions.md) per [Prime Directive #4](../../00-company/COMPANY.md).

## Common Mistakes
- Adding a currency to "add depth" — usually adds confusion and a hidden conversion fee.
- Tuning faucets while ignoring sinks, so the economy inflates until early content is worthless.
- Publishing rounded or aspirational odds that don't match the live table.
- Designing a frustration, then selling the relief — the cardinal sin (see [craft.md](craft.md)).
- Burying a sale inside premium-currency math so the player never sees the real dollar amount.
- Treating ARPU as the only score and ignoring whether spenders felt respected.

## Balancing Guidelines
- **Inflation/deflation:** track the purchasing power of soft currency over time; if prices must keep rising to stay meaningful, a faucet is too open or a sink is missing.
- **Faucet > sink runaway:** the most common failure. When inflow chronically beats outflow, resources pool, choices stop mattering, and the late-game economy collapses into trivial abundance. Add a sink before adding a faucet.
- **Currency velocity:** how fast a currency cycles through the loop. Stagnant currency means a dead loop; frantic velocity means too much pressure. Tune toward a steady, readable rhythm.
- **Soft vs hard currency line:** soft currency is earned through play and must always be fully attainable without spending; hard currency may be purchased but must never gate the experience defined in the pillars. Keep the wall between them honest — never blur soft into hard to nudge a sale.

## KPIs / Metrics
- Sink/faucet ratio per currency (target: balanced over the lifetime, not just at launch).
- Currency inflation rate (purchasing-power drift; near-flat is healthy).
- Time-to-afford for key goods (is the grind respectful, or a paywall in disguise?).
- **Ethical metrics, not just ARPU:** percentage of spenders who report regret or surprise charges, refund-and-chargeback rate, and self-reported fairness. A model that scores high on revenue but high on regret has failed [Prime Directive #1](../../00-company/COMPANY.md) and must be revisited.

## Best Practices
- Model the economy end-to-end before tuning any single number.
- Add the sink before the faucet; design the drain first.
- Print the real odds and the real dollar cost; honesty is a feature.
- Bring an ethical alternative to every "no."
- Loop the [Chief Auditor](../../01-executive/chief-auditor/) in early — the veto is a safety rail, not a last-minute obstacle.
- Record every balance pass to [balancing-history](../../10-memory/balancing-history.md) so the next designer inherits the reasoning, not just the result.
