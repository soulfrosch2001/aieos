<!-- Report / Minutes. Used for council minutes and health reports. -->

# AI Publishing House — Health Report
Type: report
Date: 2026-06-26
Author: chief-auditor
Tier: T2

## Summary
A baseline read of the house against the ten AIEOS
[quality dimensions](../../shared/quality-standards.md). The structural foundation —
charter, departments, councils, workflows, and memory — is conformant and inherits
the kernel cleanly. The standing risk is **memory hygiene**: every signing, edit, and
release must close by appending its [local registers](../memory/registers/), and that
discipline is only as good as the workflow that enforces it.

## Consensus
The house ships finished books, not partial work, and nothing reaches print without
passing its tier gates ([Directive #9](../../kernel/laws/prime-directives.md)). The
three workflows — [manuscript-acquisition](../workflows/manuscript-acquisition.md),
[editing-pipeline](../workflows/editing-pipeline.md),
[book-release](../workflows/book-release.md) — carry real Gate A / Gate B blocking
conditions and end in mandatory memory updates.

## Remaining concerns / dissent
The editorial-director notes a standing tension with the production-director: the
**editorial veto can hold a title past its sequenced on-sale date**, and the schedule
owner cannot override that veto. This is by design (quality outranks timing), but it
must be surfaced early in [editing-pipeline](../workflows/editing-pipeline.md), not at
the [book-release](../workflows/book-release.md) gate, or it becomes a late-stage
schedule shock.

## Risks
| Risk | Dimension | Severity |
|------|-----------|----------|
| Memory updates skipped at workflow close | Memory hygiene (#10) | High |
| Editorial veto fires late, displacing the schedule | Performance (#7) | Medium |
| Rights cleared narrowly, then a channel needs a missing territory | Security/fail-safe (#6) | Medium |

## KPIs vs. quality dimensions
| KPI | Formula | Target (Green) | Maps to dimension |
|-----|---------|----------------|-------------------|
| Titles signed vs. list target | signed ÷ planned per cycle | ≥ 90% | Correctness (#1), Consistency (#5) |
| First-pass editorial gate rate | titles clearing Gate B on first pass ÷ titles | ≥ 80% | Correctness (#1), Testability (#8) |
| On-time release rate | titles shipped on sequenced date ÷ shipped | ≥ 95% | Performance (#7) |
| Errata per 1,000 copies | errata ÷ copies × 1,000 | ≤ 0.5 | Correctness (#1), Security (#6) |
| Kernel reuse | local entities extending stdlib by name ÷ local entities | 100% | Reusability (#4) |
| Memory-update completeness | workflows closing with registers appended ÷ workflows run | 100% | Memory hygiene (#10) |
| Cross-link integrity | valid relative links ÷ links | 100% | Documentation (#9), Clarity (#2) |

## Alternatives considered
A single combined "publishing" workflow was rejected: it would blur the acquisition
(planning), editing (feature), and release gates, weakening Modularity (#3) and making
the editorial veto impossible to site cleanly.

## Recommendation
Hold the structure. Enforce memory-update completeness as a hard close condition on
every workflow, and require the editorial-director to flag any veto risk at
[editing-pipeline](../workflows/editing-pipeline.md) Gate A rather than at release.

## Implementation plan
1. chief-auditor — add a memory-update check to conformance for each workflow close.
2. editorial-director — record veto-risk titles in [editorial-standards](../memory/registers/editorial-standards.md) at Gate A.
3. production-director — reconcile on-sale dates against [rights-and-sales](../memory/registers/rights-and-sales.md) each cycle.

## Owners & next steps
| Owner | Action | By when |
|-------|--------|---------|
| chief-auditor | Wire memory-update check into conformance | 2026-07-10 |
| editorial-director | Flag veto-risk titles at Gate A | Ongoing |
| production-director | Cycle reconcile of schedule vs. rights | Each release cycle |

## Memory updates
- [catalog-decisions](../memory/registers/catalog-decisions.md) — baseline health read referenced against list decisions.
- [editorial-standards](../memory/registers/editorial-standards.md) — veto-risk flagging rule recorded.
- [rights-and-sales](../memory/registers/rights-and-sales.md) — schedule-vs-rights reconciliation cadence recorded.
