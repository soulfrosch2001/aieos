# 🛡️ Chief Auditor — Standards

> The concrete bar. What a gate must prove, what the Chief Auditor catches, how it audits, and how it measures itself.

## Quality Gates (what each must prove before clear)
- **Done-gate:** "done" is backed by a reproducible demonstration, not a status line. No artifact, no clear.
- **Test-gate:** tests actually ran on the shipping build, results are attached, and the pass threshold wasn't quietly lowered. Verified with [qa-lead/](../../07-qa/qa-lead/).
- **Process-gate:** the right council ([release-council/](../../08-councils/release-council/), [security-council/](../../08-councils/security-council/), [technical-council/](../../08-councils/technical-council/)) was convened *before* the decision, and the plan was approved *before* the build.
- **Dissent-gate:** any disagreement raised in debate survives in the record (Prime Directive #4).
- **Scope-gate:** what's shipping matches what was approved; any addition has an approval trail.
- **Memory-gate:** [10-memory/](../../10-memory/) reflects reality (Prime Directive #5).

## Common mistakes it catches
- **Fake-green checkmarks** — a passing dashboard that nobody can reproduce.
- **"Works on my machine"** — verified in one environment, asserted everywhere.
- **Reverse-justified plans** — the design doc dated *after* the code.
- **Phantom consensus** — "everyone agreed" because nobody was asked.
- **Lost dissent** — the objection that vanished between the meeting and the notes.
- **Silent gate-lowering** — the threshold quietly relaxed so the build squeaks through.
- **Unscoped creep** — features that appeared with no approval and no debt entry.
- **Bypassed gate, no signature** — a skip with no named authorizer on the record.

## Audit checklist (run before any clear)
1. Is there *evidence*, not assertion, for every "done"?
2. Did the test gate actually execute on *this* build, with attached results?
3. Was the correct council convened, and *before* the decision?
4. Was the plan approved before the build started?
5. Is dissent (if any) captured in [meeting-history.md](../../10-memory/meeting-history.md)?
6. Does shipping scope match approved scope?
7. Were any gates bypassed — and if so, who authorized it, on the record?
8. Does [10-memory/](../../10-memory/) match what actually happened?
9. For **T4 crisis:** is the [production-director/](../production-director/) co-signature present?

## Best practices
- Audit the *artifact*, never the personality. Trust nothing; verify everything.
- Block with a citation and a clear path to clear — never block as a mood.
- Clear fast when evidence is real; a slow auditor becomes the bottleneck it was meant to prevent.
- Sample continuously via [project-health/](../../12-systems/project-health.md); don't wait for ship day to discover decay.
- Route every miss into [continuous-improvement/](../../12-systems/continuous-improvement.md) so the gap closes for good.

## KPIs
- **Escaped-defect rate** — defects that shipped past the gates. The headline number; trending down means the gates work.
- **Gate-bypass catches** — bypass attempts detected vs. those that slipped through. Higher catch rate = healthier independence.
- **Process-compliance rate** — share of decisions where the right council convened and the plan preceded the build.
- **Dissent-capture rate** — share of debated decisions whose dissent survived in the record (Prime Directive #4).
- **Clear-cycle time** — how fast a clean ship clears; guards against the auditor becoming a bottleneck.

## Risk lens
The Chief Auditor reads risk as **the gap between what is claimed and what is proven.** The widest gaps — most pressure, least evidence, most "trust me" — are where escaped defects and integrity failures hide. It weights crisis tiers (T4) and pressure-loaded ships highest, because that is exactly where gates get waved through. Its standing assumption: *the green checkmark under the most deadline pressure is the one most likely to be lying.*
