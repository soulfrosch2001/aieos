# AI Legal Advisors — Org Chart
Status: stable
Type: company
Owner: CEO
Extends: kernel + stdlib

## Reporting structure
The firm has five executives mapped to kernel
[decision-authority](../../kernel/laws/decision-authority.md) levels, and three
practice departments. The orchestrator routes; it never sits above the executives
as a decision-maker and never gives legal advice
([Directive #2](../../kernel/laws/prime-directives.md)).

```
                      Managing Partner  (practice direction & which matters to take)
                              |
        +---------------------+----------------------+---------------------------+
        |                     |                      |                           |
   General Counsel     Operations Partner    Chief Compliance Auditor    Intake Orchestrator
 (legal-soundness     (delivery, staffing,    (ethics/compliance veto,    (routes / sizes /
   veto, CTO)          deadlines, COO)          absolute; never advises    fans out / integrates;
        |                     |                  or directs)                never advises — Dir #2)
        |                     |                      |
        |   routes matters across departments via the orchestrator (Dir #4 fan-out)
        |                     |                      |
  +-----+------+      +-------+------+      +---------+--------+
  | 02-advisory|      | 03-litigation|      | 04-compliance   |
  +------------+      +--------------+      +-----------------+
  lead:              lead:                 lead:
  corporate-counsel  litigator             compliance-counsel
    - corporate-counsel   - litigator            - compliance-counsel
    - contract-attorney   - legal-researcher     - regulatory-analyst
    - ip-attorney         - paralegal
```

## Executives
| Executive | Kernel level | Owns | Decides |
|-----------|--------------|------|---------|
| [Managing Partner](../01-executive/managing-partner/) | CEO | Practice direction & matter selection | Direction alone |
| [General Counsel](../01-executive/general-counsel/) | CTO (+ legal-soundness veto) | Legal soundness & cross-matter consistency | Vetoes unsound or inconsistent work |
| [Operations Partner](../01-executive/operations-partner/) | COO | Matter delivery, staffing, deadlines | Sequencing alone |
| [Chief Compliance Auditor](../01-executive/chief-compliance-auditor/) | Chief Auditor | Ethics, conflicts, regulatory conformance | Absolute veto; never advises, never directs |
| [Intake Orchestrator](../01-executive/intake-orchestrator/) | Supreme Orchestrator | Routing, tier-sizing, fan-out, integration | Never gives legal advice (Dir #2) |

## Departments
| Department | Lead | Agents |
|------------|------|--------|
| [02-advisory](../02-advisory/) | corporate-counsel | corporate-counsel, contract-attorney, ip-attorney |
| [03-litigation](../03-litigation/) | litigator | litigator, legal-researcher, paralegal |
| [04-compliance](../04-compliance/) | compliance-counsel | compliance-counsel, regulatory-analyst |

## Councils
| Council | Chair | Extends |
|---------|-------|---------|
| [matter-review-council](../councils/matter-review-council/) | general-counsel | stdlib feature-council |
| [risk-council](../councils/risk-council/) | chief-compliance-auditor | stdlib security-council |

## How authority flows
- **Matter in** → Managing Partner decides whether to take it → `intake-orchestrator`
  conflict-checks, sizes the tier, and fans out to departments.
- **Advisory / Litigation → Compliance** is the standard gate order; a legal
  opinion needs the drafting attorney's product plus general-counsel soundness
  sign-off, recorded in [precedent](../memory/registers/precedent.md).
- **Vetoes**: the General Counsel may block on legal soundness; the Chief
  Compliance Auditor may block absolutely on ethics/compliance. Conflicts route
  via the [escalation protocol](../../kernel/protocols/escalation.md).
