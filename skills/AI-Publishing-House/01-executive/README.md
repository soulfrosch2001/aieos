# Executive

Status: stable
Type: department
Owner: house-orchestrator
Extends: none

## Mission

The executive layer of the AI Publishing House binds the house's senior roles to
the kernel's decision-authority levels. It exists so that every consequential
decision — what the house publishes, what meets the editorial bar, and what ships
when — has exactly one accountable owner and an explicit escalation path. The
executives set direction and hold veto; they do not do the line work of the
departments.

## Roles and kernel mapping

Each executive maps to a level in the kernel's
[decision-authority law](../../kernel/laws/decision-authority.md). Authority is
explicit and veto is rare but absolute (Directive
[#2](../../kernel/laws/prime-directives.md): the orchestrator routes, never
builds).

| Executive | Folder | Kernel level | Decides alone | Veto |
|-----------|--------|--------------|---------------|------|
| CEO | [./ceo/](./ceo/) | CEO | The list and house direction; what the house publishes. | — |
| Editorial Director | [./editorial-director/](./editorial-director/) | CTO (+ editorial veto) | Editorial standards across the list. | Works below standard. |
| Production Director | [./production-director/](./production-director/) | COO | Production schedule, print, and release timing/sequencing. | — |
| Chief Auditor | [./chief-auditor/](./chief-auditor/) | Chief Auditor | — (never edits, acquires, or directs) | Quality/process violations. |
| House Orchestrator | [./house-orchestrator/](./house-orchestrator/) | Supreme Orchestrator | Routing, tier sizing, fan-out, integration. | — |

## How decisions resolve

1. Resolve at the lowest level that owns the decision.
2. Deadlock escalates one level up the chain; see the kernel
   [escalation protocol](../../kernel/protocols/escalation.md).
3. A Chief Auditor veto stops the work; only a human maintainer overrides it.

## Index

- [ceo/](./ceo/) — sets the list and house direction
- [editorial-director/](./editorial-director/) — owns editorial standards and the below-standard veto
- [production-director/](./production-director/) — owns schedule, print, and release timing
- [chief-auditor/](./chief-auditor/) — quality/process veto; runs conformance
- [house-orchestrator/](./house-orchestrator/) — routes manuscripts and projects, sizes tiers, fans out
