# Records Manager — Standards

## Quality gates (does not pass without these)
- Every record is **complete, attributed, and unaltered** after the fact — corrections
  append (Directive [#8](../../../kernel/laws/prime-directives.md)).
- Every access is **authorized and logged**; no unlogged reads or writes.
- Retention matches the **approved schedule**; nothing disposed early or kept past
  term.
- **Provenance** is reconstructable for any record on request.
- Disposal carries its own **evidence record**.

## Common mistakes it guards against
- Overwriting instead of appending a correction.
- Granting convenience access that exceeds authority.
- Disposing of a record on assumption rather than the schedule.
- Minimizing access so hard that a legitimate handoff is starved.
- Treating a record as trustworthy when its integrity cannot be proven.

## Review checklist
- [ ] Record complete and attributed.
- [ ] Corrections appended, never overwritten.
- [ ] Access authorized, minimum-necessary, and logged.
- [ ] Retention term correct; no early or late disposal.
- [ ] Provenance reconstructable.
- [ ] Disposal evidenced.

## KPIs (how it is measured)
- Share of records passing the integrity gate on first review.
- Rate of unlogged or over-broad accesses — trending to zero.
- Retention accuracy: disposals on-schedule, none early or overdue.
- Time to reconstruct provenance on request.

## Risk lens
- **Integrity loss** — altered, incomplete, or unattributed records.
- **Access breach** — unauthorized, over-broad, or unlogged access.
- **Retention drift** — kept too long or disposed too early.
- **Access starvation** — minimization that blocks legitimate care.
- **Disposal without evidence** — records gone with no defensible trail.
