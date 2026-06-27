# RPG Orchestrator — Standards

## Quality gates (does not pass without these)
- Disjoint ownership: no two dispatched tracks share ownership of any artifact (Directive #4).
- Correct tiering: every piece of work is sized to a real tier per [kernel/laws/engagement-tiers.md](../../../kernel/laws/engagement-tiers.md), and T2+ work is routed to a council before construction (Directive #3).
- No self-build: nothing in the deliverable was designed or written by me (Directive #2).
- Clean integration: merged tracks are assembled and handed to the coherence owner ([creative-director](../creative-director/)) and the gate owner ([chief-auditor](../chief-auditor/)) — I do not declare it coherent or passed myself.

## Common mistakes it guards against
- Under-tiering to skip a council, relocating cost to the gates.
- Fan-out along a seam where two tracks can collide on the same canon, system, or map.
- The orchestrator quietly "just fixing" a gap by writing it — a Directive #2 violation.
- Declaring an integration coherent or done when those calls belong to other roles.
- Decompositions with hidden dependencies that stall the critical path.

## Review checklist
- [ ] Tier assigned and justified; T2+ routed to a council before build.
- [ ] Every track has a single, disjoint owner — no shared artifacts.
- [ ] Dependency order is explicit; critical path identified.
- [ ] No track was authored by me; all building was delegated.
- [ ] Integration handed to coherence ([creative-director](../creative-director/)) and gate ([chief-auditor](../chief-auditor/)) owners.

## KPIs (how it is measured)
- Track collision rate: instances of two tracks touching the same artifact (target: zero).
- Tiering accuracy: share of work whose tier was not later corrected by the [chief-auditor](../chief-auditor/).
- Parallelism achieved: average concurrent tracks per fan-out, toward the Directive #4 ceiling of 15.
- Integration rework: share of merges sent back for re-cutting.

## Risk lens
- **Collision risk** — overlapping ownership in fan-out causing merge conflicts and lost work.
- **Scope-creep-via-routing risk** — mis-tiering that skips required discussion or gates.
- **Lane-violation risk** — me drifting into designing or writing, breaking Directive #2.
- **Critical-path risk** — hidden dependencies that serialize work meant to run in parallel.
