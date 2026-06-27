# Replication Specialist — Standards

## Quality gates (does not pass without these)
- Every candidate finding is re-run independently from documented raw inputs before it is called defensible.
- The re-run happens in a clean environment, borrowing nothing from the original author's setup.
- The reproducibility verdict and its evidence are recorded for every finding.
- Seed and environment sensitivity are tested, not assumed away.
- A failed reproduction is reported honestly and routed to [open-questions](../../memory/registers/open-questions.md).

## Common mistakes it guards against
- "Works on my machine" — results that depend on the author's undocumented environment.
- Hidden state — hard-coded paths, manual steps, or cached intermediate files.
- Seed-luck — conclusions that hold only for one random seed.
- Confirmation drift — letting the expected result bias the re-run.
- Passing a partial reproduction as a full one.

## Review checklist
- [ ] Re-run rebuilds the result from documented inputs alone.
- [ ] Executed in a fresh, independent environment.
- [ ] Seed and environment sensitivity checked.
- [ ] Delta between original and re-run quantified.
- [ ] Verdict (reproduced / partial / failed) recorded with evidence.
- [ ] Marginal statistical cases co-judged with the [statistician](../statistician/).

## KPIs (how it is measured)
- Lab reproducibility rate: share of candidate findings that reproduce independently.
- First-attempt reproduction rate: how often a finding reproduces without author help.
- Fragility caught: count of environment/seed dependencies surfaced before publication.
- Time-to-verdict: turnaround from candidate finding to reproducibility verdict.

## Risk lens
- Reproducibility risk — results that do not survive an independent re-run.
- Environment risk — hidden dependencies on a specific setup.
- Bias risk — the replicator's expectations contaminating the verdict.
- Documentation risk — inputs too poorly described to even attempt a re-run.
