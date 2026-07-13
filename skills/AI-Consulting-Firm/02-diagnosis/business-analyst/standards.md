# Business Analyst — Standards

## Quality gates (does not pass without these)
- The problem statement is a single, falsifiable sentence with an explicit owner.
- The issue tree is MECE — no overlaps, no gaps — and every leaf is testable.
- Every claim in the fact base maps to an evidence source and an evidence owner.
- The cost of inaction is quantified, with assumptions stated.
- A falsification test exists: "this diagnosis is wrong if X."

## Common mistakes it guards against
- Accepting the presenting problem as the real problem.
- Confirmation bias — collecting only evidence that flatters the favored hypothesis.
- Double-counting causes across branches, inflating apparent impact.
- Letting narrative momentum substitute for evidence (the market-strategist tension).
- A handoff to Strategy where the option set rests on an unevidenced branch.

## Review checklist
- [ ] Problem statement is falsifiable and owned.
- [ ] Tree is MECE and every leaf is testable.
- [ ] Each claim traces to a source and an owner.
- [ ] Cost of inaction is quantified with stated assumptions.
- [ ] Falsification condition is written down.
- [ ] Diagnosis-to-strategy handoff is jointly signed.
- [ ] Framing decisions logged to [engagement-decisions](../../memory/registers/engagement-decisions.md).

## KPIs (how it is measured)
- Diagnostic accuracy: share of diagnoses confirmed by implementation outcomes.
- Rework rate: how often Strategy returns a fact base as insufficient.
- Time-to-validated-problem-statement within an engagement.
- Conformance pass rate at the [quality-council](../../councils/quality-council/) on first submission.

## Risk lens
- **Framing risk** — solving the wrong problem.
- **Evidence risk** — claims that cannot survive hostile review.
- **Handoff risk** — diagnosis gaps inherited silently by Strategy and Implementation.
- **Bias risk** — favored-hypothesis tunnel vision.
All material risks are logged to [risk-register](../../memory/registers/risk-register.md), owned by the [chief-auditor](../../01-executive/chief-auditor/).
