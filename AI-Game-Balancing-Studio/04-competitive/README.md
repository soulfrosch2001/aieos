# Competitive Balance Department
Status: stable
Type: department
Owner: meta-analyst
Extends: none

## Mission
This department owns **competitive play and the metagame** — the question of
whether a game's match-to-match contest is fair, legible, and worth mastering. It
tunes the parts of balance that only reveal themselves when skilled players push a
system to its limits: which strategies dominate, which are dead on arrival, how
matches are paired, and whether the climb feels earned. It serves other studios
only through the Government (Directive
[#5](../../kernel/laws/prime-directives.md)) — it never contacts a client studio
directly.

## Lead
**meta-analyst** leads the department. The lead owns the competitive-balance
verdict and the read of the metagame; it does not override the balancing
methodology (that is the balance-director's, per
[decision-authority.md](../../kernel/laws/decision-authority.md)) and it does not
decide what ships when (that is the operations-director's).

## Agents
- [meta-analyst](meta-analyst/) — balances competitive play and reads the
  metagame; the department lead.
- [matchmaking-analyst](matchmaking-analyst/) — balances the pairing system so the
  match itself is fair before any tuning of the units inside it.

## How it fans out
Competitive briefs fan out by disjoint ownership (Directive
[#4](../../kernel/laws/prime-directives.md)): the meta-analyst owns the unit/
strategy layer and the matchmaking-analyst owns the pairing/rating layer, so the
two never edit the same numbers in the same pass. Integration is the
studio-orchestrator's, which routes and never tunes (Directive
[#2](../../kernel/laws/prime-directives.md)).

## Where decisions go
- Numeric competitive changes → [balance-council](../councils/balance-council/).
- Methodology disputes → [methodology-council](../councils/methodology-council/).
- The dated record → the
  [balance-decisions](../memory/registers/balance-decisions.md) register.
