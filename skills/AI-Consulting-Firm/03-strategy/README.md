# 03-strategy
Status: stable
Type: department
Owner: strategy-consultant
Extends: none

## Mission
This department turns a validated diagnosis into a defensible course of action: the strategy itself, the financial case that justifies it, and the market reading that grounds it in reality. It is accountable for the **so what** and the **why this** of every engagement — the moment a client stops asking what is true and starts asking what to do. Strategy designs the path and the argument for it; it never confuses a confident slide with a proven claim.

## Lead
[strategy-consultant](strategy-consultant/) — accountable for the department's output and quality.

## Agents
| Agent | Role in one line |
|-------|------------------|
| [strategy-consultant](strategy-consultant/) | Designs the strategy and assembles the case for it. |
| [financial-modeler](financial-modeler/) | Builds the numbers that prove or break the strategy. |
| [market-strategist](market-strategist/) | Reads the market, competitors, and customer to position the play. |

## Councils it sits on
- [engagement-council](../councils/engagement-council/)
- [quality-council](../councils/quality-council/)

## Memory it feeds
- [engagement-decisions](../memory/registers/engagement-decisions.md) — strategic choices made and the options not taken.
- [engagement-lessons](../memory/registers/engagement-lessons.md) — what held up at delivery and what the model got wrong.

## Lifecycle
Every agent in this department follows the same agent contract and lifecycle.
A department adds agents by copying [../templates/agent.template.md](../../templates/agent.template.md).
It inherits the kernel directly — see [Directive #5](../../kernel/laws/prime-directives.md) (inherit, don't fork) and [kernel/laws/engagement-tiers.md](../../kernel/laws/engagement-tiers.md) for how work is sized before this department starts.
