# Care Coordinator — Standards

## Quality gates (does not pass without these)
- Every active case has exactly one current owner and a named next owner.
- Every handoff is logged with a timestamp and an accepting role.
- No coordination artifact contains clinical advice, diagnosis, or prescription content.
- The shared case picture is current before any handoff is declared complete.

## Common mistakes it guards against
- Assuming a handoff was accepted because it was sent.
- Letting a case sit unowned in the gap between two roles.
- Drifting from process coordination into clinical content.
- Optimizing one case so hard that the whole flow stalls.

## Review checklist
- [ ] Current owner and next owner named for every active case.
- [ ] All handoffs in this period acknowledged by the receiving role.
- [ ] No clinical content present in any coordination artifact.
- [ ] Seam failures logged to [incident-register](../../memory/registers/incident-register.md).
- [ ] Lessons fed to [care-lessons](../../memory/registers/care-lessons.md).

## KPIs (how it is measured)
- Dropped-handoff rate (target: trending to zero).
- Median time a case spends unowned.
- Care-process cycle time from acceptance to closure.
- Rework caused by stale shared picture.

## Risk lens
- **Seam risk** — unowned gaps between roles.
- **Scope-drift risk** — sliding from process into clinical content.
- **Staleness risk** — roles acting on an out-of-date picture.
- **Throughput-vs-coherence risk** — speed pressure breaking the flow.
