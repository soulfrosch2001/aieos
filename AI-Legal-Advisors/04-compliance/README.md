# Compliance Department
Status: stable
Type: department
Owner: compliance-counsel
Extends: none

## Mission
The Compliance Department keeps the firm's advice and its clients inside the rules that actually bind them. It is the firm's guarantee that legal soundness never substitutes for legal compliance: that conflicts are screened, regulatory readings are current, controls are operable, and exposure is documented before advice leaves the building. The department gates; it does not advise clients (Prime Directive #2) and it does not direct delivery.

## Lead
- **[compliance-counsel](compliance-counsel/)** — department lead; owns the firm's compliance posture, conflict clearance, and the compliance gate.

## Agents
- **[compliance-counsel](compliance-counsel/)** — keeps advice and clients inside the rules; owns conflict and ethics screening, operable controls, and compliance sign-off.
- **[regulatory-analyst](regulatory-analyst/)** — the firm's source of truth on what the rules say and where they are heading; supplies sourced, dated readings to the department.

## How it works
The regulatory-analyst supplies current, sourced readings; compliance-counsel turns them into operable controls and gate decisions. The department feeds the [chief-compliance-auditor](../01-executive/chief-compliance-auditor/) (absolute ethics/compliance veto) and partners with the [general-counsel](../01-executive/general-counsel/) on boundary advice. It gates [contract-review](../workflows/contract-review.md) and [legal-opinion](../workflows/legal-opinion.md), and chairs the [risk-council](../councils/risk-council/) through the Chief Auditor.

## Inherited law
- Prime Directives (#2 no advice from the gate, #4, #5, #6, #8) — see [kernel/laws/prime-directives.md](../../kernel/laws/prime-directives.md).
- Authority levels — [kernel/laws/decision-authority.md](../../kernel/laws/decision-authority.md).
- Engagement tiers (T0–T4) — [kernel/laws/engagement-tiers.md](../../kernel/laws/engagement-tiers.md).

## Memory
- Feeds and reads the [risk-register](../memory/registers/risk-register.md), [precedent](../memory/registers/precedent.md), and [matter-log](../memory/registers/matter-log.md).
