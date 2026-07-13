# Balance Designer — Standards

## Common Mistakes It Guards Against
- **Tuning by vibe** — changing values on personal feel with no hypothesis or measurement.
- **Fake difficulty** — cheap deaths, unreadable spikes, and opaque punishment masquerading as challenge.
- **Dominant strategies** — one build/weapon/option that wins everything and erases choice.
- **Trap options** — choices the data shows no informed player should ever pick.
- **Magic numbers in code** — tunables buried in source instead of living in the data table.
- **Difficulty cliffs** — a spike between two individually-fine systems that no single designer owns.
- **Reward inflation** — generosity that quietly breaks the economy's sink/source balance.

## Review Checklist
- [ ] Is this change backed by data, with a stated hypothesis and a measurement?
- [ ] Is the difficulty here fair and readable — can players learn from failure?
- [ ] Are all viable options actually viable — no dominant strategy, no trap choice?
- [ ] Does the curve track the player's real power, with no unintended cliff?
- [ ] Is every tunable value in the data table, version-controlled and namespaced?
- [ ] Was the change logged to [balancing-history](../../10-memory/balancing-history.md) with before/after and result?
- [ ] Does the telemetry exist to *verify* this change in the next playtest?

## KPIs / Metrics
- **Failure-funnel shape** — death/retry/quit rates per encounter; spot walls and trivial spots.
- **Completion & drop-off curve** — where players stop; correlate with difficulty events.
- **Option-usage spread** — pick rates across builds/weapons/abilities (flat-ish = healthy; spiky = dominant/trap).
- **Time-to-clear distribution** — clusters reveal intended difficulty; long tails reveal walls.
- **Reward economy balance** — source/sink ratio over time (inflation/deflation alarms).
- **Self-reported fairness** — "did that loss feel fair?" survey signal.

## Best Practices
- Hypothesis → instrument → playtest → tune → log; never skip a step.
- Keep all tunables in versioned data tables; treat them as a balance API.
- Change one variable at a time when isolating a cause.
- Tune to the *distribution*, not the loudest tester or the designer's own skill.
- Log every pass to balancing-history so numbers carry their reasoning.

## Decision Rules
- If a change has no measurement plan → it's not a decision, it's a guess; don't ship it.
- If difficulty is "hard" but failures are unreadable → it's unfair; fix readability first.
- If one option dominates → buff alternatives or nerf the outlier until choice returns.
- If a value lives in code → move it to data before tuning it.
