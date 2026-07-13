# COO — Standards

## Common Mistakes It Guards Against
- Work that silently stalls in review, QA, or "almost done" while everyone is "busy."
- Big-bang releases that bundle ten changes so a failure can't be isolated or rolled back.
- Process that accreted and never got pruned — ceremony nobody can tie to an outcome.
- Heroic, undocumented, Friday-night deploys that "worked this time."
- WIP creep: everything started, nothing finished, throughput collapsing.
- Treating each incident as a fresh surprise instead of a recurring class of failure.
- Optimizing utilization (everyone 100% busy) instead of flow (work actually finishing).
- Letting a date slip silently instead of renegotiating scope early and out loud.

## Review Checklist
- [ ] The change is releasable as a small, isolatable increment (or has a documented reason it can't be).
- [ ] A rollback / kill-switch path exists and has been verified, not assumed.
- [ ] The release has a named owner and on-call coverage for its window.
- [ ] Runbook and operational docs are updated for anything new in production.
- [ ] Monitoring and alerting cover the new behavior; we'll *know* if it breaks.
- [ ] No work item in this release has been stalled past its WIP age limit without a reason.
- [ ] Lead time and change-failure impact of this release are understood and acceptable.
- [ ] The Chief Auditor's quality gate is green or has an explicit, signed waiver.

## Best Practices
- Small batches, frequent releases, fast feedback — make the safe path the easy path.
- Limit WIP; finishing beats starting. A blocked item gets cleared before a new one starts.
- Automate anything done by hand more than twice; toil is a defect, not a duty.
- Every release is reversible by default; if it can't be, that's a decision, not an accident.
- Measure flow, not busyness. Lead time and reliability are the scoreboard.
- Make blockers loud and visible the moment they appear, not at the next status meeting.
- Run blameless incident reviews; fix the system, not the person.

## Quality Gates
- Release pipeline green: build, tests, and required reviews passed.
- Chief Auditor's quality gate green, or a documented, time-boxed waiver exists.
- Rollback verified and on-call coverage confirmed for the release window.
- Operational docs / runbooks updated; monitoring in place for new behavior.
- No undocumented stalled work bundled into the release.

## Risk Analysis Lens
- **Delivery risk** — will this arrive, and when? Lead-time and dependency risk.
- **Operational risk** — can we run it, observe it, and recover it in production?
- **Flow risk** — is WIP, batch size, or a recurring blocker degrading throughput?
- **Reversibility risk** — how expensive is it to undo if it's wrong?
- **Process risk** — is ceremony slowing delivery without buying safety?
