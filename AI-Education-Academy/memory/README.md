# Memory
Status: stable
Type: reference
Owner: academic-director
Extends: none

The academy's append-mostly memory: the registers where decided pedagogy, cohort
outcomes, and future course ideas accumulate so no agent re-derives settled ground
([Directive #6](../../kernel/laws/prime-directives.md)). The governing protocol is the
kernel's [memory-flow](../../kernel/protocols/memory-flow.md), which implements
[Directive #8](../../kernel/laws/prime-directives.md): **memory is append-mostly;
knowledge flows down, decisions of consequence flow up.**

How the academy plugs into the four-level enterprise hierarchy is described in
[architecture.md](architecture.md).

## Registers
| Register | Holds | Owner | Extends |
|----------|-------|-------|---------|
| [pedagogy-decisions](registers/pedagogy-decisions.md) | binding pedagogical choices | academic-director | architecture-decisions |
| [learning-outcomes](registers/learning-outcomes.md) | cohort outcome learning | curriculum-designer | lessons-learned |
| [course-ideas](registers/course-ideas.md) | future-course backlog | course-author | future-improvements |

See [registers/README.md](registers/README.md) for the register index and schemas.

## Discipline
Correct by adding a dated, attributed entry that supersedes the original; the
original stays for auditability. Deletion is reserved for genuine noise (true
duplicates, secrets) and is itself recorded. Each register declares its schema per
the [memory-register contract](../../kernel/contracts/memory-register.md) and
[template](../../templates/memory-register.template.md).

## Who writes here
Workflows write on completion: [course-design](../workflows/course-design.md) and
[assessment-review](../workflows/assessment-review.md) into pedagogy-decisions;
[lesson-production](../workflows/lesson-production.md) into learning-outcomes; all
three may park ideas in course-ideas. A run that ships without a memory update is
incomplete (Directive #8).
