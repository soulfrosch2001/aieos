# Memory Architecture
Status: stable
Type: protocol
Owner: Supreme Orchestrator
Extends: none

The shape of institutional memory in AIEOS: a four-level hierarchy where
**knowledge flows down** and **decisions of consequence flow up**, and nothing is
ever overwritten ([Directive #8](../kernel/laws/prime-directives.md)). This file
is the stdlib-side companion to the kernel's
[memory-flow protocol](../kernel/protocols/memory-flow.md) — the protocol states
the law; this states how the registers under [registers/](registers/) realize it.

## The four levels
```
Enterprise   the Government's memory — spans every company
   ▲  │
   │  ▼
Company      one company's accumulated knowledge and decisions
   ▲  │
   │  ▼
Department   a department's working knowledge
   ▲  │
   │  ▼
Agent        an agent's local notes and craft memory
```
Each level owns its **own copy** of the default registers. A level reads from the
level above (inherited knowledge) and contributes to it (promoted decisions). No
level reads a *sibling's* memory directly — that is a side-channel; route through
the shared parent ([Directive #5](../kernel/laws/prime-directives.md)).

## Knowledge flows DOWN
Standards, roadmap direction, lessons, and known-issue workarounds propagate
Enterprise → Company → Department → Agent. A lower level **inherits** higher
knowledge on its next read; it does not re-derive it
([Directive #6](../kernel/laws/prime-directives.md)). Guidance is **layered, not
replaced**: a newer entry supersedes by recency while the old entry stays for the
record. The down-flowing registers are `roadmap`, `lessons-learned`,
`known-issues`, and `future-improvements`.

## Decisions of consequence flow UP
A decision that outlives its task — a precedent, a tradeoff accepted, a reversal,
an escalation outcome — is **promoted** from the level that made it to the level
whose scope it actually binds. The promoting level appends it locally, judges
scope, and (if it binds beyond itself) envelopes it `intent: report` one level up,
repeating until it lands. The up-flowing registers are `architecture-decisions`,
`technical-debt`, and `meeting-history`.

## Append-mostly, always
- **Correct by adding.** A mistake is fixed by a follow-up entry that supersedes
  it, back-linked to the original; the original stays so the reasoning is auditable.
- **Immutable log.** Existing entries are never edited in place.
- **Deletion is reserved for genuine noise** (true duplicates, leaked secrets) and
  is itself recorded.

## Inheritance and extension
Companies do not copy these schemas — they **mount** them and extend *by name*. A
company that needs a `compliance-log` adds it as a sibling register; a company
that needs an extra column on `technical-debt` declares the override and says why
([Directive #6](../kernel/laws/prime-directives.md)). The contract every register
obeys is [memory-register.md](../kernel/contracts/memory-register.md).
