# Matter Log
Status: stable
Type: memory-register
Owner: operations-partner
Extends: lessons-learned

**Purpose:** the firm's running record of matters delivered — outcomes, turnaround,
and the delivery lessons that improve how the next matter is staffed and sequenced.
**Discipline:** append-mostly — correct by adding a dated entry, never by erasing.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| Matter ID | Stable identifier (e.g. M-2026-088). |
| Client / parties | Who, behind the confidentiality boundary. |
| Practice | Advisory / litigation / compliance. |
| Outcome | What was delivered and the result. |
| Turnaround | Calendar days intake to delivery. |
| Lesson | What to do differently next time. |
| Owner | operations-partner. |
| Supersedes | Prior Matter ID entry this corrects, if any. |

## Example entry
| 2026-06-26 | M-2026-088 | Acme Corp / Beta LLC | Advisory | Contract redlined; uncapped indemnity removed | 9 | Run conflicts before scoping to avoid re-staffing | operations-partner | — |

## Who updates this & when
The [operations-partner](../../01-executive/operations-partner/) owns and signs
every entry. Written at the Memory Updates step of
[matter-intake](../../workflows/matter-intake.md),
[contract-review](../../workflows/contract-review.md), and
[legal-opinion](../../workflows/legal-opinion.md) as matters open and close.

## Flow
- Knowledge flows **down** from parent register `lessons-learned` to children.
- Decisions of consequence flow **up** to `lessons-learned` when a delivery lesson
  generalizes beyond this firm.
See [../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
