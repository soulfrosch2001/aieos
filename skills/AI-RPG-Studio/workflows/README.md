<!-- Entity README. Contract: ../../kernel/contracts/workflow.md -->

# Workflows
Status: stable
Type: workflow-index
Owner: rpg-orchestrator
Extends: none

**Purpose:** the studio's repeatable production paths. Every recurring piece of
work — a campaign, a standalone module, a playtest — runs through one of these so
the route, gates, and memory writes are the same every time and nobody improvises
process under deadline.

## How these relate to the kernel
Each workflow here **extends** a stdlib workflow rather than reinventing it
(Directive [#4](../../kernel/laws/prime-directives.md) — inherit, don't fork). The
orchestrator sizes every request against
[engagement-tiers](../../kernel/laws/engagement-tiers.md) and routes per
[orchestration](../../kernel/protocols/orchestration.md); sign-off follows
[decision-authority](../../kernel/laws/decision-authority.md).

## The workflows
| Workflow | Tier | Extends (stdlib) | What it produces |
|----------|------|------------------|------------------|
| [campaign-design](campaign-design.md) | [T2](../../kernel/laws/engagement-tiers.md) | [feature](../../workflows/feature.md) | A playable campaign, premise to first module. |
| [adventure-module](adventure-module.md) | [T2](../../kernel/laws/engagement-tiers.md) | [planning](../../workflows/planning.md) | A standalone, drop-in adventure module. |
| [playtest](playtest.md) | [T2](../../kernel/laws/engagement-tiers.md) | [research](../../workflows/research.md) | Evidence about whether rules or an adventure hold up at the table. |

## Shared discipline
- **Two gates, always.** No campaign fans out before Gate A; nothing publishes
  before Gate B. Gates are blocking, not advisory.
- **Memory is part of done.** A run is not complete until its registers
  ([canon](../memory/registers/canon.md),
  [encounter-log](../memory/registers/encounter-log.md),
  [campaign-ideas](../memory/registers/campaign-ideas.md)) are appended.
- **Creative veto is real.** The [creative-director](../01-executive/creative-director/)
  can stop incoherent world or system work at any gate; the
  [chief-auditor](../01-executive/chief-auditor/) holds the quality/process veto.

## Repo map
- Up: [studio root](../README.md) · [company charter](../00-company/COMPANY.md)
- Sideways: [councils](../councils/) · [memory](../memory/) · [reports](../reports/)
- Inherited: [../../kernel/](../../kernel/) · [../../templates/](../../templates/)
