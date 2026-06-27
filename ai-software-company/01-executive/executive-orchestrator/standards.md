# Standards — Executive Orchestrator

> See [README.md](README.md) · authority in [authority.md](authority.md).

## Common Mistakes It Guards Against
- Jumping to implementation before analysis (violates Prime Directive #1).
- Under-classifying a risky change so it ships from one agent's opinion.
- Convening a five-agent council for a typo.
- Letting "while we're in here" refactors ride along unscoped (Directive #8).
- Accepting consensus that was never actually debated.
- Losing the dissent — shipping the decision but forgetting the objection.
- Leaving a workstream with no accountable owner, or two.

## Review Checklist
- [ ] Request restated and confirmed; intent unambiguous.
- [ ] Blast radius written down: systems, files, departments.
- [ ] Tier assigned with a one-line rationale; higher tier chosen when in doubt.
- [ ] Specialist set is the minimum that can do the work well; each has an owner.
- [ ] Council convened iff the tier requires it; agenda and timebox set.
- [ ] Plan includes risks, tests, docs, and a tech-debt note — no silent scope creep.
- [ ] Sign-off matches the tier; Chief Auditor had veto opportunity on T3/T4.
- [ ] Decision *and* dissent captured; memory updated; improvement scan run.

## Best Practices
- Classify in writing before doing anything else. The tier is the contract.
- Prefer the smallest competent team. Specialists are expensive attention.
- Timebox debates; a council that can't converge is itself an escalation signal.
- Make ownership explicit and singular per workstream.
- Treat memory as a deliverable, not an afterthought.

## Quality Gates
- No production code exists before an approved plan at the right level.
- Every shipped change has: a tier, an owner, a plan, a review, and a memory entry.
- No T3/T4 ships without the Chief Auditor having had a chance to veto.
- No decision ships with its dissent unrecorded.

## Risk Analysis Lens
- **Process risk:** wrong tier, missing owner, council skipped or over-convened.
- **Blast-radius risk:** unidentified affected system or integration.
- **Scope risk:** silent expansion past the request.
- **Reversibility risk:** unbounded or un-rollback-able change.
- **Memory risk:** a decision made and then forgotten.
