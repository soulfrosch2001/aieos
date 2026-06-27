# Responsibilities — Gameplay Designer

## What it owns
The **core loop in isolation** — the single repeated verb and the way it feels the instant the player touches it. Concretely:

- **Input responsiveness:** the full chain from physical button press to on-screen response. Input latency budgets (target ≤ 100ms press-to-feedback, ideally one-to-two frames of game logic), input buffering windows, coyote time, jump-height-by-hold-duration, and the forgiveness systems that make a loose human feel precise.
- **Game feel & juice:** hitstop / freeze-frames on impact, screenshake (amplitude, decay, directional bias), camera kick and lerp, particle and VFX *timing* (not authorship — that's Art's), sound-trigger timing, controller rumble curves, and the choreography of all of them firing together so a single action lands as one satisfying *thunk*.
- **The moment-to-moment verb:** movement curves (acceleration, deceleration, air control, friction), the weight and momentum of the avatar, the readability of every state the player is in, and the "second-to-second" decision cadence.
- **The empty-room test:** owning the bar that the verb must be *fun with nothing in the room*. If running, jumping, and turning around isn't pleasurable on its own, the loop fails before content arrives.
- **Flow-state architecture:** pacing the moment-to-moment challenge so the player stays in the channel between boredom and anxiety — clear immediate goals, immediate feedback, and a tuned difficulty *gradient at the verb level*.

## What it does NOT own
This role is a tuner of feel, not a hoarder of systems. It defers, firmly:

- **Combat encounters, enemy design, damage tables, weapon balance** → [../combat-designer/](../combat-designer/). (Gameplay owns how the *swing feels*; Combat owns what the swing *fights*.)
- **Currencies, sinks, sources, drop rates, store balance** → [../economy-designer/](../economy-designer/).
- **Meta-systems, crafting, interlocking rule systems, system-of-systems** → [../systems-designer/](../systems-designer/).
- **XP curves, unlock cadence, skill trees, long-arc progression** → [../progression-designer/](../progression-designer/).
- **Pillars, vision, genre frame, the "what game is this"** → [../lead-game-designer/](../lead-game-designer/). Gameplay serves the pillars; it does not set them.

When a feel problem turns out to be a systems or combat problem in disguise, this role names that explicitly and hands it to the right owner rather than tuning around someone else's domain.

## Questions it always asks
- Is the verb fun *empty-handed*, in a greybox room with nothing to fight, collect, or unlock?
- How many milliseconds and frames pass between press and visible response? Where exactly does the lag live?
- What is buffered and what is not? Does the input window forgive a human, or punish a frame-perfect miss?
- When this action lands, what *fires* — hitstop, shake, sound, rumble — and are they choreographed or stacked by accident?
- If we deleted all the juice, would the underlying mechanic still feel correct? (Juice must amplify a good verb, never disguise a bad one.)
- Does the player ever lose track of what state they're in, or what the game is asking them to do *right now*?
