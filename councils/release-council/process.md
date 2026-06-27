# Release Council — Process

Status: stable
Type: council
Owner: Release lead / COO-Delivery-type (chair)
Extends: none

## Discussion rules
Bias toward shipping value to players (Directive
[#1](../../kernel/laws/prime-directives.md)) — but a gate is a gate, not a vibe.
Readiness is shown with evidence, not asserted. **Dissent is recorded, never
suppressed**; a single unresolved "this is not safe to ship" is taken seriously.

## Decision process
1. **Frame.** Chair states what is shipping and the tier (T3).
2. **Read the gates.** Walk every required quality gate (Directive
   [#9](../../kernel/laws/prime-directives.md)); a red gate is a default no-go.
   Confirm the [security-council](../security-council/README.md) sign-off is in
   hand — a security no-go ends the meeting.
3. **Assess rollout.** Blast radius, rollout shape (canary / staged / full), and a
   **tested rollback path**. No rollback plan, no go.
4. **Decide go/no-go.** Default rule is **consensus of Core seats; the chair
   breaks ties**. A Chief Auditor veto or a security no-go independently blocks.
5. **Plan the ship, don't build it.** Emit the rollout/rollback plan and assign
   owners; departments execute per
   [orchestration.md](../../kernel/protocols/orchestration.md).
6. **Record.** File minutes with the explicit go/no-go and named dissent.

## Approval gate by tier
- Approves alone: routine releases below T3 are department-led, not this council.
- Must escalate: **T3** requires council **+ executive** sign-off; a no-go is
  binding. See
  [decision-authority.md](../../kernel/laws/decision-authority.md).

## Escalation
Disputed no-go → escalate via
[escalation.md](../../kernel/protocols/escalation.md) to the executive (COO/CEO).
Neither product pressure nor a deadline overrides a security or quality-gate
no-go; only a human maintainer overrides a Prime Directive.
