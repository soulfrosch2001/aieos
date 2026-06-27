# Feature Council — Process
Status: stable
Type: council
Owner: product-lead
Extends: none

## Discussion rules
Design is argued, not announced. Every candidate gets a fair reading before any
is cut; the chair forbids "we already decided" as a substitute for a reason.
Disagreement is the point — design leads and engineering leads are *expected* to
clash on tradeoffs, and those clashes are recorded in their names, never smoothed
over (Directive [#8](../../kernel/laws/prime-directives.md)). A council that was
unanimous on a hard feature usually skipped the debate.

## Decision process
1. **Frame** — chair restates the problem and the user value at stake (Directive
   [#1](../../kernel/laws/prime-directives.md)). If the value is unclear, the
   council stops here.
2. **Lay out options** — at least two designs, each with its cost, risk, and the
   tier budget it spends.
3. **Debate the tradeoffs** — explicitly against the tier's quality gates.
4. **Decide** — consensus preferred; the chair breaks a true deadlock.
5. **Emit a plan, not code** — the council hands a build plan to departments
   (Directive [#2](../../kernel/laws/prime-directives.md)); the plan names the
   parallel tracks, up to 15 (Directive
   [#4](../../kernel/laws/prime-directives.md)).

## Approval gate by tier
- Approves alone: [T2](../../kernel/laws/engagement-tiers.md) — the council is the
  sign-off.
- Must escalate: [T3](../../kernel/laws/engagement-tiers.md) and above — council
  plus executive, per
  [decision-authority.md](../../kernel/laws/decision-authority.md).

## Escalation
A deadlock the chair will not break alone, or a feature that grows past T2
mid-debate, escalates rather than being silently downgraded
([engagement-tiers.md](../../kernel/laws/engagement-tiers.md)).
