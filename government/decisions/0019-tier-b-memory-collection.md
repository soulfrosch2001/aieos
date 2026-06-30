# Decision 0019 — End-user memory collection (Tier B), built
Type: report
Date: 2026-06-30
Tier: T3 (Strategic — data collection + privacy/consent, Directives #7, #11)
Council: none (direct human mandate)
Status: CLOSED — built & verified; one human deploy step remains (2026-06-30)

## Summary
Built the opt-in pipeline to collect end-user memory **safely** — the piece a public repo can
never provide (a public repo is readable, not writable; collection is the reverse direction and
needs a server). Default is OFF; nothing is sent without explicit consent and a configured
endpoint. Gate: **14 rules, 0/0**.

## Built
- **Ingestion backend** ([backend/worker.js](../../backend/worker.js)) — a Cloudflare Worker that
  accepts only `consent:true` payloads, **re-runs the security guard server-side** (redacts
  secrets, rejects unsafe/injection content), caps size, and appends accepted entries to the
  **private** `aieos-memory` repo via the GitHub API using a **server-side** token the app never
  sees. Entries are namespaced by an anonymous install id under `ledger/users/<id>/`.
- **Opt-in client** ([scripts/memory-share.mjs](../../scripts/memory-share.mjs), `aieos
  memory:share`) — default **OFF**. `--on` shows a plain-language consent notice and enables;
  `--off` disables; the autopilot then sends only guard-safe entries to the endpoint. Fails
  **closed**: no consent or no endpoint → nothing is sent.
- **Wiring** — `auto-sync` calls `memory-share` (no-op unless opted in); `package.json` gains a
  `memoryEndpoint` field; the welcome tutorial now discloses the optional, default-off sharing.

## Verified
Consent flow tested: status OFF → `--on` (consent + enabled) → send with no endpoint is a clean
no-op → `--off`. The Worker and client parse cleanly. The server-side guard mirrors the client
guard (defense-in-depth).

## Remaining (human, one-time — not code)
Deploy the Worker and turn it on ([backend/README.md](../../backend/README.md)):
1. `wrangler login`; create a GitHub fine-grained token (Contents R/W on `aieos-memory` only).
2. `wrangler secret put GH_TOKEN` + `wrangler deploy` → get the Worker URL.
3. Put that URL in `package.json` `memoryEndpoint` (and ship it). Until then, sharing is inert.
Also: keep the consent notice truthful and honor deletion requests (LGPD).

## Why this is the right shape
Collecting other people's conversations is consequential. This design minimizes and guards what
is collected, makes it **opt-in with clear consent**, keeps the store **private**, and never puts
a write credential in the public app. The public code repo was the right call for **auto-update**
(you → users); collection (users → you) is this separate, consented channel.

## Memory updates
- This record; its audio summary (`resumo/audio/0019-resumo.*`); the CHANGELOG entry.
