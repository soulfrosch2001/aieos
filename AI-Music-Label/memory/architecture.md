# AI Music Label — Memory Architecture
Status: stable
Type: memory-architecture
Owner: label-head
Extends: none

How the label's memory plugs into the enterprise memory hierarchy defined in
[../../kernel/protocols/memory-flow.md](../../kernel/protocols/memory-flow.md).

## The hierarchy

```
Enterprise (Government) registers   ← decisions of consequence flow UP
        │
        ▼  knowledge flows DOWN
AI Music Label registers (this folder)
        │
        ▼
Department & agent working notes
```

Each local register **Extends** a stdlib register of related name. Resolution of
which register answers a lookup follows
[../../kernel/loader/resolution-order.md](../../kernel/loader/resolution-order.md):
local before stdlib before kernel, override by name only
([Directive #5](../../kernel/laws/prime-directives.md)).

## Register map

| Local register | Extends (stdlib) | Up to | Owner |
|----------------|------------------|-------|-------|
| [catalog-decisions](registers/catalog-decisions.md) | architecture-decisions | enterprise architecture-decisions | label-head |
| [release-log](registers/release-log.md) | lessons-learned | enterprise lessons-learned | operations-director |
| [artist-pipeline](registers/artist-pipeline.md) | future-improvements | enterprise future-improvements | ar-scout |

## Flow rules

- **Down:** enterprise standards, naming, and prior art are inherited; the label
  does not re-derive what the kernel already holds.
- **Up:** a catalog-shaping decision, a release lesson with cross-company value, or
  a pipeline pattern worth standardizing is summarized upward to the Government —
  no company talks to another company directly
  ([Directive #4 — communication](../../kernel/protocols/communication.md)).
- **Append-mostly:** corrections are dated additions ([Directive #7](../../kernel/laws/prime-directives.md)).

## Lifecycle

Workflows are the writers: [artist-signing](../workflows/artist-signing.md),
[track-production](../workflows/track-production.md), and
[release-campaign](../workflows/release-campaign.md) each end on a **Record** step
that appends to the registers above.
