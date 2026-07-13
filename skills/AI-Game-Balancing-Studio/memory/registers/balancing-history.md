<!-- Memory register (append-mostly). Contract: ../../../kernel/contracts/memory-register.md -->

# Balancing History
Status: stable
Type: memory-register
Owner: economy-balancer
Extends: lessons-learned

**Purpose:** the studio's measured record of what tunes actually did — the verdicts
from playtest and telemetry windows on whether a change held, regressed, or surprised.
It is how the studio learns its trade title by title rather than re-discovering the same
pitfalls.
**Discipline:** append-mostly — a verdict is corrected by a newer dated entry that
supersedes it with fuller data, never erased, so the learning trail and its caveats stay
intact, exactly as a lesson is in the
[lessons-learned](../../../memory/registers/lessons-learned.md) register this one
extends.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When measured (YYYY-MM-DD). |
| Entry | Stable id, e.g. `BH-007`. |
| System | The surface and title measured. |
| Observation | What the data showed, with effect size and confidence. |
| Verdict | `held` · `regressed` · `inconclusive` · `surprised`. |
| Lesson | The reusable takeaway for the next tune. |
| Links | Decision (`BD-…`) and source dataset it judges. |

## Example entry
| 2026-06-26 | BH-007 | economy / client-A | Median wallet fell 11% over two weeks, n≈40k, 95% CI ±2% | held | Login-reward cuts move wallets predictably; sinks did not need touching | BD-014 |

## Who updates this & when
The economy-balancer appends after every
[playtest-analysis](../../workflows/playtest-analysis.md) run and after the post-ship
window of a [patch-balancing](../../workflows/patch-balancing.md) closes, recording the
verdict against the decision's hypothesis. A verdict overturned by fuller data is
reversed here by a superseding entry rather than edited.

## Flow
- Knowledge flows **down** from
  [lessons-learned](../../../memory/registers/lessons-learned.md) — the format of a
  reusable lesson and append-mostly hygiene.
- Decisions of consequence flow **up**: a balance lesson that generalizes beyond one
  title is promoted to enterprise lessons.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
