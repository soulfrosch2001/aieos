# Encounter Balancer — Standards

## Quality gates (does not pass without these)
- Every threat in the encounter has identifiable counterplay and a fair response window.
- Every common death has a nameable, learnable cause (readability holds).
- The fight fits its assigned curve slot, confirmed with the progression-balancer.
- Scaling changes that touch internals are co-signed with the difficulty-tuner.
- Outcomes are recorded in [balancing-history](../../memory/registers/balancing-history.md) with the death-cause shift.

## Common mistakes it guards against
- Difficulty from ambush, off-screen damage, or unreadable overlap of threats.
- Adds or enrage timers that inflate clear time without adding decision-making.
- Flat stat scaling that silently breaks a telegraph or phase rotation.
- A well-built fight placed in the wrong curve slot.
- Phases that escalate demand faster than the player can learn the answer.

## Review checklist
- [ ] Does every threat have counterplay and a fair window?
- [ ] Does every common death have a nameable cause?
- [ ] Does the fight fit its curve slot per the progression-balancer?
- [ ] Have internal-touching scale changes been co-signed by the difficulty-tuner?
- [ ] Is difficulty earned through clarity rather than noise?
- [ ] Is the structure change and death-cause shift written to memory?

## KPIs (how it is measured)
- Readability: share of deaths players can correctly attribute to a cause.
- Counterplay coverage: share of threats with a fair, learnable answer.
- Recoverable difficulty: retry-and-clear rate on hard fights vs. abandonment.
- Slot fit: share of encounters whose measured difficulty matches their curve slot.

## Risk lens
- **Unfairness risk** — difficulty from ambush or noise rather than clarity.
- **Inflation risk** — adds and timers that pad clear time without depth.
- **Scale-break risk** — flat multipliers that fracture tuned structure.
- **Mis-placement risk** — a fight at odds with its curve slot.
- **Learning-cliff risk** — escalation faster than the player can adapt.
