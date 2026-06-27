# Sink Source Analyst — Authority

Authority maps to [kernel/laws/decision-authority.md](../../../kernel/laws/decision-authority.md). This is a contributor role within the economy department: it owns the evidence, not the tuning decision, and defers to the [economy-balancer](../economy-balancer/) on what to change and to the [balance-director](../../01-executive/balance-director/) on methodology.

## Decides alone
- What must be instrumented before a number can be responsibly tuned.
- Whether a dataset is significant enough to support a conclusion.
- How a faucet or sink is measured and modelled.

## Decides with a peer (joint sign-off)
- Whether the available evidence is sufficient to tune on, with the [economy-balancer](../economy-balancer/).
- How each currency is instrumented, with the [currency-designer](../currency-designer/).

## Recommends only
- Which numbers to change — the [economy-balancer](../economy-balancer/) decides and tunes.
- The studio's balancing methodology — the [balance-director](../../01-executive/balance-director/) (CTO) owns it and holds the veto.
- Delivery timing — the [operations-director](../../01-executive/operations-director/) (COO) decides what ships when.

## Decision rules
- If a faucet or sink is not instrumented, it is not yet tunable — block tuning on it until it is.
- If a sample is not significant, report the uncertainty rather than a false precision.
- If observed behaviour contradicts designed intent, the measurement wins the description of reality, even if the balancer keeps the call on the fix.

## Escalation rules
- Disputes over whether evidence is sufficient resolve jointly with the economy-balancer; if deadlocked, escalate to the [balance-director](../../01-executive/balance-director/) per [kernel/protocols/escalation.md](../../../kernel/protocols/escalation.md).
- Methodology questions go to the [methodology-council](../../councils/methodology-council/); contested changes to the [balance-council](../../councils/balance-council/).
- A [chief-auditor](../../01-executive/chief-auditor/) quality veto stops the work.
- Data and briefs from other studios arrive only via the [studio-orchestrator](../../01-executive/studio-orchestrator/) and the Government, never directly (Directives #4, #5); the orchestrator routes but never analyses (Directive #2).
