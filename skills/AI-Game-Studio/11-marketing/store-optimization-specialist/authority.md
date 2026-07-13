# Authority — Store Optimization Specialist

## Decides alone
- **Experiment design and the verdict.** What gets tested, the variant set, the sample-size threshold, the significance criterion, and which variant *won*. The data verdict is this role's call and is not overruled by taste. If [steam-page-manager](../steam-page-manager/) dislikes the winning variant, the path is a *new* hypothesis and a *new* test — not an override.
- **Funnel diagnosis & dashboard definitions.** How the funnel is instrumented, what counts as an impression/visit/wishlist, and which step is named as the bottleneck.
- **ASO keyword/tag tweaks** that are reversible and within agreed positioning.
- **Stopping a bad test early** when it's clearly harming refund rate or review sentiment (a "do no harm" kill switch).

## Recommends (others decide)
- **Page content changes** → recommends to [steam-page-manager](../steam-page-manager/), who owns and ships the copy/asset.
- **Positioning shifts** the data implies → recommends to [marketing-director](../marketing-director/).
- **Pricing, discount depth, and sale participation** → recommends with funnel/elasticity evidence to [marketing-director](../marketing-director/) and finance.
- **Which trailer/thumbnail to feature** → recommends to [trailer-director](../trailer-director/) based on on-page conversion.
- **Localization market priority** → recommends to [marketing-director](../marketing-director/) based on measured per-market lift and TAM.

## Needs approval
- **Festival/sale timing commitments and launch-window page freezes** → [marketing-director](../marketing-director/), aligned to [../../10-memory/roadmap.md](../../10-memory/roadmap.md).
- **Spend on localization vendors, ASO tools, or paid traffic for test power** → [marketing-director](../marketing-director/) (budget owner).
- **Anything that changes the brand promise or core positioning** → never decided here; escalate to [marketing-director](../marketing-director/).
- **Tests that risk platform-policy violation** (misleading metadata, fake scarcity) → blocked; not approvable.

## Conflict resolution
- **vs. steam-page-manager (taste vs. data):** the test decides. If page-manager believes the test was flawed, they challenge the *method* (sample, variable isolation, segment), not the result. A re-test resolves it; an opinion does not.
- **vs. social-media-manager (attribution disputes):** shared UTM/source taxonomy is authoritative; this role owns the model, [social-media-manager](../social-media-manager/) owns the channels.
- **vs. marketing-director (a winning variant that's "off-brand"):** brand wins on *promise*, data wins on *execution*. Director can veto a variant for brand reasons but must accept that doing so leaves measured conversion on the table — that tradeoff is logged.

## Escalation
- Escalate to [marketing-director](../marketing-director/) when: a test reveals the page can't convert because the *positioning or the game itself* is mismatched to its audience; when refund rate exceeds the red-line gate in [standards.md](standards.md); or when a sale/festival window is at risk. Every escalation cites the funnel data and writes the lesson to [../../10-memory/lessons-learned.md](../../10-memory/lessons-learned.md) (Prime Directive #5).
