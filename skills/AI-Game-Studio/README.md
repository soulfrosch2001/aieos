# 🎮 AI Game Studio

`Status: stable`

> A multi-agent framework that operates like a real AAA game studio — **engine-agnostic**
> (Godot / Unity / Unreal / custom) and reusable across multiple games. It is built around one
> conviction: **a studio that thinks before it builds ships better games.** Implementation is one
> step of the pipeline, never the first.

This is one company inside the **`agentes` coworking space** — sibling to
[`../ai-software-company`](../ai-software-company), with which it shares tone, rigor, and operating
philosophy. Where the software company ships products, this studio ships *play*.

## The "thinks before it builds" philosophy
Most AI build-bots leap straight to code and discover their mistakes in production. This studio
doesn't. Every request is **routed, sized, debated, planned, and approved before a line of
production code exists** — then built, QA'd, playtested, remembered, and scanned for the next
improvement. The disagreement is the point: fake consensus is how bad features ship with everyone's
name on them. Read the studio charter in [00-company/COMPANY.md](00-company/COMPANY.md).

### The 8 Prime Directives (canonical: [00-company/prime-directives.md](00-company/prime-directives.md))
1. **Player experience is the north star.** Fun and respect for the player's time beat technical elegance.
2. **The Orchestrator routes; it never builds.** Every request is analyzed, sized, delegated.
3. **Decide before you build.** Non-trivial work gets a council and a written plan first.
4. **Disagreement is a feature.** No fake consensus; dissent is recorded, never suppressed.
5. **The studio remembers.** Every important decision updates [10-memory/](10-memory/).
6. **Engine-agnostic by default.** Never assume an engine; per-engine advice only when it matters.
7. **Quality has veto power.** Technical Director, QA Lead, and Chief Auditor can block a ship.
8. **Always be improving.** Finishing a task triggers a scan for nearby improvements.

## Repository map
```
00-company/     governance & operating system — charter, prime directives, tiers, core flow
01-executive/   orchestrator + CEO + 4 directors + chief auditor
02-design/      game · combat · economy · systems · level · quest · narrative · puzzle · balance design
03-programming/ gameplay · engine · graphics · AI · physics · UI · net · tools · optimization · build
04-art/         art direction · concept · character · environment · VFX · lighting · animation · rigging
05-audio/       music · sound design · voice · ambience · production
06-production/  executive producer · producers · scrum · technical production · roadmap
07-qa/          QA lead · gameplay · performance · accessibility · regression · console testing · bug hunting
08-councils/    gameplay · technical · art · performance · narrative · animation · economy · release · security · optimization
09-workflows/   feature · enemy · boss · npc · weapon · ability · skill-tree · balancing · perf · bugfix · reviews · release · hotfix · patch · dlc · expansion
10-memory/      design/arch decisions · balancing · tech-debt · bugs · lessons · roadmap · future-features · feedback · perf · meetings
11-marketing/   marketing direction · community · trailers · social · store pages · ASO
12-systems/     discussion · playtest · project-health · dashboard · continuous-improvement
docs/           BUILD_SPEC.md (single source of truth) · ONBOARDING.md (how to use the studio)
```
Every **role is a folder** (`README · responsibilities · authority · craft · standards`); every
**council is a folder** (`README · process · output`); workflows and memory are flat `.md` files.
Full id/path map: [docs/BUILD_SPEC.md §6](docs/BUILD_SPEC.md).

## Optimization targets
Every decision is silently scored against these; conflicts escalate to the tier owner in
[00-company/decision-authority.md](00-company/decision-authority.md).

**Player Experience · Fun · Performance · Maintainability · Scalability · Replayability ·
Accessibility · Code Quality · Production Efficiency** — with **Player Experience** as the only
target allowed to override the rest. Defined in [00-company/COMPANY.md](00-company/COMPANY.md).

## Quickstart — the core flow
```
make a request
   │
   ▼
Executive Orchestrator ──► blast-radius + Production Tier (T0–T4)
   │
   ▼
convene council(s) ──► debate (with recorded dissent)   [12-systems/discussion-system.md]
   │
   ▼
implementation plan ──► approval gate                   [Prime Directive #3 / #7]
   │
   ▼
build  (≤15 concurrent tracks, disjoint ownership)
   │
   ▼
QA + Playtest                                           [12-systems/playtest-system.md]
   │
   ▼
memory update                                           [10-memory/]
   │
   ▼
continuous-improvement scan ──► health report           [12-systems/continuous-improvement.md · project-health.md]
```
Walkthrough with a concrete example ("create a boss for level 3"):
[docs/ONBOARDING.md](docs/ONBOARDING.md). Canonical flow: [00-company/core-flow.md](00-company/core-flow.md).

### Production Tiers — how much studio a request gets
| Tier | Meaning | Council? | Sign-off |
|------|---------|----------|----------|
| **T0** | tuning a value, copy fix, tiny asset swap | none | the specialist |
| **T1** | one well-understood feature/asset | none | dept lead |
| **T2** | new system, enemy, level, economy change | relevant council | council + Orchestrator |
| **T3** | new pillar, boss, engine/arch change, monetization | council + exec | Creative/Technical Director (Chief Auditor may veto) |
| **T4** | broken build, launch blocker, live incident | Release/Security council live | Production Director + Chief Auditor |

Full table: [00-company/engagement-tiers.md](00-company/engagement-tiers.md). When two tiers fit, pick the **higher**.

## Default operating mode
The studio runs **15 agents in parallel per cycle** by default — disjoint ownership, no two agents
editing the same surface — coordinated by the [Executive Orchestrator](01-executive/executive-orchestrator/).
This is what lets a AAA-shaped pipeline move at speed without stepping on itself.

## Start here
- New to the studio? → [docs/ONBOARDING.md](docs/ONBOARDING.md)
- Building part of the studio? → [docs/BUILD_SPEC.md](docs/BUILD_SPEC.md)
- Want the philosophy & authority model? → [00-company/COMPANY.md](00-company/COMPANY.md)
- Want the cross-cutting machinery? → [12-systems/](12-systems/)
