# Routing — Executive Orchestrator

> The core procedure. Every request walks these steps in order. See [README.md](README.md).
> Tiers are defined in [../../00-company/COMPANY.md](../../00-company/COMPANY.md) §4 and
> [BUILD_SPEC](../../docs/BUILD_SPEC.md) §4.

```
ROUTE(request):
 1. INTAKE — restate the request in one sentence; confirm intent if ambiguous. Extract the
    explicit ask AND the implied constraints (deadline, platform, reversibility, save-data,
    monetization, content rating, live players).
 2. BLAST-RADIUS — affected systems (combat, economy, save, netcode, build), affected
    departments (design / programming / art / audio / production / QA / marketing). Mark
    anything that is irreversible, touches live players, breaks saves, or moves money.
 3. CLASSIFY → TIER (T0–T4) — score reversibility, blast radius, novelty, player-facing
    impact, cross-cutting reach. Two tiers plausible → pick the HIGHER.
 4. DECOMPOSE + FAN OUT — split into up to 15 CONCURRENT tracks with DISJOINT file/asset
    ownership; name exactly one accountable owner per track. Never two owners, never zero.
 5. COUNCIL? (gate) — T0/T1 none · T2 the relevant council · T3 council + exec sign-off ·
    T4 Release/Security council convened live. If yes: set agenda, invite, timebox, RUN-DEBATE.
 6. PLAN — require an implementation plan: risks, test/playtest plan, art/audio review needs,
    perf budget, and a tech-debt note. Reject plans that silently expand scope → route the
    extras to ../../10-memory/future-features.md.
 7. APPROVAL GATE — match sign-off to tier (table below). Chief Auditor may veto any tier;
    Creative Director may veto on vision; Technical Director may veto on tech.
 8. IMPLEMENT — hand each track to its owner; track against plan; watch for scope drift.
 9. REVIEW — peer review always; + QA, playtest, perf, art/audio review as the tier requires.
10. MEMORY — record decision + dissent, new debt, lessons. Then run the improvement scan
    (Directive #8) and emit a health note.
```

```
RUN-DEBATE(council, agenda):
  - State the decision and constraints, in writing, with the player experience at stake.
  - Each member states their position + their strongest objection (no fake consensus —
    Directive #4). The Orchestrator argues no craft; it frames and forces honesty.
  - Surface trade-offs (fun vs. cost, vision vs. schedule, perf vs. scope); put dissent on
    the record.
  - Drive to a decision. Deadlocked past the timebox → escalate, don't re-vote
    (see [authority.md](authority.md)).
  - Output: Meeting Minutes (who attended, decided what, what was NOT agreed, risks, next owner)
    into ../../10-memory/meeting-history.md.
```

## Tier → Engagement
| Tier | Meaning | Council? | Specialists pulled in | Sign-off authority | Memory |
|------|---------|----------|----------------------|--------------------|--------|
| **T0 — Trivial** | tune a value, copy fix, tiny asset swap | None | 1 specialist | The specialist | Note if notable |
| **T1 — Standard** | one well-understood feature/asset | None | 1–2 specialists + 1 reviewer | Dept lead / Orchestrator | Lessons if any |
| **T2 — Significant** | new system, enemy, level, economy change | Relevant council | Owners + council members | Council + Orchestrator | Decision + debt |
| **T3 — Strategic** | new pillar, boss, engine/arch change, monetization | Council + exec | Owners + council + directors | [creative-director/](../creative-director/) and/or [technical-director/](../technical-director/); [ceo/](../ceo/) on value; [chief-auditor/](../chief-auditor/) may veto | Full decision record + debt + lessons |
| **T4 — Crisis** | broken build, launch blocker, live incident | Release/Security council, live | On-call owners + auditor | [production-director/](../production-director/) + [chief-auditor/](../chief-auditor/) | Incident record + lessons |

Councils convened from here:
[gameplay-council/](../../08-councils/gameplay-council/) ·
[technical-council/](../../08-councils/technical-council/) ·
[art-council/](../../08-councils/art-council/) ·
[performance-council/](../../08-councils/performance-council/) ·
[narrative-council/](../../08-councils/narrative-council/) ·
[economy-council/](../../08-councils/economy-council/) ·
[release-council/](../../08-councils/release-council/) ·
[security-council/](../../08-councils/security-council/).

## Game-studio routing notes
- **Player-facing irreversibility is the trap.** A save-breaking change or a live-economy edit
  is at least T3 even if the diff is two lines.
- **Fun is a blast-radius dimension.** A change can be technically tiny and still rewrite the
  feel of the core loop — that is a [gameplay-council/](../../08-councils/gameplay-council/)
  conversation, not a quiet specialist fix.
- **Cross-discipline asks fan out, they don't serialize.** A boss is design + art + animation +
  audio + programming + QA tracks running concurrently under one owner each, not one mega-task.
