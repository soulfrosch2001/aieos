<!-- Workflow (1 file). Contract: ../../kernel/contracts/workflow.md -->

# Workflow: book-release
Status: stable
Type: workflow
Owner: production-director
Extends: release

**Purpose:** Publish and distribute a finished book — set the format, print, and
ship it on a sequenced on-sale date with a clean record.
**Default Tier:** [T3](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** production-director
**Extends:** [release](../../workflows/release.md)

## Trigger
A finished, standard-passing book leaves [editing-pipeline](editing-pipeline.md)
ready to ship — sized [T3](../../kernel/laws/engagement-tiers.md) because it is
externally visible and crosses design, print, and distribution. The
**production-director owns the schedule and on-sale timing, alone**
([decision-authority](../../kernel/laws/decision-authority.md)).

## Participants
- [house-orchestrator](../../kernel/protocols/orchestration.md) — assembles the release candidate, routes (never edits, Directive [#2](../../kernel/laws/prime-directives.md)).
- [production-director](../01-executive/production-director/) — owns the go/no-go on print and on-sale date.
- [book-designer](../04-production/book-designer/) — interior and cover design; press-ready files.
- [distribution-manager](../04-production/distribution-manager/) — channels, metadata, and on-sale logistics.
- Up to 15 agents — verify proofs, metadata, and channel readiness in parallel ([orchestration](../../kernel/protocols/orchestration.md)).
- [chief-auditor](../01-executive/chief-auditor/) — Gate B conformance clearance; never edits.

## Inputs
A finished manuscript that passed [editing-pipeline](editing-pipeline.md) Gate B,
the title's rights and schedule slot from
[rights-and-sales](../memory/registers/rights-and-sales.md), and a draft metadata set.

## Steps
```
assemble ─> [GATE A: scope + on-sale frozen] ─> design+proof+metadata(≤15) ─> [GATE B: press-ready + conformance] ─> ship ─> record
```
1. **Assemble** — house-orchestrator — gather files, freeze format and on-sale date. `[GATE A]`
2. **Design** — book-designer — produce press-ready interior and cover.
3. **Prepare** — distribution-manager — set channels, metadata, and pricing in parallel.
4. **Conform** — chief-auditor — verify press files and metadata; confirm a recall/erratum plan. `[GATE B]`
5. **Go/No-go** — production-director — make the release decision and lock the date.
6. **Ship** — house-orchestrator — release to print and channels; publish the listing.
7. **Record** — house-orchestrator — append the registers below.

## Review Gates
- **Gate A — scope + on-sale frozen:** the format, edition, and on-sale date are
  locked; late changes re-open the gate. Nothing prints that wasn't reviewed.
- **Gate B — press-ready + conformance:** files pass conformance, metadata is
  correct across channels, and a recall/erratum path exists before ship — the
  release fail-safe ([Directive #9](../../kernel/laws/prime-directives.md)). Release
  timing is the production-director's call only **after** the chief-auditor clears this gate.

## Approval Process
The production-director holds go/no-go on sequencing and on-sale timing; the
chief-auditor clears Gate B and may veto on conformance
([decision-authority](../../kernel/laws/decision-authority.md)). A failed release
escalates per [escalation](../../kernel/protocols/escalation.md).

## Outputs
The published book across its formats and channels, a correct metadata listing, and
a verified recall/erratum plan.

## Completion Criteria
- [ ] Format and on-sale date frozen (Gate A).
- [ ] Press-ready files and metadata pass conformance; recall path tested (Gate B).
- [ ] Title shipped on its sequenced date.
- [ ] Memory registers below appended.

## Memory Updates
- [rights-and-sales](../memory/registers/rights-and-sales.md) — on-sale date, formats, channels, sales position.
- [catalog-decisions](../memory/registers/catalog-decisions.md) — the published edition and go/no-go owner.
- [editorial-standards](../memory/registers/editorial-standards.md) — any erratum or production lesson for next time.

## Failure / Rollback
Gate fails → no-go; defects route back to the owning track and re-conform. Scope or
date changes mid-flight → re-freeze at Gate A, never print un-reviewed scope. A
post-ship defect triggers the prepared erratum/recall plan and a dated entry in
[rights-and-sales](../memory/registers/rights-and-sales.md)
([Directive #8](../../kernel/laws/prime-directives.md)).
