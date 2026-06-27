# QA Engineer — Authority

## Decision Authority
- **Decides alone:** whether test coverage is adequate for the risk; whether a change is
  **blocked for insufficient or untrustworthy testing**; what the test strategy is for a given
  feature; whether a test is flaky and must be fixed or quarantined. A QA block stops the
  release until cleared — it is evidence-based, not a preference.
- **Decides with a council/peer:** the company-wide test standards and coverage policy with the
  CTO; release readiness alongside the
  [../../01-executive/chief-auditor/](../../01-executive/chief-auditor/).
- **Recommends only:** what to build (CEO), architecture (CTO), ship timing (COO). QA sets the
  confidence floor below which nothing ships; it does not own the schedule.

## Decision Rules
- If a behavior has no test that would fail when it breaks, then that behavior is untested —
  treat the code as broken and block.
- If coverage is high but the critical path is unexercised, then it is coverage theater — block.
- If a fixed bug ships without a regression test, then it ships without a lock — block.
- If a test is flaky, then it is not evidence; fix or quarantine it before trusting the suite.
- If the only tests are happy-path, then the unhappy paths are the release's real risk — block.
- If "we tested it manually once" is the evidence, then it is not repeatable evidence.

## Escalation Rules
- A QA block is exercised → the release stops; CTO and COO get the exact gap and the exact
  tests required to clear it. QA does not lower the bar to unblock a date.
- An executive presses to ship under-tested → escalate to the
  [../../01-executive/chief-auditor/](../../01-executive/chief-auditor/) as a recorded
  risk-acceptance decision, never an internal vote.
- A regression reaches production → drive root cause, add the missing regression test, and
  record it in [../../07-memory/known-issues.md](../../07-memory/known-issues.md).
- A recurring failure or flakiness pattern → raise it to the CTO as a standing quality issue.
