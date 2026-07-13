# lesson-production
Status: stable
Type: workflow
Owner: course-author
Extends: documentation

# Workflow: lesson-production
Status: stable
**Purpose:** Produce and review a single lesson — author, edit, and media-finish one
lesson against its assigned learning outcome.
**Default Tier:** [T1](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** course-author
**Extends:** stdlib [documentation](../../templates/workflow.template.md)

## Trigger
An approved [course-design](course-design.md) hands a sequenced lesson to the
[03-content](../03-content/) department. The
[academy-orchestrator](../01-executive/academy-orchestrator/) sizes it as
[T1](../../kernel/laws/engagement-tiers.md): a bounded authoring task with a clear
owner and a light review, not a design decision.

## Participants
- [academy-orchestrator](../01-executive/academy-orchestrator/) — assigns the lesson and integrates; never authors (Directive [#2](../../kernel/laws/prime-directives.md)).
- [course-author](../03-content/course-author/) — owns the draft and Gate A.
- [content-editor](../03-content/content-editor/) — edits for clarity, accuracy, and outcome alignment.
- [media-producer](../03-content/media-producer/) — produces diagrams, video, and interactive media.
- [instructor](../04-delivery/instructor/) — deliverability check from the teaching front line.

## Inputs
The lesson's assigned learning outcome and its place in the course sequence, the
prerequisites a learner arrives with, the assessment the lesson must prepare for, and
the academy's content [standards](../../shared/quality-standards.md).

## Steps
```
assign ─> draft ─> [GATE A: drafts to outcome] ─> edit + media ─> [GATE B: editor sign-off + deliverable] ─> publish ─> record
```
1. **Assign** — academy-orchestrator — bind the lesson to its outcome and prerequisites.
2. **Draft** — course-author — write the lesson against the outcome, citing settled pedagogy rather than re-arguing it (Directive [#6](../../kernel/laws/prime-directives.md)). `[GATE A]`
3. **Edit** — content-editor — correct for accuracy, clarity, and outcome fit.
4. **Media** — media-producer — produce supporting media in parallel with the edit.
5. **Deliverability** — instructor — confirm the lesson teaches cleanly in a cohort. `[GATE B]`
6. **Publish** — course-author — finalize and publish the lesson.
7. **Record** — academy-orchestrator — append to the registers below.

## Review Gates
- **Gate A — drafts to outcome:** the draft does not advance until it demonstrably
  serves its assigned learning outcome and stays within the prerequisites a learner
  arrives with. Scope creep beyond the outcome is cut here.
- **Gate B — editor sign-off + deliverable:** the lesson does not publish until the
  [content-editor](../03-content/content-editor/) signs for accuracy and clarity and
  the [instructor](../04-delivery/instructor/) confirms it is deliverable in a cohort.

## Approval Process
The course-author signs Gate A. The content-editor signs Gate B per
[decision-authority](../../kernel/laws/decision-authority.md). At T1 no council and no
executive gate is required, but the
[academic-director](../01-executive/academic-director/) pedagogy veto remains
available if a lesson contradicts the approved course design.

## Outputs
A published lesson: text, supporting media, and a recorded trace to its learning
outcome and the assessment it prepares for.

## Completion Criteria
- [ ] Gate A passed: draft serves its outcome within prerequisites.
- [ ] Edit and media complete with no overlapping ownership.
- [ ] Gate B passed: editor sign-off and instructor deliverability recorded.
- [ ] Lesson published with its outcome trace.
- [ ] Memory registers below appended.

## Memory Updates
- [learning-outcomes](../memory/registers/learning-outcomes.md) — the lesson-to-outcome
  trace and any authoring lesson learned for the next lesson.
- [course-ideas](../memory/registers/course-ideas.md) — gaps or follow-on lessons the
  authoring surfaced, parked for prioritization.

## Failure / Rollback
Gate A fails → the draft returns to the author with the outcome restated; no editing
begins. Gate B fails → the lesson returns to the author or editor with recorded
objections and is reworked before publish. A pulled or superseded lesson is recorded
in learning-outcomes as a superseding entry — never erased (Directive [#8](../../kernel/laws/prime-directives.md)).
