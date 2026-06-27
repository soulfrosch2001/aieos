<!-- Workflow (1 file). Contract: ../../kernel/contracts/workflow.md -->

# Workflow: editing-pipeline
Status: stable
Type: workflow
Owner: editorial-director
Extends: feature

**Purpose:** Move a manuscript through developmental, copy, and proof edits until
it is the finished book — the house's "feature" build.
**Default Tier:** [T2](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** editorial-director
**Extends:** [feature](../../workflows/feature.md)

## Trigger
A signed manuscript leaves [manuscript-acquisition](manuscript-acquisition.md) ready
to be developed — sized [T2](../../kernel/laws/engagement-tiers.md). Developing a book
is building the feature: it carries genuine design choices and gated review.

## Participants
- [house-orchestrator](../../kernel/protocols/orchestration.md) — sizes, sequences passes, routes (never edits, Directive [#2](../../kernel/laws/prime-directives.md)).
- [developmental-editor](../03-editorial/developmental-editor/) — owns structure and the editorial plan; Gate A.
- [copy-editor](../03-editorial/copy-editor/) — line, consistency, and house style.
- [proofreader](../03-editorial/proofreader/) — final error pass on pages.
- [editorial-council](../councils/editorial-council/) — debates editorial direction (Directive [#3](../../kernel/laws/prime-directives.md)).
- [editorial-director](../01-executive/editorial-director/) — owns standards; holds the editorial veto at Gate B.
- [chief-auditor](../01-executive/chief-auditor/) — runs conformance; never edits.

## Inputs
A signed manuscript, its acquisition conditions, the reader-value brief
([Directive #1](../../kernel/laws/prime-directives.md)), and the
[editorial-standards](../memory/registers/editorial-standards.md) it must meet.

## Steps
```
intake ─> dev-edit ─> [GATE A: structure approved] ─> copy+proof passes ─> [GATE B: meets standard] ─> handoff ─> record
```
1. **Intake** — house-orchestrator — confirm scope, plan the passes, route to development.
2. **Develop** — developmental-editor — fix structure, argument, and arc with the author; editorial-council debates direction. `[GATE A]`
3. **Copy-edit** — copy-editor — line edit for clarity, consistency, and house style.
4. **Proofread** — proofreader — final error pass on typeset pages; no new edits introduced.
5. **Conform** — chief-auditor — verify the title meets [editorial-standards](../memory/registers/editorial-standards.md). `[GATE B]`
6. **Hand off** — editorial-director — release the finished book to production.
7. **Record** — house-orchestrator — append the registers below.

## Review Gates
- **Gate A — structure approved:** copy and proof passes do not begin until the
  editorial-council signs the developmental plan; line-editing a book whose
  structure is still in flux wastes the pass.
- **Gate B — meets standard:** the book does not leave editorial until it passes
  the house [editorial-standards](../memory/registers/editorial-standards.md). The
  editorial-director's veto here is stricter than the stdlib quality gate, never a
  replacement for it ([Directive #9](../../kernel/laws/prime-directives.md)).

## Approval Process
The editorial-council signs Gate A; the **editorial-director holds the Gate B veto**
on any work below standard ([decision-authority](../../kernel/laws/decision-authority.md)).
The chief-auditor clears conformance and may block on process grounds.

## Outputs
The finished, standard-passing manuscript ready for design and print, plus its
editorial record and an updated style note where the title set precedent.

## Completion Criteria
- [ ] Developmental plan approved (Gate A).
- [ ] Copy and proof passes complete with no open queries.
- [ ] Title passes editorial-standards and conformance (Gate B).
- [ ] Memory registers below appended.

## Memory Updates
- [editorial-standards](../memory/registers/editorial-standards.md) — house-style rulings and lessons this title taught.
- [catalog-decisions](../memory/registers/catalog-decisions.md) — material editorial changes to the signed scope.
- [rights-and-sales](../memory/registers/rights-and-sales.md) — confirmed manuscript-ready date feeding the schedule.

## Failure / Rollback
Gate A fails → return to development; do not start copy or proof passes. Gate B
fails → block handoff, route notes back to the owning pass, re-conform. A title that
cannot reach standard is escalated to the editorial-director, who may pull it from
the schedule and record the reversal in
[catalog-decisions](../memory/registers/catalog-decisions.md).
