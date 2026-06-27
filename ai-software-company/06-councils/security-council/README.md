# Security Council
Status: stable
Type: council
Owner: chair
Extends: none

Decides on security-sensitive changes and formal risk acceptance — the body that
says yes, no, or not-yet to anything that touches the threat surface.

## Identity
- **Convened by:** [security-engineer](../../02-engineering/security-engineer/),
  or any agent flagging a security-sensitive change.
- **Convened when:** T3 (security-sensitive, irreversible) and T4 (breach, data
  loss — live). See [engagement-tiers.md](../../00-company/engagement-tiers.md)
  and [../../05-workflows/security-incident.md](../../05-workflows/security-incident.md).
  Not standing.

## Participants
- **Chair:** [security-engineer](../../02-engineering/security-engineer/).
- **Veto:** [Chief Auditor](../../01-executive/chief-auditor/) — independent veto
  on risk acceptance; reports to no one inside the company.
- **Core:** security-engineer, backend-engineer, infrastructure-engineer.
- **Advisory (as-needed):** CTO, software-architect, COO.

## Objectives
- Approve, reject, or gate security-sensitive changes.
- Make explicit, recorded risk-acceptance decisions.
- **Out of scope:** feature value and non-security architecture trade-offs.

## Inputs
- Threat description and affected assets.
- Proposed change and its blast radius.
- Mitigations considered and residual risk.

## Index
- [process.md](process.md) — how it debates and decides.
- [output.md](output.md) — minutes and memory updates.
