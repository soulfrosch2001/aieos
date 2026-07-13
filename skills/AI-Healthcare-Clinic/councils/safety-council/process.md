# Safety Council — Process

## Discussion rules
Debate follows the kernel [communication](../../../kernel/protocols/communication.md)
norms: every safety or compliance claim is backed by a cited control, an incident, or
record evidence — never by assertion. Dissent is recorded, never suppressed
(Directive [#8](../../../kernel/laws/prime-directives.md)). Like its stdlib parent the
[security-council](../../../councils/security-council/), it treats an unresolved
compliance or safety flag as **blocking** until cleared — the burden is on the work
to prove it is safe and compliant, not on the auditor to prove it is not. The council
reviews the process and the record only, never an individual clinical decision
(Directive [#2](../../../kernel/laws/prime-directives.md)).

## Decision process
1. The [compliance-officer](../../04-compliance/compliance-officer/) presents the
   workflow, its control set, and the standing compliance verdicts.
2. Core members verify privacy, consent, access, retention, and process-safety against
   cited controls and record evidence.
3. Open flags are listed, each with an owner and the evidence required to clear it.
4. Objections and unresolved flags are recorded by name with their rationale.
5. The [chief-compliance-auditor](../../01-executive/chief-compliance-auditor/) issues
   the verdict and may exercise the absolute compliance veto.
6. Minutes, verdict, and dissent are appended to memory before the work proceeds.

## Approval gate by tier
- Approves alone: **T0–T2** — the council clears the safety gate when no flag is open.
- Must escalate: **T3–T4** — needs the
  [medical-director](../../01-executive/medical-director/) (CEO); unresolved
  legal-risk conflicts escalate per
  [escalation](../../../kernel/protocols/escalation.md). See
  [engagement-tiers.md](../../../kernel/laws/engagement-tiers.md).

## Escalation
A [chief-compliance-auditor](../../01-executive/chief-compliance-auditor/) compliance
veto stops the work regardless of care-process approval or schedule; only a **human
maintainer** overrides it (Directive
[#6](../../../kernel/laws/prime-directives.md);
[decision-authority](../../../kernel/laws/decision-authority.md)). Deadlocks that are
not a veto escalate one level per
[escalation](../../../kernel/protocols/escalation.md).
