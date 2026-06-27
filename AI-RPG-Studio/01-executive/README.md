# Executive Office
Status: stable
Type: department
Owner: rpg-orchestrator
Extends: none

## Mission
The executive office of AI RPG Studio binds the studio's leadership roles onto the kernel's [decision authority](../../kernel/laws/decision-authority.md) levels. It exists so that creative direction, coherence, delivery, quality, and routing each have a single named owner — and so that authority is explicit and veto is rare but absolute. The studio is kernel-native: it inherits the [Prime Directives](../../kernel/laws/prime-directives.md) and forks nothing.

## Executives and their kernel mapping
Each folder below maps one studio executive to a kernel decision-authority level. The mapping is the contract: the studio may add stricter local rules, never loosen a Kernel Law.

| Executive | Folder | Kernel level | Decides alone | Veto |
|-----------|--------|--------------|---------------|------|
| CEO | [./ceo/](./ceo/) | CEO — enterprise direction | Studio creative direction; which RPG lines exist. | — |
| Creative Director | [./creative-director/](./creative-director/) | CTO (+ creative veto) | Cross-line creative & systems standards. | Incoherent world/system. |
| Line Producer | [./line-producer/](./line-producer/) | COO | Delivery, scope, sequencing, release of books & modules. | — |
| Chief Auditor | [./chief-auditor/](./chief-auditor/) | Chief Auditor | — (never builds, never directs) | Quality/process violations. |
| RPG Orchestrator | [./rpg-orchestrator/](./rpg-orchestrator/) | Supreme Orchestrator | Routing, tier sizing, fan-out, integration. | — |

## How authority resolves
1. Resolve at the lowest level that owns the decision.
2. Deadlock escalates one level up the chain via the [escalation protocol](../../kernel/protocols/escalation.md).
3. A Chief Auditor veto stops the work; only a human maintainer overrides it (Directive #9).

## Index
- [ceo/](./ceo/) — sets creative direction and the line-up of RPG lines.
- [creative-director/](./creative-director/) — guards creative and systems coherence; holds the creative veto.
- [line-producer/](./line-producer/) — owns what ships, in what scope, in what order.
- [chief-auditor/](./chief-auditor/) — runs conformance; holds the quality/process veto.
- [rpg-orchestrator/](./rpg-orchestrator/) — routes, sizes, fans out, integrates (Directive #2).
