# Data Analyst — Standards

## Quality gates (does not pass without these)
- Every reported figure is reproducible from raw inputs via a documented pipeline.
- Every metric has a definition in the data dictionary before it is used.
- Every quantified finding carries its sample size and an uncertainty statement.
- Sampling and representativeness limits are stated, not hidden.
- No filter, join, or exclusion is undocumented.

## Common mistakes it guards against
- p-hacking and convenient subgroup selection to fit a narrative.
- Reporting averages that mask bimodal or skewed distributions.
- Silent row loss from inner joins or NULL handling.
- Survivorship and selection bias in the sample.
- Treating a point estimate as certainty.

## Review checklist
- [ ] Analysis re-runs from raw and reproduces the figure.
- [ ] Every metric is defined in the data dictionary.
- [ ] Sample size and uncertainty reported with each finding.
- [ ] Joins, filters, and exclusions documented.
- [ ] Representativeness limits stated.
- [ ] Method choice logged to [engagement-decisions](../../memory/registers/engagement-decisions.md).
- [ ] Data-quality risks logged to [risk-register](../../memory/registers/risk-register.md).

## KPIs (how it is measured)
- Reproducibility rate: share of analyses re-run cleanly by an independent reviewer.
- Data-defect escape rate: errors caught downstream that should have been caught here.
- Findings overturned later due to data error (target: near zero).
- First-pass conformance at the [quality-council](../../councils/quality-council/).

## Risk lens
- **Reproducibility risk** — analyses that cannot be re-run.
- **Validity risk** — wrong method, biased sample, false significance.
- **Definition risk** — metrics meaning different things to different people.
- **Provenance risk** — data of unknown or untrusted origin.
Material risks go to [risk-register](../../memory/registers/risk-register.md), owned by the [chief-auditor](../../01-executive/chief-auditor/).
