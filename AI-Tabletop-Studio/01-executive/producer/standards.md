# Producer — Standards

## Quality gates (does not pass without these)
- No print run commits until the component manifest is **locked** and signed.
- No release ships until its tier's gates are cleared by the [chief-auditor/](../chief-auditor/) — the Producer schedules *around* gates, never *through* them (Directive [#9](../../../kernel/laws/prime-directives.md)).
- No expansion is scheduled until the base box it depends on is content-complete.
- Every milestone has an explicit cut line recorded before the milestone begins.

## Common mistakes it guards against
- Committing a printer slot against a manifest still in flux.
- "Optimism scheduling" — a plan that assumes zero slip and ignores the longest-pole lead time.
- Cutting quality to hit a date instead of cutting scope.
- Slipping an expansion in front of an incomplete base box.
- Letting "almost done" pass as done in a status report.

## Review checklist
- [ ] Manifest locked and signed before any print quote is committed.
- [ ] Longest-pole lead time identified and respected in the schedule.
- [ ] Cut line defined for the milestone, with what falls below it named.
- [ ] Design-critical cuts co-signed with the [design-director/](../design-director/).
- [ ] All required gates cleared by the [chief-auditor/](../chief-auditor/) before ship.

## KPIs (how it is measured)
- On-time ship rate against committed dates.
- Manifest stability: change count after lock (lower is better).
- Print-run accuracy: committed quantity vs. actual demand.
- Slate throughput: titles and expansions shipped per cycle.

## Risk lens
- **Schedule risk** — slip on the critical path and printer-slot loss.
- **Scope risk** — manifest creep after lock.
- **Supply risk** — long lead-time components and reprint timing.
- **Sequencing risk** — expansions stranding an incomplete base game.
