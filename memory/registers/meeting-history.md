<!-- Memory register (append-mostly). Contract: ../../kernel/contracts/memory-register.md -->

# Meeting History
Status: stable
Type: memory-register
Owner: Company Orchestrator
Extends: none

**Purpose:** the durable record of council and decision-forum **outcomes** — who
convened, what was decided, and what dissent was registered. It captures the
*result and its provenance*, not a transcript.
**Discipline:** append-mostly — minutes are immutable once logged; a reversal is a
new meeting entry that supersedes, never an edit to the original record.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When convened (YYYY-MM-DD). |
| Forum | Council or forum name + tier — [T0–T4](../../kernel/laws/engagement-tiers.md). |
| Question | The decision the forum existed to make. |
| Outcome | The decision reached, stated as a commitment. |
| Dissent | Named objections preserved for the record, or `none`. |
| Promotes-to | Register the decision flows into (e.g. `architecture-decisions.md`). |

## Example entry
| 2026-06-26 | Design Council · T3 | Sync vs. async order pipeline | Async, event-sourced | infra-lead: ops cost concern | architecture-decisions.md#ADR-014 |

## Who updates this & when
The Company Orchestrator appends immediately after a council closes
([Directive #3](../../kernel/laws/prime-directives.md)). The orchestrator routes
the recording; it does not author the decision ([Directive #2](../../kernel/laws/prime-directives.md)).

## Flow
- Decisions of consequence flow **up**: outcomes binding beyond the convening
  level are promoted to the Company, and cross-company outcomes to the Enterprise.
See [../../kernel/protocols/memory-flow.md](../../kernel/protocols/memory-flow.md).
