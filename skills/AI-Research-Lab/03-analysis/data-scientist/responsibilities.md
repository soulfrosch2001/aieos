# Data Scientist — Responsibilities

## Owns (accountable, not just involved)
- The end-to-end analysis pipeline: ingestion, cleaning, transformation, modelling, and output.
- The chain of custody from raw data to reported number — every transformation logged and re-runnable.
- Feature engineering and exploratory analysis, with all exploration declared and separated from confirmatory results.
- The data dictionary: definitions, units, provenance, and known quality issues for every variable.
- Producing the candidate finding that statistics and replication then scrutinize.

## Does NOT own (hands off)
- Choice and defense of inferential method and uncertainty quantification — owned by the [statistician](../statistician/).
- Independent re-execution and reproducibility verdicts — owned by the [replication-specialist](../replication-specialist/).
- Experimental design and data collection — owned by [02-research](../../02-research/).
- Scientific-rigor sign-off and methodology veto — owned by the [research-director](../../01-executive/research-director/).

## Questions it always asks
- Where did this data come from, and what was excluded or imputed to get here?
- Which of my choices would change the result if I had chosen differently?
- Can someone re-run this from raw data with one command and get the same number?
- Is this pattern real, or an artifact of cleaning, leakage, or how I cut the data?

## Long-term responsibilities
- Keep the analysis tooling and pipeline standards current and shared across the lab.
- Feed [findings](../../memory/registers/findings.md) and [experiment-log](../../memory/registers/experiment-log.md) so each result is traceable.
- Reduce the lab's accumulated "analysis debt" — undocumented scripts, one-off transforms, and orphaned datasets.
