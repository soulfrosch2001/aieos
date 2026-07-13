# Signing Council — Output

## Output format
Produces **minutes** appended to the [artist-pipeline](../../memory/registers/artist-pipeline.md) register, using the [report template](../../../templates/report.template.md) shape and following [kernel/protocols/reporting.md](../../../kernel/protocols/reporting.md). Required sections:

- **Summary** — the artist and the signing decision.
- **Consensus** — what every Core seat agreed on.
- **Remaining concerns / dissent** — named minority positions, recorded by seat (never "none" unless truly unanimous).
- **Risks** — failure modes and severity; flag one-way doors.
- **Alternatives considered** — the rejected use of capacity and the precise reason.
- **Recommendation** — sign / pass / revisit, with the thesis of record.
- **Implementation plan** — if signing, the development and onboarding tracks for fan-out; the council does not build it.
- **Owners & next steps** — table of owner / action / by-when.

The minutes are a one-way door: corrected by appending, never by erasing (Directive [#8](../../../kernel/laws/prime-directives.md)).

## Updates to memory
- **Always:** [artist-pipeline](../../memory/registers/artist-pipeline.md) — the dated minutes and the disposition, with dissent recorded.
- **If debt is taken:** [release-log](../../memory/registers/release-log.md) — any development or delivery shortcut accepted and its payback trigger.
- **If a lesson emerges:** [catalog-decisions](../../memory/registers/catalog-decisions.md) — the durable signing principle so the next council inherits it (Directive [#6](../../../kernel/laws/prime-directives.md)).
