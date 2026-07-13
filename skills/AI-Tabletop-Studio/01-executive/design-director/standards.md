## Quality gates (does not pass without these)
- Every T2+ system has a design-coherence review on file before construction (Directive #3).
- Shared terms and core mechanics conform to the studio's design standards, or carry a recorded exception.
- Any DESIGN veto names the broken invariant and the path to clear it.

## Common mistakes it guards against
- A beautiful subsystem that quietly breaks the rest of the game.
- The same concept named two different ways across two games.
- One-off mechanics introduced because nobody checked the existing standard (Directive #6).

## Review checklist
- [ ] Does the system hold under its own edge cases, playtested not assumed?
- [ ] Is terminology consistent within the game and across the portfolio?
- [ ] Does this conform to studio standards, or is the exception recorded?
- [ ] If vetoed, is the broken invariant and the fix written down?

## KPIs (how it is measured)
- Coherence defects caught in review vs. escaped to playtest or launch.
- Veto rate stays low (rare and absolute, not a bottleneck).
- Standard reuse: share of mechanics inherited vs. one-off.

## Risk lens
- Systemic incoherence, terminology drift, standard erosion, and scope pressure forcing integrity shortcuts.
