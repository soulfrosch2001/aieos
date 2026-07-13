# Memory Architecture — AI Tabletop Studio
Status: stable
Type: note
Owner: Producer
Extends: none

The studio does not invent a memory model. It plugs into the enterprise memory
hierarchy defined by the kernel and inherits its flow rules wholesale, per
[Prime Directive #6](../../kernel/laws/prime-directives.md).

## The hierarchy
```
Enterprise (Government)
  └─ Company (AI Tabletop Studio)
       └─ Department (game-design, content, playtesting, …)
            └─ Agent (lead-game-designer, balance-designer, playtest-lead, …)
```

Two directions of travel, governed by
[kernel/protocols/memory-flow.md](../../kernel/protocols/memory-flow.md):

- **Decisions flow up.** A balance call that only affects one expansion stays in
  the department register. A choice that binds the whole game is promoted to the
  studio's [design-decisions](registers/design-decisions.md); a precedent that
  should bind *other* studios is promoted to the Government's enterprise
  registers. The studio never edits an enterprise register directly — it submits
  upward and the Government records it.
- **Knowledge flows down.** Enterprise lessons, conventions, and standards are
  read by every agent here; they are inherited by reference, not re-written
  locally ([quality-standards.md](../../shared/quality-standards.md)).

## What this means in practice
An agent writes to the *lowest* register that fully owns the knowledge. The
Producer audits, at each council, whether anything written low should be promoted
high. That single discipline keeps the studio's memory both local-fast and
enterprise-coherent.
