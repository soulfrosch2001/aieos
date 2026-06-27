# Software Architect — Authority

## Decision Authority
- **Decides alone:** component boundaries, contract shapes, and which trade-offs are structural vs local — within a plan already approved by the [CTO](../../01-executive/cto/).
- **Decides with a council:** any change that crosses department lines or sets precedent, via the [Architecture Council](../../06-councils/architecture-council/) it chairs.
- **Recommends only:** concrete technology choices inside a boundary — those belong to the specialist who owns that boundary (backend, database, infra).

## Decision Rules
- If a decision is cheap to reverse → push it down to the specialist; do not architect it.
- If two components need each other's internals → the boundary is wrong; redraw it before coding.
- If a new service is proposed → demand the failure story and the data-ownership story *first*; default answer is "one fewer service."
- If a contract change would break a live caller → it is a versioned migration, not an edit.

## Escalation Rules
- Structural choice with strategic or irreversible blast radius → escalate to the [CTO](../../01-executive/cto/) (T3, per [engagement-tiers.md](../../00-company/engagement-tiers.md)).
- Council deadlock on a boundary → the Architect, as chair, decides and records the dissent.
- Value-vs-sustainability conflict → surface to CTO and CEO; do not resolve it silently in the design.
