# Systems Designer — Standards

## Quality gates (does not pass without these)
- No dominant strategy: a recorded playtest cohort tried to break the game and found no single line that erases the others.
- Every reinforcing loop has a documented balancing brake (no unbounded snowball, no kingmaking by default).
- The system map is current and the new coupling is on it before build.
- Any numbers-dependent fairness claim is confirmed by the [balance-designer](../balance-designer/) via the [balance-council](../../councils/balance-council/).

## Common mistakes it guards against
- **Solved games** — a single optimal line that turns choice into rote.
- **Runaway leaders** — a reinforcing loop with no brake, so first blood wins the game.
- **Dead mechanics** — systems that never interact with anything and just add rules overhead.
- **Untunable design** — coupling so tight no set of numbers makes it fair; a structural defect handed to the balance-designer as if it were a math problem.

## Review checklist
- [ ] Adversarial cohort found no dominant strategy.
- [ ] Every reinforcing loop names its balancing brake.
- [ ] Degenerate interactions are logged with fixes.
- [ ] The [balance-designer](../balance-designer/) confirms the system is tunable.
- [ ] Loop-changing systems carry a [design-council](../../councils/design-council/) decision.

## KPIs (how it is measured)
- Strategy diversity at the table: number of distinct viable lines players actually use.
- Degenerate-interaction escape rate: how many broke through to a shipped version (target zero).
- Share of playtests reaching a clean, rules-unblocked finish without a stall caused by a system collision.
- Expansion interlock: expansions that extend the base interlock without breaking it.

## Risk lens
- **Solvability risk** — the game has a known best move.
- **Runaway risk** — feedback loops with no brake.
- **Complexity risk** — coupling so dense the game stops being legible at the table.
