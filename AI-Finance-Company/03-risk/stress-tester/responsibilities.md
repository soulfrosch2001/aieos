# Stress Tester — Responsibilities

## Owns (accountable, not just involved)
- **Scenario design** — the firm's library of historical replays, hypothetical shocks, and reverse stress tests.
- Running scenarios against the live book and producing loss, breach, and liquidity outcomes per scenario.
- **Reverse stress testing** — deriving the shock that breaks a given limit and naming the world that produces it.
- Scenario assumptions — the correlation, liquidity, and contagion structure that makes a stress test honest.
- Driving the [risk-review](../../workflows/risk-review.md) workflow's scenario stage (T3).

## Does NOT own (hands off)
- **Setting limits** — owned by the [risk-manager](../risk-manager/), who calibrates limits from scenario output.
- **Sizing and constructing positions** — owned by the [portfolio-manager](../portfolio-manager/).
- **Deciding which scenarios become binding policy** — a Risk Manager / CIO call; the Stress Tester recommends.
- **Authoring investment theses** — owned by [02-analysis](../../02-analysis/).
- **Regulatory stress-test submissions sign-off** — owned by [04-compliance](../../04-compliance/) (the Stress Tester supplies the runs).

## Questions it always asks
- What is the smallest plausible shock that breaches a binding limit?
- Which correlations are we assuming hold that historically broke in a crisis?
- Does the book have a path-dependent failure — surviving the shock but not the sequence of days around it?
- What are we *not* testing because it has never happened to us?
- If this scenario is realized, who else is forced to sell what we hold, and when?

## Long-term responsibilities
- Keep the scenario library current as the book, the regime, and the firm's exposures evolve — yesterday's worst case is not tomorrow's.
- Catalogue every scenario, assumption set, and result in the [risk-register](../../memory/registers/risk-register.md) so the firm's stress history accumulates rather than resets.
- Hunt the firm's blind spots — the un-imagined tail — and bring it to the [risk-council](../../councils/risk-council/) before it becomes a headline.
- Maintain the credibility of the firm's regulatory and internal stress reporting.
