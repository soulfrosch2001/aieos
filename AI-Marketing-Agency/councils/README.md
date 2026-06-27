# Councils
Status: stable
Type: council-index
Owner: agency-orchestrator
Extends: none

## Purpose
The agency's councils are where significant work is debated before it is built
(Directive [#3](../../kernel/laws/prime-directives.md)). They are not standing
bodies: each is convened for one question at the right
[tier](../../kernel/laws/engagement-tiers.md), produces minutes and a dissent
record, and disbands. Every local council **inherits** a stdlib council by name
and adds only strictness (Directive [#6](../../kernel/laws/prime-directives.md)).

## Councils
- [campaign-council](campaign-council/) — debates and gates a campaign before
  launch. Chair: [operations-director](../01-executive/operations-director/).
  Extends stdlib [feature-council](../../councils/feature-council/README.md).
- [brand-council](brand-council/) — adjudicates brand and positioning decisions.
  Chair: [strategy-director](../01-executive/strategy-director/). Extends stdlib
  [architecture-council](../../councils/architecture-council/README.md).

## How they relate
- A campaign that turns on a brand or positioning question is *not* decided in the
  campaign-council — it is escalated to the brand-council, whose chair holds the
  brand veto.
- A council **decides; it never builds** (Directive
  [#2](../../kernel/laws/prime-directives.md)). Execution returns to the
  departments.
- Both append minutes and recorded dissent to
  [meeting-history](../../memory/registers/meeting-history.md) and to the relevant
  local register (Directive [#8](../../kernel/laws/prime-directives.md)).

## Index
- [campaign-council](campaign-council/)
- [brand-council](brand-council/)
