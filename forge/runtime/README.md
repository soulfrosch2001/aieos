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
node forge/run.mjs <agent-dir> "<goal>" [--dry-run] [--max-steps N] [--json] [--resume <tracePath>]
node forge/run.mjs --smoke [--dry-run]
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
- `--smoke` — run a built-in, tightly capped trivial goal end-to-end as a health
  check; pairs with `--dry-run` to prove the engine wires up with no model and no key.
- `--resume <tracePath>` — fold a prior run's trace (plan, progress, last reflection) into
  this run's opening turn; use the SAME `<agent-dir>` and `"<goal>"` as the run being
  resumed. See [Resuming across process boundaries](#resuming-across-process-boundaries).

On startup `run.mjs` prints a one-line **banner** echoing the resolved model (or
`dry-run`), whether dry-run is active, and the active ceilings (max steps, max tokens,
delegation depth) — so every run states its own bounds before it acts.

Exit codes: `2` missing `<agent-dir>` or `<goal>` (usage); `3` live run with
`FORGE_MODEL` unset and no `--dry-run`; `4` agent contract files missing; `6` `--resume`
trace path unreadable.

### Smoke check and preflight

`--smoke` runs a fixed, minimal goal under a low step ceiling so you can confirm the
runtime stands up end-to-end in one command. Before a **live** run it triggers a
`preflight` probe in [llm.mjs](llm.mjs) that checks the model id and auth are present and
reachable, failing fast with a clear message instead of mid-loop. Under `--dry-run` the
preflight is **stubbed** — it reports ready without any network call or key — so
`node forge/run.mjs --smoke --dry-run` is the canonical offline health check.

New-operator setup (picking `FORGE_MODEL`, supplying the key, and the exact smoke
command) is written up in `forge/SETUP.md`.

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

## Memory and retrieval

Before the loop starts, the runtime gathers a lexical corpus from the project's
durable memory — `memory/registers/`, `government/decisions/`, and
`companies/*/memory/` — scores it against the goal, and injects the top matches as a
**Retrieved memory** block into the opening turn. The agent therefore starts the run
already aware of the relevant decisions and prior lessons instead of rediscovering them.

Retrieval scores at **section granularity**, not whole files: each document is split
into heading-anchored chunks so the injected block is the matching section, not an entire
register. Scores are then weighted by a **recency factor** (a document's `mtime` decays
its weight, so fresher decisions and lessons surface first), and **near-duplicate hits
are dropped** via a Jaccard-similarity check so the block never spends its budget echoing
the same passage twice. The result is a tighter, fresher, de-duplicated opening context.

Lexical scoring is **BM25-style** — term weights combine term frequency with an
**inverse document frequency** (IDF) factor computed in one pass over the chunk corpus,
so rare, discriminating terms win over common ones and the most *relevant* section
surfaces rather than the one that merely repeats the goal's common words. This stays
pure arithmetic — no model, unchanged under `--dry-run`.

### Episodic memory (past runs become recallable)

Past run traces are themselves owned memory. [episodic.mjs](episodic.mjs) reads the
recent JSON traces under `forge/runs/` and turns each into a corpus document —
title plus a short text summarizing the run's goal, outcome, verdict, steps, and final
summary, carrying the trace's `mtime` for recency weighting. `buildMemoryBlock` folds
these episodes into the same corpus as the markdown registers, so a prior run that hit
the same problem is retrieved and injected like any other memory. Episodes are capped
per retrieval and lean on recency decay so the rich trace stream cannot swamp the
curated lessons. Reading traces is **pure file I/O**, so the episodic layer runs
unchanged under `--dry-run`.

On **every** outcome — `done`, `failed`, or `stuck`, not only success — the runtime
appends a dated digest/lesson to
[`memory/registers/forge-lessons.md`](../../memory/registers/forge-lessons.md), so a
failed or stalled run still leaves its working set behind for the next one. The digest
records the real outcome and the gate-clean status; non-`done` digests are marked
**tentative** so they inform without being trusted as settled fact. These memory writes
happen in the **trusted runtime**, not through `write_file`, so the workspace guardrail
is never relaxed — the runtime reads and appends project memory but the agent still
cannot.

Retrieval is **pure file I/O and lexical scoring** — it needs no model and runs
unchanged under `--dry-run`. Set `FORGE_MEMORY=off` to disable the injected block, the
episodic fold-in, and the digest append.

Implemented in [memory.mjs](memory.mjs) and [episodic.mjs](episodic.mjs).

## The tools

Defined in [tools.mjs](tools.mjs). Two trust tiers: everything below is **always
available** except `delegate` and `run_code`, which are **off by default** and must be
explicitly opted into (see their sections below) — a default run's tool set is unchanged
by either existing.

- `list_dir` — list entries at a path (read, repo-wide).
- `read_file` — read a UTF-8 file (read, repo-wide; output is bounded with a
  truncation footer so nothing is silently withheld).
- `read_many` — read up to 20 UTF-8 files in **one round trip** instead of one
  `read_file` call per file. Same per-path containment as `read_file`; a bad path in the
  batch becomes an inline error line rather than failing the whole call. See
  [Batched reads](#batched-reads-and-run_code-programmatic-tool-calling) below.
- `write_file` — write a file, **restricted to the agent workspace**.
- `write_csv` — write a spreadsheet-compatible CSV file, **restricted to the agent
  workspace** (same confinement as `write_file`). See
  [Deliverable generation](#deliverable-generation-csv-and-pptx) below.
- `write_pptx` — write a real PowerPoint presentation, **restricted to the agent
  workspace**. See [Deliverable generation](#deliverable-generation-csv-and-pptx) below.
- `run_gate` — run the conformance gate (`node tests/conformance/run.mjs`) so the agent
  can verify before it claims ([Directive #9](../../kernel/laws/prime-directives.md)).
- `finish` — end the run with a short summary, including a one-line self-check of
  whether the goal was met.
- `plan` — record an explicit ordered checklist of steps the agent intends to take.
- `update_plan` — mark steps done or revise the checklist as the work proceeds.
- `delegate` — spawn a bounded **in-lane** sub-run to decompose a task (off by default;
  see [Sub-delegation](#sub-delegation-in-lane) below).
- `run_code` — run a short Node.js script (off by default; see
  [Batched reads and run_code](#batched-reads-and-run_code-programmatic-tool-calling) below).

### Batched reads and `run_code` ("programmatic tool calling")

Real programmatic tool calling (a model composing several tool calls in code without a full
round trip per call) has two very different risk profiles depending on what it touches:

- **`read_many`** — batching several *reads* needs no new safety surface at all: every path
  still goes through the exact same containment check a single `read_file` call would, one
  at a time. Always available.
- **`run_code`** — running arbitrary code is a different matter. **This is NOT a security
  sandbox.** Node has no built-in mechanism for one (the `vm` module's own docs say so
  explicitly, and a plain child process has none either). `run_code` runs the script in a
  genuinely separate OS process (`spawnSync`, not `vm`/in-process `eval`) with a hard
  timeout (`FORGE_EXEC_TIMEOUT_MS`, default 10s) and a capped environment (no inherited
  secrets — the child gets only `PATH` and, on Windows, `SystemRoot`). What it does **not**
  do: confine file or network access to the workspace — a script can read/write anything the
  OS user can, and make outbound network calls. Treat `FORGE_ALLOW_EXEC=on` as equivalent to
  letting the agent run any script you could run locally yourself. It is **off by default**,
  gated the same way `delegate` is (`subagentsEnabled`/`execEnabled` in [tools.mjs](tools.mjs)),
  and — same defense-in-depth principle as delegation's depth cap — the flag is re-checked
  **inside** `runTool` itself, not just at schema-advertisement time, so a stray `run_code`
  call can never execute just because the model somehow emitted one while the feature was off.

### Deliverable generation (CSV and PPTX)

`write_csv` is a dependency-free (Node built-ins only) spreadsheet writer — proper
RFC-4180-ish quoting, CRLF line endings, opens natively in Excel/Sheets/Numbers.

`write_pptx` writes a **real** PowerPoint presentation via [pptxgenjs](https://gitbrent.github.io/PptxGenJS/)
— a well-tested third-party library, not a hand-rolled OOXML/ZIP writer. Getting a binary
Office format byte-correct from scratch, with no way here to open the result in real
PowerPoint and confirm it isn't subtly corrupt, is exactly the kind of thing better left to
a library thousands of people already depend on. This is the one deliberate, tracked
departure from the Forge's otherwise-consistent zero-new-dependency stance
(`consolidate.mjs`, `subagent.mjs`) — a supply-chain trade-off made explicitly, not silently
(decision `government/decisions/0029-forge-run-code-and-real-pptx.md`), in exchange for
genuine correctness on a real deliverable format. Verified by generating a deck and
inspecting its internal ZIP/XML structure directly (slide XML, content types, relationships)
rather than only checking that the write call returned success.

**Still not covered:** real `.docx`/`.xlsx` binary formats. `write_csv` already covers the
spreadsheet case well enough that adding `.xlsx` support wasn't judged worth a second new
dependency in the same pass; `.docx` remains open. Both are a natural next step following
the same pattern (a well-tested library, workspace-confined, deeply verified) if wanted.

Every tool returns a uniform `{ ok, output }` envelope. A failure is fed back to the
model as an errored observation, not raised as a crash — failures are data the agent
reflects on, not dead ends.

## Planning

The agent can keep an **explicit plan**: a `plan` tool sets an ordered checklist, and
`update_plan` revises it or marks steps done. The current plan is persisted to
`trace.data.plan` and echoed back as a checklist in the next observation turn, so the
model always sees its own intent and the trace is auditable against it
([Directive #8](../../kernel/laws/prime-directives.md)). This is the long-horizon
coherence lever — it keeps multi-step runs on track. Implemented in [plan.mjs](plan.mjs).

## Sub-delegation (in-lane)

For a genuinely compound task the agent can decompose it into a **sub-run** with the
`delegate` tool, implemented in `subagent.mjs`. A delegation runs the *same*
loop recursively — **same agent, same workspace, same gate, same write-confinement** — on
a narrower sub-task, producing its own trace, and threads the result back as the parent's
next observation. It opens no cross-company lane: delegation is strictly in-lane, so it
never routes around the Government
([Directive #2](../../kernel/laws/prime-directives.md)).

It is **off by default**. The `delegate` schema is only advertised to the model when
`FORGE_SUBAGENTS=on` (or a positive depth budget is set), so default runs behave exactly
as before. Two hard limits fence it: a sub-run is capped at a small step ceiling, and a
**depth cap** (`FORGE_MAX_DEPTH`, default 1) is enforced in code — a `delegate` past the
cap is denied with a `GUARDRAIL:` tool result rather than recursing, so the existing step
ceiling and the depth cap together make runaway recursion impossible.

Under `--dry-run` delegation is exercised by a **sentinel goal**: the stub emits one
`delegate` call and then finishes, so the whole primitive is testable offline with no
model and no key —
`FORGE_SUBAGENTS=on node forge/run.mjs <agent-dir> "delegate-smoke: decompose and finish" --dry-run`.

### Parallel fan-out (concurrent sub-runs)

When the model requests **two or more** `delegate` calls in the **same** turn, the runtime
dispatches them **concurrently** (`Promise.all`) instead of one-at-a-time — independent
sub-tasks no longer wait on each other's wall-clock time. This is the async-sub-agent
counterpart the runtime was missing: a single turn can now spawn several ongoing sub-runs
at once, the same way a model can request several tools in parallel. The tool's own
description tells the model it may do this.

With 0 or 1 `delegate` calls in a turn the code path is **byte-identical to before**
(falls straight through to the existing sequential branch) — this is purely additive, the
same guarantee the cost router makes. Every guardrail is unchanged and still per-call: the
depth cap is checked **before** each call is dispatched (an over-cap call in a parallel
batch is refused synchronously and never joins the `Promise.all`), and `dirtyWrites`/
`gateClean` are updated the same way regardless of how many sub-runs wrote — if *any*
concurrent sub-run left the workspace dirty without a clean gate, the parent's gate
requirement re-arms exactly as it would for a single delegate call.

Test it offline with the **parallel sentinel** — the stub emits two `delegate` calls in
one turn:
`FORGE_SUBAGENTS=on node forge/run.mjs <agent-dir> "parallel-delegate-smoke: decompose two and finish" --dry-run`.

**Known limitation of concurrent sub-runs:** parallel sub-runs share the *same* workspace
(same as sequential delegation always has). Nothing new stops two concurrent sub-tasks
from writing the same file at once — that risk exists whenever `FORGE_SUBAGENTS=on`, it is
just more likely to matter now that sub-runs can genuinely overlap in time. Keep parallel
sub-tasks to genuinely independent pieces of work (the tool description says so), the same
discipline already expected of sequential delegation.

## Self-check (structural verdict)

After the loop ends, the runtime runs a deterministic structural self-check over the
trace it already has — no model call — checking whether the goal was addressed, the gate
passed, writes were produced, and the loop did not stall. The result lands in
`trace.data.evaluation` and prints as a single `verdict:` line. It is **advisory**: it
never gates `finish`, it only reports. Because it reads the trace and nothing else, it
runs identically under `--dry-run`. The rubric it documents lives in
[`forge/eval-rubric.md`](../eval-rubric.md); implemented in [eval.mjs](eval.mjs).

## Continuous self-verification (checkpoints)

The end-of-run self-check above is a single verdict — useful, but it only speaks once, at
the finish line. A run that goes long (many steps before `finish`) gets no interim signal.
[checkpoint.mjs](checkpoint.mjs) closes that gap: every `FORGE_CHECKPOINT_INTERVAL` steps
(default 5), the loop computes a free, deterministic progress note — plan completion
(`N/M steps done`), whether there are unverified writes pending — and threads it back into
the conversation the same way the plan checklist is echoed, so the model sees its own
progress mid-run instead of only reflecting at the end. It explicitly tells the model to
ground any progress claim against it (do not report done work that was not verified) —
directly answering the "grounded progress reporting" pattern long-horizon runs need.

Like the end-of-run self-check, this is **advisory only** — it never gates anything, it
only injects an observation. Every fired checkpoint is recorded on its step
(`step.checkpoint`) and collected into `trace.data.checkpoints`, so the trace shows exactly
when and what the run was told about itself. Pure and dry-run-safe (no model call, no I/O
beyond what the loop already tracks) — exercised offline by the `checkpoint-smoke` sentinel
in [llm.mjs](llm.mjs)'s stub, which runs long enough to guarantee at least one fires.

### Stagnation escalates the model, and re-queries memory

A checkpoint doesn't just report progress — it judges it, by comparing this checkpoint's
snapshot to the *previous* one: plan-completion count (`done` steps) when a plan exists,
else `writeActionCount` (writes made so far) as the fallback for goals with no explicit
plan. If nothing moved between two checkpoints, the run is `stagnant`.

A stagnant checkpoint feeds `lastEvalFailed` into the [cost router](#cost-router-model-per-step)
— the same escalation seam a failed `run_gate` already uses — so the run's *next* step is
routed to a stronger model, capped by `FORGE_MAX_ESCALATIONS`. This is what finally wires
`router.mjs`'s `lastEvalFailed` input (present in the router's signature from the start) to
a real signal instead of dead code: a run that stalls gets more capability on its own,
without needing a gate to fail first.

At the same moment, the loop re-queries [memory](#memory-and-retrieval) with the *current*
sub-problem — the next pending plan step's text, or the goal if there is no plan — and
injects the result as a `[fresh memory search — triggered by stalled progress]` block on
the next turn. The opening-turn memory injection is a one-time snapshot; this is memory as
context-on-demand, re-pulled exactly when the run's own progress signal says the current
approach isn't working. Exercised offline end-to-end by the `stagnation-smoke` sentinel in
[llm.mjs](llm.mjs)'s stub (plans two steps, never advances either, forcing two consecutive
checkpoints to compare against each other).

### Deliberation on stagnation (best-of-N)

Escalating the tier asks one stronger mind to *create* a way out. On the same stagnant
checkpoint, [deliberate.mjs](deliberate.mjs) also asks several cheap minds to create and
one strong mind to *choose*: `FORGE_DELIBERATE_N` (default 3) candidate approaches are
generated concurrently on the `cheap` tier — each prompted to take a *different* angle —
then the `strong` tier judges the pool and quotes the most promising one. Judging is easier
than generating, so a strong model picking between N independent proposals often beats a
strong model improvising alone. The judged direction is injected as a
`[deliberation — N candidate approaches were weighed…]` observation; advisory only, nothing
gates on it, and the whole thing is recorded on the step (`step.deliberation`) and costed
into the run totals.

Default **on** — but it only ever fires on a stagnant checkpoint, a rare event by
construction, so the marginal cost lands exactly when the run is already wasting steps.
`FORGE_DELIBERATE=off` disables it. A dead candidate or a dead judge degrades gracefully
(the pool shrinks; the first candidate stands in for a missing judgment) — deliberation
must never crash the run it is trying to unstick. Exercised offline by the
`deliberation-smoke` sentinel (same stall as `stagnation-smoke`; the stub answers the
`[deliberation:propose]` / `[deliberation:judge]` side-prompts deterministically).

## Virtual context (trimmed turns stay recallable)

Message trimming ([llm.mjs](llm.mjs) `trimMessages`) keeps long runs inside the context
budget by dropping the oldest middle turns — previously, information gone for good. Now
what the trim drops is **archived, not lost**: [context.mjs](context.mjs) folds every
dropped turn into an in-run archive (text, tool calls and results flattened to compact
one-liners), and on each subsequent step the loop retrieves the archived slices most
relevant to the step's own reflection — the freshest signal of what the run is focused on —
re-injecting them as an `[archived context recall …]` observation. Same BM25 retriever the
[memory block](#memory-and-retrieval) uses, pointed at the run's own history: the model
effectively gets an unbounded transcript, paged by relevance.

Bounded on purpose: top 2 hits, excerpts capped, and an injection identical to the previous
one is skipped. Each fired recall lands in the trace (`step.recall` — size + preview) so
what was resurfaced is auditable. Pure and dry-run-safe. Exercised offline by the
`virtualcontext-smoke` sentinel under a tiny `FORGE_MAX_CHARS`: it plants a distinctive
fact in turn one, pads until the trim archives that turn, then mentions the fact again —
the recall block must resurface the archived turn, and the trace proves it did.

## The critic (opt-in second opinion on risky actions)

With `FORGE_CRITIC=on` (default **off** — it costs one extra call per risky action, so the
maintainer opts in deliberately), [critic.mjs](critic.mjs) has a `mid`-tier model review
each `write_*`, `delegate` and `finish` before it runs: one line, `OK — …` or
`CONCERN: …` — the AIEOS council pattern miniaturized to a single decision inside the loop.

Advisory by design: writes and delegations proceed regardless, with the critique riding
along in the observation (and in the trace, `action.critic`). `finish` alone gets a
**one-time speed bump**: a concerned critique refuses the *first* finish so the model must
read it and either fix or insist — the *second* finish always passes. A bump, not a gate;
agency stays with the model, and the check runs *after* the Directive #9 guardrail so the
hard law is never diluted by advice. A dead critic yields a neutral pass — it must never be
the thing that breaks a run. Exercised offline by the `critic-smoke` sentinel (write →
gate → finish refused once → finish passes), plus a flag-off variant proving the default
path is untouched.

## Resuming across process boundaries

A single process budget (`maxSteps`) is not the same thing as a goal's actual size — a
genuinely long-horizon goal can outlast one run without being wrong or stuck. Rather than
holding one process open indefinitely, `forge/run.mjs` accepts `--resume <tracePath>`
pointing at a **prior** run's trace (typically one that ended `budget_exhausted` or
`stuck`). [resume.mjs](resume.mjs)'s `buildResumeContext(trace)` turns that trace into a
compact text block — prior outcome, prior plan with `[x]`/`[ ]` status, the last few
reflections, and a stagnation note if the prior run's last checkpoint was flagged — and
`loop.mjs` prepends it to the opening turn, in the same slot `memoryBlock` already occupies
(`resumeContext` before `memoryBlock`'s `# Goal` marker; goal text always stays last, since
[llm.mjs](llm.mjs)'s sentinel matcher relies on `"# Goal\n"` being the final marker).

```bash
# First attempt runs out of budget:
node forge/run.mjs forge/examples/balance-scout "large multi-part goal" --max-steps 40
# ... outcome: budget_exhausted, trace: forge/runs/2026-...-balance-scout.json

# Resume with the SAME agent + goal, pointing at that trace:
node forge/run.mjs forge/examples/balance-scout "large multi-part goal" \
  --resume forge/runs/2026-...-balance-scout.json --max-steps 40
```

`resume.mjs` is pure (reads only the trace object already on disk — no model, no I/O of its
own), so this is free and dry-run-safe. Exercised offline by the `resume-smoke` sentinel,
which reports whether resume context reached the opening turn.

## Robustness on live runs

Live model calls survive transient failure: [llm.mjs](llm.mjs) retries on `429`, `5xx`,
and network errors with exponential backoff that honors any `Retry-After` header
(`FORGE_MAX_RETRIES`, default 4). Each call surfaces token `usage` (the dry-run stub
reports zeros), and the transcript is trimmed to a character budget before each call so
long runs stay within context — the trim **never** drops the first user turn or the last
tool result. None of this affects `--dry-run`, which makes no network calls.

## Guardrails

Enforced in code, because the model cannot be trusted to self-enforce them:
1. **Writes cannot escape the workspace** — path containment with realpath resolution
   and `..` rejection; the workspace is derived from the agent folder, not caller input.
2. **The gate is never skipped** — `finish` is intercepted while there are unverified
   writes; the model must `run_gate` and pass since its last write before it can finish
   ([Directive #9](../../kernel/laws/prime-directives.md)).
3. **No destructive surface by default** — read / write-in-workspace / run_gate / finish
   are the only always-available tools. The one exception, `run_code`, is off by default,
   gated behind an explicit `FORGE_ALLOW_EXEC=on`, re-checked inside the tool handler
   itself (not just at schema-advertisement time), and does NOT confine what the executed
   script can touch — see [Batched reads and run_code](#batched-reads-and-run_code-programmatic-tool-calling).
   Opting into it is a deliberate trust decision, not a default posture.
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
- Live run (API) — set `FORGE_MODEL` to whatever model id you want and provide
  `ANTHROPIC_API_KEY`. If `FORGE_MODEL` is unset on a live run, the runtime errors
  clearly and exits — it does **not** pick a default. The per-call response budget is
  `FORGE_MAX_TOKENS` (default 2048).
- Live run (subscription) — see the next section.

## The claude-cli backend (subscription-powered thinking)

`FORGE_BACKEND=claude-cli` swaps the brain: instead of the Messages API,
[backend-claude-cli.mjs](backend-claude-cli.mjs) runs the LOCAL Claude Code CLI headlessly
(`claude -p`) for each reasoning step. The CLI authenticates with the machine's Claude
subscription (Pro/Max), so runs draw on the plan's usage limits — **no API key, no
per-token billing**.

It is also **auto-selected**: with no `FORGE_BACKEND` forced, no `ANTHROPIC_API_KEY`
present, and a `claude` binary on PATH, live runs use the subscription automatically —
a machine with Claude Code logged in needs ZERO configuration (`node forge/setup.mjs`
does the full new-machine setup in one command: installs the CLI if missing, checks the
login, persists the model ladder). Want the stub instead? Use `--dry-run` or
`FORGE_BACKEND=api`.

**Session continuity** is the latency/token lever: the first call of a run sends the full
prompt and remembers the CLI session id; every later call *resumes* that session
(`--resume`) and sends only the newest observation — the server-side session plus prompt
caching carries the history, so a step stops re-paying the whole transcript. Measured
live: step 1 `new` (6.3s), steps 2–3 `resumed` with **10 input tokens each** (the delta)
and ~25k tokens served from cache, ~3s latency. Each step's trace usage records
`session: new|resumed|restarted` and `cache_read_input_tokens`, so the saving is
auditable per step. Any resume failure (dead session, model-switch refusal, parse error)
falls back to a fresh full-prompt call — continuity is an optimization, never a
correctness dependency. The protocol also tells the brain to **batch independent tool
calls into one reply**, so simple goals finish in fewer round-trips.

The division of labour is the point: the CLI is **only the brain**. Forge's runtime still
executes every tool, enforces every guardrail (workspace confinement, Directive #9, depth
caps, critic, checkpoints) and writes the trace. On every call the CLI's own toolbox is
explicitly disallowed — it reasons over a rendered transcript and replies with one JSON
object naming which FORGE tool to run next; a brain that cannot touch anything cannot
bypass the runtime's law. A reply that arrives fenced or wrapped in stray prose is parsed
tolerantly, and a reply with no usable tool call degrades to a text-only turn (the loop's
existing "use a tool" nudge handles it).

The [cost router](#cost-router-model-per-step) still routes: per-step model ids are passed
via `--model`, and the CLI accepts aliases — so `FORGE_MODEL_CHEAP=haiku`,
`FORGE_MODEL_MID=sonnet`, `FORGE_MODEL=opus` gives the cheap-first ladder on subscription
auth. With no model vars at all, the CLI's default model is used (`FORGE_MODEL` is NOT
required for this backend). Preflight probes `claude --version` (free — no prompt spent)
and fails fast with a clear reason when the CLI is missing. `FORGE_CLI_TIMEOUT_MS`
(default 240000) caps each call; headless calls are slower than raw API calls — expect
seconds per step, not milliseconds. `--dry-run` continues to bypass everything (stub, no
CLI, no key).

## Cost router (model per step)

The runtime does not have to call one model for the whole run. [router.mjs](router.mjs)
resolves three **tiers** from the environment — `FORGE_MODEL` (strong),
`FORGE_MODEL_CHEAP`, and `FORGE_MODEL_MID` (each falling back to `FORGE_MODEL` when
unset) — and picks one per step: **cheap by default**, **mid on the plan turn**, and
**strong once the run has escalated**. The policy is monotonic (a step is never
downgraded mid-run) and capped by `FORGE_MAX_ESCALATIONS` (default 2). With only
`FORGE_MODEL` set, all three tiers collapse to it and behaviour is byte-identical to
before — the router is purely additive.

Escalation is wired into the loop: a **failed gate is an observation, not a stop**, so
when it fails the escalation counter rises and the next turn re-routes up a tier
(cheap -> strong). That is the retry-with-a-stronger-model mechanism, and it is what lets
a cheap-first policy keep strong-model result-parity on verifiable tasks. Each step is
stamped with its `tier` and `model` in the trace. The router is **pure and
model-agnostic** (no literal id) and its decision is computed and logged even under
`--dry-run`, where there is no real model — proving the logic offline.

[`forge/cost.mjs`](../cost.mjs) turns a trace into money: it attributes each step to its
stamped model, looks the price up in a configurable, clearly-fake example table
(overridable via arg or `FORGE_PRICES`), and returns the total, a by-tier split, and a
blended $/Mtok. `inspect.mjs` renders these. [`forge/bench.mjs`](../bench.mjs) runs a
task list as a routed arm vs. a `FORGE_MODEL`-only baseline and reports parity (gate +
eval) against cost. Under `--dry-run` the stub returns zero usage and identical output,
so both arms are trivially equal at $0.00 — dry-run proves the **plumbing only**; the
live parity-times-cost measurement needs a key. The full design is in
[`docs/cost-router.md`](../../docs/cost-router.md).

## Traces

Every run writes an append-mostly JSON trace under `forge/runs/` at
`forge/runs/<ISO-timestamp>-<agent>.json`, updated after each turn so a crash still
leaves evidence ([Directive #8](../../kernel/laws/prime-directives.md)). The record
captures the goal, the model (or dry-run), each step's text, actions and observations,
and the final outcome, summary, and gate verdict. Each step also records its wall-clock
`ms` and token `usage`, and the trace closes with a `totals` block summing them — so a
run's cost and time are measured, not guessed (under `--dry-run` the usage totals are
zero, which is itself the proof of model-agnosticism). See `forge/runs/README.md` for the
exact format.

## Inspecting runs

[`forge/inspect.mjs`](../inspect.mjs) is a **read-only** viewer over `forge/runs/`:

```
node forge/inspect.mjs --list     # list recent runs
node forge/inspect.mjs --last     # render the most recent run
```

It only re-renders existing traces — it never re-executes a run — so it is safe to point
at any past trace, including dry-run traces, to read the steps, plan, verdict, and totals.

## Consolidating memory (the "sleep" step)

Memory that only grows is a landfill. [`forge/consolidate.mjs`](../consolidate.mjs) is a
**dependency-free CLI** that reviews [`forge-lessons.md`](../../memory/registers/forge-lessons.md)
(and the episodes) to distil it: fold exact and near-duplicate lesson rows into one with
a seen-count tally, and promote repeated, firm lessons. It never erases history — it
corrects by adding ([Directive #7](../../kernel/laws/prime-directives.md)).

```
node forge/consolidate.mjs            # DRY-RUN by default — print the diff plan, write nothing
node forge/consolidate.mjs --apply    # back up the register, then apply the plan
```

There is also an npm alias: `npm run forge:consolidate -- [--apply]`.

It is **dry-run by default**: with no flags it only prints the proposed plan and writes
nothing, so a CTO/council step can read the plan and approve before anything changes.
Only `--apply` mutates, and before any write it copies the register to an **attic**
backup, so every fold is one file-restore or `git revert` away. Like the runtime's own
lesson writes, consolidation writes **only** `memory/registers/*` through the trusted
runtime — it never touches `write_file` and never relaxes the workspace guardrail. It is
pure file I/O and lexical comparison, so it needs **no model** and runs identically with
no key.

## Files
- [llm.mjs](llm.mjs) — the model call (Messages API + retry/backoff, `usage`, message
  trimming) and the dry-run stub.
- [backend-claude-cli.mjs](backend-claude-cli.mjs) — subscription-powered thinking via the
  local Claude Code CLI (headless), JSON tool-call protocol.
- [tools.mjs](tools.mjs) — the tools and their guardrails.
- [memory.mjs](memory.mjs) — gather, BM25 retrieve, format the memory block, build it
  (markdown registers + episodes), and append lessons/digests.
- [episodic.mjs](episodic.mjs) — summarize `forge/runs/*.json` traces into recallable
  corpus documents.
- [plan.mjs](plan.mjs) — render and apply the explicit plan checklist.
- [eval.mjs](eval.mjs) — the structural, model-free self-check verdict (end of run).
- [checkpoint.mjs](checkpoint.mjs) — the structural, model-free progress note (periodic,
  during a run), plus stagnation detection that feeds router escalation.
- [resume.mjs](resume.mjs) — pure trace → resume-context text, for `forge/run.mjs --resume`.
- [context.mjs](context.mjs) — virtual context: archive trimmed turns, recall by relevance.
- [deliberate.mjs](deliberate.mjs) — best-of-N candidate approaches on stagnation, judged.
- [critic.mjs](critic.mjs) — opt-in advisory review of risky actions (write/delegate/finish).
- [router.mjs](router.mjs) — pure, model-agnostic per-step tier/model choice.
- [`forge/cost.mjs`](../cost.mjs) — pure cost-of-trace, price table, by-tier split.
- [`forge/bench.mjs`](../bench.mjs) — routed-vs-baseline parity-times-cost harness.
- `subagent.mjs` — the bounded in-lane `delegate` sub-run (flag-gated).
- [loop.mjs](loop.mjs) — the plan → act → observe → reflect orchestration + trace.
- `forge/run.mjs` — the CLI: load an agent, retrieve memory, run the loop, report.
- `forge/inspect.mjs` — read-only viewer for past run traces.
- [`forge/consolidate.mjs`](../consolidate.mjs) — dry-run-by-default CLI that distils
  `forge-lessons.md` (dedup + promote), attic-backed, `--apply` to write.

## How it relates to the rest of the Forge
It is the executable form of the [action loop](../action-loop.md); the agents it runs
are produced by the [creation loop](../creation-loop.md) and obey the
[agent contract](../../kernel/contracts/agent.md). See [the Forge overview](../README.md).
