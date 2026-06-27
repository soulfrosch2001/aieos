# Orchestration Policy
Status: stable
Type: reference
Owner: executive-orchestrator
Extends: ../../kernel/protocols/orchestration.md

This company inherits the kernel's authoritative
[Orchestration protocol](../../kernel/protocols/orchestration.md) — the default 15-agent
parallel fan-out with disjoint file ownership, the integrate-after-fan-out flow, and the
tier-to-parallelism ceiling. That protocol **supersedes** the previously-duplicated local
policy. The [Orchestrator](../01-executive/executive-orchestrator/) decomposes, briefs,
fans out, and integrates; it never implements
([Directive #2](../../kernel/laws/prime-directives.md)).

No local additions — this company follows the kernel orchestration protocol unchanged.
