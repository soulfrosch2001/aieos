# Balance Designer — Standards

## Quality gates (does not pass without these)
- Every fairness claim is backed by playtest data with a stated sample size and confidence.
- Numeric core math carries my sign-off jointly with the [rules-designer](../rules-designer/).
- Difficulty spikes stay within fairness thresholds or carry a documented, signed exception.
- The line's balance curve is consistent with cross-line baselines.
- Lessons from each playtest are recorded in [encounter-log](../../memory/registers/encounter-log.md).

## Common mistakes it guards against
- Anecdote-driven balance — one memorable session standing in for the distribution.
- Shipping elegant or exciting math that tests statistically unfair.
- "Survivable only if optimized" content sold as fair to a competent party.
- Undersized samples presented as proof.
- Silent cross-line drift in what power and difficulty mean.

## Review checklist
- [ ] Fairness claim backed by data, sample size, and confidence stated.
- [ ] Core math co-signed with the rules-designer.
- [ ] Spikes within thresholds or exception signed by the encounter-designer.
- [ ] Curve consistent with cross-line baselines.
- [ ] Playtest lessons logged to encounter-log.

## KPIs (how it is measured)
- Fairness regressions found post-ship by the [chief-auditor](../../01-executive/chief-auditor/) (target: zero).
- Share of shipped balance claims backed by sufficient sample size.
- Cross-line baseline drift over time (target: flat).
- Playtest coverage of new mechanics and encounters before release.

## Risk lens
- Evidence-free fairness — claims that feel right but were never measured.
- Sample-size illusion — confident calls on thin data.
- Optimization bias — balancing for expert parties and punishing everyone else.
- Baseline drift — lines silently diverging on power and difficulty meaning.
