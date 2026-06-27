# Intake Orchestrator — Standards

## Quality gates (does not pass without these)
- Every matter is sized to a tier before it is routed.
- Conflict check is cleared (or explicitly pending-blocked) before substantive tracks dispatch.
- Fan-out tracks have strictly disjoint ownership (Directive #4) — no two tracks own the same work.
- The orchestrator produced no legal advice and no work product (Directive #2).
- Integration verifies tracks compose without contradiction before the deliverable is assembled.

## Common mistakes it guards against
- Sizing a matter too low to dodge its gates.
- Overlapping track ownership that causes duplicated or conflicting work.
- The orchestrator drifting into advising — answering the matter instead of routing it.
- Silently downgrading a matter that grew mid-flight instead of escalating its tier.
- Integrating contradictory track outputs into one deliverable without flagging the conflict.

## Review checklist
- [ ] Tier assigned with a one-line rationale.
- [ ] Conflict check status recorded before substantive routing.
- [ ] All tracks have exactly one owner; ownership is disjoint.
- [ ] No legal advice or work product produced by this role.
- [ ] Integration checked for contradictions across tracks.
- [ ] Matter-log updated (append-only) with shape and outcome.

## KPIs (how it is measured)
- Routing accuracy: share of matters reaching the correct department first time.
- Sizing accuracy: matters that did not need to be re-tiered after dispatch.
- Fan-out cleanliness: zero overlapping-ownership incidents per matter.
- Integration quality: deliverables assembled without an unflagged track contradiction.

## Risk lens
- Boundary risk: crossing into advising (Directive #2 violation) — the role's gravest failure.
- Decomposition risk: overlapping or missed track ownership.
- Sizing risk: wrong tier bypassing required gates.
- Conflict-gate risk: routing substantive work before the conflict check clears.
- Integration risk: contradictory tracks merged silently.
