<!-- Workflow (1 file). Contract: ../kernel/contracts/workflow.md -->

# Workflow: documentation
Status: stable
Type: workflow
Owner: Department Lead
Extends: none

**Purpose:** Make shipped work explain itself — write or correct docs so the next
person understands it without the author.
**Default Tier:** [T1](../kernel/laws/engagement-tiers.md)  ·  **Owner:** Department Lead
**Extends:** none

## Trigger
Shipped or changed work whose docs are missing, stale, or unclear — sized
[T1](../kernel/laws/engagement-tiers.md). Implements Directive
[#10](../kernel/laws/prime-directives.md): one concept per file, every folder has
a README.

## Participants
- [orchestrator](../kernel/protocols/orchestration.md) — routes to a writer.
- 1–3 writer agents — author the docs (T1 fan-out).
- Department Lead — Gate A and Gate B sign-off (no council at T1).

## Inputs
The artifact being documented and the reader it is written for.

## Steps
```
scope ─> [GATE A: audience + concepts agreed] ─> write ─> [GATE B: accurate + linked] ─> record
```
1. **Scope** — writer — identify the concepts and the target reader. `[GATE A]`
2. **Write** — writer — one concept per file; add the folder README if missing.
3. **Cross-link** — writer — relative paths that resolve ([conventions](../shared/conventions.md)).
4. **Verify** — Department Lead — check accuracy against the artifact and links. `[GATE B]`
5. **Record** — orchestrator — update the memory registers below.

## Review Gates
- **Gate A — audience + concepts agreed:** docs target a reader and a concept set,
  not "everything."
- **Gate B — accurate + linked:** content matches the shipped artifact and every
  cross-link resolves (dimension 9, Documentation).

## Approval Process
Department Lead signs both gates. Chief Auditor may veto on a documentation/quality
violation. See [decision-authority](../kernel/laws/decision-authority.md).

## Outputs
Focused docs, a folder README if one was missing, and resolving cross-links.

## Completion Criteria
- [ ] Audience and concepts agreed (Gate A).
- [ ] One concept per file; every touched folder has a README.
- [ ] Accurate and fully linked (Gate B); memory registers appended.

## Memory Updates
- [meeting-history](../memory/registers/meeting-history.md) — what was documented, for whom, date.
- [lessons-learned](../memory/registers/lessons-learned.md) — recurring confusion worth a convention.

## Failure / Rollback
Docs contradict the artifact at Gate B → fix the doc (or file a [bug](bug.md) if
the artifact is wrong). A broken cross-link blocks completion — links are not
cosmetic. Doc grows past one concept → split it, never let a file sprawl.
