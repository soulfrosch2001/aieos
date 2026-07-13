<!-- Memory register (append-mostly). Contract: ../../../kernel/contracts/memory-register.md -->

# Campaign Results
Status: stable
Type: memory-register
Owner: performance-marketer
Extends: lessons-learned

**Purpose:** the agency's record of what each campaign actually did against its
objective and what it taught — reusable guidance so the next campaign does not
relearn the same lesson at a client's expense.
**Discipline:** append-mostly — a result is never edited; a corrected reading is
added as a new dated entry that back-links the original, so the measurement chain
stays auditable.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| Campaign | Campaign name or id. |
| Objective | The metric it was judged on (e.g. CAC, ROAS, reach). |
| Result | What it achieved against that objective. |
| Channel | The dominant channel(s). |
| Lesson | The reusable takeaway. |
| Status | `measured` · `pending` · `superseded`. |

## Example entry
| 2026-06-26 | Northwind-Q3-Speed | ROAS ≥ 3.0 | ROAS 3.8 | Paid social + search | Speed-led creative outperformed price-led 1.4x; lead with delivery promise | measured |

## Who updates this & when
The performance-marketer appends at the close of any
[campaign-launch](../../workflows/campaign-launch.md) once measurement is in, and
when a [content-production](../../workflows/content-production.md) piece tied to a
campaign reports performance. A row marked `pending` is closed once its `Result` is
measured — never left open as a real reading.

## Flow
- Knowledge flows **down**: campaign lessons propagate from the Company to the
  departments and agents that plan the next campaign, who inherit rather than
  re-derive them (Directive [#6](../../../kernel/laws/prime-directives.md)).
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
