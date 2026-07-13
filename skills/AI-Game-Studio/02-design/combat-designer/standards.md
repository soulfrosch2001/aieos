# Standards — Combat Designer

## Quality Gates
- **Readability gate.** Every lethal or near-lethal attack has a telegraph that a first-time player can parse, plus a reaction window measured and documented in milliseconds. No tell, no ship.
- **Hitbox-truth gate.** Hitboxes and hurtboxes match the visible silhouette within tolerance. No phantom hits, no "I clearly dodged that" deaths.
- **Hit-feel gate.** Every attack passes the triad check: hitstop, screenshake/knockback, and impact sound agree on the magnitude of the blow. Disagreement = fail.
- **Fairness gate.** A reviewer plays the encounter cold and can articulate *why* each death happened. If they can't, the encounter is not done.

## Review Checklist
- [ ] Frame data (startup / active / recovery) is documented for every move, player and enemy.
- [ ] Every threat has a telegraph; reaction window is measured and within target range.
- [ ] Hitbox/hurtbox volumes match visuals; no off-screen attacks land unannounced.
- [ ] Hit-feel triad (hitstop + shake/knockback + sound) is consistent and tuned per attack weight.
- [ ] Each enemy tests a distinct verb; no pure stat-bump reskins in the roster.
- [ ] i-frames, cancel windows, and buffer behave consistently across the encounter.
- [ ] Difficulty derives from clarity demands, not withheld information or input lag.
- [ ] Rest beats / tension curve are present; no unbroken pressure wall.
- [ ] Accessibility options preserve design intent at every level.
- [ ] Balance change and rationale logged to [balancing-history](../../10-memory/balancing-history.md); any dissent recorded.

## Common Mistakes
- Fixing "too hard" by adding HP instead of fixing readability — turns a teachable enemy into a damage sponge.
- Telegraphs that vanish in a busy screen (VFX noise, multiple enemies) — readable in isolation ≠ readable in the fight.
- Hitstop on the *attacker* but not synced to the sound transient — the hit feels mushy and no one can say why.
- Enemy variety measured by stat sheets; five enemies that all test "dodge then hit" are one enemy wearing five skins.
- Cheap difficulty: off-screen ranged attacks, ambiguous tells, attacks that commit faster than the tell promised.

## Balancing Guidelines
- Tune **readability before numbers.** Only adjust damage/HP once the threat is provably reactable.
- Buff feel before buffing damage — a weak-feeling weapon usually has a hit-feel problem, not a damage problem.
- Change one variable per pass and log it; combat is a coupled system and blind multi-tweaks hide regressions.
- Set reaction windows by intended skill tier and *hold the line* — don't quietly shrink them to spike difficulty.
- Cap stat scaling; escalate encounters with new verbs and compositions, not bigger numbers.
- Default difficulty should respect [Prime Directive #1](../../00-company/COMPANY.md): challenging, never cheap.

## KPIs / Metrics
- **Death attribution rate** — % of deaths players self-attribute (post-play survey / heatmap of "unfair" reports). Target: high self-attribution, near-zero "that was cheap."
- **First-hit telegraph success** — % of first-time players who react correctly to a new tell. Low = unreadable telegraph.
- **Encounter completion curve** — attempts-to-clear distribution; healthy is a learning curve, not a wall or a cliff.
- **Verb coverage** — distinct player verbs each encounter demands; flat coverage flags stat-bump design.
- **Hit-feel rating** — playtester felt-weight scores per attack vs intended weight class.
- **Difficulty-option uptake** — accessibility settings used and retention impact; proves options serve players, not vanity.

## Best Practices
- Prototype the feel before the numbers — get one attack feeling perfect, then use it as the unit of weight.
- Test telegraphs in the *worst-case* screen, with full VFX and a crowd, never in isolation.
- Co-author frame data with Animator and Audio up front; retrofitting feel onto locked animation is twice the cost.
- Keep a kill-cam mindset: if you can't reconstruct why a death happened, neither can the player.
- Record every balance decision and every dissent ([Prime Directive #4](../../00-company/COMPANY.md)); the history is the only thing that stops endless re-litigation.
- Correctness first, then reliability, then performance — never reorder them to hit a date.
