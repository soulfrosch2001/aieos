<!-- Entity README. Contract: ../../../kernel/contracts/memory-register.md -->

# Registers
Status: stable
Type: memory-index
Owner: studio-orchestrator
Extends: none

**Purpose:** the studio's append-mostly registers — the actual files where tuning
decisions, balance lessons, and noticed symptoms accumulate. This folder is the
studio's long-term memory; [../architecture.md](../architecture.md) explains how it
plugs into the enterprise hierarchy.

## The registers
| File | Owner | Extends (stdlib) | Holds |
|------|-------|------------------|-------|
| [balance-decisions.md](balance-decisions.md) | balance-director | [architecture-decisions](../../../memory/registers/architecture-decisions.md) | Tuning decisions and their before/after reasoning chain. |
| [balancing-history.md](balancing-history.md) | economy-balancer | [lessons-learned](../../../memory/registers/lessons-learned.md) | Measured verdicts on what a tune did to a system. |
| [balance-backlog.md](balance-backlog.md) | ceo | [future-improvements](../../../memory/registers/future-improvements.md) | Symptoms noticed, not yet promised a pass. |

## Discipline
Every file here is **append-mostly**: a wrong entry is superseded by a newer dated
entry, never deleted, so the reasoning stays auditable. Each register names the one
kind of knowledge it holds and refuses everything else. Writes happen only as a named
step of a [workflow](../../workflows/).

## Repo map
- Up: [memory index](../README.md) · [memory architecture](../architecture.md) · [studio root](../../README.md)
- Inherited: [../../../kernel/](../../../kernel/) · [../../../memory/registers/](../../../memory/registers/)
