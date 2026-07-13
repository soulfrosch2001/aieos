# AI Music Label — AIEOS Mount Adapter
Status: stable
Type: plugin
Owner: label-head
Extends: kernel + stdlib
Requires kernel: ^1.1.0

## What this is

This adapter mounts the **AI Music Label** onto the AIEOS kernel. The company is
**kernel-native**: it was born inheriting the kernel and forks nothing. The
adapter declares what the company **inherits**, what it **overrides by name**,
and how its local entities map onto the standard library. There is no pre-kernel
legacy to reconcile.

## Inherited from AIEOS (source of truth)

- **Laws** — all [Prime Directives](../../kernel/laws/prime-directives.md),
  [engagement tiers](../../kernel/laws/engagement-tiers.md),
  [decision authority](../../kernel/laws/decision-authority.md).
- **Protocols** — [communication](../../kernel/protocols/communication.md),
  [orchestration (15-agent)](../../kernel/protocols/orchestration.md),
  [escalation](../../kernel/protocols/escalation.md),
  [memory-flow](../../kernel/protocols/memory-flow.md),
  [lifecycle](../../kernel/protocols/lifecycle.md),
  [reporting](../../kernel/protocols/reporting.md).
- **Loader** — [resolution order](../../kernel/loader/resolution-order.md).
- **Stdlib defaults** — every [workflow](../../workflows/), [council](../../councils/),
  [template](../../templates/), and [memory register](../../memory/) it does not
  override by name.

## Executive mapping → decision-authority levels

| Local role | Kernel level |
|------------|--------------|
| label-head | CEO |
| ar-director | CTO (+ artistic veto) |
| operations-director | COO |
| chief-auditor | Chief Auditor (quality veto) |
| label-orchestrator | Supreme Orchestrator (routing) |

## Local overrides (by name)

Local entities that intentionally extend a stdlib default. Each names the stdlib
entity it extends ([Directive #5](../../kernel/laws/prime-directives.md)).

| Local entity | Extends stdlib | Why |
|--------------|----------------|-----|
| signing-council | feature-council | Signing decisions; chaired by ar-director with artistic veto. |
| catalog-council | architecture-council | Catalog-coherence decisions; chaired by label-head. |
| artist-signing (T2) | planning | A&R diligence and offer process. |
| track-production (T2) | feature | Demo-to-master production process. |
| release-campaign (T3) | release | Marketing and distribution campaign process. |
| catalog-decisions | architecture-decisions | Records catalog-shaping calls; owner label-head. |
| release-log | lessons-learned | Records release outcomes; owner operations-director. |
| artist-pipeline | future-improvements | Tracks prospective signings; owner ar-scout. |

## Memory register mapping

| Local register | Stdlib schema | Relationship |
|----------------|---------------|--------------|
| [catalog-decisions.md](../memory/registers/catalog-decisions.md) | architecture-decisions.md | extends |
| [release-log.md](../memory/registers/release-log.md) | lessons-learned.md | extends |
| [artist-pipeline.md](../memory/registers/artist-pipeline.md) | future-improvements.md | extends |

## Reporting

This company produces [reports/health-report.md](../reports/health-report.md)
per the [reporting protocol](../../kernel/protocols/reporting.md).

## Conformance

Mounted **kernel-native** when: this adapter is present, executives map to
decision-authority levels, the register mapping is complete, and the company is
listed in [kernel/registry/registry.md](../../kernel/registry/registry.md) as
`mounted`.
