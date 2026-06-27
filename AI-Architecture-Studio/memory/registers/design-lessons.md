# Design Lessons
Status: stable
Type: memory-register
Owner: lead-architect
Extends: lessons-learned

**Purpose:** what each completed project taught the studio — the design and
process learning that should change how the next project is run.
**Discipline:** append-mostly — a lesson is never rewritten; a better understanding
is added as a new dated entry that supersedes the old one, so the evolution of the
studio's craft stays visible.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| ID | Stable lesson id, e.g. `DL-012`. |
| Project | Project the lesson came from. |
| Lesson | What went right or wrong, stated plainly. |
| Phase | Where it surfaced: `schematic` · `development` · `permit` · `delivery`. |
| Action | The change to practice it implies. |
| Status | `active` · `superseded` · `adopted-as-standard`. |

## Example entry
| 2026-06-26 | DL-012 | Riverside-Hall | Late egress rework cost a week; travel distance was never checked at schematic | schematic | Add an egress sanity check to schematic-design Gate B | active |

## Who updates this & when
The [lead-architect](../../02-design/lead-architect/) appends at the close of each
workflow — [schematic-design](../../workflows/schematic-design.md),
[design-development](../../workflows/design-development.md), and
[permit-review](../../workflows/permit-review.md) all feed lessons here. A lesson
marked `adopted-as-standard` is promoted into studio standards.

## Flow
- Knowledge flows **down** from the parent register `lessons-learned` to this
  studio register.
- Decisions of consequence flow **up**: a lesson that should bind every future
  project across the firm is promoted to the Enterprise.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
