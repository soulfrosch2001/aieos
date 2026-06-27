# Acquisition Council — Output

## Output format
Produces **acquisition minutes** appended to the company's `meeting-history`
register, using the
[report.template.md](../../../templates/report.template.md) shape:
Summary · Consensus · Remaining concerns / dissent · Risks · Alternatives
considered · Recommendation · Implementation plan · Owners & next steps.

The *Alternatives considered* section is load-bearing: every title or option the
council passed on is named with the reason it lost, so capacity decisions are not
re-litigated. The *Implementation plan* hands the acquired title to acquisitions
(contract) and editorial (pipeline) — it names owners, never edits the book.

## Dissent
Always present and named. A council member who argued against acquiring — or for a
different title — is recorded by name and reason, so if the bet fails the record
shows who flagged it (Directive [#8](../../../kernel/laws/prime-directives.md)).
"Unanimous" is written only when it is true.

## Updates to memory
- Always: [catalog-decisions](../../memory/registers/catalog-decisions.md) — the
  acquire/pass decision, the terms frame, and the recorded dissent (this register
  extends the stdlib
  [architecture-decisions](../../../memory/registers/architecture-decisions.md)).
- Always: the company `meeting-history` — the dated minutes.
- If a lesson emerges: [editorial-standards](../../memory/registers/editorial-standards.md).
- If the acquisition shapes the forward list: [rights-and-sales](../../memory/registers/rights-and-sales.md).
