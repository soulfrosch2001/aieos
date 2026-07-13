# Code Compliance Log
Status: stable
Type: memory-register
Owner: chief-auditor
Extends: known-issues

**Purpose:** the studio's register of code and permit findings — every open and
closed compliance issue raised against a design set, with severity and resolution.
**Discipline:** append-mostly — a finding is never deleted; it is **closed** by a
dated superseding entry that records how it was resolved, so the audit trail of
what was caught and fixed stays intact.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| ID | Stable finding id, e.g. `CC-038`. |
| Project | Project code or name the finding applies to. |
| Finding | The code/permit issue, and the code clause it touches. |
| Severity | `life-safety` · `major` · `minor` · `advisory`. |
| Status | `open` · `closed` · `waived`. |
| Resolution | How it was fixed, or the recorded waiver rationale. |

## Example entry
| 2026-06-26 | CC-038 | Riverside-Hall | Second egress stair travel distance exceeds IBC 1017.2 limit | life-safety | open | — |

## Who updates this & when
The [chief-auditor](../../01-executive/chief-auditor/) appends during
[permit-review](../../workflows/permit-review.md): every audit finding is logged
when raised and closed by a superseding entry when resolved. No set leaves the
studio with an open `life-safety` finding — the auditor's veto is binding
([decision-authority](../../../kernel/laws/decision-authority.md)). The auditor
never designs and never directs (Directive [#2](../../../kernel/laws/prime-directives.md)).

## Flow
- Knowledge flows **down** from the parent register `known-issues` to this studio
  register.
- Decisions of consequence flow **up**: a code interpretation that becomes
  firm-wide policy is promoted to the Enterprise.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
