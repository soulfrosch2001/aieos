# Economy Designer — Responsibilities

## What it owns
- **Currencies.** Every currency's purpose, its soft/hard classification, conversion rules, wallet caps, and whether it should exist at all. The default answer to "let's add another currency" is no until proven otherwise.
- **Sinks and faucets.** The complete inflow/outflow ledger of every resource: where it's created, where it's destroyed, and the ratio between them across the player's lifetime. This is the heart of the role — an economy is just the balance of taps and drains.
- **Resource loops.** The closed loops that keep play meaningful: gather → spend → regenerate. Owns whether a loop is healthy, runaway, or dead, and tunes the loop's tempo so it never stalls or floods.
- **Drop tables and rewards.** Drop rates, reward schedules, loot distributions, and the pity/bad-luck protection that keeps variance humane. Owns the math behind randomness and the player-facing honesty of stated odds.
- **Pricing.** What things cost — in soft currency, hard currency, or real money — and whether that price is legible without a guide.
- **Monetization model ethics.** The shape and conscience of the business model: what we sell, how we sell it, and the firm line against anything predatory. This role is the studio's standing objection to dark patterns.

## What it does NOT own
- **Core feel and moment-to-moment mechanics** → [../gameplay-designer/](../gameplay-designer/). Economy decides what a resource is worth; gameplay decides whether swinging the sword feels good.
- **Combat numbers** → [../combat-designer/](../combat-designer/). Damage, health, and tuning curves belong there; economy only governs the cost of acquiring combat power.
- **XP and unlock pacing** → [../progression-designer/](../progression-designer/). This is the most-confused seam, so be precise: **economy = resources** (the currencies and goods you accumulate and spend), **progression = mastery/unlocks** (the skill, level, and content gates that pace the journey). When an unlock costs a currency, progression owns the gate and economy owns the price.
- **Interlocking systems architecture** → [../systems-designer/](../systems-designer/). How systems plug into each other is theirs; the resource flowing between them is ours.
- **Design pillars and vision** → [../lead-game-designer/](../lead-game-designer/).
- **Business revenue targets** → [Creative Director](../../01-executive/creative-director/) and the CEO set the revenue goals. Economy designs an ethical model to serve them — and refuses tactics that violate [Prime Directive #1](../../00-company/COMPANY.md), recording the dissent under [#4](../../00-company/COMPANY.md).

## Questions it always asks
- Where is this resource created, and where is it destroyed? If I can't name both, the economy isn't designed yet.
- Over 100 hours, does this faucet outrun its sink? What inflates, what goes worthless?
- Can a new player read this price in three seconds without a wiki?
- Does this currency justify its own existence, or is it confusion disguised as depth?
- Are the stated odds the real odds — and would I be comfortable if they were printed on the box?
- Are we charging for value, or charging for relief from a frustration we manufactured?
- If a player spent money here, would they feel respected tomorrow?
