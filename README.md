# AIEOS — AI Enterprise Operating System

> An open-source operating system for AI organizations. It hosts an unlimited number
> of independent AI companies inside Claude Code, each inheriting the same kernel,
> the same communication protocol, the same workflow engine, and the same memory
> architecture — so every company behaves like a real organization, not a pile of prompts.

AIEOS is to AI companies what Linux is to programs, Kubernetes is to services, and
Unreal Engine is to games: a **kernel** plus a **standard library** that everything
else inherits, extends, and overrides — never forks.

---

## The mental model

```
                 ┌─────────────────────────────────────────────┐
   LAW           │  kernel/laws         prime directives, tiers │  inherited by all
                 ├─────────────────────────────────────────────┤
   MECHANISM     │  kernel/contracts    base "classes"          │  what an entity IS
                 │  kernel/protocols    communication, 15-agent │  how entities act
                 │  kernel/loader       inheritance resolution  │  default ← override
                 │  kernel/registry     what is installed       │
                 ├─────────────────────────────────────────────┤
   STD LIBRARY   │  templates/  workflows/  councils/  memory/  │  free defaults
                 ├─────────────────────────────────────────────┤
   COORDINATION  │  government/         Supreme Orchestrator +  │  routes, never builds
                 │                      CEO CTO COO Auditor CIO  │
                 ├─────────────────────────────────────────────┤
   USERLAND      │  companies/          plugins: software, game,│  inherit everything
                 │                      tabletop, …             │
                 └─────────────────────────────────────────────┘
```

Knowledge flows **down** (enterprise → company → department → agent).
Decisions of consequence flow **up**. Companies never talk to each other directly —
all cross-company coordination goes through the **Government**.

## Repository map

| Path | Role |
|------|------|
| [kernel/](kernel/) | The OS core: contracts, protocols, laws, loader, registry. No company logic. |
| [government/](government/) | Supranational coordination. Routes work; never implements. |
| [templates/](templates/) | Base templates every company inherits (agent, council, workflow, …). |
| [workflows/](workflows/) | Reusable workflow library (feature, bug, hotfix, research, …). |
| [councils/](councils/) | Reusable council blueprints. |
| [memory/](memory/) | Enterprise memory + the hierarchical memory architecture. |
| [shared/](shared/) | Conventions, glossary, quality standards — cross-cutting. |
| [companies/](companies/) | Installed companies (plugins). |
| [docs/](docs/) | Architecture, design notes, how the OS explains itself. |
| [examples/](examples/) | Worked examples of building on AIEOS. |
| [tests/](tests/) | Conformance checks for the kernel contracts. |
| [roadmap/](roadmap/) | Where AIEOS is going. |

## Start here

1. [CLAUDE.md](CLAUDE.md) — operating instructions for Claude Code inside AIEOS.
2. [kernel/laws/prime-directives.md](kernel/laws/prime-directives.md) — the rules that override everything but a human.
3. [kernel/README.md](kernel/README.md) — how the kernel is put together.
4. [roadmap/ROADMAP.md](roadmap/ROADMAP.md) — the build plan.

## Status

Phase 1 — Foundation. The kernel core is being established. See
[CHANGELOG.md](CHANGELOG.md) and [roadmap/ROADMAP.md](roadmap/ROADMAP.md).

## License

[MIT](LICENSE). Contributions: [CONTRIBUTING.md](CONTRIBUTING.md).
