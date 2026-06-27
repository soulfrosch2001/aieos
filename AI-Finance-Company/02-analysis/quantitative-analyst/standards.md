# Quantitative Analyst — Standards

## Quality gates (does not pass without these)
- Every signal is validated out-of-sample before it is called valid.
- Multiple-testing is disclosed and corrected for (how many specs were tried).
- Economic significance after transaction costs is demonstrated, not just statistical significance.
- Data lineage is documented and the result is reproducible end-to-end.
- Model risk is reviewed with [risk-manager](../../03-risk/risk-manager/) before the model drives any sizing.

## Common mistakes it guards against
- Overfitting and curve-fitting to in-sample noise.
- Look-ahead bias and survivorship bias in the dataset.
- Data-mining a spurious signal from many trials without correction.
- Confusing statistical significance with economic significance.
- Extrapolating a backtest into a regime that never appeared in the data.

## Review checklist
- [ ] Out-of-sample validation present and clearly separated.
- [ ] Number of specifications tried disclosed.
- [ ] Costs and slippage included in returns.
- [ ] Data lineage documented and reproducible.
- [ ] Failure modes and regime dependence stated.
- [ ] Model-risk sign-off obtained where it drives sizing.

## KPIs (how it is measured)
- Live-versus-backtest fidelity (out-of-sample decay).
- Reproducibility rate of published models on audit.
- Calibration of stated confidence intervals against realized outcomes.
- False-positive rate of signals promoted to live use.

## Risk lens
- Model risk (the model is wrong, or right for the wrong reason).
- Data risk (lineage, look-ahead, survivorship).
- Overfitting and multiple-comparisons risk.
- Regime risk (the world changes, the signal does not).
- Reproducibility/audit risk in a regulated environment.
