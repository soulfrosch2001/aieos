<!-- Memory register (append-mostly). Contract: ../../../kernel/contracts/memory-register.md -->

# Compliance Log
Status: stable
Type: memory-register
Owner: Chief Compliance Auditor
Extends: lessons-learned

**Purpose:** the firm's ledger of compliance checks, findings, and remediations —
the audit trail that proves the firm acted within its mandate and the law.
**Discipline:** append-mostly — a finding is never erased; it is **resolved** by a
dated remediation entry that supersedes it, so a regulator can reconstruct the full
history.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| CID | Stable id, e.g. `CID-112` (Compliance Identifier). |
| Check | The control performed (pre-trade limit, mandate fit, disclosure, conflict). |
| Trigger | Workflow or event that prompted it. |
| Finding | What the check found (`pass` / the specific breach). |
| Severity | `info` · `minor` · `material` · `breach`. |
| Remediation | The corrective action and who owns it. |
| Status | `cleared` · `remediating` · `escalated` · `closed`. |
| Supersedes | CID id this updates, or `—`. |

## Example entry
| 2026-06-26 | CID-112 | Pre-trade sector-cap check | portfolio-rebalance | Tech sleeve would breach 20% cap | material | Rebalance halted; trade resized to 19.5% | Chief Compliance Auditor | cleared | — |

## Who updates this & when
The [Chief Compliance Auditor](../../01-executive/chief-compliance-auditor/) appends
at every Gate B across [investment-thesis](../../workflows/investment-thesis.md),
[risk-review](../../workflows/risk-review.md), and
[portfolio-rebalance](../../workflows/portfolio-rebalance.md), and after any
[compliance-officer](../../04-compliance/) or
[regulatory-analyst](../../04-compliance/) review. A compliance veto is recorded here
with its grounds ([decision-authority](../../../kernel/laws/decision-authority.md)).

## Flow
- Compliance lessons flow **down** as reusable guidance every department inherits;
  a finding of firm-wide consequence (a pattern, a regulatory change) is promoted
  **up** to the Company and, if cross-firm, to the Enterprise.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
