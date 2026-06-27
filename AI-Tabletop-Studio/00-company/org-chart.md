# AI Tabletop Studio — Org Chart
Status: stable
Type: reference
Owner: studio-orchestrator
Extends: kernel + stdlib

Reporting structure across the five executives and three departments. Authority
levels bind to [decision-authority.md](../../kernel/laws/decision-authority.md);
the orchestrator routes and never builds (Directive
[#2](../../kernel/laws/prime-directives.md)).

## Reporting tree
```
ceo  (CEO — direction, priorities)
├── studio-orchestrator  (Supreme Orchestrator — routes work, runs fan-out; builds nothing)
├── design-director  (CTO-equiv — design coherence; holds the DESIGN VETO)
│   └── 02-game-design/
│       ├── lead-game-designer   (department lead)
│       ├── systems-designer
│       └── balance-designer
├── producer  (COO-equiv — delivery, scheduling, what ships when)
│   ├── 03-content/
│   │   ├── rules-writer
│   │   ├── narrative-designer
│   │   └── component-designer    (rules-writer leads the department index)
│   └── 04-playtesting/
│       ├── playtest-lead         (department lead)
│       └── playtester
└── chief-auditor  (Chief Auditor — quality veto; never builds, never directs)
```

## Executives
| Role | Kernel level | Owns | Veto |
|------|--------------|------|------|
| ceo | CEO | Studio direction, the slate of games, priorities. | — |
| design-director | CTO | Design coherence — theme, mechanics, components as one game. | Design incoherence. |
| producer | COO | Delivery, scheduling, resourcing, ship dates. | — |
| chief-auditor | Chief Auditor | Quality and process conformance. | Quality/process violations. |
| studio-orchestrator | Supreme Orchestrator | Routing, tier sizing, fan-out, integration. | — |

## Departments
| Dept | Lead | Reports to | Owns |
|------|------|-----------|------|
| 02-game-design | lead-game-designer | design-director | Mechanics, systems, numeric balance — the rules engine. |
| 03-content | rules-writer | producer | Rulebook prose, narrative/theme, physical components. |
| 04-playtesting | playtest-lead | producer | Running table sessions and reporting outcomes as evidence. |

## How authority flows
- **Routing** — every request enters through the studio-orchestrator, which sizes
  it to a [tier](../../kernel/laws/engagement-tiers.md) and fans it out (up to 15
  agents, Directive [#4](../../kernel/laws/prime-directives.md)).
- **Design gate** — design-coherence decisions clear the design-director's design
  veto before any build.
- **Quality gate** — the chief-auditor's veto stops work on a quality or process
  violation; only a human maintainer overrides it
  ([decision-authority.md](../../kernel/laws/decision-authority.md)).
- **Escalation** — deadlocks rise one level per
  [../../kernel/protocols/escalation.md](../../kernel/protocols/escalation.md).
