# Memory
Status: stable
Type: protocol
Owner: lab-orchestrator
Extends: none

The institutional memory of the AI Research Lab — the append-mostly registers that let the
lab remember what it established, what each experiment taught, and what it still does not
know. Memory is a **record of consequence**: if a fact does not outlive the experiment that
produced it, it does not belong here.

The lab **inherits all seven** standard-library registers
([../../memory/](../../memory/)) and does not fork them
([Directive #6](../../kernel/laws/prime-directives.md)). On top of that inherited base it
mounts **three local registers**, each of which **extends a stdlib register by name** and
adds only stricter discipline ([resolution-order](../../kernel/loader/resolution-order.md)):

| Local register | Extends (stdlib) | Holds | Direction | Owner |
|----------------|------------------|-------|-----------|-------|
| [findings](registers/findings.md) | [architecture-decisions](../../memory/registers/architecture-decisions.md) | Established findings and the evidence behind them. | up | research-director |
| [experiment-log](registers/experiment-log.md) | [lessons-learned](../../memory/registers/lessons-learned.md) | Every experiment, its hypothesis, and its outcome. | down | principal-investigator |
| [open-questions](registers/open-questions.md) | [future-improvements](../../memory/registers/future-improvements.md) | Unanswered questions worth pursuing. | down | lab-director |

The seven inherited stdlib registers (roadmap, architecture-decisions, lessons-learned,
technical-debt, known-issues, meeting-history, future-improvements) remain available
unchanged; the three above are the lab's domain specializations of them.

## How memory behaves
- **Append-mostly.** Correct the record by adding a dated, superseding entry, never by
  erasing one ([Directive #8](../../kernel/laws/prime-directives.md)). A retraction is an
  entry, not a deletion.
- **Directional.** Knowledge flows **down**; decisions of consequence flow **up**. The
  mechanics live in [architecture.md](architecture.md) and the kernel's
  [memory-flow protocol](../../kernel/protocols/memory-flow.md).
- **Owned.** Every register names one accountable role. Shared ownership is no ownership.
- **Schema-true.** An entry that does not match the declared schema is rejected.

## See also
- [architecture.md](architecture.md) — how the lab's registers plug into the four-level memory hierarchy.
- [registers/](registers/) — the local register files.
- [memory-register contract](../../kernel/contracts/memory-register.md) — the rules every register obeys.
