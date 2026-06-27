<!-- Contract: ../../../kernel/contracts/memory-register.md -->

# Incident Register
Status: stable
Type: memory-register
Owner: chief-compliance-auditor
Extends: known-issues

**Purpose:** The regulated ledger of incidents and near-misses — every routing defect,
coordination failure, consent gap, or hazard the clinic encounters, with its closure
tracked. This is an **organizational** record of process failures, not a clinical
record.
**Discipline:** append-mostly — correct by adding a dated entry, never by erasing.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| Incident | What happened (incident or near-miss). |
| Severity | low · medium · high · critical. |
| Source | Workflow or role where it surfaced. |
| Mitigation | The corrective action taken. |
| Status | open · mitigated · closed. |
| Closed | Date closed, if any. |

## Example entry
| 2026-06-26 | Case scheduled past throughput limit (near-miss) | medium | patient-intake | Added a capacity gate before scheduling | closed | 2026-06-26 |

## Who updates this & when
The chief-compliance-auditor owns this register. Every clinic workflow writes here on a
defect or near-miss — [patient-intake](../../workflows/patient-intake.md),
[care-coordination](../../workflows/care-coordination.md), and
[safety-review](../../workflows/safety-review.md). A standing compliance veto is logged
here ([Directive #7](../../../kernel/laws/prime-directives.md)).

## Flow
- Knowledge flows **down** from the stdlib `known-issues` register to this child.
- Decisions of consequence (high/critical incidents) flow **up** to the Government.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
