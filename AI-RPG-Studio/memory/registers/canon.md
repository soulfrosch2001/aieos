<!-- Memory register (append-mostly). Contract: ../../../kernel/contracts/memory-register.md -->

# Canon
Status: stable
Type: memory-register
Owner: lore-master
Extends: architecture-decisions

**Purpose:** the studio's ledger of binding world facts — the names, timeline,
cosmology, and geography that every line, campaign, and module must honour, plus the
reasoning that justified each one.
**Discipline:** append-mostly — a canon fact is never edited; it is **reversed** by a
new entry that supersedes it and back-links the original, so the full reasoning chain
stays auditable, exactly as an ADR is in the
[architecture-decisions](../../../memory/registers/architecture-decisions.md) register
this one extends.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When ruled (YYYY-MM-DD). |
| Canon | Stable id, e.g. `CN-031`. |
| Fact | The world truth, stated as a commitment. |
| Scope | Line or region it binds, or `all-lines`. |
| Rationale | Why it is true and what it protects. |
| Status | `accepted` · `superseded` · `retconned`. |
| Supersedes | Canon id this replaces, or `—`. |

## Example entry
| 2026-06-26 | CN-031 | The Sundering severed the moon Veth from its orbit 400 years before play | Ashfall line | Anchors the magic-decay timeline every Ashfall module relies on | accepted | — |

## Who updates this & when
The lore-master appends after any [campaign-design](../../workflows/campaign-design.md)
or [adventure-module](../../workflows/adventure-module.md) run that establishes a new
world fact, and after any [lore-council](../../councils/lore-council/) ruling
(Directive [#3](../../../kernel/laws/prime-directives.md)). Designers cite the canon id
in their drafts rather than re-deciding settled lore; a contradiction found in play is
reversed here by a superseding entry.

## Flow
- Knowledge flows **down** from
  [architecture-decisions](../../../memory/registers/architecture-decisions.md) — the
  ADR discipline of reverse-don't-edit and cite-don't-re-argue.
- Decisions of consequence flow **up**: a canon ruling that binds across lines is
  promoted to a studio-wide precedent.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
