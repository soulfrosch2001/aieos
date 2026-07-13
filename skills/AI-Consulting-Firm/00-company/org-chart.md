# AI Consulting Firm — Org Chart
Status: stable
Type: reference
Owner: managing-partner
Extends: none

The reporting structure of the firm: five executives bound to
[decision-authority](../../kernel/laws/decision-authority.md) levels, and three
departments of agents. The orchestrator routes work across all of it and never
delivers ([Directive #2](../../kernel/laws/prime-directives.md)).

## Executives (01-executive/)
```
                      managing-partner (CEO)
                      practice direction · engagement selection
                                  |
        +-------------------------+-------------------------+
        |                         |                         |
 engagement-director (CTO)  operations-partner (COO)   chief-auditor (Chief Auditor)
 analytical rigor           staffing · deadlines       conformance · quality veto
 + methodology VETO         delivery sequencing        (never delivers, never directs)
        |                         |
        |   02-diagnosis          |   04-implementation
        |   03-strategy           |
        +----------+--------------+
                   |
        engagement-orchestrator (Supreme Orchestrator)
        routes · sizes (T0–T4) · fans out (≤15) · integrates — across every box above
```

The **engagement-orchestrator** sits across the chart, not under any one
executive: it decomposes incoming engagements, sizes them by
[tier](../../kernel/laws/engagement-tiers.md), fans them out to up to 15 parallel
tracks ([Directive #4](../../kernel/laws/prime-directives.md)), and integrates the
results. It holds no analytical or delivery authority of its own.

## Reporting lines
| Role | Reports to | Decision right |
|------|-----------|----------------|
| [managing-partner](../01-executive/managing-partner/) | — (human maintainer) | Direction and engagement selection, alone. |
| [engagement-director](../01-executive/engagement-director/) | managing-partner | Analytical rigor, alone; **methodology veto**. |
| [operations-partner](../01-executive/operations-partner/) | managing-partner | Staffing, sequencing, deadlines, alone. |
| [chief-auditor](../01-executive/chief-auditor/) | managing-partner | Quality **veto**; recommends only otherwise. |
| [engagement-orchestrator](../01-executive/engagement-orchestrator/) | managing-partner | Routing and sizing, alone; never delivers. |

## Departments (0N-<dept>/)
| Dept | Lead | Reports to | Agents |
|------|------|-----------|--------|
| [02-diagnosis](../02-diagnosis/) | [business-analyst](../02-diagnosis/business-analyst/) | engagement-director | business-analyst, [data-analyst](../02-diagnosis/data-analyst/), [research-lead](../02-diagnosis/research-lead/) |
| [03-strategy](../03-strategy/) | [strategy-consultant](../03-strategy/strategy-consultant/) | engagement-director (rigor) + operations-partner (delivery) | strategy-consultant, [financial-modeler](../03-strategy/financial-modeler/), [market-strategist](../03-strategy/market-strategist/) |
| [04-implementation](../04-implementation/) | [implementation-lead](../04-implementation/implementation-lead/) | operations-partner | implementation-lead, [change-manager](../04-implementation/change-manager/) |

03-strategy answers to two executives by design: the **engagement-director** owns
whether the strategy holds up to analytical scrutiny, while the
**operations-partner** owns whether it lands on schedule and within staffing.
When the two pull in opposite directions, the conflict escalates to the
managing-partner per [escalation.md](../../kernel/protocols/escalation.md).

## Councils (councils/)
- [engagement-council](../councils/engagement-council/) — chair:
  engagement-director. Members drawn from 02-diagnosis and 03-strategy.
- [quality-council](../councils/quality-council/) — chair: chief-auditor.
  Members drawn from across all three departments.

## Authority resolution
Decisions resolve at the lowest owning level; deadlocks escalate one level up the
chain ([decision-authority.md](../../kernel/laws/decision-authority.md)). A
**chief-auditor veto** stops the work and only the human maintainer overrides it.
An **engagement-director methodology veto** does the same on analytical-rigor
grounds.
