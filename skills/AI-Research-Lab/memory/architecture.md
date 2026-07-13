# Memory Architecture
Status: stable
Type: protocol
Owner: lab-orchestrator
Extends: none

How the AI Research Lab's memory plugs into the enterprise memory hierarchy. This file is
the lab-side companion to the kernel's
[memory-flow protocol](../../kernel/protocols/memory-flow.md) and the stdlib
[memory architecture](../../memory/architecture.md): the protocol states the law; this
states how the lab's registers under [registers/](registers/) realize it. Nothing is ever
overwritten ([Directive #8](../../kernel/laws/prime-directives.md)).

## The four levels
```
Enterprise   the Government's memory — spans every company
   ▲  │
   │  ▼
Company      the AI Research Lab's accumulated findings and decisions
   ▲  │
   │  ▼
Department   research / analysis / publication working knowledge
   ▲  │
   │  ▼
Agent        a scientist's local notes and craft memory
```
The lab is the **Company** level. It reads inherited knowledge from the Enterprise above and
promotes decisions of consequence up to it. No department reads a sibling department's
memory directly — that is a side-channel; route through the shared parent
([Directive #5](../../kernel/laws/prime-directives.md)).

## Knowledge flows DOWN
Direction, prior lessons, and parked questions propagate Enterprise → Company → Department →
Agent. A scientist **inherits** established findings and methods rather than re-deriving them
([Directive #6](../../kernel/laws/prime-directives.md)). The lab's down-flowing registers are
[experiment-log](registers/experiment-log.md) (extends
[lessons-learned](../../memory/registers/lessons-learned.md)) and
[open-questions](registers/open-questions.md) (extends
[future-improvements](../../memory/registers/future-improvements.md)). Guidance is **layered,
not replaced**: a newer entry supersedes by recency while the old entry stays for the record.

## Decisions of consequence flow UP
An established finding — a result that survived [peer-review](../workflows/peer-review.md) and
binds what the lab now believes — is **promoted** from the department that produced it to the
Company ledger, and a result that sets cross-company precedent is enveloped one level higher.
The up-flowing register is [findings](registers/findings.md) (extends
[architecture-decisions](../../memory/registers/architecture-decisions.md)): like an ADR, a
finding is a binding commitment with recorded reasoning, reversed only by a superseding,
back-linked entry (a correction or retraction).

## Append-mostly, always
- **Correct by adding.** A wrong finding is fixed by a dated correction or retraction that
  supersedes it and back-links the original; the original stays so the reasoning is auditable.
- **Immutable log.** Existing entries are never edited in place. A pre-registered protocol in
  [experiment-log](registers/experiment-log.md) is amended only by a dated amendment entry.
- **Deletion is reserved for genuine noise** (true duplicates, leaked personal data) and is
  itself recorded.

## Inheritance and extension
The lab does not copy stdlib schemas — it **mounts** them and extends *by name*. Each local
register declares its `Extends:` parent and may add a column or a stricter rule, never loosen
one ([Directive #6](../../kernel/laws/prime-directives.md),
[resolution-order](../../kernel/loader/resolution-order.md)). The contract every register
obeys is [memory-register.md](../../kernel/contracts/memory-register.md).
