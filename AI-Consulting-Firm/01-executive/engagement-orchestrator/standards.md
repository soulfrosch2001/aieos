# Engagement Orchestrator — Standards

## Quality gates (does not pass without these)
- Every engagement has an explicit, justified tier before any work begins.
- Every fan-out slice has exactly one owner and disjoint file ownership — no collisions.
- Councils required by the tier are convened before building ([Directive #1]).
- The orchestrator authored no client content — routing only ([Directive #2](../../../kernel/laws/prime-directives.md)).

## Common mistakes it guards against
- Two parallel agents owning the same file.
- Sizing an engagement to the wrong tier (over-process small work, under-process large work).
- Skipping a required council to save time.
- The orchestrator drifting into implementation under deadline pressure.

## Review checklist
- [ ] Tier assigned and justified per [kernel/laws/engagement-tiers.md](../../../kernel/laws/engagement-tiers.md).
- [ ] Fan-out ownership is disjoint; each slice has a single accountable owner.
- [ ] Parallelism is genuine (no hidden serial dependency forced into parallel).
- [ ] Required councils convened before build.
- [ ] Integration produced one coherent deliverable and a report per [kernel/protocols/reporting.md](../../../kernel/protocols/reporting.md).

## KPIs (how it is measured)
- Parallel utilization (share of work actually run concurrently).
- Ownership-collision rate during fan-out — target zero.
- Tier-sizing accuracy (how often re-sizing was needed mid-engagement).
- Integration cycle time from last slice complete to integrated deliverable.

## Risk lens
- **Ownership collision** — overlapping scope between parallel agents.
- **Mis-sizing** — wrong tier cascading process cost downstream.
- **Scope drift into implementation** — the orchestrator doing the work it should route.
- **Council bypass** — building before the required discussion.
