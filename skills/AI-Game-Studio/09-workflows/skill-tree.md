# Workflow: skill-tree

**Purpose:** Design a progression structure (skill tree, talent grid, perk web) that gives the player a satisfying sense of growth and meaningful build identity.
**Default Tier:** **T3 — Strategic.** A progression system is a pillar: it shapes pacing, retention, and the entire build economy.

## Purpose
A skill tree is the spine of long-term motivation. Done well, it makes players plan, dream, and theorycraft. Done badly, it is a chore of +5% nodes. This pipeline forces every node to be a *choice* and protects against trap nodes and obvious one-true-build.

## Participants
- [progression-designer](../02-design/progression-designer/) — owns the structure and curve.
- [systems-designer](../02-design/systems-designer/) — node interactions and synergy graph.
- [economy-designer](../02-design/economy-designer/) — XP/point economy and gating.
- [gameplay-programmer](../03-programming/gameplay-programmer/) + [ui-programmer](../03-programming/ui-programmer/) — runtime + tree UI.
- [ui-artist](../04-art/ui-artist/) — legibility of a dense screen.
- [gameplay-council](../08-councils/gameplay-council/) + [economy-council](../08-councils/economy-council/).
- [creative-director](../01-executive/creative-director/) — T3 sign-off.

## Inputs
- Target build archetypes the tree must support.
- Power budget per point from [../10-memory/balancing-history.md](../10-memory/balancing-history.md).
- Session/retention goals from [../10-memory/roadmap.md](../10-memory/roadmap.md).

## Steps
```
archetype targets → multi-council scope → node graph + economy → [GATE: real choices?] →
prototype + UI → simulate builds → balance + trap audit → QA → memory
```
1. **Archetype targets** — progression-designer names the builds the tree must enable.
2. **Multi-council scope** — gameplay + economy councils approve structure and point economy.
3. **Node graph** — design nodes so most are *choices*, not taxes; map the synergy graph.
4. **Choice gate** — no rows of mandatory filler; every tier offers a real fork. **Filler tree, no ship.**
5. **Prototype + UI** — build runtime; ui-artist makes a dense screen legible.
6. **Build simulation** — systems-designer simulates extreme builds for degenerate stacks.
7. **Balance + trap audit** — kill trap nodes; ensure no single dominant path; run [balancing.md](balancing.md).
8. **QA + record** — verify respec, save migration; progression-designer updates memory.

## Review Gates
- **Gate A — Multi-council go.**
- **Gate B — Choice gate:** meaningful forks, minimal filler (hard block).
- **Gate C — No-trap gate:** no node is a strict mistake; no one-true-build.
- **Gate D — Exec go:** creative-director signs (T3).

## Approval Process
T3: [gameplay-council](../08-councils/gameplay-council/) + [economy-council](../08-councils/economy-council/) → [creative-director](../01-executive/creative-director/) sign-off. [chief-auditor](../01-executive/chief-auditor/) may veto on long-term economy health.

## Outputs
Shippable tree: node data, point economy, respec, save migration, legible UI, telemetry on node pick rates.

## Completion Criteria
Choice + no-trap gates passed, builds simulated, respec/migration works, exec go, memory updated.

## Memory Updates
- [../10-memory/game-design-decisions.md](../10-memory/game-design-decisions.md) — structure rationale + dissent.
- [../10-memory/balancing-history.md](../10-memory/balancing-history.md) — per-point power budget.
- [../10-memory/architecture-decisions.md](../10-memory/architecture-decisions.md) — save-migration approach.
