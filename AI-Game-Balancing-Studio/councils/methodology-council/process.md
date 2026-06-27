# Methodology Council — Process
Status: stable
Type: council
Owner: ceo
Extends: architecture-council

## Discussion rules
Inherited from the stdlib
[architecture-council](../../../councils/architecture-council/) and adapted to
method: the council weighs **at least two viable methods and names what each trades
away** — a single proposal with no alternative is not a decision, it is a default.
Dissent is recorded, never suppressed (Directive
[#8](../../../kernel/laws/prime-directives.md)). The chair keeps the debate on
*method* and refuses to let it collapse into arguing one specific number — that
belongs to the [balance-council](../balance-council/).

## Decision process
1. **Frame the question** — what about the balancing method is in dispute, and its
   tier.
2. **Lay out options** — at least two methods, each with trade-offs and blast radius.
3. **Test soundness** — does the method produce evidence the balance-council can
   actually act on? The balance-director's methodology veto applies here.
4. **Decide** — adopt / adopt-with-conditions / reject / escalate.
5. **State the blast radius** — which prior balance decisions the change re-opens.
6. **Route, never tune** — the chair assigns the rollout; the council does not
   implement (Directive [#2](../../../kernel/laws/prime-directives.md)). Independent
   rollout tracks fan out up to 15 with disjoint ownership (Directive
   [#4](../../../kernel/laws/prime-directives.md)).

## Approval gate by tier
- Approves alone: nothing — [T3](../../../kernel/laws/engagement-tiers.md) requires
  **council plus executive (ceo) sign-off**, per
  [engagement-tiers.md](../../../kernel/laws/engagement-tiers.md).
- Must escalate: a method change that touches the **kernel or stdlib** is a proposal,
  not a quiet edit (Directive [#6](../../../kernel/laws/prime-directives.md)); a
  serving-relationship change with another studio goes through the **Government**,
  never studio-to-studio (Directive
  [#5](../../../kernel/laws/prime-directives.md)).

## Escalation
The chair (ceo) breaks deadlocks. A balance-director methodology veto blocks an
unsound method; a chief-auditor quality/process veto stops the work and only a human
maintainer overrides it
([decision-authority.md](../../../kernel/laws/decision-authority.md)). See
[escalation.md](../../../kernel/protocols/escalation.md).
