# Greenlight Council
Status: stable
Type: council
Owner: ceo
Extends: feature-council

## Purpose
Decides the single most consequential question the studio asks: **should this film
be made?** It weighs the idea, the audience, the budget envelope, the creative
risk, and the studio's capacity, and renders a greenlight, a pass, or a "develop
further." It does **not** write the script, design the production, or set the
delivery schedule — it decides *what gets made and why this over the alternatives*,
inheriting the stdlib [feature-council](../../../councils/feature-council/README.md)
and overriding it for film greenlight (Directive
[#5](../../../kernel/laws/prime-directives.md)).

## Participants
- **Chair** (breaks deadlocks): [ceo](../../01-executive/ceo/README.md) — sets
  studio direction and decides which films get made.
- **Core** (must attend):
  [creative-director](../../01-executive/creative-director/README.md) (creative
  veto), [line-producer](../../01-executive/line-producer/README.md) (budget and
  capacity), [screenwriter](../../02-development/screenwriter/README.md)
  (development lead presenting the idea).
- **Advisory** (as needed):
  [chief-auditor](../../01-executive/chief-auditor/README.md) (process/quality
  veto, never directs), [vfx-supervisor](../../04-post/vfx-supervisor/README.md)
  (feasibility on VFX-heavy concepts).

## When convened
At [T3](../../../kernel/laws/engagement-tiers.md) — a strategic, studio-level
commitment. Convened for one greenlight decision, then disbanded; not standing. T3
requires council **plus** executive sign-off, per
[engagement-tiers.md](../../../kernel/laws/engagement-tiers.md).

## Inputs
- The film proposal: logline, treatment, and the audience it serves — no proposal,
  no council.
- At least two framings of the bet to compare (scope, budget, or creative angle).
- The budget envelope and current studio capacity from the line-producer.
- Relevant prior decisions from
  [greenlight-decisions](../../memory/registers/greenlight-decisions.md).

## Index
- [process.md](process.md)
- [output.md](output.md)
