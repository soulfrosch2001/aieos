# AI Publishing House — AIEOS Mount Adapter
Status: stable
Type: plugin
Owner: house-orchestrator
Extends: kernel + stdlib
Requires kernel: ^1.0.0

## What this is
AI Publishing House is **kernel-native**: it was born on AIEOS and forks nothing
([Directive #6](../../kernel/laws/prime-directives.md)). This adapter mounts the
house onto the kernel by declaring what it **inherits**, what it **overrides by
name**, and how its local artifacts map onto the standard library. There is no
legacy governance to reconcile — the house has none.

## Inherited from AIEOS (source of truth)
- **Laws** — all [Prime Directives](../../kernel/laws/prime-directives.md),
  [engagement tiers](../../kernel/laws/engagement-tiers.md),
  [decision authority](../../kernel/laws/decision-authority.md).
- **Protocols** — [communication](../../kernel/protocols/communication.md),
  [orchestration (15-agent)](../../kernel/protocols/orchestration.md),
  [escalation](../../kernel/protocols/escalation.md),
  [memory-flow](../../kernel/protocols/memory-flow.md),
  [lifecycle](../../kernel/protocols/lifecycle.md).
- **Loader** — [resolution order](../../kernel/loader/resolution-order.md): overrides
  resolve **by name**, adding strictness only.
- **Stdlib defaults** — every [workflow](../../workflows/), [council](../../councils/),
  [template](../../templates/), and [memory register](../../memory/) the house does
  not override.

## Executive mapping → decision-authority levels
| Local role | Kernel level |
|------------|--------------|
| [ceo](../01-executive/ceo/) | CEO |
| [editorial-director](../01-executive/editorial-director/) | CTO (+ editorial veto) |
| [production-director](../01-executive/production-director/) | COO |
| [chief-auditor](../01-executive/chief-auditor/) | Chief Auditor (quality veto) |
| [house-orchestrator](../01-executive/house-orchestrator/) | Supreme Orchestrator (routing) |

## Local overrides (by name)
Local entities that intentionally extend a stdlib default of related name, adding
strictness only.

| Local entity | Overrides stdlib | Why |
|--------------|------------------|-----|
| [acquisition-council](../councils/acquisition-council/) | [feature-council](../../councils/feature-council/) | Signing decision gate — chaired by ceo. |
| [editorial-council](../councils/editorial-council/) | [architecture-council](../../councils/architecture-council/) | Editorial direction gate — chaired by editorial-director. |
| [manuscript-acquisition](../workflows/manuscript-acquisition.md) | [planning](../../workflows/planning.md) | Plans the list before any editorial build (T2). |
| [editing-pipeline](../workflows/editing-pipeline.md) | [feature](../../workflows/feature.md) | Builds the finished book (T2). |
| [book-release](../workflows/book-release.md) | [release](../../workflows/release.md) | Gated print + on-sale release (T3). |
| [catalog-decisions](../memory/registers/catalog-decisions.md) | [architecture-decisions](../../memory/registers/architecture-decisions.md) | List/catalog decision record. |
| [editorial-standards](../memory/registers/editorial-standards.md) | [lessons-learned](../../memory/registers/lessons-learned.md) | Durable editorial craft. |
| [rights-and-sales](../memory/registers/rights-and-sales.md) | [roadmap](../../memory/registers/roadmap.md) | Forward rights/schedule/sales. |

## Memory register mapping
| Local register | Stdlib schema | Relationship |
|----------------|---------------|--------------|
| [catalog-decisions.md](../memory/registers/catalog-decisions.md) | [architecture-decisions.md](../../memory/registers/architecture-decisions.md) | extends |
| [editorial-standards.md](../memory/registers/editorial-standards.md) | [lessons-learned.md](../../memory/registers/lessons-learned.md) | extends |
| [rights-and-sales.md](../memory/registers/rights-and-sales.md) | [roadmap.md](../../memory/registers/roadmap.md) | extends |

## Conformance
Mounted kernel-native when: this adapter is present, the five executives map to
decision-authority levels, the register mapping is complete, every local override
names the stdlib it extends, and the company is listed in
[../../kernel/registry/registry.md](../../kernel/registry/registry.md) as `mounted`.
