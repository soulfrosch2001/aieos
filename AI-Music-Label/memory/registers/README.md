# AI Music Label — Memory Registers
Status: stable
Type: memory-register-index
Owner: label-head
Extends: none

The label's append-mostly registers. Each holds exactly one kind of knowledge,
extends a stdlib schema by name, and is written by the workflow that owns it.
See [../architecture.md](../architecture.md) for how these plug into the
enterprise hierarchy, and
[../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md)
for the up/down flow rules.

## Registers

| Register | Extends (stdlib) | Owner | Written by |
|----------|------------------|-------|-----------|
| [catalog-decisions](catalog-decisions.md) | architecture-decisions | label-head | artist-signing, track-production, release-campaign |
| [release-log](release-log.md) | lessons-learned | operations-director | track-production, release-campaign |
| [artist-pipeline](artist-pipeline.md) | future-improvements | ar-scout | artist-signing |

## Discipline

Append-mostly — correct by adding a dated entry, never by erasing
([Directive #7](../../../kernel/laws/prime-directives.md)). One concept per
register; every folder carries a README ([Directive #8](../../../kernel/laws/prime-directives.md)).
