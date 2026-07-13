<!-- Entity README. Contract: ../../kernel/contracts/memory-register.md -->

# Memory
Status: stable
Type: memory-index
Owner: rpg-orchestrator
Extends: none

**Purpose:** the studio's institutional memory — the registers that let a campaign
written next year not contradict one written today, and let a tuning lesson survive
the designer who learned it. Memory is how AI RPG Studio stays coherent across many
books and many hands.

## What lives here
| Register | Owner | Extends (stdlib) | Holds |
|----------|-------|------------------|-------|
| [canon](registers/canon.md) | lore-master | [architecture-decisions](../../memory/registers/architecture-decisions.md) | Binding world facts: names, timeline, cosmology, geography. |
| [encounter-log](registers/encounter-log.md) | balance-designer | [lessons-learned](../../memory/registers/lessons-learned.md) | What the table taught about difficulty and balance. |
| [campaign-ideas](registers/campaign-ideas.md) | campaign-writer | [future-improvements](../../memory/registers/future-improvements.md) | Hooks and premises noted, not yet promised. |

See [architecture.md](architecture.md) for how these plug into the enterprise
memory hierarchy.

## Discipline
- **Append-mostly.** Correct by adding a dated entry that supersedes the old one;
  never erase. Canon especially is reversed, never edited, so the reasoning chain
  stays auditable.
- **Workflows write here, not improvisation.** Every register is appended by a named
  step in a [workflow](../workflows/), so updates are part of "done," not optional.
- **Flow obeys the kernel.** Knowledge flows down from parent registers; decisions
  of consequence flow up. See
  [memory-flow](../../kernel/protocols/memory-flow.md).

## Repo map
- Up: [studio root](../README.md) · [company charter](../00-company/COMPANY.md)
- Sideways: [workflows](../workflows/) · [councils](../councils/) · [reports](../reports/)
- Inherited: [../../kernel/](../../kernel/) · [../../memory/registers/](../../memory/registers/)
