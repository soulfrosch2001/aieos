<!-- Memory register (append-mostly). Contract: ../../../kernel/contracts/memory-register.md -->

# Investment Decisions
Status: stable
Type: memory-register
Owner: Chief Investment Officer
Extends: architecture-decisions

**Purpose:** the firm's ledger of binding investment decisions — the calls that
commit or release capital and the reasoning that justified them.
**Discipline:** append-mostly — a decision is never edited; it is **reversed** by a
new entry that supersedes it and back-links the original, so the full reasoning
chain stays auditable for compliance and review.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When decided (YYYY-MM-DD). |
| IDR | Stable id, e.g. `IDR-021` (Investment Decision Record). |
| Decision | The call, stated as a commitment (buy / size / hold / exit / pass). |
| Thesis | The argument and falsification test that justified it. |
| Evidence | Cited analysis backing the call ([investment-thesis](../../workflows/investment-thesis.md) output). |
| Alternatives | Allocations or positions considered and rejected, with reason. |
| Mandate fit | Why it respects the mandate and regulatory limits. |
| Status | `accepted` · `superseded` · `exited`. |
| Supersedes | IDR id this replaces, or `—`. |

## Example entry
| 2026-06-26 | IDR-021 | Initiate 3% position in EU industrials ETF | Cyclical recovery priced too cheaply; falsifies if PMIs stay sub-50 two quarters | Equity + macro evidence pack, 14 cited sources | Single-name exposure (rejected: idiosyncratic risk); cash (rejected: opportunity cost) | Within 5% sector cap and UCITS limits | accepted | — |

## Who updates this & when
The [Chief Investment Officer](../../01-executive/chief-investment-officer/) appends
after any T2+ [investment-council](../../councils/investment-council/) that lands a
binding call ([Directive #3](../../../kernel/laws/prime-directives.md)), and after a
cleared [portfolio-rebalance](../../workflows/portfolio-rebalance.md). Analysts and
risk cite the IDR id rather than re-arguing settled ground.

## Flow
- Decisions of consequence flow **up**: an IDR that binds beyond one mandate is
  promoted to the Company, and a cross-firm precedent to the Enterprise.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
