# AIEOS as a Solo AI — Roadmap
Status: stable
Type: reference
Owner: CTO (Government)
Extends: none

A concrete, phased plan to make AIEOS a real *solo AI*: an agent-system that runs
on its own loop, sets and pursues its own goals, improves its own definitions, and
runs under any model — while every consequential act stays bounded, audited, and
gated by the Government. See [../forge/README.md](../forge/README.md) for the runtime
it builds on and [../kernel/laws/operating-doctrine.md](../kernel/laws/operating-doctrine.md)
for the laws it must never break.

The work splits into five pillars. They are ordered by **leverage × dependency**:
safety is built first because it wraps everything autonomous that follows; persistence
and self-improvement are the *felt* unlock (the system starts acting and getting
better on its own); self-set goals make it self-directing; model-portability makes it
truly independent of any one provider. No phase introduces a new dependency; every
phase is dry-run-testable offline.

## Phase 0 — Safety harness (build this FIRST)

**Capability:** an external kill-switch, hard token/wall-clock budgets, and an
approval assertion that any loop can call each iteration. Nothing below is allowed to
run unattended until this exists.

**Files to build:** `forge/runtime/safety.mjs` — `checkKill(ctx)` (reads
`forge/control/STOP` and `forge/control/PAUSE`, throws `SafetyHalt` on STOP, waits on
PAUSE); `Budget{spendTokens(n), tick()}` (caps against `FORGE_BUDGET_TOKENS` and
`FORGE_BUDGET_MS`); `requireApproval(goal, tier)` (for tier ≥ T3 asserts a matching
record under [../government/decisions/](../government/decisions/)). Wire both checks
into the top of the loop in `forge/runtime/loop.mjs`, adding outcomes `killed`,
`budget_exhausted`, `unapproved`.

**Why it is safe:** it only *adds* bounds — workspace confinement, gate-before-finish,
and the append-mostly audit trace under `forge/runs/` are preserved, never removed.
It is provably testable: touch the STOP file, assert the loop halts with a closed
trace.

**Approval gate:** T1 council review of `safety.mjs` plus a kernel-law note that the
kill-switch, gate-before-finish, workspace confinement, and audit trace are now
non-removable invariants.

## Phase 1 — Self-improvement (close the feedback loop)

**Capability:** a non-passing run proposes a bounded patch to the agent's *own*
definition, written as a proposal — never auto-applied.

**Files to build:** `forge/runtime/improve.mjs` — `proposeRevision(...)` derives a
tiny deterministic patch from `forge/runtime/eval.mjs` checks; `writeProposal(...)`
emits `<agentDir>/proposals/<ts>.patch.md` plus a row in
`memory/registers/forge-revisions.md` (the trusted-runtime write pattern from
`forge/runtime/memory.mjs`). A separate gated CLI `forge/apply-revision.mjs` applies a
patch to the live file, runs the gate, and reverts on failure. Hook the propose call
into `loop.mjs` after `appendLesson`, capped at one proposal per run.

**Why it is safe:** propose (autonomous) and apply (gated) are split. The agent still
cannot self-mutate — its definition files sit *above* the workspace guardrail in
`forge/runtime/tools.mjs`. Every applied patch is one revertible, gate-verified diff.

**Approval gate:** council approves the propose step (T1). Each *apply* is its own
Government decision record (Directive #7 — propose framework changes before making
them).

## Phase 2 — Persistence (run on its own loop)

**Capability:** a daemon that pulls the next approved goal from a durable queue, runs
it, records the outcome, and resumes after a kill.

**Files to build:** `memory/registers/goal-queue.md` (append-mostly table: id, status
`queued→approved→running→done|failed|blocked`, priority, budget, trace);
`forge/daemon.mjs` — `readQueue`/`appendQueueRow`, `claimNext` (highest-priority
*approved* row that fits budget, single-writer via `forge/daemon.lock`), `tick`
(claim → `runLoop` → terminal audit row), `loop` (`--once` first, then timer). STOP
file honored between ticks; state lives entirely in the register so a restart resumes.

**Why it is safe:** serial concurrency (`maxConcurrent=1`), per-goal and global budget
ledgers, only `approved` rows run, every tick writes an audit row. v0 is `--once
--dry-run` — genuinely autonomous yet fully offline.

**Approval gate:** council approves the daemon and the queue schema (T2 — it turns a
tool into a standing process). The queue itself only runs Government-`approved` rows.

## Phase 3 — Self-set goals (become self-directing)

**Capability:** the system reads its own memory and eval verdicts and *proposes* new
goals — which land as `proposed`, never runnable until the Government approves them.

**Files to build:** `forge/runtime/propose.mjs` — `gatherSignals` (reuse
`gatherCorpus` from `forge/runtime/memory.mjs`), `detectGaps`, `draftGoals`,
`writeProposals` into `memory/registers/goal-backlog.md`; CLI `forge/propose.mjs`;
`forge/runtime/gate-goals.mjs::approvedGoals(repoRoot)` returning only backlog rows
that are `approved` AND have a matching record in
[../government/decisions/README.md](../government/decisions/README.md). The daemon's
`claimNext` reads only through this gate.

**Why it is safe:** proposing has no execution path; the backlog is append-only and
auditable; a hard Government-approval gate sits between proposal and run; proposals are
capped per cycle and tier-limited.

**Approval gate:** council approves the proposer (T2). Every proposed→approved flip is
a Government decision (Directive #3 — discuss before building).

## Phase 4 — Model-portability (true independence)

**Capability:** any model or local engine drives the loop via a provider adapter,
selected by `FORGE_PROVIDER`.

**Files to build:** `forge/runtime/providers/` — `stub.mjs` (move the existing offline
stub), `anthropic.mjs` (move current `callWithRetry`), `openai.mjs` (OpenAI-compatible:
OpenAI, Ollama, LM Studio, vLLM, llama.cpp, with pure `toOpenAI`/`fromOpenAI`
translators). `forge/runtime/llm.mjs` keeps `callModel`/`preflight` as the facade and
resolves the provider once (dry-run or no creds ⇒ stub).

**Why it is safe:** ship the adapter split with zero behavior change first (dry-run and
smoke stay green), then add `openai.mjs` behind `FORGE_PROVIDER=openai`. Translators
are pure and unit-tested against captured fixtures.

**Approval gate:** council approves the provider interface (T1); each new adapter is
independently gated and dry-run-testable.

## The single highest-leverage first step

**Build `forge/runtime/safety.mjs` first** — `checkKill()` over `forge/control/STOP`
plus a token-and-wall-clock `Budget`, called at the top of each loop iteration in
`forge/runtime/loop.mjs`. It adds zero dependencies, is fully dry-run-testable (touch
STOP, assert a clean halt), and is the precondition that makes every autonomous pillar
above safe to turn on. Without it, persistence and self-set goals are a runaway risk;
with it, they are bounded experiments.
