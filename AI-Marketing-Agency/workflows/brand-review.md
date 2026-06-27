<!-- Workflow (1 file). Contract: ../../kernel/contracts/workflow.md -->

# Workflow: brand-review
Status: stable
Type: workflow
Owner: strategy-director
Extends: architecture-review

**Purpose:** Review or evolve the agency's (or a client's) brand strategy against
coherence, positioning, and audience truth before it sets and becomes expensive to
undo.
**Default Tier:** [T3](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** strategy-director
**Extends:** stdlib [architecture-review](../../workflows/architecture-review.md)

## Trigger
A proposed change to brand strategy — a repositioning, a new audience, a voice
shift, a brand architecture decision — sized
[T3](../../kernel/laws/engagement-tiers.md). Structural brand changes are **proposed
before made** (Directive [#7](../../kernel/laws/prime-directives.md)). Routine
campaign work stays in [campaign-launch](campaign-launch.md).

## Participants
- [agency-orchestrator](../../kernel/protocols/orchestration.md) — frames the proposal, routes (never executes, Directive [#2](../../kernel/laws/prime-directives.md)).
- [brand-council](../councils/brand-council/) — debates the brand structure (Directive [#3](../../kernel/laws/prime-directives.md)).
- Up to 15 reviewer agents — assess by concern: positioning, audience, voice, channel fit, competitive coherence.
- [strategy-director](../01-executive/strategy-director/) — decides; holds the off-brand/off-strategy veto.
- [ceo](../01-executive/ceo/) — confirms the change fits agency direction.

## Inputs
A written proposal: the brand change, the alternatives, the audience evidence behind
it, and what it costs to reverse.

## Steps
```
propose ─> [GATE A: proposal complete + evidenced] ─> review(≤15) ─> deliberate ─> [GATE B: coherent + reversible enough] ─> record
```
1. **Propose** — author — submit the brand change, its evidence, and its trade-offs. `[GATE A]`
2. **Decompose** — agency-orchestrator — assign reviewers by independent concern (≤15).
3. **Review** — reviewers — score against [quality-standards](../../shared/quality-standards.md) coherence and consistency dimensions.
4. **Deliberate** — brand-council — weigh findings, recommend.
5. **Decide** — strategy-director — accept, revise, or reject; check for incoherence and off-strategy drift. `[GATE B]`
6. **Record** — agency-orchestrator — update the memory registers below.

## Review Gates
- **Gate A — proposal complete + evidenced:** alternatives, audience evidence, and
  reversal cost stated before review (Directive [#7](../../kernel/laws/prime-directives.md)).
  A brand opinion without audience evidence does not pass.
- **Gate B — coherent + reversible enough:** the new strategy must inherit and
  extend the existing brand, not fork it (Directive
  [#6](../../kernel/laws/prime-directives.md)), and carry a viable exit if it fails.

## Approval Process
Strategy-director decides and may veto on incoherence or off-strategy drift;
brand-council recommends; CEO confirms direction fit. See
[decision-authority](../../kernel/laws/decision-authority.md). The change is
**proposed before made** per Directive [#7](../../kernel/laws/prime-directives.md).

## Outputs
An accept/revise/reject decision with rationale and, if accepted, a migration note
for in-flight campaigns affected by the brand change.

## Completion Criteria
- [ ] Proposal complete and evidenced at Gate A.
- [ ] Reviewed across positioning, audience, voice, and coherence.
- [ ] Strategy-director decision recorded (Gate B); memory registers appended.

## Memory Updates
- [brand-decisions](../memory/registers/brand-decisions.md) — the binding brand/positioning decision and its rationale.
- [audience-insights](../memory/registers/audience-insights.md) — audience evidence and hypotheses surfaced by the review.
- [campaign-results](../memory/registers/campaign-results.md) — implications for campaigns already running under the old brand.

## Failure / Rollback
Proposal incomplete or unevidenced → returned, not reviewed. Strategy-director veto →
change blocked; author revises or withdraws. An accepted brand change later proven
wrong → open a new brand-review; correct the record by adding, never erasing
(Directive [#8](../../kernel/laws/prime-directives.md)).
