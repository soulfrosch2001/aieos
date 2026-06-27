# 04-Compliance
Status: stable
Type: department
Owner: compliance-officer
Extends: none

## Mission

The compliance department **keeps the clinic inside regulation and privacy rules**.
It is the department that proves the clinic does what it says it does: that consent
was captured, that records were kept and protected, that retention and access rules
held, and that every regulated control left an auditable trail. This is an
**organizational** department only — it governs the *process and the record*, never
clinical judgment. It issues no medical advice and renders no opinion on whether a
care decision was right; it asks only whether the clinic followed its own stated
rules and the regulated expectations around them.

## Lead

[compliance-officer](compliance-officer/) — accountable for the department's output:
that the clinic stays inside regulation and privacy rules, that violations are caught
and logged, and that the record can withstand outside inspection.

## Agents

| Agent | Role in one line |
|-------|------------------|
| [compliance-officer](compliance-officer/) | Keeps the clinic inside regulation and privacy rules; flags and logs violations. |
| [records-manager](records-manager/) | Owns the integrity, retention, access control, and disposal of the clinic record. |

## Councils it sits on

- [safety-council](../councils/safety-council/) — chaired by the chief-compliance-auditor; reviews safety and compliance risk.
- [care-review-council](../councils/care-review-council/) — advisory presence on care-process design.

## Memory it feeds

- [incident-register](../memory/registers/incident-register.md) — every compliance or privacy violation, classified and tracked to closure.
- [care-lessons](../memory/registers/care-lessons.md) — process lessons surfaced from compliance findings.

## Lifecycle

Every agent in this department follows the same agent contract and lifecycle.
The department adds agents by copying [../templates/agent.template.md](../../templates/agent.template.md).
It inherits the kernel: it routes through the
[intake-orchestrator](../01-executive/intake-orchestrator/) per Directive
[#2](../../kernel/laws/prime-directives.md), fans work out per the
[orchestration protocol](../../kernel/protocols/orchestration.md), reports per the
[reporting protocol](../../kernel/protocols/reporting.md), and never makes or relays
clinical decisions. It overrides stdlib defaults only by name, never by fork
(Directive [#5](../../kernel/laws/prime-directives.md);
[resolution-order.md](../../kernel/loader/resolution-order.md)).
