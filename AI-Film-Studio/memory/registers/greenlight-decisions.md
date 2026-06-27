# Greenlight Decisions
Status: stable
Type: memory-register
Owner: ceo
Extends: architecture-decisions

**Purpose:** the studio's ledger of binding greenlight calls (GLRs) — the films the
studio committed to make (or passed on) and the reasoning that justified each call.
**Discipline:** append-mostly — a greenlight is never edited; it is **reversed** by a
new entry that supersedes it and back-links the original, so the full reasoning chain
stays auditable.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When decided (YYYY-MM-DD). |
| GLR | Stable id, e.g. `GLR-014`. |
| Project | Project code or working title the decision binds. |
| Decision | The call, stated as a commitment: `greenlit` · `passed` · `parked`. |
| Context | The creative case, budget band, and market forces that pressed for it. |
| Alternatives | Projects or framings considered and rejected, with the reason. |
| Status | `accepted` · `superseded` · `deprecated`. |
| Supersedes | GLR id this replaces, or `—`. |

## Example entry
| 2026-06-26 | GLR-014 | Nightboat | greenlit | Strong [story-editor](../../02-development/story-editor/) structure pass; fits the mid-budget thriller band; comparables support the audience case | Passed on bigger-budget reframe (rejected: blows the band); held for next slate (rejected: cast availability now) | accepted | — |

## Who updates this & when
The [ceo](../../01-executive/ceo/) appends after any greenlight call lands —
typically at Gate B of [development](../../workflows/development.md), with the
[creative-director](../../01-executive/creative-director/)'s veto cleared. Agents
cite the GLR id rather than re-arguing settled ground
(Directive [#6](../../../kernel/laws/prime-directives.md)). A creative-veto stop is
recorded here as a superseding entry.

## Flow
- Knowledge flows **down** from the parent register `architecture-decisions` to this
  studio register.
- Decisions of consequence flow **up**: a greenlight that sets a slate precedent
  beyond one film is promoted to the Enterprise.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
