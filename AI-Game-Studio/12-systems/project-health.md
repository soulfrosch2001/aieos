# 🩺 Project Health — Continuously Monitored Signals

`Status: stable`

> The studio's vital signs. While [dashboard.md](dashboard.md) is the *snapshot* leadership reads,
> this file defines the *signals* underneath it — what we measure, what each color means, and who
> reacts. Owned jointly by the [Production Director](../01-executive/production-director/),
> [Technical Director](../01-executive/technical-director/), and [QA Lead](../07-qa/qa-lead/).

## Why this system exists
Games rot quietly. Performance drifts a millisecond per sprint, technical debt compounds, bug
counts creep, and one day the build is "somehow" broken. Project Health makes the rot **visible
before it's terminal.** Each signal has a definition, a measurement source, and a red/yellow/green
threshold so "how are we doing?" gets a number, not a mood. Health is reported every sprint and
on demand for any [T3+](../00-company/engagement-tiers.md) decision.

## The nine monitored signals
Each is scored **🟢 green / 🟡 yellow / 🔴 red** against an explicit threshold.

1. **Gameplay Quality** — aggregate of [playtest](playtest-system.md) Fun/Pacing/Balance scores. *Red:* any core-loop dimension ≤3.
2. **Code Quality** — review pass rate, test coverage trend, lint/static-analysis cleanliness. Defended by the [Technical Director](../01-executive/technical-director/). *Red:* coverage falling + reviews bypassed.
3. **Performance** — frame time vs. budget on target hardware, load times, hitches. *Red:* below target FPS on any shipping platform.
4. **Optimization** — headroom remaining; memory, draw calls, build size trend. *Red:* no headroom, regressions unaddressed.
5. **Art / Animation / Audio Completion** — % of planned assets at final quality vs. placeholder. *Red:* critical-path assets still greyboxed near milestone.
6. **Testing Coverage** — automated + manual + playtest coverage of shipping surface. *Red:* major features untested.
7. **Technical Debt** — open items and their interest rate in [../10-memory/technical-debt.md](../10-memory/technical-debt.md). *Red:* debt blocking new work.
8. **Bug Count** — open bugs by severity, trend over time. Source: [../10-memory/known-bugs.md](../10-memory/known-bugs.md). *Red:* count rising sprint over sprint.
9. **Production Status** — milestone burn-down, scope vs. schedule, team load. *Red:* milestone date at risk.

> A single **🔴 red on a quality signal triggers veto authority** under
> [Prime Directive #7](../00-company/prime-directives.md): the TD, QA Lead, or Chief Auditor can
> block the ship until it's green or explicitly waived and recorded.

## Color semantics
| Color | Meaning | Required reaction |
|-------|---------|-------------------|
| 🟢 **Green** | On target, within threshold | Keep monitoring |
| 🟡 **Yellow** | Drifting; not yet a problem | Named owner + watch + plan |
| 🔴 **Red** | Threshold breached | Stop-the-line: fix plan or recorded waiver before proceeding |

## Health Report — template
```markdown
# Project Health Report — <project/milestone> — <YYYY-MM-DD>

**Reporting cadence:** <sprint N / on-demand for T3+>     **Overall:** 🟢 / 🟡 / 🔴

| Signal                          | Status | Metric / Evidence            | Owner | Trend |
|---------------------------------|:------:|------------------------------|-------|:-----:|
| Gameplay Quality                |        | playtest avg, Fun/Pacing     |       | ▲▼─   |
| Code Quality                    |        | coverage %, review pass rate |       | ▲▼─   |
| Performance                     |        | FPS vs budget, load times    |       | ▲▼─   |
| Optimization                    |        | mem / draw calls / headroom  |       | ▲▼─   |
| Art / Animation / Audio Compl.  |        | % final vs placeholder       |       | ▲▼─   |
| Testing Coverage                |        | % surface covered            |       | ▲▼─   |
| Technical Debt                  |        | open items / interest        |       | ▲▼─   |
| Bug Count                       |        | open by severity             |       | ▲▼─   |
| Production Status               |        | milestone burn-down          |       | ▲▼─   |

## 🔴 Reds (stop-the-line)
- <signal> — <why> — fix plan / waiver owner: <role> — ETA: <date>

## 🟡 Yellows (watch)
- <signal> — <why> — owner: <role>

## Notes & continuous-improvement
- Improvements routed to ../10-memory/future-features.md: ...

**Feeds:** dashboard.md · ../10-memory/performance-reports.md · ../10-memory/lessons-learned.md
```

## Where the numbers come from
- **Performance / Optimization** → [../10-memory/performance-reports.md](../10-memory/performance-reports.md) via [performance-tester](../07-qa/performance-tester/) and [optimization-engineer](../03-programming/optimization-engineer/).
- **Bugs** → [../10-memory/known-bugs.md](../10-memory/known-bugs.md) via [bug-hunter](../07-qa/bug-hunter/).
- **Technical Debt** → [../10-memory/technical-debt.md](../10-memory/technical-debt.md).
- **Gameplay Quality** → [playtest-system.md](playtest-system.md).
- **Production Status** → [../10-memory/roadmap.md](../10-memory/roadmap.md) via the [producers](../06-production/).

## Cross-links
[dashboard.md](dashboard.md) · [playtest-system.md](playtest-system.md) ·
[continuous-improvement.md](continuous-improvement.md) ·
[../09-workflows/performance-optimization.md](../09-workflows/performance-optimization.md) ·
[../00-company/engagement-tiers.md](../00-company/engagement-tiers.md)
