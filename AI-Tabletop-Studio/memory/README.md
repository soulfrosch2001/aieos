# Memory — AI Tabletop Studio
Status: stable
Type: readme
Owner: Producer
Extends: none

The studio's memory is not a wiki; it is the institutional spine that keeps a
design coherent across months of iteration. Every binding choice, balance tweak,
and table verdict lands in an append-mostly register so the *why* survives the
people who were in the room. This folder indexes those registers and states what
the studio inherits versus what it owns.

## Inherited by reference (the 7 stdlib registers)
Per [Prime Directive #6 — inherit, don't fork](../../kernel/laws/prime-directives.md),
the studio inherits all seven enterprise registers as-is and does **not** copy
them. We cite them; we never duplicate their content:

- [architecture-decisions](../../memory/registers/architecture-decisions.md)
- [lessons-learned](../../memory/registers/lessons-learned.md)
- [known-issues](../../memory/registers/known-issues.md)
- [technical-debt](../../memory/registers/technical-debt.md)
- [future-improvements](../../memory/registers/future-improvements.md)
- [roadmap](../../memory/registers/roadmap.md)
- [meeting-history](../../memory/registers/meeting-history.md)

## Local registers
Two of these **extend** a stdlib register (declaring `Extends`, adding strictness
only — never weakening it, per the loader's resolution order); the rest are
company-only domains the kernel does not model.

| Register | Extends | Owner |
|----------|---------|-------|
| [design-decisions](registers/design-decisions.md) | architecture-decisions | Lead Game Designer |
| [balancing-history](registers/balancing-history.md) | none (company-only) | Balance Designer |
| [playtest-feedback](registers/playtest-feedback.md) | none (company-only) | Playtest Lead |

## Discipline
Append-mostly across the board: a wrong call is corrected by a new dated entry
that supersedes the old one, never by erasing it. See
[architecture.md](architecture.md) for how this folder plugs into the enterprise
memory hierarchy.
