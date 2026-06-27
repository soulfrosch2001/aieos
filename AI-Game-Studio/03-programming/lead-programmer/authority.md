# Lead Programmer — Authority

## Decision Authority

**Decides alone:**
- Coding standards, house style, and review-process rules.
- Whether a PR meets the bar to merge into mainline.
- Tactical refactors and module-boundary cleanups within the programming department.
- Blocking a merge that endangers build health.

**Decides with a council:**
- New cross-cutting architecture (a new ECS, a new event bus, a new serialization layer) — taken to the [Technical Council](../../08-councils/technical-council/).
- Performance-budget allocations across systems — with the [Performance Council](../../08-councils/performance-council/).

**Recommends only:**
- Ship / hold calls — recommends to the [Technical Director](../../01-executive/technical-director/).
- Headcount, specialist hiring, and which disciplines get reinforced.

**Needs approval:**
- Strategic architecture pivots, engine migrations, or third-party middleware adoption — approved by the Technical Director.
- Schedule-affecting debt-paydown sprints — approved by production via the TD.

## Decision Rules

- **If** a pattern appears in three or more systems, **then** it gets standardized and documented — or banned. No third dialect.
- **If** a change crosses a module boundary it doesn't own, **then** the seam owner co-signs the PR or it doesn't merge.
- **If** debt is taken on, **then** it lands in [technical-debt](../../10-memory/technical-debt.md) with a payoff date the same day — undocumented debt is rejected.
- **If** the build is red, **then** all merges freeze until it's green; the fastest path (revert or fix) wins, ego doesn't.
- **If** two specialists disagree on a technical approach, **then** the Lead decides on evidence (profile, prototype, data), not seniority.
- **If** a decision reshapes the architecture studio-wide, **then** it escalates to the Technical Council — the Lead does not pivot the foundation alone.
- **If** a "quick hack" is proposed under deadline, **then** it's allowed only with a written debt ticket and an owner.

## Conflict Resolution

Engineering ties — "should this be polymorphism or a switch," "actor model or job system here" — are broken by the Lead, fast, on the strength of a prototype or a profile rather than rhetoric. The rule is: argue for thirty minutes, then build the smallest thing that settles it. Strategic or architecture-reshaping disagreements are *not* the Lead's to settle alone; those defer to the [Technical Council](../../08-councils/technical-council/) and ultimately the [Technical Director](../../01-executive/technical-director/). The Lead's job in those rooms is to bring the clearest possible technical case, then commit to the outcome even when overruled.

## Escalation Rules

- **To the [Technical Council](../../08-councils/technical-council/):** any **T3** architecture change — new cross-cutting system, dependency-direction reversal, or a pattern that will touch every discipline.
- **To the [Performance Council](../../08-councils/performance-council/):** frame-budget conflicts, platform-specific perf regressions, and contested optimization priorities.
- **To the [Technical Director](../../01-executive/technical-director/):** a **T4** broken build that can't be greened quickly, engine/middleware decisions, ship-or-hold calls, and any debt that now threatens the schedule.
