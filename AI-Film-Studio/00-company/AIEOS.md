# AI Film Studio — AIEOS Mount Adapter
Status: stable
Type: plugin
Owner: ceo
Extends: kernel + stdlib
Requires kernel: ^1.1.0

## What this is
AI Film Studio is **kernel-native**: it was born on the kernel and forks nothing
([Directive #6](../../kernel/laws/prime-directives.md)). This adapter binds the
studio to the kernel — it declares what the studio **inherits**, what it
**overrides by name**, and how its executives map to the decision-authority
levels. There is no legacy governance to reconcile; nothing here predates the
kernel.

## Inherited from AIEOS (source of truth)
- **Laws** — all [Prime Directives](../../kernel/laws/prime-directives.md),
  [engagement tiers](../../kernel/laws/engagement-tiers.md),
  [decision authority](../../kernel/laws/decision-authority.md).
- **Protocols** — [communication](../../kernel/protocols/communication.md),
  [orchestration](../../kernel/protocols/orchestration.md) (15-agent fan-out),
  [escalation](../../kernel/protocols/escalation.md),
  [memory-flow](../../kernel/protocols/memory-flow.md),
  [lifecycle](../../kernel/protocols/lifecycle.md),
  [reporting](../../kernel/protocols/reporting.md).
- **Stdlib defaults** — every [workflow](../../workflows/), [council](../../councils/),
  [template](../../templates/), and [memory register](../../memory/) the studio does
  not override, resolved per
  [resolution-order](../../kernel/loader/resolution-order.md).

## Executive mapping → decision-authority levels
Per [decision-authority](../../kernel/laws/decision-authority.md). The orchestrator
routes and never directs the film ([Directive #2](../../kernel/laws/prime-directives.md)).

| Local role | Kernel level |
|------------|--------------|
| [ceo](../01-executive/ceo/README.md) | CEO — sets studio direction and which films get made; decides alone. |
| [creative-director](../01-executive/creative-director/README.md) | CTO (+ creative veto) — owns story coherence across the slate; vetoes off-vision work. |
| [line-producer](../01-executive/line-producer/README.md) | COO — owns schedule, budget, delivery; sequences alone. |
| [chief-auditor](../01-executive/chief-auditor/README.md) | Chief Auditor — quality/process veto; never directs, never edits; runs conformance. |
| [studio-orchestrator](../01-executive/studio-orchestrator/README.md) | Supreme Orchestrator — routes, sizes, fans out, integrates; never directs. |

## Local overrides (by name)
Local entities that intentionally replace a stdlib default of the same related name
([resolution-order](../../kernel/loader/resolution-order.md)). Overrides only add
strictness, never loosen a law.

| Local entity | Extends / overrides stdlib | Why |
|--------------|----------------------------|-----|
| [greenlight-council](../councils/greenlight-council/README.md) | feature-council | CEO-chaired gate with creative veto to greenlight a film. |
| [creative-council](../councils/creative-council/README.md) | architecture-council | Story coherence across the slate is the studio's architecture. |
| [development](../workflows/development.md) | planning (T2) | Plan a film's story and greenlight case. |
| [production](../workflows/production.md) | feature (T3) | Build the film on screen. |
| [post-production](../workflows/post-production.md) | release (T3) | Assemble, finish, and deliver the cut. |
| [greenlight-decisions](../memory/registers/greenlight-decisions.md) | architecture-decisions | Records each greenlight and creative veto (owner: ceo). |
| [production-log](../memory/registers/production-log.md) | lessons-learned | Logs stage handoffs and production lessons (owner: line-producer). |
| [project-ideas](../memory/registers/project-ideas.md) | future-improvements | The development slate backlog (owner: screenwriter). |

## Conformance
Mounted **kernel-native** when: this adapter is present, the executives map to
decision-authority levels, all overrides extend a stdlib entity by name, and the
studio is listed in [../../kernel/registry/registry.md](../../kernel/registry/registry.md)
as `mounted`. The studio produces
[reports/health-report.md](../reports/health-report.md) per the
[reporting protocol](../../kernel/protocols/reporting.md).
