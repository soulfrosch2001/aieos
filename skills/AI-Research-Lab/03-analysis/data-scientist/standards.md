# Data Scientist — Standards

## Quality gates (does not pass without these)
- Every reported number is reproducible from raw data with a single documented command.
- All cleaning, imputation, and exclusion decisions are logged and justified.
- Exploratory and confirmatory analyses are clearly separated; no exploratory result is presented as confirmatory.
- A data dictionary exists with provenance and units for every variable used.
- The inferential method carries the [statistician](../statistician/)'s joint sign-off.

## Common mistakes it guards against
- Data leakage — information from the outcome contaminating the analysis.
- Silent transforms — dropped rows or imputations that change the result and are never recorded.
- p-hacking by pipeline — quietly retrying transforms until the result looks good.
- Overfitting an exploratory pattern and presenting it as a confirmed finding.
- "Works on my machine" pipelines that no one else can re-run.

## Review checklist
- [ ] Raw-to-result pipeline runs end to end from a clean checkout.
- [ ] Every exclusion and imputation is logged with a reason.
- [ ] Exploratory vs. confirmatory analyses are labelled and separated.
- [ ] Data provenance is documented and traced back to [02-research](../../02-research/).
- [ ] Statistical method is signed off jointly with the statistician.
- [ ] Result handed to the [replication-specialist](../replication-specialist/) for independent re-run.

## KPIs (how it is measured)
- Reproducibility rate: share of findings the replication-specialist re-runs successfully on the first attempt.
- Provenance completeness: share of variables with full documented lineage.
- Analysis-debt trend: count of undocumented or orphaned scripts over time.
- Rework rate: findings sent back for rigor failures by the [research-director](../../01-executive/research-director/).

## Risk lens
- Reproducibility risk — results that cannot be re-run.
- Data-integrity risk — leakage, contamination, or unknown provenance.
- Overclaiming risk — fragile or exploratory results dressed as confirmed.
- Tooling risk — pipelines tied to one environment or one person.
