# AI Music Label — Workflows
Status: stable
Type: workflow-index
Owner: label-orchestrator
Extends: none

The repeatable processes the label runs. Each workflow is sized to an
[Engagement Tier](../../kernel/laws/engagement-tiers.md), names its review gates,
and ends by writing to a [local memory register](../memory/registers/README.md).
The orchestrator routes and sizes; it never produces
([Directive #2](../../kernel/laws/prime-directives.md)).

## Workflows here

| Workflow | Tier | Extends (stdlib) | Purpose |
|----------|------|------------------|---------|
| [artist-signing](artist-signing.md) | T2 | planning | Evaluate and sign an artist. |
| [track-production](track-production.md) | T2 | feature | Take a track from demo to master. |
| [release-campaign](release-campaign.md) | T3 | release | Release and promote a record. |

## How these inherit

- We inherit the stdlib process named under **Extends** and override only by name
  ([Directive #5](../../kernel/laws/prime-directives.md)); resolution follows
  [../../kernel/loader/resolution-order.md](../../kernel/loader/resolution-order.md).
- Fan-out across parallel agents with disjoint ownership is the default
  ([Directive #4](../../kernel/laws/prime-directives.md), see
  [../../kernel/protocols/orchestration.md](../../kernel/protocols/orchestration.md)).
- Sign-off authority per tier comes from
  [../../kernel/laws/decision-authority.md](../../kernel/laws/decision-authority.md).
- Reports are emitted per
  [../../kernel/protocols/reporting.md](../../kernel/protocols/reporting.md).

## Lifecycle

A workflow is added by copying
[../../templates/workflow.template.md](../../templates/workflow.template.md) and
setting its `Extends:` to the stdlib process it specializes.
