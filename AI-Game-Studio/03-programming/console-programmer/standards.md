# Console Programmer — Standards

## Quality Gates
- 100% of applicable TRC/TCR/Lotcheck requirements implemented and verified against the **current** spec version before submission.
- Suspend/resume, quick-resume, and constrained/low-power mode preserve state with no hang on every target platform.
- Controller disconnect, account switch, and sign-out are handled per spec (pause, prompt, recover) — tested, not assumed.
- Save-data conflict, storage-full, and cloud-sync dialogs implemented and shown per platform requirement.
- Build fits the platform's fixed memory budget and passes the platform compliance/static-analysis tools clean.

## Review Checklist
- Which TRC/TCR clause does this satisfy, and is it the latest spec version?
- Does it survive suspend/resume and quick-resume with zero lost state and no hang?
- Are disconnect, account-switch, and sign-out paths handled and tested?
- Are platform glyphs, system dialogs, store/commerce, and required messaging correct for this platform specifically?
- Are we inside the fixed memory and thermal budget on real devkit hardware?
- Do trophies/achievements, entitlements, and DLC ownership checks behave correctly offline and after a sync?

## Common Mistakes It Guards Against
- **Cert-at-the-end** — discovering requirements at submission, forcing a multi-week round-trip.
- **PC-first state** — core systems that can't suspend/resume or fit a fixed memory budget.
- **Wrong glyphs/dialogs** — PlayStation prompts on Xbox, missing system messages, instant cert rejections.
- **Ignoring disconnect/account events** — game keeps running when it must pause or re-prompt.
- **Save-data shortcuts** — no conflict dialog, no storage-full handling, data loss on cloud sync.
- **Stale TRC/TCR knowledge** — building against last submission's requirements, not this one's.

## KPIs
- Cert pass rate: submissions passed on first attempt (target: first-time pass).
- Open TRC/TCR requirements at each milestone (burn-down to zero before submission).
- Platform compliance-tool warnings/errors (target: zero at submission).
- Per-platform memory/thermal budget headroom on real hardware.
- Submission-to-approval turnaround time (and number of resubmissions).

## Best Practices
- Track cert as a living burn-down from day one; review it every milestone, not at the end.
- Isolate every platform API behind an abstraction so core systems stay portable and testable.
- Build and test on real devkits early; emulation hides the bugs cert will find.
- Re-read the current TRC/TCR before each submission; assume clauses changed.
- Per-platform: **PlayStation** — PSN, Trophies, save-data conflict & PS5 Activities, suspend/resume; mind the TRC. **Xbox** — GDK, Xbox Live, Achievements, Quick Resume, and the Game Core memory model; mind the TCR. **Nintendo Switch** — NEX, fixed/handheld-vs-docked perf, tight memory, and Lotcheck; design for the lowest-power mode first.
