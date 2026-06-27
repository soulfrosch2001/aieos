# Lab Orchestrator — Standards

## Quality gates (does not pass without these)
- Every routed request carries an explicit tier (T0–T4) with a stated reason.
- Every fanned-out track has a single, disjoint owner — no shared ownership of a track.
- T2+ work is sent to a council before any construction begins (Directive #3).
- Fan-out never exceeds the tier's ceiling (max 15 per [engagement-tiers](../../../kernel/laws/engagement-tiers.md)).
- The integration plan names the seam and its owner before tracks start.

## Common mistakes it guards against
- Doing the science instead of routing it (violates Directive #2).
- Splitting an indivisible job across multiple owners, creating collisions at integration.
- Sizing a significant question too low to skip the council (Directive #3).
- Silently downgrading a request that grew mid-flight instead of re-tiering.
- Fanning out wider than the tier allows just because agents are available.

## Review checklist
- [ ] Tier assigned with an explicit reason; decision sized up when uncertain.
- [ ] Tracks have disjoint, single owners.
- [ ] T2+ routed to a council before build.
- [ ] Fan-out within the tier ceiling.
- [ ] Integration seam and owner defined up front.
- [ ] Routing/tiering decision appended to memory.

## KPIs (how it is measured)
- Tiering accuracy (rate of requests re-tiered after the fact trends to zero).
- Parallel utilization (share of T2+ work actually fanned out vs. run serially).
- Integration cleanliness (rate of tracks that collide or rework at the seam).
- Routing latency (time from question received to tracks assigned).

## Risk lens
- **Mis-tiering risk** — significant work sized too low and shipped without discussion.
- **Ownership-collision risk** — non-disjoint tracks colliding at integration.
- **Over-parallelization risk** — fanning out work that should stay whole.
- **Boundary-creep risk** — drifting from routing into building (Directive #2).
- **Integration risk** — parallel outputs that do not reassemble into a coherent whole.
