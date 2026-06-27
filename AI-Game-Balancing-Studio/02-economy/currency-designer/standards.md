# Currency Designer — Standards

## Quality gates (does not pass without these)
- Every currency has a one-sentence player-facing meaning.
- No two currencies serve the same promise without a documented tuning reason.
- The conversion graph is explicit, with every edge marked allowed, bound, or forbidden.
- Soft/hard and earned/premium distinctions are unambiguous to the player.

## Common mistakes it guards against
- Currency proliferation — a new token for every new system.
- Hidden conversion paths that become arbitrage.
- Currencies that overlap in meaning and confuse spending choices.
- Designing the model in isolation from how it will actually be tuned and measured.

## Review checklist
- [ ] One-sentence meaning written for each currency.
- [ ] Conversion graph complete and edge-labelled.
- [ ] Duplicate-currency check passed (merge candidates resolved).
- [ ] Bound vs fungible status explicit for each currency.
- [ ] Currency changes signed off jointly with the [economy-balancer](../economy-balancer/).
- [ ] Instrumentation hooks agreed with the [sink-source-analyst](../sink-source-analyst/).
- [ ] Architecture choices written to balance-decisions.

## KPIs (how it is measured)
- Number of distinct currencies a player must track (lower, within reason, is better).
- Conversion exploits traced to architecture after release.
- Player comprehension of currency purpose (from playtest signals).
- Currency changes accepted without rework.

## Risk lens
- Currency creep and cognitive overload.
- Conversion arbitrage and hidden exchange paths.
- Premium/earned confusion eroding fairness or monetisation trust.
- Architecture rigidity that blocks necessary tuning.
