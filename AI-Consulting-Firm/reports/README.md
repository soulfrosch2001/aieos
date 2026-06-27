# Reports
Status: stable
Type: report-index
Owner: chief-auditor
Extends: none

The firm's standing telemetry — how AI Consulting Firm exposes its health and KPIs
*upward* to the Government on a cadence, per the
[reporting protocol](../../kernel/protocols/reporting.md) (kernel 1.1.0). No
company talks to another (Directive [#5](../../kernel/laws/prime-directives.md));
the Government **reads** these reports and never reaches in to compute them.

## What lives here
- [health-report.md](health-report.md) — a snapshot scored against the ten
  [quality dimensions](../../shared/quality-standards.md), built from
  [report.template.md](../../templates/report.template.md), with our domain KPIs.

## Ownership and cadence
- The [chief-auditor](../01-executive/chief-auditor/) owns the health report and
  keeps it current — a stale report is itself a finding.
- Published per milestone or on request. The stable path is `reports/` (declared
  in [00-company/AIEOS.md](../00-company/AIEOS.md)).
- **Read-only aggregation:** the [Government dashboard](../../government/dashboard/)
  rolls our status into the enterprise view; it never alters our report.
