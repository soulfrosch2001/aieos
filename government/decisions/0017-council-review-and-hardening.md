# Decision 0017 — Council review + hardening (post-public, autopilot)
Type: report
Date: 2026-06-29
Tier: T3 (Strategic — security + robustness, Directives #7, #11)
Council: System Review Council (non-standing) — 4 members
Status: CLOSED — reviewed, top items built and verified (2026-06-29)

## Summary
A four-member council reviewed the system after going public and adding the autopilot:
autopilot robustness, security/privacy, end-user UX, and architecture. The highest-value and
security-critical findings were fixed this round; the rest are recorded as backlog. Gate:
**14 rules, 0/0**. The distributable `.exe` was rebuilt (and slimmed 13.7 MB → 3.8 MB).

## Built (this round)
**Security (the one true leak — fixed immediately):**
- **Purged a personal voice recording** (`…/resumo/audio/minha voz gravada.m4a`) that was
  tracked and **publicly accessible (HTTP 200)**. Rewrote history, force-pushed; the GitHub
  tree/API now return **404** (raw CDN cache expires shortly). Added `*.m4a`/`*.wav` ignores so
  only `NNNN-resumo.*` decision summaries can ever be published.
- **Excluded `resumo/audio` + `resumo/pdf` from the installer** — the prior `.exe` had bundled
  the voice file; the new one does not (and is 3.8 MB instead of 13.7 MB).

**Autopilot robustness (High):**
- `update.mjs`: **guard on `npm install` failure** (abort instead of re-registering a broken
  install); **archive sanity** (require a `package.json` in the extracted tarball before
  overlaying); **semantic version comparison** (no more string compare — fixes "0.10.0" vs
  "0.2.0"). `status.mjs` uses the same compare.

**UX (High):**
- The welcome tutorial now explains **auto-update** ("updates arrive automatically, no
  reinstall") and that **memory stays local** (guarded).

## Council findings deferred (recorded backlog)
- **Autopilot:** fully atomic overlay with staging+rollback; delete files removed upstream
  (overlay currently only adds/overwrites); lock the throttle file against the SessionStart/Stop
  race.
- **Conformance/arch:** a `package.json ↔ installer` version-sync rule (note: `kernel/VERSION`
  1.9.0 and `package.json` 0.1.0 are intentionally different namespaces — kernel vs product);
  upgrade `orphan-entity` to error + word-boundary match; a memory ledger→registers promotion
  tracker; a duplicate-install guard for two checkouts on one machine; a `package-scripts-exist`
  rule; inject the installer version from `package.json` in CI.
- **UX:** a clickable status/update entry point (CLI is invisible to non-technical users); a
  desktop shortcut.
- **Security:** a dedicated security contact (vs a personal Gmail) / GitHub advisory form; a
  typosquat note in the README; document signed-vs-unsigned build status.

## Memory updates
- This record; its audio summary (`resumo/audio/0017-resumo.*`); the CHANGELOG entry.
