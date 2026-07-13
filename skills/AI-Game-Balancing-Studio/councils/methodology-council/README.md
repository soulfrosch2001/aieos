# Methodology Council
Status: stable
Type: council
Owner: ceo
Extends: architecture-council

## Purpose
The body that **adjudicates the balancing methodology and standards** — the method
by which the studio decides what evidence counts, how a change is justified, and
what "balanced" means for a title. It answers: *is this the right way to reach
balance decisions, and what are we deliberately trading away to use it?* It extends
the stdlib [architecture-council](../../../councils/architecture-council/),
substituting the balancing method for cross-cutting technical design. It **decides,
it never tunes** (Directive [#2](../../../kernel/laws/prime-directives.md)).

## Out of scope
- Whether a **specific number** is justified — that is the
  [balance-council](../balance-council/).
- **What ships when** — that is the operations-director.
- Writing any tuning — a council never builds (Directive
  [#2](../../../kernel/laws/prime-directives.md)).

## Participants
- **Chair** (breaks deadlocks): **ceo** — sets direction and which titles the
  studio balances, bound to the CEO authority level in
  [decision-authority.md](../../../kernel/laws/decision-authority.md).
- **Core** (must attend): the balance-director (owns the methodology and holds its
  veto) and the department leads (economy-balancer, progression-balancer,
  meta-analyst).
- **Advisory** (as needed): the chief-auditor (quality/process veto, never directs)
  and the operations-director when a method change affects delivery.

## When convened
At [T3](../../../kernel/laws/engagement-tiers.md) — a strategic, cross-department
question about how the studio balances — per
[engagement-tiers.md](../../../kernel/laws/engagement-tiers.md). T3 requires council
**plus executive** sign-off. Convened for one question, then disbanded; not standing.

## Inputs
- The methodology question and its tier.
- At least **two viable method options** with their trade-offs.
- The blast radius — which past balance decisions a method change would invalidate.
- Prior method decisions from the
  [balance-decisions](../../memory/registers/balance-decisions.md) register.

## Index
- [process.md](process.md)
- [output.md](output.md)
