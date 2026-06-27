<!-- Workflow (1 file). Contract: ../../kernel/contracts/workflow.md -->

# Workflow: implementation
Status: stable
Type: workflow
Owner: implementation-lead
Extends: release

**Purpose:** Deliver and embed the change at the client — turn an approved
recommendation into a working, adopted change the organization can sustain.
**Default Tier:** [T3](../../kernel/laws/engagement-tiers.md)  ·  **Owner:** implementation-lead
**Extends:** stdlib [release](../../workflows/release.md)

## Trigger
An approved recommendation from [strategy-development](strategy-development.md)
that the client has agreed to act on. Sized [T3](../../kernel/laws/engagement-tiers.md)
because it changes how the client operates and crosses a quality gate before it ships.

## Participants
- [implementation-lead](../04-implementation/implementation-lead/) — owns the delivery plan and the handover.
- [change-manager](../04-implementation/change-manager/) — owns adoption and the people side of the change.
- [operations-partner](../01-executive/operations-partner/) — owns delivery sequencing and deadline; Gate A sign-off.
- [chief-auditor](../01-executive/chief-auditor/) — quality veto on the deliverable before it goes live (Gate B).
- [engagement-orchestrator](../01-executive/engagement-orchestrator/) — fans out delivery tracks; never delivers (Directive [#2](../../kernel/laws/prime-directives.md)).

## Inputs
An approved, sourced recommendation; the client's readiness and access; a defined
success measure tied to the engagement outcome (Directive [#1](../../kernel/laws/prime-directives.md)).

## Steps
```
approved rec ─> delivery plan ─> [GATE A: plan + readiness signed] ─> deliver in waves ─> embed/adopt ─> [GATE B: quality + adoption cleared] ─> handover ─> record
```
1. **Plan delivery** — implementation-lead — break the change into sequenced, disjoint delivery tracks (≤15, [orchestration](../../kernel/protocols/orchestration.md)).
2. **Plan adoption** — change-manager — map who must change behaviour and how it will be supported.
3. **Sign the plan** — operations-partner — confirm sequence, readiness, and deadline. `[GATE A]`
4. **Deliver** — implementation-lead — execute the waves at the client.
5. **Embed** — change-manager — drive adoption; measure that the change actually took.
6. **Quality gate** — chief-auditor — verify the deliverable meets the bar and adoption is real, not nominal. `[GATE B]`
7. **Handover** — implementation-lead — transfer ownership to the client with a sustainment plan.
8. **Record** — engagement-orchestrator — update the memory registers below.

## Review Gates
- **Gate A — plan + readiness signed:** delivery does not start until the plan is sequenced, tracks are disjoint and owned, and the client is ready. Operations-partner signs.
- **Gate B — quality + adoption cleared:** the deliverable passes the chief-auditor's quality veto and adoption is demonstrated, not assumed. A change nobody uses has not been delivered (Directive [#1](../../kernel/laws/prime-directives.md)).

## Approval Process
Operations-partner signs the plan (Gate A); chief-auditor holds the binding quality
veto (Gate B). As a T3 workflow, executive sign-off is required per
[decision-authority](../../kernel/laws/decision-authority.md).

## Outputs
A delivered, adopted change at the client; an adoption measure; a sustainment plan;
and a clean handover record.

## Completion Criteria
- [ ] Delivery and adoption plans built; readiness confirmed (Gate A).
- [ ] Change delivered and adoption demonstrated.
- [ ] Quality cleared by chief-auditor (Gate B).
- [ ] Handover and sustainment plan transferred.
- [ ] Memory registers appended.

## Memory Updates
- [engagement-decisions](../memory/registers/engagement-decisions.md) — delivery decisions and handover terms, dated.
- [risk-register](../memory/registers/risk-register.md) — delivery, adoption, and sustainment risks, with owners.
- [engagement-lessons](../memory/registers/engagement-lessons.md) — what aided or blocked adoption, for the next engagement.

## Failure / Rollback
Gate A unsigned → delivery holds; readiness gaps are closed first. Quality or
adoption veto at Gate B → the wave is rolled back and re-delivered; a partial,
unadopted change is not handed over. A client-side blocker escalates to the
operations-partner ([escalation](../../kernel/protocols/escalation.md)).
