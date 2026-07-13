# Memory Architecture
Status: stable
Type: protocol
Owner: house-orchestrator
Extends: none

How AI Publishing House plugs into the AIEOS four-level memory hierarchy. This file
is the house-side companion to the kernel's
[memory-flow protocol](../../kernel/protocols/memory-flow.md): the protocol states
the law; this states how the house's [registers/](registers/) realize it. Nothing
is ever overwritten ([Directive #8](../../kernel/laws/prime-directives.md)).

## Where the house sits
```
Enterprise   the Government's memory — spans every AIEOS company
   ▲  │
   │  ▼
Company      AI Publishing House — the catalog, the editorial record, the schedule
   ▲  │
   │  ▼
Department   02-acquisitions · 03-editorial · 04-production working knowledge
   ▲  │
   │  ▼
Agent        each editor/scout/designer's local craft notes
```
The house owns its **own copy** of the inherited registers and its three local
registers. It reads inherited knowledge from the Enterprise above and promotes
decisions of consequence up to it. No department reads a sibling's memory directly —
that is a side-channel; route through the shared parent
([Directive #5](../../kernel/laws/prime-directives.md)).

## Knowledge flows DOWN
House style, schedule direction, and editorial lessons propagate Company →
Department → Agent. A copy-editor inherits the standing house-style rulings in
[editorial-standards](registers/editorial-standards.md) on the next read rather than
re-deriving them ([Directive #6](../../kernel/laws/prime-directives.md)). The
down-flowing registers here are [editorial-standards](registers/editorial-standards.md)
(extends `lessons-learned`) and [rights-and-sales](registers/rights-and-sales.md)
(extends `roadmap`), plus the inherited `known-issues` and `future-improvements`.

## Decisions of consequence flow UP
A signing, a published edition, a reversed acquisition, or a precedent-setting style
ruling is **promoted** from the level that made it to the level whose scope it binds.
The up-flowing local register is [catalog-decisions](registers/catalog-decisions.md)
(extends `architecture-decisions`): a list decision that binds the whole house is
appended at the Company level, and a cross-company precedent is enveloped
`intent: report` up to the Enterprise ([memory-flow](../../kernel/protocols/memory-flow.md)).

## Append-mostly, always
- **Correct by adding.** A reversed signing is a follow-up entry that supersedes the
  original and back-links it; the original stays so the reasoning is auditable.
- **Immutable log.** Existing entries are never edited in place.
- **Deletion is reserved for genuine noise** (true duplicates, leaked terms) and is
  itself recorded.

## Inheritance and extension
The house does not copy stdlib schemas — it **mounts** them and extends *by name*
([resolution order](../../kernel/loader/resolution-order.md)). Each local register
declares its parent in its `Extends:` line and adds strictness only, never weakening
the kernel ([memory-register contract](../../kernel/contracts/memory-register.md)).
