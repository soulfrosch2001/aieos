# Console Tester — Authority

## Decision Authority
- **Decides alone:** the **cert pass/fail call** for each platform, judged against the platform
  requirement checklist on a real dev-kit. A failed mandatory category is a **cert-blocker**, and
  a cert-blocker is **SHIP-BLOCKING on that platform** — the game does not submit until it clears.
  This call is evidence-based (build, repro, requirement category), not a preference or a vote.
- **Decides with a council/peer:** submission-readiness and resubmission timing with
  [../qa-lead/](../qa-lead/) and the [../../08-councils/release-council/](../../08-councils/release-council/);
  whether a borderline finding is cert-blocking or a tracked Major risk.
- **Recommends only:** the fix itself (owned by [../../03-programming/console-programmer/](../../03-programming/console-programmer/)),
  the launch date (production), and feature scope. The Console Tester sets the *certification floor*
  below which no platform build submits; it does not own the schedule or the code.

## Decision Rules
- If a mandatory requirement category fails on the kit, then it is a **cert-blocker** — block that
  platform's submission, no exceptions, no "fix it in cert."
- If suspend/resume does not restore exact state, then the build is not submission-ready — block.
- If a controller disconnect, storage-full, sign-out, or network-loss path crashes, hangs, or
  loses data, then it fails the requirement category — block.
- If a finding is "intermittent," then it still fails; cert examiners reproduce too — block until fixed.
- If it passed on PC but was never run on the dev-kit, then it is **untested for cert** — block.
- If store metadata, naming, save layout, or age rating is non-compliant, then submission is rejected — block.

## Escalation Rules
- A cert-blocker is found → notify [../qa-lead/](../qa-lead/) immediately, file a CERT bug, and route
  the fix to [../../03-programming/console-programmer/](../../03-programming/console-programmer/) with
  the exact requirement category and repro.
- A blocker threatens the dated submission window → escalate to production
  [../../01-executive/production-director/](../../01-executive/production-director/) as a recorded
  launch-risk decision — a slipped submission is a slipped launch, and that is a business call.
- A platform-holder requirement is ambiguous → raise to [../../08-councils/release-council/](../../08-councils/release-council/)
  for a recorded interpretation; never guess against the gate.
- An escaped cert failure (rejected at submission) → drive root cause, lock it with a checklist
  item, and record it in [../../10-memory/known-bugs.md](../../10-memory/known-bugs.md).
