<!--
Mount adapter for AI Game Balancing Studio. Based on templates/company-adapter.template.md,
adapted for a KERNEL-NATIVE company: it predates nothing, forked nothing, and so carries
no legacy-governance table. Non-destructive — it only ADDS bindings.
Contract: ../../kernel/contracts/plugin.md
-->

# AI Game Balancing Studio — AIEOS Mount Adapter
Status: stable
Type: plugin
Owner: studio-orchestrator
Extends: kernel + stdlib
Requires kernel: ^1.1.0

## What this is
AI Game Balancing Studio was **born on the kernel**. There is no pre-AIEOS structure to
reconcile and no forked governance to retire. This adapter therefore declares only what
the studio **inherits**, what it **overrides by name**, and how its executives **bind to
decision-authority**. Mounting changes no existing file (Directive
[#6](../../kernel/laws/prime-directives.md)).

This studio serves other companies (Game, Tabletop, RPG studios) **only through the
Government** — it never contacts a client studio directly (Directive
[#5](../../kernel/laws/prime-directives.md),
[communication protocol](../../kernel/protocols/communication.md)).

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
entity, so there is nothing superseded to retain. (Contrast with the migration adapters
of pre-kernel companies.)

## Executive mapping → decision-authority levels
Bindings to [decision-authority.md](../../kernel/laws/decision-authority.md).
| Local role | Kernel level |
|------------|--------------|
| ceo | CEO |
| balance-director | CTO (+ balance-methodology veto — unsound or unevidenced change) |
| operations-director | COO |
| chief-auditor | Chief Auditor (quality/process veto) |
| studio-orchestrator | Supreme Orchestrator (routing — routes, never tunes, Directive [#2](../../kernel/laws/prime-directives.md)) |

## Local overrides (by name)
Local entities that intentionally replace a stdlib default of the same name, inheriting
it and adding only strictness (Directive [#6](../../kernel/laws/prime-directives.md)).
| Local entity | Overrides stdlib | Why |
|--------------|------------------|-----|
| `councils/balance-council` | [councils/performance-council](../../councils/performance-council/) | Adjudicates numeric tunes against recorded evidence across economy, progression, and competitive surfaces. |
| `councils/methodology-council` | [councils/architecture-council](../../councils/architecture-council/) | Owns how the studio measures, models, and validates balance — its methodology coherence. |
| `workflows/balance-pass.md` | [workflows/feature.md](../../workflows/feature.md) | A T2 tuning pass that adds the evidence and systemic-coherence gates to delivery. |
| `workflows/playtest-analysis.md` | [workflows/research.md](../../workflows/research.md) | Turns playtest and telemetry data into validated balance findings. |
| `workflows/patch-balancing.md` | [workflows/release.md](../../workflows/release.md) | Ships tunes as a logged, reproducible patch via the Government. |

## Memory register mapping
Registers extend stdlib schemas (Directive [#8](../../kernel/laws/prime-directives.md), append-mostly).
| Local register | Stdlib schema | Relationship |
|----------------|---------------|--------------|
| `memory/registers/balance-decisions.md` | [architecture-decisions.md](../../memory/registers/architecture-decisions.md) | extends |
| `memory/registers/balancing-history.md` | [lessons-learned.md](../../memory/registers/lessons-learned.md) | extends |
| `memory/registers/balance-backlog.md` | [future-improvements.md](../../memory/registers/future-improvements.md) | extends |

## Reporting
The studio produces [../reports/health-report.md](../reports/health-report.md) per the
kernel [reporting protocol](../../kernel/protocols/), returned to the Government — never
to a client studio directly (Directive [#5](../../kernel/laws/prime-directives.md)).

## Conformance
Mounted as **kernel-native** when: this adapter is present, the five executives map to
decision-authority, the register mapping is complete, every override is named and
justified, and the studio is listed in
[../../kernel/registry/registry.md](../../kernel/registry/registry.md) as `mounted`
(origin: kernel-native). See [../../kernel/contracts/plugin.md](../../kernel/contracts/plugin.md).
