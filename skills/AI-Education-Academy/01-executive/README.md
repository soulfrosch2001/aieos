# Executive
Status: stable
Type: department
Owner: dean
Extends: none

## Mission
The executive layer of AI Education Academy binds the academy's leadership roles
onto the kernel's [decision-authority](../../kernel/laws/decision-authority.md)
levels. It exists so that every direction-setting decision has exactly one owner,
every quality bar has a holder of veto, and routing stays separate from authoring
(Directive #2). These five roles set educational mission, guard pedagogy, run
delivery, enforce conformance, and orchestrate the whole.

## Executives → kernel authority

| Executive | Folder | Kernel level | Decides alone | Veto |
|-----------|--------|--------------|---------------|------|
| Dean | [./dean/](./dean/) | CEO | Educational mission, which programs exist, direction. | — |
| Academic Director | [./academic-director/](./academic-director/) | CTO (+ pedagogy veto) | Pedagogical standards, academic coherence. | Pedagogical incoherence. |
| Operations Director | [./operations-director/](./operations-director/) | COO | Delivery, cohorts, schedule, sequencing. | — |
| Chief Auditor | [./chief-auditor/](./chief-auditor/) | Chief Auditor | — (never teaches, never directs) | Quality/standards violations. |
| Academy Orchestrator | [./academy-orchestrator/](./academy-orchestrator/) | Supreme Orchestrator | Routing, tier sizing, fan-out, integration. | — |

## How authority resolves
1. Resolve at the lowest role that owns the decision.
2. Deadlock escalates one level up the chain — see
   [escalation protocol](../../kernel/protocols/escalation.md).
3. An Academic Director pedagogy veto or a Chief Auditor quality veto stops the
   work; only a human maintainer overrides it.
4. A company may add stricter local authority, never loosen a Kernel Law
   (Directive #6). See [prime-directives](../../kernel/laws/prime-directives.md).

## Index
- [Dean](./dean/) — educational mission and program portfolio (CEO).
- [Academic Director](./academic-director/) — pedagogy and academic quality (CTO + veto).
- [Operations Director](./operations-director/) — delivery and cohorts (COO).
- [Chief Auditor](./chief-auditor/) — conformance and quality veto.
- [Academy Orchestrator](./academy-orchestrator/) — routing and integration.
