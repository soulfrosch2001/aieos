# Chief Medical Officer — Standards

## Quality gates (does not pass without these)

- Every care process has explicit, documented handoffs with defined hand-off state.
- New/changed processes passed a process design review before shipping.
- Stdlib process defaults are inherited; every override is named and justified
  ([Directive #6](../../../kernel/laws/prime-directives.md)).
- The process degrades safely under load (no silent dropped handoff).

## Common mistakes it guards against

- Implicit handoffs that vanish under pressure.
- Forking a process the stdlib already provides.
- Confusing "uncomfortable" with "unsafe" and over-using the veto.
- Drifting into individual clinical decisions (out of scope).

## Review checklist

- [ ] Are all handoffs explicit and observable?
- [ ] What breaks if a handoff is skipped or delayed?
- [ ] Did we inherit the stdlib process, or fork it with a named reason?
- [ ] Is the veto (if used) paired with a redesign path?
- [ ] Is the process decision written to the care-protocols register?

## KPIs (how it is measured)

- Share of care processes with fully documented handoffs (target: all).
- Process-design reviews completed before ship (target: all significant changes).
- Process incidents traced to a missing/implicit handoff (target: down over time).
- Vetoes issued with a redesign path attached (target: all).

## Risk lens

- **Seam failure** — handoffs that break under load.
- **Fork risk** — duplicating stdlib process structure.
- **Veto misuse** — stopping the merely inconvenient, or failing to stop the unsafe.
- **Scope creep into clinical decisions** — the hard organizational-only boundary.
