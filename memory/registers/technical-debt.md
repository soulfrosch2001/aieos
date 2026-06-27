<!-- Memory register (append-mostly). Contract: ../../kernel/contracts/memory-register.md -->

# Technical Debt
Status: stable
Type: memory-register
Owner: Chief Architect
Extends: none

**Purpose:** the explicit ledger of **deliberate** shortcuts — debt taken on with
eyes open, recorded with the terms under which it will be repaid. Untracked debt
is not debt; it is rot.
**Discipline:** append-mostly — a debt is closed by a dated `repaid` entry that
back-links the original, never by deleting the line.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When the debt was taken on (YYYY-MM-DD). |
| Debt | The shortcut, named plainly. |
| Reason | The pressure that justified taking it. |
| Interest | What it costs us while it stands (the ongoing pain). |
| Repayment | The condition or deadline that triggers fixing it. |
| Status | `open` · `repaid` · `accepted-permanent`. |
| Owner | Role accountable for repayment. |

## Example entry
| 2026-06-26 | Hard-coded tax rates | Launch deadline; rates stable for 90 days | Manual edit per jurisdiction change | Before expanding past 3 regions | open | tax-service-engineer |

## Who updates this & when
The Chief Architect appends when a shortcut is consciously chosen, and again when
it is repaid. Debt that crosses a threshold of interest is escalated to the
roadmap ([roadmap.md](roadmap.md)) as committed work.

## Flow
- Decisions of consequence flow **up**: company-level debt is promoted to the
  Company register; debt that constrains the whole enterprise reaches the
  Enterprise level.
See [../../kernel/protocols/memory-flow.md](../../kernel/protocols/memory-flow.md).
