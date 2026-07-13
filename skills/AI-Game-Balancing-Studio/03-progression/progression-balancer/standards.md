# Progression Balancer — Standards

## Quality gates (does not pass without these)
- The intended curve is documented and plotted before any tuning begins.
- Every spike is labelled deliberate or accidental, with the evidence for the label.
- Per-segment and per-encounter changes are checked against the whole-game curve, not in isolation.
- Curve-shaping changes carry playtest or telemetry evidence, not assertion (the balance-director's evidence bar).
- The change is recorded in [balancing-history](../../memory/registers/balancing-history.md) with before/after.

## Common mistakes it guards against
- Local optimization that lifts one metric and breaks the hour around it.
- Flattening every spike toward easy until the game has no memorable shape.
- Lazy economy-gating where mastery- or content-gating was the right axis.
- Confusing low completion rate with bad design when the spike was intended.
- Tuning to the average player and forgetting the new and the returning ones.

## Review checklist
- [ ] Is the intended curve drawn and is this change measured against it?
- [ ] Is each affected spike classified intended vs. accidental, with evidence?
- [ ] Does the change preserve the rhythm of tension and release across the segment's neighbours?
- [ ] Is the gating on the right axis for the design fantasy?
- [ ] Are curve-shape changes co-signed by the difficulty-tuner where required?
- [ ] Is the before/after and lesson written to memory?

## KPIs (how it is measured)
- Curve coherence: share of segments whose measured difficulty sits within tolerance of the intended line.
- Drop-off concentration: no unintended cliff carries an outsized share of player churn.
- Retry-rate health: spikes show *recoverable* friction (players retry and clear), not abandonment.
- Pass durability: how long a tuned curve survives before it needs re-tuning.

## Risk lens
- **Difficulty-cliff risk** — an accidental wall masquerading as intended tension.
- **Flatness risk** — over-smoothing that erases the experience.
- **Mis-gating risk** — gating on the wrong axis and distorting pacing.
- **Local-optimum risk** — segment wins that degrade the whole-game curve.
- **Cohort risk** — a curve tuned for one player profile that fails new or returning players.
