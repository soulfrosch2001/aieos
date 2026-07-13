# AI Music Label — Org Chart
Status: stable
Type: org-chart
Owner: label-head
Extends: none

## Reporting structure

```
label-head (CEO — sets roster and label direction)
│
├── label-orchestrator (Supreme Orchestrator — routes, sizes, fans out; never produces)
│
├── ar-director (CTO + artistic veto — artistic coherence of the catalog)
│   └── 02-ar/  (lead: ar-scout)
│       ├── ar-scout
│       ├── artist-manager
│       └── repertoire-curator
│
├── operations-director (COO — release schedule and delivery; sequences alone)
│   ├── 03-production/  (lead: music-producer)
│   │   ├── music-producer
│   │   ├── audio-engineer
│   │   └── mastering-engineer
│   └── 04-marketing/  (lead: marketing-manager)
│       ├── marketing-manager
│       └── release-coordinator
│
└── chief-auditor (Chief Auditor — quality veto; runs conformance; never produces, never directs)
```

## How authority flows

- **label-head** sets the roster and the label's direction and decides direction
  alone, per [decision-authority](../../kernel/laws/decision-authority.md) CEO level.
- **label-orchestrator** routes every request, sizes it to an engagement tier,
  fans work out to up to 15 parallel agents, and integrates — it **never
  implements** ([Directive #2](../../kernel/laws/prime-directives.md)).
- **ar-director** owns artistic coherence and holds an **artistic veto** over
  signings and catalog entries; chairs the [signing-council](../councils/signing-council/README.md).
- **operations-director** owns the release schedule and delivery and decides
  sequencing alone; production and marketing deliver into that schedule.
- **chief-auditor** holds a **quality veto** and runs conformance; it sits
  outside the production line and **never produces and never directs**.

## Department ownership (disjoint)

| Department | Lead | Owns |
|------------|------|------|
| [02-ar](../02-ar/README.md) | ar-scout | Discovery, evaluation, and signing of artists; the pipeline. |
| [03-production](../03-production/README.md) | music-producer | Demo-to-master production and delivery-ready audio. |
| [04-marketing](../04-marketing/README.md) | marketing-manager | Campaign planning and distribution to audiences. |

Ownership is disjoint per the [orchestration protocol](../../kernel/protocols/orchestration.md):
no two agents own the same files in a single fan-out.

## Cross-company communication

The AI Music Label never talks to another company directly. All inter-company
requests route through the Government ([Directive #4](../../kernel/laws/prime-directives.md),
[communication protocol](../../kernel/protocols/communication.md)).
