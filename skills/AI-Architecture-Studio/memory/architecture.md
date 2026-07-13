# Memory Architecture
Status: stable
Type: reference
Owner: design-director
Extends: none

How AI Architecture Studio's memory plugs into the AIEOS enterprise memory
hierarchy. The governing protocol is the kernel's
[memory-flow](../../kernel/protocols/memory-flow.md), which implements
[Directive #8](../../kernel/laws/prime-directives.md): **memory is append-mostly;
knowledge flows down, decisions of consequence flow up.**

## Where the studio sits
The studio is one **Company** in the four-level hierarchy:

```
Enterprise   (the Government's memory — spans all companies)
   ▲  │
   │  ▼
Company      ← AI Architecture Studio  (memory/registers/)
   ▲  │
   │  ▼
Department   (02-design / 03-technical / 04-delivery working knowledge)
   ▲  │
   │  ▼
Agent        (each agent's local craft notes)
```

We read inherited standards and direction from the Enterprise above; we do not
re-derive them ([Directive #6](../../kernel/laws/prime-directives.md)). We never
reach across to a sibling company's memory — that is a side-channel
([Directive #5](../../kernel/laws/prime-directives.md)); cross-company knowledge
routes through the shared Government parent.

## The two directions
- **Knowledge flows DOWN.** Enterprise standards and decided direction propagate
  into the studio's registers and are inherited by departments and agents on their
  next read. Guidance is **layered**, not overwritten — recency supersedes, the
  record stays.
- **Decisions of consequence flow UP.** A design decision, code precedent, or
  lesson that binds beyond the studio is enveloped as `intent: report` and promoted
  one level until it reaches the scope it actually constrains.

## The studio's registers
| Register | Holds | Promotes upward when… |
|----------|-------|-----------------------|
| [design-decisions](registers/design-decisions.md) | binding design choices (DDRs) | a precedent binds beyond one project |
| [code-compliance-log](registers/code-compliance-log.md) | open/closed code findings | a code interpretation sets firm-wide policy |
| [design-lessons](registers/design-lessons.md) | post-project learning | a lesson should bind every future project |

## Append-mostly discipline
Correct by adding a dated, attributed entry that supersedes the original; the
original stays for auditability. Deletion is reserved for genuine noise (true
duplicates, secrets) and is itself recorded. Each register declares its schema per
the [memory-register contract](../../kernel/contracts/memory-register.md) and
[template](../../templates/memory-register.template.md).
