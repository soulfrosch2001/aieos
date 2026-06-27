# Reports
Status: stable
Type: report-index
Owner: chief-compliance-auditor
Extends: none

**Purpose:** The clinic's standing telemetry channel — how it exposes its health and
KPIs **upward** to the Government without talking to any other company
([Directive #5](../../kernel/laws/prime-directives.md)). This is the company end of
the kernel [reporting protocol](../../kernel/protocols/reporting.md), added in kernel
**1.1.0**.

## What lives here
| Report | Built from | Cadence |
|--------|-----------|---------|
| [health-report.md](health-report.md) | [report.template.md](../../templates/report.template.md) | Per milestone or on request. |

The health report scores the clinic against the ten
[quality dimensions](../../shared/quality-standards.md) and carries the domain KPIs
defined with [kpi.template.md](../../templates/kpi.template.md).

## How it flows up
1. The chief-compliance-auditor owns the health report and keeps it current.
2. The Government **reads** it — aggregation is a read, never a write
   ([Directive #2](../../kernel/laws/prime-directives.md)).
3. The Government dashboard rolls it into the enterprise view.

## Rules
- **Read-only aggregation** — the Government never authors or alters this report.
- **Stable shape** — rows may be added; the dimension scoring is never removed.
- **A stale report is itself a finding.**
