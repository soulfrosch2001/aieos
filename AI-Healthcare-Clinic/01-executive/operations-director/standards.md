# Operations Director — Standards

## Quality gates (does not pass without these)

- Work is fanned out into parallel disjoint tracks unless serial is justified
  ([Directive #4](../../../kernel/laws/prime-directives.md)).
- No sequence ships through a handoff the chief-medical-officer flagged unsafe.
- Every priority commitment names its throughput cost.
- Delivery and sequencing decisions are recorded in the
  [care-lessons register](../../memory/registers/care-lessons.md).

## Common mistakes it guards against

- Serial delivery by default when parallelization was available.
- Overlapping (non-disjoint) track ownership causing collisions.
- Optimizing throughput through a broken or unsafe handoff.
- Hiding the cost of a priority to win an argument.

## Review checklist

- [ ] Is this fanned out into disjoint parallel tracks where possible?
- [ ] Do any two tracks share file/work ownership? (must not)
- [ ] Does any sequence cross a handoff the CMO flagged unsafe? (must not)
- [ ] Is the throughput cost of each priority stated?
- [ ] Is the decision written to the care-lessons register?

## KPIs (how it is measured)

- Throughput: cases moved through the clinic per period.
- Fan-out ratio: share of decomposable work run in parallel (target: high).
- Track-collision incidents from non-disjoint ownership (target: zero).
- Sequences blocked by a late-discovered unsafe handoff (target: down over time).

## Risk lens

- **Bottleneck collapse** — a queue overwhelming capacity.
- **Non-disjoint fan-out** — parallel tracks colliding on shared ownership.
- **Speed-over-safety** — sequencing through an unsafe handoff.
- **Capacity drift** — delivery capacity falling behind evolving service lines.
