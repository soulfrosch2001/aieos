<!-- Memory register (append-mostly). Contract: ../../../kernel/contracts/memory-register.md -->

# Encounter Log
Status: stable
Type: memory-register
Owner: balance-designer
Extends: lessons-learned

**Purpose:** the studio's accumulated balance wisdom — what the table actually
taught about encounter difficulty, pacing, and tuning, phrased as reusable guidance
so the next designer does not relearn it the hard way.
**Discipline:** append-mostly — a lesson that ages out is superseded by a newer dated
entry, never deleted; the old one stays so we remember *why* we once believed a fight
was balanced.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| Entry | Stable id, e.g. `EL-058`. |
| Encounter | What was tested (module + encounter name). |
| Measured | The data: rounds, party level, TPK rate, resource drain. |
| Verdict | `balanced` · `too-easy` · `too-hard` · `swingy`. |
| Lesson | The reusable guidance the result yields. |
| Supersedes | Entry id this revises, or `—`. |

## Example entry
| 2026-06-26 | EL-058 | Ashfall M1 — the Cinder Bridge ambush | 4 rounds avg, level 5, 0/12 TPK, 60% resource drain | balanced | Two ranged attackers on the bridge keep melee parties honest without spiking lethality | — |

## Who updates this & when
The balance-designer appends after every [playtest](../../workflows/playtest.md) run,
and after any [campaign-design](../../workflows/campaign-design.md) or
[adventure-module](../../workflows/adventure-module.md) build that surfaced a tuning
insight. Designers cite the entry id when reusing or revising an encounter rather than
re-running settled tests. A refuted balance assumption is recorded as-is — a negative
result is still a result.

## Flow
- Knowledge flows **down** from
  [lessons-learned](../../../memory/registers/lessons-learned.md) — the format of a
  reusable lesson and the append-mostly hygiene.
- Decisions of consequence flow **up**: a balance lesson that generalizes beyond one
  line rises to the enterprise lessons register.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
