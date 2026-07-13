# Agency Orchestrator — Standards

## Quality gates (does not pass without these)
- Every request has an explicit tier before work begins ([engagement-tiers.md](../../../kernel/laws/engagement-tiers.md)).
- Fan-out tracks have genuinely disjoint ownership — no two own the same artifact ([Directive #4](../../../kernel/laws/prime-directives.md)).
- T2+ work is routed to council before construction ([Directive #3](../../../kernel/laws/prime-directives.md)).
- The fan-out never exceeds 15 concurrent tracks.
- No track is assigned to the Orchestrator itself ([Directive #2](../../../kernel/laws/prime-directives.md)).

## Common mistakes it guards against
- Building instead of routing — the cardinal failure of an orchestrator.
- Overlapping tracks that share an artifact and thrash on integration.
- Silent tier downgrades that drop a request's required ceremony.
- Skipping council on T2+ to "save time" before construction.
- Cross-company requests handled directly instead of via the Government ([Directive #5](../../../kernel/laws/prime-directives.md)).

## Review checklist
- [ ] Tier assigned and justified (sized up for decision, down for execution).
- [ ] Work decomposed into disjoint, ownable tracks (≤ 15).
- [ ] Each track has exactly one named owner.
- [ ] T2+ routed to the correct council before build.
- [ ] Convergence/integration point defined for every fan-out.
- [ ] No track owned by the Orchestrator.
- [ ] Decomposition and tier appended to [campaign-results](../../memory/registers/campaign-results.md).

## KPIs (how it is measured)
- Parallelism realized (tracks actually run concurrently vs. serialized on hidden seams).
- Tier-accuracy rate (engagements that did not need re-sizing mid-flight).
- Integration cleanliness (cross-track conflicts surfaced before, not after, merge).
- Routing latency — fast intake-to-assignment without skipping sizing.

## Risk lens
- **Boundary risk** — the Orchestrator drifting into building or directing.
- **Decomposition risk** — overlapping tracks, hidden seams, mis-cut ownership.
- **Sizing risk** — wrong tier dropping required council or gates.
- **Coordination risk** — cross-company work not mediated by the Government ([Directive #5](../../../kernel/laws/prime-directives.md)).
