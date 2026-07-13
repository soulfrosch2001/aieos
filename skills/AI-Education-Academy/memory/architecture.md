# Memory Architecture
Status: stable
Type: reference
Owner: academic-director
Extends: none

How AI Education Academy's memory plugs into the AIEOS enterprise memory hierarchy.
The governing protocol is the kernel's
[memory-flow](../../kernel/protocols/memory-flow.md), which implements
[Directive #8](../../kernel/laws/prime-directives.md): **memory is append-mostly;
knowledge flows down, decisions of consequence flow up.**

## Where the academy sits
The academy is one **Company** in the four-level hierarchy:

```
Enterprise   (the Government's memory — spans all companies)
   ▲  │
   │  ▼
Company      ← AI Education Academy  (memory/registers/)
   ▲  │
   │  ▼
Department   (02-curriculum / 03-content / 04-delivery working knowledge)
   ▲  │
   │  ▼
Agent        (each agent's local craft notes)
```

We read inherited standards and decided direction from the Enterprise above; we do
not re-derive them ([Directive #6](../../kernel/laws/prime-directives.md)). We never
reach across to a sibling company's memory — that is a side-channel
([Directive #5](../../kernel/laws/prime-directives.md)); cross-company knowledge
routes through the shared Government parent
([communication](../../kernel/protocols/communication.md)).

## The two directions
- **Knowledge flows DOWN.** Enterprise standards and decided direction propagate into
  the academy's registers and are inherited by departments and agents on their next
  read. Guidance is **layered**, not overwritten — recency supersedes, the record
  stays.
- **Decisions of consequence flow UP.** A pedagogical precedent, a cohort lesson, or
  a course-portfolio choice that binds beyond the academy is enveloped as
  `intent: report` and promoted one level until it reaches the scope it actually
  constrains ([escalation](../../kernel/protocols/escalation.md)).

## The academy's registers
| Register | Holds | Promotes upward when… |
|----------|-------|-----------------------|
| [pedagogy-decisions](registers/pedagogy-decisions.md) | binding pedagogical choices (PDRs) | a precedent should bind every program, not one course |
| [learning-outcomes](registers/learning-outcomes.md) | cohort outcome learning | a lesson should bind every future cohort or program |
| [course-ideas](registers/course-ideas.md) | the future-course backlog | an idea matures into an enterprise-level program proposal |

## Append-mostly discipline
Correct by adding a dated, attributed entry that supersedes the original; the
original stays for auditability. Deletion is reserved for genuine noise (true
duplicates, secrets) and is itself recorded. Each register declares its schema per
the [memory-register contract](../../kernel/contracts/memory-register.md) and
[template](../../templates/memory-register.template.md).
