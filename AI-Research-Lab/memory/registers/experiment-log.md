<!-- Memory register (append-mostly). Contract: ../../../kernel/contracts/memory-register.md -->

# Experiment Log
Status: stable
Type: memory-register
Owner: principal-investigator
Extends: lessons-learned

**Purpose:** the running log of every experiment the lab runs — its registered hypothesis,
design, and outcome — so the lab learns from what worked, what failed, and what did not
reproduce.
**Discipline:** append-mostly — an experiment entry is never rewritten; an amendment, a
result, or a non-reproduction is recorded as a new dated line back-linked to the original.

This register extends the stdlib
[lessons-learned](../../../memory/registers/lessons-learned.md): it carries reusable guidance
from experience, and adds the stricter requirement that the **pre-registered hypothesis and
analysis plan** be logged *before* data collection, so the record cannot be retrofitted to a
result.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| Exp | Stable id, e.g. `EXP-031`. |
| Hypothesis | The falsifiable claim under test, as pre-registered. |
| Design | Controls, randomization/blinding, sample, and the fixed analysis plan. |
| Outcome | `supported` · `refuted` · `inconclusive` · `not-reproduced`. |
| Lesson | What the lab takes forward (a method, a pitfall, a dead end). |

## Example entry
| 2026-06-26 | EXP-031 | Treatment X raises assay yield vs control | Double-blind, n=120, pre-registered t-test on primary endpoint | supported | Blinding the measurement step removed the reader bias seen in EXP-019 |

## Who updates this & when
The principal-investigator appends at registration during
[experiment-design](../../workflows/experiment-design.md) (hypothesis + design, before data),
and again at the outcome after [peer-review](../../workflows/peer-review.md) records whether
the result held and reproduced. A mid-study change to a pre-registered element is logged as a
dated amendment, never a silent edit ([Directive #8](../../../kernel/laws/prime-directives.md)).

## Flow
- Knowledge flows **down** from [lessons-learned](../../../memory/registers/lessons-learned.md): inherited methods and pitfalls inform the next design.
- A reusable lesson of company-wide consequence is promoted up to the Company lessons register.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
