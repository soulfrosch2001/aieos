# Artist Pipeline
Status: stable
Type: memory-register
Owner: ar-scout
Extends: future-improvements

**Purpose:** The forward-looking roster pipeline — prospects under evaluation,
their fit scores, and the next action that would move or close them.
**Discipline:** append-mostly — correct by adding a dated entry, never by erasing.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| Prospect | Artist or act. |
| Source | Where they were found (inbound, scout, referral). |
| Stage | sourced → screened → council → signed / passed. |
| Fit (human / catalog) | Scores from artist-manager and repertoire-curator. |
| Next action | What moves them forward, and the owner. |

## Example entry
| 2026-06-26 | The Lantern Hours | scout discovery | screened | 4/5 · 3/5 | Take to signing-council — ar-scout | 

## Who updates this & when
The ar-scout owns this register. It is written throughout
[artist-signing](../../workflows/artist-signing.md): on sourcing, after screening,
and at the sign/pass decision.

## Flow
- Knowledge flows **down** from the enterprise future-improvements register to this child.
- Decisions of consequence flow **up** to the enterprise future-improvements register.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
