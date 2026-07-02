# Decision 0035 — Installer: every machine comes out with the Forge subscription backend (kernel 1.19.0)
Type: report
Date: 2026-07-02
Tier: T1 (Support — distribution wiring for already-decided features; one convergence hook)
Council: none (mechanical, verifiable change)
Status: CLOSED — built and verified (2026-07-02)

## Context
The maintainer asked for the new Forge capabilities to be part of the system installer,
so every user/machine comes out configured alike ("atualize no instalador do sistema").

## Built
One hook at the single point where every setup path already converges:
`scripts/install-command.mjs` — called by the Inno installer (post-install.ps1), by a
manual `npm run setup`, and by `aieos update` — now runs `forge/setup.mjs` as its final
step. Any machine that installs OR updates AIEOS gets the subscription backend (claude
CLI installed if missing, login detected, model ladder persisted) automatically.

The prerequisite that made this safe: `forge/setup.mjs` now PRESERVES existing values —
it reads the authoritative user environment (Windows registry hive, not the process's
possibly-stale env) and only fills what is missing; `--force` overwrites explicitly. An
update can therefore never clobber a maintainer's custom ladder (this machine's
strong=claude-fable-5 survived the re-run, verified). The Forge step is best-effort by
design: a machine without npm-global rights or a Claude login still completes AIEOS
registration — the step reports and moves on.

## Verified
- `node forge/setup.mjs` re-run on this machine: all four values reported as
  "kept existing", registry confirmed intact (strong still claude-fable-5).
- `node scripts/install-command.mjs` end-to-end: /aieos command + hooks + bootstrap
  registered, Forge step ran and preserved the ladder, exit 0.
- Gate: 14 rules, 0 errors / 0 warnings, CONFORMANT.

## Memory updates
- This record; its audio summary (resumo/audio/0035-resumo.*).
