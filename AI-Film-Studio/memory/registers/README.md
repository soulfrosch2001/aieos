# Registers
Status: stable
Type: reference
Owner: ceo
Extends: none

The studio's append-mostly memory registers. Each file follows
[../../../templates/memory-register.template.md](../../../templates/memory-register.template.md),
declares its schema, and **extends a stdlib register by name** — inheriting the
proven schema and tightening it for film production
([Directive #6](../../../kernel/laws/prime-directives.md)).

Discipline is **append-mostly** ([Directive #8](../../../kernel/laws/prime-directives.md)):
correct by adding a dated superseding entry, never by erasing. How these registers
plug into the enterprise hierarchy is described in
[../architecture.md](../architecture.md) and the kernel
[memory-flow protocol](../../../kernel/protocols/memory-flow.md).

## Registers
| File | Extends stdlib | Owner | Holds |
|------|----------------|-------|-------|
| [greenlight-decisions.md](greenlight-decisions.md) | `architecture-decisions` | ceo | binding greenlight / pass calls and their rationale |
| [production-log.md](production-log.md) | `lessons-learned` | line-producer | what each shoot and finish taught |
| [project-ideas.md](project-ideas.md) | `future-improvements` | screenwriter | parked pitches and seeds for a future slate |

## Who writes here
The [workflows](../../workflows/) write on completion:
[development](../../workflows/development.md) appends to greenlight-decisions and
project-ideas; [production](../../workflows/production.md) and
[post-production](../../workflows/post-production.md) append to production-log. The
named owner is accountable for the register's integrity.
