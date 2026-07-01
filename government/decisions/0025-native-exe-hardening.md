# Decision 0025 — AIEOS.exe packaging + council hardening of the native launcher
Type: report
Date: 2026-06-30
Tier: T3 (Strategic — product reliability, Directives #1, #3, #4)
Council: 4-lens test council (functional QA, UX, Windows integration, reliability) → 3 engineers
Status: CLOSED — built & verified (2026-06-30)

## Summary
The native launcher (0024) was packaged into a real **`AIEOS.exe`** (PS2EXE, GUI-subsystem →
**no console/cmd flash**, AIEOS logo embedded), then put through a **council test pass** that found
real defects, which **three engineers fixed in parallel** (disjoint files). Gate: **14 rules, 0/0**;
the critical `$root` fix was independently **proven** with a compiled probe.

## Packaging
- `installer/aieos-launcher.ps1` (native WPF) is compiled by **PS2EXE** to `installer/AIEOS.exe`
  with `-noConsole -iconFile aieos.ico -STA`. Subsystem = 2 (Windows GUI): Windows never allocates
  a console, so there is **no cmd window at all** (verified: no `conhost` child, PE subsystem = GUI).
- Installer shortcuts (Desktop + Start-Menu) launch `{app}\installer\AIEOS.exe` directly — **no
  `powershell.exe`** in the shortcut. Icon = the AIEOS logo. The exe is a build artifact
  (gitignored); CI builds it fresh before ISCC and bundles it.

## Council test pass (4 lenses) — key findings
- **Critical:** `$PSScriptRoot` is empty under PS2EXE → `$root` empty → the exe couldn't find
  `package.json`/`update.mjs`/guide (only "worked" via the shortcut's WorkingDir).
- **Critical:** update ran on the UI thread (`-Wait`) → window froze ("Não respondendo") 30–120s.
- **Critical:** `SilentlyContinue` + no console → every failure was invisible / mis-diagnosed.
- **Critical:** self-update tarball path depended on `tar`/`npm` on PATH and failed silently.
- **High:** string version compare (downgrade risk); sync version check froze the open (6s);
  `node` not on GUI PATH; no single-instance guard (2 windows); inner exe unsigned (SmartScreen).
- **Medium:** no pt-BR accents; no taskbar identity; orphan node on close; button label mismatch.

## Engineers (fan-out, disjoint ownership — Directive #4)
- **A → `installer/aieos-launcher.ps1`** (577 lines): PS2EXE-safe `$root` (from
  `MainModule.FileName`, validated); **async update** (background process + DispatcherTimer,
  button disabled, errors surfaced from the redirected log); removed blanket error-silencing;
  **async version check** (paint-first "Verificando…"); **numeric semver** compare; **node
  detection**; **single-instance mutex**; **kill node on close**; full **pt-BR accents (UTF-8 BOM)**;
  **Title + window icon + AppUserModelID**; **minimize button** + ✕ hover; relabel up-to-date button
  to "Verificar novamente"; watermark/fade-in polish.
- **B → `.github/workflows/release.yml` + `installer/aieos.iss`**: sign the **inner AIEOS.exe** in CI
  before ISCC (gated on the cert secret); `AppUserModelID` on both shortcuts.
- **C → `scripts/update.mjs`**: fail loud & clear in pt-BR — preflight `git`/`tar`/`npm`, guard every
  step's exit code (incl. `install-command.mjs`), clear success line, "already up to date" fast path.

## Verification
- Compiled probe (run as an exe inside `installer\`) resolved `root = …\aieos`, read `ver = 0.1.0`
  — proving the `$root` fix under PS2EXE.
- STA render test: all 17 named elements resolve, window renders (Navy Aurora intact, accents OK).
- `AIEOS.exe` launch smoke test: window alive, **no console child**. Gate 0/0.

## Memory updates
- This record; its audio summary (`resumo/audio/0025-resumo.*`).
