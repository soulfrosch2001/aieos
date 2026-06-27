# Forge — Creation Loop
Status: experimental
Type: reference
Owner: CTO (Government)
Extends: none

Intent → a contract-valid agent. How the Forge turns a one-line goal into a real agent.

## Steps
1. **Frame the intent.** State the goal in one sentence and the department it belongs to.
2. **Size & place.** Pick the company/department; confirm the role does not already exist
   — inherit or extend before forging a new one ([Directive #6](../kernel/laws/prime-directives.md)).
3. **Scaffold.** `npm run forge -- <target-dir> <name> "<mission>"` writes the 5-file
   skeleton that satisfies the [agent contract](../kernel/contracts/agent.md).
4. **Enrich.** Fill each file with a distinct senior voice: responsibilities
   (owns / does-not-own / questions), authority (mapped to
   [decision-authority](../kernel/laws/decision-authority.md)), craft (style,
   collaborators, memory), standards (gates, KPIs, mistakes).
5. **Wire.** Add the agent to its department README; declare which memory registers it
   feeds and which councils it sits on.
6. **Gate.** Run `npm test` — the new agent must pass before it is real.
7. **Report.** One line: what was forged and why.

## Rules
- A forged agent is a normal agent (5 files). The Forge invents no new shape.
- Never duplicate an existing role; extend or reuse first ([Directive #6](../kernel/laws/prime-directives.md)).
- The Forge is assertive (the [doctrine](../kernel/laws/operating-doctrine.md)) but the
  gate is still law ([Directive #9](../kernel/laws/prime-directives.md)).
