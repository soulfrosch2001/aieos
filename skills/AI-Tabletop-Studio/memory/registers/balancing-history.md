<!-- Memory register (append-mostly). Contract: ../../../kernel/contracts/memory-register.md -->

# Balancing History
Status: stable
Type: memory-register
Owner: Balance Designer
Extends: none

**Purpose:** the immutable trail of every balance change — point costs, card
power, faction win-rates, economy tuning — paired with the evidence that
triggered it and the measured effect afterward. This is the company-only memory
the kernel does not model, because no generic enterprise has a "win-rate."
**Discipline:** append-mostly — a nerf is never silently re-tuned; each pass is a
new dated row, so the swing of the pendulum (over-nerf → re-buff) is fully
visible and never repeated by accident.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When the change shipped (YYYY-MM-DD). |
| Change | The unit and adjustment, e.g. `Pyromancer cost 4→5`. |
| Trigger | The evidence: data row, playtest signal, or feedback id. |
| Before | Measured metric before (e.g. win-rate 64%). |
| Target | Intended metric (e.g. 50% ±5). |
| After | Measured metric in the next playtest round, or `pending`. |
| Linked | `GDR-…` / `PF-…` ids this change relates to. |

## Example entry
| 2026-06-26 | Pyromancer cost 4→5 | PF-018: dominated 7/8 tables | win-rate 64% | 50% ±5 | 53% (round 12) | GDR-021, PF-018 |

## Who updates this & when
The Balance Designer appends after every balance pass that the
[balance-council](../../councils/balance-council/README.md) approves, then returns
to fill the `After` column once the next [playtest](../../workflows/playtest.md)
round reports. A balance change is not "done" until its `After` is measured —
that is the testability gate.

## Flow
- This register is company-only; it has no parent stdlib register.
- Decisions of consequence flow **up**: a recurring balance pattern (e.g. a cost
  curve rule) is promoted into [design-decisions](design-decisions.md) as a GDR.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
