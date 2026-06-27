# Memory Architecture
Status: stable
Type: memory-architecture
Owner: operations-partner
Extends: none

How this firm's memory plugs into the enterprise hierarchy defined by
[memory-flow](../../kernel/protocols/memory-flow.md). We do not invent a memory
model — we inherit the four-level one and bind our registers to it
(Directive [#6](../../kernel/laws/prime-directives.md)).

## Where we sit
```
Enterprise   (Government memory — spans all companies)
   ▲  │
   │  ▼
Company      ◀── this firm: engagement-decisions, risk-register, engagement-lessons
   ▲  │
   │  ▼
Department   (02-diagnosis / 03-strategy / 04-implementation working notes)
   ▲  │
   │  ▼
Agent        (an agent's local craft notes)
```

## Binding
| Our register | Stdlib parent it extends | Direction it flows |
|--------------|--------------------------|--------------------|
| [engagement-decisions](registers/engagement-decisions.md) | architecture-decisions | Decisions of consequence promote **up** to enterprise. |
| [risk-register](registers/risk-register.md) | known-issues | Cross-engagement risks promote **up**; mitigations inherit **down**. |
| [engagement-lessons](registers/engagement-lessons.md) | lessons-learned | Lessons promote **up**; conventions inherit **down**. |

## Rules we inherit
- **Knowledge flows down.** Enterprise standards and decided direction reach us on
  read; we do not re-derive them.
- **Decisions of consequence flow up.** A precedent, trade-off, reversal, or
  escalation outcome that binds beyond one engagement is promoted to the
  Government's memory.
- **No sibling side-channels.** We never read another company's memory directly —
  everything routes through the shared parent (Directive [#5](../../kernel/laws/prime-directives.md),
  [communication](../../kernel/protocols/communication.md)).
- **Append-mostly.** See [memory-flow](../../kernel/protocols/memory-flow.md).

## Who owns what
The [operations-partner](../01-executive/operations-partner/) owns this level's
coherence; each register names its own accountable owner.
