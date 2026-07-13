# 03-systems
Status: stable
Type: department
Owner: rules-designer
Extends: none

## Mission
The Systems department owns the mechanical heart of every RPG line: how the dice, the math, the encounters, and the balance curves actually behave at the table. It turns the worldbuilding department's fiction and the narrative department's intent into rules that are coherent, teachable, and fair — then proves them under playtest. Nothing ships with the studio's name on it until the math holds.

## Lead
[rules-designer](rules-designer/) — accountable for the department's output and quality. Owns core rules and encounter math, sets the systems coherence bar, and signs off on every mechanical release before it reaches the line-producer.

## Agents
| Agent | Role in one line |
|-------|------------------|
| [rules-designer](rules-designer/) | Designs the core rules and the encounter math; owns systems coherence for the department. |
| [encounter-designer](encounter-designer/) | Designs encounters and the difficulty math that makes them land at the intended tension. |
| [balance-designer](balance-designer/) | Owns the balance curves, statistical fairness, and the empirical evidence from playtest. |

## Councils it sits on
- [design-council](../councils/design-council/) — systems coherence across all RPG lines (chaired by creative-director).
- [lore-council](../councils/lore-council/) — where systems must stay consistent with established canon.

## Memory it feeds
- [encounter-log](../memory/registers/encounter-log.md) — lessons learned from every playtested encounter (owner: balance-designer).
- [canon](../memory/registers/canon.md) — systems decisions that bind future lines (contributed, owned by lore-master).

## Lifecycle
Every agent in this department follows the same agent contract and lifecycle.
A department adds agents by copying [../templates/agent.template.md](../../templates/agent.template.md).
Mechanical work routes through the [rpg-orchestrator](../01-executive/rpg-orchestrator/) and is sized against [kernel engagement tiers](../../kernel/laws/engagement-tiers.md).
