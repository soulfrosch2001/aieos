# Precedent
Status: stable
Type: memory-register
Owner: general-counsel
Extends: architecture-decisions

**Purpose:** the firm's binding legal positions — the holdings, clause stances, and
reasoning that future matters must follow unless formally distinguished.
**Discipline:** append-mostly — correct by adding a dated entry, never by erasing.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| Precedent ID | Stable identifier (e.g. PR-2026-014). |
| Matter | Originating matter ID from [matter-log](matter-log.md). |
| Position | The legal position or clause stance the firm takes. |
| Reasoning | Authority and rationale; why this holds. |
| Scope / limits | Jurisdiction and facts to which it applies. |
| Signed by | general-counsel (mandatory). |
| Supersedes | Prior Precedent ID this corrects, if any. |

## Example entry
| 2026-06-26 | PR-2026-014 | M-2026-088 | Uncapped indemnity is a blocker absent a mutual cap | Liability symmetry; firm risk policy; cf. prior PR-2025-201 | US commercial contracts, all jurisdictions | general-counsel | — |

## Who updates this & when
The [general-counsel](../../01-executive/general-counsel/) signs every entry.
Written by [contract-review](../../workflows/contract-review.md) (clause positions)
and [legal-opinion](../../workflows/legal-opinion.md) (holdings) at their Memory
Updates step. No precedent is set without general-counsel soundness sign-off.

## Flow
- Knowledge flows **down** from parent register `architecture-decisions` to children.
- Decisions of consequence flow **up** to `architecture-decisions` when a firm
  position should bind sibling companies.
See [../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
