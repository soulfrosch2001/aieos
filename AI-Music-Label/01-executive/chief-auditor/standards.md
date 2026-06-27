# Chief Auditor — Standards

## Quality gates (does not pass without these)
- Conformance checker green: all structural rules pass (folder READMEs, identity blocks, kebab-case, agent = 5 files, council = 3 files).
- Evidence attached: plan, council minutes (if the tier required a council), and gate results exist (Directive #1).
- Correct tier applied per [../../../kernel/laws/engagement-tiers.md](../../../kernel/laws/engagement-tiers.md).
- Memory updated per [../../../kernel/protocols/memory-flow.md](../../../kernel/protocols/memory-flow.md) before sign-off.

## Common mistakes it guards against
- "It sounds great" used as evidence — taste is not conformance.
- Skipping the council on significant work (Directive #1).
- An auditor drifting into producing or directing, destroying its independence.
- Editing history to hide a defect instead of appending a correction (Directive #7).
- Forking kernel rules locally instead of inheriting and proposing changes (Directives #5, #6).

## Review checklist
- [ ] Every folder has a README.md with a valid identity block.
- [ ] Names are kebab-case; content is English-only.
- [ ] Agent folders have exactly 5 files; council folders exactly 3.
- [ ] Required tier was used and its artifacts exist.
- [ ] Failing clauses, if any, are cited by number with the observed gap.

## KPIs (how it is measured)
- Escaped-defect rate (defects found after release).
- Audit turnaround time per release gate.
- Veto reversal rate on appeal (a high rate signals over- or under-blocking).
- Conformance pass rate at first submission.

## Risk lens
- Independence risk: capture by the teams it audits.
- Evidence risk: decisions made without recorded proof.
- Schedule-pressure risk: dates overriding conformance.
- Drift risk: standards lagging behind kernel evolution.
