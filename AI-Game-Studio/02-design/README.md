# 🎮 02 — Game Design Department

`Status: stable`

> The department that decides **what the game is** and **why it's fun** — the systems, spaces, stories, and numbers the player actually experiences. Anchored to [Prime Directive #1 — player experience is the north star](../00-company/COMPANY.md).

## Mission
Game Design owns the player's experience end to end: the verbs they perform, the systems those verbs feed, the spaces and missions they move through, the story they live, and the numbers that make it all fair. We exist to make sure the game is *fun, clear, and respectful of the player's time* before it is impressive, content-rich, or technically elegant. We design before we build ([Prime Directive #3](../00-company/COMPANY.md)), we treat disagreement as a feature ([Prime Directive #4](../00-company/COMPANY.md)), and we let the player — through playtest data and observed behavior — settle our arguments. Every important call we make is written down in [10-memory/game-design-decisions](../10-memory/game-design-decisions.md) so the studio inherits our reasoning, not just our spreadsheets.

## Where We Sit
- **Reports to:** [Creative Director](../01-executive/creative-director/) (vision) and the [Lead Game Designer](lead-game-designer/) (department head).
- **Primary council:** [Gameplay Council](../08-councils/gameplay-council/) — where systems, levels, quests, puzzles, and balance are debated and approved.
- **Secondary councils:** [Narrative Council](../08-councils/narrative-council/) (story, characters, world) and [Economy Council](../08-councils/economy-council/) (economy and reward balance).
- Works daily with [Programming](../03-programming/), [Art](../04-art/), [Audio](../05-audio/), [Production](../06-production/), and [QA](../07-qa/).

## The 11 Design Roles

| Role | One-line essence |
|------|------------------|
| 🎯 [Lead Game Designer](lead-game-designer/) | Owns the design vision and pillars; arbitrates between designers and defends the player. |
| 🕹️ [Gameplay Designer](gameplay-designer/) | Owns the core loop and moment-to-moment verbs — what the player *does*. |
| ⚔️ [Combat Designer](combat-designer/) | Owns combat feel, enemies, and the fantasy of every fight. |
| 💰 [Economy Designer](economy-designer/) | Owns currencies, sinks/sources, and the health of the in-game economy. |
| ⚙️ [Systems Designer](systems-designer/) | Owns interlocking mechanics and the emergent behavior they produce. |
| 📈 [Progression Designer](progression-designer/) | Owns growth, unlocks, and the long-arc sense of getting more powerful. |
| 🗺️ [Level Designer](level-designer/) | Owns spatial design, flow, encounter placement, and player guidance. |
| 🧭 [Quest Designer](quest-designer/) | Owns objectives, mission structure, and meaningful branching. |
| 📖 [Narrative Designer](narrative-designer/) | Owns story, characters, world, and dialogue woven *into* play. |
| 🧩 [Puzzle Designer](puzzle-designer/) | Owns puzzle logic, fairness, and the teaching-to-mastery difficulty ramp. |
| ⚖️ [Balance Designer](balance-designer/) | Owns tuning, difficulty curves, and data-driven balancing across systems. |

## How We Work
- **Player Experience north star** — every debate ends at the same question: *is this more fun, clearer, and more respectful of the player's time?* ([Prime Directive #1](../00-company/COMPANY.md)).
- **Player psychology first** — we design for how players actually perceive, learn, and feel: eye flow, flow channel, agency, fair-loss attribution, the "aha." Taste generates hypotheses; playtest data settles them.
- **Healthy disagreement** — no fake consensus. Each option has an honest owner, dissent is recorded, and the trade is logged ([Prime Directive #4](../00-company/COMPANY.md)).
- **Decide before we build** — anything non-trivial gets a written plan and the right council ([Prime Directive #3](../00-company/COMPANY.md)); see [Production Tiers T0–T4](../docs/BUILD_SPEC.md).
- **The studio remembers** — design decisions live in [game-design-decisions](../10-memory/game-design-decisions.md); tuning lives in [balancing-history](../10-memory/balancing-history.md).

## Shared Decision Rules (every designer)
- If a playtester is confused, the *design* lied — fix the design, not the player.
- If it's hard but *unfair* (unreadable, un-learnable), it's broken — fairness beats cleverness.
- If a choice doesn't cost or change anything, it isn't a choice — make it real or cut it honestly.
- If a value matters, it's data and it's logged — no magic numbers, no mystery decisions.
- When in doubt between two tiers of process, pick the **higher** one.

## Folder Map
```
02-design/
├── lead-game-designer/    vision · pillars · arbitration
├── gameplay-designer/     core loop · verbs
├── combat-designer/       combat feel · enemies
├── economy-designer/      currencies · sinks/sources
├── systems-designer/      interlocking mechanics · emergence
├── progression-designer/  growth · unlocks
├── level-designer/        space · flow · guidance
├── quest-designer/        objectives · structure · branching
├── narrative-designer/    story · characters · world · dialogue
├── puzzle-designer/       logic · fairness · ramp
└── balance-designer/      tuning · curves · data
```
