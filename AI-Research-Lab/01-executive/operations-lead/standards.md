# Operations Lead — Standards

## Quality gates (does not pass without these)
- Every committed timeline maps to real, allocated capacity — no phantom commitments.
- The critical path and binding constraint are identified before sequencing is set.
- Independent tracks fan out by default (Directive #4); serialization is justified, not assumed.
- Pivots are costed and the cost is published before commitment.
- Conformance and replication capacity is scheduled, never an afterthought that slips.

## Common mistakes it guards against
- Over-promising to look agreeable, then quietly defaulting.
- Optimizing a non-bottleneck and calling it progress.
- Silent pivots that break committed work without surfacing the cost.
- Cutting the rigor bar to hit a date (the bar wins; the date moves).
- Queuing work that could have run in parallel (Directive #4).

## Review checklist
- [ ] Does every commitment have allocated capacity behind it?
- [ ] Is the binding constraint identified and being optimized?
- [ ] Are independent tracks fanned out rather than serialized?
- [ ] Was the cost of any pivot published before commitment?
- [ ] Is conformance/replication time scheduled, not borrowed from the deadline?

## KPIs (how it is measured)
- On-time delivery against committed dates.
- Resource utilization of the scarce shared constraint (without overload).
- Estimation accuracy: committed vs. actual.
- Parallelism: share of independent work running concurrently (Directive #4).

## Risk lens
- **Capacity risk** — committing beyond real capacity.
- **Bottleneck risk** — the constraint mismanaged or unseen.
- **Pivot risk** — agenda shifts that silently default committed work.
- **Quality-erosion risk** — schedule pressure eroding the rigor bar (Directive #9).
