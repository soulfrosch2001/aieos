# AI Architecture Studio — Org Chart
Status: stable
Type: reference
Owner: principal
Extends: none

The reporting structure of the studio: five executives bound to
[decision-authority](../../kernel/laws/decision-authority.md) levels, and three
departments of agents. The orchestrator routes work across all of it and never
designs ([Directive #2](../../kernel/laws/prime-directives.md)).

## Executives (01-executive/)
```
                         principal (CEO)
                         design vision · project selection
                                  |
        +-------------------------+-------------------------+
        |                         |                         |
 design-director (CTO)    project-director (COO)    chief-auditor (Chief Auditor)
 design coherence         schedules · budgets       conformance · code/quality veto
 + design VETO            delivery sequencing        (never designs, never directs)
        |                         |
        |   02-design             |   04-delivery
        |                         |
        +----------+--------------+
                   |
            03-technical
                   |
        studio-orchestrator (Supreme Orchestrator)
        routes · sizes (T0–T4) · fans out (≤15) · integrates — across every box above
```

The **studio-orchestrator** sits across the chart, not under any one executive:
it decomposes incoming work, sizes it by [tier](../../kernel/laws/engagement-tiers.md),
fans it out to up to 15 parallel tracks ([Directive #4](../../kernel/laws/prime-directives.md)),
and integrates the results. It holds no design or delivery authority of its own.

## Reporting lines
| Role | Reports to | Decision right |
|------|-----------|----------------|
| [principal](../01-executive/principal/) | — (human maintainer) | Direction, alone. |
| [design-director](../01-executive/design-director/) | principal | Design coherence, alone; **design veto**. |
| [project-director](../01-executive/project-director/) | principal | Sequencing, schedule, budget, alone. |
| [chief-auditor](../01-executive/chief-auditor/) | principal | Quality/code **veto**; recommends only otherwise. |
| [studio-orchestrator](../01-executive/studio-orchestrator/) | principal | Routing and sizing, alone; never builds. |

## Departments (0N-<dept>/)
| Dept | Lead | Reports to | Agents |
|------|------|-----------|--------|
| [02-design](../02-design/) | [lead-architect](../02-design/lead-architect/) | design-director | lead-architect, [concept-architect](../02-design/concept-architect/), [sustainability-designer](../02-design/sustainability-designer/) |
| [03-technical](../03-technical/) | [structural-engineer](../03-technical/structural-engineer/) | design-director (quality) + project-director (delivery) | structural-engineer, [building-systems-engineer](../03-technical/building-systems-engineer/), [bim-specialist](../03-technical/bim-specialist/) |
| [04-delivery](../04-delivery/) | [project-architect](../04-delivery/project-architect/) | project-director | project-architect, [construction-administrator](../04-delivery/construction-administrator/) |

03-technical answers to two executives by design: the **design-director** owns
whether the engineering preserves design intent, while the **project-director**
owns whether it lands on schedule and budget. When the two pull in opposite
directions, the conflict escalates to the principal per
[escalation.md](../../kernel/protocols/escalation.md).

## Councils (councils/)
- [design-review-council](../councils/design-review-council/) — chair:
  design-director. Members drawn from 02-design and 03-technical.
- [code-compliance-council](../councils/code-compliance-council/) — chair:
  chief-auditor. Members drawn from 03-technical and 04-delivery.

## Authority resolution
Decisions resolve at the lowest owning level; deadlocks escalate one level up the
chain ([decision-authority.md](../../kernel/laws/decision-authority.md)). A
**chief-auditor veto** stops the work and only the human maintainer overrides it.
A **design-director design veto** does the same on design-coherence grounds.
