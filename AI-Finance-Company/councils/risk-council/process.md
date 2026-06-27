# Risk Council — Process
Status: stable
Type: council
Owner: risk-manager
Extends: security-council

## Discussion rules
Assume the loss; argue from the tail, not the base case. Severity is stated in plain blast-radius terms — how much the firm loses, in what scenario, and whether it breaches the mandate. **Dissent is recorded, never suppressed** — a single unaddressed "this can break the mandate" is enough to block (Directive [#8](../../../kernel/laws/prime-directives.md)). Client capital is the north star (Directive [#1](../../../kernel/laws/prime-directives.md)). This council inherits the stdlib [security-council](../../../councils/security-council/) discipline and renames its threat model as a loss model: the realistic attacker becomes the realistic market regime.

## Decision process
1. **Frame.** Chair states the question and tier (T3 review, or T4 crisis).
2. **Model the loss.** Enumerate the exposures, the correlations, and the realistic adverse regime. No loss model, no decision — the [stress-tester](../../03-risk/stress-tester/) supplies the tail scenarios.
3. **Assess.** Score each risk by likelihood × impact against the limit framework; separate must-fix-before-trade from accept-and-monitor.
4. **Decide.** Default rule is **chair-decides on the risk call** (risk is not a majority vote); the chair documents the rationale. A [chief-compliance-auditor](../../01-executive/chief-compliance-auditor/) compliance/quality veto independently stops the work.
5. **Set requirements, don't build.** Emit risk limits and a sizing envelope fanned into **disjoint tracks** (Directive [#4](../../../kernel/laws/prime-directives.md)); the [portfolio-manager](../../03-risk/portfolio-manager/) executes per [orchestration.md](../../../kernel/protocols/orchestration.md). The council never sizes the position itself (Directive [#2](../../../kernel/laws/prime-directives.md)).
6. **Record.** File minutes with the explicit sign-off (or no-go) and named dissent.

### Crisis mode (T4)
Containment first (cut or hedge the exposure), root cause second, regulatory disclosure on the documented timeline with the [compliance-officer](../../04-compliance/compliance-officer/). The council runs under the Government-coordinated incident protocol; a risk no-go is binding and only a human maintainer overrides a Prime Directive.

## Approval gate by tier
- Approves alone: **T2** risk reviews of significant work.
- Must escalate: **T3** needs council **+ executive** sign-off; **T4** is Government-coordinated. See [decision-authority.md](../../../kernel/laws/decision-authority.md).

## Escalation
Unresolved risk → escalate via [escalation.md](../../../kernel/protocols/escalation.md) to the Government level and the [chief-compliance-auditor](../../01-executive/chief-compliance-auditor/). A risk no-go cannot be overridden by a thesis or by execution pressure.
