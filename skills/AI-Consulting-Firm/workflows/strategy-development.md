<!-- Workflow (1 file). Contract: ../../kernel/contracts/workflow.md -->

# Workflow: strategy-development
Status: stable
Type: workflow
Owner: engagement-director
Extends: feature

**Purpose:** Build and defend a strategy recommendation — from diagnosed problem
to a decided, sourced, and pressure-tested course of action.
**Default Tier:** [T2](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** engagement-director
**Extends:** stdlib [feature](../../workflows/feature.md)

## Trigger
A scoped engagement ([engagement-scoping](engagement-scoping.md)) whose diagnosis
is complete and which now needs a recommendation. Sized
[T2](../../kernel/laws/engagement-tiers.md) by default.

## Participants
- [strategy-consultant](../03-strategy/strategy-consultant/) — owns the recommendation and its logic.
- [financial-modeler](../03-strategy/financial-modeler/) — owns the numbers behind each option.
- [market-strategist](../03-strategy/market-strategist/) — owns the external/market case.
- [engagement-council](../councils/engagement-council/) — pressure-tests the approach before the recommendation is set.
- [engagement-director](../01-executive/engagement-director/) — Gate A method ruling and methodology veto.
- [chief-auditor](../01-executive/chief-auditor/) — Gate B quality veto on sourcing and rigor.

## Inputs
A completed diagnosis with traceable evidence, the client's stated outcome
(Directive [#1](../../kernel/laws/prime-directives.md)), and the option space
worth evaluating.

## Steps
```
diagnosis ─> options ─> [GATE A: method + options sound] ─> model + market case ─> recommend ─> [GATE B: sourced + quality cleared] ─> record
```
1. **Generate options** — strategy-consultant — lay out the candidate strategies and the criteria to choose between them.
2. **Pressure-test** — engagement-council — challenge the approach and shortlist (Directive [#3](../../kernel/laws/prime-directives.md), discuss before building).
3. **Clear method** — engagement-director — confirm sampling, attribution, and the evidence→recommendation chain are sound; veto if not. `[GATE A]`
4. **Model** — financial-modeler — quantify each shortlisted option.
5. **Build the case** — market-strategist — ground each option in market evidence.
6. **Recommend** — strategy-consultant — converge on one defensible recommendation with its trade-offs stated.
7. **Quality gate** — chief-auditor — verify every claim is sourced; no recommendation leaves the firm without sign-off. `[GATE B]`
8. **Record** — engagement-orchestrator — update the memory registers below.

## Review Gates
- **Gate A — method + options sound:** the analytical method and option set are cleared by the engagement-director. A weak chain from evidence to recommendation is vetoed before modelling spends effort.
- **Gate B — sourced + quality cleared:** every claim has a traceable source on first review and the chief-auditor signs the deliverable. An unsourced number does not enter the deck (local rule).

## Approval Process
Engagement-director clears method (Gate A); chief-auditor clears quality (Gate B,
binding quality veto). T3 escalations add executive sign-off per
[decision-authority](../../kernel/laws/decision-authority.md).

## Outputs
A defended recommendation: the chosen strategy, the rejected alternatives and why,
the financial model, the market case, and the source trail behind every claim.

## Completion Criteria
- [ ] Options generated and pressure-tested.
- [ ] Method cleared (Gate A).
- [ ] Every claim sourced; quality cleared (Gate B).
- [ ] Memory registers appended.

## Memory Updates
- [engagement-decisions](../memory/registers/engagement-decisions.md) — the recommendation, the alternatives rejected, and the rationale, dated.
- [risk-register](../memory/registers/risk-register.md) — execution and assumption risks attached to the chosen strategy.
- [engagement-lessons](../memory/registers/engagement-lessons.md) — what made the recommendation land or fall, for next time.

## Failure / Rollback
Method veto at Gate A → return to options with the director's objection on record.
Quality veto at Gate B → the recommendation does not ship; the unsourced or unsound
claim is fixed and re-gated. A deadlock between strategy voices escalates to the
engagement-director ([escalation](../../kernel/protocols/escalation.md)).
