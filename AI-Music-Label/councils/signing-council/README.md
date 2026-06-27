# Signing Council
Status: stable
Type: council
Owner: ar-director
Extends: feature-council

## Purpose
The room where the label decides **whether to sign a prospective artist** — the highest-leverage decision A&R makes, debated before any contract or development spend commits. It decides *should this artist join the roster, and on what thesis*. It does **not** negotiate deal terms, set the production plan, or relitigate label direction already settled by the label-head.

## Extends
Inherits the stdlib [feature-council](../../../councils/feature-council/) — a proposal weighed against alternatives before commitment — and binds it to artist signing. Forks nothing (Directive [#5](../../../kernel/laws/prime-directives.md)); overrides only the chair, inputs, and the register it files to.

## Participants
- **Chair** (breaks deadlocks): ar-director (CTO) — owns artistic coherence and holds the artistic veto.
- **Core** (must attend): ar-scout (the case to sign), artist-manager (development feasibility), repertoire-curator (catalog fit), marketing-manager (the market case).
- **Advisory** (as needed): label-head (CEO) for roster strategy, operations-director (COO) for capacity, chief-auditor for process conformance.

## When convened
At [T2](../../../kernel/laws/engagement-tiers.md) — a signing with real, contestable choices. The orchestrator convenes it; see [kernel/laws/engagement-tiers.md](../../../kernel/laws/engagement-tiers.md). A larger roster bet inherits this council and adds label-head sign-off; it does not fork a new one (Directive [#6](../../../kernel/laws/prime-directives.md)).

## Inputs
- The scout's signing thesis with evidence — no thesis, no council.
- At least one alternative use of the same capacity (signing is a trade-off, not a free yes).
- Catalog-fit and market-case read from the curator and marketing-manager.

## Index
- [process.md](process.md) — how the signing debate runs.
- [output.md](output.md) — the decision and what it files to memory.
