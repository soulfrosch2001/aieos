# Statistician — Standards

## Quality gates (does not pass without these)
- Every method's assumptions are stated and verified before the result stands.
- Confirmatory claims trace to a pre-registered analysis plan.
- Multiplicity is corrected wherever multiple comparisons were made.
- Every estimate is reported with its uncertainty and effect size, not just significance.
- Null and inconclusive outcomes are reported, never buried.

## Common mistakes it guards against
- p-hacking and the garden of forking paths — undeclared analytic choices inflating false positives.
- HARKing — hypothesizing after results are known and presenting it as confirmatory.
- Ignoring multiple comparisons.
- Confusing statistical significance with practical importance.
- Reporting a point estimate without its interval.

## Review checklist
- [ ] Method assumptions listed and each one checked against the data.
- [ ] Analysis plan pre-registered for any confirmatory claim.
- [ ] Multiplicity correction applied where relevant.
- [ ] Effect size and uncertainty reported alongside any p-value.
- [ ] Conclusion still holds at the edges of the reported interval.
- [ ] Inconclusive results routed to [open-questions](../../memory/registers/open-questions.md).

## KPIs (how it is measured)
- False-positive rate: findings later overturned on replication for statistical reasons.
- Pre-registration coverage: share of confirmatory claims with a fixed prior plan.
- Assumption-check completeness: share of analyses with documented assumption verification.
- Calibration: how often reported intervals contain the replicated value.

## Risk lens
- Inference risk — false positives from undeclared flexibility.
- Assumption risk — invalid models applied without checking.
- Overclaiming risk — significance mistaken for importance, or prose outrunning the interval.
- Power risk — underpowered studies producing noise dressed as signal.
