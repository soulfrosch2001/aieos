# Engagement Lessons
Status: stable
Type: memory-register
Owner: operations-partner
Extends: lessons-learned

**Purpose:** What worked and what to change next time — sizing accuracy, staffing
fit, what made a recommendation land, and what aided or blocked adoption.
**Discipline:** append-mostly — correct by adding a dated entry, never by erasing.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| Engagement | The engagement / client code the lesson came from. |
| Lesson | What we learned. |
| Trigger | The situation that surfaced it. |
| Change | What we will do differently. |
| Owner | Who carries the change forward. |

## Example entry
| 2026-06-26 | ENG-014 | Adoption stalls without a named client sponsor | Rollout slowed when sponsor was unclear | Require a named sponsor at Gate A of implementation | operations-partner |

## Who updates this & when
The [operations-partner](../../01-executive/operations-partner/) owns this
register. Lessons are appended at the **Record** step of
[engagement-scoping](../../workflows/engagement-scoping.md),
[strategy-development](../../workflows/strategy-development.md), and
[implementation](../../workflows/implementation.md), and at any engagement
retrospective.

## Flow
- Knowledge flows **down** from the enterprise `lessons-learned` register as conventions we inherit.
- Lessons of consequence flow **up** to `lessons-learned` when they should bind other companies.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
