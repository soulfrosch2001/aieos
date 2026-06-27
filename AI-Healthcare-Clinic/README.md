# AI Healthcare Clinic
Status: stable
Type: company
Owner: medical-director
Extends: kernel + stdlib

A **kernel-native** AIEOS company that models the **organizational structure** of a
medical clinic: how a case is taken in and routed, how care delivery is coordinated
across roles, and how compliance and quality are enforced. It is chartered by
Government decision 0001 and built against kernel **1.1.0**.

This company is **organizational only**. It defines roles, routing, sequencing, and
regulated process. It issues **no medical advice** and makes **no clinical decisions** —
clinical judgment is explicitly out of scope. "Care" here means the *coordination* of
care, never its practice. The intake-orchestrator routes; it never diagnoses
([Directive #2](../kernel/laws/prime-directives.md)).

## Inherits, forks nothing
The clinic inherits the whole platform and overrides only by name
([Directive #5](../kernel/laws/prime-directives.md),
[Directive #6](../kernel/laws/prime-directives.md)):
- **Kernel** — [laws](../kernel/laws/prime-directives.md),
  [engagement tiers](../kernel/laws/engagement-tiers.md),
  [decision authority](../kernel/laws/decision-authority.md),
  [protocols](../kernel/protocols/) (incl. [reporting](../kernel/protocols/reporting.md)),
  and the [loader resolution order](../kernel/loader/resolution-order.md).
- **Templates** — the stdlib [templates](../templates/) for every agent, council,
  workflow, register, and report.

## Repo map
```
00-company/   charter, org-chart, mount adapter, local rules
01-executive/ medical-director, chief-medical-officer, operations-director,
              chief-compliance-auditor, intake-orchestrator
02-intake/    triage-coordinator (lead), intake-coordinator, scheduler
03-care/      care-coordinator (lead), case-manager, pharmacy-coordinator
04-compliance/ compliance-officer (lead), records-manager
councils/     care-review-council, safety-council
workflows/    patient-intake, care-coordination, safety-review
memory/       care-protocols, incident-register, care-lessons
reports/      health-report.md + KPIs (read upward by the Government)
```

## Start here
- [00-company/COMPANY.md](00-company/COMPANY.md) — the charter and local rules.
- [00-company/AIEOS.md](00-company/AIEOS.md) — the kernel-native mount adapter.

## Departments
- [02-intake/](02-intake/README.md) — takes cases in, triages, routes, schedules.
- [03-care/](03-care/README.md) — coordinates care delivery, case management, pharmacy logistics.
- [04-compliance/](04-compliance/README.md) — conformance, regulated records, quality enforcement.

## Councils
- [councils/](councils/README.md) — care-review-council (chair chief-medical-officer)
  and safety-council (chair chief-compliance-auditor). Significant change is debated
  before it is built ([Directive #1](../kernel/laws/prime-directives.md)).

## Workflows
- [workflows/](workflows/README.md) — patient-intake (T2), care-coordination (T2),
  safety-review (T3). Each extends a stdlib workflow of related name.

## Memory
- [memory/](memory/README.md) — append-mostly registers: care-protocols,
  incident-register, care-lessons. Knowledge flows down, decisions up
  ([memory-flow](../kernel/protocols/memory-flow.md)).

## Reports
- [reports/](reports/README.md) — the [health report](reports/health-report.md) scored
  against the ten [quality dimensions](../shared/quality-standards.md) and read upward
  via the [reporting protocol](../kernel/protocols/reporting.md).

## Inherited platform
- [../kernel/](../kernel/) — the laws, protocols, and loader this company runs on.
- [../templates/](../templates/) — the stdlib templates it builds from.
