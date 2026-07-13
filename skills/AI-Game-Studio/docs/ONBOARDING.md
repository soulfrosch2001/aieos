# 🚪 Onboarding — How to Use the Studio

`Status: stable`

> You don't manage the agents — you make a **request** and the studio routes it. This guide shows
> the path a request takes, then walks a concrete example end-to-end. Read the
> [README](../README.md) for the big picture and [00-company/COMPANY.md](../00-company/COMPANY.md)
> for the charter; this file is the *how-to*.

## The one rule
**Talk to the [Executive Orchestrator](../01-executive/executive-orchestrator/), not the workers.**
You describe *what you want for the player or the game*; the studio decides *who* does it, *how big*
it is, and *what has to be discussed first*. You never assign tasks to individual artists or
programmers by hand — that's the Orchestrator's job ([Prime Directive #2](../00-company/prime-directives.md)).

## How to make a good request
A good request states the **player-facing intent**, not the implementation.
- ✅ "Players say level 3 ends too quietly — give it a real boss."
- ✅ "The economy feels grindy after hour 10; tighten it."
- ⚠️ "Add a behavior tree node for the boss." — too implementation-y; let the studio decide the *how*.

Include, when you have it: the target platform(s), the player who should feel this, and any
deadline or milestone. The Orchestrator will size the rest.

## What happens to your request (the core flow)
```
You ──► Executive Orchestrator
          │  1. blast-radius analysis + Production Tier (T0–T4)
          ▼
       Council(s) convened  ──► debate WITH dissent   [12-systems/discussion-system.md]
          │  2. options argued, trade-offs recorded
          ▼
       Implementation plan ──► approval gate           [Prime Directives #3 / #7]
          │  3. written plan; quality voices can veto
          ▼
       Build  (≤15 parallel tracks, disjoint ownership)
          │  4. specialists execute their slices
          ▼
       QA + Playtest   [12-systems/playtest-system.md · 07-qa/]
          │  5. does it work AND feel right?
          ▼
       Memory update   [10-memory/]   +   Health report   [12-systems/project-health.md]
          │  6. the studio remembers; the dashboard refreshes
          ▼
       Continuous-improvement scan   [12-systems/continuous-improvement.md]
             → next ideas routed to 10-memory/future-features.md
```
Canonical text: [00-company/core-flow.md](../00-company/core-flow.md).

## Example walkthrough — "Create a boss for level 3"

**Step 0 — You ask.** *"Level 3 ends flat. I want a memorable boss fight there."*

**Step 1 — Orchestrator sizes it.** A new boss touches design, combat, AI, art, animation, audio,
performance, and QA. Blast radius is large → this is **[T3 — Strategic](../00-company/engagement-tiers.md)**.
It routes to the [boss-creation workflow](../09-workflows/boss-creation.md) and convenes the
[gameplay-council](../08-councils/gameplay-council/) (with technical, art, and performance councils on call).

**Step 2 — The studio debates (no auto-agreement).** This is where the
[discussion-system](../12-systems/discussion-system.md) earns its keep. The canonical example lives
there: the [Creative Director](../01-executive/creative-director/) wants a **3rd combat phase**; the
[gameplay-designer](../02-design/gameplay-designer/) calls it repetitive; the
[ai-programmer](../03-programming/ai-programmer/) shows complexity doubles; the
[optimization-engineer](../03-programming/optimization-engineer/) shows target hardware struggles;
the [qa-lead](../07-qa/qa-lead/) shows the test matrix balloons. **Consensus: ship 2 phases now,
reserve the 3rd** for [future content](../10-memory/future-features.md). Dissent recorded in
[meeting-history](../10-memory/meeting-history.md).

**Step 3 — Plan & approval.** The council produces a written boss plan (mechanics, phases, tells,
art/anim/audio needs, perf budget, test plan). The [Creative](../01-executive/creative-director/)
and [Technical Directors](../01-executive/technical-director/) sign off; the
[Chief Auditor](../01-executive/chief-auditor/) holds veto ([Directive #7](../00-company/prime-directives.md)).

**Step 4 — Build in parallel.** Up to **15 disjoint tracks** run at once: combat & balance design,
boss AI, animation & rigging, VFX & lighting, music & SFX, UI/telegraphing, and the encounter
level scripting — coordinated so no two agents touch the same file.

**Step 5 — QA + Playtest.** [QA](../07-qa/) verifies it works; the
[playtest-system](../12-systems/playtest-system.md) scores Difficulty, Fun, Pacing, Frustration,
Reward Systems, and the rest. A red on **Fun** or **Frustration** blocks the ship until fixed.

**Step 6 — Remember & improve.** Decisions land in
[game-design-decisions](../10-memory/game-design-decisions.md) and
[balancing-history](../10-memory/balancing-history.md); the
[project-health](../12-systems/project-health.md) and [dashboard](../12-systems/dashboard.md) refresh;
the [continuous-improvement scan](../12-systems/continuous-improvement.md) files follow-ups (the
reserved 3rd phase, an arena reuse idea) into [future-features](../10-memory/future-features.md).

**Result:** a tight, tested, memorable level-3 boss — and a recorded trail of *why* every choice was made.

## Quick reference
- **Where do I start a request?** → [Executive Orchestrator](../01-executive/executive-orchestrator/) (routing logic: [routing.md](../01-executive/executive-orchestrator/routing.md)).
- **How big is my request?** → [engagement-tiers.md](../00-company/engagement-tiers.md).
- **Who can stop a ship?** → TD, QA Lead, Chief Auditor ([decision-authority.md](../00-company/decision-authority.md)).
- **Where do decisions live?** → [10-memory/](../10-memory/).
- **How do agents argue?** → [discussion-system.md](../12-systems/discussion-system.md).
- **Is the project healthy?** → [dashboard.md](../12-systems/dashboard.md) · [project-health.md](../12-systems/project-health.md).

## Common pitfalls
- **Micromanaging workers.** Don't. State intent; let the Orchestrator route. ([Directive #2](../00-company/prime-directives.md))
- **Skipping the debate to "save time."** The debate *is* the time-saver — it prevents the rework. ([Directive #3](../00-company/prime-directives.md))
- **Treating playtest scores as opinions.** They're gates. A Fun/Frustration red blocks ship. ([Directive #1](../00-company/prime-directives.md))
- **Forgetting memory.** If it isn't in [10-memory/](../10-memory/), the studio didn't learn it. ([Directive #5](../00-company/prime-directives.md))
