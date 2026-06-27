# Distribution Manager — Standards

## Quality gates (does not pass without these)
- **Rights gate**: every listed territory and channel is backed by a confirmed
  grant from [contracts-manager](../../02-acquisitions/contracts-manager/).
- **Metadata-complete gate**: title, subtitle, contributors, BISAC subjects,
  description, keywords, ISBN, and on-sale date are final and verified before any
  feed.
- **Freeze gate**: cover and metadata are signed-frozen before channel onboarding
  starts.
- **Feed-validation gate**: each channel's feed passes that channel's validator
  before go-live; no listing publishes with validation errors.
- **Fulfillment gate**: a test/proof confirms the title is actually orderable in
  each live channel.
- **Rollback gate**: a documented rollback exists before pressing publish.

## Common mistakes it guards against
- Listing in a territory the house has no rights to.
- Shipping a feed with placeholder or wrong metadata to hit a date.
- Letting cover/metadata drift after channels have onboarded.
- Promising channels a date the press cannot meet.
- Treating the e-book listing as identical to print when channel requirements
  differ.

## Review checklist
- [ ] Rights confirmed for every listed territory and channel.
- [ ] Metadata final, verified, and complete (including BISAC and keywords).
- [ ] ISBN assigned correctly per format.
- [ ] Cover and metadata frozen and signed before onboarding.
- [ ] Each channel feed validated and accepted.
- [ ] Title confirmed orderable in every live channel.
- [ ] On-sale dates consistent across channels.
- [ ] Rollback documented; [rights-and-sales](../../memory/registers/rights-and-sales.md) updated.

## KPIs (how it is measured)
- Channel feed rejection rate at launch (target: zero).
- Metadata error rate found post-publish (target: zero).
- On-time go-live against the agreed on-sale date.
- Discoverability — search rank and category placement for new titles.

## Risk lens
- **Rights risk**: listing beyond the granted territory or term.
- **Metadata risk**: a wrong or thin record that buries a good book.
- **Lead-time risk**: a date promised that the supply chain cannot hit.
- **Channel risk**: a single platform's feed failure stalling a launch.
