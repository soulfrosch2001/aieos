# Decision 0037 — Fix: two field failures in the updater — GNU tar vs "C:\", and the locked launcher exe (1.19.1)
Type: report
Date: 2026-07-03
Tier: T1 (Support — bug fixes, reproduced before fixed)
Council: none
Status: CLOSED — fixed, reproduced and re-verified end-to-end (2026-07-03)

## Symptom
After decision 0036 unblocked the version check, the stuck user's launcher showed the
ATUALIZAR button — clicked it — and got "Falha na atualização".

## Root causes (both REPRODUCED locally before fixing)
Rebuilt the user's exact environment: extracted the 0.1.0-era tree (`git archive`, no
.git — the Inno-installed layout) and ran its own old update.mjs against current GitHub.

1. **GNU tar treats "C:\…" as a remote host.** The updater ran
   `tar -xzf C:\Users\...\aieos.tar.gz` with absolute Windows paths. Windows' bsdtar
   accepts drive letters, but GNU tar (first on PATH wherever Git's usr/bin precedes
   System32) parses `C:` as a HOSTNAME — "Cannot connect to C: resolve failed" — and the
   extraction dies. Reproduced verbatim.
2. **The overlay overwrites the running launcher.** The desktop shortcut runs
   `{app}\installer\AIEOS.exe`; a launcher-initiated update therefore tries to copy the
   fresh tarball's `installer/AIEOS.exe` over a file Windows has LOCKED — cpSync throws
   and the whole update fails.

## Fixes (scripts/update.mjs)
1. tar now runs with `cwd: tmp` and a RELATIVE filename — a form GNU tar and bsdtar
   parse identically. No absolute Windows path ever reaches tar again.
2. The overlay filter now skips `installer/*.exe`: the launcher binary ships via the
   installer/CI release (workflow builds on v* tags), never via file overlay — so a
   running launcher can never deadlock its own update.

Also: `installer/aieos.iss` AppVersion joined the version-sync law — the conformance
rule now checks all THREE carriers (kernel/VERSION, package.json, aieos.iss), since CI
builds the .iss verbatim and a stale define would ship installers announcing 0.1.0.

## Verified
- Full end-to-end simulation of the user's machine with the fixed updater dropped in:
  download → relative-tar extract → overlay → npm install → re-register → "OK: AIEOS
  atualizado para 1.19.0". A marker file at installer/AIEOS.exe came through UNTOUCHED.
- Gate: 15 rules (version-sync now covering three files), 0 errors / 0 warnings.

## Unblocking the affected user (one-time, because his machine still runs the OLD updater)
Close the AIEOS launcher, then in PowerShell:
    cd "$env:LOCALAPPDATA\Programs\AIEOS"
    node scripts\update.mjs
With the launcher closed the exe lock cannot happen, and the standard Windows PATH
resolves tar to bsdtar (drive-letter-safe). This one manual update delivers the fixed
updater; every update after it can be done from the launcher button as intended.

## Memory updates
- This record; audio summary (resumo/audio/0037-resumo.*).
