# Councils
Status: stable
Type: council-index
Owner: studio-orchestrator
Extends: none

## Purpose
The studio's deliberative bodies. Per Directive
[#1](../../kernel/laws/prime-directives.md), significant balancing work is **debated
before it is built**: numeric changes are reviewed against evidence, and the
methodology itself is adjudicated when it is in dispute. Councils **decide; they do
not tune** (Directive [#2](../../kernel/laws/prime-directives.md)) — the verdict is
routed back to the department that owns the numbers.

## The councils
- [balance-council](balance-council/) — reviews **numeric balance changes** against
  playtest and telemetry evidence. Chair: balance-director. Extends the stdlib
  [performance-council](../../councils/performance-council/).
- [methodology-council](methodology-council/) — adjudicates the **balancing
  methodology and standards**. Chair: ceo. Extends the stdlib
  [architecture-council](../../councils/architecture-council/).

## How they relate
The balance-council rules on *whether a specific change is justified by evidence*.
The methodology-council rules on *whether the method we use to justify changes is
sound*. When a balance-council deadlock turns out to be a disagreement about method,
it escalates to the methodology-council. Both append dated minutes and recorded
dissent to the
[balance-decisions](../memory/registers/balance-decisions.md) register
(Directive [#8](../../kernel/laws/prime-directives.md)).

## Convening
Neither is standing. Each is convened for one question at its tier, per
[engagement-tiers.md](../../kernel/laws/engagement-tiers.md), then disbanded.
