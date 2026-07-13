<!-- Entity README. Contract: ../../kernel/contracts/memory-register.md -->

# Memory
Status: stable
Type: memory-index
Owner: studio-orchestrator
Extends: none

**Purpose:** the studio's institutional memory — the registers that let a tune shipped
this quarter not silently contradict one shipped last quarter, and let a balance lesson
survive the analyst who learned it. Memory is how AI Game Balancing Studio stays
coherent across many titles and many hands.

## What lives here
| Register | Owner | Extends (stdlib) | Holds |
|----------|-------|------------------|-------|
| [balance-decisions](registers/balance-decisions.md) | balance-director | [architecture-decisions](../../memory/registers/architecture-decisions.md) | Tuning decisions, their models, and the before/after they commit to. |
| [balancing-history](registers/balancing-history.md) | economy-balancer | [lessons-learned](../../memory/registers/lessons-learned.md) | What playtests and telemetry taught about each system. |
| [balance-backlog](registers/balance-backlog.md) | ceo | [future-improvements](../../memory/registers/future-improvements.md) | Symptoms noticed but not yet committed to a pass. |

See [architecture.md](architecture.md) for how these plug into the enterprise memory
hierarchy.

## Discipline
- **Append-mostly.** Correct by adding a dated entry that supersedes the old one;
  never erase. A balance decision is reversed, never edited, so the reasoning chain
  stays auditable.
- **Workflows write here, not improvisation.** Every register is appended by a named
  step in a [workflow](../workflows/), so updates are part of "done," not optional.
- **Flow obeys the kernel.** Knowledge flows down from parent registers; decisions of
  consequence flow up. See [memory-flow](../../kernel/protocols/memory-flow.md).

## Repo map
- Up: [studio root](../README.md) · [company charter](../00-company/COMPANY.md)
- Sideways: [workflows](../workflows/) · [councils](../councils/) · [reports](../reports/)
- Inherited: [../../kernel/](../../kernel/) · [../../memory/registers/](../../memory/registers/)
