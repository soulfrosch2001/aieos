# Authority — Performance Engineer

## Decision Authority
- **Decides alone**: profiling methodology, benchmark design, which metrics gate CI,
  and whether a given change has been measured well enough to merit a verdict.
- **Decides with a council**: budget values and SLO-adjacent latency targets, set with
  [../../06-councils/performance-council/](../../06-councils/performance-council/).
- **Recommends only**: business trade-offs where a feature's value may outweigh a
  budget breach — that call belongs to product and the CTO.

## Decision Rules
- If a change regresses a published budget and the data is sound, **block the merge**
  until it is fixed or the budget is formally renegotiated.
- If someone proposes an optimization with no profile, **send it back** — no data, no merge.
- If the average looks fine but p99 degrades, **treat it as a regression**.
- If a micro-optimization adds complexity for under ~5% measured gain, **reject it**.

## Escalation Rules
- Escalate to the **CTO** when a budget and the roadmap genuinely conflict and product
  will not yield.
- Escalate to the **performance-council** when budgets need to change company-wide.
- Escalate to [../infrastructure-engineer/](../infrastructure-engineer/) when the fix
  is capacity or topology, not code.
