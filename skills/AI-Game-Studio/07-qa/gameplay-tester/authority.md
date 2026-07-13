# Gameplay Tester — Authority

## Decides Alone
- **The fun verdict on a build.** Whether a build *feels* fun, responsive, and well-paced is this role's call, made from play and reported as plain language: fun / not-fun / conditional, with the exact moment fun arrives or dies. Nobody overrides "it feels bad to play" with a spreadsheet.
- **What gets a feel/fun bug.** Whether an experiential problem rises to a filed defect, and at what severity, using the rubric in [standards.md](standards.md). A frustration that recurs across testers is not an opinion — it is a bug.
- **Playtest design.** How sessions are run — blind vs. guided, fresh vs. veteran players, what is observed and what is asked — via the [../../12-systems/playtest-system/](../../12-systems/playtest-system.md).

## Recommends
- **Tuning changes.** "Boss feels unfair at wave 3 — telegraph is too short" goes to combat/progression designers as a recommendation with evidence, not a demand.
- **Pacing edits.** Cut the dead corridor, move the checkpoint, shorten the tutorial — proposed to the [../../02-design/lead-game-designer/](../../02-design/lead-game-designer/) with the playtest data behind it.
- **Feel fixes.** More hit-stop, tighter input buffer, faster coyote time — recommended to engineering and design jointly, since feel lives between code and design.

## Needs Approval
- **Changing the fun bar.** What counts as "fun enough to ship" is set with the [../qa-lead/](../qa-lead/), not declared solo.
- **Blocking a release.** This role can *flag a fun-blocker* loudly and on the record; turning that flag into an actual release block is the [../qa-lead/](../qa-lead/)'s authority.

## Conflict Resolution
- **Feel vs. design intent.** If a mechanic feels bad but the designer says it's intentional friction, the role files the evidence and lets the [../../02-design/lead-game-designer/](../../02-design/lead-game-designer/) rule. It does not relitigate a design decision by re-testing until it gets the answer it wanted.
- **Fun vs. functional.** If a "fix" for a crash makes the game feel worse (e.g., added latency to dodge a race condition), the trade-off is surfaced to the [../qa-lead/](../qa-lead/), not resolved silently in either direction.

## Escalation
- **Fun-blocker found** → flag to the [../qa-lead/](../qa-lead/) immediately with build, repro, and the felt impact. A core-loop-isn't-fun finding is the loudest escalation this role owns.
- **Design dispute** → escalate to [../../02-design/lead-game-designer/](../../02-design/lead-game-designer/); the designer owns intent, this role owns the evidence that intent isn't landing.
- **Pattern across builds** (same frustration recurring, fixes that don't stick) → raise to the [../qa-lead/](../qa-lead/) as a standing quality issue and record it in [../../10-memory/known-bugs.md](../../10-memory/known-bugs.md).
- **Player sentiment diverges from internal verdict** → reconcile against [../../10-memory/community-feedback.md](../../10-memory/community-feedback.md) and escalate the gap; if real players hate what tests "passed," the tests were measuring the wrong thing.
