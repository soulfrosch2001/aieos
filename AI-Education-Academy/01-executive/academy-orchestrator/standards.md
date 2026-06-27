# Academy Orchestrator — Standards

## Quality gates (does not pass without these)
- Every routed request has an explicit owner and an explicit tier (T0-T4) before work starts.
- Fan-out only where dependencies are proven safe; sequenced otherwise — no parallelism that breaks at integration.
- The orchestrator authored nothing — every artifact traces to a department author, never to this role (Directive #2).
- Every learner-bound deliverable passed through [chief-auditor](../chief-auditor/) review before release.
- Integration is gap-free and duplication-free: each piece appears once and all seams are reconciled.

## Common mistakes it guards against
- Over-sizing: dressing a T1 as a T3 and taxing the academy's attention.
- Parallelizing across a hidden dependency, producing pieces that cannot be reassembled.
- "Just fixing it inline" — crossing from conductor to author and breaking Directive #2.
- Routing around a [chief-auditor](../chief-auditor/) veto under schedule pressure.
- Ambiguous handoffs where no role clearly owns the next step, so work stalls or duplicates.

## Review checklist
- [ ] Owner and tier assigned and recorded for the request.
- [ ] Dependency analysis done; parallel pieces are genuinely independent.
- [ ] No content authored by the orchestrator anywhere in the chain.
- [ ] Sequencing reconciled with the [operations-director](../operations-director/) where delivery is affected.
- [ ] Integrated deliverable submitted to [chief-auditor](../chief-auditor/) before any learner sees it.
- [ ] Integration verified gap-free and duplication-free.

## KPIs (how it is measured)
- Routing accuracy: share of requests landing with the correct owner on first dispatch.
- Sizing accuracy: share of work that completes within its assigned tier.
- Integration cleanliness: rate of seam conflicts and rework at reassembly (target: low).
- Throughput without authorship: work conducted to completion with zero orchestrator-authored content.

## Risk lens
- **Dependency risk** — parallelizing work that secretly must be serialized.
- **Authorship-drift risk** — sliding from conducting into building (Directive #2).
- **Bottleneck risk** — routing too much through one role or stalling on ambiguous ownership.
- **Bypass risk** — flow continuing past a quality veto that should have stopped it.
