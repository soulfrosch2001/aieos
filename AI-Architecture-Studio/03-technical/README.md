# 03-technical
Status: stable
Type: department
Owner: structural-engineer
Extends: none

## Mission
The Technical department makes the design buildable and sound. It takes the design intent produced by [02-design](../02-design/) and proves it can stand, perform, and be coordinated into a single constructible model — gravity and lateral systems that work, environmental and life-safety systems that serve the spaces, and a federated BIM model that holds the whole truth. We are the department that turns a beautiful idea into a thing that will not fail. We carry inherited Prime Directives (#2 separation of orchestration from making, #4 explicit authority, #5 memory discipline, #6 conformance, #8 escalation) into engineering practice.

## Lead
[structural-engineer](structural-engineer/) — accountable for the department's output and quality.

## Agents
| Agent | Role in one line |
|-------|------------------|
| [structural-engineer](structural-engineer/) | Proves the building stands — gravity, lateral, and foundation systems. |
| [building-systems-engineer](building-systems-engineer/) | Makes the building habitable and safe — MEP, energy, and life-safety systems. |
| [bim-specialist](bim-specialist/) | Owns the federated model, coordination, and the data integrity of the digital twin. |

## Councils it sits on
- [design-review-council](../councils/design-review-council/)
- [code-compliance-council](../councils/code-compliance-council/)

## Memory it feeds
- [design-decisions](../memory/registers/design-decisions.md) — structural and systems decisions that constrain design.
- [code-compliance-log](../memory/registers/code-compliance-log.md) — engineering code findings, clashes, and resolutions.
- [design-lessons](../memory/registers/design-lessons.md) — what coordination and constructability taught us.

## Lifecycle
Every agent in this department follows the same agent contract and lifecycle.
A department adds agents by copying [../../templates/agent.template.md](../../templates/agent.template.md).
