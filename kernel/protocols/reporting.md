# Protocol: Reporting

Status: stable
Type: protocol
Owner: Chief Auditor (Government)
Extends: none

Added in kernel **1.1.0**. The standing telemetry channel: how every company exposes
its health and KPIs *upward* to the Government, so the enterprise can be seen as a
whole without any company talking to another (Directive #5,
[prime-directives.md](../laws/prime-directives.md)).

Where [memory-flow](memory-flow.md) carries *decisions* up as they happen, reporting
carries *standing measures* up on a cadence. It is additive and backwards-compatible:
companies already produce health reports — this names the channel and its shape.

## What a company exposes
Every mounted company publishes, at a stable path:
- `reports/health-report.md` — a snapshot scored against the ten
  [quality dimensions](../../shared/quality-standards.md), built from
  [report.template.md](../../templates/report.template.md).
- Its KPIs, defined with [kpi.template.md](../../templates/kpi.template.md).

A company that keeps reports elsewhere (legacy estates) declares the location in its
`AIEOS.md` adapter; the default is `reports/`.

## How it flows up
1. A company's Chief Auditor owns its health report and keeps it current.
2. The Government **reads** these reports — it never reaches into a company to compute
   them (Directive #2). Aggregation is a read, not a write.
3. The [Government dashboard](../../government/dashboard/) rolls every company's
   status into one enterprise view.

## Rules
- **Read-only aggregation.** The Government aggregates; it does not author or alter a
  company's report.
- **Stable shape.** The report shape is the standard `report.template.md`; a company
  may add rows, never remove the dimension scoring.
- **Cadence.** Per milestone or on request; a stale report is itself a finding.

## Versioning note
This protocol is the headline capability of kernel **1.1.0** (a MINOR, additive
release — see [../versioning.md](../versioning.md)). Companies built against `^1.0.0`
remain fully compatible.
