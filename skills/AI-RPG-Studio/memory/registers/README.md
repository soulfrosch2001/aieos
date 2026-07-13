<!-- Entity README. Contract: ../../../kernel/contracts/memory-register.md -->

# Registers
Status: stable
Type: memory-index
Owner: rpg-orchestrator
Extends: none

**Purpose:** the studio's append-mostly registers — the actual files where canon,
balance lessons, and idea hooks accumulate. This folder is the studio's long-term
memory; [../architecture.md](../architecture.md) explains how it plugs into the
enterprise hierarchy.

## The registers
| File | Owner | Extends (stdlib) | Holds |
|------|-------|------------------|-------|
| [canon.md](canon.md) | lore-master | [architecture-decisions](../../../memory/registers/architecture-decisions.md) | Binding world facts and their reasoning chain. |
| [encounter-log.md](encounter-log.md) | balance-designer | [lessons-learned](../../../memory/registers/lessons-learned.md) | Measured difficulty and tuning verdicts from play. |
| [campaign-ideas.md](campaign-ideas.md) | campaign-writer | [future-improvements](../../../memory/registers/future-improvements.md) | Hooks and premises noted, not promised. |

## Discipline
Every file here is **append-mostly**: a wrong entry is superseded by a newer dated
entry, never deleted, so the reasoning stays auditable. Each register names the one
kind of knowledge it holds and refuses everything else. Writes happen only as a
named step of a [workflow](../../workflows/).

## Repo map
- Up: [memory index](../README.md) · [memory architecture](../architecture.md) · [studio root](../../README.md)
- Inherited: [../../../kernel/](../../../kernel/) · [../../../memory/registers/](../../../memory/registers/)
