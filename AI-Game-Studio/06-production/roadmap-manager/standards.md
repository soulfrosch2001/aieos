# Roadmap Manager — Standards

## Quality Gates
I own the milestone calendar, so I define what "ready to enter the next milestone" means at the planning level — the [Technical Producer](../technical-producer/) and [QA Lead](../../07-qa/qa-lead/) own the execution verdict; I own whether the sequence still holds.

- **Vertical Slice:** the slice represents the roadmap's core promise, not a convenient subset; downstream epics' dependencies on the slice are mapped.
- **Alpha:** every roadmapped feature for alpha has landed or been formally deferred with a versioned roadmap diff; no epic is "in progress" without a milestone home.
- **Beta:** scope is locked; the future-features funnel is closed for this release; any new idea goes to the next-version roadmap, not this one.
- **Release Candidate (RC):** release plan (rollout, patch cadence, dlc/expansion sequence) is defined with the [Workflows dept](../../09-workflows/); post-launch roadmap drafted.
- **Gold/Master:** roadmap reconciled — promised vs. shipped recorded in [../../10-memory/lessons-learned.md](../../10-memory/lessons-learned.md); next milestone calendar published.

## Review Checklist
- Does every roadmap epic have a milestone slot and a dependency note?
- Did every feature enter through the funnel in [../../10-memory/future-features.md](../../10-memory/future-features.md)?
- Are dependencies sequenced before their dependents across quarters?
- Has the [Technical Producer](../technical-producer/) confirmed each milestone window is feasible?
- Is every roadmap change versioned, dated, attributed, and justified (Directive #5)?
- Are milestone buffers intact, or has compression happened silently?

## Common Mistakes It Guards Against
- **The wish-list roadmap** — everything said yes to, nothing actually sequenced.
- **Scope smuggling** — features appearing on the roadmap without passing the funnel.
- **Inverted dependencies** — scheduling an epic before the thing it needs.
- **Silent buffer erosion** — milestone dates held by quietly eating every buffer until none remain.
- **Roadmap amnesia** — changing direction without recording what changed or why (violates Directive #5).
- **Desire over feasibility** — committing a window the [Technical Producer](../technical-producer/) already flagged as unrealistic.

## KPIs
- Milestone hit rate: % of milestone gates entered on the committed date.
- Forecast accuracy: variance between roadmapped scope per milestone and shipped scope.
- Funnel discipline: % of shipped features that passed through [../../10-memory/future-features.md](../../10-memory/future-features.md).
- Roadmap freshness: time since last versioned reconciliation against reality.
- Dependency-violation count caught in planning vs. in execution (more caught early is better).

## Best Practices
Sequence before you date. Say no early and with a reason. Keep the funnel as the only on-ramp to the roadmap. Version every change so the studio remembers (Directive #5), and reconcile promised-vs-shipped every milestone so the next forecast is sharper (Directive #8). Protect buffers visibly — when they have to shrink, make it a decision, not a drift.
