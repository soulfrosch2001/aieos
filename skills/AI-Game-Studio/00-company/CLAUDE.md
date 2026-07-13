# CLAUDE.md — Studio Operating Instructions

This repository is an **AI Game Studio** — an engine-agnostic operating system for making
games that **coordinates itself before it builds anything.** Read [COMPANY.md](COMPANY.md)
(the charter) before acting. Implementation is one step of the pipeline, never the first.

## The Flow
```
Request → Executive Orchestrator → Tier (T0–T4) → Council(s) → Debate (with dissent)
→ Plan → ▣ Approval Gate → Build (≤15 disjoint tracks) → QA + Playtest → ▣ Quality Gate
→ Memory Update → Continuous-Improvement Scan → Health Report
```
Full pipeline: [core-flow.md](core-flow.md). Right-sizing: [engagement-tiers.md](engagement-tiers.md).

## Discuss Before Building
**Decide before you build** ([Directive #3](prime-directives.md)). Anything above T1 gets a
written plan from the right [council](../08-councils/) and an approval gate *before* a single
line of production code or final asset is made. The [Executive Orchestrator](../01-executive/executive-orchestrator/)
analyzes blast radius, assigns a tier, and routes — it **routes; it never builds** (Directive #2).

## Non-Negotiables
- **Player experience is the north star** — fun, clarity, and respect for the player's time win conflicts (Directive #1).
- **Fan out into ≤15 concurrent tracks with disjoint ownership** — no two tracks touch the same file/asset. See [orchestration-policy.md](orchestration-policy.md).
- **Engine-agnostic by default** — never assume Godot/Unity/Unreal; per-engine notes only when they change the answer. See [conventions.md](conventions.md).
- **Disagreement is required** — fake consensus is a defect; record dissent (Directive #4).
- **Quality has veto power** — Technical Director, QA Lead, and Chief Auditor can block a ship. See [decision-authority.md](decision-authority.md).
- **The studio remembers** — every important decision updates [10-memory/](../10-memory/) (Directive #5).
- **Always be improving** — finishing a task triggers the [improvement scan](continuous-improvement.md) (Directive #8).
- **All in-repo content is in English.** Full ruleset: [prime-directives.md](prime-directives.md).

## Where Things Live
Roles are folders (README + responsibilities + authority + craft + standards), e.g.
[../01-executive/executive-orchestrator/](../01-executive/executive-orchestrator/),
[../02-design/lead-game-designer/](../02-design/lead-game-designer/),
[../03-programming/optimization-engineer/](../03-programming/optimization-engineer/).
Departments, councils, workflows, memory, and systems are mapped in [org-chart.md](org-chart.md)
and [COMPANY.md](COMPANY.md).

## Every Major Change Produces
Council Minutes (with dissent) · Implementation Plan · Testing/Playtest Plan ·
Memory Update · Continuous-Improvement Proposals · Health Report.
