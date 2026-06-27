# Councils
Status: stable
Type: council-index
Owner: general-counsel
Extends: none

## Purpose
Councils are the firm's non-standing review bodies. They convene by tier trigger to review a matter or a risk before it moves, record consensus and dissent, and append minutes to memory. They decide within their tier band and escalate above it per [decision-authority.md](../../kernel/laws/decision-authority.md). Councils never give legal advice to clients (Prime Directive #2); they review the firm's own work.

## The councils
- **[matter-review-council](matter-review-council/)** — reviews a matter's strategy before advice issues. Chair: [general-counsel](../01-executive/general-counsel/). Extends stdlib `feature-council`.
- **[risk-council](risk-council/)** — reviews legal and conflict risk on a matter. Chair: [chief-compliance-auditor](../01-executive/chief-compliance-auditor/). Extends stdlib `security-council`.

## When convened
By tier trigger, not on a standing schedule — see [engagement-tiers.md](../../kernel/laws/engagement-tiers.md). Matter-review-council convenes for substantive matters reaching strategy sign-off (T2+); risk-council convenes when conflict or regulatory exposure is flagged (T2+), and always before a high-tier matter (T3+) issues.

## Inherited law
- [kernel/laws/decision-authority.md](../../kernel/laws/decision-authority.md), [kernel/laws/engagement-tiers.md](../../kernel/laws/engagement-tiers.md), [kernel/protocols/escalation.md](../../kernel/protocols/escalation.md).
