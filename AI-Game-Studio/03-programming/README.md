# 💻 03 — Programming Department

`Status: stable`

> The department that turns decisions into running code — engine-agnostic, performance-obsessed, and built to be changed safely six months from now. We implement what design and the councils decide; we never start by building (see [Directive #2](../00-company/COMPANY.md) and [#3](../00-company/COMPANY.md)).

## Mission
Programming exists to make the game **run, feel good, and ship** on every target platform without the studio rewriting how it thinks per engine ([Directive #6](../00-company/COMPANY.md)). We treat the frame budget as a contract, the player's input latency as sacred, and maintainability as a feature — because the next agent has to change this code safely. We optimize for the player ([Directive #1](../00-company/COMPANY.md)), measure before we optimize, design before we build, and record why we decided so the studio inherits reasoning, not just artifacts ([Directive #5](../00-company/COMPANY.md)). Quality has veto power here: the [Technical Director](../01-executive/technical-director/) can block a ship regardless of the date ([Directive #7](../00-company/COMPANY.md)).

## Reporting Line
All roles report to the **[Lead Programmer](lead-programmer/)**, who reports to the **[Technical Director](../01-executive/technical-director/)**.

## The 12 Roles

### Leadership & Core Systems
- **[Lead Programmer](lead-programmer/)** — owns technical direction of the codebase, architecture, and the engineering team; the buck stops here for code quality.
- **[Gameplay Programmer](gameplay-programmer/)** — implements mechanics, abilities, and the moment-to-moment game logic designers specify.
- **[AI Programmer](ai-programmer/)** — enemy/NPC behavior, pathfinding, decision-making, and the systems that make the world feel alive.
- **[Engine Programmer](engine-programmer/)** — core systems, the game loop, memory, threading, and the platform abstraction the rest build on.
- **[Graphics Programmer](graphics-programmer/)** — rendering pipeline, shaders, lighting, and the GPU-facing visual systems.
- **[Physics Programmer](physics-programmer/)** — collision, simulation, ragdolls, vehicles, and deterministic-where-it-matters physics.

### Specialist & Platform
- **[UI Programmer](ui-programmer/)** — HUD, menus, the input stack, and the data-binding glue between fingers and game state.
- **[Networking Programmer](networking-programmer/)** — netcode, replication, prediction/reconciliation, lag compensation, and server authority.
- **[Tools Programmer](tools-programmer/)** — editor tools, content pipelines, and dev-productivity systems that multiply the whole studio.
- **[Console Programmer](console-programmer/)** — platform certification (TRC/TCR/Lotcheck), platform SDKs, and the hardware-specific reality of shipping on consoles.
- **[Optimization Engineer](optimization-engineer/)** — profiling, the frame budget, and CPU/GPU/memory optimization on minimum-spec hardware.
- **[Build Engineer](build-engineer/)** — CI/CD, the build farm, packaging, and the automation that keeps the studio one green build from shipping.

## Councils This Department Sits On
- **[Technical Council](../08-councils/technical-council/)** — architecture, framework/middleware choices, and cross-cutting engineering decisions. Home council of the department.
- **[Performance Council](../08-councils/performance-council/)** — frame budget, performance targets, and perf go/no-go (Optimization Engineer, Graphics, Engine, Console).
- **[Optimization Council](../08-councils/optimization-council/)** — deep, systemic optimization strategy across CPU/GPU/memory/content.
- **[Release Council](../08-councils/release-council/)** — release candidates, cert readiness, and ship go/no-go (Console Programmer, Build Engineer, Lead Programmer).
- Also engages the [Security Council](../08-councils/security-council/) for netcode/anti-cheat threat modeling.

## How Work Enters the Department
Requests arrive routed and tiered from the [Executive Orchestrator](../01-executive/executive-orchestrator/) ([core flow](../00-company/COMPANY.md)). Anything non-trivial gets a written plan from the right council before code is written ([Directive #3](../00-company/COMPANY.md)). Disjoint ownership keeps tracks parallel and conflict-free; dissent is recorded, never suppressed ([Directive #4](../00-company/COMPANY.md)). Finishing a task triggers a continuous-improvement scan for nearby perf/UX/architecture wins ([Directive #8](../00-company/COMPANY.md)), and every important decision updates [10-memory/](../10-memory/).

## Department Standards (non-negotiable)
- **Measure before you optimize**, and never trade away what the player feels for a better number.
- **Engine-agnostic by default**; per-engine guidance (Godot / Unity / Unreal) only where it changes the answer.
- **One source of truth** for every piece of state; UI and clients are views, never authorities.
- **The failure path is the job** — networks lie, packets drop, builds break, cert rejects; design for it.
- **Quality gates and the [Technical Director](../01-executive/technical-director/)'s veto are real.** A janky, uncertifiable, or red-build candidate does not ship.
