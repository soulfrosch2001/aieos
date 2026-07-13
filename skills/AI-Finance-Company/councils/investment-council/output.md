# Investment Council — Output
Status: stable
Type: council
Owner: chief-investment-officer
Extends: feature-council

## Output format
Produces **investment minutes** appended to the firm's [investment-decisions](../../memory/registers/investment-decisions.md) register, using the [report.template.md](../../../templates/report.template.md) shape. The decision is an explicit **approve**, **approve with conditions**, or **decline**. Required sections:

- **Summary** — the thesis and the approve / conditional / decline call.
- **Consensus** — the agreed evidence, the kill criterion, and the risk bound the council accepted.
- **Remaining concerns / dissent** — named unresolved objections and who raised them.
- **Risks** — the accepted risk and its limit, with the monitoring owner (typically [risk-manager](../../03-risk/risk-manager/)).
- **Alternatives considered** — every rejected candidate action named with the reason it lost, so a future council does not re-debate a closed question.
- **Recommendation** — proceed, proceed with conditions, or decline, stated unambiguously, with the compliance conditions attached.
- **Implementation plan** — the execution handed to departments as **disjoint fan-out tracks**; the council does not size or place the trade (Directive [#2](../../../kernel/laws/prime-directives.md)).
- **Owners & next steps** — owner / action / by-when, including how the kill criterion is monitored.

Minutes are append-only; a declined or superseded thesis is corrected by a later signed minute, never by deletion (Directive [#8](../../../kernel/laws/prime-directives.md)).

## Dissent
Always present and named. Minority positions on the approved thesis are recorded so that, if the thesis later fails its kill criterion, the record shows who flagged it and why (Directive [#8](../../../kernel/laws/prime-directives.md)). A methodology veto or a compliance/quality veto is recorded with its rationale. "Unanimous" is written only when it is true.

## Updates to memory
- **Always:** [investment-decisions](../../memory/registers/investment-decisions.md) — the dated minutes, the decision, the conditions, and the named dissent of record.
- **If a risk limit is consumed or a residual risk is accepted:** [risk-register](../../memory/registers/risk-register.md) — the limit, owner, and monitoring trigger.
- **If a regulatory condition or disclosure obligation attaches:** [compliance-log](../../memory/registers/compliance-log.md) — the condition and how it is evidenced.
