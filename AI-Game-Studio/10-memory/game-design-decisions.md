# game-design-decisions.md — Game Design Decision Register

> Corporate Memory register for **design** calls: pillars, mechanics, feel, scope.
> This is where we record *why* a mechanic exists, not just that it does. Append-mostly:
> add new decisions and dated reversals; never silently rewrite a past call. A decision
> that ships without a row here is incomplete — Prime Directive #5
> ([../00-company/prime-directives.md](../00-company/prime-directives.md)).

## Purpose
Capture every non-trivial design decision (T1+) so future designers inherit reasoning,
not just artifacts. When someone asks "why does the dash cost stamina?", the answer
lives here — with the alternatives we rejected and who owned the dissent.

## Schema / Columns
| Column | Meaning |
|--------|---------|
| `ID` | `GDD-NNN`, sequential, never reused |
| `Date` | ISO date the decision was accepted |
| `Title` | Short name of the decision |
| `Tier` | T0–T4 ([BUILD_SPEC §4](../docs/BUILD_SPEC.md)) |
| `Context` | The problem / player need being solved |
| `Decision` | What we chose |
| `Alternatives` | Options rejected (and the named dissenter, if any) |
| `Owner` | Role accountable, e.g. [lead-game-designer](../02-design/lead-game-designer/) |
| `Council` | Linked council that ruled (or `none` for T0/T1) |
| `Status` | `accepted \| superseded by GDD-NNN \| reverted` |

## Example Entry
| ID | Date | Title | Tier | Context | Decision | Alternatives | Owner | Council | Status |
|----|------|-------|------|---------|----------|--------------|-------|---------|--------|
| GDD-001 | 2026-06-26 | Dash consumes stamina, not cooldown | T2 | Cooldown dashes felt unresponsive in playtests; players spammed and disengaged | Tie dash to a shared stamina pool with attacks | Fixed cooldown (rejected: removes resource tension); free dash (rejected: trivializes spacing) — dissent owned by combat-designer | [combat-designer](../02-design/combat-designer/) | [gameplay-council](../08-councils/gameplay-council/) | accepted |

## Who Updates This & When
The **owning designer** appends a row the moment a design decision is **accepted** at its
council (T2+) or by a dept lead (T1). The [lead-game-designer](../02-design/lead-game-designer/)
audits the register at each milestone for orphaned or contradictory rows. Reversals never
delete a row — they add a new `GDD-NNN` and set the old row's Status to `superseded by GDD-NNN`.
