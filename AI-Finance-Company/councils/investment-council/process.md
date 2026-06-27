# Investment Council — Process
Status: stable
Type: council
Owner: chief-investment-officer
Extends: feature-council

## Discussion rules
A thesis is argued, not announced. Every candidate action gets a fair reading before any is cut; the chair forbids "we already have conviction" as a substitute for evidence. Disagreement is the point — the [equity-analyst](../../02-analysis/equity-analyst/) and the [risk-manager](../../03-risk/risk-manager/) are *expected* to clash on whether the upside justifies the loss bound, and those clashes are recorded in their names, never smoothed over (Directive [#8](../../../kernel/laws/prime-directives.md)). A council unanimous on a hard thesis usually skipped the debate. This council inherits the stdlib [feature-council](../../../councils/feature-council/) debate norms and adds one stricter rule for a regulated firm: no thesis is debated on its merits until the [compliance-officer](../../04-compliance/compliance-officer/) confirms the firm may lawfully act on it.

## Decision process
1. **Frame** — chair restates the thesis, the client value at stake (Directive [#1](../../../kernel/laws/prime-directives.md)), and the falsifiable kill criterion. If there is no kill criterion, the council stops here.
2. **Clear the perimeter** — the [compliance-officer](../../04-compliance/compliance-officer/) confirms no restricted-list, conflict, or disclosure bar; an unresolved bar holds the thesis before debate.
3. **Lay out options** — at least two candidate actions, each with its evidence, its risk bound, and its sizing implication.
4. **Bound the risk** — the [risk-manager](../../03-risk/risk-manager/) states the loss bound and the limits the thesis would consume; a thesis that breaches the budget is resized or stopped.
5. **Debate the tradeoffs** — explicitly against the methodology and the tier's quality gates.
6. **Decide** — consensus preferred; the chair breaks a true deadlock. A methodology veto by the chair, or a compliance/quality veto by the [chief-compliance-auditor](../../01-executive/chief-compliance-auditor/), independently stops the thesis.
7. **Emit a plan, not a trade** — the council hands an execution plan to departments (Directive [#2](../../../kernel/laws/prime-directives.md)); the plan names the parallel tracks, up to 15 (Directive [#4](../../../kernel/laws/prime-directives.md)). The council never sizes or places the trade itself.

## Approval gate by tier
- Approves alone: [T2](../../../kernel/laws/engagement-tiers.md) — the council is the sign-off.
- Must escalate: [T3](../../../kernel/laws/engagement-tiers.md) and above — council **plus executive** ([ceo](../../01-executive/ceo/)) sign-off, per [decision-authority.md](../../../kernel/laws/decision-authority.md).

## Escalation
A deadlock the chair will not break alone, or a thesis that grows past T2 mid-debate, escalates rather than being silently downgraded ([engagement-tiers.md](../../../kernel/laws/engagement-tiers.md)). A compliance/quality veto or a methodology veto escalates per [escalation.md](../../../kernel/protocols/escalation.md); only a human maintainer overrides a Chief Auditor veto.
