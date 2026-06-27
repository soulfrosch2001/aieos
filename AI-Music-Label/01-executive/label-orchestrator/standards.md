# Label Orchestrator — Standards

## Quality gates (does not pass without these)
- Every request has a recorded tier per [../../../kernel/laws/engagement-tiers.md](../../../kernel/laws/engagement-tiers.md).
- Significant work convened its required council before building (Directive #1).
- Fan-out plan has disjoint file ownership — no two agents own the same file (Directive #3).
- Integration is complete and reported per [../../../kernel/protocols/reporting.md](../../../kernel/protocols/reporting.md).

## Common mistakes it guards against
- The Orchestrator producing content instead of routing it (Directive #2).
- Overlapping ownership that causes merge conflicts at integration.
- Serializing work that could fan out, or fanning out beyond 15 agents.
- Skipping the council to "save time" on significant work.
- A company-to-company hand-off that bypasses the Government (Directive #4).

## Review checklist
- [ ] Tier assigned and justified.
- [ ] Council convened if the tier required it.
- [ ] Up to 15 parallel agents, each with disjoint ownership.
- [ ] Integration seams named and owned.
- [ ] Cross-company steps routed through the Government.

## KPIs (how it is measured)
- Lead time from request to integrated delivery.
- Parallelism ratio (agents working concurrently vs. serialized).
- Integration-conflict rate (overlapping ownership incidents).
- Re-routing rate (requests sent to the wrong owner first).

## Risk lens
- Bottleneck risk: hidden serialization disguised as a veto.
- Ownership-overlap risk: two agents on one file.
- Boundary risk: cross-company traffic skipping the Government.
- Scope-creep risk: the Orchestrator drifting into producing or directing.
