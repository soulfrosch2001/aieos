# Risk Register
Status: stable
Type: memory-register
Owner: chief-compliance-auditor
Extends: known-issues

**Purpose:** the firm's standing record of conflicts, legal exposures, and
regulatory risk — what could go wrong on a matter and how it is being contained.
**Discipline:** append-mostly — correct by adding a dated entry, never by erasing.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| Risk ID | Stable identifier (e.g. RK-2026-031). |
| Matter | Affected matter ID from [matter-log](matter-log.md). |
| Type | Conflict / liability / regulatory / ethics. |
| Description | The exposure and its trigger. |
| Severity | Low / Medium / High / Blocker. |
| Status | Open / Mitigated / Accepted / Walled-off. |
| Owner | chief-compliance-auditor or delegate. |
| Supersedes | Prior Risk ID this updates, if any. |

## Example entry
| 2026-06-26 | RK-2026-031 | M-2026-088 | Conflict | Adverse party is an existing advisory client | Blocker | Walled-off | chief-compliance-auditor | — |

## Who updates this & when
The [chief-compliance-auditor](../../01-executive/chief-compliance-auditor/) owns
and signs every entry. Written by [matter-intake](../../workflows/matter-intake.md)
(conflicts), [contract-review](../../workflows/contract-review.md) (residual risk),
and [legal-opinion](../../workflows/legal-opinion.md) (reliance limits). A Blocker
entry triggers the absolute compliance veto and may escalate to the
[risk-council](../../councils/risk-council/).

## Flow
- Knowledge flows **down** from parent register `known-issues` to children.
- Decisions of consequence flow **up** to `known-issues` when a systemic risk
  affects sibling companies.
See [../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
