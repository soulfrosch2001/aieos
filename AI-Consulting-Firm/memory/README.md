# Memory
Status: stable
Type: memory-index
Owner: operations-partner
Extends: none

The firm's accumulated knowledge and decisions. This is the **Company** level of
the four-level hierarchy ([memory-flow](../../kernel/protocols/memory-flow.md)):
it reads enterprise guidance from above and promotes engagement decisions of
consequence upward. Memory is **append-mostly** — we correct by adding a dated
entry, never by erasing (Directive [#8](../../kernel/laws/prime-directives.md)).

## What lives here
- [architecture.md](architecture.md) — how our memory plugs into the enterprise hierarchy.
- [registers/](registers/) — the three append-mostly registers below.

## Registers
| Register | Extends (stdlib) | Owner | Holds |
|----------|------------------|-------|-------|
| [engagement-decisions](registers/engagement-decisions.md) | architecture-decisions | engagement-director | Engagement decisions of consequence. |
| [risk-register](registers/risk-register.md) | known-issues | chief-auditor | Open risks across engagements. |
| [engagement-lessons](registers/engagement-lessons.md) | lessons-learned | operations-partner | What to do differently next time. |

## Discipline
- **Down for knowledge, up for decisions** ([memory-flow](../../kernel/protocols/memory-flow.md)).
- **Append, never erase.** A mistake is superseded by a follow-up entry; the
  original stays for audit.
- **Record before acting** on any engagement decision of consequence (local rule,
  [COMPANY.md](../00-company/COMPANY.md)).
