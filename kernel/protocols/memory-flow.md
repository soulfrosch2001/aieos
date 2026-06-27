# Protocol: Memory Flow — Down for Knowledge, Up for Decisions

Status: stable
Type: protocol
Owner: Supreme Orchestrator
Extends: none

This protocol implements [Prime Directive #8](../laws/prime-directives.md):
**memory is append-mostly; knowledge flows down, decisions of consequence flow
up.** It governs how the four memory levels stay coherent without any of them
overwriting another.

## The four-level hierarchy

```
Enterprise   (the Government's memory — spans all companies)
   ▲  │
   │  ▼
Company      (one company's accumulated knowledge and decisions)
   ▲  │
   │  ▼
Department   (a department's working knowledge)
   ▲  │
   │  ▼
Agent        (an agent's local notes and craft memory)
```

Each level owns its own register. A level reads from the level above (inherited
knowledge) and contributes to it (promoted decisions). No level reaches *across*
to a sibling's memory — that would be a side-channel; route through the shared
parent (see [communication.md](communication.md)).

## Two directions

- **Knowledge flows DOWN.** Standards, guidance, conventions, and decided
  direction propagate from Enterprise → Company → Department → Agent. A lower
  level **inherits** higher knowledge; it does not re-derive it (Directive #6).
  When the Government decides something, it propagates downward as guidance that
  every level below is bound by.
- **Decisions of consequence flow UP.** A decision that outlives the task that
  produced it — a precedent, a tradeoff, a reversal, an escalation outcome — is
  **promoted** from the level that made it to the level above, until it reaches
  the level whose scope it actually affects.

## How a decision promotes upward

1. The deciding level records it in its own register (append).
2. It judges scope: does this bind only me, or my peers, or the whole company?
3. If it binds beyond the deciding level, it is enveloped as `intent: report`
   and sent up one level (see [escalation.md](escalation.md) for deadlocks).
4. The receiving level appends it and re-judges scope, repeating until it lands
   at the level whose decisions it constrains.

## How guidance propagates downward

1. A level decides direction or amends a standard.
2. It appends the guidance to its register, dated and attributed.
3. Lower levels inherit it on their next read — there is no push-and-overwrite.
   Guidance is **layered**, not replaced: the new entry supersedes by recency,
   the old entry stays for the record.

## Append-mostly discipline

- **Correct by adding, never by erasing.** A mistake is fixed with a follow-up
  entry that supersedes it; the original stays so the reasoning is auditable.
- **Deletion is reserved for genuine noise** (true duplicates, secrets) and is
  itself recorded.
- Registers declare a schema; see the [memory-register contract](../contracts/entity.md)
  and [memory-register template](../../templates/memory-register.template.md).
