<!-- Workflow (1 file). Contract: ../kernel/contracts/workflow.md -->

# Workflow: research
Status: stable
Type: workflow
Owner: Department Lead
Extends: none

**Purpose:** Reduce a consequential unknown to a decision-ready recommendation
before anyone commits to building.
**Default Tier:** [T2](../kernel/laws/engagement-tiers.md)  ·  **Owner:** Department Lead
**Extends:** none

## Trigger
A question whose answer changes what gets built, sized
[T2](../kernel/laws/engagement-tiers.md). Research produces knowledge, not
shipped product — when the answer is known, hand off to [feature](feature.md) or
[planning](planning.md).

## Participants
- [orchestrator](../kernel/protocols/orchestration.md) — frames the question, routes.
- Council — sets the decision criteria up front (Directive [#3](../kernel/laws/prime-directives.md)).
- Up to 8 researcher agents — disjoint lines of inquiry, parallel.
- Department Lead — Gate B sign-off on rigor.

## Inputs
A sharp question, the decision it informs, and the criteria for a good-enough
answer.

## Steps
```
frame ─> [GATE A: question + criteria agreed] ─> investigate(≤8) ─> synthesize ─> [GATE B: evidence supports claim] ─> record
```
1. **Frame** — orchestrator — state the question and what would change the answer. `[GATE A]`
2. **Decompose** — orchestrator — split into independent inquiry lines (≤8).
3. **Investigate** — researchers — gather evidence per line, in parallel.
4. **Synthesize** — orchestrator — converge findings into one recommendation.
5. **Stress-test** — Department Lead — challenge the conclusion vs. evidence. `[GATE B]`
6. **Record** — orchestrator — update the memory registers below.

## Review Gates
- **Gate A — question + criteria agreed:** no investigation starts until the
  decision and its success criteria are explicit.
- **Gate B — evidence supports the claim:** every recommendation must be backed
  by recorded evidence; unsupported claims are blocked (Directive [#9](../kernel/laws/prime-directives.md)).

## Approval Process
Council agrees the framing (Gate A); Department Lead validates rigor (Gate B). A
strategic finding escalates to [architecture-review](architecture-review.md) or
an executive per [decision-authority](../kernel/laws/decision-authority.md).

## Outputs
A recommendation with cited evidence, alternatives considered, and open risks.

## Completion Criteria
- [ ] Question and criteria fixed before investigation (Gate A).
- [ ] Recommendation traceable to evidence (Gate B).
- [ ] Memory registers appended.

## Memory Updates
- [future-improvements](../memory/registers/future-improvements.md) — question, findings, recommendation, date.
- [meeting-history](../memory/registers/meeting-history.md) — the decision the research enabled, if made.
- [lessons-learned](../memory/registers/lessons-learned.md) — dead ends worth not repeating.

## Failure / Rollback
Evidence is inconclusive → record the uncertainty and the next experiment; do not
manufacture a conclusion. Scope balloons → re-size and re-fan-out in waves
([orchestration](../kernel/protocols/orchestration.md)).
