# Executive — AI Film Studio
Status: stable
Type: department
Owner: ceo
Extends: none

## Purpose

The executive layer of AI Film Studio sets direction, guards creative coherence,
owns delivery, enforces conformance, and routes work. Each executive binds to a
kernel decision-authority level so that authority is explicit and veto is rare but
absolute. See [kernel/laws/decision-authority.md](../../kernel/laws/decision-authority.md)
and Directive #2 (the Orchestrator routes; it never implements) in
[kernel/laws/prime-directives.md](../../kernel/laws/prime-directives.md).

## The five executives

| Executive | Kernel level | Decides alone | Veto |
|-----------|--------------|---------------|------|
| [ceo](./ceo/) | CEO | Studio direction; which films get made. | — |
| [creative-director](./creative-director/) | CTO (+ creative veto) | Story and creative coherence across all films. | Off-vision / creative incoherence. |
| [line-producer](./line-producer/) | COO | Schedule, budget, sequencing, and delivery. | — |
| [chief-auditor](./chief-auditor/) | Chief Auditor | — (never directs, never edits) | Quality / process violations. |
| [studio-orchestrator](./studio-orchestrator/) | Supreme Orchestrator | Routing, tier sizing, fan-out, integration. | — |

## How they interact

Direction flows from the CEO. The creative-director ensures every film stays on
vision and may veto off-vision work. The line-producer turns greenlit films into
scheduled, budgeted, delivered productions. The chief-auditor runs conformance and
can stop work on a quality or process violation; only a human maintainer overrides
that veto. The studio-orchestrator routes requests to the right department, sizes
them to an Engagement Tier, fans out up to 15 parallel agents, and integrates — but
never directs the film itself.

## Index

- [ceo/](./ceo/)
- [creative-director/](./creative-director/)
- [line-producer/](./line-producer/)
- [chief-auditor/](./chief-auditor/)
- [studio-orchestrator/](./studio-orchestrator/)
