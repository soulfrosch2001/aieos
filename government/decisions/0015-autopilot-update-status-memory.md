# Decision 0015 — Autopilot: self-update, status hub, automatic guarded memory
Type: report
Date: 2026-06-29
Tier: T3 (Strategic — distribution + automation, Directive #7)
Council: none (direct human mandate)
Status: CLOSED — built and verified; one dependency on the human (repo visibility)

## Summary
Turns AIEOS into an "autopilot": it **updates itself** from GitHub without a reinstall,
**captures conversations as memory and pushes them automatically** (the security guard keeps
anything sensitive out), and exposes a **status hub**. The autopilot hooks are now installed by
`npm run setup`, so every user gets them. Gate: **14 rules, 0/0**.

## Built
- **Self-update** (`scripts/update.mjs`, `aieos update [--check]`) — pulls the latest version
  in place: `git pull` on a checkout, or a GitHub tarball overlay on the installed copy. Local
  memory (`memory/ledger`) and `node_modules` are preserved; then `npm install` + re-`setup`.
- **Status hub** (`scripts/status.mjs`, `aieos status`) — a one-glance panel: version + update
  availability, install root, conformance rule count, memory ledger/quarantine counts, git
  sync, `/aieos` command presence, Node version.
- **Autopilot sync** (`scripts/auto-sync.mjs`, a **SessionStart** hook) — throttled (≤ every
  20 min; update check ≤ daily) and fully fail-silent. It self-updates if newer, then runs the
  guarded memory push. Disable with `AIEOS_NO_AUTOSYNC=1`.
- **Hooks now part of the install** — `install-command.mjs` registers `Stop → memory-capture`
  and `SessionStart → auto-sync` in `~/.claude/settings.json` (preserving any existing hooks,
  de-duplicated by script name); `teardown-command.mjs` removes exactly these.
- `aieos update` / `aieos status` added to the CLI; `repository` added to package.json.

## Security note (the "no sensitive info" requirement)
Automatic memory push is safe **because the guard is unchanged and runs twice**: on capture
(`memory-guard.mjs` redacts secrets, quarantines dangerous content, stores everything inert)
and again in `memory-push.mjs` before anything leaves. Nothing flagged is ever pushed.

## Honest limitation — repository must be PUBLIC for end-user auto-update
`update --check` returned HTTP 404: the GitHub repo is currently **private**. Consequences:
- **You / the admin machine** (an authenticated git checkout): `git pull` self-update works
  even while private. ✅
- **End users** (the installed copy, no credentials): the tarball/raw fetch needs the repo (or
  public release assets) to be **public**. Until then, end-user auto-update is inert (fails
  silently); the rest works. Auto memory-**push** works for anyone with push credentials.
Action for the human: make `soulfrosch2001/aieos` public (you were going open-source anyway),
or host public release assets, to enable end-user auto-update.

## Memory updates
- This record; its audio summary (`resumo/audio/0015-resumo.*`); the CHANGELOG entry.
