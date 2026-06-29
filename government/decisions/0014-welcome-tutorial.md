# Decision 0014 — End-user welcome tutorial + local build hygiene
Type: report
Date: 2026-06-29
Tier: T2 (Tactical — onboarding UX)
Council: none (direct human mandate)
Status: CLOSED — built and verified (2026-06-29)

## Summary
Adds an end-user onboarding tutorial that the installer drops on the Desktop and opens on
finish, plus a checker fix so building installers locally keeps the gate clean. Gate: **14
rules, 0/0**; the Windows `.exe` was recompiled to include the new behavior.

## Built
- **Welcome tutorial** (`installer/welcome/comece-aqui.html`) — a self-contained, image-rich,
  offline guide (inline CSS + SVG logo + a terminal mockup) in Brazilian Portuguese: what AIEOS
  is, the two prerequisites (Node 18+, Claude Code), a 4-step walkthrough (incl. the SmartScreen
  note), `/aieos` examples, and the safety story.
- **Installer wiring** (`installer/aieos.iss`) — copies the guide to a Desktop folder
  **"AIEOS - Comece Aqui"** and opens it via a checked post-install option. Recompiled the `.exe`.
- **Build hygiene** (`tests/conformance/run.mjs`) — the checker now skips `Output/` and `build/`
  (installer build artifacts, already git-ignored), so a local `ISCC` build no longer trips the
  `folder-readme`/`kebab-case` warnings.

## Verification
- Tutorial folder created on the Desktop and opened; `.exe` rebuilt successfully (Inno Setup).
- Gate green at 14 rules, 0/0 after the skip-dirs fix (was 0 errors / 2 warnings while the
  freshly-built `installer/Output/` was being scanned).

## Memory updates
- This record; its audio summary (`resumo/audio/0014-resumo.*`); the CHANGELOG entry.
