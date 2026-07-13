<!-- Memory register (append-mostly). Contract: ../../../kernel/contracts/memory-register.md -->

# Risk Register
Status: stable
Type: memory-register
Owner: Risk Manager
Extends: known-issues

**Purpose:** the firm's ledger of open risks — exposures the book carries, their
severity, and the mitigations or accepted-risk records that own them.
**Discipline:** append-mostly — a risk is never erased; it is **closed** by a dated
entry that supersedes it (mitigated, expired, or realized), so the exposure history
stays auditable.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| RID | Stable id, e.g. `RID-047` (Risk Identifier). |
| Exposure | The risk, stated concretely (concentration, factor, liquidity, drawdown, regulatory). |
| Severity | `low` · `medium` · `high` · `critical`. |
| Limit touched | Which firm limit it pressures, or `—`. |
| Mitigation | The control, hedge, or workaround in place. |
| Owner | Accountable role for the mitigation. |
| Status | `open` · `mitigated` · `accepted` · `realized` · `closed`. |
| Supersedes | RID id this updates, or `—`. |

## Example entry
| 2026-06-26 | RID-047 | Tech sector concentration at 22% vs 20% soft cap | high | Sector cap | Trim 2% on next rebalance; hedge with index put | Portfolio Manager | open | — |

## Who updates this & when
The [risk-manager](../../03-risk/risk-manager/) appends during every
[risk-review](../../workflows/risk-review.md) (before and after a position) and
whenever a [stress-tester](../../03-risk/) scenario surfaces a new exposure. The
[risk-council](../../councils/risk-council/) records accepted risk here with the name
of who accepted it ([Directive #9](../../../kernel/laws/prime-directives.md)).

## Flow
- Open risks flow **down** as inherited workarounds; an exposure of firm-wide
  consequence (a breached limit, a systemic factor) is promoted **up** to the Company
  and, if cross-firm, to the Enterprise.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
