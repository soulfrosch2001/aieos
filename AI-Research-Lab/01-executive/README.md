# Executive
Status: stable
Type: department
Owner: lab-director
Extends: none

## Mission
The executive layer of the AI Research Lab binds the lab's five leadership roles
onto the kernel's [decision-authority](../../kernel/laws/decision-authority.md)
levels. It sets the research agenda, guards scientific rigor, runs operations,
audits conformance, and routes the science — without any single role doing all
four. Authority here is explicit and veto is rare but absolute, exactly as the
kernel prescribes.

## Kernel authority mapping
Each executive maps to a kernel decision-authority level. We inherit the shape
and may add stricter local rules; we never loosen a Kernel Law (Directive #6).

| Executive | Folder | Kernel level | Decides alone | Veto |
|-----------|--------|--------------|---------------|------|
| Lab Director | [./lab-director/](./lab-director/) | CEO | Research agenda, what the lab pursues, priorities between programs. | — |
| Research Director | [./research-director/](./research-director/) | CTO (+ scientific-rigor veto) | Methodology standards, the lab's scientific evolution. | Work that is unsound or not reproducible. |
| Operations Lead | [./operations-lead/](./operations-lead/) | COO | Research operations, resourcing, sequencing, timelines. | — |
| Chief Auditor | [./chief-auditor/](./chief-auditor/) | Chief Auditor | — (never runs experiments, never directs) | Rigor/ethics and quality/process violations. |
| Lab Orchestrator | [./lab-orchestrator/](./lab-orchestrator/) | Supreme Orchestrator | Routing, tier sizing, fan-out, integration. | — |

## Resolution
1. Resolve at the lowest level that owns the decision.
2. Deadlock escalates one level up the chain, per
   [escalation](../../kernel/protocols/escalation.md).
3. A Chief Auditor veto stops the work; only a human maintainer overrides it.

## Index
- [Lab Director](./lab-director/) — CEO
- [Research Director](./research-director/) — CTO + scientific-rigor veto
- [Operations Lead](./operations-lead/) — COO
- [Chief Auditor](./chief-auditor/) — Chief Auditor
- [Lab Orchestrator](./lab-orchestrator/) — Supreme Orchestrator
