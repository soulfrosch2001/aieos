# 📊 Studio Dashboard

`Status: stable`

> The single screen leadership reads to know where the project stands *right now*. The
> [project-health.md](project-health.md) system defines the signals; this is the **snapshot** that
> rolls them up alongside production, bugs, and risk. Maintained by the
> [Production Director](../01-executive/production-director/) and the [producers](../06-production/),
> refreshed every sprint and before any [T3+](../00-company/engagement-tiers.md) go/no-go.

## Why this system exists
A AAA project has too many moving parts for any one agent to hold in its head. The dashboard is the
shared situational awareness layer — one consistent surface so the [Executive Orchestrator](../01-executive/executive-orchestrator/),
the four Directors, and the [Chief Auditor](../01-executive/chief-auditor/) all read the *same*
state and argue from facts, not impressions. If it's not on the dashboard, it's not being managed.

## What the dashboard tracks
| Panel | Question it answers | Source |
|-------|---------------------|--------|
| **Current Milestone** | What are we shipping next and when? | [../10-memory/roadmap.md](../10-memory/roadmap.md) |
| **Sprint Progress** | How's the current sprint burning down? | [scrum-master](../06-production/scrum-master/) |
| **Department Status** | Is each dept on track / blocked? | dept leads |
| **Open Bugs** | Total open by severity | [../10-memory/known-bugs.md](../10-memory/known-bugs.md) |
| **Critical Bugs** | Anything that blocks ship *now* | [bug-hunter](../07-qa/bug-hunter/) |
| **Performance** | FPS vs budget on target HW | [../10-memory/performance-reports.md](../10-memory/performance-reports.md) |
| **Feature Progress** | % of milestone features complete | [producers](../06-production/) |
| **Technical Debt** | Debt load & whether it's blocking | [../10-memory/technical-debt.md](../10-memory/technical-debt.md) |
| **Upcoming Milestones** | What's on the horizon | [../10-memory/roadmap.md](../10-memory/roadmap.md) |
| **Production Risks** | Top threats to the date/quality | [Production Director](../01-executive/production-director/) |

## Studio Dashboard — copy-paste template
```markdown
# 📊 STUDIO DASHBOARD — <project> — <YYYY-MM-DD>
Overall health: 🟢 / 🟡 / 🔴      Tier of active work: <T0–T4>

## 🎯 Current Milestone
- **Milestone:** <name>          **Target date:** <date>          Status: 🟢 / 🟡 / 🔴
- **Goal:** <one line>

## 🏃 Sprint Progress
- Sprint <N> — Day <x>/<y>      Burn-down: <on track / behind / ahead>
- Committed: <n> pts   Done: <n> pts   In progress: <n>   Blocked: <n>

## 🏢 Department Status
| Dept            | Status | Note |
|-----------------|:------:|------|
| 02-design       | 🟢🟡🔴 |      |
| 03-programming  | 🟢🟡🔴 |      |
| 04-art          | 🟢🟡🔴 |      |
| 05-audio        | 🟢🟡🔴 |      |
| 06-production   | 🟢🟡🔴 |      |
| 07-qa           | 🟢🟡🔴 |      |
| 11-marketing    | 🟢🟡🔴 |      |

## 🐞 Bugs
- **Open bugs:** <n>  (🔴 <crit>  🟠 <high>  🟡 <med>  ⚪ <low>)
- **Critical (ship-blockers):**
  - <id> — <summary> — owner: <role> — ETA: <date>

## ⚡ Performance
- Target: <fps> @ <res> on <hardware>      Current: <fps>      Status: 🟢🟡🔴
- Load time: <s>   Memory: <MB>   Build size: <MB>

## 🧩 Feature Progress
| Feature | % | Status |
|---------|:-:|:------:|
| <feature> | __% | 🟢🟡🔴 |

## 🏗️ Technical Debt
- Open items: <n>   Blocking new work? <yes/no>   Top item: <ref → ../10-memory/technical-debt.md>

## 🗓️ Upcoming Milestones
1. <milestone> — <date>
2. <milestone> — <date>

## ⚠️ Production Risks
| Risk | Likelihood | Impact | Mitigation / owner |
|------|:----------:|:------:|--------------------|
| <risk> | L/M/H | L/M/H | <plan> / <role> |

---
Generated from: project-health.md · ../10-memory/roadmap.md · ../10-memory/known-bugs.md ·
../10-memory/performance-reports.md · ../10-memory/technical-debt.md
```

## Refresh cadence & ownership
- **Every sprint** — full refresh by the [scrum-master](../06-production/scrum-master/) + [producer](../06-production/producer/).
- **On demand** — before any [T3/T4](../00-company/engagement-tiers.md) go/no-go, or when a [project-health.md](project-health.md) signal flips to 🔴.
- **Single source of truth** — the dashboard never invents numbers; it *rolls up* memory registers. Discrepancies are resolved in the registers, not the dashboard.

## Cross-links
[project-health.md](project-health.md) · [playtest-system.md](playtest-system.md) ·
[../10-memory/roadmap.md](../10-memory/roadmap.md) · [../10-memory/known-bugs.md](../10-memory/known-bugs.md) ·
[../09-workflows/release-candidate.md](../09-workflows/release-candidate.md) ·
[../01-executive/production-director/](../01-executive/production-director/)
