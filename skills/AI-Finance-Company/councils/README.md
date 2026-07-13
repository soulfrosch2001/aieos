# Councils
Status: stable
Type: index
Owner: finance-orchestrator
Extends: none

## Purpose
The firm's councils are the rooms where significant decisions are debated before anything moves — "discuss before you build" applied to capital and risk (Directive [#3](../../kernel/laws/prime-directives.md)). A council decides and produces a plan; it never builds, sizes, or trades itself (Directive [#2](../../kernel/laws/prime-directives.md)). Councils are not standing — each is convened for one question at the tier that triggers it, then disbanded. Every council here inherits a stdlib council and adds only stricter, regulated-domain rules; it does not fork one (Directive [#6](../../kernel/laws/prime-directives.md)).

## Councils
| Council | Decides | Chair | Extends |
|---------|---------|-------|---------|
| [investment-council](investment-council/) | Approves an investment thesis before capital moves. | [chief-investment-officer](../01-executive/chief-investment-officer/) | stdlib [feature-council](../../councils/feature-council/) |
| [risk-council](risk-council/) | Reviews and bounds risk; convened like a security review. | [risk-manager](../03-risk/risk-manager/) | stdlib [security-council](../../councils/security-council/) |

## How they relate
- The [investment-council](investment-council/) decides whether the firm acts on a thesis; the [risk-council](risk-council/) decides what risk that action is allowed to carry. A thesis that clears Investment can still be bounded or blocked by Risk — risk is not a majority vote, and a [chief-compliance-auditor](../01-executive/chief-compliance-auditor/) veto stops either.
- Both file minutes and record dissent into a memory register, append-only (Directive [#8](../../kernel/laws/prime-directives.md)).

## When convened
By tier, per [engagement-tiers.md](../../kernel/laws/engagement-tiers.md): T2+ work is discussed in council before it proceeds; T3+ adds executive sign-off per [decision-authority.md](../../kernel/laws/decision-authority.md). Routing and sizing is the [finance-orchestrator](../01-executive/finance-orchestrator/)'s, which convenes but never decides the call (Directive [#2](../../kernel/laws/prime-directives.md)).

See the kernel: [Prime Directives](../../kernel/laws/prime-directives.md), [Engagement Tiers](../../kernel/laws/engagement-tiers.md), [Decision Authority](../../kernel/laws/decision-authority.md).
