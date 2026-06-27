# AI Publishing House
Status: stable
Type: company
Owner: ceo
Extends: kernel + stdlib

AI Publishing House is a **kernel-native** AIEOS company — a book publishing house
born inheriting the [AIEOS kernel](../kernel/). It forks nothing
([Directive #6](../kernel/laws/prime-directives.md)): it mounts the kernel's laws,
protocols, and standard library and adds only *stricter* local rules. The house runs
three lines end to end — **acquisitions** (finding and signing works),
**editorial** (developing, copy-editing, and proofing to standard), and
**production/distribution** (designing, printing, scheduling, and releasing books).

North star ([Directive #1](../kernel/laws/prime-directives.md)): every decision is
justified by the value it creates for the reader. The house ships finished books,
never partial work, and nothing reaches print without passing its tier gates
([Directive #9](../kernel/laws/prime-directives.md)).

## Repo map
```
00-company/   charter, AIEOS adapter, org-chart, README
01-executive/ ceo, editorial-director, production-director, chief-auditor, house-orchestrator
02-acquisitions/  acquisitions-editor (lead), literary-scout, contracts-manager
03-editorial/     developmental-editor (lead), copy-editor, proofreader
04-production/    book-designer (lead), distribution-manager
councils/     acquisition-council, editorial-council
workflows/    manuscript-acquisition, editing-pipeline, book-release
memory/       registers: catalog-decisions, editorial-standards, rights-and-sales
reports/      health report + KPIs
```

## Start here
- [00-company/COMPANY.md](00-company/COMPANY.md) — the house charter and operating principles.
- [00-company/AIEOS.md](00-company/AIEOS.md) — how the house mounts onto AIEOS.
- [00-company/org-chart.md](00-company/org-chart.md) — roles and reporting lines.

## Executive
[01-executive/](01-executive/) — ceo (sets the list), editorial-director (CTO +
editorial veto), production-director (COO, schedule and timing), chief-auditor
(quality/process veto, runs conformance), and house-orchestrator (routes manuscripts,
sizes tiers, fans out — never edits, [Directive #2](../kernel/laws/prime-directives.md)).

## Departments
- [02-acquisitions/](02-acquisitions/) — finds, evaluates, and signs works; owns the deal and the contract.
- [03-editorial/](03-editorial/) — develops, copy-edits, and proofs manuscripts to the house standard.
- [04-production/](04-production/) — designs, prints, schedules, and distributes finished books.

## Councils
[councils/](councils/) — [acquisition-council](councils/acquisition-council/)
(extends stdlib feature-council, chaired by the ceo) and
[editorial-council](councils/editorial-council/) (extends stdlib
architecture-council, chaired by the editorial-director). Discuss before you build
([Directive #3](../kernel/laws/prime-directives.md)).

## Workflows
[workflows/](workflows/) — [manuscript-acquisition](workflows/manuscript-acquisition.md)
(T2, extends planning), [editing-pipeline](workflows/editing-pipeline.md) (T2, extends
feature), and [book-release](workflows/book-release.md) (T3, extends release). Each
extends a stdlib workflow by name and carries real Gate A / Gate B conditions.

## Memory
[memory/](memory/) — the house inherits all seven stdlib registers and adds three
local ones: [catalog-decisions](memory/registers/catalog-decisions.md),
[editorial-standards](memory/registers/editorial-standards.md), and
[rights-and-sales](memory/registers/rights-and-sales.md). Append-mostly, always
([Directive #8](../kernel/laws/prime-directives.md)).

## Reports
[reports/](reports/) — the [health report](reports/health-report.md) and KPIs measured
against the ten [quality dimensions](../shared/quality-standards.md).

## Inherited from AIEOS (source of truth)
The house never weakens a kernel law; it adds strictness only via override **by name**
([resolution order](../kernel/loader/resolution-order.md)).
- [../kernel/](../kernel/) — laws (Prime Directives,
  [engagement tiers](../kernel/laws/engagement-tiers.md),
  [decision authority](../kernel/laws/decision-authority.md)), protocols, loader, contracts.
- [../templates/](../templates/) — the file shapes every entity here is built from.
