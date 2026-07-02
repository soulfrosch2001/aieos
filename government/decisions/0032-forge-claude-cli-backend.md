# Decision 0032 — Forge: claude-cli backend — live runs on the subscription, zero API cost (kernel 1.16.0)
Type: report
Date: 2026-07-02
Tier: T2 (Coordination — additive backend, opt-in via env var; no law/contract change)
Council: none (mechanical, verifiable change; direct build per cost policy)
Status: CLOSED — built and verified LIVE (2026-07-02)

## Context
Decision 0031 closed the architecture gap; the remaining lever was a stronger live model.
The obvious path (Anthropic API) bills per token, and the maintainer declined it: "não
quero utilizar api, pois o custo dela será maior do que assinar um plano". The maintainer
already pays for a Claude subscription that covers Claude Code — including its headless
mode (`claude -p`), which local programs may call. So the fix is a second live backend:
let Forge think through the local Claude Code CLI on subscription auth. No API key, no
per-token billing; usage draws on the plan's existing limits.

## Built

### `backend-claude-cli.mjs` + `FORGE_BACKEND=claude-cli`
For each reasoning step, the runtime renders (system prompt + tool catalog + transcript)
into one prompt, runs `claude -p --output-format json` once, and parses the reply back
into the same `{content, stop_reason, usage}` shape the API path returns — `loop.mjs`
never knows which backend thought.

**The division of labour is the safety design.** The CLI is ONLY the brain:
- Its own toolbox (Bash, Edit, Write, Read, Glob, WebFetch, Task, …) is explicitly
  disallowed on every call — it cannot touch files, network, or processes.
- It replies with one JSON object naming which FORGE tool to run next; Forge's runtime
  executes it under all existing law (workspace confinement, Directive #9
  gate-before-finish, depth caps, critic, checkpoints, trace).
- A brain that cannot act cannot bypass the runtime's guardrails.

**Robust by construction:** the prompt travels via stdin (no argv quoting or length
limits, `shell: true` only to resolve the Windows `claude.cmd` shim); replies wrapped in
fences or stray prose are parsed tolerantly; a reply with no usable tool call degrades to
a text-only turn that the loop's existing "use a tool" nudge already handles; a dead or
missing CLI fails preflight fast (probed with `--version` — free, no prompt spent).

**The cost router still routes.** Per-step model ids go through `--model`, and the CLI
accepts aliases — `FORGE_MODEL_CHEAP=haiku`, `FORGE_MODEL_MID=sonnet`, `FORGE_MODEL=opus`
gives the cheap-first ladder on subscription auth. With no model vars, the CLI's default
model is used: this backend requires NEITHER `FORGE_MODEL` NOR `ANTHROPIC_API_KEY`
(run.mjs's live-run guard now excepts it).

### Installed on this machine
The maintainer used Claude Code only through the VSCode extension — no `claude` binary on
PATH. Installed `@anthropic-ai/claude-code` globally via npm (v2.1.198); the CLI shares
the existing `~/.claude` subscription credentials, so no separate login was needed.

## Verified — LIVE, not just dry-run
- Auth probe: `claude -p` answered a trivial prompt on subscription auth (haiku), no API
  key present anywhere in the environment.
- **Full live Forge run through the backend**: `FORGE_BACKEND=claude-cli FORGE_MODEL=haiku
  node forge/run.mjs --smoke` → preflight `claude-cli … subscription auth`, real model
  reasoning ("Smoke test: list the repo root and verify the Forge agent flow end-to-end"),
  JSON protocol parsed, `list_dir` executed by the RUNTIME, `outcome: done`, real token
  usage recorded in the trace (10 in / 2175 out). This is the entire pipeline —
  prompt rendering → headless CLI → protocol parse → tool execution → trace — proven
  against the real subscription, end to end.
- Full offline regression unchanged: 13 dry-run scenarios green, unit tests 13/13, gate
  14 rules 0/0 CONFORMANT.

## Honest bounds
- Headless CLI calls are SLOW relative to raw API calls (seconds per step — the smoke's
  two steps took ~26s). Fine for background agent runs; not for interactive latency.
- Usage draws on the subscription's rate windows. A heavy Forge fleet shares the same
  budget the maintainer's interactive sessions use — the cheap-first router ladder
  (haiku for the easy majority) is the mitigation, same policy as ever.
- Single attempt per call in v1 (no retry/backoff on the CLI path yet); a transient CLI
  failure surfaces as a clear error rather than being silently retried.

## How to use (the whole thing)
```
setx FORGE_BACKEND claude-cli
setx FORGE_MODEL_CHEAP haiku
setx FORGE_MODEL_MID sonnet
setx FORGE_MODEL opus
node forge/run.mjs forge/examples/balance-scout "your real goal"
```

## Memory updates
- This record; its audio summary (`resumo/audio/0032-resumo.*`); `forge-lessons.md` gains
  entries from the verification runs (automatic, trusted-runtime write).
