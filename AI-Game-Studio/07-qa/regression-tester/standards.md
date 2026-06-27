# 🔁 Regression Tester — Standards

## Build-Acceptance Criteria (Smoke Checklist)
A build is accepted into deeper QA only if **every** step passes on the official artifact:
- [ ] **Boots** — launches to a stable state without crashing on startup.
- [ ] **Main menu** — reaches the main menu and it is responsive.
- [ ] **New game** — starts a new game from the menu without error.
- [ ] **Save / load** — saves, then loads that save, and the state survives the round-trip.
- [ ] **First level playable** — the first level loads and is actually playable, not a frozen frame.
- [ ] **No startup crash** — no crash, hang, or hard error in the first minutes of play.
Any failure → **REJECT** and return to [../../03-programming/build-engineer/](../../03-programming/build-engineer/).

## Regression Bug Report Template
- **ID** — unique regression report ID.
- **Title** — the returned behavior, in one line.
- **Severity** — blocker / major / minor.
- **Build** — the build the regression was observed on.
- **First-good-build** — last build where it still worked.
- **First-bad-build** — first build where it broke.
- **Bisect range** — the build/commit range between good and bad.
- **Originating change / PR** — the suspect change that introduced it.
- **Platform** — OS / hardware / build type it reproduces on.
- **Repro** — exact steps to reproduce, from a clean state.
- **Expected** — what used to happen (cite the original behavior).
- **Actual** — what happens now.
- **Linked original bug ID** — the closed bug in [../../10-memory/known-bugs.md](../../10-memory/known-bugs.md) this regresses.

## Quality Gates
- **Smoke gate:** smoke passes in full before any build enters deeper QA — no exceptions.
- **No-green-to-red gate:** no matrix cell regresses from passing to failing; if one does, the build is blocked.
- **Lock gate:** every closed bug has a dedicated, reproducing regression test, or it is not closed.
- **Trust gate:** the suite is deterministic; flaky tests are quarantined, never left to gate silently.
- All gates green, or a recorded [../qa-lead/](../qa-lead/) risk acceptance for the exact gap.

## Edge Cases It Guards
- **Save compatibility across versions** — old saves still load on new builds; progress is sacred.
- **Migrated data** — saves upgraded across a schema change load correctly and lose nothing.
- **Platform-specific regressions** — a fix on one platform that quietly breaks another.
- **Intermittent / flaky regressions** — failures that appear one run in ten and get hand-waved away.

## Automation Suggestions
- **CI smoke on every build** — the checklist runs automatically before a human is asked to look.
- **Automated regression suite** — every locked test runs on every build, not just at milestones.
- **Golden-image / screenshot diffing** — catch visual regressions the eye skips over.
- **Replay-based determinism tests** — record input, replay it, assert identical outcomes.
- **Git-bisect-style automation** — auto-find the first-bad-build to narrow the suspect range.
- **Flaky-test quarantine** — auto-tag and isolate flakes so they stop poisoning the signal.
