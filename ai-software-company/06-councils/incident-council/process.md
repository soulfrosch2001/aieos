# Incident Council — Process

> Index: [README.md](README.md) · [output.md](output.md).

## Discussion Rules
- Follow [../debate-protocol.md](../debate-protocol.md), **compressed for speed**:
  one round, the chair calls it. Mitigation now beats the perfect fix later.
- One person speaks per decision; the scribe logs every call with a timestamp.
- Dissent is still recorded — into the live timeline, never dropped.

## Decision Process
1. Declare severity and name the **incident commander** (chair).
2. Stabilize: choose mitigate, **rollback**, or **hotfix**
   ([../../05-workflows/hotfix.md](../../05-workflows/hotfix.md)).
3. The chair decides immediately; debate does not block mitigation.
4. Drive the [incident-response](../../05-workflows/incident-response.md) workflow to resolution.

## Approval Gate
- Approves alone: emergency mitigations, rollbacks, and hotfixes during the incident.
- A hotfix still records minutes; the normal release gate is waived **only** while T4 is live.

## Escalation
- Breach or data loss → pull in the Chief Auditor and notify executives at once.
- Cost or customer-impact trade-offs beyond the commander's mandate → COO / CEO via
  [../../00-company/decision-authority.md](../../00-company/decision-authority.md).
