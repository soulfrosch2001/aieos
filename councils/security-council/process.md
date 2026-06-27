# Security Council — Process

Status: stable
Type: council
Owner: Security lead / CISO-type (chair)
Extends: none

## Discussion rules
Assume breach; argue from the attacker's incentive, not the happy path. Severity
is stated in plain blast-radius terms (who is exposed, to what, how badly).
**Dissent is recorded, never suppressed** — a single unaddressed "this is unsafe"
is enough to block. Player/customer trust is the north star (Directive
[#1](../../kernel/laws/prime-directives.md)).

## Decision process
1. **Frame.** Chair states the question and tier (T3 review, or T4 incident).
2. **Model the threat.** Enumerate assets, trust boundaries, and the realistic
   attacker. No threat model, no decision.
3. **Assess.** Score each risk by likelihood × impact; separate must-fix-before-
   ship from accept-and-monitor.
4. **Decide.** Default rule is **chair-decides on the security call** (security is
   not a majority vote); the chair documents the rationale. A Chief Auditor veto
   independently stops the work.
5. **Set requirements, don't build.** Emit security requirements and a remediation
   plan fanned into **disjoint tracks** (Directive
   [#4](../../kernel/laws/prime-directives.md)); departments execute per
   [orchestration.md](../../kernel/protocols/orchestration.md).
6. **Record.** File minutes with the explicit sign-off (or no-go) and named
   dissent.

### Incident mode (T4)
Containment first, root cause second, disclosure on the documented timeline.
The council runs under the Government-coordinated incident protocol; the security
no-go is binding and only a human maintainer overrides a Prime Directive.

## Approval gate by tier
- Approves alone: **T2** security reviews of significant work.
- Must escalate: **T3** needs council **+ executive** sign-off; **T4** is
  Government-coordinated. See
  [decision-authority.md](../../kernel/laws/decision-authority.md).

## Escalation
Unresolved security risk → escalate via
[escalation.md](../../kernel/protocols/escalation.md) to the Government CTO and
Chief Auditor. A security no-go cannot be overridden by release or product.
