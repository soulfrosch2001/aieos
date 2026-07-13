# AI Healthcare Clinic — Org Chart
Status: stable
Type: org-chart
Owner: medical-director
Extends: none

## Purpose
The reporting structure across the five executives and three departments. This is an
**organizational** chart: it shows who decides, who routes, and who delivers. It
defines no clinical authority — no one here diagnoses or treats.

## Executive layer
Mapped to kernel [decision-authority](../../kernel/laws/decision-authority.md) levels.

```
                        medical-director (CEO)
                        sets clinic direction
                                 |
        +------------------------+------------------------+
        |                        |                        |
chief-medical-officer     operations-director     chief-compliance-auditor
   (CTO + process veto)        (COO)                  (Chief Auditor)
   care-process coherence   scheduling/throughput   compliance/quality veto
        |                        |                  (never treats/directs)
        |                        |                        |
        +-----------+------------+------------+-----------+
                    |                         |
            intake-orchestrator (Supreme Orchestrator)
            routes cases, fans out coordination — never diagnoses
                    |
   +----------------+----------------+----------------+
   |                                 |                |
02-intake                       03-care          04-compliance
```

## Reporting lines
- **medical-director (CEO)** — sets direction and organizational standards of care;
  decides direction alone. All executives report to the medical-director.
- **chief-medical-officer (CTO + clinical-process veto)** — owns coherence of the
  clinic's care **processes** (never individual clinical decisions); chairs the
  [care-review-council](../councils/care-review-council/README.md); can veto unsafe
  process.
- **operations-director (COO)** — owns scheduling, throughput, and delivery; decides
  sequencing alone.
- **chief-compliance-auditor (Chief Auditor)** — holds the absolute, regulated
  compliance/quality veto; never treats and never directs; chairs the
  [safety-council](../councils/safety-council/README.md); owns the health report.
- **intake-orchestrator (Supreme Orchestrator)** — routes each case to the right
  care path and fans out coordination across up to 15 parallel agents with disjoint
  ownership ([orchestration](../../kernel/protocols/orchestration.md)); never
  diagnoses ([Directive #2](../../kernel/laws/prime-directives.md)).

## Departments → agents
| Dept | Lead | Agents | Owns |
|------|------|--------|------|
| [02-intake](../02-intake/README.md) | triage-coordinator | triage-coordinator, intake-coordinator, scheduler | Take-in, triage, routing, scheduling |
| [03-care](../03-care/README.md) | care-coordinator | care-coordinator, case-manager, pharmacy-coordinator | Care-delivery coordination, case management, pharmacy logistics |
| [04-compliance](../04-compliance/README.md) | compliance-officer | compliance-officer, records-manager | Conformance, regulated records, quality enforcement |

## Escalation
Resolve at the lowest owning level; deadlock escalates one level up
([escalation](../../kernel/protocols/escalation.md)). A chief-compliance-auditor veto
stops the work and is overridable only by a human maintainer.
