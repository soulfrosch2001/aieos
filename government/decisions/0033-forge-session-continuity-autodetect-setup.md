# Decision 0033 — Forge: session continuity, backend auto-detection, one-command setup, Fable on the ladder (kernel 1.17.0)
Type: report
Date: 2026-07-02
Tier: T2 (Coordination — additive runtime/tooling changes; no law/contract change)
Council: none (mechanical, verifiable changes; direct build per cost policy)
Status: CLOSED — built and verified LIVE (2026-07-02)

## Context
After 0032 put Forge on the subscription, the maintainer asked three things: (1) will
other users/machines get this automatically? (no — CLI, login and env are per-machine),
(2) what more can close the gap to identical? and (3) how do we match Fable-5-like
delivery time and token consumption? The maintainer authorized building all of it
("faça tudo pfvr"). Four pieces shipped.

## Built

### 1. Session continuity (the time/token lever)
Previously every step re-sent the whole rendered transcript to a fresh `claude -p`
process — slow, and input tokens grew with the run. Now the first call of a run remembers
the CLI session id it created, and every later call RESUMES it (`--resume`) sending ONLY
the newest observation; the server-side session plus prompt caching carries the history.
Engineering details that matter:
- The session anchor is the run's FIRST message OBJECT (a WeakMap key): `trimMessages`
  preserves that object by reference for the whole run, while critic/deliberation
  one-shot calls use different arrays — so concurrent runs and side-calls never
  cross-talk, and a finished run's entry is garbage-collected with it.
- `--resume` may FORK to a new session id; the returned id is re-stored after every call,
  so the chain follows wherever the CLI leads.
- ANY resume failure (dead session, model-switch refusal, non-JSON output) falls back to
  a fresh full-prompt call and a new session — continuity is an optimization, never a
  correctness dependency.
- Each step's trace usage now records `session: new|resumed|restarted` and
  `cache_read_input_tokens`, so the saving is auditable per step, per run.
- The protocol prompt now tells the brain to BATCH independent tool calls in one reply —
  fewer round-trips (observed immediately: the live smoke finished in ONE step, the model
  batching list_dir + finish).

### 2. Backend auto-detection (zero-config for every user)
Resolution order in `llm.mjs`: explicit `FORGE_BACKEND=claude-cli` → forced subscription;
any other explicit backend → honored; `ANTHROPIC_API_KEY` present → API (unchanged); else,
if the `claude` binary is on PATH → subscription automatically. A machine with Claude Code
logged in runs Forge live with NOTHING configured. The CLI availability probe
(`--version`, free) is cached per process. `run.mjs` now demands `FORGE_MODEL` only when
the API path is certain (key present, no other backend forced).

### 3. `forge/setup.mjs` — one-command new-machine setup
Idempotent, non-destructive: (1) installs `@anthropic-ai/claude-code` globally if the CLI
is missing; (2) DETECTS the subscription login and prints the one manual step if absent —
deliberately never automates identity; (3) persists `FORGE_BACKEND` + the model ladder
(Windows `setx`; elsewhere prints the export lines); (4) prints the smoke command.
Defaults haiku → sonnet → opus; `--strong claude-fable-5` for plans that include Fable.
The maintainer's friend gets identical behaviour with `git pull` + `node forge/setup.mjs`.

### 4. Fable itself on this machine's ladder
Ran the setup with `--strong claude-fable-5` and confirmed the persisted user environment:
`FORGE_BACKEND=claude-cli`, cheap `haiku`, mid `sonnet`, strong `claude-fable-5`. When a
gate fails or a checkpoint flags stagnation, the escalation tier is now literally the
Fable 5 model — the piece of the similarity score that architecture alone could not reach,
delivered through the subscription at no extra cost.

## Verified — LIVE
- Auto-detection: a run with NO `FORGE_BACKEND` and no key printed
  `mode=claude-cli (auto)` and ran live on the subscription.
- Session continuity, measured on a forced 3-step run (haiku):
  - step 1: `session: new`, 10 in / 14,632 cache-read, 6.3s
  - step 2: `session: resumed`, **10 input tokens** (the delta), 25,484 cache-read, **3.1s**
  - step 3: `session: resumed`, 10 in, 25,711 cache-read, 5.7s
  Before this change each step re-sent ~2.5k+ growing input tokens; now a resumed step
  costs ~10. Latency on the resumed step nearly halved.
- Batching: the plain live smoke completed in one step (list_dir + finish in one reply).
- Setup script: ran end-to-end on this machine (CLI present → detected; login → detected;
  ladder persisted and read back from the user environment).
- Offline regression unchanged: 13 dry-run scenarios green, unit tests 13/13, gate 14
  rules 0/0 CONFORMANT.

## Honest bounds
- Per-step floor remains the CLI process start (~2–3s) even when resumed — identical
  interactive latency to an in-context frontier model is not reachable through headless
  calls; token PROFILE, however, is now close (delta-only input, cached history).
- Resumed sessions still count against the subscription's usage windows; the cheap-first
  ladder remains the budget policy.
- `setup.mjs` intentionally does not automate login — credentials are a human act.

## Memory updates
- This record; its audio summary (`resumo/audio/0033-resumo.*`); `forge-lessons.md` gains
  entries from the verification runs (automatic, trusted-runtime write).
