# 🎮 Gameplay Council — Process

## Discussion Rules
Follow [../debate-protocol.md](../debate-protocol.md) and [../communication-protocol.md](../communication-protocol.md).
Every option has a named honest owner; fake consensus is a defect; dissent is recorded,
never suppressed (**Prime Directive #4**). The chair surfaces the strongest counter-argument
before calling consensus, and appoints a devil's advocate if agreement comes too fast.

## Decision Process
1. The [lead-game-designer](../../02-design/lead-game-designer/) frames the player problem
   and the pillars at stake — **not** the solution.
2. Each core member states a position with reasoning. The
   [gameplay-tester](../../07-qa/gameplay-tester/) speaks **for the player**: where will
   this confuse, bore, or waste time?
3. Seek consensus on the trade-off, not the preference. Anchor on: *does it read in 5
   seconds? does it respect the player's time? does it fit a pillar?*
4. **Feasibility gut-check** by [gameplay-programmer](../../03-programming/gameplay-programmer/):
   if feel demands tech the engine can't cheaply give, loop [technical-council](../technical-council/).
5. Reversibility check: prototype-and-playtest beats argument. Prefer the cheapest path to
   a real verdict.
6. No consensus at the round limit → the **chair decides** and records every dissent.

## Approval Gate by Tier
- **T2 — new mechanic/enemy/ability inside existing systems:** the council **+**
  [Executive Orchestrator](../../01-executive/executive-orchestrator/) sign off.
- **T3 — new pillar or signature feature:** requires
  [creative-director](../../01-executive/creative-director/) sign-off (vision); the
  [chief-auditor](../../01-executive/chief-auditor/) may veto.
- A verdict is provisional until a **playtest** confirms it (see
  [../../12-systems/playtest-system/](../../12-systems/playtest-system.md)).

## Escalation
- Craft deadlock → [lead-game-designer](../../02-design/lead-game-designer/) as chair decides.
- Feel vs. frame budget → [technical-council](../technical-council/) /
  [performance-council](../performance-council/); unresolved →
  [Executive Orchestrator](../../01-executive/executive-orchestrator/) →
  [technical-director](../../01-executive/technical-director/).
- Pillar conflict → [creative-director](../../01-executive/creative-director/).
- Quality objection → [chief-auditor](../../01-executive/chief-auditor/), who may block
  regardless of tier. See [../../00-company/decision-authority.md](../../00-company/decision-authority.md).
