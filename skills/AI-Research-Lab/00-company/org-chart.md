# AI Research Lab — Org Chart
Status: stable
Type: reference
Owner: lab-orchestrator
Extends: kernel + stdlib

Reporting structure across the five executives and three departments. Authority
levels bind to [decision-authority.md](../../kernel/laws/decision-authority.md);
the orchestrator routes and never runs the science (Directive
[#2](../../kernel/laws/prime-directives.md)).

## Reporting tree
```
lab-director  (CEO — research agenda, what the lab pursues)
├── lab-orchestrator  (Supreme Orchestrator — routes questions, sizes tiers, fans out; runs no science)
├── research-director  (CTO-equiv — scientific rigor; holds the RIGOR VETO)
│   └── 02-research/
│       ├── principal-investigator   (department lead)
│       ├── research-scientist
│       └── experimental-designer
├── operations-lead  (COO-equiv — research operations, resourcing, sequencing, timelines)
│   ├── 03-analysis/
│   │   ├── data-scientist           (department lead)
│   │   ├── statistician
│   │   └── replication-specialist
│   └── 04-publication/
│       ├── science-writer           (department lead)
│       └── ethics-officer
└── chief-auditor  (Chief Auditor — rigor/ethics + quality veto; runs conformance, never runs or directs experiments)
```

## Executives
| Role | Kernel level | Owns | Veto |
|------|--------------|------|------|
| lab-director | CEO | Research agenda and what the lab pursues; sets direction alone. | — |
| research-director | CTO | Scientific rigor and methodology — soundness and reproducibility. | Unsound or non-reproducible work. |
| operations-lead | COO | Research operations, resourcing, sequencing, and timelines. | — |
| chief-auditor | Chief Auditor | Rigor/ethics and quality conformance; runs the conformance check. | Quality/process and rigor/ethics violations. |
| lab-orchestrator | Supreme Orchestrator | Routing, tier sizing, fan-out, integration. | — |

## Departments
| Dept | Lead | Reports to | Owns |
|------|------|-----------|------|
| 02-research | principal-investigator | research-director | Hypotheses, experimental design, running experiments. |
| 03-analysis | data-scientist | operations-lead | Data analysis, statistical inference, independent replication. |
| 04-publication | science-writer | operations-lead | The written claim, peer-review readiness, and research ethics. |

## How authority flows
- **Routing** — every request enters through the lab-orchestrator, which sizes it
  to a [tier](../../kernel/laws/engagement-tiers.md) and fans it out (up to 15
  agents, Directive [#4](../../kernel/laws/prime-directives.md)).
- **Rigor gate** — methodology and claim decisions clear the research-director's
  scientific-rigor veto before a finding advances.
- **Ethics gate** — studies touching human data, sensitive domains, or dual-use
  risk clear the ethics-officer via the ethics-council before any experiment runs.
- **Quality gate** — the chief-auditor's veto stops work on a quality, process,
  rigor, or ethics violation; only a human maintainer overrides it
  ([decision-authority.md](../../kernel/laws/decision-authority.md)).
- **Escalation** — deadlocks rise one level per
  [../../kernel/protocols/escalation.md](../../kernel/protocols/escalation.md).
