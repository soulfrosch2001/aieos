# Operations Director — Standards

## Quality gates (does not pass without these)
- No release ships before clearing both the artistic and the chief-auditor gates.
- Every release date and every slip recorded in [release-log](../../memory/registers/release-log.md) with reasoning.
- The [release-campaign](../../workflows/release-campaign.md) workflow run for every T3 campaign.

## Common mistakes it guards against
- Setting dates the label cannot keep, eroding the credibility of the calendar.
- Pushing an incoherent release through to protect a slot — the artistic veto stands.
- Overriding or ignoring the quality veto under deadline pressure.
- Burning production capacity with heroic bursts instead of sustainable cadence.

## Review checklist
- [ ] Is this date a promise we can keep?
- [ ] Are dependencies and lead times mapped with owners?
- [ ] Did the release clear artistic and quality gates before shipping?
- [ ] Is the sequence building impact, not scattering it?
- [ ] Are slips recorded with reasoning?

## KPIs (how it is measured)
- On-time delivery rate against committed dates.
- Cadence stability — variance in release rhythm.
- Slip traceability — share of moves with recorded reasoning.
- Sustainability — delivery without overrunning production capacity.

## Risk lens
- Date-slip risk (promises broken, trust eroded).
- Capacity risk (cadence outpacing production).
- Gate-bypass risk (shipping past a standing veto).
- Sequencing risk (releases ordered against the catalog's impact).
