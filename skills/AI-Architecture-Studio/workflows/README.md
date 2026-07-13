# Workflows
Status: stable
Type: reference
Owner: studio-orchestrator
Extends: none

The studio's repeatable paths from trigger to memory update. Each workflow follows
[../../templates/workflow.template.md](../../templates/workflow.template.md) and
**extends a stdlib workflow by name** — we inherit the proven skeleton and tighten
it for architecture practice ([Directive #6](../../kernel/laws/prime-directives.md)).

The [studio-orchestrator](../01-executive/studio-orchestrator/) sizes every request
by [engagement tier](../../kernel/laws/engagement-tiers.md) and selects the
workflow; it routes and integrates but never designs (Directive #2). Heavier tiers
add councils, gates, and executive sign-off per
[decision-authority](../../kernel/laws/decision-authority.md).

## Index
| Workflow | Tier | Extends | Purpose |
|----------|------|---------|---------|
| [schematic-design](schematic-design.md) | T2 | stdlib `feature` | Develop a schematic design from a brief. |
| [design-development](design-development.md) | T3 | stdlib `planning` | Develop the design to construction-ready detail. |
| [permit-review](permit-review.md) | T3 | stdlib `security-review` | Review a design for code and permit compliance. |

## Memory
Every workflow ends by appending to a local register in
[../memory/registers/](../memory/registers/): design choices to
[design-decisions](../memory/registers/design-decisions.md), code findings to
[code-compliance-log](../memory/registers/code-compliance-log.md), and project
learning to [design-lessons](../memory/registers/design-lessons.md). A run that
ships without a memory update is incomplete (Directive #8).
