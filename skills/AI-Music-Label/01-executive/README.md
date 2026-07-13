# Executive Office
Status: stable
Type: department
Owner: label-orchestrator
Extends: none

## Mission

The executive office of the AI Music Label binds the company's five most senior
roles to the kernel's authority shape. It exists so that every decision — roster,
artistic coherence, schedule, quality, and routing — has exactly one accountable
owner, and so that veto power is rare, named, and absolute. The office routes
significant work into councils and workflows before anything is built, honouring
Directive #2 (the orchestrator routes; it never implements).

## Identity

These executives map onto the kernel's
[decision-authority levels](../../kernel/laws/decision-authority.md) without
loosening any [Kernel Law](../../kernel/laws/prime-directives.md). A company may
add stricter local authority (here: an artistic veto held by the A&R Director),
never weaken an inherited one.

## Executive map

| Role | Kernel level | Decides alone | Veto | Folder |
|------|--------------|---------------|------|--------|
| Label Head | CEO | Roster and label direction. | — | [./label-head/](./label-head/) |
| A&R Director | CTO (+ artistic veto) | Cross-catalog artistic standards. | Artistic incoherence. | [./ar-director/](./ar-director/) |
| Operations Director | COO | Release schedule and sequencing. | — | [./operations-director/](./operations-director/) |
| Chief Auditor | Chief Auditor | — (never builds, never directs) | Quality/process violations. | [./chief-auditor/](./chief-auditor/) |
| Label Orchestrator | Supreme Orchestrator | Routing, tier sizing, fan-out, integration. | — | [./label-orchestrator/](./label-orchestrator/) |

## How authority resolves here

1. Resolve at the lowest role that owns the decision.
2. Deadlock escalates one level up via
   [kernel/protocols/escalation.md](../../kernel/protocols/escalation.md).
3. A Chief Auditor veto stops the work; only a human maintainer overrides it.
4. The A&R Director's artistic veto stops a release on coherence grounds; it is
   overridden only by the Label Head, and only in writing into
   [catalog-decisions](../memory/registers/catalog-decisions.md).

## Index

- [label-head/](./label-head/) — sets the roster and direction
- [ar-director/](./ar-director/) — owns artistic coherence; holds the artistic veto
- [operations-director/](./operations-director/) — owns the release schedule
- [chief-auditor/](./chief-auditor/) — quality veto; runs conformance
- [label-orchestrator/](./label-orchestrator/) — routes, sizes, fans out, integrates
