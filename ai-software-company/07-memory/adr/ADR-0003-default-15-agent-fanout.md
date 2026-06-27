**ADR-0003: Default 15-agent parallel fan-out per request**
**Date:** 2026-06-26 · **Status:** accepted · **Tier:** T2
**Deciders:** Human owner (mandate) + executive-orchestrator · Source: FI-005

### Context
The owner directed that every request default to using 15 agents to do several tasks at
once. The framework already proved this at build time (15 agents built the departments in
parallel). It needs to be the standing default, not an ad-hoc choice.

### Decision
Adopt [../../00-company/orchestration-policy.md](../../00-company/orchestration-policy.md):
the Orchestrator decomposes each request into up to **15 concurrent tracks with disjoint
file ownership** and integrates the results. Tiers still govern review and approval.

### Consequences
- **Positive:** high throughput; broad coverage; matches the owner's working style.
- **Negative / accepted trade-offs:** more coordination overhead; risk of over-engaging
  trivial work — bounded by the T0 "fewer agents, record why" guardrail.
- **Technical debt taken:** none.

### Alternatives Considered
Right-size strictly by tier (rejected — owner wants parallelism by default). Always exactly
15 even for one-line edits (rejected — wasteful; the guardrail allows fewer when serial).
