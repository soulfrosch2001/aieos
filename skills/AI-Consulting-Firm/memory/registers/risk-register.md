# Risk Register
Status: stable
Type: memory-register
Owner: chief-auditor
Extends: known-issues

**Purpose:** The open risks across engagements — intake, assumption, delivery,
and adoption risks — with severity, owner, and mitigation, tracked until closed.
**Discipline:** append-mostly — correct by adding a dated entry, never by erasing.

## Schema
| Column | Meaning |
|--------|---------|
| Date | When recorded (YYYY-MM-DD). |
| Engagement | The engagement / client code the risk belongs to. |
| Risk | What could go wrong. |
| Severity | High / Medium / Low. |
| Likelihood | High / Medium / Low. |
| Mitigation | The agreed response. |
| Owner | Who holds the mitigation. |
| Status | Open / Mitigated / Closed (closure is a new dated entry). |

## Example entry
| 2026-06-26 | ENG-014 | Client lacks data access for attribution | High | Medium | Secure read access at kickoff; fall back to sampled audit | engagement-director | Open |

## Who updates this & when
The [chief-auditor](../../01-executive/chief-auditor/) owns this register. Risks
are appended at the **Record** step of every workflow:
[engagement-scoping](../../workflows/engagement-scoping.md) (intake risks),
[strategy-development](../../workflows/strategy-development.md) (assumption risks),
and [implementation](../../workflows/implementation.md) (delivery/adoption risks).
A change of status is itself a new dated entry, never an edit.

## Flow
- Knowledge flows **down** from the enterprise `known-issues` register; inherited mitigations apply here.
- Risks of consequence flow **up** to `known-issues` when they recur across engagements or threaten the firm.
See [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md).
