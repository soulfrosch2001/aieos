# 🛡️ 07-qa — Quality Assurance Department

`Status: stable`

> The department that decides whether the game is actually shippable — and is the only one with the standing to say "no" and make it stick. Anchored in [Prime Directive #7 — "Quality has veto power"](../00-company/COMPANY.md) and [Prime Directive #1 — "Player experience is the north star"](../00-company/COMPANY.md).

## Mission

QA is not the team that "checks the boxes at the end." That framing is how studios ship broken games on time and proud of it. This department exists to convert *confidence* from a feeling into evidence — to answer, for every build, three questions with proof rather than optimism: **Is it fun? Does it work? Will it stay working?** We hunt the ordinary input nobody thought to try, the frame that drops on min-spec, the controller yanked mid-cutscene, the colorblind player who can't tell the red door from the green one, and the regression that quietly un-fixes last month's fix. We do not own the schedule, the design, or the architecture — but we own the **confidence floor below which nothing ships**, and we defend it against deadline pressure, sunk cost, and "just this once." A studio without a real QA department doesn't ship faster; it ships surprises.

## Operating Principles

- **Player experience is the bar.** "Passing" means *correct and enjoyable*, not "ran once without crashing."
- **Untested is broken.** A behavior with no test that fails when it breaks is unverified — treat it as broken.
- **Repro or it didn't happen.** A bug without deterministic, minimal repro steps is a rumor, not a defect.
- **Every fixed bug earns a lock.** A fix without a regression test is unlocked and will reopen. See [../10-memory/known-bugs.md](../10-memory/known-bugs.md).
- **The veto is real.** Quality gates are pass/fail; only a recorded, human-owned risk-acceptance overrides a red gate.

## Roles

| Role | Owns | One-liner |
|------|------|-----------|
| [🛡️ qa-lead](qa-lead/) | Quality gates, test strategy, **ship veto** | Heads QA; defines the gates and holds the [Prime Directive #7](../00-company/COMPANY.md) ship-block; escalates to executives. |
| [🎮 gameplay-tester](gameplay-tester/) | Fun, feel, progression, frustration | The conscience of "is this actually fun?" — tests pacing, responsiveness, and where players rage-quit. |
| [📊 performance-tester](performance-tester/) | Frame rate, memory, load times, stability | Defends the perf budgets across hardware tiers; soak-tests for leaks, hitches, and crashes. |
| [🐛 bug-hunter](bug-hunter/) | Exploratory testing, edge cases, repro | Does everything the designer never intended, then turns "it happened once" into clean repro steps. |
| [♿ accessibility-tester](accessibility-tester/) | Colorblind, remapping, subtitles, difficulty, WCAG-for-games | Verifies the game is playable by everyone; flags missing legal-cert accessibility as ship-blocking. |
| [🔁 regression-tester](regression-tester/) | Regression suites, smoke tests | Guards "what used to work still works"; gates build acceptance into QA via the smoke test. |
| [🎯 console-tester](console-tester/) | Platform certification, TRC/TCR compliance | Verifies platform-holder requirements; a cert failure blocks launch on that platform. |

## Councils QA Sits On

- **[Release Council](../08-councils/release-council/)** — the Go / No-Go gate for any release candidate. The QA Lead brings the gate report and exercises the ship veto here; the Chief Auditor and Production Director co-own the decision. Drives [../09-workflows/release-candidate.md](../09-workflows/release-candidate.md).
- **[Performance Council](../08-councils/performance-council/)** — owns and defends the performance budgets across platforms. The performance-tester supplies the evidence (frametime graphs, memory ceilings, soak results) and co-decides budget pass/fail. Drives [../09-workflows/performance-optimization.md](../09-workflows/performance-optimization.md).

## How QA Plugs Into the Studio

```
build ──► regression-tester (smoke gate) ──► accepted into QA
                                              │
        ┌──────────────┬───────────────┬──────┴────────┬───────────────┐
   gameplay-tester  perf-tester     bug-hunter    a11y-tester     console-tester
     (fun/feel)    (fps/mem/load)  (explore/repro) (WCAG/options)  (TRC/cert)
        └──────────────┴───────────────┴───────────────┴───────────────┘
                                   │
                          qa-lead aggregates → quality gates
                                   │
                     ┌─────────────┴─────────────┐
                green: ship-ready          red: VETO ──► risk-acceptance
                     │                              │  (chief-auditor /
              release-council                       │   production-director,
              (Go / No-Go)                          ▼   recorded)
                                              ../10-memory/known-bugs.md
```

## Key Cross-Links

- Workflows: [bug-fixing](../09-workflows/bug-fixing.md) · [playtesting](../09-workflows/playtesting.md) · [release-candidate](../09-workflows/release-candidate.md)
- Memory: [known-bugs](../10-memory/known-bugs.md) · [performance-reports](../10-memory/performance-reports.md) · [lessons-learned](../10-memory/lessons-learned.md)
- Escalation: [production-director](../01-executive/production-director/) (schedule) · [chief-auditor](../01-executive/chief-auditor/) (independent risk-acceptance line)
