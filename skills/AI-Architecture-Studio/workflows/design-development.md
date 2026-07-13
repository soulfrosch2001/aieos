# design-development
Status: stable
Type: workflow
Owner: design-director
Extends: planning

# Workflow: design-development
Status: stable
**Purpose:** Develop the design to construction-ready detail — take an approved
schematic to a fully coordinated, buildable design set.
**Default Tier:** [T3](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** design-director
**Extends:** stdlib [planning](../../templates/workflow.template.md)

## Trigger
A schematic design has cleared [schematic-design](schematic-design.md) Gate B. The
[studio-orchestrator](../01-executive/studio-orchestrator/) sizes the build-out as
[T3](../../kernel/laws/engagement-tiers.md): it commits the studio to detail,
coordination, and cost, so it carries a council and executive sign-off.

## Participants
- [studio-orchestrator](../01-executive/studio-orchestrator/) — routes and integrates; never designs (Directive [#2](../../kernel/laws/prime-directives.md)).
- [design-director](../01-executive/design-director/) — owns the plan and the design veto.
- [lead-architect](../02-design/lead-architect/) — owns design coherence across the set.
- [structural-engineer](../03-technical/structural-engineer/) — structural design and sizing.
- [building-systems-engineer](../03-technical/building-systems-engineer/) — MEP and performance systems.
- [bim-specialist](../03-technical/bim-specialist/) — the coordinated model and clash resolution.
- [project-director](../01-executive/project-director/) — schedule, budget, and sequencing sign-off.

## Inputs
The approved schematic set, the locked program and budget, the design-decisions
record from schematic phase, and the governing code basis.

## Steps
```
plan ─> [GATE A: scope, schedule & budget agreed] ─> fan-out(architecture | structure | systems | BIM) ─> coordinate ─> [GATE B: clash-free + design-director + project-director sign-off] ─> record
```
1. **Plan** — design-director — set scope, milestones, and the coordination model.
2. **Commit** — project-director — confirm schedule and budget feasibility. `[GATE A]`
3. **Decompose** — studio-orchestrator — split into disjoint discipline tracks.
4. **Detail** — discipline agents — develop architecture, structure, systems in parallel.
5. **Coordinate** — bim-specialist — federate models, run clash detection, resolve seams.
6. **Review** — [design-review-council](../councils/design-review-council/) — verify coherence; both directors sign. `[GATE B]`
7. **Record** — studio-orchestrator — append to the registers below.

## Review Gates
- **Gate A — scope, schedule & budget agreed:** no discipline detailing begins
  until the project-director confirms the T3 commitment is feasible.
- **Gate B — clash-free + dual sign-off:** the set does not proceed to
  [permit-review](permit-review.md) until the federated model is clash-free and
  both the design-director (coherence veto) and project-director (delivery) sign.

## Approval Process
Project-director signs Gate A (delivery feasibility). At Gate B the
[design-director](../01-executive/design-director/) holds the design veto and the
[project-director](../01-executive/project-director/) confirms delivery, per
[decision-authority](../../kernel/laws/decision-authority.md). T3 escalations route
through the council before either director.

## Outputs
A coordinated, construction-ready design set: detailed drawings, structural and
systems design, a clash-resolved federated BIM model, and an updated cost plan.

## Completion Criteria
- [ ] Gate A passed: scope, schedule, and budget agreed.
- [ ] All discipline tracks integrated; federated model clash-free.
- [ ] Gate B passed: council approval plus design-director and project-director sign-off.
- [ ] Memory registers below appended.

## Memory Updates
- [design-decisions](../memory/registers/design-decisions.md) — each binding
  detail decision and the alternatives weighed.
- [design-lessons](../memory/registers/design-lessons.md) — coordination and
  detailing lessons for future projects.

## Failure / Rollback
Gate A fails → renegotiate scope or budget before detailing; do not fan out. Gate B
fails → unresolved clashes or coherence breaks return to the owning discipline
track and re-coordinate. A reversal of an earlier decision is recorded as a
superseding entry in design-decisions, never an edit (Directive [#8](../../kernel/laws/prime-directives.md)).
