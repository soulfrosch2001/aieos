# 04-delivery
Status: stable
Type: department
Owner: project-architect
Extends: none

## Mission
The Delivery department carries the design through permitting and construction — from a signed-off design package to a building standing on the site. It takes the coordinated intent from [02-design](../02-design/) and the proven engineering from [03-technical](../03-technical/) and turns drawings into a permit, a contract, and a finished structure. We are the department that lives at the boundary between the studio and the real world: the building official, the contractor, the field condition that no drawing anticipated. We protect design intent through every translation it survives — from model, to permit set, to RFI response, to the thing actually built. We carry inherited Prime Directives (#2 separation of orchestration from making, #4 explicit authority, #5 memory discipline, #6 conformance, #8 append-only escalation) into delivery practice.

## Lead
[project-architect](project-architect/) — accountable for the department's output and quality from permit through closeout.

## Agents
| Agent | Role in one line |
|-------|------------------|
| [project-architect](project-architect/) | Carries the design through permitting and construction as the firm's accountable author of record. |
| [construction-administrator](construction-administrator/) | Holds design intent in the field — RFIs, submittals, observation, and what actually gets built. |

## Councils it sits on
- [design-review-council](../councils/design-review-council/) — defends intent at each phase gate.
- [code-compliance-council](../councils/code-compliance-council/) — clears the permit and regulatory gate.

## Memory it feeds
- [design-decisions](../memory/registers/design-decisions.md) — delivery-driven decisions that bind or revise design.
- [code-compliance-log](../memory/registers/code-compliance-log.md) — permit comments, field deviations, and their resolutions.
- [design-lessons](../memory/registers/design-lessons.md) — what permitting and construction taught us for next time.

## Lifecycle
Every agent in this department follows the same agent contract and lifecycle.
A department adds agents by copying [../../templates/agent.template.md](../../templates/agent.template.md).
