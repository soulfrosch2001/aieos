# Executive Office
Status: stable
Type: department
Owner: managing-partner
Extends: none

## Mission

The executive office of the AI Consulting Firm sets practice direction, guards
analytical rigor, owns delivery, enforces quality, and routes engagements. Each
executive binds to a kernel decision-authority level so that authority is
explicit and veto is rare but absolute — see
[../../kernel/laws/decision-authority.md](../../kernel/laws/decision-authority.md).

The office implements nothing directly. It decides, vetoes, and routes; the
departments in [../02-diagnosis/](../02-diagnosis/),
[../03-strategy/](../03-strategy/), and
[../04-implementation/](../04-implementation/) deliver the work.

## Executives mapped to kernel levels

| Executive | Folder | Kernel level | Decides alone | Veto |
|-----------|--------|--------------|---------------|------|
| Managing Partner | [./managing-partner/](./managing-partner/) | CEO | Practice direction; which engagements to take. | — |
| Engagement Director | [./engagement-director/](./engagement-director/) | CTO (+ methodology veto) | Methodology and analytical standards across engagements. | Methodological incoherence. |
| Operations Partner | [./operations-partner/](./operations-partner/) | COO | Staffing, delivery sequencing, deadlines. | — |
| Chief Auditor | [./chief-auditor/](./chief-auditor/) | Chief Auditor | — (never delivers, never directs) | Quality/process violations. |
| Engagement Orchestrator | [./engagement-orchestrator/](./engagement-orchestrator/) | Supreme Orchestrator | Routing, tier sizing, fan-out, integration. | — |

## How authority resolves

1. Resolve at the lowest level that owns the decision.
2. Deadlock escalates one level up the chain
   ([../../kernel/protocols/escalation.md](../../kernel/protocols/escalation.md)).
3. A Chief Auditor or methodology veto stops the work; only a human maintainer
   overrides a quality veto.

The office inherits Directives #2 (the orchestrator routes, never implements),
#4 (no cross-company back-channels), #5 (inherit, don't fork), #6 (propose
framework changes), and #8 (one concept per file, every folder has a README) —
see [../../kernel/laws/prime-directives.md](../../kernel/laws/prime-directives.md).

## Index

- [managing-partner/](./managing-partner/) — practice direction (CEO)
- [engagement-director/](./engagement-director/) — methodology and rigor (CTO)
- [operations-partner/](./operations-partner/) — staffing and delivery (COO)
- [chief-auditor/](./chief-auditor/) — quality veto and conformance
- [engagement-orchestrator/](./engagement-orchestrator/) — routing and fan-out
