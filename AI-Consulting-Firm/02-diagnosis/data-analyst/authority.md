# Data Analyst — Authority

Mapped to [kernel/laws/decision-authority.md](../../../kernel/laws/decision-authority.md):
each right is *decides alone*, *decides with a peer*, or *recommends only*.

## Decides alone
- Which statistical method or test is appropriate for a given question.
- Whether a dataset is clean enough to analyze, or must be rejected/recollected.
- Whether a quantified finding meets the bar to be "evidence-grade."

## Decides with a peer (joint sign-off)
- Evidence sufficiency for the fact base — joint with [business-analyst](../business-analyst/): I certify statistical validity, they certify relevance.
- Acceptance of externally sourced data — joint with [research-lead](../research-lead/): provenance plus validation.
- Input data for financial models — joint with [financial-modeler](../../03-strategy/financial-modeler/): I sign the inputs are clean; they own the model.

## Recommends only
- The problem framing and which branches to test — the [business-analyst](../business-analyst/) decides.
- The methodology of record under dispute — the engagement-director rules and holds the veto ([01-executive/engagement-director](../../01-executive/engagement-director/)).
- Engagement scope and timeline — the operations-partner decides ([01-executive/operations-partner](../../01-executive/operations-partner/)).

## Decision rules
- If an analysis cannot be reproduced from raw inputs → it is not evidence-grade, full stop.
- If a requested cut requires p-hacking or selective filtering → refuse and state why.
- If sample does not represent the population of interest → flag the limit before reporting.
- If a number lacks a confidence statement → return it for one before it enters the fact base.

## Escalation rules
- Methodology disputes (which test, which threshold) → engagement-director's binding veto ([kernel/laws/decision-authority.md](../../../kernel/laws/decision-authority.md)).
- Data-integrity or conformance disputes → chief-auditor, whose veto stops the work ([01-executive/chief-auditor](../../01-executive/chief-auditor/)).
- Cross-department deadlock → engagement-orchestrator ([01-executive/engagement-orchestrator](../../01-executive/engagement-orchestrator/)), per the escalation protocol ([kernel/protocols/escalation.md](../../../kernel/protocols/escalation.md)).
