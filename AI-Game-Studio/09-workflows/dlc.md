# Workflow: dlc

**Purpose:** Plan, build, and ship downloadable content — a self-contained add-on (cosmetics, a mission pack, a character) that respects the base game and the player's wallet.
**Default Tier:** **T3 — Strategic.** DLC touches monetization, roadmap, and brand trust; it gets exec and council attention.

## Purpose
DLC is the studio's promise that the game keeps giving. The line we never cross: DLC must add, never extract — no pay-to-win, no cutting the base game to sell it back. This workflow runs the content through normal creation pipelines *plus* an economy and brand-trust gate.

## Participants
- [executive-producer](../06-production/executive-producer/) — owns the DLC P&L and scope.
- [creative-director](../01-executive/creative-director/) — creative coherence with the base game.
- [lead-game-designer](../02-design/lead-game-designer/) + relevant designers — the content.
- [economy-designer](../02-design/economy-designer/) — pricing and value, no pay-to-win.
- [marketing-director](../11-marketing/marketing-director/) + [steam-page-manager](../11-marketing/steam-page-manager/) — positioning.
- [economy-council](../08-councils/economy-council/) + [release-council](../08-councils/release-council/).
- [chief-auditor](../01-executive/chief-auditor/) — monetization-ethics veto.

## Inputs
- DLC concept + the player fantasy it extends.
- Base-game compatibility constraints (saves, balance, ownership checks).
- Roadmap slot + business case from [../10-memory/roadmap.md](../10-memory/roadmap.md).

## Steps
```
concept → exec + council scope → [GATE: adds not extracts?] → build via content workflows →
integration + ownership gating → economy/pricing review → certify → release-candidate → store → memory
```
1. **Concept** — executive-producer + creative-director frame what the DLC adds.
2. **Scope** — economy + release councils approve; pricing and base-game respect debated openly.
3. **Value gate** — DLC must add value, not gate existing content; no pay-to-win.
4. **Build** — content created through [new-gameplay-feature.md](new-gameplay-feature.md), [enemy-creation.md](enemy-creation.md), [npc-creation.md](npc-creation.md), etc.
5. **Integration** — ownership/entitlement gating; ensure base players are unaffected.
6. **Economy review** — economy-designer + economy-council confirm pricing/value.
7. **Certify & ship** — through [release-candidate.md](release-candidate.md) and store submission.
8. **Record** — executive-producer updates memory.

## Review Gates
- **Gate A — Value gate:** adds without extracting; no pay-to-win (hard block).
- **Gate B — Compatibility gate:** base-game saves/balance unaffected for non-owners.
- **Gate C — Release gate:** passes [release-candidate.md](release-candidate.md) Go/No-Go.

## Approval Process
T3: [economy-council](../08-councils/economy-council/) + [release-council](../08-councils/release-council/) → [creative-director](../01-executive/creative-director/) + [executive-producer](../06-production/executive-producer/) sign-off. [chief-auditor](../01-executive/chief-auditor/) holds a monetization-ethics veto per [Prime Directive 7](../00-company/COMPANY.md).

## Outputs
Shippable DLC with entitlement gating, store page, pricing, marketing beats, and a release record.

## Completion Criteria
Value + compatibility + release gates passed, store-ready, exec sign-off recorded, memory updated.

## Memory Updates
- [../10-memory/roadmap.md](../10-memory/roadmap.md) — DLC shipped.
- [../10-memory/game-design-decisions.md](../10-memory/game-design-decisions.md) — content + monetization stance.
- [../10-memory/meeting-history.md](../10-memory/meeting-history.md) — value-gate verdict.
- [../10-memory/community-feedback.md](../10-memory/community-feedback.md) — reception.
