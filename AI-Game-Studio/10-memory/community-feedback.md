# community-feedback.md — Community Feedback Register

> Corporate Memory register where the player's voice becomes durable studio knowledge.
> Raw sentiment from Discord, forums, Steam reviews, and socials is triaged here into
> themes the studio can act on. Owned by the
> [community-manager](../11-marketing/community-manager/) — this is the **feedback loop's
> landing zone** (Prime Directive #1: the player is the north star).

## Purpose
Stop feedback from evaporating in chat scrollback. Each row captures a *theme* (not a
single angry post), its volume and sentiment, and where it routed — so design and
production act on signal, not the loudest voice. Closes the loop: players see their input
move things, which is how community trust is built.

## Schema / Columns
| Column | Meaning |
|--------|---------|
| `ID` | `CF-NNN`, sequential |
| `Date` | ISO date logged |
| `Theme` | The recurring point, summarized |
| `Channel` | Discord / Steam reviews / forums / X / Reddit |
| `Volume` | Rough count or `low/med/high` |
| `Sentiment` | `positive \| mixed \| negative` |
| `Routed To` | [future-features.md](future-features.md) / [known-bugs.md](known-bugs.md) / [balancing-history.md](balancing-history.md) / design |
| `Status` | `triaged \| acknowledged publicly \| actioned (link) \| declined (reason)` |

## Example Entry
| ID | Date | Theme | Channel | Volume | Sentiment | Routed To | Status |
|----|------|-------|---------|--------|-----------|-----------|--------|
| CF-001 | 2026-06-26 | "Backtracking after the swamp boss is tedious" | Discord + Steam reviews | high | negative | design + [future-features.md](future-features.md) (FF-002 fast-travel) | acknowledged publicly |

## Who Updates This & When
The **[community-manager](../11-marketing/community-manager/)** triages channels on a
regular cadence and appends themes — never raw individual posts. Routed items link the
destination register; the owning department updates Status when actioned. The
community-manager carries the loop into the
[release-council](../08-councils/release-council/) so player sentiment is weighed at
Go/No-Go, and reports volume/sentiment trends into
[performance-reports.md](performance-reports.md) context for marketing.
