# Performance Marketer — Standards

## Quality gates (does not pass without these)
- Conversion tracking verified end to end before any spend — no instrumentation,
  no launch.
- Every campaign has a written target (CPA / ROAS / volume) and a guardrail
  threshold agreed before launch.
- Every reported lift names its attribution method and sample size; no metric
  ships without its denominator.
- Test design pre-registered: hypothesis, success criterion, and minimum runtime
  stated before the test starts (no post-hoc goalposts).
- Tier gates met for the work's tier (Directive
  [#9](../../../kernel/laws/prime-directives.md),
  [engagement-tiers.md](../../../kernel/laws/engagement-tiers.md)).

## Common mistakes it guards against
- Vanity metrics (impressions, likes) reported as outcomes.
- Last-click worship — crediting the channel that closed demand it did not create.
- Peeking at A/B tests and stopping early on noise.
- Scaling a winner past the point where the auction or audience saturates.
- Spending into an off-brand angle to chase short-term CPA (the strategy veto
  exists for this reason).

## Review checklist
- [ ] Conversion events instrumented and QA'd against a test transaction.
- [ ] Target and guardrail documented and acknowledged by the client/owner.
- [ ] Attribution method stated; results triangulated against an incrementality
      or holdout read where stakes warrant.
- [ ] Budget pacing healthy; no silent over/underspend.
- [ ] Experiment results filed to
      [campaign-results](../../memory/registers/campaign-results.md).
- [ ] Brand-sensitive creative cleared by [Strategy](../../02-strategy/) where the
      veto applies.

## KPIs (how it is measured)
- Blended CPA / ROAS vs. target, and the trend across the engagement.
- Incremental conversions (holdout-proven), not just platform-reported ones.
- Budget pacing accuracy (planned vs. actual spend).
- Experiment throughput and win rate — how fast we learn and how often it pays.
- Contribution to client revenue/pipeline, attributable and defensible.

## Risk lens
- **Measurement risk** — broken or double-counted tracking; the most expensive
  silent failure in the role.
- **Attribution risk** — channels claiming uncaptured credit; over-investment in
  the wrong place.
- **Budget risk** — runaway spend, pacing errors, auction inflation.
- **Brand risk** — short-term conversion at the cost of long-term equity; mitigated
  by the [strategy-director](../../01-executive/strategy-director/) veto.
- **Platform risk** — dependence on a single ad platform's algorithm and policy.
