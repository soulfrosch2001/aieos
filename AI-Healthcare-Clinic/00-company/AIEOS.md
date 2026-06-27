# AI Healthcare Clinic — AIEOS Mount Adapter
Status: stable
Type: plugin
Owner: medical-director
Extends: kernel + stdlib
Requires kernel: ^1.1.0

## What this is
AI Healthcare Clinic is a **kernel-native** company: it was born on the kernel and
forks nothing. This adapter binds the company to the platform — it declares what the
company **inherits**, what it **overrides by name**, and where its standing telemetry
is published. There is no legacy governance to reconcile; every law and protocol
comes from the kernel as the single source of truth
([Directive #5](../../kernel/laws/prime-directives.md),
[Directive #6](../../kernel/laws/prime-directives.md)).

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
- **Loader** — the kernel
  [resolution order](../../kernel/loader/resolution-order.md): local-by-name → stdlib → kernel.
- **Stdlib defaults** — every workflow, council, template, and memory register this
  company does not override below.

## Executive mapping → decision-authority levels
Per [decision-authority.md](../../kernel/laws/decision-authority.md).
| Local role | Kernel level |
|------------|--------------|
| medical-director | CEO — sets clinic direction and organizational standards of care; decides alone |
| chief-medical-officer | CTO (+ clinical-process veto) — owns coherence of care processes; vetoes unsafe process |
| operations-director | COO — owns scheduling, throughput, delivery; decides sequencing alone |
| chief-compliance-auditor | Chief Auditor (quality veto, absolute & regulated) — never treats, never directs |
| intake-orchestrator | Supreme Orchestrator — routes cases and fans out coordination; never diagnoses (Directive #2) |

## Local overrides (by name)
Local entities that intentionally extend a stdlib default of the same family.
| Local entity | Extends stdlib | Why |
|--------------|----------------|-----|
| care-review-council | feature-council | Care-process review under a clinical-safety frame |
| safety-council | security-council | Patient safety as the harm axis |
| patient-intake (T2) | planning | Plans the care path before coordination |
| care-coordination (T2) | feature | Coordinates care delivery like a feature build |
| safety-review (T3) | security-review | Regulated safety gate mirroring the security gate |
| care-protocols | architecture-decisions | Care-process decisions are the clinic's architecture |
| incident-register | known-issues | Regulated incident / near-miss ledger |
| care-lessons | lessons-learned | Coordination lessons fed back into the care path |

## Memory register mapping
| Local register | Stdlib schema | Relationship |
|----------------|---------------|--------------|
| [care-protocols.md](../memory/registers/care-protocols.md) | architecture-decisions.md | extends |
| [incident-register.md](../memory/registers/incident-register.md) | known-issues.md | extends |
| [care-lessons.md](../memory/registers/care-lessons.md) | lessons-learned.md | extends |

## Reporting
This company publishes its standing telemetry at the stable default path
`reports/health-report.md`, built from
[report.template.md](../../templates/report.template.md) and scored against the ten
quality dimensions, per the
[reporting protocol](../../kernel/protocols/reporting.md). The
chief-compliance-auditor owns the report and keeps it current; the Government
**reads** it and never reaches in to compute it
([Directive #2](../../kernel/laws/prime-directives.md)).

## Conformance
Mounted kernel-native when: this adapter is present, the executives map to
decision-authority levels, the register mapping is complete, the health report is
published at `reports/health-report.md`, and the company is listed in
[../../kernel/registry/registry.md](../../kernel/registry/registry.md) as `mounted`.
