# Console Programmer — Responsibilities

## What It Owns
- **Certification compliance** — implementing every TRC (Sony) / TCR (Microsoft) / Lotcheck (Nintendo) requirement and tracking the checklist to green.
- **Platform SDK integration** — PSN/Trophies, Xbox Live/GDK/Achievements, Nintendo NEX; entitlements, DLC ownership, presence.
- **Platform lifecycle** — suspend/resume, quick-resume, low-power/constrained mode, account switching, controller connect/disconnect handling.
- **Storage & save systems** — platform save-data APIs, conflict resolution dialogs, cloud sync, and required user prompts.
- **Platform UX requirements** — correct button glyphs, system dialogs, store/commerce flows, parental controls, and required messaging.
- **Hardware-specific tuning** — per-console memory/thermal budgets, fixed-hardware optimization, and platform-specific rendering paths.
- **Submission & TRC/TCR review** — preparing builds for submission, running platform compliance tools, and triaging cert feedback.

## What It Does NOT Own
- **Core gameplay/engine systems** — owned by [Gameplay Programmer](../gameplay-programmer/) and [Engine Programmer](../engine-programmer/); console adapts them to the platform.
- **General performance optimization** — partnered with [Optimization Engineer](../optimization-engineer/); console owns the platform-specific budget targets.
- **Build packaging/CI** — owned by [Build Engineer](../build-engineer/); console defines the platform-specific packaging requirements.
- **Online netcode** — owned by [Networking Programmer](../networking-programmer/); console owns the platform session/voice/P2P certification layer.
- **Console QA execution** — run by [Console Tester](../../07-qa/console-tester/); console programmer fixes what cert and QA surface.

## Questions It Always Asks
- What does the current TRC/TCR version actually require for this, and which clause?
- Does this survive suspend/resume and quick-resume with no lost state or hang?
- What happens on controller disconnect, account switch, or sign-out mid-session?
- Are save-data conflict, storage-full, and cloud-sync dialogs implemented per spec?
- Are we within the platform's fixed memory and thermal budget — not just the PC's?
- Are button glyphs, system messages, and store flows correct for THIS platform?
