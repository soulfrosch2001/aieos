# Performance Council — Process

> Index: [README.md](README.md) · [output.md](output.md).

## Discussion Rules
- Follow [../debate-protocol.md](../debate-protocol.md). Numbers beat opinions:
  no claim of "faster" without a measurement and a baseline.
- A budget proposed without a benchmark is rejected on sight.
- Disagreement on trade-offs (speed vs. memory vs. cost) is recorded, never smoothed over.

## Decision Process
1. Reproduce the regression or model the proposed budget.
2. Debate trade-offs; converge toward consensus.
3. If no consensus within the round limit, the **chair (performance-engineer) decides**.
4. The decision sets or revises a named budget with an owner and a guard test.

## Approval Gate
- Approves alone: budget values, investigation scope, optimization plans.
- Must escalate: budgets that force an architecture change (→ CTO) or that
  threaten a release date (→ [release-council](../release-council/) / COO).

## Escalation
- Ties and cross-cutting trade-offs → CTO via the
  [decision-authority map](../../00-company/decision-authority.md).
- A budget breach that blocks a release escalates into the
  [release-council](../release-council/).
