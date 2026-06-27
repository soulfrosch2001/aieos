<!-- Memory register (append-mostly). Contract: ../../../kernel/contracts/memory-register.md -->

# Balance Backlog
Status: stable
Type: memory-register
Owner: ceo
Extends: future-improvements

**Purpose:** the parking lot for balance symptoms noticed but not yet committed to a
pass — the "this looks swingy" notes spotted mid-build and the smells flagged in passing,
captured before they are lost, without pretending they are scheduled work.
**Discipline:** append-mostly — this register has weak gravity by design: living here
means "noted, not promised." A symptom is corrected by a newer dated entry, never erased;
when committed, it is promoted out to a [balance-pass](../../workflows/balance-pass.md),
not deleted in place.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When noticed (YYYY-MM-DD). |
| Item | Stable id, e.g. `BB-009`. |
| Symptom | The suspected imbalance, in one sentence. |
| Surface | economy / progression / competitive, and the title. |
| Origin | The run that flagged it (workflow + system). |
| Pull | Why it matters: severity, frequency, player impact. |
| Status | `parked` · `promoted` · `dropped`. |

## Example entry
| 2026-06-26 | BB-009 | Late-game crafting sink dries up, wallets balloon after hour 30 | economy / client-A | balance-pass on early economy | High: undoes the early-game tune over a longer horizon | parked |

## Who updates this & when
Any tuner or analyst flags an item during a
[balance-pass](../../workflows/balance-pass.md),
[playtest-analysis](../../workflows/playtest-analysis.md), or
[patch-balancing](../../workflows/patch-balancing.md) run when they notice a symptom
worth keeping but out of the current scope. Promotion to a real pass is a
[ceo](../../01-executive/ceo/) direction-setting decision (it picks which titles and
systems to tune) and moves the item onto the plan; nothing here is a commitment until
then.

## Flow
- Knowledge flows **down** from
  [future-improvements](../../../memory/registers/future-improvements.md) — the
  weak-gravity, "noted not promised" parking-lot semantics.
- Decisions of consequence flow **up**: a symptom committed to a pass is promoted onto
  the plan and leaves the parking lot.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
