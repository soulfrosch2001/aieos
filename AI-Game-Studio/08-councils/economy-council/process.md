# 💰 Economy Council — Process

## Discussion Rules
Follow [../debate-protocol.md](../debate-protocol.md) and [../communication-protocol.md](../communication-protocol.md).
Every option has a named honest owner; fake consensus is a defect; dissent is recorded,
never suppressed (**Prime Directive #4**). The chair surfaces the strongest counter-argument
before calling consensus, and appoints a devil's advocate if agreement comes too fast.
One rule overrides debate here: **a number is not a position until it's modeled** — assertions
about inflation, grind, or value must arrive with the math attached.

## Decision Process
1. The [economy-designer](../../02-design/economy-designer/) frames the economic problem —
   the imbalance, the player cost, or the opportunity — **not** the solution.
2. Each core member states a position with reasoning. The
   [progression-designer](../../02-design/progression-designer/) checks the **earn/spend
   pacing**; the [balance-designer](../../02-design/balance-designer/) checks **relative
   value**. Where it touches sentiment, [community-manager](../../11-marketing/community-manager/)
   speaks **for how it feels to the player**: does this read as fair, or as a grind?
3. **Model it before shipping it.** No verdict passes without sinks-vs-faucets math: does
   the faucet outrun the sink (inflation)? does the curve manufacture grind (Prime Directive #1)?
   Numbers on the table, not vibes.
4. **Fairness gut-check** — if real money buys *power* rather than *convenience or time*,
   it's pay-to-win; loop the [chief-auditor](../../01-executive/chief-auditor/) **now**, not later.
5. Reversibility check: a tunable config beats a baked-in number. Prefer the change you can
   roll back from live telemetry, and name the metric that would trigger a revert.
6. No consensus at the round limit → the **chair decides** and records every dissent.

## Approval Gate by Tier
- **T2 — currency/progression/drop-rate/balance change or new crafting economy:** the
  council **+** [Executive Orchestrator](../../01-executive/executive-orchestrator/) sign off,
  with the economic model attached.
- **T3 — monetization, battle pass, or structural economy redesign:** requires executive-board
  sign-off; the [chief-auditor](../../01-executive/chief-auditor/) **may veto** on
  monetization fairness — only a recorded **human risk-acceptance** overrides it (Prime Directive #7).
- A verdict is provisional until the **model is validated** (and, post-launch, until live
  telemetry confirms the curve held). Every ruling is logged to
  [../../10-memory/balancing-history.md](../../10-memory/balancing-history.md).

## Escalation
- Modeling deadlock → [economy-designer](../../02-design/economy-designer/) as chair decides.
- Economy vs. mechanic conflict → [gameplay-council](../gameplay-council/); unresolved →
  [Executive Orchestrator](../../01-executive/executive-orchestrator/) →
  [creative-director](../../01-executive/creative-director/) for pillar/vision.
- Monetization fairness → [chief-auditor](../../01-executive/chief-auditor/), who may block
  regardless of tier (Prime Directives #1, #7).
- See [../../00-company/decision-authority.md](../../00-company/decision-authority.md).
