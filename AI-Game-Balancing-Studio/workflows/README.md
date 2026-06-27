<!-- Entity README. Contract: ../../kernel/contracts/workflow.md -->

# Workflows
Status: stable
Type: workflow-index
Owner: studio-orchestrator
Extends: none

**Purpose:** the studio's repeatable balancing paths. Every recurring piece of work —
a tuning pass, a playtest read, a balance patch — runs through one of these so the
route, the gates, and the memory writes are identical every time and nobody improvises
methodology under deadline.

## How these relate to the kernel
Each workflow here **extends** a stdlib workflow rather than reinventing it (Directive
[#6](../../kernel/laws/prime-directives.md) — inherit, don't fork). The
[studio-orchestrator](../01-executive/studio-orchestrator/) sizes every brief against
[engagement-tiers](../../kernel/laws/engagement-tiers.md) and routes per
[orchestration](../../kernel/protocols/orchestration.md); sign-off follows
[decision-authority](../../kernel/laws/decision-authority.md). Briefs arrive only from
the Government, never from another studio directly (Directive
[#5](../../kernel/laws/prime-directives.md)).

## The workflows
| Workflow | Tier | Extends (stdlib) | What it produces |
|----------|------|------------------|------------------|
| [balance-pass](balance-pass.md) | [T2](../../kernel/laws/engagement-tiers.md) | [feature](../../workflows/feature.md) | A tuned system, evidenced and reasoned against the whole loop. |
| [playtest-analysis](playtest-analysis.md) | [T2](../../kernel/laws/engagement-tiers.md) | [research](../../workflows/research.md) | Balance findings extracted from playtest and telemetry data. |
| [patch-balancing](patch-balancing.md) | [T2](../../kernel/laws/engagement-tiers.md) | [release](../../workflows/release.md) | A shipped balance patch with before/after hypotheses. |

## Shared discipline
- **Two gates, always.** Nothing fans out before Gate A; nothing ships before Gate B.
  Gates are blocking, not advisory, and the [balance-director](../01-executive/balance-director/)
  holds the evidence veto at both.
- **No tune without evidence.** Every numeric change cites playtest logs, telemetry, or
  a stated model. Intuition is a hypothesis, not a result.
- **Memory is part of done.** A run is not complete until its registers
  ([balance-decisions](../memory/registers/balance-decisions.md),
  [balancing-history](../memory/registers/balancing-history.md),
  [balance-backlog](../memory/registers/balance-backlog.md)) are appended.

## Repo map
- Up: [studio root](../README.md) · [company charter](../00-company/COMPANY.md)
- Sideways: [councils](../councils/) · [memory](../memory/) · [reports](../reports/)
- Inherited: [../../kernel/](../../kernel/) · [../../templates/](../../templates/)
