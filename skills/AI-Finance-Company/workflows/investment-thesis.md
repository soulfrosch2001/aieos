<!-- Workflow (1 file). Contract: ../../kernel/contracts/workflow.md -->

# Workflow: investment-thesis
Status: stable
Type: workflow
Owner: Chief Investment Officer
Extends: research

**Purpose:** Build and defend an investment thesis with evidence, so capital is
committed on a documented argument — never on conviction alone.
**Default Tier:** [T2](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** Chief Investment Officer
**Extends:** [research](../../workflows/research.md)

## Trigger
A candidate position, sector view, or allocation idea that could move the book —
sized [T2](../../kernel/laws/engagement-tiers.md). This workflow produces a
*decision-ready thesis*, not an executed trade; execution hands off to
[portfolio-rebalance](portfolio-rebalance.md) once risk and compliance clear.

## Participants
- [finance-orchestrator](../01-executive/finance-orchestrator/) — frames the question, routes; never makes the call ([Directive #2](../../kernel/laws/prime-directives.md)).
- [investment-council](../councils/investment-council/) — sets the decision criteria up front ([Directive #3](../../kernel/laws/prime-directives.md)).
- Up to 8 [analysis](../02-analysis/) agents — equity, quantitative, macro lines of inquiry, in parallel.
- [Chief Investment Officer](../01-executive/chief-investment-officer/) — Gate B sign-off on methodology and rigor (methodology veto).

## Inputs
A sharp investment question, the decision it informs (buy / size / pass), the
mandate and regulatory limits it must respect, and the criteria for a
good-enough answer.

## Steps
```
frame ─> [GATE A: question + criteria + mandate agreed] ─> investigate(≤8) ─> synthesize ─> [GATE B: thesis backed by evidence + methodology sound] ─> record
```
1. **Frame** — finance-orchestrator — state the thesis question, mandate fit, and what would falsify it. `[GATE A]`
2. **Decompose** — finance-orchestrator — split into independent inquiry lines (≤8): fundamentals, valuation, macro, quantitative signal.
3. **Investigate** — [equity-analyst](../02-analysis/equity-analyst/), [quantitative-analyst](../02-analysis/), [macro-strategist](../02-analysis/) — gather and cite evidence per line, in parallel.
4. **Synthesize** — finance-orchestrator — converge findings into one thesis with a falsification test and explicit assumptions.
5. **Stress-test** — Chief Investment Officer — challenge the conclusion against the evidence and the firm's process. `[GATE B]`
6. **Record** — finance-orchestrator — update the memory registers below.

## Review Gates
- **Gate A — question + criteria + mandate agreed:** no analysis starts until the
  decision, its success criteria, and the regulatory/mandate limits are explicit.
- **Gate B — thesis backed by evidence + methodology sound:** every claim is traceable
  to cited evidence and the analytical method survives CIO challenge. Unsupported
  conviction is blocked ([Directive #9](../../kernel/laws/prime-directives.md)); the
  CIO may veto on methodology grounds.

## Approval Process
The [investment-council](../councils/investment-council/) agrees the framing (Gate A);
the [Chief Investment Officer](../01-executive/chief-investment-officer/) validates
rigor and methodology (Gate B) per [decision-authority](../../kernel/laws/decision-authority.md).
A thesis that implies a strategic shift escalates to the [CEO](../01-executive/ceo/);
any regulatory question routes to [compliance](../04-compliance/) before it binds.

## Outputs
A documented thesis: claim, cited evidence, valuation, assumptions, falsification
test, alternatives considered, and the open risks handed to [risk-review](risk-review.md).

## Completion Criteria
- [ ] Question, criteria, and mandate fixed before analysis (Gate A).
- [ ] Thesis traceable to evidence; methodology cleared by CIO (Gate B).
- [ ] Memory registers appended.

## Memory Updates
- [investment-decisions](../memory/registers/investment-decisions.md) — the thesis, the call, rationale, and falsification test, dated.
- [risk-register](../memory/registers/risk-register.md) — exposures and assumptions the thesis introduces.
- [compliance-log](../memory/registers/compliance-log.md) — any mandate or regulatory check performed on the thesis.

## Failure / Rollback
Evidence is inconclusive → record the uncertainty and the next data the thesis
needs; do not manufacture conviction. Scope balloons → re-size and re-fan-out in
waves ([orchestration](../../kernel/protocols/orchestration.md)). CIO methodology
veto → return to investigation, never override the process.
