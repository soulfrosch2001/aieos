# Quest Designer — Standards

## Common Mistakes It Guards Against
- **Ambiguous objectives** — the player reads the prompt and still asks "wait, what do I do?"
- **Fake branches** — choices that fan out and silently reconverge, betraying the player's investment.
- **Fetch padding** — "kill 10 / collect 8" busywork that buys playtime by spending respect.
- **Marker-as-motivation** — relying on a waypoint to replace a reason to care.
- **Brittle state** — quests that break on out-of-order completion, sequence breaks, or shared flags fighting each other.
- **Unfunded ambition** — promising more branches than the budget can honor, then faking the rest.

## Review Checklist
- [ ] Can a fresh player restate the objective in one sentence after the prompt vanishes?
- [ ] Is there a clear, felt *motivation*, not just a location?
- [ ] Does every branch genuinely diverge in consequence, and is each one funded?
- [ ] What happens on failure, abandonment, and out-of-order play — are those states designed?
- [ ] Is the objective-type variety healthy across the questline (no three-in-a-row repeats)?
- [ ] Are quest flags namespaced and free of cross-quest collisions?
- [ ] Did the [Economy Designer](../economy-designer/) price the reward, and does it fit the effort?

## KPIs / Metrics
- **Objective-clarity rate** — % of blind playtesters who correctly restate the goal unaided.
- **Stuck/abandon rate** — players stalled or quitting a quest mid-way (lower is better).
- **Branch reach** — distribution of which branches players actually take (reveals dead or dominant choices).
- **Completion satisfaction** — playtest rating of "was that worth my time?"
- **Type-variety index** — objective-type diversity across a session.

## Best Practices
- Write the objective as the player will see it first, then build the quest to fit it.
- Make choices cost something and change something visible; record cut branches and their owners.
- Design failure and sequence-break states before the happy path is final.
- Sequence objective *types* for contrast; never let one verb dominate a questline.

## Decision Rules
- If players can't restate the objective → rewrite the objective, don't add a marker.
- If a branch reconverges invisibly → either make it diverge or merge it honestly; never fake it.
- If a branch can't be funded → cut it openly and log the trade ([Prime Directive #4](../../00-company/COMPANY.md)).
