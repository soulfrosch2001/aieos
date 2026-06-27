# Councils
Status: stable
Type: index
Owner: studio-orchestrator
Extends: none

## Purpose
The studio's deliberative forums. Councils are **not standing** — each convenes for one question at a phase gate, decides, records minutes and dissent, then disbands. They decide; they never build (Directive [#2](../../kernel/laws/prime-directives.md)). Each extends a stdlib council by name and may only add strictness, never loosen a Kernel Law (Directive [#6](../../kernel/laws/prime-directives.md); [resolution-order.md](../../kernel/loader/resolution-order.md)).

## The councils
- [design-review-council](design-review-council/README.md) — reviews design at each phase gate for coherence and quality. Chair: [design-director](../01-executive/design-director/README.md) (holds the design veto). Extends stdlib [architecture-council](../../councils/architecture-council/README.md).
- [code-compliance-council](code-compliance-council/README.md) — reviews building-code and regulatory compliance before permit and before acceptance. Chair: [chief-auditor](../01-executive/chief-auditor/README.md) (holds the compliance veto). Extends stdlib [security-council](../../councils/security-council/README.md).

## When convened
By tier — see [engagement-tiers.md](../../kernel/laws/engagement-tiers.md). **T2** significant work gets a council sign-off; **T3** strategic work needs council plus executive. The [studio-orchestrator](../01-executive/studio-orchestrator/README.md) routes the question and sizes the tier; it never decides the design or compliance question itself (Directive [#2](../../kernel/laws/prime-directives.md)).

## Memory
Council outcomes are appended to the studio's [memory registers](../memory/README.md): [design-decisions](../memory/registers/design-decisions.md) for design verdicts and [code-compliance-log](../memory/registers/code-compliance-log.md) for compliance verdicts, with dissent preserved. Records are append-only (Directive [#8](../../kernel/laws/prime-directives.md)).
