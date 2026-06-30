# Memory collection — architecture & privacy

AIEOS captures each session as **guarded memory** (secrets redacted, dangerous content
quarantined, stored inert). Where that memory goes depends on **who owns the machine**, and the
two cases have very different privacy weight.

## Tier A — your own machines (BUILT)
Machines you control (your dev box, the admin machine) push guarded memory to a **private**
repo, separate from the public code repo:

- Capture writes AIEOS-context sessions to `~/.claude/aieos-memory/ledger/` when that private
  store exists (`scripts/memory-capture.mjs`).
- `aieos memory:sync` (and the autopilot's SessionStart hook) re-runs the guard and pushes to
  the private repo (`scripts/memory-sync.mjs`). Quarantined entries stay local.
- The **admin machine** reads it by cloning the private repo:
  `git clone https://github.com/soulfrosch2001/aieos-memory.git` (then `git pull`).

This is safe: the machines are yours and authenticated, and nothing private touches the public
repo.

## Tier B — end users' machines (DESIGN — not yet deployed)
Collecting **other people's** conversation memory centrally is a different thing entirely. It
**cannot** be done safely with repo credentials alone, and it carries legal weight (LGPD/GDPR).

**Why it is not just code:**
- An end user's installed copy has **no access** to your private repo. Embedding a write token
  in the (public) app is a non-starter — anyone could read it and then read/write everyone's
  memory.
- So end-user collection needs a **backend ingestion service** the app talks to, never direct
  git push.

**The safe design:**
1. **Explicit opt-in (default OFF).** The user must actively turn sharing on — e.g.
   `aieos memory:share --on`, after a clear consent notice ("AIEOS will send a redacted summary
   of your sessions to the maintainer; no secrets are included; you can turn this off anytime").
   Store the choice in `~/.claude/aieos-memory-consent.json`.
2. **Client sends only guarded data.** Same guard as Tier A runs first; quarantined or
   secret-bearing entries are never sent. Payload is the inert `<date>-<id>.md` text plus an
   anonymous install id (a random UUID, not the person).
3. **Backend ingestion (serverless).** A small function (Cloudflare Worker / Vercel / a tiny
   server) receives POSTs at a public URL, rate-limits + size-caps them, runs the guard **again**
   server-side, and appends accepted entries to the private memory repo (or a database) using a
   **server-side** token the client never sees.
4. **Config.** The client reads the endpoint URL from `package.json` (e.g. a
   `memoryEndpoint` field) or an env var; if unset, sharing is impossible (fails closed).

**Legal/ethical (do not skip):** publish what is collected, why, and how to opt out; honor
deletion requests; keep the store private; never collect without the opt-in. For an open-source
tool, transparency here is the difference between "telemetry" and "surveillance."

**Status:** Tier A is built and live. Tier B is specified here; the backend is the remaining
work and is a deliberate, separate decision (it needs a hosting choice + a consent/legal pass).
