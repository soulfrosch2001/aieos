<!-- Contract: ../../../kernel/contracts/memory-register.md -->

# Care Lessons
Status: stable
Type: memory-register
Owner: care-coordinator
Extends: lessons-learned

**Purpose:** The coordination lessons the clinic learns and feeds back into the care
path — what worked, what to stop doing, and the reusable improvement. Organizational
coordination lessons only, never clinical findings.
**Discipline:** append-mostly — correct by adding a dated entry, never by erasing.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| Lesson | What was learned. |
| Context | The case or workflow that produced it. |
| Change | The improvement applied to the care path. |
| Feeds | Register or workflow the lesson flows into. |

## Example entry
| 2026-06-26 | Naming a single owner per handoff removed dropped steps | care-coordination | Made disjoint ownership a Gate A check | care-protocols |

## Who updates this & when
The care-coordinator owns this register. Entries are written at the close of
[care-coordination](../../workflows/care-coordination.md) and after every
[safety-review](../../workflows/safety-review.md). Lessons of consequence are promoted
into [care-protocols](care-protocols.md).

## Flow
- Knowledge flows **down** from the stdlib `lessons-learned` register to this child.
- Decisions of consequence flow **up** to the Government's lessons register.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
