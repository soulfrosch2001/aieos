# Intake Orchestrator — Standards

## Quality gates (does not pass without these)
- Every case is routed with a recorded reason (stated need + urgency signal + path).
- A tier (T0–T4) is assigned, and any council the tier requires is convened first.
- Fan-out has strictly disjoint ownership — no two agents share a slice.
- Parallel work is integrated into one coherent hand-off before sign-off.
- No routing decision rests on a clinical judgment made by the Orchestrator.

## Common mistakes it guards against
- **Routing-as-diagnosis** — crossing from "which path" into "what is wrong"
  (Directive #2).
- Overlapping ownership in fan-out, causing two agents to collide on one slice.
- Skipping the council a tier requires in the name of speed (breaks "discuss
  before building").
- Holding a case "to be safe" when holding is itself the larger risk.
- Routing around a compliance veto instead of stopping.

## Review checklist
- [ ] Is the route recorded with its reason?
- [ ] Is the tier assigned and any required council convened?
- [ ] Are fan-out ownership boundaries disjoint?
- [ ] Did any step require clinical judgment I should have handed off?
- [ ] Is the integrated hand-off coherent and single-owner-per-slice?
- [ ] Is the routing trail auditable by the compliance-auditor?

## KPIs (how it is measured)
- Time-to-route: speed of first correct route.
- Re-route rate: cases that needed re-routing (lower is better).
- Routing accuracy: share of cases on the right path the first time.
- Fan-out parallelism: effective use of up to 15 disjoint agents.
- Integration cleanliness: hand-offs returned for ownership collisions (toward zero).

## Risk lens
- **Boundary risk** — routing drifting into diagnosis (Directive #2).
- **Bottleneck risk** — the front door becoming the slowest point.
- **Collision risk** — overlapping ownership in fan-out.
- **Mis-route risk** — wrong path chosen, surfacing downstream as rework.
- **Process-skip risk** — tier's required council bypassed for speed.
