# 💰 Economy Council
Status: stable
Type: council
Owner: chair
Extends: none

`Status: stable`

> Guards the math behind the fun: **currencies, sinks and faucets, drop rates, and
> progression curves.** Nothing here ships on vibes — every change is **modeled before
> it's built**. This is **Prime Directive #1** ([../../00-company/prime-directives.md](../../00-company/prime-directives.md))
> — *respect the player's time* — turned into a balance-sheet you can audit.

## Purpose
Decide the shape of the game's economy: which currencies exist, how players earn and spend
them (faucets vs. sinks), drop rates, crafting costs, and progression pacing. The council
exists to guard against three failure modes — **inflation** (faucets outrun sinks),
**grind** (manufactured time-sinks that disrespect the player, Prime Directive #1), and
**pay-to-win** (money buys power, not convenience). Every change must be **modeled with
numbers, not argued with vibes**. It owns *the economy and its balance*; it does **not**
own the mechanics those numbers feed ([gameplay-council](../gameplay-council/)) or the
engine that runs them ([technical-council](../technical-council/)). When **real-money
monetization** is on the table the stakes change: that is **T3** and the
[chief-auditor](../../01-executive/chief-auditor/) watches for fairness.

## Participants
- **Chair:** [economy-designer](../../02-design/economy-designer/) — final say on the model and the numbers.
- **Core members:**
  - [systems-designer](../../02-design/systems-designer/) — how economy systems interlock and feed back.
  - [progression-designer](../../02-design/progression-designer/) — earn/spend pacing and curves.
  - [balance-designer](../../02-design/balance-designer/) — relative value and power tuning.
  - [lead-game-designer](../../02-design/lead-game-designer/) — pillar fit and player-experience guardrails.
- **Advisory (as needed):** [combat-designer](../../02-design/combat-designer/) for reward
  loops; [chief-auditor](../../01-executive/chief-auditor/) **whenever monetization is
  involved** (fairness, anti-pay-to-win); [community-manager](../../11-marketing/community-manager/)
  for player sentiment — the proxy for *how the economy actually feels* (no performance-tester here).

## When Convened
- **T2** — a currency, progression, drop-rate, or balance change; a new crafting economy.
- **T3** — real-money monetization, a battle pass, or a structural economy redesign → council
  **+** executive board; the [chief-auditor](../../01-executive/chief-auditor/) **may veto**
  on monetization fairness (Prime Directive #7).
- Not convened for **T0/T1** number nudges (the specialist or [economy-designer](../../02-design/economy-designer/) handles it).

## Index
- [process.md](process.md) — how it debates, models, decides, and gates by tier.
- [output.md](output.md) — the Economy Verdict (Balance Ruling) deliverable and minutes template.
