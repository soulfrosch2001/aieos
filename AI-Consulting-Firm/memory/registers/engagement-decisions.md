# Engagement Decisions
Status: stable
Type: memory-register
Owner: engagement-director
Extends: architecture-decisions

**Purpose:** The engagement decisions of consequence — scope rulings, method
calls, the recommendation chosen and the alternatives rejected, and delivery
decisions — with the rationale behind each.
**Discipline:** append-mostly — correct by adding a dated entry, never by erasing.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| Engagement | The engagement / client code the decision belongs to. |
| Decision | What was decided. |
| Rationale | Why — the evidence or trade-off that drove it. |
| Alternatives | Options considered and rejected. |
| Decided by | Accountable role (per [decision-authority](../../../kernel/laws/decision-authority.md)). |
| Supersedes | Prior entry this corrects, if any (append, never erase). |

## Example entry
| 2026-06-26 | ENG-014 | Recommend phased rollout over big-bang | Lower adoption risk; cash-flow fits client budget | Big-bang (rejected: change capacity too low) | engagement-director | — |

## Who updates this & when
The [engagement-director](../../01-executive/engagement-director/) owns this
register. It is written at the **Record** step of
[engagement-scoping](../../workflows/engagement-scoping.md),
[strategy-development](../../workflows/strategy-development.md), and
[implementation](../../workflows/implementation.md). Recording precedes acting on
any decision of consequence (local rule, [COMPANY.md](../../00-company/COMPANY.md)).

## Flow
- Knowledge flows **down** from the enterprise `architecture-decisions` register to this one.
- Decisions of consequence flow **up** to `architecture-decisions` when they bind beyond a single engagement.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
