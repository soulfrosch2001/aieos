# Memory Registers
Status: stable
Type: reference
Owner: academic-director
Extends: none

The academy's local registers — each **extends a stdlib register by name** and
inherits its schema discipline, then tightens it for education
([Directive #6](../../../kernel/laws/prime-directives.md)). All are append-mostly per
the [memory-register contract](../../../kernel/contracts/memory-register.md) and the
[template](../../../templates/memory-register.template.md). The hierarchy these plug
into is in [../architecture.md](../architecture.md).

## Index
| Register | Holds | Owner | Extends |
|----------|-------|-------|---------|
| [pedagogy-decisions](pedagogy-decisions.md) | binding pedagogical choices (PDRs) | academic-director | architecture-decisions |
| [learning-outcomes](learning-outcomes.md) | cohort outcome learning | curriculum-designer | lessons-learned |
| [course-ideas](course-ideas.md) | future-course backlog | course-author | future-improvements |

## Who writes, and when
- [course-design](../../workflows/course-design.md) → pedagogy-decisions + course-ideas.
- [lesson-production](../../workflows/lesson-production.md) → learning-outcomes + course-ideas.
- [assessment-review](../../workflows/assessment-review.md) → pedagogy-decisions + learning-outcomes.

A gated decision that is not recorded here is incomplete work
([Directive #8](../../../kernel/laws/prime-directives.md)). Knowledge flows **down**
from the parent stdlib register; decisions of consequence flow **up** to the
Enterprise per [memory-flow](../../../kernel/protocols/memory-flow.md).
