# AI Publishing House
Status: stable
Type: company
Owner: ceo
Extends: kernel + stdlib

## Charter
AI Publishing House is a kernel-native book publishing house. It is born inheriting
AIEOS — it forks nothing ([Directive #6](../../kernel/laws/prime-directives.md)). The
house runs three lines of work end to end: **acquisitions** (finding and signing
works), **editorial** (developing, copy-editing, and proofing manuscripts to
standard), and **production/distribution** (designing, printing, scheduling, and
releasing books).

Our north star ([Directive #1](../../kernel/laws/prime-directives.md)): every
decision is justified by the value it creates for the reader. A title that is
clever but does not serve readers does not belong on the list. The house ships
finished books — never partial work — and nothing reaches print without passing the
quality gates its tier requires ([Directive #9](../../kernel/laws/prime-directives.md)).

## Inherited from AIEOS (source of truth)
This company inherits **all** kernel laws, protocols, and standard-library defaults.
It adds only *stricter* local rules; it never weakens a kernel law.

- **Laws** — all [Prime Directives](../../kernel/laws/prime-directives.md),
  [engagement tiers (T0–T4)](../../kernel/laws/engagement-tiers.md),
  [decision authority](../../kernel/laws/decision-authority.md).
- **Protocols** — [communication](../../kernel/protocols/communication.md),
  [orchestration (15-agent fan-out)](../../kernel/protocols/orchestration.md),
  [escalation](../../kernel/protocols/escalation.md),
  [memory-flow](../../kernel/protocols/memory-flow.md),
  [lifecycle](../../kernel/protocols/lifecycle.md).
- **Loader** — [resolution order](../../kernel/loader/resolution-order.md): local
  entities override stdlib **by name only**, and may add strictness only.
- **Stdlib defaults** — every [workflow](../../workflows/),
  [council](../../councils/), [template](../../templates/), and
  [memory register](../../memory/) the house does not override.

## Operating principles inherited (cited)
- The **house-orchestrator routes manuscripts; it never edits**
  ([Directive #2](../../kernel/laws/prime-directives.md)).
- **Discuss before you build** — every T2+ manuscript or release is debated in a
  council and produces a plan before construction
  ([Directive #3](../../kernel/laws/prime-directives.md)).
- **Fan out by default** — work decomposes into up to **15 disjoint tracks** run in
  parallel ([Directive #4](../../kernel/laws/prime-directives.md)).
- **Companies never talk to companies directly** — all cross-company traffic is
  mediated by the Government ([Directive #5](../../kernel/laws/prime-directives.md)).
- **Memory is append-mostly** — the catalog and editorial record are corrected by
  adding, never by erasing ([Directive #8](../../kernel/laws/prime-directives.md)).

## Local overrides (by name)
Each local entity extends a stdlib entity of related name and adds strictness only.

| Entity | Overrides stdlib | Why |
|--------|------------------|-----|
| [acquisition-council](../councils/acquisition-council/) | [feature-council](../../councils/feature-council/) | Acquisition is the house's "feature" gate: a signing decision on what enters the list. |
| [editorial-council](../councils/editorial-council/) | [architecture-council](../../councils/architecture-council/) | Editorial direction is the structural design of a book; it carries the editorial veto. |
| [manuscript-acquisition](../workflows/manuscript-acquisition.md) | [planning](../../workflows/planning.md) | Scouting and signing is planning the list before any editorial build (T2). |
| [editing-pipeline](../workflows/editing-pipeline.md) | [feature](../../workflows/feature.md) | Developing a manuscript is building the feature: the finished book (T2). |
| [book-release](../workflows/book-release.md) | [release](../../workflows/release.md) | Print, sequencing, and on-sale timing is a gated release (T3). |
| [catalog-decisions](../memory/registers/catalog-decisions.md) | [architecture-decisions](../../memory/registers/architecture-decisions.md) | Catalog/list decisions are the house's load-bearing architecture record. |
| [editorial-standards](../memory/registers/editorial-standards.md) | [lessons-learned](../../memory/registers/lessons-learned.md) | Editorial craft accrues as durable lessons across titles. |
| [rights-and-sales](../memory/registers/rights-and-sales.md) | [roadmap](../../memory/registers/roadmap.md) | Rights, schedule, and sales position is the forward-looking roadmap of the house. |

## Stricter local rules (added, never weakening the kernel)
1. **No work ships below editorial standard.** The editorial-director holds a veto
   on any manuscript that fails [editorial-standards](../memory/registers/editorial-standards.md);
   this is stricter than the stdlib quality gate, not a replacement for it.
2. **Every signed title is recorded.** A signing only counts once it is appended to
   [catalog-decisions](../memory/registers/catalog-decisions.md) with its tier.
3. **Release timing is the production-director's alone**, but only after the
   chief-auditor confirms conformance ([book-release](../workflows/book-release.md)).

## Structure
```
00-company/     charter (this file), AIEOS adapter, org-chart, README
01-executive/   ceo, editorial-director, production-director, chief-auditor, house-orchestrator
02-acquisitions/  acquisitions-editor (lead), literary-scout, contracts-manager
03-editorial/     developmental-editor (lead), copy-editor, proofreader
04-production/    book-designer (lead), distribution-manager
councils/       acquisition-council, editorial-council
workflows/      manuscript-acquisition, editing-pipeline, book-release
memory/         registers: catalog-decisions, editorial-standards, rights-and-sales
reports/        KPI + health reports
```

## Departments
- **02-acquisitions** — finds, evaluates, and signs works; owns the deal and the contract.
- **03-editorial** — develops, copy-edits, and proofs manuscripts to the house standard.
- **04-production** — designs, prints, schedules, and distributes finished books.

## KPIs
Top-level measures live in [../reports/](../reports/): titles signed vs. list
targets, manuscripts passing editorial gates on first pass, on-time release rate,
and rights/sales position. See [../../templates/kpi.template.md](../../templates/kpi.template.md).

## Mounting
This company is kernel-native and mounted via [AIEOS.md](AIEOS.md). Registered in
[../../kernel/registry/](../../kernel/registry/). See the company contract at
[../../kernel/contracts/company.md](../../kernel/contracts/company.md).
