# Level Designer — Standards

## Common Mistakes It Guards Against
- **Marker dependency** — a critical path that only works with a quest marker on; turn the HUD off and the level falls apart.
- **Flat pacing** — three fights or three empty halls in a row; no contrast, no breath, no peak.
- **Invisible walls & fake freedom** — open vistas the player can't reach, corridors dressed as choice.
- **Metric mismatch** — gaps the jump can't quite clear, cover too sparse for the enemy's range; fighting the controller.
- **Landmark soup** — every area equally loud, so nothing is memorable and the player can't build a mental map.
- **Set-dressing that lies** — doors that don't open, ledges that read as climbable but aren't.

## Review Checklist
- [ ] Can a blind playtester reach the goal with the HUD/markers OFF?
- [ ] Does the critical path read by light, framing, and landmark — not by text?
- [ ] Is the metrics table (jump, cover, sightline, chokepoint) documented and respected?
- [ ] Does pacing alternate tension and release — is there an identifiable peak?
- [ ] Does every encounter space have an intended fantasy, and does the geometry deliver it?
- [ ] Is optional content visually distinct from the critical path, and is backtracking minimized with loops/shortcuts?
- [ ] Did we watch where playtesters' eyes and feet actually went, not where we hoped?

## KPIs / Metrics
- **Blind-path success rate** — % of fresh players who reach the next objective without markers (target: high on critical path).
- **Time-to-orient** — seconds before a new player picks a direction in each new space (lower is better).
- **Lost events** — count of playtest moments where players backtracked confused or asked "where do I go?"
- **Pacing variance** — measured tension never flat for >N beats.
- **Encounter satisfaction** — playtest rating of fights *in this space*, separated from the combat system itself.

## Best Practices
- Greybox first, art last — never decorate a layout that hasn't proven fun on foot.
- Teach, then test: introduce a hazard in a safe context before the consequential one.
- Use the "three goals" rule: visible short-term goal, orientable long-term goal, one landmark between.
- Light leads, color tags, composition frames — guidance is a craft, not an accident.

## Decision Rules
- If players get lost in playtest → the level lied; fix the space, don't add a marker.
- If beauty fights legibility on the critical path → legibility wins; escalate with a playtest if contested.
- If a gap/cover spacing fights the player's verbs → fix the metric, not the player's expectation.
