# schematic-design
Status: stable
Type: workflow
Owner: lead-architect
Extends: feature

# Workflow: schematic-design
Status: stable
**Purpose:** Develop a schematic design from a brief — turn a validated brief and
site into an agreed schematic proposition.
**Default Tier:** [T2](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** lead-architect
**Extends:** stdlib [feature](../../templates/workflow.template.md)

## Trigger
A signed brief and site arrive for a project the [principal](../01-executive/principal/)
has agreed to take. The [studio-orchestrator](../01-executive/studio-orchestrator/)
sizes it as [T2](../../kernel/laws/engagement-tiers.md): a real design choice with
parallelizable work, but below the construction-commitment weight of
[design-development](design-development.md) (T3).

## Participants
- [studio-orchestrator](../01-executive/studio-orchestrator/) — sizes, decomposes, routes; never designs (Directive [#2](../../kernel/laws/prime-directives.md)).
- [lead-architect](../02-design/lead-architect/) — owns the proposition and Gate A.
- [concept-architect](../02-design/concept-architect/) — drives the parti and massing.
- [sustainability-designer](../02-design/sustainability-designer/) — climate and energy fit.
- [structural-engineer](../03-technical/structural-engineer/) — early buildability sanity check.
- [design-director](../01-executive/design-director/) — design veto at Gate B.

## Inputs
A signed brief with a north-star justification (Directive [#1](../../kernel/laws/prime-directives.md)),
the site analysis, the program and budget envelope, and the applicable code basis.

## Steps
```
intake ─> [GATE A: brief & site validated] ─> fan-out(parti | climate | structure) ─> integrate ─> [GATE B: scheme coheres + design-director sign-off] ─> record
```
1. **Intake** — studio-orchestrator — size as T2, frame the design problem and constraints.
2. **Validate** — lead-architect — confirm brief, site, and budget are coherent. `[GATE A]`
3. **Decompose** — studio-orchestrator — split into disjoint tracks (parti, sustainability, structural-fit).
4. **Develop** — concept/sustainability/structural agents — produce options in parallel, no shared sheet.
5. **Integrate** — lead-architect — fuse tracks into one schematic scheme; resolve conflicts.
6. **Review** — [design-review-council](../councils/design-review-council/) — debate the scheme; design-director signs. `[GATE B]`
7. **Record** — studio-orchestrator — append to the registers below.

## Review Gates
- **Gate A — brief & site validated:** no track launches until brief, program, and
  budget envelope are confirmed coherent and the code basis is named.
- **Gate B — scheme coheres + design-director sign-off:** the scheme does not
  advance to design-development without [design-review-council](../councils/design-review-council/)
  approval and the design-director's veto cleared.

## Approval Process
The lead-architect signs Gate A. The [design-director](../01-executive/design-director/)
holds the Gate B design veto per
[decision-authority](../../kernel/laws/decision-authority.md). The principal is
informed but does not gate at T2.

## Outputs
An approved schematic design set: parti, massing, plans/sections at schematic
fidelity, a sustainability strategy note, and an early structural-fit memo.

## Completion Criteria
- [ ] Gate A passed: brief, program, and budget validated.
- [ ] All tracks integrated with no overlapping ownership.
- [ ] Gate B passed: council approval and design-director sign-off recorded.
- [ ] Memory registers below appended.

## Memory Updates
- [design-decisions](../memory/registers/design-decisions.md) — the schematic
  choice, its context, and the alternatives rejected.
- [design-lessons](../memory/registers/design-lessons.md) — anything the schematic
  phase taught for the next project.

## Failure / Rollback
Gate A fails → return the brief for clarification; do not fan out. Gate B fails →
the scheme returns to the owning track with the council's recorded objections; it
is reworked and re-reviewed. A design-veto stop is logged in design-decisions as a
superseding entry — never erased (Directive [#8](../../kernel/laws/prime-directives.md)).
