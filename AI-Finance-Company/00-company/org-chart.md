# AI Finance Company — Org Chart
Status: stable
Type: company
Owner: CEO
Extends: kernel + stdlib

## Reporting structure
The firm has five executives mapped to kernel
[decision-authority](../../kernel/laws/decision-authority.md) levels, and three
departments. The orchestrator routes; it never sits above the executives as a
decision-maker ([Directive #2](../../kernel/laws/prime-directives.md)).

```
                          CEO  (firm strategy & mandate)
                           |
        +------------------+---------------------+--------------------------+
        |                  |                     |                          |
  Chief Investment   Chief Operating      Chief Compliance         Finance Orchestrator
     Officer            Officer               Auditor              (routes / fans out /
 (methodology veto)  (execution & seq.)  (compliance+quality        integrates; never
        |                  |               veto, absolute)            invests — Dir #2)
        |                  |                     |
        |   routes work across departments via the orchestrator (Dir #4 fan-out)
        |                  |                     |
  +-----+------+    +------+-------+      +-------+--------+
  | 02-analysis|    |  03-risk     |      | 04-compliance  |
  +------------+    +--------------+      +----------------+
  lead:            lead:                 lead:
  equity-analyst   risk-manager          compliance-officer
    - equity-analyst    - risk-manager        - compliance-officer
    - quantitative-     - portfolio-manager   - regulatory-analyst
      analyst           - stress-tester
    - macro-strategist
```

## Executives
| Executive | Kernel level | Owns | Decides |
|-----------|--------------|------|---------|
| [CEO](../01-executive/ceo/) | CEO | Firm strategy & mandate | Direction alone, within regulatory limits |
| [Chief Investment Officer](../01-executive/chief-investment-officer/) | CTO (+ methodology veto) | Analytical methodology & investment-process coherence | Vetoes work that violates the process |
| [Chief Operating Officer](../01-executive/chief-operating-officer/) | COO | Execution, operations, what ships when | Sequencing alone |
| [Chief Compliance Auditor](../01-executive/chief-compliance-auditor/) | Chief Auditor | Compliance + quality | Absolute veto; never invests, never directs |
| [Finance Orchestrator](../01-executive/finance-orchestrator/) | Supreme Orchestrator | Routing, tier-sizing, fan-out, integration | Never makes investment calls (Dir #2) |

## Departments
| Department | Lead | Agents |
|------------|------|--------|
| [02-analysis](../02-analysis/) | equity-analyst | equity-analyst, quantitative-analyst, macro-strategist |
| [03-risk](../03-risk/) | risk-manager | risk-manager, portfolio-manager, stress-tester |
| [04-compliance](../04-compliance/) | compliance-officer | compliance-officer, regulatory-analyst |

## Councils
| Council | Chair | Extends |
|---------|-------|---------|
| [investment-council](../councils/investment-council/) | chief-investment-officer | stdlib feature-council |
| [risk-council](../councils/risk-council/) | risk-manager | stdlib security-council |

## How authority flows
- **Mandate in** → CEO sets direction → `finance-orchestrator` sizes the tier
  and fans out to departments.
- **Analysis → Risk → Compliance** is the standard gate order; an investment
  call needs analysis-lead output plus risk sign-off, recorded in
  [investment-decisions](../memory/registers/investment-decisions.md).
- **Vetoes**: the Chief Investment Officer may block on methodology; the Chief
  Compliance Auditor may block absolutely on compliance. Conflicts route via the
  [escalation protocol](../../kernel/protocols/escalation.md).
