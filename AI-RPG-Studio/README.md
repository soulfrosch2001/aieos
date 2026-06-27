<!-- Company plugin README. Contract: ../kernel/contracts/company.md -->

# AI RPG Studio
Status: stable
Type: company
Owner: ceo
Extends: kernel + stdlib

**Purpose:** a tabletop RPG studio that designs worlds, game systems, and narrative
campaigns — and ships them as books and modules players can run at the table.

## A kernel-native AIEOS company
AI RPG Studio is **born from the kernel — it forks nothing**. It inherits the
[Prime Directives](../kernel/laws/prime-directives.md), the
[engagement tiers](../kernel/laws/engagement-tiers.md) (T0–T4),
[decision-authority](../kernel/laws/decision-authority.md), the
[protocols](../kernel/protocols/), and the stdlib library of
[workflows](../workflows/), [councils](../councils/), and
[memory schemas](../memory/registers/). Every local entity sets `Extends:` to its
stdlib parent and adds only what the RPG domain genuinely needs — coherent canon,
balanced encounters, and playable stories. See
[00-company/AIEOS.md](00-company/AIEOS.md) for how the studio mounts into the
operating system, and [00-company/COMPANY.md](00-company/COMPANY.md) for the charter.

## Repo map
```
00-company/     charter, org-chart, AIEOS mount
01-executive/   ceo · creative-director · line-producer · chief-auditor · rpg-orchestrator
02-worldbuilding/  lore-master · cartographer · faction-designer
03-systems/        rules-designer · encounter-designer · balance-designer
04-narrative/      campaign-writer · quest-designer
councils/       design-council · lore-council
workflows/      campaign-design · adventure-module · playtest
memory/         registers: canon · encounter-log · campaign-ideas
reports/        health report + KPIs
```

## Departments
- [02-worldbuilding](02-worldbuilding/) — owns the world: lore, maps, factions. Lead: lore-master.
- [03-systems](03-systems/) — owns the game: rules, encounters, balance. Lead: rules-designer.
- [04-narrative](04-narrative/) — owns the story: campaigns and quests. Lead: campaign-writer.

## Councils
- [design-council](councils/design-council/) — coherence of world and system across lines (extends stdlib architecture-council; chaired by the creative-director).
- [lore-council](councils/lore-council/) — canon rulings and contradiction resolution (extends stdlib feature-council; chaired by the lore-master).

## Workflows
- [campaign-design](workflows/campaign-design.md) — T2, premise to first playable module.
- [adventure-module](workflows/adventure-module.md) — T2, a standalone drop-in adventure.
- [playtest](workflows/playtest.md) — T2, structured test of rules or an adventure.

## Memory
- [memory/](memory/) — the studio's institutional memory and how it
  [plugs into the enterprise hierarchy](memory/architecture.md).
- Registers: [canon](memory/registers/canon.md),
  [encounter-log](memory/registers/encounter-log.md),
  [campaign-ideas](memory/registers/campaign-ideas.md).

## Reports
- [reports/](reports/) — [health report](reports/health-report.md): domain KPIs against
  the ten quality dimensions.

## Inherited from AIEOS
- [../kernel/](../kernel/) — laws, protocols, loader, registry. The studio obeys, never edits.
- [../templates/](../templates/) — the templates every file here conforms to.
