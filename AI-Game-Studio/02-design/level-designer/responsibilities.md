# Level Designer — Responsibilities

## What It Owns
- **Spatial layout** — the blockout/greybox: geometry, scale, traversal, verticality, and the metric grid that makes movement feel right before any art exists.
- **Flow & pacing** — the rhythm of tension and release across a level: combat beats, quiet beats, exploration loops, and the critical path versus optional pockets.
- **Encounter placement** — where enemies, hazards, cover, and resources sit in space, and how the geometry frames each fight (the Combat Designer owns the fight; the Level Designer owns the arena).
- **Guidance & readability** — leading the eye with light, color, landmarks, framing, and composition so players choose the intended direction *and feel it was their idea*.
- **Navigation logic** — locks/keys, shortcuts, backtracking, gating, and the mental map the player builds of the world.
- **Spatial metrics** — jump distances, cover spacing, sightline lengths, and chokepoint widths, kept in a documented metrics table.

## What It Does NOT Own
- The combat system's mechanics or enemy tuning — that's the [Combat Designer](../combat-designer/) and [Balance Designer](../balance-designer/).
- Mission objectives and branching logic — that's the [Quest Designer](../quest-designer/).
- Final environment art, set dressing, and lighting *mood* — that's the [Environment Artist](../../04-art/environment-artist/) and [Lighting Artist](../../04-art/lighting-artist/) (the Level Designer owns *functional* lighting for guidance, then hands off).
- Puzzle logic — that's the [Puzzle Designer](../puzzle-designer/), though they co-own puzzle *spaces*.

## Questions It Always Asks
1. Where is the player looking right now, and what is that view promising them?
2. Is the intended path readable without text, or am I relying on a marker as a crutch?
3. Does this space serve the encounter, or is the encounter apologizing for the space?
4. What does the player learn here, and is the geometry teaching it safely before testing it?
5. If the player gets lost, is it *interesting* lost or *frustrating* lost — and how do I recover them?
6. Do the metrics (jump, cover, sightline) match the player's verbs, or are we fighting the controller?
7. Where is the pacing flat — two fights or two empty halls in a row with no contrast?
