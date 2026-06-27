<!-- Memory register (append-mostly). Contract: ../../../kernel/contracts/memory-register.md -->

# Open Questions
Status: stable
Type: memory-register
Owner: lab-director
Extends: future-improvements

**Purpose:** the lab's standing list of unanswered questions worth pursuing — the candidate
agenda from which the lab-director decides what earns bench time.
**Discipline:** append-mostly — a question is never deleted; it is **closed** by a dated entry
that links the finding or the decision that resolved it, so the lab can see why a line was
dropped.

This register extends the stdlib
[future-improvements](../../../memory/registers/future-improvements.md): it is the lab's
parking lot of not-yet-committed ideas, and adds the stricter requirement that every question
name the **decision or theory it would inform** — a question that changes nothing is not worth
recording.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| QID | Stable id, e.g. `Q-027`. |
| Question | The sharp, answerable question. |
| Why it matters | The decision, theory, or finding it would inform. |
| Priority | `high` · `medium` · `low` — agenda weight. |
| Status | `open` · `in-progress` · `closed`. |
| Resolved by | Finding/experiment id that closed it, or `—`. |

## Example entry
| 2026-06-26 | Q-027 | Does Treatment X's yield gain hold at scale (n>1000)? | Decides whether FIND-014 generalizes to production conditions | high | open | — |

## Who updates this & when
The lab-director owns the agenda and appends new questions as they surface — from a
[publication](../../workflows/publication.md) discussion section, a
[peer-review](../../workflows/peer-review.md) that opened more than it closed, or a council. A
question moves to `in-progress` when [experiment-design](../../workflows/experiment-design.md)
picks it up and to `closed` when a [finding](findings.md) resolves it.

## Flow
- Knowledge flows **down** from [future-improvements](../../../memory/registers/future-improvements.md): inherited parked ideas seed the local agenda.
- A question of cross-company consequence is promoted up rather than answered in isolation.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
