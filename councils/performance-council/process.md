# Performance Council — Process
Status: stable
Type: council
Owner: performance-lead
Extends: none

## Discussion rules
Numbers, not vibes. A claim of "it feels fast enough" is out of order without a
measurement and a stated method. The chair guards against the two failure modes:
optimizing what was never over budget, and waving through a real regression
because it is inconvenient. Where the engineering lead and the performance-lead
disagree on whether a budget is realistic, that disagreement is recorded in their
names (Directive [#8](../../kernel/laws/prime-directives.md)) — and may feed a
budget-change proposal (Directive
[#7](../../kernel/laws/prime-directives.md)).

## Decision process
1. **State the budget** — the number the system agreed to, and its tier.
2. **State the measurement** — current value, method, sample, trend.
3. **Classify the gap** — within budget / soft breach (warn) / hard breach (block).
4. **Rule** — pass, fix-before-ship, accept-as-debt, or escalate to incident.
5. **Route the fix** — the chair assigns; it does not implement (Directive
   [#2](../../kernel/laws/prime-directives.md)). Independent optimization tracks
   fan out, up to 15 (Directive
   [#4](../../kernel/laws/prime-directives.md)).

## Approval gate by tier
- Approves alone: [T2](../../kernel/laws/engagement-tiers.md) — passing or
  blocking a release on its performance gate
  ([quality-standards.md](../../shared/quality-standards.md)).
- Must escalate: a budget the council judges wrong belongs to a kernel/contract
  change proposal (Directive [#7](../../kernel/laws/prime-directives.md)); a live
  customer-facing breach is handed to the
  [incident-council](../incident-council/) at
  [T4](../../kernel/laws/engagement-tiers.md).

## Escalation
A deadlock on whether to ship a soft breach is broken by the chair. Anything that
crosses into a live outage stops being a review and becomes an incident.
