# Registers
Status: stable
Type: reference
Owner: design-director
Extends: none

The studio's append-mostly memory registers. Each file follows
[../../../templates/memory-register.template.md](../../../templates/memory-register.template.md),
declares its schema, and **extends a stdlib register by name** — inheriting the
proven schema and tightening it for architecture practice
([Directive #6](../../../kernel/laws/prime-directives.md)).

Discipline is **append-mostly** ([Directive #8](../../../kernel/laws/prime-directives.md)):
correct by adding a dated superseding entry, never by erasing. How these registers
plug into the enterprise hierarchy is described in
[../architecture.md](../architecture.md) and the kernel
[memory-flow protocol](../../../kernel/protocols/memory-flow.md).

## Registers
| File | Extends stdlib | Owner | Holds |
|------|----------------|-------|-------|
| [design-decisions.md](design-decisions.md) | `architecture-decisions` | design-director | binding design choices and their rationale |
| [code-compliance-log.md](code-compliance-log.md) | `known-issues` | chief-auditor | open and closed code/permit findings |
| [design-lessons.md](design-lessons.md) | `lessons-learned` | lead-architect | what each completed project taught |

## Who writes here
The [workflows](../../workflows/) write on completion: schematic-design and
design-development append to design-decisions and design-lessons; permit-review
appends to code-compliance-log and design-lessons. The named owner is accountable
for the register's integrity.
