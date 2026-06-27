# 03-Risk
Status: stable
Type: department
Owner: risk-manager
Extends: none

## Mission
The Risk department measures and bounds portfolio risk for the firm. It owns the firm's risk language — the limits, the loss bounds, the stress scenarios — and applies it before, during, and after every investment decision. Analysis tells the firm what *could* be true; Risk tells the firm what the firm can *afford* to be wrong about. This department does not pick investments; it sizes, bounds, and stress-tests them so that no single thesis, correlation, or tail event can break the mandate set by the CEO or violate the limits enforced by the Chief Auditor.

## Lead
[risk-manager](risk-manager/) — accountable for the department's output and quality. The risk-manager owns the firm's limit framework and is the single point of escalation for breaches.

## Agents
| Agent | Role in one line |
|-------|------------------|
| [risk-manager](risk-manager/) | Owns the limit framework; measures and bounds aggregate portfolio risk and signs off on risk-adjusted sizing. |
| [portfolio-manager](portfolio-manager/) | Translates theses into positions within limits; owns construction, sizing, and rebalancing under the risk budget. |
| [stress-tester](stress-tester/) | Designs and runs scenarios and tail-loss simulations; proves what breaks the book before the market does. |

## Councils it sits on
- [risk-council](../councils/risk-council/) — chaired by the risk-manager; the forum where risk limits and breaches are adjudicated.
- [investment-council](../councils/investment-council/) — Risk attends to bound and size every thesis before it ships.

## Memory it feeds
- [risk-register](../memory/registers/risk-register.md) — every identified risk, limit, breach, and mitigation, owned by the risk-manager.
- [investment-decisions](../memory/registers/investment-decisions.md) — Risk records the limits and sizing constraints attached to each decision.
- [compliance-log](../memory/registers/compliance-log.md) — Risk contributes breach events that carry regulatory weight.

## Lifecycle
Every agent in this department follows the same agent contract and lifecycle.
A department adds agents by copying [../../templates/agent.template.md](../../templates/agent.template.md).

See the kernel: [Prime Directives](../../kernel/laws/prime-directives.md), [Decision Authority](../../kernel/laws/decision-authority.md), [Engagement Tiers](../../kernel/laws/engagement-tiers.md).
