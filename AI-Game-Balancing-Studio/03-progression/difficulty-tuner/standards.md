# Difficulty Tuner — Standards

## Quality gates (does not pass without these)
- Every tune states its target feel and the metric that proves the target was hit.
- Changes are minimal and reversible; the specific knob moved is recorded.
- Per-segment effects are instrumented (clear rate and death-cause split, at minimum).
- Difficulty-mode spread is checked for fairness across the full player range.
- Any tune that disturbs a neighbour is escalated as a curve-shape change, not shipped solo.

## Common mistakes it guards against
- Bundled changes where you cannot tell which knob produced the effect.
- Tuning to the average and breaking the new player or the expert.
- Lifting a local clear rate at the cost of the surrounding curve.
- Keeping an "intended" spike that has no measurement behind it.
- Mode spreads that make a lower difficulty feel humiliating or a higher one feel impossible.

## Review checklist
- [ ] Is the target feel stated and the proving metric named?
- [ ] Is the change the smallest that lands it, and is it reversible?
- [ ] Is the per-segment effect instrumented and reported with a death-cause breakdown?
- [ ] Is the difficulty-mode spread fair end to end?
- [ ] Are neighbour-disturbing tweaks co-signed by the progression-balancer?
- [ ] Is the knob, delta, and measured effect written to memory?

## KPIs (how it is measured)
- Tune accuracy: share of tunes that hit their stated target feel on first measurement.
- Change isolation: share of changes whose effect can be attributed to a single knob.
- Mode fairness: spread across difficulty modes within agreed fairness tolerances.
- Recoverable friction: spikes that show retry-and-clear behaviour rather than abandonment.

## Risk lens
- **Over-tuning risk** — bundled changes that obscure cause and effect.
- **Cohort risk** — a tune that serves the average and fails the edges.
- **Local-win risk** — segment clear-rate gains that degrade the curve.
- **Unmeasured-spike risk** — keeping difficulty that no data justifies.
- **Mode-spread risk** — unfair gaps between difficulty settings.
