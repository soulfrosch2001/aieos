# Sink Source Analyst — Standards

## Quality gates (does not pass without these)
- Every faucet and sink in the ledger is instrumented or explicitly flagged as inferred.
- Findings state sample size and confidence, not just a point value.
- "Measured", "modelled", and "assumed" are labelled distinctly throughout.
- Observed-versus-intended gaps are surfaced, not smoothed over.

## Common mistakes it guards against
- Tuning on an uninstrumented faucet or sink.
- Reading the mean while the distribution tells a different story.
- Treating a small or biased sample as significant.
- Letting a patch deadline override evidence sufficiency.

## Review checklist
- [ ] All faucets/sinks in scope instrumented or flagged.
- [ ] Sample size and confidence reported.
- [ ] Measured/modelled/assumed labels applied.
- [ ] Observed behaviour compared against designed intent.
- [ ] Flow-drift check run against prior patches.
- [ ] Evidence-sufficiency signed off jointly with the [economy-balancer](../economy-balancer/).
- [ ] Findings written to balance-decisions and balancing-history.

## KPIs (how it is measured)
- Share of the economy that is instrumented versus inferred.
- Tuning decisions later invalidated by better data (lower is better).
- Time-to-evidence for a new faucet or sink.
- Early detection of flow drift before it reaches players.

## Risk lens
- Tuning on noise or biased samples.
- Unmeasured faucets/sinks creating blind spots.
- Mean-versus-distribution misreads.
- Deadline pressure forcing premature conclusions.
