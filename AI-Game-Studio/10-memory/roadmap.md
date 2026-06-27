# roadmap.md — Studio Roadmap Register

> Corporate Memory register of committed and planned work, sequenced by milestone. The
> roadmap is a **promise of sequence, not a wishlist** — speculative ideas live in
> [future-features.md](future-features.md) until they earn a slot here. Append-mostly;
> slipped items keep their history with a dated note.

## Purpose
One ordered truth for "what we're building next and in what order." Forces ranking —
ties are a refusal to choose. Owned by production so engineering, art, audio, and
marketing ([../11-marketing/](../11-marketing/)) plan against the same dates.

## Schema / Columns
| Column | Meaning |
|--------|---------|
| `ID` | `RM-NNN`, sequential |
| `Milestone` | Target release/build (e.g. `Vertical Slice`, `0.9`, `1.0`, `DLC-1`) |
| `Item` | The feature/system/content |
| `Tier` | T0–T4 |
| `Priority` | `P0 must \| P1 should \| P2 could` |
| `Owner Dept` | Accountable department |
| `Status` | `planned \| in-progress \| shipped \| slipped → milestone \| cut` |
| `Notes` | Dependencies, links to design/ADR rows |

## Example Entry
| ID | Milestone | Item | Tier | Priority | Owner Dept | Status | Notes |
|----|-----------|------|------|----------|-----------|--------|-------|
| RM-001 | Vertical Slice | Core combat loop (attack/dash/parry) | T3 | P0 | [02-design](../02-design/) + [03-programming](../03-programming/) | in-progress | Depends on GDD-001, ADR-0001 |

## Who Updates This & When
The **[roadmap-manager](../06-production/roadmap-manager/)** owns this register and updates
it at every sprint boundary and milestone review; the
[production-director](../01-executive/production-director/) signs off re-sequencing. New
items enter only after they have a design decision ([game-design-decisions.md](game-design-decisions.md))
or are promoted from [future-features.md](future-features.md). Slips are recorded as
`slipped → milestone` with a dated reason — we never quietly move a date.
