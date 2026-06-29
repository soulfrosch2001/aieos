# Decision 0006 — Open-source readiness + native Windows installer
Type: report
Date: 2026-06-29
Tier: T3 (Strategic — distribution & framework evolution, Directive #7)
Council: none (direct human mandate, built under the System Experience track)
Status: CLOSED — built and verified (2026-06-29)

## Summary
Following Decision [0005](0005-system-experience-review.md), the human chose to (a) prepare
AIEOS to go **open source** for outside contribution, and (b) ship a **native Windows
installer** that configures the system while installing (app-like). Both were built and the
conformance gate stays green (**11 rules, 0/0**) in both scopes.

## Built
**Open-source community pack** (`.github/` is out of conformance scope by design):
- Issue forms: `bug_report.yml`, `feature_request.yml`, and a Directive-#7
  `framework_proposal.yml` (proposal required before any kernel/contract/stdlib PR);
  `config.yml` (blank issues off, contact links).
- `PULL_REQUEST_TEMPLATE.md` — gate/propose-before-build/template/CHANGELOG checklist.
- `CODE_OF_CONDUCT.md` (Contributor Covenant 2.1) and `SECURITY.md` (private disclosure).
- `CONTRIBUTING.md` gained a "Community & conduct" section; `README.md` gained a two-option
  Install (installer vs. from source).

**Native Windows installer** (`installer/`):
- `aieos.iss` — Inno Setup script: per-user install (no admin) to
  `%LOCALAPPDATA%\Programs\AIEOS`, Node ≥ 18 preflight, bundles the repo (excludes
  `node_modules`/`.git`/build output), and **auto-configures while installing** by running
  `post-install.ps1` (→ `npm install` + `npm run setup`). Uninstall runs `npm run teardown`.
- `post-install.ps1` — error-tolerant configure step with progress.
- `installer/README.md` — what it does, prerequisites, build, uninstall.
- Output convention: `installer/Output/AIEOS-Setup-<version>.exe` (git-ignored).

**Release CI**: `.github/workflows/release.yml` — on a `v*` tag, a Windows runner installs
Inno Setup, compiles the `.exe`, and attaches it to the GitHub Release. (Inno Setup is not
installed locally; the binary is built by CI — the standard open-source path.)

## Directive #7 ratification
Creating `CODE_OF_CONDUCT.md` / `SECURITY.md` required allowlisting those two
GitHub-standard UPPERCASE filenames in `tests/conformance/rules/kebab-case.mjs`
(`ALLOW_FILES`). This is a conformance-rule edit, so it is recorded here per Directive #7:
it only relaxes a **style warning** for two fixed conventional names that GitHub cannot
auto-detect under any other name; it weakens no law (Directives #6/#11 untouched).

## Scope / deferred
- **Windows-first.** A macOS `.pkg` / Homebrew formula and Linux packaging are deferred.
- The installer `.exe` has not been compiled/signed here (no local Inno Setup); it builds
  on the first tagged release via CI. **Code signing** (to avoid SmartScreen warnings) is a
  future step.
- Publishing the repo to a public GitHub remote is a human action (the repo is local).

## Memory updates
- This record; its audio summary (`resumo/audio/0006-resumo.*`); the CHANGELOG entry.
