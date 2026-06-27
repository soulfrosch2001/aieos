# ♻️ Continuous Improvement — Prime Directive #8 System

`Status: stable`

> The studio's "always be improving" reflex, made mechanical. Operationalizes
> **[Prime Directive #8](../00-company/prime-directives.md)**: *finishing a task triggers a scan
> for nearby gameplay, performance, UX, and architecture improvements.* Every idea it finds is
> routed to [../10-memory/future-features.md](../10-memory/future-features.md) — never lost, never
> silently shipped.

## Why this system exists
Great studios don't stop thinking when a task is "done." The moment an agent finishes work, it is
standing in the part of the codebase it understands best — the *cheapest possible time* to spot the
next win. Without a system, those observations evaporate. With one, they compound. This is how the
studio gets quietly better every single cycle instead of only when someone schedules a "polish
pass." It is also the disciplined opposite of scope creep: improvements are **captured and routed,
not impulsively built.** They wait their turn through the [Orchestrator](../01-executive/executive-orchestrator/)
and the [tier system](../00-company/engagement-tiers.md) like any other request.

## The trigger
```
Task complete  ──►  Continuous-Improvement scan (mandatory)  ──►  proposals
            ──►  route each to ../10-memory/future-features.md  ──►  health report note
```
The scan runs at the end of **every** task — T0 value tweak to T4 crisis fix. It is part of the
[core flow](../00-company/core-flow.md), not an optional courtesy.

## What the scan looks for
The finishing agent inspects the **nearby systems** it just touched across five lenses:

1. **Gameplay** — adjacent mechanics that could be deeper, clearer, or more fun now that this exists.
2. **Balance** — values, curves, or economies this change just nudged off-center → flag for [balancing](../09-workflows/balancing.md).
3. **UX / Accessibility** — friction, unclear feedback, missing remap/colorblind/readability wins next door.
4. **Performance / Optimization** — hot paths, allocations, draw calls, or load steps within reach of the work just done.
5. **Architecture** — duplication, leaky abstractions, or debt this work exposed → cross-check [../10-memory/technical-debt.md](../10-memory/technical-debt.md).

> **Rule:** the scanning agent proposes; it does **not** build. Anything beyond [T0](../00-company/engagement-tiers.md)
> goes through the [Orchestrator](../01-executive/executive-orchestrator/) and, if needed, a
> [council](../08-councils/). Directive #8 feeds the backlog; it does not bypass Directives #2 and #3.

## Improvement proposal — template (write into future-features.md)
```markdown
### <short title>  ·  <YYYY-MM-DD>
- **Found while:** <task that triggered the scan>
- **Lens:** gameplay | balance | ux | performance | architecture
- **Observation:** <what's improvable and why it matters to the player or the team>
- **Proposed change:** <concrete next step>
- **Estimated tier:** T0–T4        **Suggested owner:** <role / council>
- **Effort vs. value:** <low/med/high> effort, <low/med/high> value
- **Dependencies / risks:** <anything that must be true first>
- **Status:** proposed
```

## Routing rules
| Finding type | Route to |
|--------------|----------|
| New feature / mechanic idea | [../10-memory/future-features.md](../10-memory/future-features.md) |
| Balance drift | [future-features.md](../10-memory/future-features.md) + [../10-memory/balancing-history.md](../10-memory/balancing-history.md) |
| Performance opportunity | [future-features.md](../10-memory/future-features.md) + [../10-memory/performance-reports.md](../10-memory/performance-reports.md) |
| Architecture / debt | [../10-memory/technical-debt.md](../10-memory/technical-debt.md) |
| Reusable insight | [../10-memory/lessons-learned.md](../10-memory/lessons-learned.md) |

The [roadmap-manager](../06-production/roadmap-manager/) periodically triages
[future-features.md](../10-memory/future-features.md) and promotes ripe items into the
[roadmap](../10-memory/roadmap.md).

## Guardrails — improvement without chaos
- **Capture, don't build.** A scan never expands the current task's scope. (Anti-scope-creep.)
- **Player value first.** Improvements are ranked by [Prime Directive #1](../00-company/prime-directives.md), not novelty.
- **Honest effort/value.** No gold-plating; low-value polish is recorded but parked low.
- **Quality can still veto** promotions of "improvements" that add risk ([Directive #7](../00-company/prime-directives.md)).

## Cross-links
[../10-memory/future-features.md](../10-memory/future-features.md) ·
[../00-company/core-flow.md](../00-company/core-flow.md) ·
[project-health.md](project-health.md) · [playtest-system.md](playtest-system.md) ·
[discussion-system.md](discussion-system.md) ·
[../06-production/roadmap-manager/](../06-production/roadmap-manager/)
