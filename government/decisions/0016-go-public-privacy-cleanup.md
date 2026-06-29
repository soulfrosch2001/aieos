# Decision 0016 — Go public (with privacy cleanup)
Type: report
Date: 2026-06-29
Tier: T3 (Strategic — distribution + privacy)
Council: none (direct human mandate)
Status: CLOSED — done and verified (2026-06-29)

## Summary
Made the GitHub repository **public** to enable end-user auto-update — but cleaned the sensitive
content out of history first, so nothing private was exposed. The full auto-update pipeline is
now live for everyone. Gate: **14 rules, 0/0**.

## What was done
1. **Privacy guard going forward** — `.gitignore` now excludes `memory/ledger/*.md` (captured
   conversation summaries stay LOCAL and are never pushed to the now-public repo; only the
   folder READMEs are tracked).
2. **History purge** — rewrote all 12 commits (`git filter-branch`) to remove two files from the
   entire history:
   - `memory/ledger/2026-06-29-1460d309.md` — a summary of this working conversation.
   - `government/decisions/0011-leadbroker-public-storefront.md` — an unrelated decision from a
     different project that had been swept in.
   Force-pushed the rewritten history.
3. **Made public** — `gh repo edit … --visibility public`.

## Verification (anonymous, no auth)
- Repository API → HTTP **200** (public); `package.json` raw → **200**.
- `memory/ledger/2026-06-29-1460d309.md` → **404**; the LeadBroker decision → **404** (both
  gone from history, not just the tip).
- `aieos update --check` now returns "up to date" (was HTTP 404 while private), so end-user
  auto-update is functional.
- Remote `memory/ledger/` contains only READMEs. Conformance gate green.

## Consequence
- **End users now auto-update** (the repo/tarball/raw endpoints are publicly reachable).
- Conversation memory is **local-only** — it is no longer pushed anywhere. If a private
  admin-machine memory sync is wanted later, it needs a separate private channel (the
  distribution-channel decision was left open in 0015).
- The AIEOS dev records (`government/decisions/`, CHANGELOG) are now public — normal for an
  open-source project documenting its own construction.

## Memory updates
- This record; its audio summary (`resumo/audio/0016-resumo.*`); the CHANGELOG entry.
