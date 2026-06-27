<!-- Memory register (append-mostly). Contract: ../../kernel/contracts/memory-register.md -->

# Lessons Learned
Status: stable
Type: memory-register
Owner: Company Orchestrator
Extends: none

**Purpose:** the company's accumulated wisdom — what experience taught us, phrased
as reusable guidance so the next agent does not relearn it the hard way.
**Discipline:** append-mostly — a lesson that ages out is superseded by a newer
entry, never deleted; the old one stays so we remember *why* we believed it.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| Trigger | The incident or success that produced the lesson. |
| Lesson | The reusable guidance, stated imperatively. |
| Scope | `agent` · `department` · `company` — who it binds. |
| Confidence | `tentative` · `firm` — how settled it is. |
| Links | Postmortem, ADR, or issue that evidences it. |

## Example entry
| 2026-06-26 | Friday deploy caused weekend outage | Freeze deploys after 15:00 local; no exceptions below T4 sign-off | company | firm | known-issues.md#KI-031 |

## Who updates this & when
Any agent may propose a lesson; the Company Orchestrator appends after a
retrospective or postmortem. Firm, company-scoped lessons graduate into
standards ([quality-standards](../../shared/quality-standards.md)).

## Flow
- Knowledge flows **down**: lessons propagate Enterprise → Company → Department →
  Agent so guidance is inherited, not rediscovered
  ([Directive #6](../../kernel/laws/prime-directives.md)).
See [../../kernel/protocols/memory-flow.md](../../kernel/protocols/memory-flow.md).
