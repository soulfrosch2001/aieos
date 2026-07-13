<!-- Contract: ../../kernel/contracts/workflow.md -->

# Workflow: safety-review
Status: stable
Type: workflow
Owner: chief-compliance-auditor
Extends: security-review

**Purpose:** Review a proposed process change for patient-safety and compliance impact before it ships.
**Default Tier:** T3  ·  **Owner:** chief-compliance-auditor

## Trigger
A change to a care path, routing rule, or coordination process is proposed — or a
case is sized at the **T3 safety floor**. The chief-compliance-auditor convenes the
[safety-council](../councils/safety-council/README.md) before the change can ship.

## Participants
- chief-compliance-auditor — chairs the review; holds the absolute, regulated compliance veto.
- chief-medical-officer — assesses clinical-process safety; holds the process veto.
- care-coordinator — explains the coordination impact of the change.
- compliance-officer — checks regulated records and consent handling.
- records-manager — confirms auditability of what the change records.

## Inputs
- The proposed process change with its rationale.
- The current care paths from [care-protocols](../memory/registers/care-protocols.md).
- Prior incidents from [incident-register](../memory/registers/incident-register.md).

## Steps
```
[proposed change in]
  -> frame harm axis: patient safety (chief-compliance-auditor)
  -> [GATE A: safety impact assessed + no unmitigated hazard]
  -> council debate (safety-council)
  -> reconcile against records & consent rules (compliance-officer)
  -> [GATE B: compliance clear, vetoes resolved, audit trail intact]
  -> approve or reject -> [record]
```
1. **Frame** — chief-compliance-auditor — state the change and its patient-safety harm axis.
2. **Assess** — chief-medical-officer — evaluate clinical-process risk and mitigations.
3. **Debate** — safety-council — discuss before building ([Directive #1](../../kernel/laws/prime-directives.md)); record dissent.
4. **Check** — compliance-officer / records-manager — verify regulated records, consent, and auditability.
5. **Decide** — chief-compliance-auditor — approve, return for rework, or veto.
6. **Record** — update the memory registers below.

## Review Gates
- **Gate A — safety assessed:** every identified hazard has a documented mitigation; no unmitigated patient-safety hazard remains. Blocks on any open hazard.
- **Gate B — compliance clear:** records, consent, and audit trail conform and no veto stands. Blocks on any open veto or broken audit trail.

## Approval Process
T3: requires council debate plus sign-off from the chief-medical-officer (process) and
the chief-compliance-auditor (compliance). The compliance veto is absolute and
regulated — overridable only by a human maintainer. See
[decision-authority.md](../../kernel/laws/decision-authority.md).

## Outputs
- An approved (or rejected) process change with recorded council minutes.
- Updated care paths if the change is accepted.

## Completion Criteria
- [ ] Both gates passed; all vetoes resolved.
- [ ] Council minutes recorded.
- [ ] Memory registers updated.

## Memory Updates
- [incident-register](../memory/registers/incident-register.md) — hazards found and their mitigations.
- [care-protocols](../memory/registers/care-protocols.md) — the approved process change, if accepted.
- [care-lessons](../memory/registers/care-lessons.md) — what the review taught for next time.

## Failure / Rollback
If Gate A fails, the change is returned for rework with the open hazard named. If Gate B
fails or a veto stands, the change is rejected and does not ship; the rejection and its
reason are appended to [incident-register](../memory/registers/incident-register.md).
