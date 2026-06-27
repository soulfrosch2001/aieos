# Contract: Memory Register

A Memory Register is an **append-mostly file** with a **declared schema** and a
single accountable owner. It is the OS's institutional memory: you correct the
record by adding to it, never by erasing it (Directive
[#8](../laws/prime-directives.md)). Extends [entity.md](entity.md).

## Structure — one file with a header and a log
| Element | Holds |
|---------|-------|
| Identity block | Name, `Type: memory-register`, **Owner**, what it remembers. |
| **Schema** | The named fields of every entry (e.g. `date · author · decision · rationale · links`). |
| **Log** | Dated entries, newest appended at the end, each matching the schema. |

## Required sections
- **Owner** — the single role accountable for the register's integrity.
- **Schema** — declared up front; every entry conforms to it.
- **Append rule** — the explicit statement that entries are added, not edited or
  deleted; corrections are new entries that supersede, with a back-link.
- **Flow** — whether this register carries **knowledge down** (reference,
  learnings) or **decisions up** (choices of consequence).

## Rules
- **Append-mostly**: existing entries are immutable; an error is fixed by a new
  superseding entry, never by rewriting history.
- **One owner**: shared ownership means no ownership.
- **Schema-true**: an entry that does not match the declared schema is rejected.
- **Directional**: knowledge flows down to those who execute; decisions of
  consequence flow up to those accountable (Directive
  [#8](../laws/prime-directives.md)).

## Conformance
Valid when: identity block names an owner, the schema is declared, every entry
matches it, the append rule is stated, and no entry has been edited in place.
Build from [../../templates/memory-register.template.md](../../templates/memory-register.template.md).
