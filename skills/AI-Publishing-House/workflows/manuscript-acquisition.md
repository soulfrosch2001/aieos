<!-- Workflow (1 file). Contract: ../../kernel/contracts/workflow.md -->

# Workflow: manuscript-acquisition
Status: stable
Type: workflow
Owner: ceo
Extends: planning

**Purpose:** Evaluate and acquire a manuscript — decide whether a work belongs on
the list and sign it on terms the house can honour.
**Default Tier:** [T2](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** ceo
**Extends:** [planning](../../workflows/planning.md)

## Trigger
A scouted manuscript or proposal arrives and warrants a real signing decision —
sized [T2](../../kernel/laws/engagement-tiers.md) by the house-orchestrator.
Acquisition *plans the list*; it is the house's planning workflow, so it routes and
decides but builds nothing yet ([Directive #2](../../kernel/laws/prime-directives.md)).

## Participants
- [house-orchestrator](../../kernel/protocols/orchestration.md) — sizes, decomposes the read, routes (never edits, Directive [#2](../../kernel/laws/prime-directives.md)).
- [acquisitions-editor](../02-acquisitions/acquisitions-editor/) — owns the read and the recommendation; Gate A.
- [literary-scout](../02-acquisitions/literary-scout/) — sources the work and the comparable-titles case.
- [contracts-manager](../02-acquisitions/contracts-manager/) — clears rights and drafts terms; Gate B.
- [acquisition-council](../councils/acquisition-council/) — debates the signing (Directive [#3](../../kernel/laws/prime-directives.md)).
- [ceo](../01-executive/ceo/) — decides what the house publishes, alone.
- [editorial-director](../01-executive/editorial-director/) — advises on editorial fit; holds the standard veto.

## Inputs
A manuscript or proposal, a reader value case ([Directive #1](../../kernel/laws/prime-directives.md)),
comparable-title evidence, and a first view of rights availability.

## Steps
```
intake ─> assess ─> [GATE A: fit + reader case clear] ─> council ─> [GATE B: rights clear + terms viable] ─> sign ─> record
```
1. **Intake** — house-orchestrator — log the submission, size it T2, route to the read.
2. **Assess** — acquisitions-editor — judge editorial fit, market, and reader value. `[GATE A]`
3. **Compare** — literary-scout — assemble comparable titles and audience evidence.
4. **Debate** — acquisition-council — pressure-test the list decision; record dissent.
5. **Clear** — contracts-manager — confirm rights are unencumbered and draft viable terms. `[GATE B]`
6. **Decide** — ceo — make the signing call; editorial-director may flag a standard concern.
7. **Record** — house-orchestrator — append the registers below.

## Review Gates
- **Gate A — fit + reader case clear:** no work goes to council without an explicit
  reader-value case ([Directive #1](../../kernel/laws/prime-directives.md)); a clever
  book with no audience is rejected here.
- **Gate B — rights clear + terms viable:** the house does not sign what it cannot
  legally publish or afford to honour. Unclear rights block the signing — no exceptions.

## Approval Process
The acquisition-council pressure-tests; the **ceo decides what the house publishes,
alone** ([decision-authority](../../kernel/laws/decision-authority.md)). The
editorial-director's standard veto can block a signing the editorial side cannot
bring to standard.

## Outputs
A signing decision (yes/no), an executed term sheet when yes, and the title's entry
on the list with its tier.

## Completion Criteria
- [ ] Reader-value case explicit and council-tested (Gate A).
- [ ] Rights cleared and terms viable (Gate B).
- [ ] CEO decision recorded with tier.
- [ ] Memory registers below appended.

## Memory Updates
- [catalog-decisions](../memory/registers/catalog-decisions.md) — what was acquired (or passed) and why, with tier.
- [rights-and-sales](../memory/registers/rights-and-sales.md) — rights cleared, term sheet, projected slot.
- [editorial-standards](../memory/registers/editorial-standards.md) — any editorial condition attached to the signing.

## Failure / Rollback
Gate A fails → decline or send back for a stronger reader case; do not convene the
council. Gate B fails → no signing until rights clear; a contested right escalates
per [escalation](../../kernel/protocols/escalation.md). A signed title that cannot
be brought to standard is reversed by a dated superseding entry in
[catalog-decisions](../memory/registers/catalog-decisions.md), never erased
([Directive #8](../../kernel/laws/prime-directives.md)).
