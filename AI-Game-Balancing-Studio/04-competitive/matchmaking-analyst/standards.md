# Matchmaking Analyst — Standards

## Quality gates (does not pass without these)
- Every pairing verdict states **match-quality and queue-time together** — neither
  number alone is admissible.
- The **fairness-versus-queue-time point** is named explicitly, not left implicit.
- An apparent imbalance is given an **isolation verdict** (pairing vs unit) before
  any unit change it might explain is approved.
- Rating reads exclude **unconverged segments**; convergence state is reported.
- Every pairing change carries **match-quality evidence** before reaching the
  [balance-council](../../councils/balance-council/).

## Common mistakes it guards against
- Maximising fairness while quietly blowing the queue-time ceiling.
- Blaming units for what bad pairing caused.
- Reading the meta from a population whose ratings haven't converged.
- Letting smurfing or rating inflation masquerade as a balance signal.
- Changing pairing and unit numbers in the same pass.

## Review checklist
- [ ] Match-quality and queue-time both reported.
- [ ] Chosen point on the fairness/queue curve named.
- [ ] Isolation verdict recorded before any related unit change.
- [ ] Unconverged segments excluded and flagged.
- [ ] Inflation / smurfing checked.
- [ ] Only one knob moves, or the unit move is jointly signed with the meta-analyst.
- [ ] Evidence attached; entry filed to balancing-history and balance-decisions.

## KPIs (how it is measured)
- **Median match-quality** — close contests as a share of matches, trending up.
- **Queue-time at target fairness** — held under the agreed ceiling.
- **Misattribution rate** — unit changes later found to be pairing problems,
  trending down.
- **Rating-convergence speed** — time to a stable rating for new players.

## Risk lens
- **Fairness/queue blowout** — one optimised at the silent expense of the other.
- **Misattribution** — pairing problems mislabelled as unit imbalance.
- **Rating inflation** — drift that corrupts every downstream meta read.
- **Population thinness** — a mode too small to pair fairly.
- **Knob entanglement** — pairing and unit changes confounded in one pass.
