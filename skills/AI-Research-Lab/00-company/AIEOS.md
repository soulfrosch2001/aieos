<!--
Mount adapter for AI Research Lab. Based on templates/company-adapter.template.md,
adapted for a KERNEL-NATIVE company: it predates nothing, forked nothing, and so
carries no legacy-governance table. Non-destructive — it only ADDS bindings.
Contract: ../../kernel/contracts/plugin.md
-->

# AI Research Lab — AIEOS Mount Adapter
Status: stable
Type: plugin
Owner: lab-orchestrator
Extends: kernel + stdlib
Requires kernel: ^1.0.0

## What this is
AI Research Lab was **born on the kernel**. There is no pre-AIEOS structure to
reconcile and no forked governance to retire. This adapter therefore declares only
what the lab **inherits**, what it **overrides by name**, and how its executives
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
  below is inherited as-is, resolved by name per
  [../../kernel/loader/resolution-order.md](../../kernel/loader/resolution-order.md).

## Legacy governance
**None.** This company is kernel-native; it never forked a law, protocol, or stdlib
entity, so there is nothing superseded to retain. (Contrast with the migration
adapters of pre-kernel companies.)

## Executive mapping → decision-authority levels
Bindings to [decision-authority.md](../../kernel/laws/decision-authority.md).
| Local role | Kernel level |
|------------|--------------|
| lab-director | CEO |
| research-director | CTO (+ scientific-rigor veto — unsound or non-reproducible work) |
| operations-lead | COO |
| chief-auditor | Chief Auditor (rigor/ethics + quality veto; runs conformance, never runs experiments) |
| lab-orchestrator | Supreme Orchestrator (routing — routes, never runs the science, Directive [#2](../../kernel/laws/prime-directives.md)) |

## Local overrides (by name)
Local entities that intentionally replace a stdlib default of the same name,
inheriting it and adding only strictness (Directive [#6](../../kernel/laws/prime-directives.md)).
| Local entity | Overrides stdlib | Why |
|--------------|------------------|-----|
| `councils/review-council` | [councils/architecture-council](../../councils/architecture-council/) | Chairs peer review under the research-director; gates findings on scientific rigor before publication. |
| `councils/ethics-council` | [councils/security-council](../../councils/security-council/) | Chairs research-ethics adjudication under the ethics-officer; clears human-data, sensitive, and dual-use risk before any experiment runs. |
| `workflows/experiment-design.md` (T2) | [workflows/research.md](../../workflows/research.md) | Adds pre-registration and reproducibility gates to research before data is touched. |
| `workflows/peer-review.md` (T3) | [workflows/security-review.md](../../workflows/security-review.md) | Adapts adversarial review into independent scientific peer review with a rigor veto. |
| `workflows/publication.md` (T2) | [workflows/documentation.md](../../workflows/documentation.md) | Adds ethics clearance and claim-integrity gates to producing the written result. |

## Memory register mapping
Registers extend stdlib schemas (Directive [#8](../../kernel/laws/prime-directives.md), append-mostly).
| Local register | Stdlib schema | Relationship |
|----------------|---------------|--------------|
| `memory/registers/findings.md` | [architecture-decisions.md](../../memory/registers/architecture-decisions.md) | extends |
| `memory/registers/experiment-log.md` | [lessons-learned.md](../../memory/registers/lessons-learned.md) | extends |
| `memory/registers/open-questions.md` | [future-improvements.md](../../memory/registers/future-improvements.md) | extends |

## Conformance
Mounted as **kernel-native** when: this adapter is present, the five executives map
to decision-authority, the register mapping is complete, every override is named and
justified, and the lab is listed in
[../../kernel/registry/registry.md](../../kernel/registry/registry.md) as `mounted`
(origin: kernel-native). See [../../kernel/contracts/plugin.md](../../kernel/contracts/plugin.md).
