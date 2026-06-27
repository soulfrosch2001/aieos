<!-- Memory register (append-mostly). Contract: ../../../kernel/contracts/memory-register.md -->

# Audience Insights
Status: stable
Type: memory-register
Owner: market-researcher
Extends: future-improvements

**Purpose:** the agency's parking lot of audience findings and hypotheses — things
research surfaced about who the audience is and what moves them, not yet committed to
a brand decision or a campaign. The holding pen between observation and action.
**Discipline:** append-mostly — a hypothesis is never edited; when it is validated,
refuted, or promoted, a new dated entry records that and back-links the original.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| AI-id | Stable id, e.g. `AUD-021`. |
| Audience | The segment the insight is about. |
| Insight / Hypothesis | What we observed or suspect. |
| Evidence | Source and strength (survey, analytics, anecdote). |
| Status | `parked` · `validating` · `promoted` · `refuted`. |
| Promoted to | BDR or campaign it fed, or `—`. |

## Example entry
| 2026-06-26 | AUD-021 | SMB owners, 30-45 | They distrust "AI-powered" framing; prefer "done-for-you" | 2 client surveys, n=180, consistent | parked | — |

## Who updates this & when
The market-researcher appends whenever a
[brand-review](../../workflows/brand-review.md),
[campaign-launch](../../workflows/campaign-launch.md), or
[content-production](../../workflows/content-production.md) surfaces an audience
finding that is real but not yet actionable. A `parked` insight that proves out is
**promoted** — its status updated by a new entry — into a
[brand-decisions](brand-decisions.md) BDR or a campaign brief.

## Flow
- Knowledge flows **down**: parked insights are inherited by departments planning new
  work, so audience learning is not re-discovered each engagement (Directive
  [#6](../../../kernel/laws/prime-directives.md)). A validated insight of consequence
  is promoted **up** into [brand-decisions](brand-decisions.md).
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
