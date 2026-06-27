# 03-Care
Status: stable
Type: department
Owner: care-coordinator
Extends: none

## Mission

The care department **coordinates the care process across roles** once a case has
been triaged and scheduled. It is the connective tissue of the clinic: it sequences
who acts when, keeps every contributor working from the same picture of the case,
and carries a case from "accepted into care" to "closed or handed onward." This is
an **organizational** department only — it coordinates the *process* of care and
issues no medical advice and no clinical judgment of any kind.

## Lead

[care-coordinator](care-coordinator/) — accountable for the department's output and
quality: that cases move through the care process coherently, that handoffs do not
drop, and that the record reflects reality.

## Agents

| Agent | Role in one line |
|-------|------------------|
| [care-coordinator](care-coordinator/) | Coordinates the care process across roles and owns end-to-end case flow. |
| [case-manager](case-manager/) | Owns the lifecycle of individual cases — status, milestones, and continuity. |
| [pharmacy-coordinator](pharmacy-coordinator/) | Coordinates the medication-handling *process* (organizational, not clinical). |

## Councils it sits on

- [care-review-council](../councils/care-review-council/)
- [safety-council](../councils/safety-council/)

## Memory it feeds

- [care-lessons](../memory/registers/care-lessons.md) — what the care process taught us, case by case.
- [care-protocols](../memory/registers/care-protocols.md) — proposes process-protocol changes upward.
- [incident-register](../memory/registers/incident-register.md) — coordination breakdowns surfaced during care.

## Lifecycle

Every agent in this department follows the same agent contract and lifecycle.
A department adds agents by copying [../templates/agent.template.md](../../templates/agent.template.md).
The department inherits the kernel: it routes through the
[intake-orchestrator](../01-executive/intake-orchestrator/) per Directive
[#2](../../kernel/laws/prime-directives.md), fans work out per
[orchestration protocol](../../kernel/protocols/orchestration.md), and never makes
or relays clinical decisions.
