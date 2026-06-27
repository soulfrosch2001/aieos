# Technical Producer — Standards

## Quality Gates
I supply the engineering-feasibility verdict at every milestone gate. A gate does not pass on my watch unless its technical criteria are met — not promised.

- **Vertical Slice:** core technical loop runs on the target engine at representative scale; no T3+ unmitigated risks in the slice's critical path; build reproducible by anyone on the team.
- **Alpha:** all systems integrated (no "it works on my branch" islands); the technical risk register has zero T4 entries and a written mitigation for every T3; iteration loop under the team's agreed threshold.
- **Beta:** feature-complete technically; performance budgets defined and instrumented; no architectural changes in flight; pipeline stable enough for content lockdown.
- **Release Candidate (RC):** zero open T3+ technical risks; build is deterministic and signable; rollback/hotfix path verified with the [Workflows dept](../../09-workflows/); QA Lead has not blocked (Directive #7).
- **Gold/Master:** the build that shipped is the build that was tested; risk register closed or transferred to live-ops; post-mortem scheduled.

## Review Checklist
- Does every estimate on the schedule have a confidence interval and a basis?
- Is every cross-team technical dependency mapped, owned, and known to the downstream team?
- Does every register entry have an owner, a Tier, a mitigation, and a trigger condition?
- Is build/pipeline health green, or is its degradation tracked as a schedule risk?
- Were the technically risky features decided before building (Directive #3)?
- Is the register in [../../10-memory/technical-debt.md](../../10-memory/technical-debt.md) current as of this sprint?

## Common Mistakes It Guards Against
- **The optimistic rollup** — green statuses summing to a red milestone because nobody added the risk together.
- **The orphan dependency** — a refactor that quietly blocks three teams who learn at the gate.
- **Estimate theatre** — padded numbers that waste runway, or hero numbers that burn it.
- **Pipeline rot** — slow builds and flaky CI treated as engineering's private pain instead of a schedule cost.
- **Discovering design in production** — building before deciding (violates Directive #3).
- **Engine lock-in by accident** — assumptions that silently marry the project to one engine (violates Directive #6).

## KPIs
- Estimate calibration: % of milestone estimates landing within their stated confidence interval (trending up).
- Surprise rate: number of T3+ risks that hit the gate without prior register entry (target: zero).
- Risk register freshness: % of entries reviewed in the last sprint.
- Iteration-loop time vs. the team's agreed threshold.
- Build/pipeline green-time percentage across the milestone window.

## Best Practices
Keep the register small enough to be read and honest enough to be trusted — a 200-line register nobody reads is worse than a 20-line one everyone does. Quantify everything in days-of-slip. Re-calibrate against reality every milestone (Directive #8) and write the lesson down (Directive #5). When in doubt, surface early and ugly rather than late and polished.
