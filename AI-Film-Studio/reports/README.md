# Reports
Status: stable
Type: reference
Owner: studio-orchestrator
Extends: none

The studio's measurement layer: domain KPIs and the periodic health report that
scores the studio against the ten enterprise
[quality dimensions](../../shared/quality-standards.md). Reports follow
[../../templates/report.template.md](../../templates/report.template.md) and the
kernel [reporting protocol](../../kernel/protocols/reporting.md).

Reports **measure, they do not decide** — a red reading routes to the accountable
executive or council via [escalation](../../kernel/protocols/escalation.md), and any
decision of consequence is recorded in [memory](../memory/registers/)
(Directive [#8](../../kernel/laws/prime-directives.md)).

## Contents
| File | What it is | Cadence |
|------|------------|---------|
| [health-report.md](health-report.md) | Studio KPIs mapped to the ten quality dimensions. | Per film milestone + monthly roll-up. |

## How to read a health report
Each KPI carries a Green/Amber/Red threshold and maps to one of the ten quality
dimensions, so a domain miss (e.g. a budget overrun) is also a quality-dimension
signal (Performance). Amber is a watch; Red is an act-or-escalate.

## KPI source of truth
The studio's top-level KPIs are defined in the
[charter](../00-company/COMPANY.md) and reported here. New KPIs are added by copying
[../../templates/kpi.template.md](../../templates/kpi.template.md).
