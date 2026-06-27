# Balance Council — Process
Status: draft
Type: council
Owner: balance-designer
Extends: performance-council ([../../../councils/performance-council/process.md](../../../councils/performance-council/process.md))

## Discussion rules
Data, not vibes. A claim that "the rogue feels too strong" is out of order without
a win-rate and a stated sample. The chair guards against the two failure modes:
nerfing a faction that was never over budget, and waving through a real dominant
strategy because re-tuning is inconvenient. Where the systems-designer and the
balance-designer disagree on whether a budget is realistic, that disagreement is
recorded in their names (Directive
[#8](../../../kernel/laws/prime-directives.md)) — and may feed a budget-change
proposal (Directive [#7](../../../kernel/laws/prime-directives.md)).

## Decision process
1. **State the budget** — the win-rate spread and dominant-strategy ceiling the
   game agreed to, and its tier.
2. **State the measurement** — current values, method, sample size, skill band,
   trend.
3. **Classify the gap** — within budget / soft breach (warn, watch) / hard breach
   (block until re-tuned).
4. **Rule** — pass, re-tune-before-ship, accept-as-debt with a fix date, or
   escalate.
5. **Route the fix** — the chair assigns to the balance and systems tracks; it
   does not tune the numbers itself (Directive
   [#2](../../../kernel/laws/prime-directives.md)). Independent tuning tracks fan
   out, up to 15 (Directive [#4](../../../kernel/laws/prime-directives.md)).

## Approval gate by tier
- Approves alone: [T2](../../../kernel/laws/engagement-tiers.md) — passing or
  blocking a release on its balance gate.
- Must escalate: a fairness budget the council judges wrong belongs to a
  contract-change proposal (Directive
  [#7](../../../kernel/laws/prime-directives.md)); a live, competitive-play-breaking
  imbalance in a shipped product is handed to the studio's incident path at
  [T4](../../../kernel/laws/engagement-tiers.md).

## Escalation
A deadlock on whether to ship a soft breach is broken by the chair. Anything that
crosses into a shipped product breaking competitive integrity stops being a review
and becomes an incident.
