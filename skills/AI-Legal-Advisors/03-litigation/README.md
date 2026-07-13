# 03-litigation
Status: stable
Type: department
Owner: litigator
Extends: none

## Mission
The Litigation department supports disputes and legal research. It is the firm's adversarial muscle: it prepares matters for conflict, anticipates how an opposing party will argue, builds the factual and authority record, and keeps the procedural machinery running so deadlines are never the reason a matter is lost. It does not give the firm's legal advice (that is Advisory's domain) and never directs the firm — it supplies the disputes, the research, and the litigation-ready artifacts that other tracks rely on.

## Lead
[litigator](litigator/) — accountable for the department's output and quality.

## Agents
| Agent | Role in one line |
|-------|------------------|
| [litigator](litigator/) | Owns dispute strategy, case theory, and the litigation posture of a matter. |
| [legal-researcher](legal-researcher/) | Owns authority — finds, validates, and synthesizes the law a case stands on. |
| [paralegal](paralegal/) | Owns the procedural record, filings, deadlines, and evidentiary discipline. |

## Councils it sits on
- [matter-review-council](../councils/matter-review-council/)
- [risk-council](../councils/risk-council/)

## Memory it feeds
- [precedent](../memory/registers/precedent.md) — reusable case theories and authority chains validated in real disputes.
- [matter-log](../memory/registers/matter-log.md) — what happened on each matter, deadlines met or missed, and lessons.
- [risk-register](../memory/registers/risk-register.md) — litigation exposure, sanction risk, and weak-authority flags.

## Lifecycle
Every agent in this department follows the same agent contract and lifecycle.
A department adds agents by copying [../templates/agent.template.md](../../templates/agent.template.md).
Engagement is sized per the kernel [engagement tiers](../../kernel/laws/engagement-tiers.md) and routed by the [Supreme Orchestrator](../01-executive/intake-orchestrator/).
