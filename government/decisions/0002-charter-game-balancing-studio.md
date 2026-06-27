# Decision 0002 — Charter the Game Balancing Studio
Type: report
Date: 2026-06-27
Tier: T3 (Strategic)
Council: Enterprise Company-Creation Council (non-standing)

## Summary
The Government chartered one new kernel-native company — **AI Game Balancing Studio** —
a studio that tunes games (economy, difficulty/progression, and competitive balance).
It is the first company explicitly meant to **serve other companies** (the Game,
Tabletop, and RPG studios) through the Government, never contacting them directly
(Directive #5).

## Participants
- **Chief Innovation Officer** — proposed a balancing specialist to support the studios.
- **CEO** — greenlit it; sees cross-studio balancing as a real enterprise need.
- **CTO** — confirmed it mounts on kernel `1.1.0` with no kernel change; overrides only by name.
- **COO** — confirmed delivery via the standard fan-out.
- **Chief Auditor** — set the gate: `npm test` must pass before it is considered mounted.
- **Supreme Orchestrator** — chair; sized the request and runs the fan-out.

## Consensus
Charter it as a **kernel-native plugin**, `Requires kernel: ^1.1.0`, inheriting the
stdlib and overriding only by name (balance/methodology councils, balancing workflows,
balance registers).

## Remaining concerns / dissent
- **Chief Auditor:** a service company must not reach into client studios directly.
  **Resolution:** all cross-company balancing requests are mediated by the Government
  (Directive #5); the studio only acts on briefs it is handed. Accepted, no dissent.

## Risks & alternatives
- Risk: overlap with existing `balance-designer` roles inside the studios — mitigated by
  scoping this company as the **cross-studio specialist**, convened via the Government.
- Alternative rejected: add more balancers inside each studio — rejected; a shared
  specialist is more reusable and tests the service-company pattern.

## Recommendation
Proceed. T3: this council + executive sign-off + fan-out (~7 disjoint tracks).

## Implementation plan
1. Fan out 7 disjoint-ownership tracks built from the [templates](../../templates/).
2. Gate: `npm test --fix` then `npm test` — green.
3. Memory: register in the [registry](../../kernel/registry/registry.md) and
   [companies/](../../companies/README.md); regenerate the [dashboard](../dashboard/).
4. Mandatory audio summary in [resumo/audio/](resumo/audio/).

## Owners & next steps
| Owner | Action |
|-------|--------|
| Supreme Orchestrator | Run the 7-track fan-out. |
| Chief Auditor | Run the gate; block on any error; confirm the audio summary exists. |
| CTO | Confirm the kernel stays `1.1.0`. |

## Memory updates
- This record; the registry; the companies index; the dashboard; the audio summary.

## Outcome (2026-06-27)
**Executed and mounted.** 7-track fan-out produced the studio (93 files). The gate
found 20 link issues; `--fix` auto-repaired all 18 fixable links and the rest resolved;
final **both conformance scopes green (0/0)**. The enterprise now hosts **16 companies,
271 agents, 44 councils** on kernel 1.1.0 — no kernel change. Audio summary recorded.
Decision closed.
