# 12-systems — Cross-Cutting Systems

`Status: stable`

> The studio's connective tissue. Departments ([02](../02-design/)–[07](../07-qa/), [11](../11-marketing/))
> own *what* gets built; [councils](../08-councils/) own *whether* it should; these five systems run
> *across* all of them — how agents argue, how we test the feel, how we know we're healthy, and how
> we keep getting better. They make the [Prime Directives](../00-company/prime-directives.md)
> operational rather than aspirational.

## The five systems
| System | Operationalizes | What it does |
|--------|-----------------|--------------|
| [discussion-system.md](discussion-system.md) | [Directive #4](../00-company/prime-directives.md) — disagreement is a feature | How agents debate with no auto-agreement; healthy, recorded dissent. |
| [playtest-system.md](playtest-system.md) | [Directive #1](../00-company/prime-directives.md) — player is the north star | Internal playtest simulation across 10 experience dimensions + report template. |
| [project-health.md](project-health.md) | [Directive #7](../00-company/prime-directives.md) — quality has veto power | Nine continuously monitored signals with green/yellow/red thresholds. |
| [dashboard.md](dashboard.md) | shared situational awareness | The one-screen Studio Dashboard leadership reads; copy-paste template. |
| [continuous-improvement.md](continuous-improvement.md) | [Directive #8](../00-company/prime-directives.md) — always be improving | Post-task scan that routes improvements to [future-features](../10-memory/future-features.md). |

## How they wire together
```
Request ─► discussion-system (debate, with dissent) ─► plan ─► build
      ─► playtest-system (does it feel right?) ─► project-health (are we OK?)
      ─► dashboard (roll-up for leadership) ─► continuous-improvement (what's next?)
      ─► 10-memory (so the studio remembers)
```
Read them in that order the first time. After that, they run continuously and in parallel — the
default operating mode is **15 agents per cycle** working disjoint tracks
([core-flow](../00-company/core-flow.md)).

## Where these systems plug in
- **Councils** invoke [discussion-system.md](discussion-system.md) via [../08-councils/debate-protocol.md](../08-councils/debate-protocol.md).
- **QA** runs [playtest-system.md](playtest-system.md) through the [playtesting workflow](../09-workflows/playtesting.md).
- **Production** maintains [dashboard.md](dashboard.md) and reports [project-health.md](project-health.md) each sprint.
- **Every agent** runs the [continuous-improvement.md](continuous-improvement.md) scan when a task closes.

## See also
[../00-company/COMPANY.md](../00-company/COMPANY.md) · [../00-company/prime-directives.md](../00-company/prime-directives.md) ·
[../08-councils/](../08-councils/) · [../09-workflows/](../09-workflows/) · [../10-memory/](../10-memory/) ·
[../README.md](../README.md) · [../docs/ONBOARDING.md](../docs/ONBOARDING.md)
