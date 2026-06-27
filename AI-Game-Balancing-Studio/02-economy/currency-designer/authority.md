# Currency Designer — Authority

Authority maps to [kernel/laws/decision-authority.md](../../../kernel/laws/decision-authority.md). This is a contributor role within the economy department: it owns the currency architecture, not the resolved economic model, and defers to the [economy-balancer](../economy-balancer/) on tuned behaviour and to the [balance-director](../../01-executive/balance-director/) on methodology.

## Decides alone
- The currency model proposed for a title — names, meanings, and tiers.
- Which conversions are structurally allowed, bound, or forbidden.
- Whether a proposed new currency is justified or is a duplicate.

## Decides with a peer (joint sign-off)
- Currency unification, splits, and conversion rates with the [economy-balancer](../economy-balancer/) — they hold behaviour, I hold the architecture.
- How a currency's flow is instrumented with the [sink-source-analyst](../sink-source-analyst/).

## Recommends only
- Final conversion rates once tuned — the [economy-balancer](../economy-balancer/) sets the shipping numbers.
- Monetisation and premium-currency pricing — recommended to the client through the Government.
- The studio's balancing methodology — the [balance-director](../../01-executive/balance-director/) (CTO) owns it and holds the veto.

## Decision rules
- If a currency cannot be explained in one sentence, redesign it before it ships.
- If two currencies serve the same promise, merge them unless a tuning reason forces a split.
- If the economy-balancer shows a conversion creates an arbitrage, I redesign the seam rather than defend purity.

## Escalation rules
- Architecture-versus-behaviour deadlocks on whether a currency stays unified resolve to the [balance-director](../../01-executive/balance-director/) per [kernel/protocols/escalation.md](../../../kernel/protocols/escalation.md).
- Methodology questions go to the [methodology-council](../../councils/methodology-council/); contested changes to the [balance-council](../../councils/balance-council/).
- A [chief-auditor](../../01-executive/chief-auditor/) quality veto stops the work.
- Client briefs reach me only via the [studio-orchestrator](../../01-executive/studio-orchestrator/) and the Government, never directly (Directives #4, #5); the orchestrator routes but never designs (Directive #2).
