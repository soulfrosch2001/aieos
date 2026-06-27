# AI Game Balancing Studio — Org Chart
Status: stable
Type: reference
Owner: studio-orchestrator
Extends: kernel + stdlib

Reporting structure across the five executives and three departments. Authority levels
bind to [decision-authority.md](../../kernel/laws/decision-authority.md); the
orchestrator routes and never tunes (Directive
[#2](../../kernel/laws/prime-directives.md)).

## Reporting tree
```
ceo  (CEO — direction, which titles to balance)
├── studio-orchestrator  (Supreme Orchestrator — routes briefs, runs fan-out; tunes nothing)
├── balance-director  (CTO-equiv — methodology and coherence; holds the BALANCE-METHODOLOGY VETO)
│   └── 02-economy/
│       ├── economy-balancer        (department lead)
│       ├── currency-designer
│       └── sink-source-analyst
├── operations-director  (COO-equiv — delivery, sequencing, what ships when)
│   ├── 03-progression/
│   │   ├── progression-balancer    (department lead)
│   │   ├── difficulty-tuner
│   │   └── encounter-balancer
│   └── 04-competitive/
│       ├── meta-analyst            (department lead)
│       └── matchmaking-analyst
└── chief-auditor  (Chief Auditor — quality/process veto; never tunes, never directs)
```

## Executives
| Role | Kernel level | Owns | Veto |
|------|--------------|------|------|
| ceo | CEO | Studio direction, which titles to balance, priorities. | — |
| balance-director | CTO | Balancing methodology and systemic coherence. | Unsound or unevidenced change. |
| operations-director | COO | Delivery, sequencing, what ships when. | — |
| chief-auditor | Chief Auditor | Quality and process conformance. | Quality/process violations. |
| studio-orchestrator | Supreme Orchestrator | Routing, tier sizing, fan-out, integration. | — |

## Departments
| Dept | Lead | Reports to | Owns |
|------|------|-----------|------|
| 02-economy | economy-balancer | balance-director | Currencies, sinks, sources, prices, rewards — the money loop. |
| 03-progression | progression-balancer | operations-director | Difficulty, pacing, encounters, the growth curve. |
| 04-competitive | meta-analyst | operations-director | The meta, matchups, and matchmaking fairness. |

## How authority flows
- **Routing** — every brief enters through the Government and is handed to the
  studio-orchestrator, which sizes it to a
  [tier](../../kernel/laws/engagement-tiers.md) and fans it out (up to 15 agents,
  Directive [#4](../../kernel/laws/prime-directives.md)).
- **Balance gate** — methodology and tune-soundness decisions clear the
  balance-director's veto before any change ships.
- **Quality gate** — the chief-auditor's veto stops work on a quality or process
  violation; only a human maintainer overrides it
  ([decision-authority.md](../../kernel/laws/decision-authority.md)).
- **No direct client contact** — results return to the Government, never to a client
  studio directly (Directive [#5](../../kernel/laws/prime-directives.md)).
- **Escalation** — deadlocks rise one level per
  [../../kernel/protocols/escalation.md](../../kernel/protocols/escalation.md).
