# Care Review Council — Process

## Discussion rules
Debate follows the kernel [communication](../../../kernel/protocols/communication.md)
norms: a claim about the care process is backed by the protocol, the lesson, or the
incident it rests on — never by assertion or seniority. Dissent is recorded, never
suppressed (Directive [#8](../../../kernel/laws/prime-directives.md)). Like its stdlib
parent the [feature-council](../../../councils/feature-council/), it reviews design
before adoption; the strictness it adds is that no care-process change is adopted
while a safety concern about the *process* is open. The council reviews the process
only and never debates an individual clinical decision (Directive
[#2](../../../kernel/laws/prime-directives.md)).

## Decision process
1. The [care-coordinator](../../03-care/care-coordinator/) presents the proposed
   care-process design or change and the problem it solves.
2. Core members test it for coherence: clean handoffs, no dropped steps, clear
   ownership, and fit with current [care-protocols](../../memory/registers/care-protocols.md).
3. Open process-safety concerns are listed, each with an owner and required evidence.
4. Objections and unresolved concerns are recorded by name with their rationale.
5. The [chief-medical-officer](../../01-executive/chief-medical-officer/) issues the
   verdict and may exercise the clinical-process veto.
6. Minutes, verdict, and dissent are appended to memory before the change is adopted.

## Approval gate by tier
- Approves alone: **T0–T2** — the council adopts a care-process change when no
  process-safety concern is open.
- Must escalate: **T3–T4** — needs the
  [medical-director](../../01-executive/medical-director/) (CEO); compliance-risk
  conflicts route to the [safety-council](../safety-council/) and escalate per
  [escalation](../../../kernel/protocols/escalation.md). See
  [engagement-tiers.md](../../../kernel/laws/engagement-tiers.md).

## Escalation
A [chief-medical-officer](../../01-executive/chief-medical-officer/) process veto
stops adoption regardless of schedule (Directive
[#6](../../../kernel/laws/prime-directives.md);
[decision-authority](../../../kernel/laws/decision-authority.md)). A compliance veto
from the [chief-compliance-auditor](../../01-executive/chief-compliance-auditor/) is
absolute and overrides adoption; only a **human maintainer** overrides it. Non-veto
deadlocks escalate one level per
[escalation](../../../kernel/protocols/escalation.md).
