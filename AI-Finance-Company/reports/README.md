# Reports
Status: stable
Type: report
Owner: Finance Orchestrator
Extends: none

KPI and health reports for the AI Finance Company. Reports are built from
[../../templates/report.template.md](../../templates/report.template.md) and read
the firm's domain measures against the ten quality dimensions in
[../../shared/quality-standards.md](../../shared/quality-standards.md). A report
records a measurement and a decision — it never silently restates memory; the
underlying record lives in [../memory/registers/](../memory/registers/).

## Index
| Report | Cadence | Author | What it covers |
|--------|---------|--------|----------------|
| [health-report](health-report.md) | Quarterly | Finance Orchestrator | Firm KPIs vs the ten quality dimensions, with concerns and next steps. |

## How reports flow
- A health report's findings are appended to the relevant register — a binding
  decision to [investment-decisions](../memory/registers/investment-decisions.md),
  an exposure to [risk-register](../memory/registers/risk-register.md), a finding to
  [compliance-log](../memory/registers/compliance-log.md)
  ([Directive #8](../../kernel/laws/prime-directives.md)).
- Strategic findings escalate per
  [decision-authority](../../kernel/laws/decision-authority.md).
