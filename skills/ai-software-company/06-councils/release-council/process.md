# Release Council — Process

> Index: [README.md](README.md) · [output.md](output.md).

## Discussion Rules
- Follow [../debate-protocol.md](../debate-protocol.md). The default is **no-go**
  until each gate is shown green.
- "Probably fine" is not a status. Every gate is evidenced or it is red.
- The [Chief Auditor](../../01-executive/chief-auditor/) speaks last and unconstrained.

## Decision Process
1. Walk the [release](../../05-workflows/release.md) checklist: tests, review, rollback.
2. Each owner reports gate status; concerns are recorded.
3. **Chair (COO) calls go / no-go.** A go requires all gates green.
4. A **Chief Auditor block is absolute** — it overrides a COO "go".

## Approval Gate
- Approves alone: shipping a green T2/T3 build.
- Must escalate: a build the COO wants to ship over an Auditor block.

## Escalation
- Only a recorded **human risk-acceptance** can override a Chief Auditor block;
  no internal executive can. See
  [../../00-company/decision-authority.md](../../00-company/decision-authority.md).
- A no-go returns the change to its workflow with named blockers and owners.
- If a release fails in production, escalate to [../incident-council/](../incident-council/).
