# assessment-review
Status: stable
Type: workflow
Owner: assessment-designer
Extends: audit

# Workflow: assessment-review
Status: stable
**Purpose:** Review assessments for validity and outcome alignment — audit that each
assessment actually measures the outcome it claims, fairly and reliably.
**Default Tier:** [T2](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** assessment-designer
**Extends:** stdlib [audit](../../templates/workflow.template.md)

## Trigger
A course's assessments are drafted (from [course-design](course-design.md)) or an
existing assessment is challenged by cohort outcome data in the
[learning-outcomes register](../memory/registers/learning-outcomes.md). The
[academy-orchestrator](../01-executive/academy-orchestrator/) sizes it as
[T2](../../kernel/laws/engagement-tiers.md): a real quality judgment with a standing
veto, audited rather than authored.

## Participants
- [academy-orchestrator](../01-executive/academy-orchestrator/) — routes the audit and integrates; never authors items (Directive [#2](../../kernel/laws/prime-directives.md)).
- [assessment-designer](../02-curriculum/assessment-designer/) — owns the review and Gate A.
- [curriculum-designer](../02-curriculum/curriculum-designer/) — confirms each item maps to a real course outcome.
- [instructor](../04-delivery/instructor/) — supplies cohort evidence of how items perform in practice.
- [chief-auditor](../01-executive/chief-auditor/) — standards veto at Gate B; never teaches, never directs.

## Inputs
The assessment items under review, the learning outcomes they claim to measure, the
academy's [quality standards](../../shared/quality-standards.md), and any cohort
performance evidence (pass rates, item discrimination, learner appeals).

## Steps
```
intake ─> [GATE A: every item maps to an outcome] ─> audit(validity | reliability | fairness) ─> integrate ─> [GATE B: chief-auditor standards sign-off] ─> record
```
1. **Intake** — academy-orchestrator — size as T2, frame the assessment scope.
2. **Map** — assessment-designer + curriculum-designer — confirm every item traces to a stated outcome; flag orphans and double-counts. `[GATE A]`
3. **Audit** — assessment-designer — test each item for validity (measures the outcome), reliability (consistent), and fairness (no construct-irrelevant barrier), in parallel tracks.
4. **Evidence** — instructor — overlay cohort performance to confirm items behave as designed.
5. **Integrate** — assessment-designer — consolidate findings into open/closed items with severity.
6. **Sign-off** — [chief-auditor](../01-executive/chief-auditor/) holds the standards veto. `[GATE B]`
7. **Record** — academy-orchestrator — append to the registers below.

## Review Gates
- **Gate A — every item maps to an outcome:** the audit does not proceed until each
  assessment item is traced to a real course outcome. An item that measures nothing
  stated, or double-counts another, is pulled here.
- **Gate B — chief-auditor standards sign-off:** the assessment is not approved for
  use until the [chief-auditor](../01-executive/chief-auditor/) clears the standards
  veto and all high-severity findings are closed. The chief-auditor runs conformance
  but never teaches and never directs (separation of duties).

## Approval Process
The assessment-designer signs Gate A. The
[chief-auditor](../01-executive/chief-auditor/) holds the Gate B standards veto per
[decision-authority](../../kernel/laws/decision-authority.md). The
[academic-director](../01-executive/academic-director/) is consulted on pedagogical
intent but the auditor's quality veto is independent of the teaching line.

## Outputs
An assessment review record: per-item validity / reliability / fairness verdicts, a
findings log with severity, and an approved-for-use (or returned) status.

## Completion Criteria
- [ ] Gate A passed: every item mapped to an outcome, orphans pulled.
- [ ] Validity, reliability, and fairness audited per item.
- [ ] All high-severity findings closed.
- [ ] Gate B passed: chief-auditor standards sign-off recorded.
- [ ] Memory registers below appended.

## Memory Updates
- [pedagogy-decisions](../memory/registers/pedagogy-decisions.md) — assessment-design
  precedents (e.g. an item format ruled valid or barred).
- [learning-outcomes](../memory/registers/learning-outcomes.md) — what the audit and
  cohort evidence revealed about outcome attainment.

## Failure / Rollback
Gate A fails → orphaned items return to [course-design](course-design.md) for
re-alignment; the audit pauses. Gate B fails → the assessment returns with the
auditor's recorded findings and is reworked and re-reviewed; it cannot be used in a
cohort until cleared. A barred item is logged in pedagogy-decisions as a superseding
entry — never erased (Directive [#8](../../kernel/laws/prime-directives.md)).
