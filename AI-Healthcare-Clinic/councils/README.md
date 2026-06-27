# Councils
Status: stable
Type: index
Owner: intake-orchestrator
Extends: none

## Purpose
The clinic's deliberative forums. Councils are **not standing** — each convenes for
one question at a gate, decides, records minutes and dissent, then disbands. They
decide; they never build or treat (Directive
[#2](../../kernel/laws/prime-directives.md)). Each extends a stdlib council by name
and may only add strictness, never loosen a Kernel Law (Directive
[#6](../../kernel/laws/prime-directives.md);
[resolution-order.md](../../kernel/loader/resolution-order.md)). All review here is
**organizational** — care-process design and compliance risk — never clinical
judgment.

## The councils
- [care-review-council](care-review-council/README.md) — reviews care-**process**
  design (organizational, not clinical) for coherence and safety of the process.
  Chair: [chief-medical-officer](../01-executive/chief-medical-officer/README.md)
  (holds the clinical-process veto). Extends stdlib
  [feature-council](../../councils/feature-council/README.md).
- [safety-council](safety-council/README.md) — reviews safety and compliance risk.
  Chair: [chief-compliance-auditor](../01-executive/chief-compliance-auditor/README.md)
  (holds the absolute compliance veto). Extends stdlib
  [security-council](../../councils/security-council/README.md).

## When convened
By tier — see [engagement-tiers.md](../../kernel/laws/engagement-tiers.md). **T2**
significant care-process work gets a council sign-off (care-review-council); **T3**
safety-and-compliance review needs the safety-council plus executive. The
[intake-orchestrator](../01-executive/intake-orchestrator/README.md) routes the
question and sizes the tier; it never decides the care-process or compliance question
itself, and never diagnoses (Directive [#2](../../kernel/laws/prime-directives.md)).

## Memory
Council outcomes are appended to the clinic's [memory registers](../memory/README.md):
[care-protocols](../memory/registers/care-protocols.md) for care-process verdicts and
[incident-register](../memory/registers/incident-register.md) for safety and
compliance verdicts, with dissent preserved. Records are append-only (Directive
[#8](../../kernel/laws/prime-directives.md)).
