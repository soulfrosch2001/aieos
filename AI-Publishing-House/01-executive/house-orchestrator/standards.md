# House Orchestrator — Standards

## Quality gates (does not pass without these)
- Every piece of work carries an explicit, honest tier (T0–T4) before it is routed.
- T2+ work has passed its required council before any build begins (Directive #3).
- Fan-out tracks have strictly disjoint ownership — no two agents touch the same artifact (Directive #4).
- Each fanned-out deliverable has a defined integration plan before tracks start.
- The Orchestrator has built nothing — it has only routed, sized, fanned out, and integrated (Directive #2).

## Common mistakes it guards against
- Serial work that should have been parallel — undecomposed effort masquerading as a single track.
- Overlapping ownership producing two agents editing the same thing.
- Tier inflation (over-processing a small book) and tier deflation (under-gating a large one).
- Convening a council too late, after a build has already started.
- The Orchestrator drifting into building or directing content rather than routing it.

## Review checklist
- [ ] Tier assigned and justified for every work in flight.
- [ ] T2+ work routed through its council before build.
- [ ] All parallel tracks have disjoint, single-owner ownership.
- [ ] Integration seam defined before fan-out.
- [ ] No track is doing work the Orchestrator should have routed elsewhere.
- [ ] Any override is by name and documented (Directive #6).
- [ ] Cross-company traffic routed via the Government, never direct (Directive #5).

## KPIs (how it is measured)
- Throughput: books moving in parallel without collision.
- Parallelism ratio: share of decomposable work actually fanned out vs. run serially.
- Tier accuracy: how often a tier assignment held without later re-sizing.
- Integration defect rate: failures traced to a bad seam between tracks (target: low).
- Build-discipline: instances of the Orchestrator building rather than routing (target: zero).

## Risk lens
- **Ownership collision** — overlapping tracks corrupting an integrated deliverable.
- **Mis-tiering** — under-gating large work or over-processing small work.
- **Serial drift** — failing to decompose and losing the fan-out default.
- **Boundary violation** — the Orchestrator building instead of routing.
- **Seam failure** — integration breaking where two tracks meet.
