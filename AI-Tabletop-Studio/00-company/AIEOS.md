<!--
Mount adapter for AI Tabletop Studio. Based on templates/company-adapter.template.md,
adapted for a KERNEL-NATIVE company: it predates nothing, forked nothing, and so
carries no legacy-governance table. Non-destructive — it only ADDS bindings.
Contract: ../../kernel/contracts/plugin.md
-->

# AI Tabletop Studio — AIEOS Mount Adapter
Status: stable
Type: plugin
Owner: studio-orchestrator
Extends: kernel + stdlib
Requires kernel: ^1.0.0

## What this is
AI Tabletop Studio was **born on the kernel**. There is no pre-AIEOS structure to
reconcile and no forked governance to retire. This adapter therefore declares only
what the studio **inherits**, what it **overrides by name**, and how its executives
**bind to decision-authority**. Mounting changes no existing file (Directive
[#7](../../kernel/laws/prime-directives.md)).

## Inherited from AIEOS (source of truth)
- **Laws** — all [Prime Directives](../../kernel/laws/prime-directives.md),
  [engagement tiers](../../kernel/laws/engagement-tiers.md),
  [decision authority](../../kernel/laws/decision-authority.md).
- **Protocols** — communication, orchestration (15-agent), escalation, memory-flow,
  lifecycle, from [../../kernel/protocols/](../../kernel/protocols/).
- **Stdlib defaults** — every [workflow](../../workflows/), [council](../../councils/),
  [template](../../templates/), and [memory register](../../memory/) not overridden
  below is inherited as-is.

## Legacy governance
**None.** This company is kernel-native; it never forked a law, protocol, or stdlib
entity, so there is nothing superseded to retain. (Contrast with the migration
adapters of pre-kernel companies.)

## Executive mapping → decision-authority levels
Bindings to [decision-authority.md](../../kernel/laws/decision-authority.md).
| Local role | Kernel level |
|------------|--------------|
| ceo | CEO |
| design-director | CTO (+ design veto — design incoherence) |
| producer | COO |
| chief-auditor | Chief Auditor (quality veto) |
| studio-orchestrator | Supreme Orchestrator (routing — routes, never builds, Directive [#2](../../kernel/laws/prime-directives.md)) |

## Local overrides (by name)
Local entities that intentionally replace a stdlib default of the same name,
inheriting it and adding only strictness (Directive [#6](../../kernel/laws/prime-directives.md)).
| Local entity | Overrides stdlib | Why |
|--------------|------------------|-----|
| `councils/design-council` | [councils/feature-council](../../councils/feature-council/) | Sizes a design decision and gates it on the design-director's design veto. |
| `councils/balance-council` | [councils/performance-council](../../councils/performance-council/) | Adjudicates numeric balance against recorded playtest evidence. |
| `workflows/rules-design.md` | [workflows/feature.md](../../workflows/feature.md) | Adds design-coherence and testable-text gates to feature delivery. |
| `workflows/playtest.md` | [workflows/research.md](../../workflows/research.md) | Turns table sessions into recorded evidence before any quality gate. |
| `workflows/expansion.md` | [workflows/planning.md](../../workflows/planning.md) | Plans content that extends a shipped base game without re-forking its rules. |

## Memory register mapping
Registers extend stdlib schemas (Directive [#8](../../kernel/laws/prime-directives.md), append-mostly).
| Local register | Stdlib schema | Relationship |
|----------------|---------------|--------------|
| `memory/registers/design-decisions.md` | [architecture-decisions.md](../../memory/registers/architecture-decisions.md) | extends |
| `memory/registers/balancing-history.md` | [technical-debt.md](../../memory/registers/technical-debt.md) | extends |
| `memory/registers/playtest-feedback.md` | [lessons-learned.md](../../memory/registers/lessons-learned.md) | extends |

## Conformance
Mounted as **kernel-native** when: this adapter is present, the five executives map
to decision-authority, the register mapping is complete, every override is named and
justified, and the studio is listed in
[../../kernel/registry/registry.md](../../kernel/registry/registry.md) as `mounted`
(origin: kernel-native). See [../../kernel/contracts/plugin.md](../../kernel/contracts/plugin.md).
