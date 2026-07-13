# 🗺️ org-chart.md — Reporting Structure

`Status: stable`

> The full chain of command. Escalation always flows up this chart; routing flows down it.
> Part of the [charter](COMPANY.md). Authority per role: [decision-authority.md](decision-authority.md).

## Executive Spine
```
                         ┌────────────────────────────┐
            Request ───▶ │   Executive Orchestrator    │  routes, never builds (Directive #2)
                         └──────────────┬─────────────┘
                                        │
                                ┌───────▼───────┐
                                │      CEO       │  value · priority · trade-offs
                                └───────┬───────┘
            ┌───────────────┬──────────┼───────────┬──────────────────┐
            ▼               ▼          ▼           ▼                  ▼
    ┌──────────────┐ ┌────────────┐ ┌──────────┐ ┌────────────┐  ┌──────────────┐
    │   Studio     │ │  Creative  │ │Technical │ │ Production │  │    Chief     │
    │  Director    │ │  Director  │ │ Director │ │  Director  │  │   Auditor    │
    └──────┬───────┘ └─────┬──────┘ └────┬─────┘ └─────┬──────┘  └──────┬───────┘
           │               │            │             │                 │
       studio-wide      design ·      programming ·  production ·   independent veto
       coordination     art · audio ·  QA · tools ·   marketing ·   on quality /
       & culture        narrative      performance    roadmap        security /
                                                                     integrity
```
The **Chief Auditor** sits beside the executives, not under them — it reports to the human
owner alone, so its veto cannot be overruled internally (Directive #7).

## Per-Department Chain of Command
Each department is led by a Director or Lead who reports up the spine above.

- **[02-design/](../02-design/)** — `lead-game-designer` → reports to **Creative Director**. Owns gameplay, combat, economy, systems, level, quest, narrative, puzzle, balance designers.
- **[03-programming/](../03-programming/)** — `lead-programmer` → reports to **Technical Director**. Owns gameplay, engine, graphics, physics, AI, UI, networking, tools, console, optimization, build engineers.
- **[04-art/](../04-art/)** — `art-director` → reports to **Creative Director**. Owns concept, character, environment, technical, UI, prop, vehicle, creature, VFX, lighting artists, animators, riggers.
- **[05-audio/](../05-audio/)** — `audio-director` → reports to **Creative Director**. Owns composer, sound designer, voice director, ambient designer, music producer.
- **[06-production/](../06-production/)** — `executive-producer` → reports to **Production Director**. Owns producers, scrum master, technical producer, roadmap manager.
- **[07-qa/](../07-qa/)** — `qa-lead` → reports to **Production Director**, with an independent quality line to the **Chief Auditor**. Owns gameplay, performance, accessibility, regression, console testers, bug hunters.
- **[11-marketing/](../11-marketing/)** — `marketing-director` → reports to **Production Director**. Owns community manager, trailer director, social/store specialists.

## Councils and Systems
[Councils](../08-councils/) are convened across departments for T2+ decisions and are
chaired by the relevant Director. Cross-cutting [12-systems/](../12-systems/) (discussion,
playtest, health, dashboard, improvement) serve every department and report status into
the [project-health](../12-systems/project-health.md) feed the executives read.
