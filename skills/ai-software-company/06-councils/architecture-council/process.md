# Architecture Council — Process

## Discussion Rules
Follow [../debate-protocol.md](../debate-protocol.md). Every option must have a
named owner who argues it honestly; fake consensus is a defect. Dissent is
recorded, never suppressed.

## Decision Process
1. The chair frames the decision and the constraints.
2. Each core member states a position with reasoning.
3. Seek consensus on the trade-off, not the preference.
4. If consensus fails, the **CTO decides** as chair and records why.
5. Reversibility check: prefer the option that is cheapest to undo when uncertain.

## Approval Gate
- **Approves alone:** T2 structural changes within an existing service.
- **Must escalate:** T3 — new service, irreversible bets, or anything crossing
  the technical-risk threshold needs CTO executive sign-off
  (chair acts in that role) and may require COO delivery review.

## Escalation
- Technical deadlock → CTO as chair decides.
- Cross-department conflict (value vs. build) →
  [Executive Orchestrator](../../01-executive/executive-orchestrator/), then CEO
  for value, CTO for technical risk. See
  [../../00-company/decision-authority.md](../../00-company/decision-authority.md).
- Security objection → [security-council](../security-council/); the Chief
  Auditor may block regardless of tier.
