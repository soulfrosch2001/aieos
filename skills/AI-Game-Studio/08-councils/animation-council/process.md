# 🕺 Animation Council — Process

## Discussion Rules
Follow [../debate-protocol.md](../debate-protocol.md) and [../communication-protocol.md](../communication-protocol.md).
Every option has a named honest owner; fake consensus is a defect; dissent is recorded,
never suppressed (**Prime Directive #4**). The chair surfaces the strongest counter-argument
before calling consensus, and appoints a devil's advocate if agreement comes too fast —
animators agreeing instantly that "it looks great" is exactly when the
[gameplay-programmer](../../03-programming/gameplay-programmer/) should ask what it *costs the player*.

## Decision Process
1. The [animator](../../04-art/animator/) frames the motion problem — the moment, the
   character, the feel target — **not** the keyframes.
2. Each core member states a position with reasoning. The
   [gameplay-programmer](../../03-programming/gameplay-programmer/) speaks **for input**:
   how many frames before the action fires? can the player cancel out? does the wind-up
   eat responsiveness?
3. Seek consensus on the trade-off, not the preference. Anchor on the fault line:
   *feel/fidelity vs. responsiveness/control*. When they collide, **responsiveness usually
   wins** (Prime Directive #1) — and the decision loops [gameplay-council](../gameplay-council/).
4. **Rig & pipeline gut-check** by [rigging-artist](../../04-art/rigging-artist/) and
   [technical-artist](../../04-art/technical-artist/): if the feel demands rig changes or a
   state-machine/blend-tree topology the pipeline can't cheaply give, say so now.
5. **Cost check:** if the motion's fidelity threatens frame budget, loop
   [performance-council](../performance-council/) before committing.
6. Reversibility check: a quick blockout-and-playtest beats argument. Prefer the cheapest
   path to a real verdict in-hand.
7. No consensus at the round limit → the **chair decides** and records every dissent.

## Approval Gate by Tier
- **T2 — a character's animation set, or a new locomotion/combat anim system:** the council
  **+** [Executive Orchestrator](../../01-executive/executive-orchestrator/) sign off. Any
  responsiveness trade-off must be co-signed by [gameplay-council](../gameplay-council/).
- **T3 — a new animation pipeline or motion pillar:** requires
  [art-director](../../04-art/art-director/) sign-off (the bar) and
  [creative-director](../../01-executive/creative-director/) sign-off (vision); the
  [chief-auditor](../../01-executive/chief-auditor/) may veto.
- A verdict is provisional until a **playtest** confirms the motion feels right in hand
  (see [../../12-systems/playtest-system/](../../12-systems/playtest-system.md)).

## Escalation
- Craft deadlock (rig vs. animation vs. tech-art) → [animator](../../04-art/animator/) as chair decides.
- Feel vs. responsiveness → loop [gameplay-council](../gameplay-council/); unresolved →
  [Executive Orchestrator](../../01-executive/executive-orchestrator/) →
  [creative-director](../../01-executive/creative-director/).
- Fidelity vs. frame budget → [performance-council](../performance-council/) /
  [technical-council](../technical-council/) →
  [technical-director](../../01-executive/technical-director/).
- Quality objection → [chief-auditor](../../01-executive/chief-auditor/), who may block
  regardless of tier. See [../../00-company/decision-authority.md](../../00-company/decision-authority.md).
