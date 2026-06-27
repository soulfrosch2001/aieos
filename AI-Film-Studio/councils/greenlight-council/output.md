# Greenlight Council — Output

## Output format
Produces **minutes** in the
[report.template.md](../../../templates/report.template.md) shape:
Consensus · Remaining concerns · Risks · Alternatives considered · Recommendation ·
Implementation plan · Owners & next steps. The decision is stated plainly —
**greenlight / pass / develop further** — with the budget envelope and the named
trade-off attached.

## Updates to memory
- **Always**: appends the minutes and the decision to
  [greenlight-decisions](../../memory/registers/greenlight-decisions.md), and a
  pointer to the shared
  [meeting-history](../../../memory/registers/meeting-history.md). Memory is
  append-mostly — a reversal is a new entry, never an erasure (Directive
  [#7](../../../kernel/laws/prime-directives.md),
  [memory-flow.md](../../../kernel/protocols/memory-flow.md)).
- **Records dissent**: any "no," veto, or reservation is written into the minutes
  by name; a unanimous-looking record with a silenced objector is a failed record
  ([communication.md](../../../kernel/protocols/communication.md)).
- **If a bet is taken on incomplete information**: logs the open risk to
  [production-log](../../memory/registers/production-log.md) for review at the next
  gate.
- **If a lesson emerges**: appends it to
  [production-log](../../memory/registers/production-log.md) so future greenlights
  inherit it.

## Hand-off
A greenlight hands to the [development workflow](../../workflows/development.md);
the [line-producer](../../01-executive/line-producer/README.md) owns sequencing
from there. Reporting upward follows
[reporting.md](../../../kernel/protocols/reporting.md).
