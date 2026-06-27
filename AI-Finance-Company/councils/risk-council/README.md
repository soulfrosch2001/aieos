# Risk Council
Status: stable
Type: council
Owner: risk-manager
Extends: security-council

## Purpose
The single question this council answers: **"Is the firm's risk posture acceptable to proceed, and what are we signing off on if we say yes?"** It owns the risk decision and the explicit sign-off: the loss bounds, the concentration and correlation limits, the stress and tail scenarios a position or the book must survive, and — in a drawdown crisis — the containment call. It is convened like a security review and inherits the stdlib [security-council](../../../councils/security-council/): assume the loss, argue from the tail, and a single unaddressed "this can break the mandate" is enough to block.

## Out of scope
- The thesis itself — whether the firm acts on a view is the [investment-council](../investment-council/); this council reviews it for risk, it does not pick the investment.
- Go/no-go on non-risk grounds — a thesis cannot override a risk no-go to ship.
- Execution and rebalancing code — the council **decides, it never builds** (Directive [#2](../../../kernel/laws/prime-directives.md)); it sets risk requirements and hands sizing to [portfolio-manager](../../03-risk/portfolio-manager/).

## Participants
- **Chair** (breaks deadlocks): [risk-manager](../../03-risk/risk-manager/) — owns the limit framework; the risk call is the chair's, not a majority vote.
- **Core** (must attend): [stress-tester](../../03-risk/stress-tester/), [portfolio-manager](../../03-risk/portfolio-manager/) (the department that will own the position), and the [chief-compliance-auditor](../../01-executive/chief-compliance-auditor/) (holds the compliance/quality veto).
- **Advisory** (as needed): [chief-investment-officer](../../01-executive/chief-investment-officer/), [macro-strategist](../../02-analysis/macro-strategist/), [compliance-officer](../../04-compliance/compliance-officer/) (when an event carries regulatory weight), and the [finance-orchestrator](../../01-executive/finance-orchestrator/) in a crisis.

## When convened
- **T3** — strategic work with a meaningful risk surface, per [engagement-tiers.md](../../../kernel/laws/engagement-tiers.md) (council **+ executive** sign-off).
- **T4 crisis** — a limit breach or active drawdown crisis; convenes as a Government-coordinated incident council, all hands.

Not standing — convened for one risk question, then disbanded.

## Inputs
The position or book under review, the limit framework and current utilization, the stress and tail scenarios from the [stress-tester](../../03-risk/stress-tester/), prior risk minutes from the [risk-register](../../memory/registers/risk-register.md), and (in a crisis) the timeline, scope, and current containment state.

## Index
- [process.md](process.md)
- [output.md](output.md)
