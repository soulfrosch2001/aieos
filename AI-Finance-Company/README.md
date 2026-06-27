# AI Finance Company
Status: stable
Type: company
Owner: CEO
Extends: kernel + stdlib

A **kernel-native AIEOS company**: an investment management firm that does
analysis, risk, and compliance in a regulated environment. It is *born inheriting
the kernel* — it forks nothing. Every law, protocol, template, workflow, council,
and memory schema comes from AIEOS by inheritance; the firm adds only **stricter**
local rules, never looser ones
([Directive #6](../kernel/laws/prime-directives.md),
[resolution-order](../kernel/loader/resolution-order.md)).

## What the firm does
Turn a mandate into defensible capital decisions: build evidence-backed investment
theses, review risk posture before and after every position, and clear every trade
through an absolute compliance veto. The [finance-orchestrator](01-executive/finance-orchestrator/)
routes mandates and sizes tiers but never makes an investment call
([Directive #2](../kernel/laws/prime-directives.md)); companies never talk to other
companies directly ([Directive #5](../kernel/laws/prime-directives.md)).

## Repo map
```
00-company/     charter, mount adapter, org-chart, stricter local rules
01-executive/   CEO, CIO, COO, Chief Compliance Auditor, finance-orchestrator
02-analysis/    equity, quantitative, macro
03-risk/        risk-manager, portfolio-manager, stress-tester
04-compliance/  compliance-officer, regulatory-analyst
councils/       investment-council, risk-council
workflows/      investment-thesis, risk-review, portfolio-rebalance
memory/         local registers (extend stdlib by name)
reports/        KPI + health reports
```

## Governance core
- [00-company/COMPANY.md](00-company/COMPANY.md) — charter: inheritance and stricter local rules.
- [00-company/AIEOS.md](00-company/AIEOS.md) — the kernel-native mount adapter.
- [00-company/org-chart.md](00-company/org-chart.md) — who reports to whom.

## Executive
- [01-executive/](01-executive/) — CEO (strategy), Chief Investment Officer (methodology veto),
  COO (execution), Chief Compliance Auditor (absolute compliance/quality veto),
  finance-orchestrator (routes, never invests). Each maps to a level in
  [decision-authority](../kernel/laws/decision-authority.md).

## Departments
- [02-analysis/](02-analysis/) — builds and defends theses (lead: equity-analyst).
- [03-risk/](03-risk/) — sizes and owns exposure (lead: risk-manager).
- [04-compliance/](04-compliance/) — keeps the firm within mandate and law (lead: compliance-officer).

## Councils
- [councils/investment-council/](councils/investment-council/) — chaired by the CIO; extends stdlib feature-council.
- [councils/risk-council/](councils/risk-council/) — chaired by the risk-manager; extends stdlib security-council.

## Workflows
- [workflows/](workflows/) — [investment-thesis](workflows/investment-thesis.md) (T2),
  [risk-review](workflows/risk-review.md) (T3),
  [portfolio-rebalance](workflows/portfolio-rebalance.md) (T2). Each extends a stdlib
  procedure by name and adds regulated gates.

## Memory
- [memory/](memory/) — local registers
  ([investment-decisions](memory/registers/investment-decisions.md),
  [risk-register](memory/registers/risk-register.md),
  [compliance-log](memory/registers/compliance-log.md)) extend stdlib schemas; the
  firm also inherits all seven stdlib defaults. See
  [memory/architecture.md](memory/architecture.md).

## Reports
- [reports/](reports/) — [health-report](reports/health-report.md): firm KPIs vs the ten quality dimensions.

## Inherited from AIEOS
- [../kernel/](../kernel/) — Prime Directives, engagement tiers, decision-authority,
  protocols, and the loader's [resolution-order](../kernel/loader/resolution-order.md).
- [../templates/](../templates/) — the file shapes every entity here is built from.
