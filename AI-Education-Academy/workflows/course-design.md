# course-design
Status: stable
Type: workflow
Owner: curriculum-designer
Extends: feature

# Workflow: course-design
Status: stable
**Purpose:** Design a course from outcomes to lessons — turn a stated learning need
into an agreed course architecture with sequenced lessons and aligned assessments.
**Default Tier:** [T2](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** curriculum-designer
**Extends:** stdlib [feature](../../templates/workflow.template.md)

## Trigger
The [dean](../01-executive/dean/) approves a new program, or the
[course-ideas register](../memory/registers/course-ideas.md) surfaces a course the
academy commits to building. The [academy-orchestrator](../01-executive/academy-orchestrator/)
sizes it as [T2](../../kernel/laws/engagement-tiers.md): a real design choice with
parallelizable tracks, below the program-launch weight of a full curriculum
overhaul.

## Participants
- [academy-orchestrator](../01-executive/academy-orchestrator/) — sizes, decomposes, fans out, integrates; never authors (Directive [#2](../../kernel/laws/prime-directives.md)).
- [curriculum-designer](../02-curriculum/curriculum-designer/) — owns course architecture and Gate A.
- [instructional-designer](../02-curriculum/instructional-designer/) — sequences lessons and learning activities.
- [assessment-designer](../02-curriculum/assessment-designer/) — defines outcome-aligned assessments.
- [academic-director](../01-executive/academic-director/) — pedagogy veto at Gate B.

## Inputs
A stated learner need with a north-star justification (Directive [#1](../../kernel/laws/prime-directives.md)),
the target audience and prerequisites, the program slot it fills, and the measurable
learning outcomes the course must produce.

## Steps
```
intake ─> [GATE A: outcomes validated] ─> fan-out(architecture | sequencing | assessment) ─> integrate ─> [GATE B: course coheres + academic-director sign-off] ─> record
```
1. **Intake** — academy-orchestrator — size as T2, frame the learner need and constraints.
2. **Validate outcomes** — curriculum-designer — confirm outcomes are measurable, prerequisite-clean, and audience-fit. `[GATE A]`
3. **Decompose** — academy-orchestrator — split into disjoint tracks (architecture, lesson sequencing, assessment design).
4. **Develop** — curriculum / instructional / assessment designers — produce the module map, lesson sequence, and assessment blueprint in parallel, no shared draft.
5. **Integrate** — curriculum-designer — fuse tracks into one coherent course; resolve overlaps and orphaned outcomes.
6. **Review** — [curriculum-council](../councils/curriculum-council/) — debate coherence; academic-director signs. `[GATE B]`
7. **Record** — academy-orchestrator — append to the registers below.

## Review Gates
- **Gate A — outcomes validated:** no track launches until every learning outcome is
  measurable, mapped to the audience and prerequisites, and free of duplication. An
  outcome that cannot be assessed is rejected here.
- **Gate B — course coheres + academic-director sign-off:** the course does not
  advance to [lesson-production](lesson-production.md) without
  [curriculum-council](../councils/curriculum-council/) approval and the
  academic-director's [pedagogy veto](../01-executive/academic-director/) cleared.
  Every lesson must trace to an outcome and every outcome to an assessment.

## Approval Process
The curriculum-designer signs Gate A. The
[academic-director](../01-executive/academic-director/) holds the Gate B pedagogy
veto per [decision-authority](../../kernel/laws/decision-authority.md). The dean is
informed but does not gate at T2; the operations-director is consulted on cohort
feasibility but does not gate course design.

## Outputs
An approved course design: a module map, a sequenced lesson list each traced to an
outcome, an assessment blueprint, and a prerequisites note — ready to hand to
[lesson-production](lesson-production.md).

## Completion Criteria
- [ ] Gate A passed: outcomes validated as measurable and audience-fit.
- [ ] All tracks integrated with no overlapping ownership and no orphaned outcome.
- [ ] Every lesson traces to an outcome; every outcome traces to an assessment.
- [ ] Gate B passed: council approval and academic-director sign-off recorded.
- [ ] Memory registers below appended.

## Memory Updates
- [pedagogy-decisions](../memory/registers/pedagogy-decisions.md) — the course
  architecture choice, its context, and the alternatives rejected.
- [course-ideas](../memory/registers/course-ideas.md) — adjacent course ideas this
  design surfaced, parked for later prioritization.

## Failure / Rollback
Gate A fails → return the outcomes for sharpening; do not fan out. Gate B fails →
the course returns to the owning track with the council's recorded objections; it is
reworked and re-reviewed. A pedagogy-veto stop is logged in pedagogy-decisions as a
superseding entry — never erased (Directive [#8](../../kernel/laws/prime-directives.md)).
