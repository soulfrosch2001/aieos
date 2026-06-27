# 🎮 Playtest System — Internal Playtest Simulation

`Status: stable`

> Operationalizes **[Prime Directive #1 — Player experience is the north star](../00-company/prime-directives.md)**.
> Opinion is not data. Before anything ships, simulated testers *play* it and report what the
> player will actually feel. Driven by the [playtesting workflow](../09-workflows/playtesting.md)
> and owned by the [QA Lead](../07-qa/qa-lead/) and [gameplay testers](../07-qa/gameplay-tester/).

## Why this system exists
Designers know what they *meant*. Players only feel what's *there*. The gap between those two is
where games die. The playtest system closes that gap early by running simulated play sessions
against ten experience dimensions, producing structured, comparable, memory-recorded reports
instead of "felt pretty good." It is the studio's reality check, and it has teeth: a red on
**Frustration** or **Fun** blocks a ship the same way a failing test does (see
[../07-qa/qa-lead/authority.md](../07-qa/qa-lead/authority.md)).

## The ten evaluation dimensions
Every playtest scores all ten on a **1–10** scale with a written justification. No score without a reason.

1. **Difficulty** — is the challenge calibrated to the intended player, with a fair learning curve and no spikes that aren't earned?
2. **Fun** — the core question. Is the moment-to-moment loop genuinely enjoyable, or merely functional?
3. **Progression** — does the player feel they're growing — new powers, areas, mastery — at a satisfying cadence?
4. **Balance** — are options viable? No dominant strategy, no dead build, no useless reward.
5. **Pacing** — the rhythm of tension and release. Are there dead zones, or relentless pressure with no breath?
6. **Accessibility** — can more players play? Readable UI, remappable inputs, colorblind-safe, forgiving defaults (with [accessibility-tester](../07-qa/accessibility-tester/)).
7. **Frustration** — the *bad* friction: unclear goals, cheap deaths, lost progress, unskippable repetition. We hunt this aggressively.
8. **Exploration** — is curiosity rewarded? Does the world invite poking at its edges?
9. **Reward Systems** — do rewards land with the right weight, timing, and meaning? Is the dopamine honest?
10. **Player Retention** — would the tester come back tomorrow? What's the hook that survives the session ending?

## How a simulated session runs
```
Build/feature ─→ assign tester personas (newcomer · core · completionist · speedrunner · lapsed)
            ─→ run scripted + exploratory passes
            ─→ score the 10 dimensions (1–10 + justification)
            ─→ capture friction events (where, why, severity)
            ─→ file Playtest Report ─→ memory ─→ continuous-improvement scan
```
Each persona stresses different dimensions: the **newcomer** exposes Accessibility and
Difficulty onboarding; the **completionist** exposes Exploration and Reward Systems; the
**speedrunner** exposes Balance and Pacing exploits; the **lapsed** player exposes Retention.

## Playtest Report — template
```markdown
# Playtest Report — <feature / build> — <YYYY-MM-DD>

**Build:** <version / commit>        **Tier:** <T0–T4>
**Tester persona(s):** <newcomer / core / completionist / speedrunner / lapsed>
**Session length:** <duration>        **Workflow:** ../09-workflows/playtesting.md

## Scores (1–10)
| Dimension       | Score | Justification |
|-----------------|:-----:|---------------|
| Difficulty      |       |               |
| Fun             |       |               |
| Progression     |       |               |
| Balance         |       |               |
| Pacing          |       |               |
| Accessibility   |       |               |
| Frustration     |       | (lower friction = higher score) |
| Exploration     |       |               |
| Reward Systems  |       |               |
| Player Retention|       |               |
| **Overall**     |       |               |

## Top friction events
1. <where / what / why> — severity: <low|med|high|blocker>
2. ...

## What worked (keep this)
- ...

## Recommendations
- [ ] <change> → owner: <role> → tier: <T?>
- [ ] <improvement idea> → route to ../10-memory/future-features.md

## Verdict
☐ Ship   ☐ Ship with fixes   ☐ Iterate   ☐ Block (Frustration/Fun red)

**Recorded to:** ../10-memory/lessons-learned.md · ../10-memory/community-feedback.md (if applicable)
```

## Gates & escalation
- **Any dimension red (≤3)** → cannot ship without a named fix plan or an explicit, recorded waiver from the QA Lead.
- **Fun or Frustration red** → automatic block; escalates to [Creative Director](../01-executive/creative-director/) and [Gameplay Council](../08-councils/gameplay-council/).
- **Balance red** → routes to [Balance Council / balancing workflow](../09-workflows/balancing.md) and [../10-memory/balancing-history.md](../10-memory/balancing-history.md).
- Every report feeds the [continuous-improvement.md](continuous-improvement.md) scan and the [dashboard.md](dashboard.md) "Fun / Frustration" signals.

## Cross-links
[../09-workflows/playtesting.md](../09-workflows/playtesting.md) ·
[../07-qa/qa-lead/](../07-qa/qa-lead/) · [../07-qa/gameplay-tester/](../07-qa/gameplay-tester/) ·
[project-health.md](project-health.md) · [dashboard.md](dashboard.md) ·
[discussion-system.md](discussion-system.md)
