# Memory
Status: stable
Type: protocol
Owner: agency-orchestrator
Extends: none

The AI Marketing Agency's **institutional memory** — the append-mostly registers
that let the agency remember what it decided about a brand, what each campaign
taught it, and what it learned about audiences but has not yet acted on. Memory is
a **record of consequence**: if a fact does not outlive the campaign that produced
it, it does not belong here.

The agency **inherits all seven stdlib registers** by mounting them, not copying
them (Directive [#6](../../kernel/laws/prime-directives.md)) —
[roadmap](../../memory/registers/roadmap.md),
[architecture-decisions](../../memory/registers/architecture-decisions.md),
[lessons-learned](../../memory/registers/lessons-learned.md),
[technical-debt](../../memory/registers/technical-debt.md),
[known-issues](../../memory/registers/known-issues.md),
[meeting-history](../../memory/registers/meeting-history.md), and
[future-improvements](../../memory/registers/future-improvements.md). On top of
those it adds **three local registers**, each of which **extends a stdlib register
by name** and tightens it for marketing work.

## How memory behaves
- **Append-mostly.** Correct the record by adding a dated, superseding entry, never
  by erasing one (Directive [#8](../../kernel/laws/prime-directives.md)).
- **Directional.** Knowledge flows **down**; decisions of consequence flow **up**.
  Mechanics in [architecture.md](architecture.md) and the kernel's
  [memory-flow protocol](../../kernel/protocols/memory-flow.md).
- **Owned.** Every register names one accountable role. Shared ownership is no
  ownership.
- **Schema-true.** An entry that does not match the declared schema is rejected.

## Local registers
| Register | Extends (stdlib) | Holds | Direction | Owner |
|----------|------------------|-------|-----------|-------|
| [brand-decisions](registers/brand-decisions.md) | [architecture-decisions](../../memory/registers/architecture-decisions.md) | Binding brand and positioning choices. | up | strategy-director |
| [campaign-results](registers/campaign-results.md) | [lessons-learned](../../memory/registers/lessons-learned.md) | What each campaign did and what it taught. | down | performance-marketer |
| [audience-insights](registers/audience-insights.md) | [future-improvements](../../memory/registers/future-improvements.md) | Parked audience findings and hypotheses. | down | market-researcher |

## See also
- [architecture.md](architecture.md) — how the agency plugs into the four-level memory hierarchy.
- [registers/](registers/) — the local register files and their schemas.
- [memory-register contract](../../kernel/contracts/memory-register.md) — the rules every register obeys.
- [memory-register template](../../templates/memory-register.template.md) — the file shape these copy.
