# Decision 0012 — macOS installer + brand logo
Type: report
Date: 2026-06-29
Tier: T2 (Tactical — distribution + brand)
Council: none (direct human mandate)
Status: CLOSED — built (CI-compiled) and verified where possible (2026-06-29)

## Summary
Adds the macOS counterpart of the Windows installer and adopts the official AIEOS logo.
Gate stays green (**14 rules, 0/0**).

## Built — macOS installer (`installer/macos/`)
- **`build-pkg.sh`** assembles a `.pkg` with `pkgbuild` + `productbuild`; payload installs to
  `/usr/local/aieos`. **`postinstall`** runs a Node ≥ 18 preflight, `npm install`, then
  `npm run setup` **as the console user** (a `.pkg` postinstall runs as root, so the per-user
  `~/.claude` config is written via `sudo -u`). **`distribution.xml`** sets the title and a
  macOS 11+ requirement. Uninstall = `npm run teardown` (+ `rm -rf /usr/local/aieos`).
- **Release CI**: `.github/workflows/release.yml` gained a `macos-installer` job (macOS
  runner) that builds the `.pkg` and attaches it to the GitHub Release on a `v*` tag —
  mirroring the Windows job. As with Windows, the binary is built by CI (no local macOS here),
  so it was authored for correctness, not compiled/verified on this machine.
- README Install now offers Windows `.exe` and macOS `.pkg` under one "Native installer" option.

## Built — brand (`brand/`)
- Adopted the supplied logo: a navy "A" peak with a vivid blue "i" ("Ai"), over the **AIEOS**
  wordmark (blue "I"). Shipped as **editable SVGs** — `aieos-logo.svg` (full) and
  `aieos-mark.svg` (icon, transparent) — plus a palette (navy `#111a2e`, blue `#3a2bff`) in
  `brand/README.md`. The logo is shown at the top of the main README.

## Brand update (2026-06-29)
- The maintainer saved the exact raster master to `brand/aieos-logo.png`; the README now
  displays it as the official logo. The SVGs remain as the editable vector recreation (close,
  not byte-identical) for scalable/transparent use.

## Honest limitations
- macOS code-signing / notarization (Gatekeeper) and a Homebrew formula remain deferred.

## Correction
A prior report mis-stated the rule count as 15; the gate has **14 rules**. Decision 0011, its
audio, and the CHANGELOG were corrected.

## Memory updates
- This record; its audio summary (`resumo/audio/0012-resumo.*`); the CHANGELOG entry.
