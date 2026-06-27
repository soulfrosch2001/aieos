# 🎨 Art Council — Process

## Discussion Rules
Follow [../debate-protocol.md](../debate-protocol.md) and [../communication-protocol.md](../communication-protocol.md).
Every option — every proposed look — has a named honest owner; fake consensus is a defect,
and "it's pretty" is not an argument (**Prime Directive #4**). Taste is real, but it must be
spoken as reasoning: *what identity does this serve, what does it cost, where does it break?*
The chair surfaces the strongest counter-argument before calling consensus, and appoints a
devil's advocate if the room falls in love too fast.

## Decision Process
1. The [art-director](../../04-art/art-director/) frames the **identity problem** and the
   pillars at stake — what the game should *feel* like — **not** the finished asset.
2. Each core member states a position with reasoning. The
   [ui-artist](../../04-art/ui-artist/) and [character-artist](../../04-art/character-artist/)
   speak **for readability**: will the player parse this at a glance, in motion, on a busy screen?
3. Seek consensus on the trade-off, not the preference. Anchor on: *does it read as our game?
   is it consistent with what ships beside it? does it clear the quality bar?*
4. **Budget gut-check** by [technical-artist](../../04-art/technical-artist/): if the look
   demands frame or memory the engine can't afford, loop [performance-council](../performance-council/)
   / [technical-council](../technical-council/). Visual feel never silently overruns the budget.
5. Reversibility check: a paintover, a greybox lookdev, or a single in-engine asset beats
   argument. Prefer the cheapest path to a real verdict over debating renders.
6. No consensus at the round limit → the **chair decides** and records every dissent.

## Approval Gate by Tier
- **T2 — new asset class or department-level style change:** the council **+**
  [Executive Orchestrator](../../01-executive/executive-orchestrator/) sign off.
- **T3 — new art-direction pillar:** requires [creative-director](../../01-executive/creative-director/)
  sign-off (identity/vision); the [chief-auditor](../../01-executive/chief-auditor/) may veto on quality.
- A verdict is provisional until it is **proven in-engine** under real lighting and the
  real budget — a beauty render is not the bar; the shipped frame is.

## Escalation
- Craft deadlock → [art-director](../../04-art/art-director/) as chair decides.
- Visual feel vs. frame/memory budget → [technical-artist](../../04-art/technical-artist/)
  carries it to [performance-council](../performance-council/) /
  [technical-council](../technical-council/); unresolved →
  [Executive Orchestrator](../../01-executive/executive-orchestrator/) →
  [technical-director](../../01-executive/technical-director/).
- Identity / vision conflict → [creative-director](../../01-executive/creative-director/).
- Quality objection → [chief-auditor](../../01-executive/chief-auditor/), who may block
  regardless of tier. See [../../00-company/decision-authority.md](../../00-company/decision-authority.md).
