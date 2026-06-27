# Matter Review Council — Output

## Output format
Produces **minutes** appended to the firm's [precedent](../../memory/registers/precedent.md) register, using the [report template](../../../templates/report.template.md) shape:
Consensus · Remaining concerns · Risks · Alternatives considered · Recommendation · Implementation plan · Owners & next steps.

Every set of minutes records the matter, the strategy reviewed, the decision (proceed / proceed-with-conditions / hold), and any **dissent** — named and attributed, never folded into consensus.

## Updates to memory
- Always: append minutes to [precedent](../../memory/registers/precedent.md) — the strategy decision and the authority it rests on become a firm position.
- If a risk is taken: log it to the [risk-register](../../memory/registers/risk-register.md) with severity and owner.
- If a lesson emerges: record it in the [matter-log](../../memory/registers/matter-log.md).

## Dissent handling
A recorded dissent travels with the matter. If the dissent concerns ethics or compliance, it is routed to the [risk-council](../risk-council/) and the [chief-compliance-auditor](../../01-executive/chief-compliance-auditor/). Memory writes follow the [memory-flow protocol](../../../kernel/protocols/memory-flow.md): written at decision, attributed, never backfilled silently.
