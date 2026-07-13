# AI Healthcare Clinic
Status: stable
Type: company
Owner: medical-director
Extends: kernel + stdlib

## Charter
AI Healthcare Clinic models the **organizational structure** of a medical clinic:
how a case is taken in, triaged, and routed; how care delivery is coordinated across
roles; and how compliance and quality are enforced. Its north star is a **safe,
well-coordinated path for every case** with zero compliance defects.

This company is organizational only. It defines roles, routing, sequencing, and
regulated process. It issues **no medical advice** and makes **no clinical
decisions** — clinical judgment is explicitly out of scope. Where this document
speaks of "care," it means the *coordination* of care, never its practice.

## Inherited from AIEOS
This company is **kernel-native**: it forks nothing and inherits the whole platform.
- **Laws** — all [Prime Directives](../../kernel/laws/prime-directives.md),
  [engagement tiers](../../kernel/laws/engagement-tiers.md), and
  [decision authority](../../kernel/laws/decision-authority.md).
- **Protocols** — [communication](../../kernel/protocols/communication.md),
  [orchestration](../../kernel/protocols/orchestration.md) (15-agent fan-out),
  [escalation](../../kernel/protocols/escalation.md),
  [memory-flow](../../kernel/protocols/memory-flow.md),
  [lifecycle](../../kernel/protocols/lifecycle.md), and
  [reporting](../../kernel/protocols/reporting.md).
- **Loader** — the kernel [resolution order](../../kernel/loader/resolution-order.md):
  local-by-name first, then stdlib, then kernel.
- **Stdlib defaults** — every template, workflow, council, and memory schema this
  company does not override by name.

## Local rules (stricter only)
A company may **add** stricter authority; it may never loosen a Kernel Law
([Directive #5](../../kernel/laws/prime-directives.md),
[Directive #6](../../kernel/laws/prime-directives.md)).

1. **No diagnosis, no treatment, ever.** No role in this company diagnoses,
   prescribes, or directs clinical care. The intake-orchestrator routes; it never
   diagnoses ([Directive #2](../../kernel/laws/prime-directives.md)).
2. **Safety is a tier floor.** Any case touching patient safety is sized at **T3 or
   higher** and runs the [safety-review](../workflows/safety-review.md) workflow.
3. **Compliance veto is absolute and regulated.** The chief-compliance-auditor's
   veto stops work and is overridable only by a human maintainer
   ([decision authority](../../kernel/laws/decision-authority.md)).
4. **Every case is logged.** Incidents and near-misses are appended to the
   [incident-register](../memory/registers/incident-register.md)
   ([Directive #7](../../kernel/laws/prime-directives.md)).
5. **One concept per file; every folder carries a README**
   ([Directive #8](../../kernel/laws/prime-directives.md)).

## Local overrides (by name)
| Entity | Overrides stdlib | Why |
|--------|------------------|-----|
| care-review-council | feature-council | Care-process review needs clinical-safety framing |
| safety-council | security-council | Patient safety replaces security as the harm axis |
| patient-intake | planning | Intake plans the care path before any coordination |
| care-coordination | feature | Care delivery is coordinated like a feature build-out |
| safety-review | security-review | Safety review mirrors the security gate, regulated |
| care-protocols | architecture-decisions | Care-process decisions are this clinic's architecture |
| incident-register | known-issues | Incidents/near-misses are the regulated issue ledger |
| care-lessons | lessons-learned | Coordination lessons feed back into the care path |

## Structure
```
00-company/     this charter, org-chart, mount adapter, local rules
01-executive/   medical-director, chief-medical-officer, operations-director,
                chief-compliance-auditor, intake-orchestrator
02-intake/      triage-coordinator (lead), intake-coordinator, scheduler
03-care/        care-coordinator (lead), case-manager, pharmacy-coordinator
04-compliance/  compliance-officer (lead), records-manager
councils/       care-review-council, safety-council
workflows/      patient-intake, care-coordination, safety-review
memory/         care-protocols, incident-register, care-lessons
reports/        health-report.md + KPIs (read upward by the Government)
```

## Departments
- **02-intake** — takes cases in, triages, routes, and schedules.
- **03-care** — coordinates care delivery, case management, and pharmacy logistics.
- **04-compliance** — conformance, regulated records, and quality enforcement.

## KPIs
Top-level measures live in [reports/](../reports/), defined with the stdlib
[kpi.template.md](../../templates/kpi.template.md): time-to-route, care-path
adherence, compliance-defect rate, and incident closure time.

## Mounting
Mounted kernel-native via [AIEOS.md](AIEOS.md) and registered in
[../../kernel/registry/registry.md](../../kernel/registry/registry.md). See the
[plugin contract](../../kernel/contracts/plugin.md).
