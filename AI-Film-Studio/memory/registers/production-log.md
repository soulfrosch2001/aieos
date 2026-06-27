# Production Log
Status: stable
Type: memory-register
Owner: line-producer
Extends: lessons-learned

**Purpose:** the studio's running record of what each shoot and finish taught — the
schedule, budget, and pipeline lessons that should make the next film go better.
**Discipline:** append-mostly — a lesson is never edited; a revised understanding is
added as a new dated entry that supersedes the prior one, so the learning chain stays
auditable.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| Log | Stable id, e.g. `LOG-031`. |
| Project | Project code or working title the lesson came from. |
| Phase | Where it surfaced: `production` · `post-production`. |
| Lesson | What happened and what we will do differently. |
| Impact | Schedule / budget / quality effect, with magnitude. |
| Action | The change adopted, and who owns it. |
| Status | `open` · `applied` · `superseded`. |

## Example entry
| 2026-06-26 | LOG-031 | Nightboat | production | Night exteriors ran long because lighting setups were not pre-rigged | +1.5 shoot days, ~4% over the line | Pre-rig night setups the prior day; owned by [cinematographer](../../03-production/cinematographer/) | applied |

## Who updates this & when
The [line-producer](../../01-executive/line-producer/) appends at Gate B of
[production](../../workflows/production.md) and
[post-production](../../workflows/post-production.md), capturing schedule variance,
overruns, and pipeline findings. A reshoot or a delivery-conformance failure is
logged here. Agents read it at prep so a fixed mistake is not repeated
(Directive [#6](../../../kernel/laws/prime-directives.md)).

## Flow
- Knowledge flows **down** from the parent register `lessons-learned` to this studio
  register.
- Decisions of consequence flow **up**: a lesson that should bind every future film
  is promoted to the Enterprise.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
