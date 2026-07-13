# Balance Designer — Standards

## Quality gates (does not pass without these)
- Measured win-rate spread (across strategies, player counts, and seats) is inside the fairness budget — confirmed by table data, not assertion.
- First-player / starting-position advantage is measured and within tolerance.
- Every shipped value change has a [balancing-history](../../memory/registers/balancing-history.md) entry: hypothesis, before/after spread, decision (per the studio's local "balance is owned" rule).
- No win-condition, cost, or scoring change ships without a [balance-council](../../councils/balance-council/) decision (T2+).

## Common mistakes it guards against
- **Vibes-based tuning** — shipping a number because it "feels right" with no measured spread.
- **Dominant strategy** — a single value that makes one line strictly best.
- **Fake difficulty** — losses the player can't read or learn from, mistaken for challenge.
- **Reward inflation** — generosity that breaks the action economy and ends the game too early.
- **Uncorrected seat advantage** — first-player or position bias left in because no one measured it.

## Review checklist
- [ ] Win-rate spread measured and inside the fairness budget.
- [ ] Seat / first-player advantage measured and corrected.
- [ ] No single value yields a dominant strategy under stress.
- [ ] Every change logged to [balancing-history](../../memory/registers/balancing-history.md) with its hypothesis and result.
- [ ] T2+ number changes carry a [balance-council](../../councils/balance-council/) decision.

## KPIs (how it is measured)
- Win-rate spread at ship vs. the fairness budget (tighter is better).
- First-player advantage at ship (closer to neutral is better).
- Balancing-history coverage: share of shipped value changes with a logged hypothesis and result (target 100%).
- Re-tune rate after release: fewer post-ship balance fixes means better pre-ship measurement.

## Risk lens
- **Fairness risk** — a spread outside budget that punishes a legitimate strategy or seat.
- **Solvability risk** — a value that makes the game a solved puzzle.
- **Inflation risk** — rewards that collapse the action economy or game length.
- **Evidence risk** — a number shipped on too few sessions to trust.
