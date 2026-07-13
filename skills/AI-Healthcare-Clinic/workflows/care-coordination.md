<!-- Contract: ../../kernel/contracts/workflow.md -->

# Workflow: care-coordination
Status: stable
Type: workflow
Owner: care-coordinator
Extends: feature

**Purpose:** Coordinate the care process across roles for a routed case — organizational coordination only, never clinical practice.
**Default Tier:** T2  ·  **Owner:** care-coordinator

## Trigger
A case has cleared [patient-intake](patient-intake.md) and arrives with a care path
and a scheduled slot. The care-coordinator picks it up to sequence the steps,
assign owners, and keep the path moving without gaps or duplication.

## Participants
- care-coordinator — owns coherence of the care path end to end; sequences and assigns.
- case-manager — tracks the case through each step and surfaces blockers.
- pharmacy-coordinator — handles medication logistics (supply and handoff, not prescribing).
- chief-medical-officer — holds the clinical-process veto over the coordination design.
- chief-compliance-auditor — holds the compliance veto over records and consent.

## Inputs
- A routed, scheduled case handoff from [patient-intake](patient-intake.md).
- The care path definition from [care-protocols](../memory/registers/care-protocols.md).
- Capacity and dependency state for each step.

## Steps
```
[routed case in]
  -> map path to owned steps (care-coordinator)
  -> [GATE A: every step has a named owner + no orphan handoff]
  -> execute & track steps (case-manager, pharmacy-coordinator)
  -> reconcile records & consent (records via 04-compliance)
  -> [GATE B: path complete, records reconciled, no open process veto]
  -> close case -> [record]
```
1. **Map** — care-coordinator — break the care path into ordered, owned steps.
2. **Assign** — care-coordinator — give every step a single accountable owner (disjoint ownership, [Directive #4](../../kernel/laws/prime-directives.md)).
3. **Track** — case-manager — drive each step to done; escalate blockers.
4. **Logistics** — pharmacy-coordinator — coordinate medication supply and handoff (organizational only).
5. **Reconcile** — care-coordinator — confirm records and consent are complete and consistent.
6. **Record** — update the memory registers below.

## Review Gates
- **Gate A — no orphan steps:** every step in the care path has exactly one named owner and every handoff has a receiver. Blocks on any unowned step or dangling handoff.
- **Gate B — path complete & clean:** all steps closed, records and consent reconciled, and no open clinical-process or compliance veto. Blocks if any record is unreconciled or a veto stands.

## Approval Process
T2: the care-coordinator approves path completion; the chief-medical-officer may veto
an unsafe coordination design and the chief-compliance-auditor may veto on records or
consent. Vetoes are overridable only by a human maintainer. See
[decision-authority.md](../../kernel/laws/decision-authority.md).

## Outputs
- A completed, fully owned care path with reconciled records.
- A closed case ready for reporting upward.

## Completion Criteria
- [ ] Every care-path step closed with a named owner.
- [ ] Records and consent reconciled; no open veto.
- [ ] Memory registers updated.

## Memory Updates
- [care-lessons](../memory/registers/care-lessons.md) — coordination lessons and reusable improvements.
- [care-protocols](../memory/registers/care-protocols.md) — any care-process change consequential enough to flow up.
- [incident-register](../memory/registers/incident-register.md) — any coordination defect or near-miss.

## Failure / Rollback
If Gate A fails, the path does not start until every step is owned. If Gate B fails,
the case stays open and the unreconciled item is fixed before closure. A standing veto
halts the workflow and is logged in
[incident-register](../memory/registers/incident-register.md).
