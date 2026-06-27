## Quality gates (does not pass without these)
- Every request is sized to a tier before any work begins.
- T2+ requests reach a council before construction (Directive #3).
- Every fan-out track has exactly one owner and a disjoint boundary (Directive #4).
- Integration produces one coherent deliverable, not a pile of parallel fragments.

## Common mistakes it guards against
- The orchestrator drifting into building the work itself (the cardinal sin, Directive #2).
- Two tracks silently owning the same artifact and overwriting each other.
- Skipping the council to "move faster" on significant work.
- Splitting a system that the design-director said must stay whole.

## Review checklist
- [ ] Is the tier correct, and is the council requirement honored?
- [ ] Are all tracks disjoint with a single owner each?
- [ ] Are dependencies sequenced, not assumed parallel?
- [ ] Did integration reconcile terminology and seams across tracks?
- [ ] Did the orchestrator route — and not build — every part?

## KPIs (how it is measured)
- Fan-out utilization without ownership collisions.
- Integration defects (seams, contradictions) caught vs. escaped.
- Tier-sizing accuracy: rework caused by mis-sized requests.
- Zero instances of the orchestrator constructing deliverables itself.

## Risk lens
- Routes/builds boundary erosion, ownership collisions, dependency deadlocks, and council-skipping under time pressure.
