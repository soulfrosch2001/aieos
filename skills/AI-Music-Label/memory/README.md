# AI Music Label — Memory
Status: stable
Type: memory-index
Owner: label-head
Extends: none

The label's institutional memory. Memory is **append-mostly**: we correct by
adding a dated entry, never by erasing history
([Directive #7](../../kernel/laws/prime-directives.md)). Knowledge flows **down**
from enterprise registers to the label; decisions of consequence flow **up**, per
[../../kernel/protocols/memory-flow.md](../../kernel/protocols/memory-flow.md).

## What lives here

- [architecture.md](architecture.md) — how this label's memory plugs into the enterprise hierarchy.
- [registers/](registers/README.md) — the append-mostly registers below.

## Registers

| Register | Extends (stdlib) | Owner | Holds |
|----------|------------------|-------|-------|
| [catalog-decisions](registers/catalog-decisions.md) | architecture-decisions | label-head | Roster- and catalog-shaping decisions. |
| [release-log](registers/release-log.md) | lessons-learned | operations-director | Release outcomes and lessons. |
| [artist-pipeline](registers/artist-pipeline.md) | future-improvements | ar-scout | Prospects and their evaluation status. |

## Discipline

- One concept per register; every folder carries a README ([Directive #8](../../kernel/laws/prime-directives.md)).
- A register is added by copying [../../templates/memory-register.template.md](../../templates/memory-register.template.md) and setting `Extends:` to the stdlib schema it specializes.
