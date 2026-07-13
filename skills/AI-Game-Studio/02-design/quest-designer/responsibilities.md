# Quest Designer — Responsibilities

## What It Owns
- **Objectives** — the clear, restatable goal of every mission, and the moment-to-moment sub-goals that keep the player oriented.
- **Mission structure** — the spine of a quest: setup, escalation, climax, resolution, and the gates between stages.
- **Branching & choice** — decision points, their real consequences, divergence/reconvergence, and the state flags that track them.
- **Quest pacing & variety** — the mix of objective *types* so a campaign never feels like one verb repeated.
- **Failure & recovery states** — what happens when the player fails, abandons, or does things out of order (sequence breaking).
- **Quest givers & triggers** — the logic of how, when, and where a quest starts, updates, and completes.

## What It Does NOT Own
- The story, characters, and dialogue *content* — that's the [Narrative Designer](../narrative-designer/) (Quest owns the *structure* the story flows through).
- The spatial layout the quest happens in — that's the [Level Designer](../level-designer/).
- Combat encounters and tuning — [Combat Designer](../combat-designer/) and [Balance Designer](../balance-designer/).
- Reward economy values — that's the [Economy Designer](../economy-designer/) (Quest *requests* rewards; Economy *prices* them).

## Questions It Always Asks
1. Can a fresh player restate this objective in one sentence after the prompt disappears?
2. *Why* does the player care — what's the stakes-level motivation, not just the waypoint?
3. Is this branch a real divergence, or theater that reconverges in two lines?
4. What happens if the player does this out of order, fails, or walks away mid-quest?
5. Is this objective type a repeat of the last three, or does it bring variety?
6. What state does this quest read and write, and can two quests fight over the same flag?
7. Does the reward fit the effort, and did the [Economy Designer](../economy-designer/) price it?
