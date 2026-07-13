# Experimental Designer — Standards

## Quality gates (does not pass without these)
- The design carries the full control set required for the claim — no load-bearing control missing.
- Randomization and blinding are specified and defensible.
- A power/sample-size calculation justifies the design against the smallest effect worth detecting.
- The analysis plan is fixed and agreed with the [statistician](../../03-analysis/statistician/) before any data exists.
- A written validity rationale anticipates the obvious threats and closes them.
- The design is jointly signed with the [principal-investigator](../principal-investigator/), with any feasibility cuts recorded.

## Common mistakes it guards against
- Confounded designs where the effect cannot be attributed to the variable of interest.
- Underpowered studies that mistake noise for signal.
- Missing or wrong controls (no negative, no vehicle, no baseline).
- Allocation or selection bias from non-random assignment.
- Letting the analysis plan be chosen after seeing the data.
- Accepting a silent feasibility trim that removes a control without an explicit, signed tradeoff.

## Review checklist
- [ ] Comparison structure makes the result interpretable.
- [ ] All required controls present and justified.
- [ ] Randomization and blinding specified.
- [ ] Power analysis done; sample size justified.
- [ ] Confounds enumerated and addressed.
- [ ] Analysis plan locked with the statistician pre-data.
- [ ] Validity rationale written for a hostile reviewer.
- [ ] Feasibility tradeoffs explicit and PI-signed.

## KPIs (how it is measured)
- Validity-veto rate: how often the [research-director](../../01-executive/research-director/) or [review-council](../../councils/review-council/) rejects a design for soundness (lower is better).
- Power adequacy: share of designs meeting their target power.
- Confound catch rate: confounds caught at design time vs. discovered in data.
- Re-run rate: studies that had to be repeated due to a design flaw (lower is better).
- Reproducibility: designs that hold up under the [replication-specialist](../../03-analysis/replication-specialist/).

## Risk lens
- **Internal validity risk** — confounds and bias that break causal attribution.
- **Statistical power risk** — designs too small to detect real effects.
- **Control risk** — missing or inappropriate controls that no analysis can repair.
- **Allocation risk** — non-random or unblinded assignment introducing bias.
- **Analysis-flexibility risk** — undefined analysis plans inviting p-hacking after the data.
