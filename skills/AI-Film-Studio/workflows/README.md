# Workflows
Status: stable
Type: reference
Owner: studio-orchestrator
Extends: none

The studio's repeatable paths from trigger to memory update — the conveyor that
carries a film from pitch to delivered cut. Each workflow follows
[../../templates/workflow.template.md](../../templates/workflow.template.md) and
**extends a stdlib workflow by name**: we inherit the proven skeleton and tighten
it for film production ([Directive #6](../../kernel/laws/prime-directives.md)).

The [studio-orchestrator](../01-executive/studio-orchestrator/) sizes every request
by [engagement tier](../../kernel/laws/engagement-tiers.md) and selects the
workflow; it routes, fans out, and integrates but never directs the film
([Directive #2](../../kernel/laws/prime-directives.md)). Heavier tiers add councils,
gates, and executive sign-off per
[decision-authority](../../kernel/laws/decision-authority.md).

## Index
| Workflow | Tier | Extends | Purpose |
|----------|------|---------|---------|
| [development](development.md) | T2 | stdlib `planning` | Develop a project from pitch to greenlit script. |
| [production](production.md) | T3 | stdlib `feature` | Shoot a greenlit film on schedule and budget. |
| [post-production](post-production.md) | T3 | stdlib `release` | Edit, finish, and deliver the film. |

## The pipeline
The three workflows chain end to end: **development** hands a greenlit script to
**production**, which hands raw footage to **post-production**, which delivers the
final film. Each stage gates the next — nothing moves downstream until the upstream
gate clears, so a problem is caught where it is cheapest to fix.

## Memory
Every workflow ends by appending to a local register in
[../memory/registers/](../memory/registers/): greenlight calls to
[greenlight-decisions](../memory/registers/greenlight-decisions.md), production
learning to [production-log](../memory/registers/production-log.md), and surfaced
project seeds to [project-ideas](../memory/registers/project-ideas.md). A run that
ships without a memory update is incomplete
([Directive #8](../../kernel/laws/prime-directives.md)).
