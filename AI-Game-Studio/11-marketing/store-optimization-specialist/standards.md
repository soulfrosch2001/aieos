# Standards — Store Optimization Specialist

## Quality gates (a test/change must pass ALL)
1. **Hypothesis declared before data.** Written, falsifiable, audience-specific. No hypothesis → no test (Prime Directive #3).
2. **One isolated variable.** If two things changed, the result is uninterpretable — reject.
3. **Powered & significant.** Sample reaches the pre-computed size; result clears the significance bar. No early calls, no peeking-to-stop.
4. **Right-player check.** Refund rate and review sentiment did not degrade. A CTR/wishlist win that raises refunds is a **fail**, not a win (Prime Directive #1).
5. **Per-market sanity.** Winner holds (or is at least neutral) in priority locales, not just the home market.
6. **Lesson written.** Concluded test logged to [../../10-memory/lessons-learned.md](../../10-memory/lessons-learned.md) (Prime Directive #5).

## Review checklist (before shipping a winning variant)
- [ ] Hypothesis + verdict documented and dated.
- [ ] Single variable; control vs. variant clearly defined.
- [ ] Sample size and significance shown, not asserted.
- [ ] Segmented by traffic source and locale — no Simpson's-paradox surprises.
- [ ] Refund-rate and review delta checked over a meaningful post-window.
- [ ] Locale tags / metadata correct for every shipped market.
- [ ] Handoff to [steam-page-manager](../steam-page-manager/) for actual publish; not freezing a launch/festival window without [marketing-director](../marketing-director/) sign-off.

## Common mistakes (do not commit these)
- **Chasing vanity impressions.** A million wrong-audience views is a liability that inflates refunds — not a trophy.
- **P-hacking / peeking.** Watching the test until it crosses significance, then stopping. This manufactures false winners.
- **Optimizing the top, ignoring the bottom.** Lifting clicks with a misleading capsule while refunds and one-star reviews quietly accumulate (Prime Directive #1).
- **Multi-variable tests** dressed up as A/B — unattributable.
- **Averaging across segments** and missing that the winning variant repels your target player.
- **"Translation = localization."** Literal strings, wrong currency, missing local search keywords = lost discoverability.
- **Confusing wishlist and conversion problems** — applying a price fix to a screenshot problem.

## KPIs
- **Wishlist conversion rate** (primary north-star).
- **Page-visit → wishlist rate** (owned-page health, with [steam-page-manager](../steam-page-manager/)).
- **Store conversion rate** (wishlist/visit → purchase).
- **Refund rate** (the truth-serum guardrail — watched as carefully as any growth metric).
- **Localized-market lift** vs. home locale per priority market.
- **Impression → page-visit CTR** (diagnostic, never a goal in isolation).

## Best practices
- Tune the page *before* the spotlight: have winning variants in place ahead of Next Fest / seasonal sales (timing from [../../10-memory/roadmap.md](../../10-memory/roadmap.md)).
- Keep an experiment backlog ranked by expected impact × ease, not by who shouted loudest.
- Always pair a number with its qualitative *why* from [../../10-memory/community-feedback.md](../../10-memory/community-feedback.md).
- Treat every storefront as its own funnel — Steam, Epic, console, and mobile players convert differently.
- When you can't test rigorously (console storefronts), say so plainly and label the confidence — honest weak evidence beats fake certainty.
