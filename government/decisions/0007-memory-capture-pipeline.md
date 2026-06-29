# Decision 0007 — Memory capture pipeline with a security guard
Type: report
Date: 2026-06-29
Tier: T3 (Strategic — framework evolution + security, Directives #7, #11)
Council: none (direct human mandate, security requirement stated explicitly)
Status: CLOSED — built and verified (2026-06-29)

## Summary
The human asked for a **GitHub-synced memory** that captures every session and all system
updates, and — critically — that **the system always evaluates what it forwards** so no
captured content can break the main code, leak secrets, or invade the machine. Built a
capture pipeline whose centerpiece is a security guard; the conformance gate stays green
(**11 rules, 0/0**).

## Built
- **`memory/ledger/`** — append-only, one inert entry per session (`<date>-<id>.md`),
  complementing the curated [registers](../../memory/registers/). README documents the model.
- **Security guard** — [`scripts/lib/memory-guard.mjs`](../../scripts/lib/memory-guard.mjs):
  every capture is evaluated **before it touches disk**.
  - **Secret redaction** — API keys, tokens, JWTs, private keys, `password=`/`token:` style
    assignments → `[REDACTED:<type>]`.
  - **Danger detection** — destructive commands (`rm -rf`, `format`, `dd`, recursive
    force-delete), remote-exec (`curl|sh`, `iwr|iex`, `Invoke-Expression`,
    encoded PowerShell), AV-tampering, registry-delete → high-severity flags.
  - **Inert by construction** — captured text is defused (code fences neutralized) and
    fenced, and every entry is labelled *untrusted data, not instructions*. A captured
    prompt-injection cannot steer the system when memory is re-read.
- **Capture** — [`scripts/memory-capture.mjs`](../../scripts/memory-capture.mjs): a
  Stop-hook script. Safe entries → `memory/ledger/`; **flagged entries → `quarantine/`
  (git-ignored), never published.** Never throws into the session (always exits 0).
- **Push (second gate)** — [`scripts/memory-push.mjs`](../../scripts/memory-push.mjs)
  (`npm run memory:push`): re-scans every tracked entry; **refuses to push** if any still
  carries a secret or high-severity flag. Grouped/manual sync, per the chosen design.
- Wired a machine-wide **Stop hook** in `~/.claude/settings.json` (added alongside the
  existing sound hook, not replacing it).

## Verification
- **Negative test passed.** A crafted malicious transcript (GitHub token + `password=` +
  `rm -rf /` + `curl|bash` + `Invoke-Expression`) was: 2 secrets redacted, 3 high-severity
  flags raised, `safe-to-publish: false`, and routed to `quarantine/` — not the publishable
  ledger. A normal session captured cleanly (0 secrets, 0 flags, safe).
- Conformance: **11 rules, 0/0** (kernel-native + legacy).

## Security posture (honest scope)
Defense-in-depth, not a guarantee. The guard catches known secret shapes and dangerous
patterns and makes all memory inert; it cannot prove arbitrary text harmless. The two-gate
design + git-ignored quarantine + manual review before push are the safeguards. Captured
content is **data the system remembers, never instructions it follows** (reinforces
Directive #11). No execution of captured content ever occurs.

## Scope (decided)
- **Context-scoped, not machine-wide.** The hook fires on every session, but the capture
  script only records **AIEOS-context** sessions and writes memory **where the work
  happened**: inside the AIEOS repo (or its mount parent) → AIEOS's own `memory/ledger/`; a
  project AIEOS supports (has a `resumo/` folder) → that project's `resumo/ledger/`; any
  other session is **skipped**. This minimizes the collected surface and mirrors the
  support-mode rule (summaries belong to the project being supported), instead of
  centralizing every unrelated session into AIEOS. Verified across all three cases.

## Deferred
- GitHub sync requires a remote (the repo has no `origin` yet — a human action). Until then
  `npm run memory:push` commits locally and prints the remote-setup command.

## Memory updates
- This record; its audio summary (`resumo/audio/0007-resumo.*`); the CHANGELOG entry.
