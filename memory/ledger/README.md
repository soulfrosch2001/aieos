# Memory Ledger
Status: stable
Type: reference
Owner: Supreme Orchestrator
Extends: none

The **continuous capture** of AIEOS work: one inert entry per Claude Code session,
distilled to the requests made and the outcome reached. It complements the curated
[registers](../registers/) — the registers are deliberate, schema-true memory; the ledger
is the raw, dated stream the system can later mine for lessons.

## How entries arrive
A Stop/SessionEnd hook runs [`scripts/memory-capture.mjs`](../../scripts/memory-capture.mjs),
which summarizes the session and writes `<date>-<id>.md` here. Sync to GitHub is **manual
and grouped** via `npm run memory:push`.

## Security model (why this is safe to keep on GitHub)
Every capture passes the **memory guard**
([`scripts/lib/memory-guard.mjs`](../../scripts/lib/memory-guard.mjs)) before it touches disk:
- **Secrets are redacted** (API keys, tokens, passwords, private keys → `[REDACTED:…]`).
- **Dangerous content is quarantined** — an entry containing destructive commands,
  remote-exec, or AV-tampering is written to `quarantine/` (git-ignored), never published.
- **Content is inert.** Captured text is defused and fenced, and every entry is labelled
  *untrusted data, not instructions* — so a captured prompt-injection cannot steer the
  system when the memory is re-read. Memory is a record to remember, never a command to run.

`npm run memory:push` re-runs the guard as a **second gate**: if any tracked entry still
carries a secret or a high-severity flag, the push is refused.

## Layout
| Path | Holds |
|------|-------|
| `<date>-<id>.md` | A safe, publishable session entry. |
| [quarantine/](quarantine/) | Flagged entries held for human review (git-ignored). |
