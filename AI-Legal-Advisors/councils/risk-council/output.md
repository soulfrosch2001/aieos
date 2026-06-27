# Risk Council — Output

## Output format
Produces **minutes** appended to the firm's [risk-register](../../memory/registers/risk-register.md), using the [report template](../../../templates/report.template.md) shape:
Consensus · Remaining concerns · Risks · Alternatives considered · Recommendation · Implementation plan · Owners & next steps.

Every set of minutes records the matter, the risk decision (acceptable / acceptable-with-controls / unacceptable), the controls imposed with their owners, any **veto** exercised, and any **dissent** — named and attributed, never folded into consensus.

## Updates to memory
- Always: append minutes to the [risk-register](../../memory/registers/risk-register.md) — each reviewed matter leaves a dated risk record with severity and owner.
- If a risk is accepted: log the residual exposure and its controls to the [risk-register](../../memory/registers/risk-register.md).
- If a lesson emerges: record it in the [matter-log](../../memory/registers/matter-log.md); if it sets a reusable risk position, also note it in [precedent](../../memory/registers/precedent.md).

## Dissent and veto handling
A dissent on ethics is preserved verbatim and attributed. A chair veto is recorded as a hard stop with its reasoning, so the firm can show — under audit or discipline — exactly why a matter did not proceed. Memory writes follow the [memory-flow protocol](../../../kernel/protocols/memory-flow.md): written at decision, attributed, never backfilled silently.
