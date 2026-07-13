<!-- Contract: ../../kernel/contracts/workflow.md -->

# Workflow: patient-intake
Status: stable
Type: workflow
Owner: intake-orchestrator
Extends: planning

**Purpose:** Route and schedule an incoming case along the correct care path — organizational only, no diagnosis.
**Default Tier:** T2  ·  **Owner:** intake-orchestrator

## Trigger
A new case arrives at the clinic (referral, self-presentation, or transfer) and
needs to be classified, routed to a care path, and placed on the schedule. The
intake-orchestrator picks it up and sizes it; safety-touching cases escalate to a
T3 floor and divert to [safety-review](safety-review.md).

## Participants
- intake-orchestrator — routes the case and fans out coordination; never diagnoses ([Directive #2](../../kernel/laws/prime-directives.md)).
- triage-coordinator — classifies urgency by organizational criteria and proposes the care path.
- intake-coordinator — captures and validates case intake data and consent.
- scheduler — sequences the case onto capacity without breaching throughput limits.
- chief-compliance-auditor — holds the compliance veto over the routing decision.

## Inputs
- A registered case record with consent captured.
- Current capacity and the published care paths from
  [care-protocols](../memory/registers/care-protocols.md).
- Open items from [incident-register](../memory/registers/incident-register.md)
  that constrain routing.

## Steps
```
[case in]
  -> classify urgency (triage-coordinator)
  -> [GATE A: intake complete + consent on record]
  -> select care path (triage-coordinator + intake-orchestrator)
  -> schedule onto capacity (scheduler)
  -> [GATE B: route conforms, compliance clear]
  -> handoff to care-coordination -> [record]
```
1. **Intake** — intake-coordinator — capture and validate case data and consent.
2. **Triage** — triage-coordinator — classify urgency by organizational criteria; flag any safety touch.
3. **Route** — intake-orchestrator — select the care path; divert to safety-review if T3 floor is hit.
4. **Schedule** — scheduler — place the case on capacity respecting throughput limits.
5. **Record** — update the memory registers below.

## Review Gates
- **Gate A — intake complete:** case data and consent are on record and validated. Blocks if any required field or consent is missing.
- **Gate B — route conforms:** the selected care path exists in [care-protocols](../memory/registers/care-protocols.md) and the chief-compliance-auditor raises no veto. Blocks on any nonconforming or unsafe route.

## Approval Process
T2: the intake-orchestrator approves the route; the operations-director signs off on
scheduling. A compliance-auditor veto is absolute and overridable only by a human
maintainer. See [decision-authority.md](../../kernel/laws/decision-authority.md).

## Outputs
- A routed case assigned to a named care path and a scheduled slot.
- A handoff packet to [care-coordination](care-coordination.md).

## Completion Criteria
- [ ] Case is routed to an existing care path and scheduled.
- [ ] Gate A and Gate B both passed; no open compliance veto.
- [ ] Memory registers updated.

## Memory Updates
- [care-lessons](../memory/registers/care-lessons.md) — what the routing decision taught about the care path.
- [incident-register](../memory/registers/incident-register.md) — any intake near-miss or routing defect.

## Failure / Rollback
If Gate A fails, the case is held (not routed) until intake is complete. If Gate B
fails, the route is rejected and re-proposed; a compliance veto stops the workflow and
logs an entry in [incident-register](../memory/registers/incident-register.md). No case
advances on a failed gate.
