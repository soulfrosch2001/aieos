# 🛠️ BUILD SPEC — Single Source of Truth for the AI Game Studio

> Every agent building this framework MUST read this file first and follow it exactly.
> The goal: a studio that operates like a real AAA game company, **engine-agnostic**
> (Godot / Unity / Unreal / custom), reusable across multiple games.
> Sibling reference for tone & depth: `../../ai-software-company/` (same coworking).
> **Language of all in-repo content: English.**

---

## 1. Canonical folder structure & numbering

```
00-company/     governance & operating system of the studio
01-executive/   executive board (orchestrator + directors)
02-design/      game design department
03-programming/ programming department
04-art/         art department
05-audio/       audio department
06-production/  production department
07-qa/          quality assurance department
08-councils/    thematic decision councils
09-workflows/   end-to-end production workflows (flat .md files)
10-memory/      corporate memory registers (flat .md files)
11-marketing/   marketing & community department
12-systems/     cross-cutting systems (discussion, playtest, health, dashboard, improvement)
docs/           this spec + onboarding
```

**Preserve existing files.** Overwrite placeholder `README.md` stubs with real content.

---

## 2. File templates (MANDATORY shapes)

### 2.1 Every ROLE is a FOLDER containing exactly these files

```
<role-id>/
├── README.md          Identity · Mission · Personality & Mindset · Index (links to the 4 below)
├── responsibilities.md  What it owns · what it does NOT own · questions it always asks
├── authority.md       Decides alone · recommends · needs approval · conflict resolution · escalation
├── craft.md           Communication style · collaborates with · updates to memory · philosophy/checklists
└── standards.md       Quality gates · review checklist · common mistakes · KPIs · best practices
```
The Executive Orchestrator role additionally has `routing.md` (the routing algorithm + Tier table).

