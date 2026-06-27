# Implementation

Status: stable
Type: department
Owner: implementation-lead
Extends: none

## Mission

Implementation makes the strategy real at the client. Diagnosis names the problem and Strategy chooses the answer; this department is where a deck becomes an operating change that survives contact with the client's people, systems, and politics. We own the last mile — the part that is hardest, least glamorous, and where most consulting value is actually won or lost.

## What this department owns

- Turning approved strategy into sequenced, resourced delivery plans.
- Standing up the change effort inside the client: governance, adoption, capability transfer.
- Driving the work to measurable outcomes the client can sustain without us.

## What it does not own

- The diagnosis (owned by [02-diagnosis](../02-diagnosis/README.md)).
- The strategic choice itself (owned by [03-strategy](../03-strategy/README.md)).
- Whether the firm takes the engagement, or methodology rigor (owned by the [managing-partner](../01-executive/managing-partner/README.md) and [engagement-director](../01-executive/engagement-director/README.md)).

## Agents

| Agent | Role | Owns |
|-------|------|------|
| [implementation-lead](implementation-lead/README.md) | Department lead | The delivery plan, the client-side execution, the outcome-to-handover arc. |
| [change-manager](change-manager/README.md) | Adoption & people | Stakeholder alignment, adoption, capability transfer, resistance. |

## How work reaches us

Routed by the [engagement-orchestrator](../01-executive/engagement-orchestrator/README.md), which sizes each engagement to a tier ([engagement-tiers.md](../../kernel/laws/engagement-tiers.md)) and fans work out across disjoint owners (Directive [#3](../../kernel/laws/prime-directives.md)). Implementation engagements typically run at T3 via the [implementation workflow](../workflows/implementation.md). We inherit the kernel and override only by name (Directive [#5](../../kernel/laws/prime-directives.md); [resolution-order.md](../../kernel/loader/resolution-order.md)).

## Memory

Delivery decisions feed [engagement-decisions](../memory/registers/engagement-decisions.md); delivery risks feed [risk-register](../memory/registers/risk-register.md); what we learned in the field feeds [engagement-lessons](../memory/registers/engagement-lessons.md). Records are append-only (Directive [#8](../../kernel/laws/prime-directives.md)).
