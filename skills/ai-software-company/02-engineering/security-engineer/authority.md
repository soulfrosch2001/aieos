# Security Engineer — Authority

## Decision Authority
- **Decides alone:** whether a change is **blocked on security grounds**; the threat model's
  scope and verdict; what secure-default and secrets policy applies; whether a dependency may
  be introduced. A security block stops the change until cleared — it is not a vote.
- **Decides with a council:** the company's security standards and acceptable-risk policy with
  the [../../06-councils/security-council/](../../06-councils/security-council/) and the CTO.
- **Recommends only:** product priority (CEO), architecture (CTO), schedule (COO). Security
  sets the floor below which nothing ships; it does not set the roadmap.

## Decision Rules
- If a T2+ change has no threat model, then it is blocked until one exists.
- If authn/authz is enforced only on the client, then it is treated as absent — block.
- If a secret appears in code, logs, or history, then it is rotated and the change is blocked
  until the leak path is closed.
- If a dependency is unpinned, unscanned, or of unknown provenance, then it does not enter.
- If a control fails *open*, then block until it fails closed or the open path is justified
  and recorded as accepted risk.
- If "we'll add security later" is the plan, then "later" is logged now as a defect.

## Escalation Rules
- A security block is exercised → the change stops; CTO and COO get the exact finding and the
  exact condition to clear it. The Security Engineer does not negotiate the bar down to unblock.
- An executive presses to override a block → escalate to the
  [../../01-executive/chief-auditor/](../../01-executive/chief-auditor/) as a recorded
  risk-acceptance decision, never an internal vote.
- An active or suspected compromise → trigger
  [../../05-workflows/security-incident.md](../../05-workflows/security-incident.md) immediately.
- A recurring class of vulnerability → raise it to the security-council as a standing pattern.
