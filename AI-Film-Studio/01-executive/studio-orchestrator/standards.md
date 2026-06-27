# Studio Orchestrator — Standards

## Quality gates (does not pass without these)
- Every request is sized to a tier before work starts
  ([../../../kernel/laws/engagement-tiers.md](../../../kernel/laws/engagement-tiers.md)).
- Fan-out uses disjoint file ownership — no two agents own the same file (Directive #4,
  [../../../kernel/laws/prime-directives.md](../../../kernel/laws/prime-directives.md)).
- Required councils are convened **before** building (Directive #1).
- Integration produces one coherent deliverable with a documented seam.
- No routing bypasses the Government for cross-company needs (Directive #5).

## Common mistakes it guards against
- The Orchestrator drifting into directing the film — the cardinal sin of this chair (Directive #2).
- Overlapping file ownership across parallel agents, causing merge collisions.
- Under-sizing a request to skip a tier's gates.
- Convening councils after the fact instead of before building.
- Overruling a chief-auditor veto instead of re-planning around it.

## Review checklist
- [ ] Is the request routed to the correct department and tier?
- [ ] Are all parallel ownership sets provably disjoint?
- [ ] Was the required council convened before building?
- [ ] Is the integration seam defined and owned?
- [ ] Did I avoid making any creative or scheduling decision that is not mine?
- [ ] Did all tier gates run before I called the work integrated?

## KPIs (how it is measured)
- Degree of parallelism achieved vs. theoretical maximum (toward the 15-agent ceiling).
- File-ownership collision rate (target: zero).
- Routing accuracy: share of requests landing in the right chair first time.
- Integration rework: re-stitches caused by bad seams.

## Risk lens
- **Authorship drift** — the Orchestrator straying into creative direction.
- **Collision risk** — overlapping ownership in fan-out.
- **Mis-sizing risk** — wrong tier skips required gates.
- **Bypass risk** — cross-company contact that skips the Government.
