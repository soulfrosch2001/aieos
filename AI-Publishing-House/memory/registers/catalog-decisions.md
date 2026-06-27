<!-- Memory register (append-mostly). Contract: ../../../kernel/contracts/memory-register.md -->

# Catalog Decisions
Status: stable
Type: memory-register
Owner: ceo
Extends: architecture-decisions

**Purpose:** the house's ledger of binding list decisions — what was acquired (or
passed), what was published, and the reasoning that justified each, so the list is
an auditable record rather than a matter of memory.
**Discipline:** append-mostly — a signing is never edited; it is **reversed** by a
new entry that supersedes it and back-links the original, so the full reasoning
chain stays auditable ([Directive #8](../../../kernel/laws/prime-directives.md)).

## Schema
| Column | Meaning |
|--------|---------|
| Date | When decided (YYYY-MM-DD). |
| CAT | Stable id, e.g. `CAT-014`. |
| Title | The work, by working title. |
| Decision | The call, stated as a commitment: `acquired` · `passed` · `published` · `pulled`. |
| Context | The reader-value case and market forces that pressed for it ([Directive #1](../../../kernel/laws/prime-directives.md)). |
| Alternatives | Comparable titles or competing submissions considered and set aside. |
| Tier | Engagement tier of the work — [T0–T4](../../../kernel/laws/engagement-tiers.md). |
| Supersedes | CAT id this reverses or updates, or `—`. |

## Example entry
| 2026-06-26 | CAT-014 | The Quiet Tide | acquired | Strong literary debut with a clear book-club audience; reader-value case held | Two weaker debuts in the same slot (passed); a known author's reprint (deferred) | T2 | — |

## Who updates this & when
The ceo appends after any [manuscript-acquisition](../../workflows/manuscript-acquisition.md)
signing decision and after a [book-release](../../workflows/book-release.md) ships
an edition ([decision-authority](../../../kernel/laws/decision-authority.md)). The
acquisitions-editor proposes entries; only the ceo commits, so the list stays one
coherent voice. A pulled or reversed title is recorded by a superseding entry.

## Flow
- Decisions of consequence flow **up**: a list decision that binds the whole house
  is appended at the Company level, and a cross-company publishing precedent is
  promoted to the Enterprise.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
