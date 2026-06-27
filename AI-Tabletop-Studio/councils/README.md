# AI-Tabletop-Studio — Councils

Status: draft
Type: council
Owner: studio-orchestrator
Extends: none

The studio's two local **councils** — non-standing rooms that decide a single
significant question, record minutes, and disband. A council **decides; it never
builds** (Directive [#2](../../kernel/laws/prime-directives.md)); it hands a plan
to the design and content departments. Both inherit a stdlib blueprint rather
than inventing one (Directive [#6](../../kernel/laws/prime-directives.md)) and may
only **add** strictness, never relax the parent.

## The two local councils

| Council | Decides | Convened at | Chair | Extends |
|---------|---------|-------------|-------|---------|
| [design-council](design-council/README.md) | Core game-design direction and shape | T2+ | design-director | stdlib [feature-council](../../councils/feature-council/README.md) |
| [balance-council](balance-council/README.md) | Whether a balance change is fair/playable | T2+ | balance-designer | stdlib [performance-council](../../councils/performance-council/README.md) |

The studio's "is it within budget" question is reframed as **"is it balanced and
fair to all players"** — the balance-council is the performance-council analog for
a game, where the budget is the win-rate spread, not latency.

## Universal rules (both councils)
- Convened **by tier, not standing** — see
  [engagement-tiers.md](../../kernel/laws/engagement-tiers.md).
- **Dissent is recorded, never suppressed** — the minority designer is named.
- **Always produces minutes** to `memory/registers/`; an unrecorded decision did
  not happen (Directive [#8](../../kernel/laws/prime-directives.md)).

## Contract & template
- Contract: [../../kernel/contracts/council.md](../../kernel/contracts/council.md)
- Template: [../../templates/council.template.md](../../templates/council.template.md)
