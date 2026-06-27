# Workflows

Status: stable
Type: workflow
Owner: agency-orchestrator
Extends: none

The AI Marketing Agency's **local workflow library** — the repeatable procedures
that take client work from brief to live. Each one **overrides a stdlib workflow
by name** and adds only stricter, agency-specific gates (Prime Directive
[#6](../../kernel/laws/prime-directives.md); loader
[resolution-order](../../kernel/loader/resolution-order.md)). We never loosen a
Kernel Law and we never fork a stdlib procedure — we inherit it and tighten it.

A workflow **routes** work to agents; it never inlines their craft (Directive
[#2](../../kernel/laws/prime-directives.md)). Every workflow here passes **Gate A**
(plan approved before build) and **Gate B** (quality gates passed before ship),
and **ends by writing to a memory register** (Directive
[#8](../../kernel/laws/prime-directives.md)).

## Choosing a workflow

| Workflow | Tier | Extends | Use it when |
|----------|------|---------|-------------|
| [campaign-launch](campaign-launch.md) | [T2](../../kernel/laws/engagement-tiers.md) | stdlib [feature](../../workflows/feature.md) | Taking a campaign from brief to live, gated on brand and measurement. |
| [content-production](content-production.md) | [T1](../../kernel/laws/engagement-tiers.md) | stdlib [documentation](../../workflows/documentation.md) | Producing and reviewing a single content piece. |
| [brand-review](brand-review.md) | [T3](../../kernel/laws/engagement-tiers.md) | stdlib [architecture-review](../../workflows/architecture-review.md) | Reviewing or evolving brand strategy before it sets. |

## Selection rules
- **Size first (Tier), then pick.** The tier sets fan-out and sign-off — see
  [orchestration](../../kernel/protocols/orchestration.md) and
  [decision-authority](../../kernel/laws/decision-authority.md).
- When two workflows fit, the **higher tier wins the decision**; the lower tier
  may execute it ([engagement-tiers](../../kernel/laws/engagement-tiers.md)).
- The **strategy-director's brand veto** can halt any of these at Gate A or Gate B
  when work runs off-brand or off-strategy; the **chief-auditor** holds the quality
  veto. Neither directs the work — they gate it.

## Memory
Every workflow's last step appends to a register under
[../memory/registers/](../memory/registers/). Knowledge flows down, decisions of
consequence flow up ([memory-flow](../../kernel/protocols/memory-flow.md)).
