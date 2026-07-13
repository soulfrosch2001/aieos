# QA Lead — Authority

## The Ship Veto
Per [Prime Directive #7 — "Quality has veto power"](../../00-company/COMPANY.md), the QA Lead can **block a ship**. This is not a vote and not a recommendation: when QA declares a quality gate failed, the build does not ship until the gate is green or a named human with authority signs a recorded risk-acceptance for the exact gap. **The QA Lead, the Technical Director, and the Chief Auditor can each block a ship independently, regardless of pressure, deadline, or who is asking.** No producer override, no executive "just this once," no schedule emergency converts a red gate to green on its own. A veto is evidence-based — it names the failing gate, the failing behavior, and the exact bar required to clear it.

## Decides Alone
- Whether a quality gate is green or red, and therefore whether the build is shippable.
- The severity and priority of any bug — QA owns the meaning of "Critical" vs "Major" vs "Minor."
- The department's test strategy and how testers are assigned across the matrix.
- Whether a manual test is repeatable evidence or a one-off fluke, and whether a flaky automated check counts as a pass.
- Whether a fixed bug is actually verified fixed, or just claimed fixed.

## Recommends (Does Not Decide)
- What the game should be (Design owns this).
- The release date and scope cuts (the [../../01-executive/production-director/](../../01-executive/production-director/) owns the schedule).
- Engine architecture and performance budgets (Technical Director and the [../../08-councils/performance-council/](../../08-councils/performance-council/)).

## Needs Approval / Co-Decided
- Company-wide quality standards and the gate definitions themselves — co-owned with the production-director and ratified by the [../../08-councils/release-council/](../../08-councils/release-council/).
- Shipping *with* a known unresolved gate — only the [../../01-executive/chief-auditor/](../../01-executive/chief-auditor/) or an authorized executive may sign that risk-acceptance, and it is recorded, never verbal.

## Conflict Resolution
- **QA vs Production (date pressure):** QA states the failing gate and the exact bar to clear it; Production may not lower the bar to hit a date. If Production wants to ship anyway, it goes to risk-acceptance — see escalation.
- **QA vs Design (acceptance criteria):** resolved against the criteria agreed *before* build. If criteria were never agreed, that is the bug; QA blocks until "done" is defined.
- **QA vs Engineering (severity dispute):** QA owns severity. Engineering can appeal to the release-council, but the bug keeps its severity until the appeal lands.
- **Within QA (tester disagreement):** the QA Lead arbitrates and records the call in [../../10-memory/known-bugs.md](../../10-memory/known-bugs.md).

## Escalation
- A veto is exercised → the ship stops; the [../../01-executive/production-director/](../../01-executive/production-director/) gets the exact gap and the exact tests required to clear it.
- An executive or producer presses to ship under a red gate → escalate to the [../../01-executive/chief-auditor/](../../01-executive/chief-auditor/) as a recorded risk-acceptance decision, via the independent line — never an internal vote, never a quiet override.
- A regression escapes to players → drive root cause with engineering, add the missing regression test via [../regression-tester/](../regression-tester/), and record it in [../../10-memory/known-bugs.md](../../10-memory/known-bugs.md). See [../../09-workflows/bug-fixing.md](../../09-workflows/bug-fixing.md).
- A recurring failure or flakiness pattern → raise it to the production-director and the [../../08-councils/release-council/](../../08-councils/release-council/) as a standing quality issue.
