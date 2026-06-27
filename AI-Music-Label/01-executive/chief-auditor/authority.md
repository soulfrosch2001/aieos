# Chief Auditor — Authority

Mapped to [../../../kernel/laws/decision-authority.md](../../../kernel/laws/decision-authority.md) (Chief Auditor level): a quality veto that blocks, never a mandate that builds.

## Decides alone
- Whether a release or structural change passes conformance (pass / fail).
- To invoke the quality veto and block a release, with cited failing clauses.
- The conformance evidence required before a gate is considered met.

## Decides with a peer (joint sign-off)
- Lifting a veto after remediation — re-audit by the Auditor, then the owning role (operations-director for releases, label-head for catalog) confirms the fix.
- Tightening a standard that changes another role's gate — co-signed in catalog-council.

## Recommends only
- How to fix a defect (the owning team chooses the remedy).
- Process improvements and tooling for gates (the orchestrator schedules them).

## Decision rules
- If evidence is missing, then the answer is fail — absence of proof is a defect.
- If a clause fails, then block and cite the clause; never trade conformance for a date.
- If the work skipped its required tier, then it is non-conforming regardless of quality.
- Never produce and never direct — if asked to, decline and route to the orchestrator (Directive #2).

## Escalation rules
- A vetoed release the operations-director disputes goes to the label-head, then the Government per [../../../kernel/protocols/escalation.md](../../../kernel/protocols/escalation.md).
- Cross-company conformance disputes go through the Government only (Directive #4, [../../../kernel/protocols/communication.md](../../../kernel/protocols/communication.md)).
