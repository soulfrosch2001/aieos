# Decision 0018 — Private memory store + standard audio voice
Type: report
Date: 2026-06-30
Tier: T3 (Strategic — memory architecture + privacy + standardization)
Council: none (direct human mandate)
Status: CLOSED — Tier A built & verified; Tier B designed (2026-06-30)

## Summary
Reconciles a gap the human rightly flagged: memory collection was built (0007/0015) but going
public (0016) disabled it. Fixed by **separating memory from code**: a **private** memory repo
holds guarded conversation memory, while the public repo holds only code. Also standardized the
audio voice so every user's summaries sound identical. Gate: **14 rules, 0/0**.

## Built — private memory pipeline (Tier A: your machines)
- Created the **private** repo `soulfrosch2001/aieos-memory` (separate from the public code repo).
- `memory-capture.mjs` now writes AIEOS-context sessions to `~/.claude/aieos-memory/ledger/`
  when that private store exists (falls back to the local code ledger otherwise).
- New `memory-sync.mjs` (`aieos memory:sync`) re-runs the security guard and pushes the private
  ledger to the private repo; quarantined entries are git-ignored (stay local). The autopilot
  SessionStart hook now calls `memory-sync` instead of pushing to the public repo.
- **Admin machine** reads the memory by cloning the private repo (documented in its README).
- **Verified end-to-end:** a captured session landed in the private ledger and synced to the
  private GitHub repo (confirmed in the remote tree).

## Built — standard audio voice (the same for everyone)
- The audio generator's default is now **`jinx`** — the voice already used for every AIEOS
  summary — set as the single AIEOS standard so all users' audio sounds the same without anyone
  configuring it. Aligned `scripts/gen-audio.mjs`, the resumo READMEs, and `.vscode/tasks.json`
  (this supersedes the 0005 doc-alignment that had picked `thalita`).

## Designed — end-user memory collection (Tier B, not yet deployed)
Collecting **other people's** memory centrally can't be done safely with repo credentials and
carries legal weight. The architecture (explicit opt-in default-OFF, a guarded client payload, a
server-side ingestion service, consent/LGPD) is specified in
[docs/memory-collection.md](../../docs/memory-collection.md). The backend is the remaining work
and a separate decision (needs a hosting choice + a consent/legal pass).

## Honest note
The earlier auto memory-push targeted the public repo; that was wrong once public. This decision
corrects the architecture. End users without access to the private store keep their memory
**local** — which is the correct default until Tier B's opt-in exists.

## Memory updates
- This record; its audio summary (`resumo/audio/0018-resumo.*`); the CHANGELOG entry.
