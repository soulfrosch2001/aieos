# AI RPG Studio
Status: stable
Type: company
Owner: ceo
Extends: kernel + stdlib

## Charter
AI RPG Studio is a tabletop role-playing game studio. We build coherent worlds,
playable game systems, and narrative campaigns — and we ship them as books and
modules that hold together under table use. Our north star: every line we
publish is *internally consistent* (the lore, the rules, and the story never
contradict each other) and *runnable at a real table* without a designer in the
room. We serve game masters, players, and licensees who need worlds deep enough
to live in and systems clean enough to actually run.

This company is **kernel-native**. It was born inheriting the AIEOS kernel; it
forks nothing and supersedes nothing. The kernel is the source of truth for all
law, protocol, and decision authority. This folder adds only *stricter* local
rules on top of that inheritance.

## Inherited from AIEOS (source of truth)
- **Laws** — all Prime Directives, in particular
  [#2](../../kernel/laws/prime-directives.md),
  [#4](../../kernel/laws/prime-directives.md),
  [#5](../../kernel/laws/prime-directives.md),
  [#6](../../kernel/laws/prime-directives.md), and
  [#8](../../kernel/laws/prime-directives.md);
  [engagement tiers T0-T4](../../kernel/laws/engagement-tiers.md);
  [decision authority](../../kernel/laws/decision-authority.md).
- **Protocols** — [communication](../../kernel/protocols/communication.md),
  [orchestration](../../kernel/protocols/orchestration.md),
  [escalation](../../kernel/protocols/escalation.md),
  [memory-flow](../../kernel/protocols/memory-flow.md),
  [lifecycle](../../kernel/protocols/lifecycle.md).
- **Loader** — [resolution order](../../kernel/loader/resolution-order.md):
  local entities resolve over stdlib of the same name; the kernel is authoritative.
- **Stdlib defaults** — every [template](../../templates/),
  [workflow](../../workflows/), [council](../../councils/), and
  [memory register](../../memory/) we do not explicitly override.

## Local overrides (by name)
Local entities intentionally extend a stdlib default of the same family. The
adapter [AIEOS.md](AIEOS.md) is the canonical list; summarized here:

| Entity | Overrides / extends stdlib | Why |
|--------|----------------------------|-----|
| councils/design-council | architecture-council | Coherence review for worlds and systems together |
| councils/lore-council | feature-council | Canon admission for new lore and setting features |
| workflows/campaign-design | feature | Designing a campaign as a shippable feature |
| workflows/adventure-module | planning | Scoping and sequencing a single module |
| workflows/playtest | research | Empirical balance and playability research |
| memory/registers/canon | architecture-decisions | Canon is the studio's binding decision record |
| memory/registers/encounter-log | lessons-learned | What broke or sang at the table |
| memory/registers/campaign-ideas | future-improvements | Backlog of pitches and hooks |

## Stricter local rules (additive only)
These narrow — never loosen — the kernel. They bind every agent in this company.
1. **Canon is binding.** No published lore, map, faction, rule, or quest may
   contradict [canon](../memory/registers/canon.md). A contradiction is a
   blocking defect, not a stylistic note.
2. **Coherence veto is real.** The creative-director's veto under
   [decision authority](../../kernel/laws/decision-authority.md) applies to any
   artifact that breaks world or system coherence, regardless of schedule.
3. **Table-runnable or it does not ship.** Every module and campaign carries at
   least one recorded [playtest](../workflows/playtest.md) signal before the
   line-producer may release it.
4. **The auditor never writes content and never directs** (per
   [Directive #2](../../kernel/laws/prime-directives.md)); it only gates quality
   and conformance.
5. **The orchestrator never designs or writes** (per
   [Directive #2](../../kernel/laws/prime-directives.md)); it only routes, sizes
   tiers, fans out, and integrates.

## Structure
```
00-company/     this charter, the mount adapter, org-chart, local rules
01-executive/   ceo, creative-director, line-producer, chief-auditor, rpg-orchestrator
02-worldbuilding/  lore-master (lead), cartographer, faction-designer
03-systems/        rules-designer (lead), encounter-designer, balance-designer
04-narrative/      campaign-writer (lead), quest-designer
councils/       design-council, lore-council
workflows/      campaign-design, adventure-module, playtest
memory/         registers: canon, encounter-log, campaign-ideas
reports/        KPI + studio health reports
```

## Departments
- **02-worldbuilding** — owns the setting: lore, geography, and factions. Lead: lore-master.
- **03-systems** — owns the game: rules, encounters, and balance. Lead: rules-designer.
- **04-narrative** — owns the story: campaigns and quests. Lead: campaign-writer.

## KPIs
- **Canon-conflict rate** — coherence defects found per release (target: zero blocking).
- **Table-runnability** — share of shipped modules with a passing playtest signal.
- **Release predictability** — modules shipped on the line-producer's committed sequence.
- **Encounter balance** — share of encounters within target difficulty band at playtest.

## Mounting
Kernel-native. Registered in [../../kernel/registry/](../../kernel/registry/);
see [AIEOS.md](AIEOS.md) and the plugin contract
[../../kernel/contracts/plugin.md](../../kernel/contracts/plugin.md).
