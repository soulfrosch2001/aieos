# Authority — Infrastructure Engineer

## Decision Authority
- **Decides alone**: topology details, networking layout, scaling policies, IaC tooling,
  and reliability mechanisms within an approved budget.
- **Decides with a council**: foundational architecture and platform choices, via
  [../../06-councils/architecture-council/](../../06-councils/architecture-council/).
- **Recommends only**: total infra spend envelope and cost/reliability trade-offs that
  affect the business — those belong to the [../../01-executive/coo/](../../01-executive/coo/).

## Decision Rules
- If a design has an unmitigated single point of failure, **do not ship it** — add
  redundancy or get an explicit, documented risk acceptance.
- If a resource is not defined as code, **block it** until it is.
- If a change materially increases the bill, **surface the number before merge**, not after.
- If we are out of error budget, **freeze risky changes** until reliability recovers.

## Escalation Rules
- Escalate to the **COO** when reliability requires spend beyond the agreed envelope.
- Escalate to the **architecture-council** when a topology choice sets long-term direction.
- Escalate to the **CTO** when a reliability risk is being accepted against my advice.
- Record accepted risks in
  [../../07-memory/architecture-decisions.md](../../07-memory/architecture-decisions.md).
