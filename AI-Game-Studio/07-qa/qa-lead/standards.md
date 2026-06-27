# QA Lead — Standards

## Quality Gates
These are the gates between a build and a ship. Each is green or it is not; a red gate blocks per the ship veto in [authority.md](authority.md). All green, or a recorded risk-acceptance for the exact gap. See [../../09-workflows/release-candidate.md](../../09-workflows/release-candidate.md).
- **Stability gate:** no open Critical/P0 bugs; crash-free session rate meets the agreed floor across the platform matrix.
- **Playability gate:** the game can be completed end-to-end by a tester who did not build it, following the way a real player actually plays — verified via [../gameplay-tester/](../gameplay-tester/) and [../../09-workflows/playtesting.md](../../09-workflows/playtesting.md).
- **Performance gate:** frame-time and load budgets hold on the *weakest* promised platform, not the dev kit — measured by [../performance-tester/](../performance-tester/), arbitrated by the [../../08-councils/performance-council/](../../08-councils/performance-council/).
- **Regression gate:** every fixed bug is locked by a reproducing test; the prior release's known-bugs are re-verified by [../regression-tester/](../regression-tester/).
- **Accessibility gate:** committed accessibility criteria are met — [../accessibility-tester/](../accessibility-tester/).
- **Certification gate:** the build passes platform-holder requirements — [../console-tester/](../console-tester/).
- **Honesty gate:** every deliberately untested area is named, justified, and recorded in [../../10-memory/known-bugs.md](../../10-memory/known-bugs.md) — never silent.

## Acceptance Criteria
- "Done" is defined *before* the feature is built, agreed between QA and Design, and written down. A feature with no acceptance criteria is not testable, and an untestable feature is not done.
- Criteria are observable and player-facing: "the player can X and sees Y," not "the function returns true."
- Criteria cover the unhappy path explicitly — what *should* happen when input is empty, the save is corrupt, the controller is yanked, the network drops.
- A feature meets acceptance only when reproduced from a clean state, on the platforms it claims, by someone other than its author.

## Review Checklist
- [ ] Acceptance criteria existed *before* build, and the feature meets every one.
- [ ] The feature was exercised the way a real player plays it, not just a scripted demo path.
- [ ] Edge cases covered: empty/max/malformed input, mid-action interrupts, disk-full, network-drop, save corruption, frame-perfect double inputs.
- [ ] Reproduced on the weakest promised platform, not only the dev machine.
- [ ] Every fixed bug has a dedicated regression test that reproduces the original failure.
- [ ] No tolerated flaky check is masking a real failure.
- [ ] Each open bug carries a justified severity and priority and follows the standard template ([craft.md](craft.md)).
- [ ] Deliberately untested areas are named, owned, and recorded as residual risk.

## Common Mistakes It Guards Against
- "Done" declared on compile, with acceptance criteria invented after the fact to fit the build.
- Happy-path playthroughs by the level's own author treated as proof the level works.
- Testing only on the dev kit, then shipping to the budget console players actually own.
- Severity assigned by who shouted loudest instead of player impact.
- A bug "closed" with no regression test — rented, not killed.
- A known bug quietly downgraded to hit a date, with no signed risk-acceptance behind it.

## KPIs
- **Escaped-defect rate** — bugs found by players that QA should have caught. The number that matters most.
- **Regression-test coverage of closed bugs** — what fraction of fixed bugs are locked shut.
- **Crash-free session rate** across the platform matrix.
- **Bug reopen rate** — fixes that did not actually fix.
- **Gate pass rate at first RC** — how often a release candidate is shippable on the first pass.
- **Triage latency** — time from bug filed to severity assigned.

## Best Practices
- Define "done" before the build, in writing, or you are testing a moving target.
- Automate the boring and repeatable — smoke tests, save/load cycles, build-boot per platform, regression suites — so human testers spend their attention on the surprising. Feed automation suggestions to the relevant tester role and track them; a manual check run every build is a test waiting to be written.
- File the failing repro before celebrating the fix; prove you can reproduce it first.
- Quarantine flaky checks immediately — a suite you cannot trust is worse than none.
- Hold the veto on evidence, never on mood, and always hand over the exact bar to clear it.
