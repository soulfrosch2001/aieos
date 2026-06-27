<!-- Memory register (append-mostly). Contract: ../../kernel/contracts/memory-register.md -->

# Known Issues
Status: stable
Type: memory-register
Owner: QA Lead
Extends: none

**Purpose:** the live register of open defects and active workarounds — what is
broken, how bad it is, and what to do until it is fixed. It exists so the next
person hits a documented wall, not a surprise.
**Discipline:** append-mostly — an issue is closed by a dated `resolved` entry
that back-links the original; the history of a flaky bug is itself diagnostic, so
nothing is erased.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When first recorded (YYYY-MM-DD). |
| ID | Stable id, e.g. `KI-031`. |
| Issue | The defect, observable symptom first. |
| Severity | `S1` (critical) … `S4` (cosmetic). |
| Workaround | What to do until it is fixed, or `none`. |
| Status | `open` · `mitigated` · `resolved`. |
| Links | Repro, ADR, or postmortem. |

## Example entry
| 2026-06-26 | KI-031 | Checkout 500s under >2k concurrent carts | S1 | Cap cart concurrency at 1800 via gateway | mitigated | lessons-learned.md |

## Who updates this & when
The QA Lead appends on triage and on every status change. Any agent may report an
issue; severity is set at triage, not by the reporter, to keep the bar consistent.

## Flow
- Knowledge flows **down**: known issues and their workarounds propagate to every
  department and agent so they are inherited, not rediscovered mid-incident.
See [../../kernel/protocols/memory-flow.md](../../kernel/protocols/memory-flow.md).
