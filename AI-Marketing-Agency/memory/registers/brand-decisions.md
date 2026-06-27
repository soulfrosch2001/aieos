<!-- Memory register (append-mostly). Contract: ../../../kernel/contracts/memory-register.md -->

# Brand Decisions
Status: stable
Type: memory-register
Owner: strategy-director
Extends: architecture-decisions

**Purpose:** the agency's ledger of binding brand and positioning choices — the
decisions that constrain how a brand may be expressed across every future
engagement, and the reasoning that justified them.
**Discipline:** append-mostly — a brand decision is never edited; it is **reversed**
by a new entry that supersedes it and back-links the original, so the full reasoning
chain stays auditable.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When decided (YYYY-MM-DD). |
| BDR | Stable id, e.g. `BDR-007` (Brand Decision Record). |
| Scope | Which brand/client this binds. |
| Decision | The brand or positioning choice, stated as a commitment. |
| Context | The audience evidence and forces that pressed for it. |
| Alternatives | Positions considered and rejected. |
| Status | `accepted` · `superseded` · `deprecated`. |
| Supersedes | BDR id this replaces, or `—`. |

## Example entry
| 2026-06-26 | BDR-007 | Northwind (client) | Reposition from "lowest price" to "fastest delivery" | Price war eroding margin; survey shows speed beats price for the target buyer | Stay on price (rejected: unwinnable race); premium-quality angle (rejected: no proof) | accepted | — |

## Who updates this & when
The strategy-director appends after any [brand-review](../../workflows/brand-review.md)
that lands a binding choice, and after a [campaign-launch](../../workflows/campaign-launch.md)
that settles a positioning question at Gate A (Directive
[#3](../../../kernel/laws/prime-directives.md)). Agents cite the BDR id in briefs and
creative reviews rather than re-arguing settled positioning.

## Flow
- Decisions of consequence flow **up**: a brand choice that binds beyond one client
  is promoted to the Company, and a cross-company brand precedent to the Enterprise.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
