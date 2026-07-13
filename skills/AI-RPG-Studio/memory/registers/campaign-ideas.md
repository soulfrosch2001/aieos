<!-- Memory register (append-mostly). Contract: ../../../kernel/contracts/memory-register.md -->

# Campaign Ideas
Status: stable
Type: memory-register
Owner: campaign-writer
Extends: future-improvements

**Purpose:** the parking lot for good story hooks and campaign premises not yet
committed to a release — the threads spun off mid-build and the "what if" notes
captured before they are lost, without pretending they are planned work.
**Discipline:** append-mostly — this register has weak gravity by design: living here
means "noted, not promised." An idea is corrected by a newer dated entry, never erased;
when committed, it is promoted out to the release plan, not deleted in place.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When captured (YYYY-MM-DD). |
| Idea | Stable id, e.g. `CI-022`. |
| Hook | The premise or thread, in one sentence. |
| Origin | The run that spun it off (workflow + module). |
| Pull | Why it tempts: novelty, demand, canon fit. |
| Status | `parked` · `promoted` · `dropped`. |

## Example entry
| 2026-06-26 | CI-022 | A heist set during the Sundering's first hour, before the moon falls | Ashfall M1 build | Lets players see canon CN-031 happen instead of hearing about it | parked |

## Who updates this & when
The campaign-writer appends whenever a [campaign-design](../../workflows/campaign-design.md),
[adventure-module](../../workflows/adventure-module.md), or
[playtest](../../workflows/playtest.md) run surfaces a hook worth keeping but not worth
building this pass. Promotion to a real campaign is a [line-producer](../../01-executive/line-producer/)
decision and moves the idea onto the release plan; nothing here is a commitment until then.

## Flow
- Knowledge flows **down** from
  [future-improvements](../../../memory/registers/future-improvements.md) — the
  weak-gravity, "noted not promised" parking-lot semantics.
- Decisions of consequence flow **up**: an idea committed to a release is promoted onto
  the plan and leaves the parking lot.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
