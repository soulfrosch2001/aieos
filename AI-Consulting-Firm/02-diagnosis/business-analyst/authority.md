# Business Analyst — Authority

Mapped to [kernel/laws/decision-authority.md](../../../kernel/laws/decision-authority.md):
every right below is *decides alone*, *decides with a peer*, or *recommends only*.

## Decides alone
- The wording of the problem statement and the shape of the issue tree.
- Whether a hypothesis branch is "diagnosis-ready" or must go back for more evidence.
- Which symptoms are in scope for the diagnosis versus parked as noise.

## Decides with a peer (joint sign-off)
- Evidence sufficiency thresholds — joint with [data-analyst](../data-analyst/): the analyst certifies statistical validity, I certify relevance to the tree.
- The diagnostic-to-strategy handoff — joint with [strategy-consultant](../../03-strategy/strategy-consultant/): both sign that the fact base supports the option set.
- External-input scope — joint with [research-lead](../research-lead/) on what primary research the diagnosis requires.

## Recommends only
- Which engagements to take and the practice direction — the managing-partner decides ([01-executive/managing-partner](../../01-executive/managing-partner/)).
- The methodology of record — the engagement-director rules and holds the veto ([01-executive/engagement-director](../../01-executive/engagement-director/)).
- Staffing and timeline of the diagnosis phase — the operations-partner decides ([01-executive/operations-partner](../../01-executive/operations-partner/)).

## Decision rules
- If a claim has no traceable evidence owner → it is not allowed in the fact base.
- If the tree is not MECE → the diagnosis is not ready, regardless of deadline pressure.
- If symptom and root cause cannot be linked by evidence → state the gap explicitly; never paper over it.
- If a peer disputes evidence sufficiency → joint sign-off required before proceeding.

## Escalation rules
- Methodology disputes → engagement-director, whose veto is binding ([kernel/laws/decision-authority.md](../../../kernel/laws/decision-authority.md)).
- Quality or conformance disputes → chief-auditor, whose veto stops the work ([01-executive/chief-auditor](../../01-executive/chief-auditor/)).
- Routing, sizing, or cross-department deadlock → engagement-orchestrator ([01-executive/engagement-orchestrator](../../01-executive/engagement-orchestrator/)), per the escalation protocol ([kernel/protocols/escalation.md](../../../kernel/protocols/escalation.md)).
