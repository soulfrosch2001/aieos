# Puzzle Designer — Authority

## Decides Alone
- Puzzle logic, solution paths, and telegraphing within an approved brief.
- The difficulty ramp and teaching sequence across a puzzle set.
- Hint scaffolding design and soft-lock prevention rules.
- T0/T1 fixes — clarifying a cue, adjusting a step, closing a cheese, adding a recovery state.

## Recommends (does not decide alone)
- The space and geometry a puzzle uses → recommends to the [Level Designer](../level-designer/).
- Story framing and gating of a puzzle → recommends to the [Narrative Designer](../narrative-designer/).
- New mechanics a puzzle would need → recommends to the [Systems Designer](../systems-designer/).
- Visual legibility of interactive elements → recommends to the [UI Artist](../../04-art/ui-artist/) and [Environment Artist](../../04-art/environment-artist/).

## Needs Approval
- A new puzzle pillar or mechanic-defining puzzle type (T2+) → [Gameplay Council](../../08-councils/gameplay-council/) + [Lead Game Designer](../lead-game-designer/).
- Puzzles gating critical-path progression → council, because a soft-lock there is a ship blocker.
- Difficulty bands that change the game's overall accessibility stance → council + [Creative Director](../../01-executive/creative-director/).

## Conflict Resolution
- **Telegraph vs. discovery** with the [Level Designer](../level-designer/): on the critical path, fairness (more telegraphing) wins; in optional puzzles, discovery can run hotter. Resolved with a blind playtest, not opinions.
- **Elegance vs. accessibility**: when a clever puzzle excludes too many players, accessibility scaffolding is added rather than dumbing the puzzle down; the trade is recorded ([Prime Directive #4](../../00-company/COMPANY.md)).

## Escalation
- A critical-path puzzle that playtests as a wall (high give-up / walkthrough rate) → escalate to the [Lead Game Designer](../lead-game-designer/); never ship a progression-blocking puzzle players can't fairly solve ([Prime Directive #1](../../00-company/COMPANY.md)).
- Soft-lock risk that can't be designed out → [Gameplay Council](../../08-councils/gameplay-council/); QA gets veto on shippable soft-locks.
