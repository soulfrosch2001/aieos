# AI Film Studio — Org Chart
Status: stable
Type: org-chart
Owner: ceo
Extends: none

## Reporting structure
The studio has five executives mapped to kernel decision-authority levels and three
departments, each with a lead. The orchestrator routes work to departments; it never
directs them ([Directive #2](../../kernel/laws/prime-directives.md)).

```
                          ceo (CEO — direction, which films get made)
                           |
        +------------------+--------------------+
        |                  |                    |
creative-director     line-producer       chief-auditor
(CTO + creative veto) (COO — schedule,     (Chief Auditor —
 story coherence)      budget, delivery)    quality/process veto)
        |                  |
        +--------+---------+
                 |
        studio-orchestrator
        (Supreme Orchestrator — routes, sizes, fans out, integrates)
                 |
   +-------------+----------------+
   |             |                |
02-development 03-production    04-post
 (lead:         (lead:           (lead:
  screenwriter)  director)        editor)
   |             |                |
 story-editor  cinematographer   vfx-supervisor
 development-   production-
 executive      designer
```

## Executives
| Role | Kernel level | Owns | Decision mode |
|------|--------------|------|---------------|
| [ceo](../01-executive/ceo/README.md) | CEO | Studio direction, the slate | Decides alone |
| [creative-director](../01-executive/creative-director/README.md) | CTO (+ creative veto) | Story and creative coherence | Veto on off-vision work |
| [line-producer](../01-executive/line-producer/README.md) | COO | Schedule, budget, delivery | Sequences alone |
| [chief-auditor](../01-executive/chief-auditor/README.md) | Chief Auditor | Quality and process conformance | Quality/process veto |
| [studio-orchestrator](../01-executive/studio-orchestrator/README.md) | Supreme Orchestrator | Routing, sizing, fan-out, integration | Routes; never directs |

## Departments
| Dept | Lead | Agents | Owns |
|------|------|--------|------|
| [02-development](../02-development/README.md) | screenwriter | screenwriter, story-editor, development-executive | Story, slate, greenlight case |
| [03-production](../03-production/README.md) | director | director, cinematographer, production-designer | What happens on screen |
| [04-post](../04-post/README.md) | editor | editor, vfx-supervisor | Assembly, finishing, delivery |

## Routing and escalation
Requests enter through the [studio-orchestrator](../01-executive/studio-orchestrator/README.md),
which sizes them to an [engagement tier](../../kernel/laws/engagement-tiers.md) and
fans work out across up to 15 parallel agents with disjoint ownership
([orchestration](../../kernel/protocols/orchestration.md)). Deadlocks escalate one
level up per [escalation](../../kernel/protocols/escalation.md). A
[chief-auditor](../01-executive/chief-auditor/README.md) veto stops the work and is
overridden only by a human maintainer
([decision-authority](../../kernel/laws/decision-authority.md)).
