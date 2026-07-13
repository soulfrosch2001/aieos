# AI Music Label
Status: stable
Type: company
Owner: label-head
Extends: kernel + stdlib

## Charter

The AI Music Label discovers, develops, and releases recorded music as a
kernel-native AIEOS company. It runs three crafts end to end: **A&R**
(finding and signing artists), **production** (turning songs into finished
masters), and **marketing/distribution** (getting releases to audiences). Its
north star is a **coherent catalog** — every signing and every release must fit
the artistic line the label stands for, delivered on a schedule the label can
keep.

The label serves recording artists who want a home that pairs taste with
operational reliability, and listeners who trust the label's curation. It is
born inheriting the kernel — it **forks nothing** and overrides only by name
where a stricter local rule earns its place.

## Inherited from AIEOS

This company inherits the kernel and standard library in full. Nothing below is
re-stated as local law; it is cited so the chain of authority is explicit.

- **Laws** — all [Prime Directives](../../kernel/laws/prime-directives.md),
  including [Directive #2 (the Orchestrator routes, never implements)](../../kernel/laws/prime-directives.md),
  [Directive #4 (no company talks to another company directly)](../../kernel/laws/prime-directives.md),
  [Directive #5 (inherit, don't fork)](../../kernel/laws/prime-directives.md),
  [Directive #6 (propose framework changes before making them)](../../kernel/laws/prime-directives.md),
  and [Directive #8 (one concept per file; every folder has a README)](../../kernel/laws/prime-directives.md).
- **Engagement tiers** — sizing per [kernel/laws/engagement-tiers.md](../../kernel/laws/engagement-tiers.md).
- **Decision authority** — levels per [kernel/laws/decision-authority.md](../../kernel/laws/decision-authority.md).
- **Protocols** — [communication](../../kernel/protocols/communication.md),
  [orchestration (15-agent fan-out)](../../kernel/protocols/orchestration.md),
  [escalation](../../kernel/protocols/escalation.md),
  [memory-flow](../../kernel/protocols/memory-flow.md),
  [lifecycle](../../kernel/protocols/lifecycle.md), and
  [reporting](../../kernel/protocols/reporting.md).
- **Loader** — resolution per [kernel/loader/resolution-order.md](../../kernel/loader/resolution-order.md).
- **Stdlib defaults** — every template, workflow, council, and memory register
  this company does not override by name.

## Local rules (stricter only)

These are additive constraints. They never relax kernel law; they only tighten
it for this company.

1. **Artistic-coherence gate.** No artist is signed and no track enters the
   release schedule without passing the ar-director's artistic check. The
   ar-director holds an **artistic veto** that the [signing-council](../councils/signing-council/README.md)
   and [catalog-council](../councils/catalog-council/README.md) must clear.
2. **Catalog before calendar.** When a release's timing conflicts with catalog
   coherence, coherence wins; the operations-director re-sequences rather than
   ship something off-line. Recorded in [catalog-decisions](../memory/registers/catalog-decisions.md).
3. **No release without a master sign-off.** Every release requires a
   mastering-engineer sign-off and a chief-auditor conformance pass before it
   leaves the label.
4. **Every signing and release is logged.** Outcomes land in
   [release-log](../memory/registers/release-log.md); the live pipeline lives in
   [artist-pipeline](../memory/registers/artist-pipeline.md).

## Local overrides (by name)

| Entity | Overrides stdlib | Why |
|--------|------------------|-----|
| signing-council | feature-council | Signing is the label's "feature" decision; chaired by ar-director with artistic veto. |
| catalog-council | architecture-council | The catalog is the label's architecture; coherence decisions are chaired by label-head. |
| artist-signing | planning (workflow) | T2 signing process tailored to A&R diligence and offer terms. |
| track-production | feature (workflow) | T2 production process from demo to delivered master. |
| release-campaign | release (workflow) | T3 campaign process for marketing and distribution. |
| catalog-decisions | architecture-decisions | Records catalog-shaping calls instead of system-architecture calls. |
| release-log | lessons-learned | Captures what each release taught the label. |
| artist-pipeline | future-improvements | Tracks prospective signings instead of backlog ideas. |

## Structure

```
00-company/     local charter, org-chart, local rules (stricter only)
01-executive/   label-head, ar-director, operations-director, chief-auditor, label-orchestrator
02-ar/          A&R department → ar-scout, artist-manager, repertoire-curator
03-production/  production department → music-producer, audio-engineer, mastering-engineer
04-marketing/   marketing department → marketing-manager, release-coordinator
councils/       signing-council, catalog-council (extend stdlib blueprints)
workflows/      artist-signing, track-production, release-campaign (extend stdlib library)
memory/         catalog-decisions, release-log, artist-pipeline (extend stdlib schemas)
reports/        health-report.md per the reporting protocol
```

## Departments

- **02-ar** — finds, evaluates, and develops artists; owns the signing pipeline. Lead: ar-scout.
- **03-production** — turns songs into finished, delivery-ready masters. Lead: music-producer.
- **04-marketing** — plans campaigns and distributes releases to audiences. Lead: marketing-manager.

## KPIs

Top-level measures, reported in [reports/health-report.md](../reports/health-report.md):
catalog-coherence rate (signings passing the artistic gate), release on-time
delivery, master sign-off pass rate, and pipeline conversion (prospects to
signings).

## Mounting

Registered in [../../kernel/registry/](../../kernel/registry/). Mount adapter:
[AIEOS.md](AIEOS.md). See [../../kernel/contracts/plugin.md](../../kernel/contracts/plugin.md).
