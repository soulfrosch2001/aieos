<!-- Memory register (append-mostly). Contract: ../../../kernel/contracts/memory-register.md -->

# Design Decisions
Status: stable
Type: memory-register
Owner: Lead Game Designer
Extends: architecture-decisions

**Purpose:** the studio's ledger of binding game-design decisions — the rules,
mechanics, and structural commitments that constrain every later component,
expansion, and balance pass. This is the tabletop analogue of an ADR: a Game
Design Record (GDR).
**Discipline:** append-mostly — a GDR is never edited; it is **superseded** by a
new dated entry that back-links the original, so the full reasoning chain (and
every dead-end mechanic) stays auditable.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When decided (YYYY-MM-DD). |
| GDR | Stable id, e.g. `GDR-021`. |
| Decision | The design commitment, stated as a rule. |
| Context | The play-experience goal or constraint that forced it. |
| Alternatives | Mechanics considered and rejected, with why. |
| Veto | `clear` · `design-director` · `chief-auditor` — who signed or could have blocked it. |
| Status | `accepted` · `superseded` · `deprecated`. |
| Supersedes | GDR id this replaces, or `—`. |

## Example entry
| 2026-06-26 | GDR-021 | Hand limit fixed at 7 cards, enforced at end of turn | Late-game hoarding stalled tables past 60 min | No limit (rejected: kingmaking); discard-to-5 (rejected: too punishing for combo decks) | design-director | accepted | — |

## Who updates this & when
The Lead Game Designer appends after any T2+ [design-council](../../councils/design-council/README.md)
that lands a binding mechanic, and records the Design Director's sign-off or veto
([decision-authority.md](../../../kernel/laws/decision-authority.md)). Because this
register **extends** the stdlib architecture-decisions, a GDR that sets precedent
beyond this game is promoted upward as an enterprise ADR.

## Flow
- Knowledge flows **down** from the enterprise
  [architecture-decisions](../../../memory/registers/architecture-decisions.md) to this register.
- Decisions of consequence flow **up**: a GDR that binds beyond one title is
  promoted to the Company, and a cross-studio precedent to the Enterprise.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
