# Incident Council — Process
Status: stable
Type: council
Owner: incident-commander
Extends: none

## Discussion rules
This is a fast room, not a debate club. The chair frames the impact in one
sentence; everyone else speaks only to **stop the bleeding or reduce blast
radius**. Opinions on root cause are parked for the post-mortem. Dissent is still
recorded — if the on-call engineer thinks the chosen fix is wrong, that
objection goes in the minutes, in their name, before we act on it.

## Decision process
1. **Declare** — chair states severity, blast radius, and the clock.
2. **Stabilize first** — prefer rollback or feature-flag kill over a forward fix
   when either is faster. The fastest safe path wins.
3. **Assign one fix** — the chair routes; the chair does not implement (Directive
   [#2](../../kernel/laws/prime-directives.md)). Execution hands to the
   [hotfix workflow](../../workflows/hotfix.md).
4. **Fan out** — independent recovery tracks (fix, comms, data integrity check,
   monitoring) run in parallel, up to 15 (Directive
   [#4](../../kernel/laws/prime-directives.md)).
5. **Confirm recovery** — declare resolved only when signals are green and held.

## Approval gate by tier
- Approves alone: [T4](../../kernel/laws/engagement-tiers.md) incident response —
  the council acts under Government coordination without waiting for a standing
  sign-off.
- A gate may be **waived only explicitly and only by the chair**, recorded in the
  minutes with the reason (Directive
  [#9](../../kernel/laws/prime-directives.md)). A silent skip is a violation.
- Must escalate: any structural change to the kernel surfaced by the incident →
  proposed afterward (Directive [#7](../../kernel/laws/prime-directives.md)), not
  hot-patched mid-crisis.

## Escalation
Deadlock under fire is broken by the chair immediately. If the incident exceeds
one company's surface, the Government liaison owns cross-company coordination.
