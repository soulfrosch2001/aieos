# Release Log
Status: stable
Type: memory-register
Owner: operations-director
Extends: lessons-learned

**Purpose:** What each release and production run actually produced — outcomes,
launch metrics, and the lesson learned so the next release goes better.
**Discipline:** append-mostly — correct by adding a dated entry, never by erasing.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| Release / Track | What shipped. |
| Tier | Engagement tier of the run. |
| Outcome | What happened (delivered, held, rolled back). |
| Lesson | The reusable lesson. |
| Owner | Accountable role. |

## Example entry
| 2026-06-26 | "Midnight EP" — release-campaign | T3 | Delivered; launch verified across 3 channels | Lock metadata before the readiness audit to avoid a re-run of Gate A | operations-director |

## Who updates this & when
The operations-director owns this register. It is written at the **Record** step of
[track-production](../../workflows/track-production.md) (master delivered or held)
and [release-campaign](../../workflows/release-campaign.md) (launch outcome and
metrics).

## Flow
- Knowledge flows **down** from the enterprise lessons-learned register to this child.
- Decisions of consequence flow **up** to the enterprise lessons-learned register.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
