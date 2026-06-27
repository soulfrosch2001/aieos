# future-features.md — Future Features & Ideas Backlog

> Corporate Memory register: the **idea queue** — proposals not yet committed. This is
> where "wouldn't it be cool if…" lives so it stops derailing current work. An idea here
> is a hypothesis, not a promise; it earns a [roadmap.md](roadmap.md) slot only after it's
> sized and justified. Append-mostly; reject openly, never silently.

## Purpose
Protect focus without losing good ideas. Anyone — including the
[community-manager](../11-marketing/community-manager/) channeling player requests from
[community-feedback.md](community-feedback.md) — can drop a proposal here. The studio
periodically grooms the queue: promote, park, or kill, always with a reason.

## Schema / Columns
| Column | Meaning |
|--------|---------|
| `ID` | `FF-NNN`, sequential |
| `Date` | ISO date proposed |
| `Idea` | The feature/system in one line |
| `Player Problem` | What player need it serves (no problem → not promoted) |
| `Rough Tier` | Estimated T-size |
| `Proposer` | Role/source |
| `Disposition` | `parked \| under-review \| promoted → RM-NNN \| rejected (reason)` |

## Example Entry
| ID | Date | Idea | Player Problem | Rough Tier | Proposer | Disposition |
|----|------|------|----------------|-----------|----------|-------------|
| FF-001 | 2026-06-26 | Photo mode | Players want to share the game's vistas; drives organic marketing | T2 | [social-media-manager](../11-marketing/social-media-manager/) | under-review |

## Who Updates This & When
**Anyone** appends a proposal — the bar to *enter* is low, the bar to *promote* is high.
The [lead-game-designer](../02-design/lead-game-designer/) and
[roadmap-manager](../06-production/roadmap-manager/) groom the queue each milestone:
promotion creates a [roadmap.md](roadmap.md) row and sets `promoted → RM-NNN`; rejection
records the reason inline. A proposal with no `Player Problem` is bounced back, not promoted
(Prime Directive #1).
