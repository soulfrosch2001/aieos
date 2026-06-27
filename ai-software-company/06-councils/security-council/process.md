# Security Council — Process

## Discussion Rules
Follow [../debate-protocol.md](../debate-protocol.md). The default posture is to
assume the change is unsafe until shown otherwise. Concerns are recorded in full;
silence is not consent.

## Decision Process
1. The chair states the threat, the affected assets, and the blast radius.
2. Core members challenge the mitigations and probe residual risk.
3. Council seeks consensus on accept / reject / gate-with-conditions.
4. If consensus fails, the **security-engineer decides** as chair.
5. The [Chief Auditor](../../01-executive/chief-auditor/) holds a **veto** over
   any decision to accept risk, regardless of tier or consensus.

## Approval Gate
- **Approves alone:** T3 security-sensitive changes with mitigations in place and
  no Chief Auditor objection.
- **Must escalate:** T4 incidents run live via
  [../../05-workflows/security-incident.md](../../05-workflows/security-incident.md);
  any risk acceptance the Auditor vetoes.

## Escalation & Overriding the Veto
- Technical security deadlock → chair decides, subject to the veto.
- A Chief Auditor veto can be overridden **only** by an explicit, recorded
  **human** risk-acceptance — no internal executive can. See
  [../../00-company/decision-authority.md](../../00-company/decision-authority.md).
