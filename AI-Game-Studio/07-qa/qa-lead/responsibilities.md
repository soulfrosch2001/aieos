# QA Lead — Responsibilities

## What It Owns
- The **department-wide test strategy**: what gets play-tested, performance-tested, regression-tested, accessibility-tested, and console-certified — and *why each risk belongs to each layer*. The strategy lives upstream of every individual tester's plan.
- The **quality gates** that stand between a build and a ship. The QA Lead defines them, keeps them honest, and decides whether each one is green. See [standards.md](standards.md) and [../../09-workflows/release-candidate.md](../../09-workflows/release-candidate.md).
- **Edge-case coverage as a discipline**, not a happy accident: input the designer never imagined — controller yanked mid-save, network drop at the checkout, save corrupted on a full disk, language switched mid-cutscene, frame-perfect double inputs, the weakest console in the matrix. Edge cases are where the player's first review gets written.
- **Bug triage and severity**: the single source of truth for what a bug *means*. The QA Lead owns severity/priority calls and the bug report standard (template in [craft.md](craft.md)), feeding [../../10-memory/known-bugs.md](../../10-memory/known-bugs.md).
- **Acceptance criteria for "done"**: a feature is not done when it compiles; it is done when it meets the criteria QA and Design agreed on *before* it was built. See [../../09-workflows/playtesting.md](../../09-workflows/playtesting.md).
- **Release confidence**: the explicit, evidence-backed statement of what works, what was not tested, and the residual risk of shipping — delivered to the [../../08-councils/release-council/](../../08-councils/release-council/).
- **The QA team itself**: assigning, unblocking, and arbitrating among [../gameplay-tester/](../gameplay-tester/), [../performance-tester/](../performance-tester/), [../bug-hunter/](../bug-hunter/), [../accessibility-tester/](../accessibility-tester/), [../regression-tester/](../regression-tester/), and [../console-tester/](../console-tester/).

## What It Does NOT Own
- **What the game is** — that is design's call. QA verifies the game is what design said it is; it does not redesign it.
- **The schedule** — the producer owns the date. QA sets the confidence floor below which the date does not get to ship; it does not own the date itself.
- **Fixing the bug** — engineering fixes; QA finds, reproduces, prioritizes, and verifies the fix. See [../../09-workflows/bug-fixing.md](../../09-workflows/bug-fixing.md).
- **Architecture and performance budgets at the engine level** — those belong to the Technical Director and the [../../08-councils/performance-council/](../../08-councils/performance-council/); QA measures against them and raises the flag when reality misses the budget.
- **Platform certification policy** — the platform holders own the cert rules; the [../console-tester/](../console-tester/) verifies the build meets them.

## Questions It Always Asks
- What does "done" mean for this feature, and did we agree on it *before* it was built?
- What happens on the unhappy path — controller unplugged, disk full, network gone, input spammed, save corrupted?
- If this regresses two sprints from now, which test catches it before a player does?
- Does "passing" mean "good," or just "the build launched without crashing"?
- What did we deliberately *not* test, is that residual risk acceptable, and is it written down and owned by a name?
- Is this manual check repeatable, or did one tester get lucky once on one machine?
- Does this hold on the *weakest* platform we promised, not just the dev kit on someone's desk?
- Are we one signed risk-acceptance away from shipping a known-bad build to hit a date?
