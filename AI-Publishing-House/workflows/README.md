# Workflows
Status: stable
Type: workflow-index
Owner: house-orchestrator
Extends: none

The house's local workflows. Each one **extends a stdlib workflow by name** and
adds strictness only ([resolution order](../../kernel/loader/resolution-order.md));
it never weakens the kernel default it inherits
([Directive #6](../../kernel/laws/prime-directives.md)). The house-orchestrator
sizes the tier, fans the work out into disjoint tracks, and integrates — it routes
manuscripts; it never edits ([Directive #2](../../kernel/laws/prime-directives.md)).

## Index
| Workflow | Tier | Extends stdlib | Purpose | Owner |
|----------|------|----------------|---------|-------|
| [manuscript-acquisition](manuscript-acquisition.md) | [T2](../../kernel/laws/engagement-tiers.md) | [planning](../../workflows/planning.md) | Evaluate and acquire a manuscript. | ceo |
| [editing-pipeline](editing-pipeline.md) | [T2](../../kernel/laws/engagement-tiers.md) | [feature](../../workflows/feature.md) | Move a manuscript through developmental, copy, and proof edits. | editorial-director |
| [book-release](book-release.md) | [T3](../../kernel/laws/engagement-tiers.md) | [release](../../workflows/release.md) | Publish and distribute a finished book. | production-director |

## How they chain
A title travels left to right: **acquisition** signs it onto the list,
**editing-pipeline** brings it to standard, and **book-release** prints and ships
it. Each workflow has real Gate A / Gate B blocking conditions and ends by
appending to the [local registers](../memory/registers/). Nothing advances to the
next workflow until the prior workflow's gates and memory updates are complete.

## See also
- [decision-authority](../../kernel/laws/decision-authority.md) — who signs off per tier.
- [orchestration](../../kernel/protocols/orchestration.md) — the 15-agent fan-out.
- [../councils/](../councils/) — the forums that pressure-test these workflows.
- [../../templates/workflow.template.md](../../templates/workflow.template.md) — the file shape.
