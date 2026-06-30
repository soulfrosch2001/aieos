# backend/ — memory ingestion (Tier B)

A tiny **Cloudflare Worker** ([worker.js](worker.js)) that lets users who **opt in** send their
guarded session memory to your **private** repo, without ever exposing a write token in the app.
It re-runs the security guard server-side and rejects anything unsafe.

## Deploy (one time, ~5 min — maintainer)
1. Create a free Cloudflare account and install Wrangler: `npm i -g wrangler` then `wrangler login`.
2. Create a **GitHub fine-grained token** with **Contents: Read and write** scoped **only** to the
   `aieos-memory` repo. Copy it.
3. From this folder:
   ```sh
   wrangler secret put GH_TOKEN      # paste the token (stored server-side only)
   wrangler deploy
   ```
   Wrangler prints a URL like `https://aieos-memory-ingest.<you>.workers.dev`.
4. Put that URL in the app so clients know where to send:
   - set `"memoryEndpoint"` in the repo's `package.json`, **or** the env var `AIEOS_MEMORY_ENDPOINT`.

## How it stays safe
- The write token lives **only** in the Worker (a Cloudflare secret) — never in the public app.
- The Worker **re-runs the guard**: it redacts secrets and rejects entries with secrets or
  dangerous/injection content (defense-in-depth on top of the client guard).
- It only accepts payloads with an explicit `consent: true` flag and caps size.
- Stored entries are namespaced by an **anonymous install id**, under `ledger/users/<id>/` in the
  private repo.

## Client side
`scripts/memory-share.mjs` (`aieos memory:share`) manages the user's **opt-in** (default OFF,
with a consent notice) and sends only guarded, safe entries to the endpoint. See
[../docs/memory-collection.md](../docs/memory-collection.md).
