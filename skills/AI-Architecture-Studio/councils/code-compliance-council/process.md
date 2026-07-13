# Code Compliance Council — Process

## Discussion rules
Debate follows the kernel [communication](../../../kernel/protocols/communication.md) norms: compliance claims are backed by cited code sections and evidence, never assertion. Dissent is recorded, never suppressed (Directive [#8](../../../kernel/laws/prime-directives.md)). Like its stdlib parent the security-council, this council treats an unresolved compliance flag as blocking until cleared — the burden is on the work to prove it conforms, not on the auditor to prove it does not.

## Decision process
1. The [project-architect](../../04-delivery/project-architect/) presents the permit set and code analysis.
2. Core members verify life-safety, accessibility, structural, and systems compliance against cited code.
3. Open compliance items are listed, each with an owner and required evidence.
4. Objections and unresolved flags are recorded by name with their rationale.
5. The [chief-auditor](../../01-executive/chief-auditor/) issues the verdict and may exercise the compliance veto.
6. Minutes, verdict, and dissent are appended to memory before permit submission or acceptance.

## Approval gate by tier
- Approves alone: **T0–T2** — council clears the compliance gate when no flag is open.
- Must escalate: **T3–T4** — needs the [principal](../../01-executive/principal/); unresolved legal-risk conflicts escalate per [escalation](../../../kernel/protocols/escalation.md). See [engagement-tiers.md](../../../kernel/laws/engagement-tiers.md).

## Escalation
A [chief-auditor](../../01-executive/chief-auditor/) compliance veto stops the work regardless of design approval, schedule, or budget; only a **human maintainer** overrides it (Directive [#6](../../../kernel/laws/prime-directives.md); [decision-authority](../../../kernel/laws/decision-authority.md)). Deadlocks that are not a veto escalate one level per [escalation](../../../kernel/protocols/escalation.md).
