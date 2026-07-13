# Councils

Status: stable
Type: index
Owner: engagement-orchestrator
Extends: none

## Purpose

The firm's deliberative forums. Councils are **not standing** — each convenes for one question at an engagement gate, deliberates, records minutes and dissent, then disbands. They decide; they never deliver client work (Directive [#2](../../kernel/laws/prime-directives.md)). Each extends a stdlib council by name and may only add strictness, never loosen a Kernel Law (Directive [#6](../../kernel/laws/prime-directives.md); [resolution-order.md](../../kernel/loader/resolution-order.md)). We discuss before we build (Directive [#1](../../kernel/laws/prime-directives.md)).

## The councils

- [engagement-council](engagement-council/README.md) — reviews engagement strategy before recommendations issue to the client. Chair: [engagement-director](../01-executive/engagement-director/README.md). Extends stdlib [feature-council](../../councils/feature-council/README.md).
- [quality-council](quality-council/README.md) — adjudicates analytical quality and methodology. Chair: [chief-auditor](../01-executive/chief-auditor/README.md) (holds the quality veto). Extends stdlib [architecture-council](../../councils/architecture-council/README.md).

## When convened

By tier — see [engagement-tiers.md](../../kernel/laws/engagement-tiers.md). **T2** significant engagements get a council sign-off; **T3+** strategic engagements need a council plus an executive. The [engagement-orchestrator](../01-executive/engagement-orchestrator/README.md) routes the question and sizes the tier; it never decides the engagement or quality question itself (Directive [#2](../../kernel/laws/prime-directives.md); [orchestration.md](../../kernel/protocols/orchestration.md)).

## Memory

Council outcomes are appended to the firm's [memory registers](../memory/README.md): the engagement-council appends to [engagement-decisions](../memory/registers/engagement-decisions.md); the quality-council appends to the [risk-register](../memory/registers/risk-register.md). Dissent is preserved and records are append-only (Directive [#8](../../kernel/laws/prime-directives.md); [reporting.md](../../kernel/protocols/reporting.md)).
