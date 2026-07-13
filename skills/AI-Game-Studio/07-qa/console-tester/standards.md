# Console Tester — Standards

## Common Mistakes It Guards Against
- "We'll fix it in cert" — the most expensive sentence on a console project; cert is the deadline.
- Testing the console build only on PC, where suspend/resume, accounts, and storage don't exist.
- Treating an intermittent cert failure as a Minor; the examiner reproduces it and rejects the build.
- Shipping store metadata, naming, or age rating that fails the storefront's compliance check.
- Forgetting that cert rules differ per platform — a PS pass is not an Xbox or Switch pass.
- Skipping the soak run, so the slow-burn failures surface in the platform holder's hands.

## Per-Platform Cert Checklist (run on the dev-kit before submission)
Mandatory categories — every one must pass on **each** of PS / Xbox / Switch:
- [ ] **Suspend/resume** restores exact game state, including rapid suspend/resume cycles.
- [ ] **Controller disconnect** mid-game pauses gracefully and prompts reconnect per platform rules.
- [ ] **Storage full** during save and autosave is handled with required messaging, no data loss.
- [ ] **Sign-out / account switch** mid-session is handled; fast user-switch attributes data correctly.
- [ ] **Network loss** during save, sync, and online flows recovers without hang or corruption.
- [ ] **Achievements / trophies** unlock once, persist, survive offline, attribute to the right user.
- [ ] **Save corruption** is detected and handled gracefully — never a silent or crashing load.
- [ ] **Naming / store metadata** matches each platform's conventions and storefront requirements.
- [ ] **Age rating** is present, correct, and compliant for the platform's storefront.

## Acceptance Criteria (submission-ready)
- Every mandatory category above passes on a real dev-kit for the target platform.
- Zero open Cert-blockers for that platform; all logged in [../../10-memory/known-bugs.md](../../10-memory/known-bugs.md).
- A soak run on the dev-kit completes without a lifecycle, account, or storage failure.
- The release-candidate gate ([../../09-workflows/release-candidate.md](../../09-workflows/release-candidate.md))
  is signed off with the per-platform checklist attached.

## Edge Cases (the cruelty set — run them all)
- Yank the controller mid-cutscene and mid-QTE; verify the required pause/reconnect behavior.
- Pull the network during a save and during a cloud sync; verify recovery, not corruption.
- Fill storage to full *during* an autosave; verify messaging and that no save is half-written.
- Fast user-switch mid-session; verify trophies and saves follow the correct account.
- Rapid suspend/resume in a tight loop; verify state survives every cycle, not just the first.
- Disc eject (where applicable) mid-load and mid-play; verify the required recovery prompt.

## Quality Gates
- **Lifecycle gate:** suspend/resume and rapid cycles restore exact state on the kit.
- **Peripheral gate:** controller disconnect/reconnect handled per platform rules.
- **Resource gate:** storage-full and network-loss paths recover gracefully, no data loss.
- **Account gate:** sign-out, fast user-switch, and trophy attribution are compliant.
- **Metadata gate:** naming, store metadata, save layout, and age rating pass for the platform.
- All gates green per platform, or a recorded [../../08-councils/release-council/](../../08-councils/release-council/)
  risk acceptance for the exact category — never a silent submission.

## Automation Suggestions
- Dev-kit automation that drives **suspend/resume cycles** repeatedly and asserts state restoration.
- **Fault injection** for network drop and storage exhaustion at scripted moments (save, autosave, sync).
- **Checklist tracking** that records per-platform pass/fail and blocks submission on any open blocker.
- **Soak runs** on the dev-kit to surface slow lifecycle, memory, and account failures before the examiner does.
