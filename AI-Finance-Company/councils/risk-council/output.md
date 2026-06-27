# Risk Council — Output
Status: stable
Type: council
Owner: risk-manager
Extends: security-council

## Output format
The council produces **risk minutes** appended to the firm's [risk-register](../../memory/registers/risk-register.md) register, using the [report.template.md](../../../templates/report.template.md) shape. The decision is an explicit **sign-off** or **no-go**. Required sections:

- **Summary** — the risk posture decided and the sign-off / no-go call.
- **Consensus** — agreed exposures and required mitigations or limits.
- **Remaining concerns / dissent** — named unresolved risks and who flagged them.
- **Risks** — accepted residual risk, with severity, loss bound, and monitoring owner.
- **Alternatives considered** — hedges, sizing envelopes, or limits rejected and why.
- **Recommendation** — proceed within these limits, or block, stated unambiguously.
- **Implementation plan** — sizing and mitigation as **disjoint fan-out tracks**; the council does not size the position (Directive [#2](../../../kernel/laws/prime-directives.md)).
- **Owners & next steps** — owner / action / by-when, including the monitoring trigger and the limit that, if breached, reconvenes the council.

Minutes are append-only; a no-go is corrected by a later signed-off minute, never by deletion (Directive [#8](../../../kernel/laws/prime-directives.md)).

## Dissent
Always present and named. A single unaddressed "this can break the mandate" blocks, and the dissent is recorded with who raised it so that, if the risk later materializes, the record shows the warning (Directive [#8](../../../kernel/laws/prime-directives.md)). A compliance/quality veto is recorded with its rationale. "Unanimous" is written only when it is true.

## Updates to memory
- **Always:** [risk-register](../../memory/registers/risk-register.md) — the dated minutes, the sign-off / no-go, the accepted limits, and the named dissent of record.
- **If the decision gates a thesis:** [investment-decisions](../../memory/registers/investment-decisions.md) — the risk conditions attached to the investment decision.
- **If an event carries regulatory weight:** [compliance-log](../../memory/registers/compliance-log.md) — the breach or conduct event and its reporting obligation.
