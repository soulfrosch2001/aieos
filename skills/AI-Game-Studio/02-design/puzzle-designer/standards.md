# Puzzle Designer — Standards

## Common Mistakes It Guards Against
- **Moon logic** — solutions that require reading the designer's mind, not reasoning from given pieces.
- **Missing information** — the puzzle demands an answer before the player has all the clues.
- **Pixel-hunting** — solutions hidden in legibility, not logic.
- **Difficulty cliffs** — a sudden spike with no teaching ramp behind it.
- **Soft-locks & consumable traps** — states that strand the player or burn a resource they needed.
- **Unintended cheese** — a trivial shortcut that skips the intended "aha."

## Review Checklist
- [ ] Does the player have *all* required information before the puzzle expects the answer?
- [ ] Is the solution reachable by reasoning alone, with no guess required?
- [ ] Was the underlying concept taught safely before this puzzle tested it?
- [ ] Is the step from the previous puzzle a ramp, not a cliff?
- [ ] Did we actively try to break it — every cheese and shortcut hunted down?
- [ ] Can any state soft-lock the player or strand a needed resource?
- [ ] Does escalating hint scaffolding exist for stuck players without trivializing the solve?

## KPIs / Metrics
- **Fair-solve rate** — % of blind playtesters who solve unaided within a reasonable window.
- **Give-up / walkthrough rate** — players who quit or look up the answer (the canary for unfairness).
- **Time-to-aha distribution** — healthy puzzles cluster; outliers reveal unfair or trivial puzzles.
- **Cheese incidence** — unintended solutions found in playtest (target: zero shipped on critical path).
- **Soft-lock count** — must be zero on any progression-gating puzzle.

## Best Practices
- Introduce → develop → twist → test: teach the mechanic before you weaponize it.
- Give every piece, withhold only the insight; the player supplies the "aha," never the data.
- Try to break your own puzzle before a playtester does; log every cheese.
- Build optional, escalating hints so being stuck stays fun and recoverable.

## Decision Rules
- If players guess instead of reason → a piece is missing; surface it, don't add a hint band-aid.
- If give-up rate is high on the critical path → it's a wall; fix fairness before shipping.
- If a soft-lock is possible on a gating puzzle → it does not ship (QA veto applies).
