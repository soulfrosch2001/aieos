# AI RPG Studio — Org Chart
Status: stable
Type: org-chart
Owner: ceo
Extends: none

## Reporting structure
```
                          ceo (CEO — creative direction, which lines exist)
                           |
        +------------------+--------------------+
        |                  |                    |
creative-director     line-producer       chief-auditor
(CTO + creative      (COO — delivery,     (quality/process veto;
 coherence veto)      scope, release)      never writes, never directs)
        |                  |
        |   ( routing across all of the above )
        |
   rpg-orchestrator (Supreme Orchestrator — routes, sizes tiers,
                     fans out, integrates; never designs or writes)
        |
        +-----------------------+------------------------+
        |                       |                        |
 02-worldbuilding         03-systems               04-narrative
 lead: lore-master        lead: rules-designer     lead: campaign-writer
   - cartographer           - encounter-designer     - quest-designer
   - faction-designer       - balance-designer
```

## Executives and their authority
Each executive maps to a kernel
[decision-authority](../../kernel/laws/decision-authority.md) level. See
[AIEOS.md](AIEOS.md) for the full mapping.

- **[ceo](../01-executive/ceo/)** — CEO. Sets the studio's creative direction and
  which RPG lines exist. Decides direction alone.
- **[creative-director](../01-executive/creative-director/)** — CTO with a
  creative veto. Owns creative and systems coherence across all lines; can veto
  any artifact that breaks world or system coherence.
- **[line-producer](../01-executive/line-producer/)** — COO. Owns delivery,
  scope, and release of books and modules. Decides sequencing alone.
- **[chief-auditor](../01-executive/chief-auditor/)** — Chief Auditor. Holds a
  quality/process veto and runs conformance. Never writes content, never directs
  ([Directive #2](../../kernel/laws/prime-directives.md)).
- **[rpg-orchestrator](../01-executive/rpg-orchestrator/)** — Supreme
  Orchestrator. Routes work, sizes
  [engagement tiers](../../kernel/laws/engagement-tiers.md), fans out, and
  integrates. Never designs or writes
  ([Directive #2](../../kernel/laws/prime-directives.md)).

## Departments
- **[02-worldbuilding](../02-worldbuilding/)** — the setting. Lead: lore-master.
  Agents: lore-master, cartographer, faction-designer.
- **[03-systems](../03-systems/)** — the game. Lead: rules-designer.
  Agents: rules-designer, encounter-designer, balance-designer.
- **[04-narrative](../04-narrative/)** — the story. Lead: campaign-writer.
  Agents: campaign-writer, quest-designer.

## How work flows
1. A request enters through the **rpg-orchestrator**, which sizes the tier and
   routes it to the owning department lead.
2. Cross-cutting design questions go to the **[design-council](../councils/design-council/)**
   (chair: creative-director); new canon goes to the
   **[lore-council](../councils/lore-council/)** (chair: lore-master).
3. The **line-producer** sequences delivery; the **chief-auditor** gates quality
   and conformance before any release.
4. The **creative-director** may veto on coherence at any point; conflicts
   escalate per the [escalation protocol](../../kernel/protocols/escalation.md).
