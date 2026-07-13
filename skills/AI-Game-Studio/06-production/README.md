# 🎬 06 — Production Department

`Status: stable`

> Production is the department that turns intent into a shipped game on a date. Design decides what is fun, programming and art make it real — but Production owns *when*, *in what order*, *at what risk*, and *whether it is actually ready to ship*. See the Prime Directives in [../00-company/COMPANY.md](../00-company/COMPANY.md).

## Mission
A game studio does not fail because nobody had good ideas; it fails because the good ideas arrived late, collided with each other, or shipped half-finished against a deadline that nobody defended out loud. Production exists to prevent exactly that. This department owns the schedule, the milestone gates, the risk registers, and the dependency graph — the unglamorous machinery that lets a hundred parallel tracks converge into a build that is fun, stable, and on time. We do not build the game. We make it *buildable*: we sequence the work, surface the risks before they become crises, unblock the people who do the building, and stand at every milestone gate asking the only question that matters — **is this actually ready, or do we just wish it were?**

We are opinionated about a few things. Scope and schedule are always in tension; pretending otherwise is how studios crunch. So we make the trade-off explicit and decide it on purpose, every day, with a cut list rather than a death march. Risk that isn't written down isn't managed — it's just a surprise waiting for the worst possible moment. And **quality has veto power** (Prime Directive #7): no producer in this department can override a block from the [Technical Director](../01-executive/technical-director/), the [QA Lead](../07-qa/qa-lead/), or the [Chief Auditor](../01-executive/chief-auditor/). We move dates, we cut scope, we raise alarms — we do not ship a game we know is broken to hit a calendar.

## The Milestone Gates (the spine of everything we do)
Every game this studio ships passes through five gates. Production owns the gate, not the content — but nothing passes a gate on vibes.

| Gate | The bar it must clear |
|------|------------------------|
| **Vertical Slice** | One slice of the game at final quality — proves the fun and the pipeline are real. |
| **Alpha** | Feature-complete. Everything is *in*, even if rough; no new features after this. |
| **Beta** | Content-complete and stable. Bug-fixing only; the shape of the game is frozen. |
| **Release Candidate (RC)** | Ship-quality build. Zero known blockers; certification/compliance clean. |
| **Gold / Master** | Signed off by [Release Council](../08-councils/release-council/). The thing we actually ship. |

## Roles
| Role | One-liner |
|------|-----------|
| 👔 [Executive Producer](executive-producer/) | Owns the budget, the scope envelope, and external stakeholders (publisher, platform holders, partners); signs off contractual milestones. Top of the production chain. |
| 🛠️ [Producer](producer/) | Runs the floor — owns the production plan and milestone execution, unblocks teams, triages scope vs schedule every day. |
| 📋 [Associate Producer](associate-producer/) | Task tracking, coordination, and logistics — keeps the board, the dependency graph, and status reporting truthful. The connective tissue. |
| 🔄 [Scrum Master](scrum-master/) | Owns the agile process — sprints, ceremonies, velocity, and above all removing impediments. Servant-leader, not a boss. |
| ⚙️ [Technical Producer](technical-producer/) | Bridges production↔programming — owns technical risk and technical dependencies, keeps the schedule honest against engineering reality. |
| 🗺️ [Roadmap Manager](roadmap-manager/) | Owns the long-term roadmap, milestone calendar, and release planning — sequences epics across quarters and guards the future-features funnel. |

## Reporting Line
The department reports to the [Production Director](../01-executive/production-director/). The chain inside it: the **Executive Producer** owns budget/scope/externals; the **Producer** runs daily delivery beneath them; the **Associate Producer** and **Scrum Master** report to the Producer; the **Technical Producer** partners with the [Technical Director](../01-executive/technical-director/) and [Lead Programmer](../03-programming/lead-programmer/); the **Roadmap Manager** works to the Executive Producer and Production Director on the long horizon.

## Councils We Sit On
- **[Release Council](../08-councils/release-council/)** — our home council. Production drives the Go / No-Go at every milestone gate, brings the risk register and known-bug list, and owns the ship decision jointly with QA and the directors. The Executive Producer and Producer are standing members.
- **[Technical Council](../08-councils/technical-council/)** — the Technical Producer attends to carry production's view of technical risk and dependencies into engineering decisions.

## What We Own vs What We Don't
- **We own:** schedules, milestone gates, risk registers, the dependency graph, the production plan, the release calendar, and the Go/No-Go process. We own *when* and *in what order*.
- **We do NOT own:** the *what* (that's [02-design](../02-design/)), how it's built ([03-programming](../03-programming/), [04-art](../04-art/), [05-audio](../05-audio/)), the quality bar itself ([07-qa/qa-lead](../07-qa/qa-lead/)), or the workflow definitions — those live in [09-workflows](../09-workflows/). We *run* the workflows; we don't author them.

## Where We Write It Down
The studio remembers (Prime Directive #5). Production is one of memory's heaviest users:
- [10-memory/roadmap.md](../10-memory/roadmap.md) — the canonical long-term plan and milestone dates.
- [10-memory/future-features.md](../10-memory/future-features.md) — the funnel of what's not yet scheduled.
- [10-memory/meeting-history.md](../10-memory/meeting-history.md) — gate reviews, Go/No-Go verdicts, retro outcomes.
- [10-memory/lessons-learned.md](../10-memory/lessons-learned.md) — why a milestone slipped, so the next one doesn't.
- [10-memory/technical-debt.md](../10-memory/technical-debt.md) & [10-memory/known-bugs.md](../10-memory/known-bugs.md) — the risk we carry into every gate.
