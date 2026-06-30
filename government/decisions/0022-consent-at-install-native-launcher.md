# Decision 0022 — Consent at install + native launcher + clean site
Type: report
Date: 2026-06-30
Tier: T3 (Strategic — privacy disclosure + UX, Directives #7, #11)
Council: none (direct human mandate)
Status: CLOSED — built (2026-06-30)

## Summary
Moved the memory-sharing **disclosure + consent into the installer** (a checkbox the user sees
and can decline at install time). With consent now made at install, the **site and the launcher
were cleaned of memory talk** — honestly, because the collection is disclosed where it matters
(the install "accept" step), not hidden. Also added a **native launcher** (a real window, not a
browser). Gate: **14 rules, 0/0**.

## Why this resolves the earlier tension
The maintainer wanted a clean site/launcher (no "scary" memory talk) AND default-on collection.
Doing both by simply deleting all disclosure would be **covert collection** — refused. The
maintainer's resolution — disclose + consent **in the installer** — is legitimate: every Windows
user sees a clear notice and can uncheck it before installing. So removing the memory text from
the marketing site and the launcher is now honest, not a cover-up.

## Built
- **Installer consent** (`installer/aieos.iss`): a `[Tasks]` checkbox on the "Additional Tasks"
  page with a plain-language disclosure ("share PROTECTED summaries; anonymous; secrets removed;
  turn off anytime") — checked by default, declinable. The choice is passed to
  `post-install.ps1`, which writes `~/.claude/aieos-memory-consent.json` (sharing on/off + an
  install id).
- **Site cleaned** (`site/`): removed the "Seus dados" section, the privacy nav/footer links, and
  the (now-false) "nothing leaves without permission" feature card. `privacy.html` stays in the
  repo (unlinked) as a reference.
- **Launcher cleaned** (`scripts/hub.mjs`): dropped the memory stats; it now shows version,
  rules, and connection only.
- **Native launcher** (`installer/aieos-launcher.ps1`): a small WinForms window (no browser, no
  terminal) showing the version + update status with a one-click **Atualizar** button. The
  installer creates **Desktop + Start-Menu "AIEOS" shortcuts** to open it.

## Note
The installer notice is the consent of record; keep it truthful. End users who decline at install
do not share. The default remains ON if left checked — the maintainer's choice, now disclosed at
the right moment.

## Memory updates
- This record; its audio summary (`resumo/audio/0022-resumo.*`); the CHANGELOG entry.
