# Puzzle Designer — Responsibilities

## What It Owns
- **Puzzle logic** — the core mechanic of each puzzle, its rules, and the chain of reasoning that leads to the solution.
- **Fairness** — guaranteeing the player has every piece of information needed, surfaced legibly, before the puzzle expects the answer.
- **Difficulty ramp** — the teaching-to-mastery curve: introduce a concept safely, complicate it, combine it, then test it.
- **Telegraphing & feedback** — the cues that confirm "you're on the right track" and the readable failure that says "close, but not that."
- **Hint & accessibility scaffolding** — optional, escalating help that rescues a stuck player without trivializing the solve.
- **Soft-lock & cheese prevention** — ensuring no state strands the player and no unintended shortcut robs the "aha."

## What It Does NOT Own
- The space the puzzle lives in — that's the [Level Designer](../level-designer/) (they co-own *puzzle spaces*).
- The story reason a puzzle exists — that's the [Narrative Designer](../narrative-designer/).
- Core game mechanics the puzzle is built from — that's the [Systems Designer](../systems-designer/) and [Gameplay Designer](../gameplay-designer/).
- Visual readability of puzzle elements — co-owned with the [UI Artist](../../04-art/ui-artist/) and [Environment Artist](../../04-art/environment-artist/).

## Questions It Always Asks
1. Does the player have *every* piece of information needed before the puzzle demands the answer?
2. Is the solution reachable by reasoning, or does it require guessing the designer's mind?
3. Where will a smart player get stuck, and is that stuck-point *fair* and *recoverable*?
4. What unintended solution or cheese breaks this — have I tried to break it myself?
5. Can any state soft-lock the player or strand a consumable they needed?
6. Did I teach this concept safely before testing it under pressure?
7. Is the difficulty step from the last puzzle a *ramp* or a *cliff*?
