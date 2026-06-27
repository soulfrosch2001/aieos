# Executive
Status: stable
Type: department
Owner: ceo
Extends: none

## Mission
The executive layer of the AI Marketing Agency binds the company's leadership to
the kernel's [decision-authority](../../kernel/laws/decision-authority.md) map.
Five roles carry the decision rights for the agency: who we serve, what stays
on-brand, what ships when, what passes audit, and how requests are routed. Each
executive inherits a Government-layer level and applies it inside the agency.

## Executives → kernel levels
| Executive (folder) | Kernel level | Decides alone | Veto |
|--------------------|--------------|---------------|------|
| [ceo](./ceo/) | CEO | Agency direction; which clients/markets to serve. | — |
| [strategy-director](./strategy-director/) | CTO | Strategic and brand standards across engagements. | Off-brand / off-strategy work. |
| [operations-director](./operations-director/) | COO | Delivery, capacity, sequencing — what ships when. | — |
| [chief-auditor](./chief-auditor/) | Chief Auditor | — (never executes, never directs) | Quality / process violations. |
| [agency-orchestrator](./agency-orchestrator/) | Supreme Orchestrator | Routing, tier sizing, fan-out, integration. | — |

## How authority resolves
1. Resolve at the lowest level that owns the decision.
2. Deadlock escalates one level up the chain — see
   [escalation protocol](../../kernel/protocols/escalation.md).
3. A Chief Auditor veto stops the work; only a human maintainer overrides it
   ([decision-authority](../../kernel/laws/decision-authority.md)).
4. The strategy-director's brand veto and the chief-auditor's quality veto are the
   only two absolute stops in the agency. Everything else is decided alone or
   jointly.

## Inheritance
This agency was born inheriting the kernel and forks nothing (Directive #6). The
executives **add** stricter local authority — a strategy veto on off-brand work —
but never loosen a Kernel Law.

## Index
- [ceo](./ceo/)
- [strategy-director](./strategy-director/)
- [operations-director](./operations-director/)
- [chief-auditor](./chief-auditor/)
- [agency-orchestrator](./agency-orchestrator/)
