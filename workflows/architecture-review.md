<!-- Workflow (1 file). Contract: ../kernel/contracts/workflow.md -->

# Workflow: architecture-review
Status: stable
Type: workflow
Owner: CTO
Extends: none

**Purpose:** Vet a structural decision against modularity, reuse, and coherence
before it sets and becomes expensive to undo.
**Default Tier:** [T3](../kernel/laws/engagement-tiers.md)  ·  **Owner:** CTO
**Extends:** none

## Trigger
A proposed structural change — a new boundary, a shared contract, a cross-cutting
pattern — sized [T3](../kernel/laws/engagement-tiers.md). Kernel or shared-contract
changes are **proposed before made** (Directive [#7](../kernel/laws/prime-directives.md)).

## Participants
- [orchestrator](../kernel/protocols/orchestration.md) — frames the proposal, routes.
- Council — debates the structure (Directive [#3](../kernel/laws/prime-directives.md)).
- Up to 15 reviewer agents — assess by concern (boundaries, reuse, blast radius).
- [CTO](../kernel/laws/decision-authority.md) — decides; holds the incoherence veto.

## Inputs
A written proposal: the change, the alternatives, and what it costs to reverse.

## Steps
```
propose ─> [GATE A: proposal complete] ─> review(≤15) ─> deliberate ─> [GATE B: coherent + reversible enough] ─> record
```
1. **Propose** — author — submit the structural change and its trade-offs. `[GATE A]`
2. **Decompose** — orchestrator — assign reviewers by independent concern (≤15).
3. **Review** — reviewers — score against [quality-standards](../shared/quality-standards.md) dimensions 3–5.
4. **Deliberate** — council — weigh findings, recommend.
5. **Decide** — CTO — accept, revise, or reject; check for incoherence. `[GATE B]`
6. **Record** — orchestrator — update the memory registers below.

## Review Gates
- **Gate A — proposal complete:** alternatives and reversal cost stated before
  review (Directive [#7](../kernel/laws/prime-directives.md)).
- **Gate B — coherent + reversible enough:** the structure must inherit not fork
  (Directive [#6](../kernel/laws/prime-directives.md)) and carry a viable exit.

## Approval Process
CTO decides and may veto on technical incoherence; council recommends. See
[decision-authority](../kernel/laws/decision-authority.md). Kernel changes also
need a human maintainer per Directive [#7](../kernel/laws/prime-directives.md).

## Outputs
An accept/revise/reject decision with rationale and, if accepted, a migration note.

## Completion Criteria
- [ ] Proposal complete at Gate A.
- [ ] Reviewed across modularity/reuse/consistency.
- [ ] CTO decision recorded (Gate B); memory registers appended.

## Memory Updates
- [architecture-decisions](../memory/registers/architecture-decisions.md) — the structural decision and rationale.
- [technical-debt](../memory/registers/technical-debt.md) — the boundary/pattern and its trade-offs.
- [lessons-learned](../memory/registers/lessons-learned.md) — what the review surfaced for next time.

## Failure / Rollback
Proposal incomplete → returned, not reviewed. CTO veto → change blocked; author
revises or withdraws. An accepted change later proven wrong → open a new review;
correct the record by adding, never erasing (Directive [#8](../kernel/laws/prime-directives.md)).
