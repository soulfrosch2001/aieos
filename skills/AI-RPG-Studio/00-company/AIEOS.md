# AI RPG Studio — AIEOS Mount Adapter
Status: stable
Type: plugin
Owner: rpg-orchestrator
Extends: kernel + stdlib
Requires kernel: ^1.0.0

## What this is
AI RPG Studio is **kernel-native**: it was born inheriting AIEOS and forks
nothing. This adapter mounts the studio onto the kernel by declaring what it
**inherits**, what it **overrides by name**, and how its local artifacts map onto
the standard library. There is no pre-kernel governance to reconcile and no
legacy table — the kernel is the sole source of truth from birth.

## Inherited from AIEOS (source of truth)
- **Laws** — all [Prime Directives](../../kernel/laws/prime-directives.md)
  (notably #2, #4, #5, #6, #8),
  [engagement tiers T0-T4](../../kernel/laws/engagement-tiers.md),
  [decision authority](../../kernel/laws/decision-authority.md).
- **Protocols** — [communication](../../kernel/protocols/communication.md),
  [orchestration](../../kernel/protocols/orchestration.md),
  [escalation](../../kernel/protocols/escalation.md),
  [memory-flow](../../kernel/protocols/memory-flow.md),
  [lifecycle](../../kernel/protocols/lifecycle.md).
- **Loader** — [resolution order](../../kernel/loader/resolution-order.md).
- **Stdlib defaults** — every [workflow](../../workflows/),
  [council](../../councils/), [template](../../templates/), and
  [memory register](../../memory/) not overridden below.

## Executive mapping → decision-authority levels
| Local role | Kernel level |
|------------|--------------|
| [ceo](../01-executive/ceo/) | CEO |
| [creative-director](../01-executive/creative-director/) | CTO (+ creative veto on incoherent world/system) |
| [line-producer](../01-executive/line-producer/) | COO |
| [chief-auditor](../01-executive/chief-auditor/) | Chief Auditor (quality veto) |
| [rpg-orchestrator](../01-executive/rpg-orchestrator/) | Supreme Orchestrator (routing) |

## Local overrides (by name)
Local entities that extend a stdlib default of the same family.

| Local entity | Extends stdlib | Why |
|--------------|----------------|-----|
| [councils/design-council](../councils/design-council/) | architecture-council | Joint world + system coherence review; chair creative-director |
| [councils/lore-council](../councils/lore-council/) | feature-council | Canon admission of new lore/setting features; chair lore-master |
| [workflows/campaign-design](../workflows/campaign-design.md) | feature | Design a campaign as a shippable feature (T2) |
| [workflows/adventure-module](../workflows/adventure-module.md) | planning | Scope and sequence a single module (T2) |
| [workflows/playtest](../workflows/playtest.md) | research | Empirical balance/playability research (T2) |

## Memory register mapping
| Local register | Stdlib schema | Relationship | Owner |
|----------------|---------------|--------------|-------|
| [canon.md](../memory/registers/canon.md) | architecture-decisions | extends | lore-master |
| [encounter-log.md](../memory/registers/encounter-log.md) | lessons-learned | extends | balance-designer |
| [campaign-ideas.md](../memory/registers/campaign-ideas.md) | future-improvements | extends | campaign-writer |

## Conformance
Mounted kernel-native when: this adapter is present with
`Requires kernel: ^1.0.0`; the five executives map to decision-authority levels;
the override and register mappings are complete; and the studio is listed in
[../../kernel/registry/registry.md](../../kernel/registry/registry.md) as
`mounted`. No legacy-governance reconciliation applies — the studio inherited the
kernel at birth.
