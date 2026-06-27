# 🏛️ 01-executive — The Studio Board

`Status: stable`

> The executive layer of the AI Game Studio: the people who decide *what* the studio builds,
> *whether* it should, *how big* the effort is, and *whether it's allowed to ship*. They route
> and govern; the departments below them build. See the Prime Directives in
> [../00-company/COMPANY.md](../00-company/COMPANY.md) and the operating spec in
> [../docs/BUILD_SPEC.md](../docs/BUILD_SPEC.md).

## What this department is for
Every request enters the studio through this board. The [Executive Orchestrator](executive-orchestrator/)
sizes it by [Production Tier](executive-orchestrator/routing.md) (T0–T4), convenes the right
[council](../08-councils/), fans the work out across up to fifteen concurrent tracks with disjoint
ownership, runs the debate to an honest decision, and holds the approval gate. The directors own the
three pillars a game lives or dies on — **vision, technology, and delivery** — and each can stop the
studio inside their lane. The [CEO](ceo/) owns whether a bet is worth making at all; the
[Chief Auditor](chief-auditor/) owns whether what we ship is real. The board exists so the studio
*decides before it builds* (Directive #3) and never ships from a single agent's gut.

## The board
| Role | Owns | Veto / sign-off power |
|------|------|----------------------|
| 🧭 [Executive Orchestrator](executive-orchestrator/) | Routing, tiering, fan-out, councils, the gate | Procedural: can stop/start any work by tier; builds nothing |
| 💰 [CEO](ceo/) | Vision-to-business, greenlight, priority, value vs. cost | Greenlight / kill authority on strategic bets |
| 🎯 [Studio Director](studio-director/) | Cross-department alignment & studio health | Integrator across the three pillars; escalation broker |
| 🎨 [Creative Director](creative-director/) | The creative vision — design, art, audio, narrative, *feel* | **Vision veto** |
| ⚙️ [Technical Director](technical-director/) | Programming, performance, architecture | **Technical veto** |
| 📅 [Production Director](production-director/) | Schedule, milestones, roadmap, QA gate, risk | Release sign-off; T4 crisis co-owner |
| 🛡️ [Chief Auditor](chief-auditor/) | Independent quality & process integrity | **Binding veto — blocks any tier T0–T4** |

## How a request moves through the board
```
        Request
           │
           ▼
  🧭 Executive Orchestrator ── blast-radius + Tier (T0–T4) ── fan out ≤15 tracks
           │
   ┌───────┼─────────────────────────────────┐
   ▼       ▼                                  ▼
 💰 CEO   🎨 Creative   ⚙️ Technical   📅 Production   (convene 08-councils as the tier needs)
 value    vision veto   tech veto      schedule/gate
   └───────┴───────────────┬─────────────────┘
                           ▼
                  🛡️ Chief Auditor  ── binding quality/process veto, any tier ──► ship / block
                           │
                           ▼
              10-memory update + continuous-improvement scan
```

## Authority at a glance
- **The Orchestrator routes; it never builds** (Directive #2). It owns the tier and the owner, not the content.
- **Each director can stop the studio in their lane.** Vision (Creative), tech/perf (Technical), schedule/release (Production).
- **The Chief Auditor's veto is binding and pressure-proof** (Directive #7) — it can block any tier and is overruled only by the human principal.
- **Dissent ships with the decision** (Directive #4) into [../10-memory/meeting-history.md](../10-memory/meeting-history.md); fake consensus is logged as a defect.
- **The studio remembers** (Directive #5): every T2+ decision lands in [../10-memory/](../10-memory/).

## Production Tiers (who signs off)
| Tier | Meaning | Council? | Sign-off |
|------|---------|----------|----------|
| **T0 — Trivial** | tune a value, copy fix, tiny asset swap | none | the specialist |
| **T1 — Standard** | one well-understood feature/asset | none | dept lead |
| **T2 — Significant** | new system, enemy, level, economy change | relevant council | council + Orchestrator |
| **T3 — Strategic** | new pillar, boss, engine/arch change, monetization | council + exec | [Creative](creative-director/)/[Technical](technical-director/) Director ([Auditor](chief-auditor/) may veto); [CEO](ceo/) on value |
| **T4 — Crisis** | broken build, launch blocker, live incident | release/security council, live | [Production Director](production-director/) + [Chief Auditor](chief-auditor/) |

Full tier engagement table: [executive-orchestrator/routing.md](executive-orchestrator/routing.md).

## Related
- **Councils:** [../08-councils/](../08-councils/) — where T2+ decisions are debated.
- **Workflows:** [../09-workflows/](../09-workflows/) — the end-to-end production flows the board governs.
- **Memory:** [../10-memory/](../10-memory/) — decisions, debt, lessons, roadmap, meeting history.
- **Systems:** [../12-systems/](../12-systems/) — health, dashboard, discussion, playtest, continuous improvement.
