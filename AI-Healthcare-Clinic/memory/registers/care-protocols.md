<!-- Contract: ../../../kernel/contracts/memory-register.md -->

# Care Protocols
Status: stable
Type: memory-register
Owner: chief-medical-officer
Extends: architecture-decisions

**Purpose:** The care-process decisions of record — the named care paths and routing
rules that are this clinic's architecture. Organizational only: a "care path" is a
sequence of coordination steps, never a clinical instruction
([Directive #2](../../../kernel/laws/prime-directives.md)).
**Discipline:** append-mostly — correct by adding a dated entry, never by erasing.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| Decision | The care-process or routing decision taken. |
| Care path | The named path this affects. |
| Rationale | Why this is the chosen process. |
| Status | proposed · accepted · superseded. |
| Supersedes | Date of the entry this replaces, if any. |

## Example entry
| 2026-06-26 | Standard intake routes urgent cases to the expedited care path | expedited-path | Cuts time-to-route for safety-touching cases | accepted | — |

## Who updates this & when
The chief-medical-officer owns this register. Entries are written when a care-process
change is accepted — by [care-coordination](../../workflows/care-coordination.md) for
coordination changes and by [safety-review](../../workflows/safety-review.md) for any
change that clears the safety gate.

## Flow
- Knowledge flows **down** from the stdlib `architecture-decisions` register to this child.
- Decisions of consequence flow **up** to the Government's architecture register.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
