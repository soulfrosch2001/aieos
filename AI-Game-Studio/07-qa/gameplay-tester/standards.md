# Gameplay Tester — Standards

## Quality Gates
- **Feel gate:** the core verb (jump/shoot/dash/swing) responds within an imperceptible window, with clear hit confirmation. Input that the player clearly intended is never silently eaten. No mushy, no floaty, no lag the team got numb to.
- **Fun gate:** at least one tester who played blind reports genuine "one more run" pull, and the build's joy survives past the novelty of the first session.
- **Pacing gate:** no dead minute longer than the design's intended rest beat; difficulty climbs at a learnable rate with no unexplained cliffs or coasts. Mapped on the experience graph, build over build.
- **Fairness gate:** every failure state is *earned* — the player had the information and the control to avoid it. Cheap deaths (lying hitboxes, off-screen hazards, eaten inputs) are blockers, not "git gud."
- **Reconciliation gate:** the internal fun verdict has been checked against [../../10-memory/community-feedback.md](../../10-memory/community-feedback.md); a build that tests fun but ships to "this is boring/unfair" means the gate was measuring the wrong thing.
- All gates clear, or a recorded [../qa-lead/](../qa-lead/) sign-off on the exact felt gap being accepted.

## Fun / Feel / Progression Acceptance Criteria
- **Fun:** a blind tester voluntarily replays the core loop and can name *why* — the joy is identifiable, not accidental.
- **Feel:** the core action feels responsive and committed on every supported input method; feedback (visual, audio, haptic) confirms every meaningful action.
- **Progression:** the difficulty and reward curves are *legible* — the player understands why they failed, what to do differently, and feels the next attempt is winnable.
- **Frustration ceiling:** no point in the critical path produces unfair frustration across multiple testers without a filed blocker.
- **Boredom floor:** no stretch of the critical path drops below "engaged" longer than the design's intended pacing allows.

## Review Checklist
- [ ] Core verb tested in the first 10 seconds, before content carries it — does it feel good naked?
- [ ] Input responsiveness measured on each platform/input method, not assumed.
- [ ] Every death/failure classified as **hard** or **unfair**, with the unfair ones filed.
- [ ] Difficulty curve walked end to end — cliffs, coasts, and spikes named with timestamps.
- [ ] Reward cadence checked — too sparse (grindy), too dense (hollow), or earned and satisfying?
- [ ] Boredom swept for — every dead minute located on the clock and judged rest-vs-leak.
- [ ] Edge cases played (see below), not just the intended line.
- [ ] Verdict reconciled against real-player sentiment in [../../10-memory/community-feedback.md](../../10-memory/community-feedback.md).
- [ ] Findings filed with the feel/fun template and routed via [../../09-workflows/bug-fixing.md](../../09-workflows/bug-fixing.md).

## Edge Cases To Hunt
- **Degenerate play:** the player who turtles, grinds the safest corner, or refuses to engage the intended fun — does the game force a worse experience, or quietly let them ruin it?
- **Sequence breaks:** reaching content out of order, skipping the tutorial, arriving underleveled or overleveled — does pacing survive, or collapse?
- **Exploit-for-fun:** the delightful break (rocket-jump, combo-juggle, physics abuse). Distinguish exploits that *add* joy (keep them) from those that trivialize the game (flag them). Killing a fun exploit is itself a fun-bug.
- **Optimal-but-miserable:** the strategy that wins but feels awful (degenerate metas, kiting forever). If the best way to play is the least fun way, that's a design defect.

## Automation Suggestions
- **Input replay:** record and replay input sequences to reproduce feel bugs deterministically and to verify a feel fix actually changed the response window. See [../../09-workflows/playtesting.md](../../09-workflows/playtesting.md).
- **Frustration telemetry:** instrument rage signals — repeated deaths at one spot, rapid retries, quit-after-death, idle-then-quit, controller mashing — and surface hot spots automatically via the [../../12-systems/playtest-system/](../../12-systems/playtest-system.md).
- **Heatmaps:** death locations, time-spent, path density, abandonment points overlaid on the level to expose unfair walls and dead zones the experience graph only hints at.
- **Caveat:** automation finds *where* and *how often*; it never decides *fun*. The numbers point the thumbs; they don't replace them.

## Common Mistakes It Guards Against
- "It passed functional QA" treated as "it's fun." Different claim, never verified by the other.
- Team going numb to input lag — feel rot accepted one frame at a time until reviews catch it.
- "Players are just bad" used to dismiss unfair difficulty that the game actually caused.
- Tuning to the spreadsheet while the build feels worse in the hands.
- Killing a fun exploit in the name of "correctness" and shipping a duller game.
- One tester's taste shipped as a verdict, never reconciled against real-player sentiment.

## KPIs
- **Fun-blockers caught pre-ship** vs. surfaced by players post-launch (the gap is the real grade).
- **Feel defects filed and resolved** per build, and whether feel fixes *stick*.
- **Frustration-hotspot reduction** build over build, measured by telemetry and retest.
- **Verdict-to-sentiment accuracy** — how well the internal fun call predicted [../../10-memory/community-feedback.md](../../10-memory/community-feedback.md).
- **Pacing leaks closed** — dead minutes eliminated from the critical path across iterations.

## Best Practices
- Play it blind first; your fresh-eyes session is data you can only collect once per build.
- Locate every frustration and boredom finding on the clock — a feel bug without a timestamp is a vibe.
- Always separate hard from unfair, and earned from cheap, before filing.
- Protect the joyful exploit; treat its removal as a regression unless it breaks the game.
- Trust your thumbs, then verify with telemetry and other testers before declaring a pattern.
