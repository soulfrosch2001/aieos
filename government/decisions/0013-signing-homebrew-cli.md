# Decision 0013 — Installer signing, Homebrew formula, and the `aieos` CLI
Type: report
Date: 2026-06-29
Tier: T2 (Tactical — distribution)
Council: none (direct human mandate; final distribution backlog)
Status: CLOSED — built and verified where possible (2026-06-29)

## Summary
Closes the remaining distribution backlog: code-signing/notarization for both installers
(gated on maintainer secrets), a Homebrew formula, and a small `aieos` CLI that makes the
system feel like a normal command-line tool. Gate stays green (**14 rules, 0/0**).

## Built
- **`aieos` CLI** (`bin/aieos`, wired via the package.json `bin` field) — a thin dispatcher
  over the existing scripts: `aieos setup | teardown | conformance | audio | memory:push |
  version`. Verified locally (`version`, `help`, unknown-command → exit 1). Identical behavior
  to `npm run <x>`.
- **Homebrew formula** (`installer/homebrew/aieos.rb` + README) — installs AIEOS into
  `libexec`, runs `npm install`, exposes the `aieos` CLI, and explains activation
  (`aieos setup`) in its caveats (Homebrew should not silently write to `~/.claude`). HEAD-based
  until a tagged release fills the `stable` url + sha256. Lives here as source of truth; it is
  copied into a `homebrew-aieos` tap to publish.
- **Signing in CI** (`.github/workflows/release.yml`) — conditional, secret-gated steps:
  - Windows: `signtool sign … /fd sha256 /tr <timestamp>` on the `.exe` when
    `WINDOWS_CERT_BASE64` is set.
  - macOS: import the Developer ID cert into a temp keychain, `productsign` the `.pkg`, then
    `notarytool submit --wait` + `stapler staple` when `MACOS_CERT_BASE64` is set.
  The gate-on-`env` pattern is used (the `secrets` context is invalid in a step `if`), so
  unsigned builds still work and signing turns on the moment the secrets exist.
- **`installer/signing.md`** documents exactly which repository secrets to add.

## Honest limitations
- Certificates are issued by a CA (Windows) / Apple (macOS) and cannot be generated here —
  they are maintainer-provided. The signing steps are authored and gated but unexercised on
  this machine (no certs, no macOS runner). The Homebrew formula needs the real owner and, for
  a stable channel, the release tarball's sha256.

## Memory updates
- This record; its audio summary (`resumo/audio/0013-resumo.*`); the CHANGELOG entry.
