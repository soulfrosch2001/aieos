# Standards — Systems Designer

## Quality Gates
A system or interaction does not ship until:
1. Every feedback loop it participates in is identified and classified (positive/negative) **on paper**, with its brake named.
2. It has been traced at least **two steps downstream** — no edge of the graph is left un-followed.
3. A deliberate "how would I break this?" pass has been run, and the worst found strategy is documented and judged acceptable.
4. A non-designer playtester can describe, roughly correctly, what the system does after reasonable exposure (legibility gate).
5. No single dominant strategy has emerged in playtest that collapses the intended choice space.

## Review Checklist
- [ ] **Degenerate / dominant strategies:** is there one obviously-best option that makes others pointless? Tested adversarially, not just hoped against.
- [ ] **Runaway feedback loops:** does any reinforcing loop lack a brake? Can the strong snowball uncatchably?
- [ ] **Unintended exploits:** what's the most boring optimal play? Has someone genuinely tried to abuse each seam?
- [ ] Are all cross-system interactions intentional, or are some accidental side effects of two systems sharing a variable?
- [ ] Are loop polarities correct *and intended* (reinforcing where we want momentum, balancing where we want comebacks)?
- [ ] Is the system legible — can the player predict its behavior well enough to make informed choices?
- [ ] Second-order effects traced and acceptable; no silent pressure dumped on economy/progression/combat.
- [ ] Dissent recorded where consensus wasn't real (Prime Directive #4).

## Common Mistakes
- Balancing a mechanic in isolation and never tracing what it feeds.
- Confusing complexity with depth — adding systems instead of adding meaningful interactions.
- Shipping a reinforcing loop with no negative loop to brake it ("rich-get-richer" runaway).
- Mistaking an exploit for "player creativity" because it's technically emergent — emergence isn't automatically good.
- Building a system so opaque players give up on modeling it, then calling that depth.
- Patching the symptom (nerf the dominant pick) instead of the cause (weak alternatives).

## Balancing Guidelines
- **Positive vs negative feedback loops:** positive loops create momentum and excitement; negative loops create comebacks and tension. Most healthy systems pair them — a reinforcing loop with a balancing brake. Pure positive loops snowball; pure negative loops feel rubber-banded and flat.
- **Rich-get-richer:** the most common failure. If winning makes winning easier with no counter-pressure, leads collapse into foregone conclusions. Insert a brake (rising costs, diminishing returns, catch-up mechanics) or make the reinforcement intentional and bounded.
- **Dominant strategies:** the enemy of choice. When one path dominates, the choice space collapses to one and the game's depth evaporates. Prefer buffs that raise the floor over nerfs that lower the ceiling.
- **Second-order effects:** the real cost or benefit is rarely the direct one. Tune for what a change does *two steps out*.
- **System legibility:** depth the player can't perceive is wasted depth. Surface the rules through feedback, not manuals.

## KPIs / Metrics
- **Strategy diversity:** number of distinct viable strategies actually used by the player base (higher = healthier; collapse toward one = dominant-strategy alarm).
- **Exploit incidence:** rate of discovered degenerate strategies / runaway loops per build; trending down over time.
- **System-interaction depth:** how many systems a typical successful play meaningfully engages (engagement, not just exposure).
- **Comprehension:** can players predict system outcomes (legibility checks, playtest surveys)? Low comprehension flags fake depth.

## Best Practices
- Diagram before you tune. The graph reveals loops the spreadsheet hides.
- Name every loop's brake at design time; an un-braked reinforcing loop is a bug waiting for a deadline.
- Adversarially playtest your own systems — assume the cleverest, laziest, most exploitative player and design for them.
- Embrace good emergence (it expands choice), kill bad emergence (it collapses choice) — and write both into [10-memory/game-design-decisions](../../10-memory/game-design-decisions.md).
- Keep [Prime Directive #1](../../00-company/COMPANY.md) above cleverness: a system exists to serve the player's experience, never to be admired for its own intricacy.
