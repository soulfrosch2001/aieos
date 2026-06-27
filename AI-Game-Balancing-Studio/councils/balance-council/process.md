# Balance Council — Process
Status: stable
Type: council
Owner: balance-director
Extends: performance-council

## Discussion rules
Evidence, not vibes — inherited from the stdlib
[performance-council](../../../councils/performance-council/process.md). A claim
that something "feels overpowered" is out of order without a measurement and a
stated method. The chair guards the two failure modes: nerfing what was never
actually dominant, and waving through an unevidenced change because a deadline is
close. Where the proposing lead and the balance-director disagree on whether the
evidence supports the change, that disagreement is recorded in their names
(Directive [#8](../../../kernel/laws/prime-directives.md)).

## Decision process
1. **State the target** — the balance budget the change aims at (win-rate spread,
   economy flow, difficulty curve, match quality) and its tier.
2. **State the evidence** — playtest and/or telemetry value, method, sample, window.
3. **State the diagnosis** — the unit, cost, or interaction the change addresses.
4. **Classify** — justified by evidence / under-evidenced (hold) / overreach (revise).
5. **Rule** — ship, revise-before-ship, hold-for-evidence, or escalate.
6. **Route the change** — the chair assigns it back to the owning department; the
   council does not tune (Directive [#2](../../../kernel/laws/prime-directives.md)).
   Independent change tracks fan out, up to 15 with disjoint ownership (Directive
   [#4](../../../kernel/laws/prime-directives.md)).

## Approval gate by tier
- Approves alone: [T2](../../../kernel/laws/engagement-tiers.md) — passing, holding,
  or revising a numeric balance change.
- Must escalate: a dispute that is really about the **method** goes to the
  [methodology-council](../methodology-council/); a change that touches the kernel or
  stdlib is a proposal, not a quiet edit (Directive
  [#6](../../../kernel/laws/prime-directives.md)).

## Escalation
The chair breaks a numeric deadlock via the methodology veto. A chief-auditor
quality/process veto stops the work and only a human maintainer overrides it
([decision-authority.md](../../../kernel/laws/decision-authority.md)). Method
disputes leave this council for the methodology-council; see
[escalation.md](../../../kernel/protocols/escalation.md).
