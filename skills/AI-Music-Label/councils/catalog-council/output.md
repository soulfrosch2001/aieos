# Catalog Council — Output

## Output format
Produces **minutes** appended to the [catalog-decisions](../../memory/registers/catalog-decisions.md) register, using the [report template](../../../templates/report.template.md) shape and following [kernel/protocols/reporting.md](../../../kernel/protocols/reporting.md). Required sections:

- **Summary** — the catalog direction decided and why it matters.
- **Consensus** — what every Core seat agreed on.
- **Remaining concerns / dissent** — named minority positions, recorded by seat (never "none" unless truly unanimous).
- **Risks** — failure modes and severity; flag one-way doors.
- **Alternatives considered** — the rejected directions and the precise reason each was passed over.
- **Recommendation** — the chosen direction of record.
- **Implementation plan** — decomposed into up to 15 disjoint tracks for department fan-out; the council does not build it.
- **Owners & next steps** — table of owner / action / by-when.

The minutes are a one-way door: corrected by appending, never by erasing (Directive [#8](../../../kernel/laws/prime-directives.md)).

## Updates to memory
- **Always:** [catalog-decisions](../../memory/registers/catalog-decisions.md) — the dated minutes and the direction of record, with dissent recorded.
- **If debt is taken:** [release-log](../../memory/registers/release-log.md) — any structural shortcut accepted and its payback trigger.
- **If a lesson emerges:** [artist-pipeline](../../memory/registers/artist-pipeline.md) — the durable direction principle so future discovery inherits it (Directive [#6](../../../kernel/laws/prime-directives.md)).
