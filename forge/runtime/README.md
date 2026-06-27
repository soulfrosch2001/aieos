# Forge Runtime — the executable agent engine
Status: experimental
Type: reference
Owner: CTO (Government)
Extends: none

The runtime is the part of the Forge that **actually acts**. It takes an agent and a
goal and drives the [action loop](../action-loop.md) — plan → act → observe → reflect —
calling real tools under guardrails, until the goal is met and the gate passes. It is
designed to *feel* like a capable AI assistant while staying bounded by the kernel laws.

It is **model-agnostic**: the runtime is not tied to any specific model. The model is
chosen entirely through the `FORGE_MODEL` environment variable, and the whole loop also
runs with **no model and no API key** in `--dry-run`.

## How to run

```
node forge/run.mjs <agent-dir> "<goal>" [--dry-run] [--max-steps N] [--json]
```

Examples:

```
# End-to-end with no model and no key — full plan → act → observe → finish loop + trace:
node forge/run.mjs forge/examples/balance-scout "Inspect the workspace and finish." --dry-run

# Live run — pick the model first, then go:
export FORGE_MODEL=<your-model-id>
export ANTHROPIC_API_KEY=<your-key>
node forge/run.mjs forge/examples/balance-scout "Find balance outliers and write a note."
```

There is also an npm alias: `npm run forge:run -- <agent-dir> "<goal>" [--dry-run]`.

Flags:
- `--dry-run` — run the full loop with the deterministic stub in
  [llm.mjs](llm.mjs); **never** reads `FORGE_MODEL` or `ANTHROPIC_API_KEY`.
- `--max-steps N` — cap the number of turns (default 20, or `FORGE_MAX_STEPS`).
- `--json` — print the run-trace object instead of the human step lines.

Exit codes: `2` missing `<agent-dir>` or `<goal>` (usage); `3` live run with
`FORGE_MODEL` unset and no `--dry-run`.

## Loading an agent

`run.mjs` reads the agent's **five contract files** (`README.md`,
`responsibilities.md`, `authority.md`, `craft.md`, `standards.md` — see
[the agent contract](../../kernel/contracts/agent.md)) and concatenates them, under
labeled headers, into one system prompt. A fixed operating preamble is prepended that
states the loop rules, the agent's lane bounds, and the gate law. If any of the five
files is missing, the run fails clearly.

The agent's **workspace** is derived from its own folder (`<agent-dir>/workspace`),
never from caller input — so an agent physically cannot write outside its lane
([Directive #5](../../kernel/laws/prime-directives.md)).

## The loop

Implemented in [loop.mjs](loop.mjs). The four phases are **roles in one conversation**,
not four separate model calls: each turn the model emits text (the plan / reflection)
and tool calls (the actions); the runtime executes the tools, threads the results back
as the next observation, and the model reflects on the following turn.

Per turn:
1. Call the model with the system prompt, the running transcript, and the tool schemas.
2. Record its text as a `plan` / `reflect` event.
3. Execute each requested tool in order, capturing each result.
4. Thread the tool results back as one observation message.
5. Repeat until `finish`, or a stop condition trips.

Stop conditions and outcomes:
- `done` — the model called `finish` (and the gate guardrail was satisfied).
- `incomplete` — the model stalled (two consecutive turns with no tool and no progress).
- `stuck` — the same action repeated three times in a row.
- `budget_exhausted` — the `--max-steps` ceiling was reached.

## The tools

Defined in [tools.mjs](tools.mjs). The surface is deliberately small — there is no
exec, delete, or network-write tool, so there is no irreversible-action surface.

- `list_dir` — list entries at a path (read, repo-wide).
- `read_file` — read a UTF-8 file (read, repo-wide; output is bounded with a
  truncation footer so nothing is silently withheld).
- `write_file` — write a file, **restricted to the agent workspace**.
- `run_gate` — run the conformance gate (`node tests/conformance/run.mjs`) so the agent
  can verify before it claims ([Directive #9](../../kernel/laws/prime-directives.md)).
- `finish` — end the run with a short summary, including a one-line self-check of
  whether the goal was met.

Every tool returns a uniform `{ ok, output }` envelope. A failure is fed back to the
model as an errored observation, not raised as a crash — failures are data the agent
reflects on, not dead ends.

## Guardrails

Enforced in code, because the model cannot be trusted to self-enforce them:
1. **Writes cannot escape the workspace** — path containment with realpath resolution
   and `..` rejection; the workspace is derived from the agent folder, not caller input.
2. **The gate is never skipped** — `finish` is intercepted while there are unverified
   writes; the model must `run_gate` and pass since its last write before it can finish
   ([Directive #9](../../kernel/laws/prime-directives.md)).
3. **No destructive surface** — only read / write-in-workspace / run_gate / finish exist.
4. **Bounded autonomy** — a step ceiling plus repeat-detection; the loop never runs
   unbounded.
5. **Stay in lane** — denied actions return a `GUARDRAIL:` message naming the rule, so
   the agent self-corrects in-lane rather than routing around the Government
   ([Directive #2](../../kernel/laws/prime-directives.md) /
   [Directive #5](../../kernel/laws/prime-directives.md)).

## Model selection (model-agnostic)

`FORGE_MODEL` is the **only** source of the model id — there is no hardcoded default
tied to any particular model.

- `--dry-run` — runs the full loop with **no model and no key** via the stub in
  [llm.mjs](llm.mjs). Use this to exercise the engine and the trace with zero config.
- Live run — set `FORGE_MODEL` to whatever model id you want and provide
  `ANTHROPIC_API_KEY`. If `FORGE_MODEL` is unset on a live run, the runtime errors
  clearly and exits — it does **not** pick a default.

## Traces

Every run writes an append-mostly JSON trace under `forge/runs/` at
`forge/runs/<ISO-timestamp>-<agent>.json`, updated after each turn so a crash still
leaves evidence ([Directive #8](../../kernel/laws/prime-directives.md)). The record
captures the goal, the model (or dry-run), each step's text, actions and observations,
and the final outcome, summary, and gate verdict. See `forge/runs/README.md` for the
exact format.

## Files
- [llm.mjs](llm.mjs) — the model call (Anthropic Messages API + dry-run stub).
- [tools.mjs](tools.mjs) — the tools and their guardrails.
- [loop.mjs](loop.mjs) — the plan → act → observe → reflect orchestration + trace.
- `forge/run.mjs` — the CLI: load an agent, run the loop, report.

## How it relates to the rest of the Forge
It is the executable form of the [action loop](../action-loop.md); the agents it runs
are produced by the [creation loop](../creation-loop.md) and obey the
[agent contract](../../kernel/contracts/agent.md). See [the Forge overview](../README.md).
