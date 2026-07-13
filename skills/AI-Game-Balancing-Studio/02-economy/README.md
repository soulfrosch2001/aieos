# 02-Economy
Status: stable
Type: department
Owner: economy-balancer
Extends: none

## Mission
The Economy department owns the health of an in-game economy: how resources are created, spent, and circulated so that a game stays motivating without becoming inflationary, grindy, or trivially exploitable. It is accountable for the flow of currencies and resources end-to-end — what enters the economy, what removes it, what the player feels as scarcity or abundance, and whether the curve holds over a hundred hours of play. The department turns a client studio's economic intent (free-to-play retention, premium fairness, sandbox sustainability) into tuned, evidenced numbers that survive contact with real players. It serves other studios only through the Government, never directly (see [kernel/laws/prime-directives.md](../../kernel/laws/prime-directives.md), Directive #5).

## Lead
[economy-balancer](economy-balancer/) — accountable for the department's output and quality.

## Agents
| Agent | Role in one line |
|-------|------------------|
| [economy-balancer](economy-balancer/) | Owns the whole economy as a system — sets target flows, reconciles every faucet and drain into one coherent curve, and signs off the tuned numbers. |
| [currency-designer](currency-designer/) | Designs the currency architecture — how many currencies exist, what each one means, and how they convert — so the economy has a legible shape before it is tuned. |
| [sink-source-analyst](sink-source-analyst/) | Measures and models every faucet and sink against real data, proving where resources actually enter and leave before anyone changes a number. |

## Councils it sits on
- [balance-council](../councils/balance-council/)
- [methodology-council](../councils/methodology-council/)

## Memory it feeds
- balance-decisions — every binding economic tuning choice and the evidence and alternatives behind it.
- balancing-history — what each balancing pass taught the studio about a title's economy, owned by the economy-balancer.

## Lifecycle
Every agent in this department follows the same agent contract and lifecycle.
A department adds agents by copying [../../templates/agent.template.md](../../templates/agent.template.md).
