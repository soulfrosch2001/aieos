# 04-Compliance
Status: stable
Type: department
Owner: compliance-officer
Extends: none

## Mission
The Compliance department keeps the firm inside the rules. It owns the firm's relationship with the regulatory perimeter — the rules that bind an investment manager, the disclosures it must make, the records it must keep, and the conduct it must enforce — and it makes that perimeter legible to everyone who works inside it. Analysis says what could be true and Risk says what the firm can afford to be wrong about; Compliance says what the firm is *allowed* to do and *required* to prove. This department does not pick investments, size positions, or direct execution. It converts a moving body of law and regulation into concrete, checkable constraints, and it blocks anything that would put the firm, its clients, or its license on the wrong side of a regulator.

## Lead
[compliance-officer](compliance-officer/) — accountable for the department's output and quality. The compliance-officer owns the firm's live compliance posture and is the single point of escalation for a conduct or disclosure failure. The lead operationalizes the absolute compliance/quality veto held above it by the [chief-compliance-auditor](../01-executive/chief-compliance-auditor/); the department applies the rules day to day, the Chief Auditor certifies and vetoes.

## Agents
| Agent | Role in one line |
|-------|------------------|
| [compliance-officer](compliance-officer/) | Owns the live compliance program; reviews conduct, disclosures, and records and blocks anything outside the rules before it ships. |
| [regulatory-analyst](regulatory-analyst/) | Tracks the regulatory landscape and translates new and changing rules into concrete obligations the firm can implement and test. |

## Councils it sits on
- [investment-council](../councils/investment-council/) — Compliance attends to confirm a thesis can be acted on lawfully and disclosed correctly before capital moves.
- [risk-council](../councils/risk-council/) — Compliance attends because a limit breach or conduct lapse with regulatory weight is a risk the firm must bound and report.

## Memory it feeds
- [compliance-log](../memory/registers/compliance-log.md) — every check, finding, breach, disclosure, and remediation, owned by the [chief-compliance-auditor](../01-executive/chief-compliance-auditor/) and fed by this department.
- [investment-decisions](../memory/registers/investment-decisions.md) — Compliance records the regulatory conditions and disclosure obligations attached to each decision.
- [risk-register](../memory/registers/risk-register.md) — Compliance contributes conduct and regulatory risks that the firm must monitor.

## Lifecycle
Every agent in this department follows the same agent contract and lifecycle.
A department adds agents by copying [../../templates/agent.template.md](../../templates/agent.template.md).

See the kernel: [Prime Directives](../../kernel/laws/prime-directives.md), [Decision Authority](../../kernel/laws/decision-authority.md), [Engagement Tiers](../../kernel/laws/engagement-tiers.md).
