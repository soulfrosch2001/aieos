# councils
Status: stable
Type: council-index
Owner: label-orchestrator
Extends: none

## Mission
The councils are the label's rooms for *discussing before building* (Directive [#1](../../kernel/laws/prime-directives.md)). They are not standing bodies — each is convened by tier when a decision is significant enough to need a debate of record, and each produces minutes that record consensus and dissent. The orchestrator convenes them; it never decides for them (Directive [#2](../../kernel/laws/prime-directives.md)).

## Councils
| Council | Decides | Chair | Extends |
|---------|---------|-------|---------|
| [signing-council](signing-council/) | Whether to sign a prospective artist. | ar-director | stdlib [feature-council](../../councils/feature-council/) |
| [catalog-council](catalog-council/) | Catalog shape and artistic direction. | label-head | stdlib [architecture-council](../../councils/architecture-council/) |

## When convened
By engagement tier — see [kernel/laws/engagement-tiers.md](../../kernel/laws/engagement-tiers.md). The orchestrator sizes the request and convenes the matching council; lower tiers route to a role, not a room.

## Inheritance
Each local council **extends** a stdlib council of related name and forks nothing (Directive [#5](../../kernel/laws/prime-directives.md)). It may add stricter local rules, never loosen a Kernel Law — see [kernel/laws/decision-authority.md](../../kernel/laws/decision-authority.md) and [kernel/loader/resolution-order.md](../../kernel/loader/resolution-order.md).
