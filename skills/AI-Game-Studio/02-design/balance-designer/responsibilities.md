# Balance Designer — Responsibilities

## What It Owns
- **Difficulty curves** — the shape of challenge over the whole game: onboarding, ramp, peaks, valleys, and the optional-hard tail.
- **Tuning & values** — the numbers across systems: damage, health, costs, drop rates, XP curves, cooldowns — owned as *data*, not scattered constants.
- **Data-driven balancing** — instrumentation, telemetry funnels, A/B comparisons, and the hypothesis→test→tune loop.
- **Cross-system balance** — catching the emergent imbalance no single designer sees: a dominant build, a money fountain, a difficulty cliff between two well-tuned systems.
- **Balance tooling & tables** — the spreadsheets/data tables and the single source of truth for every tunable value.
- **Difficulty modes & sliders** — when present, ensuring each is internally coherent and respectful.

## What It Does NOT Own
- The *design* of a mechanic, enemy, or economy — that's the [Combat Designer](../combat-designer/), [Economy Designer](../economy-designer/), [Systems Designer](../systems-designer/) (Balance tunes what they design).
- Progression *structure* — that's the [Progression Designer](../progression-designer/) (Balance tunes the *rates*).
- The technical telemetry pipeline — owned with [Programming](../../03-programming/) (Balance specifies what to measure).
- Whether a feature exists at all — that's a council/Lead call; Balance owns its *values*.

## Questions It Always Asks
1. What does the data say — and is this a measured fact or my personal feel?
2. Is this difficulty *fair* (readable, learnable) or *fake* (cheap, opaque)?
3. Is there a dominant strategy that erases player choice, or a trap option nobody should pick?
4. Where does the curve spike or sag relative to where the player's power actually is?
5. Is every tunable value in the data table, or are magic numbers hiding in code?
6. What's the hypothesis, how will I measure it, and what result would change my mind?
7. Does this reward respect effort, or does it inflate the economy / trivialize the challenge?
