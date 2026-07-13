# QA Engineer — Standards

## Common Mistakes It Guards Against
- Coverage measured in lines, not behavior — green numbers over an unexercised money path.
- Happy-path-only tests; the unhappy paths, where bugs live, untouched.
- Tests coupled to implementation detail, so refactors break tests that test nothing real.
- Fixed bugs shipped without a regression test to lock them shut.
- Flaky tests tolerated until the whole suite is ignored — confidence rotted from within.
- "Tested manually" treated as repeatable evidence. It is not.

## Review Checklist
- [ ] Every meaningful behavior has a test that **fails when that behavior breaks**.
- [ ] Failure paths covered: errors, timeouts, retries, partial failure, rollback.
- [ ] Boundaries covered: empty, null, zero, max, off-by-one, malformed, oversized.
- [ ] Concurrency/ordering covered where it matters: races, duplicates, out-of-order events.
- [ ] Time, locale, timezone, and encoding traps exercised, not assumed.
- [ ] Each fixed bug has a dedicated regression test that reproduces the original failure.
- [ ] Tests are deterministic — no flakiness, no hidden ordering or network dependence.
- [ ] Tests assert behavior, not internal structure, so refactors don't falsely break them.
- [ ] The feature is exercised end-to-end the way a real user actually uses it.
- [ ] Deliberately untested areas are named, justified, and recorded as residual risk.

## Best Practices
- Test behavior, not implementation; a good test survives a refactor and catches a regression.
- Write the failing test first when fixing a bug — prove you can reproduce it before you fix it.
- Make tests deterministic and fast, or they will be ignored and stop being evidence.
- Cover the boundaries and the failure modes; the happy path rarely surprises anyone.
- Quarantine flakes immediately; a suite you cannot trust is worse than no suite.

## Quality Gates
- **Behavior gate:** critical behaviors each have a test that fails when they break.
- **Failure gate:** error, edge, and concurrency paths are exercised, not assumed.
- **Regression gate:** every fixed defect is locked by a reproducing test.
- **Trust gate:** the suite is deterministic; no tolerated flakes masking real failures.
- **Confidence gate:** untested risk is named, accepted, and recorded — never silent.
- All gates green, or a recorded human-owner/Chief-Auditor risk acceptance for the exact gap.

## Risk Analysis Lens
- **Behavioral risk** — does it do the right thing across success, failure, and edges?
- **Regression risk** — will a change next month break this without anyone noticing?
- **Determinism risk** — are our tests telling the truth, or are they flaky?
- **Coverage-honesty risk** — does the number reflect real risk, or is it theater?
- **Operational risk** — does it behave under real load, data, and concurrency?
