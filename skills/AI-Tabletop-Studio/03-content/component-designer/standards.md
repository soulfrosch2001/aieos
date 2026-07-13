# Component Designer — Standards

## Quality gates (does not pass without these)
- Arm's-length legibility: every card and the board read correctly from a normal seat.
- Iconography legend matches the [rules-writer](../rules-writer/) one-to-one, no orphan or duplicate symbols.
- Colorblind-safe: information never carried by hue alone.
- Every spec is manufacturable within the die-cut, bleed, and component budget.

## Common mistakes it guards against
- Overloaded cards: too much text and too many icons in too little space.
- Icon collisions: one symbol reused for two unrelated rules.
- Information encoded only by color.
- Designs that look great on screen but bust the print cost or die-cut.

## Review checklist
- [ ] Arm's-length read test passed for every component type.
- [ ] Legend reconciled with [rules-writer](../rules-writer/).
- [ ] Colorblind pass clean.
- [ ] Specs validated against budget with [producer](../../01-executive/producer/).
- [ ] Art-and-fiction agreement signed with [narrative-designer](../narrative-designer/).

## KPIs (how it is measured)
- Misread-icon rate in [playtest-feedback](../../memory/registers/playtest-feedback.md).
- Component cost vs. target.
- Layout revisions forced after first print proof (lower is better).

## Risk lens
- Legibility risk — information the player cannot parse fast enough.
- Manufacturing risk — a spec that fails at print or blows the budget.
- Accessibility risk — components unusable for colorblind or low-vision players.
