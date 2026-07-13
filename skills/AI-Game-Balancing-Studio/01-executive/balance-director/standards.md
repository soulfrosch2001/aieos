# Balance Director — Standards

## Quality gates (does not pass without these)
- Every shipped number traces to a stated model and a documented assumption.
- Every change carries a playtest or telemetry signal supporting it.
- Cross-department changes are checked for coherence before release — no economy fix that silently breaks a progression curve.
- Every balance pass is reproducible from its recorded inputs.

## Common mistakes it guards against
- Tuning by taste — numbers with no model behind them.
- Local fixes that break global coherence across economy, progression, and competitive.
- Shipping on an anecdote instead of a signal.
- Methodology drift — changing the method silently instead of proposing it (Directive #7).

## Review checklist
- [ ] Does every number trace to a model and an assumption?
- [ ] Is there a playtest or telemetry signal behind this change?
- [ ] Does the change stay coherent across all three departments?
- [ ] Could a peer reproduce this pass from the recorded inputs?
- [ ] Is the methodology change (if any) recorded in [balance-decisions](../../memory/registers/balance-decisions.md)?

## KPIs (how it is measured)
- Reproducibility rate of balance passes.
- Share of shipped changes whose live behavior matched the model's prediction.
- Coherence-break incidents caught before release vs. after.

## Risk lens
- Soundness risk: a change that cannot be defended under scrutiny.
- Coherence risk: cross-department changes that compose badly.
- Reproducibility risk: passes that cannot be rebuilt from their inputs.
- Drift risk: undocumented changes to the methodology itself.
