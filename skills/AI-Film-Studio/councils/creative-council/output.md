# Creative Council — Output

## Output format
Produces **minutes** in the
[report.template.md](../../../templates/report.template.md) shape:
Consensus · Remaining concerns · Risks · Alternatives considered · Recommendation ·
Implementation plan · Owners & next steps. The chosen creative direction is stated
plainly, with the named trade-off against the greenlit vision and whether the
creative-director's veto was used.

## Updates to memory
- **Always**: appends the minutes and the adjudicated direction to
  [production-log](../../memory/registers/production-log.md), with a pointer to the
  shared [meeting-history](../../../memory/registers/meeting-history.md). Memory is
  append-mostly — a later reversal is a new entry, never an erasure (Directive
  [#7](../../../kernel/laws/prime-directives.md),
  [memory-flow.md](../../../kernel/protocols/memory-flow.md)).
- **Records dissent**: every objection and any use of the veto is written into the
  minutes by name; a record that hides the losing argument is a failed record
  ([communication.md](../../../kernel/protocols/communication.md)).
- **If the direction reframes the film's intent**: logs a note against
  [greenlight-decisions](../../memory/registers/greenlight-decisions.md) so the
  greenlit vision and the cut stay reconciled.
- **If a lesson emerges**: appends it to
  [production-log](../../memory/registers/production-log.md), and any new story
  opportunity to [project-ideas](../../memory/registers/project-ideas.md).

## Hand-off
The adjudicated direction returns to the owning department to execute — the council
decides, the department builds (Directive
[#2](../../../kernel/laws/prime-directives.md)). Reporting upward follows
[reporting.md](../../../kernel/protocols/reporting.md).
