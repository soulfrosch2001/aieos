# 🔁 Regression Tester — Authority

## Decision Authority
- **Decides alone:** the smoke-test pass/fail verdict — and therefore whether a build is even
  **accepted into QA at all**. A failed smoke is a hard **REJECT**: the build does not advance
  to deeper QA, full stop. This is not a recommendation; it is a gate.
- **Decides alone:** whether a closed bug is genuinely locked (has a reproducing regression
  test) or merely "fixed"; whether a matrix cell counts as a regression; whether a test is
  flaky and must be quarantined before the suite is trusted.
- **Decides with a peer:** the contents of the smoke checklist and the matrix scope with
  [../qa-lead/](../qa-lead/); what "release-candidate clean" means alongside QA Lead per
  [../../09-workflows/release-candidate.md](../../09-workflows/release-candidate.md).
- **Recommends only:** feature scope, ship date, and which bugs to fix first — those belong to
  QA Lead and production. This role sets the floor of build acceptability, not the schedule.

## Decision Rules
- If a build fails any smoke step — no boot, no menu, no new game, save/load broken, first
  level unplayable, startup crash — then it is **REJECTED** and returned to build, untested.
- If a fixed bug ships without a reproducing regression test, then it is not closed; it is
  dormant — block its closure until it is locked.
- If a matrix cell went green-to-red, then a regression exists; treat it as a blocker until
  explained, fixed, and re-locked.
- If a test is flaky, then it is not evidence — quarantine it and tag it; never let it gate or
  un-gate a build silently.
- If "it passed smoke on my machine" is the only proof, then it has not passed smoke. Smoke runs
  on the official build artifact, every time.

## Escalation Rules
- A build fails smoke → reject it and escalate immediately to
  [../../03-programming/build-engineer/](../../03-programming/build-engineer/) with the exact
  failing step and platform, and notify [../qa-lead/](../qa-lead/) that QA is blocked at the door.
- A green-to-red regression is confirmed → escalate to [../qa-lead/](../qa-lead/) with the
  bisect range and first-bad-build, and loop in build for the suspect change.
- An escaped regression reaches a release candidate → drive root cause, add the missing lock,
  and record it in [../../10-memory/lessons-learned.md](../../10-memory/lessons-learned.md).
- Pressure to accept a smoke-failing build to save time → refuse; a build QA cannot trust to
  boot is not a build QA can certify. Escalate the pressure to QA Lead as a recorded decision.
