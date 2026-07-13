<!-- Workflow (1 file). Contract: ../../kernel/contracts/workflow.md -->

# Workflow: risk-review
Status: stable
Type: workflow
Owner: Chief Compliance Auditor
Extends: security-review

**Purpose:** Review risk posture before and after a position — and block it until
every material exposure is sized, owned, or accepted on the record.
**Default Tier:** [T3](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** Chief Compliance Auditor
**Extends:** [security-review](../../workflows/security-review.md)

## Trigger
A position that moves the firm's risk boundaries — concentration, leverage,
liquidity, drawdown, or regulatory exposure — sized
[T3](../../kernel/laws/engagement-tiers.md). A live limit breach is not a review:
it escalates immediately as a crisis (T4) per [escalation](../../kernel/protocols/escalation.md).

## Participants
- [finance-orchestrator](../01-executive/finance-orchestrator/) — frames scope, routes; never makes the call ([Directive #2](../../kernel/laws/prime-directives.md)).
- Up to 15 [risk](../03-risk/) agents — model exposures by surface (concentration, factor, liquidity, scenario), in parallel.
- [risk-council](../councils/risk-council/) — adjudicates accepted risk.
- [Chief Compliance Auditor](../01-executive/chief-compliance-auditor/) — owns Gate B and the absolute compliance/quality veto.

## Inputs
The position (proposed or held), the book it joins, the firm's risk limits, and
the regulatory constraints that bind it.

## Steps
```
scope ─> [GATE A: risk model + limits agreed] ─> assess(≤15) ─> triage ─> [GATE B: no unowned exposure + within limits] ─> record
```
1. **Scope** — finance-orchestrator — enumerate exposures and the limits they touch. `[GATE A]`
2. **Decompose** — finance-orchestrator — assign exposure surfaces to risk agents (≤15).
3. **Assess** — [risk-manager](../03-risk/risk-manager/), [portfolio-manager](../03-risk/), [stress-tester](../03-risk/) — probe each surface; run scenarios and stress paths.
4. **Triage** — [risk-council](../councils/risk-council/) — rank findings by severity; assign owners; mark limit breaches.
5. **Clear** — Chief Compliance Auditor — confirm no unowned exposure and no limit violation remains. `[GATE B]`
6. **Record** — finance-orchestrator — update the memory registers below.

## Review Gates
- **Gate A — risk model + limits agreed:** exposures and the limits in play are
  explicit before assessment; an unscoped review misses what it never modeled.
- **Gate B — no unowned exposure + within limits:** every finding is mitigated or
  has a named owner and an accepted-risk record, and no firm limit is breached.
  Unowned exposure or a breach blocks the position
  ([Directive #9](../../kernel/laws/prime-directives.md)).

## Approval Process
The [Chief Compliance Auditor](../01-executive/chief-compliance-auditor/) clears Gate B
and may veto outright (regulated domain, absolute veto, see
[decision-authority](../../kernel/laws/decision-authority.md)). Accepted risk requires
[risk-council](../councils/risk-council/) sign-off; only a human maintainer overrides
an Auditor veto. The [risk-manager](../03-risk/risk-manager/) chairs the council but
cannot waive a compliance veto.

## Outputs
A risk findings list with severities, mitigations or owned-risk records, a
limits-compliance note, and the clearance (or block) decision.

## Completion Criteria
- [ ] Risk model and limits agreed at Gate A.
- [ ] Every exposure surface assessed; findings triaged.
- [ ] No unowned exposure and no limit breach (Gate B); memory registers appended.

## Memory Updates
- [risk-register](../memory/registers/risk-register.md) — exposures, severity, mitigations, owners, dated.
- [compliance-log](../memory/registers/compliance-log.md) — limit checks performed, breaches, and remediations.
- [investment-decisions](../memory/registers/investment-decisions.md) — any risk explicitly accepted and by whom.

## Failure / Rollback
High-severity exposure with no mitigation or owner → position blocked. Risk model
proven incomplete mid-review → re-scope and re-fan-out. A limit breach discovered
live → escalate immediately as a crisis ([escalation](../../kernel/protocols/escalation.md)).
