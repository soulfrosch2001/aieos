# Reports
Status: stable
Type: report
Owner: lab-orchestrator
Extends: none

KPI and health reports for the AI Research Lab. Reports are built from
[../../templates/report.template.md](../../templates/report.template.md) and read the lab's
domain measures against the ten quality dimensions in
[../../shared/quality-standards.md](../../shared/quality-standards.md). A report records a
measurement and a decision — it never silently restates memory; the underlying record lives in
[../memory/registers/](../memory/registers/).

## Index
| Report | Cadence | Author | What it covers |
|--------|---------|--------|----------------|
| [health-report](health-report.md) | Quarterly | lab-orchestrator | Lab KPIs vs the ten quality dimensions, with concerns and next steps. |

## How reports flow
- A health report's conclusions are appended to the relevant register — an established result
  to [findings](../memory/registers/findings.md), a method or dead end to
  [experiment-log](../memory/registers/experiment-log.md), a parked line to
  [open-questions](../memory/registers/open-questions.md)
  ([Directive #8](../../kernel/laws/prime-directives.md)).
- Strategic conclusions escalate per
  [decision-authority](../../kernel/laws/decision-authority.md).
