# Catalog Decisions
Status: stable
Type: memory-register
Owner: label-head
Extends: architecture-decisions

**Purpose:** The roster- and catalog-shaping decisions that set the label's
artistic direction — who is on the roster, how the catalog is positioned, and why.
**Discipline:** append-mostly — correct by adding a dated entry, never by erasing.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| Decision | The catalog/roster call made. |
| Driver | What forced the decision (signing, sequencing, repositioning). |
| Alternatives | Options considered and rejected. |
| Decided by | Accountable role (per decision-authority). |
| Reversal-of | Date of the entry this corrects, if any. |

## Example entry
| 2026-06-26 | Position the roster around late-night electronic; pass on the pop-crossover demo | Signing evaluation in artist-signing | Sign both / sign neither | label-head (ar-director veto cleared) | — |

## Who updates this & when
The label-head owns this register. It is written when
[artist-signing](../../workflows/artist-signing.md) signs an artist,
when [track-production](../../workflows/track-production.md) makes a catalog-level
call (re-cut, shelve), and when [release-campaign](../../workflows/release-campaign.md)
sets positioning or sequencing that reshapes the catalog.

## Flow
- Knowledge flows **down** from the enterprise architecture-decisions register to this child.
- Decisions of consequence flow **up** to the enterprise architecture-decisions register.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
