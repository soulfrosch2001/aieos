<!-- Report / Minutes. Built from ../../templates/report.template.md. Reporting: ../../kernel/protocols/reporting.md -->

# AI Consulting Firm — Health Report
Type: report
Date: 2026-06-27
Author: chief-auditor
Tier: T2

## Summary
A standing snapshot of firm health for the Government, per the
[reporting protocol](../../kernel/protocols/reporting.md). It scores the firm
against the ten [quality dimensions](../../shared/quality-standards.md) and reports
our domain KPIs. The firm is kernel-native and conformant; the watch items are
evidence-traceability latency on intake and adoption measurement at handover.

## Consensus
The five executives agree the firm is operating to charter: engagements are sized
before analysis, no recommendation ships without quality sign-off, and memory is
appended before decisions are acted on (Directive [#8](../../kernel/laws/prime-directives.md)).

## Remaining concerns / dissent
The [engagement-director](../01-executive/engagement-director/) notes that
evidence-sourcing sometimes lags into the modelling phase; the local rule is
"sourced before presented," and intake latency must not erode it. The
[chief-auditor](../01-executive/chief-auditor/) flags that adoption is still
sometimes reported as nominal rather than demonstrated.

## Risks
See the [risk-register](../memory/registers/risk-register.md). Top standing risks:
client data-access at intake (High), and adoption stalling without a named client
sponsor (Medium).

## Alternatives considered
Reporting cadence by calendar was rejected in favour of per-milestone reporting
(reporting protocol) so the snapshot always reflects live engagement state.

## Recommendation
Hold the current gates; tighten Gate A of [implementation](../workflows/implementation.md)
to require a named client sponsor, and move evidence-sourcing checks earlier in
[strategy-development](../workflows/strategy-development.md).

## Domain KPIs vs the ten quality dimensions
| # | Quality dimension | Firm KPI / signal | Status |
|---|-------------------|-------------------|--------|
| 1 | Correctness | Recommendation adoption rate (client acts on it) | On track |
| 2 | Clarity | Deliverables understood without the author at handover | On track |
| 3 | Modularity | Engagement tracks disjoint and independently owned | On track |
| 4 | Reusability | Inherits kernel + stdlib; forks nothing (Directive [#6](../../kernel/laws/prime-directives.md)) | Pass |
| 5 | Consistency | Conformance to contracts and conventions (npm test) | Pass |
| 6 | Security | Client data fails safe; access scoped at intake | Watch |
| 7 | Performance | On-time / on-scope delivery vs tier budget | On track |
| 8 | Testability | Every claim has a traceable source (evidence integrity) | Watch |
| 9 | Documentation | Every folder has a README; cross-links resolve | Pass |
| 10 | Memory hygiene | Decisions recorded before acting; registers append-only | Pass |

## Implementation plan
| Owner | Action | By when |
|-------|--------|---------|
| chief-auditor | Re-score against the ten dimensions each milestone | Per milestone |
| engagement-director | Move sourcing checks before modelling in strategy-development | Next engagement |
| implementation-lead | Add named-sponsor requirement to implementation Gate A | Next engagement |

## Owners & next steps
| Owner | Action | By when |
|-------|--------|---------|
| chief-auditor | Keep this report current; a stale report is a finding | Ongoing |
| operations-partner | Close intake data-access risk on open engagements | This cycle |

## Memory updates
- [risk-register](../memory/registers/risk-register.md) — data-access and adoption risks recorded with owners.
- [engagement-lessons](../memory/registers/engagement-lessons.md) — named-sponsor lesson promoted into implementation Gate A.
- [engagement-decisions](../memory/registers/engagement-decisions.md) — the decision to tighten gates, dated.
