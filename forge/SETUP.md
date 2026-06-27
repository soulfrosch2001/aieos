# Forge Setup — going live and smoke-testing
Status: experimental
Type: reference
Owner: CTO (Government)
Extends: none

How to take the Forge runtime from a dry-run to a real, model-backed run, and how to
smoke-test the whole loop offline first. The runtime is **model-agnostic**: the only place
a model id is named is the `FORGE_MODEL` environment variable. Nothing here adds an npm
dependency — it is Node built-ins and the global `fetch` only.

## Offline smoke test (no key, no model)

Run the loop end-to-end with deterministic stubs — no API key, no model id, no network:

```
node forge/run.mjs --smoke --dry-run
```

`--smoke` runs a trivial, capped goal against the bundled example agent
([examples/balance-scout](examples/balance-scout/README.md)) and prints the outcome. It is
the fastest proof that the runtime, tools, gate hook, trace writer, and self-check
([runtime/eval.mjs](runtime/eval.mjs)) all work on this machine. Combine it with the
conformance gate as one preflight:

```
node tests/conformance/run.mjs && node forge/run.mjs --smoke --dry-run
```

## Going live

A live run needs two things in the environment:

- `FORGE_MODEL` — the model id to call. This is the **only** model coupling in the whole
  runtime; change providers by changing this value.
- `ANTHROPIC_API_KEY` — the API key for the Messages API
  ([runtime/llm.mjs](runtime/llm.mjs)).

With both set, point the runtime at any agent folder and give it a goal:

```
export FORGE_MODEL=<model-id>
export ANTHROPIC_API_KEY=<key>
node forge/run.mjs forge/examples/balance-scout "List the repo and finish."
```

On startup the runtime prints a banner echoing the model, dry-run state, and the step and
token ceilings, then runs a **preflight** readiness probe before spending a turn. If the
run is misconfigured (for example a live run with `FORGE_MODEL` unset) the preflight fails
fast with a clear reason instead of erroring mid-loop.

## Tuning knobs (all optional, all env-only)

| Variable | Default | Effect |
|----------|---------|--------|
| `FORGE_MODEL` | _(unset)_ | The model id. Required for a live run; ignored under `--dry-run`. |
| `FORGE_MAX_STEPS` | `20` | Hard ceiling on loop turns. Also settable per run via `--max-steps N`. |
| `FORGE_MAX_TOKENS` | `2048` | Output-token ceiling per model call. |
| `FORGE_MAX_RETRIES` | `4` | Retries on transient (429 / 5xx / network) failures. |
| `FORGE_MAX_CHARS` | `60000` | Transcript character budget before older turns are trimmed. |
| `FORGE_MEMORY` | _(on)_ | Set to `off` to disable memory retrieval and the lesson append. |
| `FORGE_SUBAGENTS` | _(off)_ | Set to `on` to advertise the `delegate` sub-run tool. |
| `FORGE_MAX_DEPTH` | `1` | Maximum sub-delegation depth when sub-agents are enabled. |

## Sub-delegation (opt-in)

When `FORGE_SUBAGENTS=on`, an agent gains a `delegate` tool that runs a bounded sub-task in
its **own** sub-run — same workspace, same write-confinement, its own trace and gate. It is
depth-capped (`FORGE_MAX_DEPTH`, default 1) so it can never recurse without bound, and it is
**off by default** so standard runs are byte-identical. Exercise it offline with the
delegation sentinel:

```
FORGE_SUBAGENTS=on node forge/run.mjs forge/examples/balance-scout "delegate-smoke: decompose and finish" --dry-run --max-steps 8
```
