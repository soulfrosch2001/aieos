# matter-intake
Status: stable
Type: workflow
Owner: intake-orchestrator
Extends: planning

# Workflow: matter-intake
Status: stable
**Purpose:** Intake and scope a new legal matter, clearing a conflicts check
before any substantive work begins.
**Default Tier:** [T2](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** intake-orchestrator
**Extends:** stdlib [planning](../../workflows/planning.md)

## Trigger
A prospective or existing client presents a matter. Intake is sized
[T2](../../kernel/laws/engagement-tiers.md) by default and may never be sized below
it for client-facing work. The orchestrator routes and sizes; it never advises on
the matter itself ([Directive #2](../../kernel/laws/prime-directives.md)).

## Participants
- [intake-orchestrator](../01-executive/intake-orchestrator/) — frames, sizes, and
  routes the matter; integrates the scope ([orchestration](../../kernel/protocols/orchestration.md)).
- [chief-compliance-auditor](../01-executive/chief-compliance-auditor/) — runs the
  conflicts/ethics check; holds an absolute veto at Gate A.
- [managing-partner](../01-executive/managing-partner/) — decides whether the firm
  takes the matter and which practice direction it serves.
- [operations-partner](../01-executive/operations-partner/) — confirms staffing and
  deadline feasibility at Gate B.
- Affected practice lead ([corporate-counsel](../02-advisory/corporate-counsel/),
  [litigator](../03-litigation/litigator/), or
  [compliance-counsel](../04-compliance/compliance-counsel/)) — confirms scope.

## Inputs
The client's request, parties involved, jurisdiction, desired outcome, and any
deadlines. A client is not yet a client until conflicts clear.

## Steps
```
request ─> conflicts check ─> [GATE A: no conflict + take decision] ─> scope ─> staff ─> [GATE B: staffed + deadlined] ─> record
```
1. **Frame** — intake-orchestrator — state the matter, parties, jurisdiction, and outcome sought.
2. **Conflicts check** — chief-compliance-auditor — screen all parties against the
   [risk-register](../memory/registers/risk-register.md) and prior
   [matter-log](../memory/registers/matter-log.md). `[GATE A]`
3. **Take decision** — managing-partner — decide alone whether to accept the matter
   ([decision-authority](../../kernel/laws/decision-authority.md)). `[GATE A]`
4. **Scope** — intake-orchestrator + practice lead — partition the matter into
   disjoint, owned tracks ([orchestration](../../kernel/protocols/orchestration.md)).
5. **Staff & deadline** — operations-partner — assign owners and dates; confirm feasibility. `[GATE B]`
6. **Record** — intake-orchestrator — update the memory registers below.

## Review Gates
- **Gate A — conflicts cleared + matter accepted:** no scoping starts while a
  conflict is unresolved or the firm has not decided to take the matter. A
  compliance conflict is an absolute block — no tier or partner overrides it.
- **Gate B — staffed + deadlined:** every track has a single owner and a date, and
  no two tracks write the same deliverable.

## Approval Process
managing-partner accepts the matter (sole authority); operations-partner signs
staffing; chief-compliance-auditor holds the conflicts veto per
[decision-authority](../../kernel/laws/decision-authority.md). T3 matters add
general-counsel soundness sign-off.

## Outputs
An accepted, scoped matter: a conflicts-cleared engagement with disjoint owned
tracks, deadlines, and an assigned practice lead.

## Completion Criteria
- [ ] Conflicts cleared and matter accepted (Gate A).
- [ ] Tracks disjoint, owned, deadlined (Gate B).
- [ ] Memory registers appended.

## Memory Updates
- [matter-log](../memory/registers/matter-log.md) — matter ID, parties, scope, owner, deadlines, date.
- [risk-register](../memory/registers/risk-register.md) — any conflict, exposure, or jurisdictional risk flagged at intake.
- [precedent](../memory/registers/precedent.md) — engagement-scoping decisions of lasting consequence.

## Failure / Rollback
Conflict found → decline or wall off the matter; never proceed past Gate A. Scope
cannot be made disjoint → re-partition before fan-out. Deadline infeasible →
operations-partner renegotiates before staffing, never silently under-staffs.
Escalate disputes per [escalation](../../kernel/protocols/escalation.md).
