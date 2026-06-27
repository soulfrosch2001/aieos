# lessons-learned.md — Lessons Learned Register

> Corporate Memory register for hard-won knowledge: what went right, what went wrong,
> and the **transferable lesson** we refuse to relearn. This is the studio's scar tissue.
> Append-only — a lesson is never deleted, only refined by a later, dated lesson.

## Purpose
Turn pain and luck into policy. After every shipped feature, milestone, incident, or
playtest, we ask: what would we tell our past selves? A lesson with no behavioral change
is just a feeling — every row names the **change we made** so the lesson has teeth. Feeds
the [continuous-improvement](../12-systems/continuous-improvement.md) system (Prime Directive #8).

## Schema / Columns
| Column | Meaning |
|--------|---------|
| `ID` | `LL-NNN`, sequential |
| `Date` | ISO date captured |
| `Trigger` | Event that taught it (incident, ship, playtest, audit) |
| `What Happened` | The concrete situation |
| `Lesson` | The transferable principle |
| `Change Made` | What we now do differently (process/standard/checklist) |
| `Owner` | Role that owns the changed practice |

## Example Entry
| ID | Date | Trigger | What Happened | Lesson | Change Made | Owner |
|----|------|---------|---------------|--------|-------------|-------|
| LL-001 | 2026-06-26 | Playtest 7 | New players never found the dodge; tutorial introduced it after the first hard fight | Teach a defensive verb *before* the encounter that demands it | Added a "verb-before-threat" gate to the [playtesting](../09-workflows/playtesting.md) checklist | [lead-game-designer](../02-design/lead-game-designer/) |

## Who Updates This & When
Captured at every **retrospective, post-incident review, and playtest debrief** — owned by
whoever ran the session, audited by the [production-director](../01-executive/production-director/).
A lesson that doesn't produce a `Change Made` is sent back; we don't log platitudes. The
[continuous-improvement](../12-systems/continuous-improvement.md) scan pulls from here when
finishing tasks (Prime Directive #8).
