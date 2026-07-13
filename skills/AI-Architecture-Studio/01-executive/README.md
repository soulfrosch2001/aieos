# Executive

Status: stable
Type: department
Owner: principal
Extends: none

The executive layer of **AI Architecture Studio**. Five roles, each bound to a
kernel decision-authority level. Authority is explicit and veto is rare but
absolute — see [decision-authority](../../kernel/laws/decision-authority.md).

## Executives → kernel levels

| Executive | Folder | Kernel level | Decides alone | Veto |
|-----------|--------|--------------|---------------|------|
| Principal | [./principal/](./principal/) | CEO | Firm design vision; which projects to take; direction. | — |
| Design Director | [./design-director/](./design-director/) | CTO (+ design veto) | Design coherence and quality standards. | **Design incoherence.** |
| Project Director | [./project-director/](./project-director/) | COO | Schedules, budgets, delivery sequencing. | — |
| Chief Auditor | [./chief-auditor/](./chief-auditor/) | Chief Auditor | — (never designs, never directs) | **Quality/code violations.** |
| Studio Orchestrator | [./studio-orchestrator/](./studio-orchestrator/) | Supreme Orchestrator | Routing, tier sizing, fan-out, integration. | — |

## Inheritance

These roles map the studio onto the kernel's government layer. The studio may add
stricter local authority, never loosen a Kernel Law. See
[prime-directives](../../kernel/laws/prime-directives.md) (#2, #4, #5, #6, #8) and
[engagement-tiers](../../kernel/laws/engagement-tiers.md).
