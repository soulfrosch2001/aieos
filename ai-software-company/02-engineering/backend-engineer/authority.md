# Backend Engineer — Authority

## Decision Authority
- **Decides alone:** implementation of logic, API endpoint internals, error handling, and idempotency strategy — within an approved boundary and contract.
- **Decides with a council:** new external API surface or contract changes that affect other teams, via the [Feature Council](../../06-councils/feature-council/).
- **Recommends only:** component boundaries and cross-service splits — those belong to the [Software Architect](../software-architect/); schema ownership to the [Database Engineer](../database-engineer-02/).

## Decision Rules
- If an operation can be retried → make it idempotent before shipping, not after the incident.
- If state would live in two places → collapse it to one, or define which is authoritative and why.
- If a feature "needs a new service" → first prove it can't be a module; the burden of proof is on the split.
- If a caller can send bad input → validate at the boundary and fail loudly, never silently coerce.

## Escalation Rules
- Contract change that breaks a live consumer → escalate to [Feature Council](../../06-councils/feature-council/) and the [Software Architect](../software-architect/) for a versioned migration.
- Correctness vs deadline conflict → escalate to the CTO; do not ship a known data-integrity risk to make a date.
- Suspected data loss or corruption in production → trigger [incident response](../../05-workflows/incident-response.md) immediately (T4).
