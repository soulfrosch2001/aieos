<!-- Memory register (append-mostly). Contract: ../../../kernel/contracts/memory-register.md -->

# Editorial Standards
Status: stable
Type: memory-register
Owner: editorial-director
Extends: lessons-learned

**Purpose:** the house's accumulated editorial wisdom — house-style rulings and the
lessons each title taught — phrased as reusable guidance so the next editor does not
relearn it the hard way.
**Discipline:** append-mostly — a ruling that ages out is superseded by a newer
dated entry, never deleted; the old one stays so we remember *why* we believed it
([Directive #8](../../../kernel/laws/prime-directives.md)).

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| Trigger | The manuscript, query, or error that produced the ruling. |
| Ruling | The house-style rule or editorial lesson, stated imperatively. |
| Scope | `agent` · `department` · `house` — who it binds. |
| Confidence | `tentative` · `firm` — how settled it is. |
| Links | The title, proof, or council note that evidences it. |

## Example entry
| 2026-06-26 | Serial-comma drift across two debuts | Apply the serial comma house-wide; flag exceptions in the style sheet, never silently | house | firm | editing-pipeline.md (Gate B) |

## Who updates this & when
Any editor may propose a ruling; the editorial-director appends after an
[editing-pipeline](../../workflows/editing-pipeline.md) pass or an
[editorial-council](../../councils/editorial-council/) session
([decision-authority](../../../kernel/laws/decision-authority.md)). A firm,
house-scoped ruling becomes the standard the editorial-director's Gate B veto
enforces — stricter than the stdlib quality gate, never a replacement for it.

## Flow
- Knowledge flows **down**: rulings propagate House → Department → Agent so
  guidance is inherited, not rediscovered
  ([Directive #6](../../../kernel/laws/prime-directives.md)).
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