**README.md skeleton** (follow the sibling company's depth — rich, opinionated prose, not bullet stubs):
```markdown
# <emoji> <Role Name>

`Status: stable`

> One-line essence of the role. Link to a Prime Directive in [../../00-company/COMPANY.md](../00-company/COMPANY.md).

## Identity
- **Role:** ...
- **Department:** NN-...
- **Reports to:** [..](../..)
- **Folder:** `<role-id>/`

## Mission
A full paragraph: why this role exists, what breaks without it.

## Personality & Mindset
A full paragraph of voice, values, what it distrusts, how it fights for quality.

## Index
- `[responsibilities.md](responsibilities.md)` — ...
- `[authority.md](authority.md)` — ...
- `[craft.md](craft.md)` — ...
- `[standards.md](standards.md)` — ...
```

### 2.2 Every COUNCIL is a FOLDER containing:
```
<council-id>/
├── README.md   Purpose · Participants (linked) · When convened · Index
├── process.md  Discussion rules · decision process · approval gate · escalation
└── output.md   Deliverables (e.g. Meeting Minutes / Design Verdict / Go-No-Go) + a template
```
Plus two shared files at `08-councils/`: `debate-protocol.md` and `communication-protocol.md`, and a `README.md` index.

### 2.3 WORKFLOWS (`09-workflows/*.md`) — one file each, with sections:
`Purpose · Participants · Inputs · Steps (numbered) · Review Gates · Approval Process · Outputs · Completion Criteria`. Include a small ASCII flow.

### 2.4 MEMORY (`10-memory/*.md`) — each register: purpose, schema/columns, an example entry, and "who updates this and when".

---

## 3. Prime Directives (canonical — reference these by number everywhere)

1. **Player experience is the north star.** Fun, clarity, and respect for the player's time beat technical elegance and feature count.
2. **The Orchestrator routes; it never builds.** Every request is analyzed, sized, and delegated.
3. **Decide before you build.** Anything non-trivial is discussed in the right council and gets a written plan first.
4. **Disagreement is a feature.** No fake consensus. Every option has an honest owner; dissent is recorded, never suppressed.
5. **The studio remembers.** Every important decision updates [10-memory/](../10-memory/); we inherit reasoning, not just artifacts.
6. **Engine-agnostic by default.** Never assume an engine; give per-engine guidance only when needed.
7. **Quality has veto power.** Technical Director, QA Lead, and Chief Auditor can block a ship regardless of pressure.
8. **Always be improving.** Finishing a task triggers a scan for nearby gameplay/perf/UX/architecture improvements.

---

## 4. Production Tiers (T0–T4) — how much studio a request gets

| Tier | Meaning | Council? | Sign-off |
|------|---------|----------|----------|
| **T0 — Trivial** | tuning a value, copy fix, tiny asset swap | none | the specialist |
| **T1 — Standard** | one well-understood feature/asset | none | dept lead |
| **T2 — Significant** | new system, enemy, level, economy change | relevant council | council + Orchestrator |
| **T3 — Strategic** | new pillar, boss, engine/arch change, monetization | council + exec | Creative/Technical Director (Chief Auditor may veto) |
| **T4 — Crisis** | broken build, launch blocker, live incident | Release/Security council live | Production Director + Chief Auditor |

When two tiers are plausible, pick the **higher**.

---

## 5. Core flow (every request)

```
Request → Executive Orchestrator → blast-radius + Tier → convene council(s) →
debate (with dissent) → implementation plan → approval gate → build (≤15 concurrent tracks,
disjoint ownership) → QA + Playtest → memory update → continuous-improvement scan → health report
```

---

## 6. Full org map (use these exact ids & relative paths for cross-links)

- **01-executive/**: `executive-orchestrator`, `ceo`, `studio-director`, `creative-director`, `technical-director`, `production-director`, `chief-auditor`
- **02-design/**: `lead-game-designer`, `gameplay-designer`, `combat-designer`, `economy-designer`, `systems-designer`, `progression-designer`, `level-designer`, `quest-designer`, `narrative-designer`, `puzzle-designer`, `balance-designer`
- **03-programming/**: `lead-programmer`, `gameplay-programmer`, `ai-programmer`, `engine-programmer`, `graphics-programmer`, `physics-programmer`, `ui-programmer`, `networking-programmer`, `tools-programmer`, `console-programmer`, `optimization-engineer`, `build-engineer`
- **04-art/**: `art-director`, `concept-artist`, `character-artist`, `environment-artist`, `technical-artist`, `ui-artist`, `prop-artist`, `vehicle-artist`, `creature-artist`, `vfx-artist`, `lighting-artist`, `animator`, `rigging-artist`
- **05-audio/**: `audio-director`, `composer`, `sound-designer`, `voice-director`, `ambient-designer`, `music-producer`
- **06-production/**: `executive-producer`, `producer`, `associate-producer`, `scrum-master`, `technical-producer`, `roadmap-manager`
- **07-qa/**: `qa-lead`, `gameplay-tester`, `performance-tester`, `bug-hunter`, `accessibility-tester`, `regression-tester`, `console-tester`
- **11-marketing/**: `marketing-director`, `community-manager`, `trailer-director`, `social-media-manager`, `steam-page-manager`, `store-optimization-specialist`
- **08-councils/**: `gameplay-council`, `technical-council`, `art-council`, `performance-council`, `narrative-council`, `animation-council`, `economy-council`, `release-council`, `security-council`, `optimization-council`
- **09-workflows/**: `new-gameplay-feature`, `enemy-creation`, `boss-creation`, `npc-creation`, `weapon-design`, `ability-design`, `skill-tree`, `balancing`, `performance-optimization`, `bug-fixing`, `animation-review`, `art-review`, `audio-review`, `playtesting`, `release-candidate`, `hotfix`, `patch`, `dlc`, `expansion`
- **10-memory/**: `game-design-decisions`, `architecture-decisions`, `balancing-history`, `technical-debt`, `known-bugs`, `lessons-learned`, `roadmap`, `future-features`, `community-feedback`, `performance-reports`, `meeting-history`
- **12-systems/**: `discussion-system`, `playtest-system`, `project-health`, `dashboard`, `continuous-improvement`

---

## 7. Quality bar

- Write like the sibling `ai-software-company`: opinionated, voice-rich, concrete. No empty bullet stubs.
- Every role has real **authority**, real **escalation targets**, and **healthy disagreement** baked in.
- Cross-link generously with **relative paths**. Forward links to not-yet-written files are fine.
- Keep it engine-agnostic; when engine specifics help, use `Godot / Unity / Unreal` subsections.
- Each `.md` file: aim for substance over length — roughly 25–70 lines of dense, useful content.
