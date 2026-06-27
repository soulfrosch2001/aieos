# Memory Registers
Status: stable
Type: memory-register-index
Owner: operations-partner
Extends: none

The three append-mostly registers at the **Company** level. Each extends a stdlib
register by name ([Directive #6](../../../kernel/laws/prime-directives.md)) and is
written by the [workflows](../../workflows/) at their **Record** step. Append,
never erase (Directive [#8](../../../kernel/laws/prime-directives.md)).

## Registers
| Register | Extends (stdlib) | Owner | Purpose |
|----------|------------------|-------|---------|
| [engagement-decisions](engagement-decisions.md) | architecture-decisions | engagement-director | The engagement decisions of consequence and their rationale. |
| [risk-register](risk-register.md) | known-issues | chief-auditor | Open risks across engagements, with severity and owner. |
| [engagement-lessons](engagement-lessons.md) | lessons-learned | operations-partner | What worked and what to change next engagement. |

## How they are written
- [engagement-scoping](../../workflows/engagement-scoping.md) — scope, tier, staffing, intake risks.
- [strategy-development](../../workflows/strategy-development.md) — recommendation, rejected alternatives, assumption risks.
- [implementation](../../workflows/implementation.md) — delivery decisions, adoption risks, handover lessons.

See [../architecture.md](../architecture.md) for how these bind to the enterprise
hierarchy and [memory-flow](../../../kernel/protocols/memory-flow.md) for the rules.
