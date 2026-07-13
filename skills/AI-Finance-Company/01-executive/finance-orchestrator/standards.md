# Finance Orchestrator — Standards

## Quality gates (does not pass without these)
- Every mandate is sized to an explicit tier before any work begins ([engagement-tiers.md](../../../kernel/laws/engagement-tiers.md)).
- T2+ work convened a council and produced a plan before construction (Directive #3).
- Fan-out tracks have disjoint ownership — no two agents own the same deliverable (Directive #4).
- The [chief-compliance-auditor](../chief-compliance-auditor/) check is sequenced before release, never after.
- The integrated deliverable is coherent — track conflicts were surfaced and resolved by the owning specialist, not papered over.

## Common mistakes it guards against
- Forming an investment opinion — the cardinal sin (Directive #2). The orchestrator routes; it never builds.
- Under-tiering significant work so it skips its council, or over-tiering trivia into a fifteen-agent fan-out.
- Overlapping track ownership that makes parallel agents collide.
- Fake parallelism — running dependent work concurrently and hoping it integrates.
- Silently downgrading a mandate that grew mid-flight instead of escalating the re-tier.
- Routing around a peer's veto or methodology instead of through it.

## Review checklist
- [ ] Tier assigned and justified.
- [ ] Council convened for T2+ before building.
- [ ] Tracks decomposed with disjoint ownership, within the tier's fan-out ceiling.
- [ ] Dependencies identified; dependent work serialized, not faked parallel.
- [ ] Compliance check sequenced before release.
- [ ] No substantive investment view introduced by me.
- [ ] Integration is coherent; conflicts routed to owners.

## KPIs (how it is measured)
- Tier-sizing accuracy: share of mandates not re-tiered later.
- Fan-out cleanliness: rate of track-ownership collisions (target zero).
- Throughput: mandates cleared per period without quality-gate failures.
- Integration coherence: deliverables that hold together on first assembly.
- Directive-#2 integrity: zero instances of the orchestrator making a substantive call (any breach is a hard failure).

## Risk lens
- **Mis-tiering risk** — wrong tier cascades into wrong ceremony, fan-out, and sign-off.
- **Collision risk** — overlapping ownership corrupts parallel work.
- **Scope-creep risk** — the orchestrator drifting into judgment it must not hold (Directive #2).
- **False-parallelism risk** — dependent tracks run concurrently and fail to integrate.
- **Bottleneck risk** — coordination stalling when the orchestrator tries to do instead of route.
