# technical-debt.md — Technical Debt Register

> Corporate Memory register of debt the studio knowingly carries. Debt is taken **on
> purpose** to hit a date or learn faster — and tracked openly so it never becomes a
> silent tax. Append-mostly: add new debt and status updates; never erase a debt's
> history. Pairs with [architecture-decisions.md](architecture-decisions.md).

## Purpose
Make every shortcut visible, owned, and priced. Hidden debt is what turns a 2-day fix
into a 2-week firefight. Each row names the interest we pay each period we leave it
unpaid, so production can schedule paydown against real cost — not vibes.

## Schema / Columns
| Column | Meaning |
|--------|---------|
| `ID` | `TD-NNN`, sequential |
| `Description` | The shortcut and where it lives |
| `Owner` | Role accountable for paydown |
| `Severity` | `low \| medium \| high \| critical` |
| `Interest` | What it costs us each period unpaid |
| `Origin ADR` | Link to the [ADR](architecture-decisions.md) that incurred it |
| `Status` | `open \| paying-down \| paid \| accepted` |

## Example Entry
| ID | Description | Owner | Severity | Interest | Origin ADR | Status |
|----|-------------|-------|----------|----------|-----------|--------|
| TD-001 | Save system serializes the full world each autosave instead of deltas | [engine-programmer](../03-programming/engine-programmer/) | medium | ~400ms hitch every 90s; will block console cert | ADR-0003 | open |

## Who Updates This & When
The **engineer who takes on the shortcut** opens the row in the same change that incurs
the debt — debt and its ADR are committed together. The
[technical-director](../01-executive/technical-director/) reviews severity and interest at
each milestone and the [production-director](../01-executive/production-director/) schedules
paydown. When paid, append a dated note and set Status to `paid` — keep the row so the
history survives. `accepted` means we have decided to live with it indefinitely (and said why).
