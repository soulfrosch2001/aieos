# AI-Tabletop-Studio — Workflows

Status: stable
Type: workflow
Owner: studio-orchestrator
Extends: [stdlib workflows](../../workflows/README.md)

The studio's local workflow library. Each file **extends** a stdlib workflow of a
related name (Prime Directive [#6](../../kernel/laws/prime-directives.md): inherit,
don't fork). We inherit the stdlib shape — Gate A before build, Gate B before ship,
a closing memory write — and add only the strictness that designing physical games
demands: a **design-coherence check** and a **playtest-evidence bar** the generic
stdlib has no reason to carry.

A workflow **routes** craft to agents; it never inlines it (Directive
[#2](../../kernel/laws/prime-directives.md)). The studio-orchestrator owns sizing,
fan-out, and integration, and never builds.

## The local library

| Workflow | Tier | Extends (stdlib) | Use it when |
|----------|------|------------------|-------------|
| [rules-design](rules-design.md) | [T2](../../kernel/laws/engagement-tiers.md) | [feature](../../workflows/feature.md) | Designing a new rules subsystem with real design choices. |
| [playtest](playtest.md) | [T2](../../kernel/laws/engagement-tiers.md) | [research](../../workflows/research.md) + [audit](../../workflows/audit.md) | Running a structured playtest cycle to test a hypothesis. |
| [expansion](expansion.md) | [T3](../../kernel/laws/engagement-tiers.md) | [release](../../workflows/release.md) + [planning](../../workflows/planning.md) | Planning and shipping a content expansion to a published game. |

## Selection rules
- Size first, then pick. The tier sets fan-out and sign-off — see
  [orchestration](../../kernel/protocols/orchestration.md) and
  [decision-authority](../../kernel/laws/decision-authority.md).
- When two fit, the higher tier wins the decision; the lower may execute it.
- An override may only **add** local strictness (override by name) — never loosen a
  Kernel Law ([resolution-order](../../kernel/loader/resolution-order.md)).

## Memory
Every workflow's last step appends to a local register under
[../memory/registers/](../memory/registers/) — design-decisions, balancing-history,
or playtest-feedback — and/or an inherited stdlib register. Decisions of consequence
flow up ([memory-flow](../../kernel/protocols/memory-flow.md)).
