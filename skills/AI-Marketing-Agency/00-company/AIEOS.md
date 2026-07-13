# AI Marketing Agency — AIEOS Mount Adapter
Status: stable
Type: company
Owner: agency-orchestrator
Extends: kernel + stdlib
Requires kernel: ^1.0.0

## What this is
This company is **kernel-native**: it was born on AIEOS and forks nothing. This
adapter is not a reconciliation of pre-kernel artifacts — there are none. It
declares what the company **inherits** from the kernel and standard library and
the local entities it **overrides by name**, each adding only strictness
(Directive [#6](../../kernel/laws/prime-directives.md)). There is no legacy
governance to retain.

## Inherited from AIEOS (source of truth)
- **Laws** — all [Prime Directives](../../kernel/laws/prime-directives.md),
  [engagement tiers](../../kernel/laws/engagement-tiers.md),
  [decision authority](../../kernel/laws/decision-authority.md).
- **Protocols** — [communication](../../kernel/protocols/communication.md),
  [orchestration](../../kernel/protocols/orchestration.md) (15-agent fan-out),
  [escalation](../../kernel/protocols/escalation.md),
  [memory-flow](../../kernel/protocols/memory-flow.md),
  [lifecycle](../../kernel/protocols/lifecycle.md).
- **Stdlib defaults** — every [workflow](../../workflows/),
  [council](../../councils/), [template](../../templates/), and
  [memory register](../../memory/) it does not override below.
- **Resolution order** — names resolve local-first per the
  [loader](../../kernel/loader/resolution-order.md); local entities override **by
  name** and add only strictness.

## Executive mapping → decision-authority levels
Per the [decision-authority law](../../kernel/laws/decision-authority.md).

| Local role | Kernel level |
|------------|--------------|
| [ceo](../01-executive/ceo/) | CEO |
| [strategy-director](../01-executive/strategy-director/) | CTO (+ strategy veto on off-brand/off-strategy work) |
| [operations-director](../01-executive/operations-director/) | COO |
| [chief-auditor](../01-executive/chief-auditor/) | Chief Auditor (quality veto) |
| [agency-orchestrator](../01-executive/agency-orchestrator/) | Supreme Orchestrator (routing, 15-agent fan-out) |

## Local overrides (by name)
Local entities that override a stdlib default of the same lineage, adding only
strictness (Directive [#6](../../kernel/laws/prime-directives.md)).

| Local entity | Overrides stdlib | Why |
|--------------|------------------|-----|
| [campaign-council](../councils/campaign-council/) | [feature-council](../../councils/feature-council/) | Designs and debates a campaign before launch; chaired by operations-director. |
| [brand-council](../councils/brand-council/) | [architecture-council](../../councils/architecture-council/) | Guards brand and strategic coherence across engagements; chaired by strategy-director. |
| [campaign-launch](../workflows/campaign-launch.md) | [feature](../../workflows/feature.md) | T2 campaign build-and-ship with mandatory measurement. |
| [content-production](../workflows/content-production.md) | [documentation](../../workflows/documentation.md) | T1 content authoring and publishing pipeline. |
| [brand-review](../workflows/brand-review.md) | [architecture-review](../../workflows/architecture-review.md) | T3 brand-coherence gate as a hard quality gate. |
| [brand-decisions](../memory/registers/brand-decisions.md) | [architecture-decisions](../../memory/registers/architecture-decisions.md) | Records brand and positioning decisions of record. |
| [campaign-results](../memory/registers/campaign-results.md) | [lessons-learned](../../memory/registers/lessons-learned.md) | Records measured campaign outcomes and what was learned. |
| [audience-insights](../memory/registers/audience-insights.md) | [future-improvements](../../memory/registers/future-improvements.md) | Records audience evidence that should shape future work. |

## Memory register mapping
| Local register | Stdlib schema | Relationship |
|----------------|---------------|--------------|
| [brand-decisions.md](../memory/registers/brand-decisions.md) | [architecture-decisions.md](../../memory/registers/architecture-decisions.md) | extends (owner: strategy-director) |
| [campaign-results.md](../memory/registers/campaign-results.md) | [lessons-learned.md](../../memory/registers/lessons-learned.md) | extends (owner: performance-marketer) |
| [audience-insights.md](../memory/registers/audience-insights.md) | [future-improvements.md](../../memory/registers/future-improvements.md) | extends (owner: market-researcher) |

## Conformance
Mounted kernel-native when: this adapter is present, all five executives map to
decision-authority levels, every local override names the stdlib entity it
extends, the register mapping is complete, no folder is missing a README, and the
company is listed in
[kernel/registry/registry.md](../../kernel/registry/registry.md) as `mounted`.
