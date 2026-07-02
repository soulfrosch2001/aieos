# Decision 0034 — Forge: native MCP mode, multimodal vision, --critical (kernel 1.18.0)
Type: report
Date: 2026-07-02
Tier: T2 (Coordination — additive run mode + tooling; the law is preserved and its
enforcement is proven, not assumed)
Council: none (mechanical, verifiable changes; direct build per cost policy)
Status: CLOSED — built and verified LIVE (2026-07-02)

## Context
Asked "o que falta para ser 10?", the honest list was: (1) native structured tool calling
instead of the JSON-in-text protocol — the last big engineering piece; (2) frontier on
every step — a cost button, not a build; (3) multimodal perception; (4) headless latency —
structural; (5) the final point being identity, not engineering. The maintainer authorized
building all of it ("pode fazer todos"). Items 1–3 shipped; 4 and 5 remain what they are.

## Built

### 1. Native mode — `FORGE_BACKEND=claude-native` (mcp-server.mjs + native.mjs)
Forge's tools are now served over the Model Context Protocol by a dependency-free,
~100-line stdio JSON-RPC server, and the whole goal runs as ONE continuous `claude -p`
session whose only hands are those tools. The CLI runs its native agentic loop — real
structured tool calling, live context, zero protocol parsing — the closest the runtime
gets to a Fable-5-style single mind. `native.mjs` parses the session's stream-json event
log into the SAME trace shape the classic loop writes, so inspect/cost/episodic memory
work unchanged.

**The trade, stated honestly in code and docs:** the classic loop's mid-run
instrumentation (per-step cost routing, checkpoints, deliberation, critic) does not run in
native mode — the CLI's own loop replaces it. Native for cognition-heavy goals; classic
for instrumented ones. Both remain first-class.

**The law does not move — and was proven, not assumed:**
- Workspace confinement: every MCP `tools/call` lands in the same `runTool()`; verified
  through the MCP path itself (a write to `kernel/` was refused with the same
  `GUARDRAIL: Directive #5` message).
- Directive #9 became a deterministic POST-HOC verdict: the event log records every tool
  call, so "clean gate after the last successful write?" is a fact; a run that wrote and
  never gated is demoted `done → incomplete`. Proven offline with synthetic events
  (3/3 scenarios: no-gate → demote; clean gate → keep; failed gate → demote), because the
  safety net must be provable without a live model misbehaving on cue.
- And a remarkable live datapoint: a test goal EXPLICITLY ordering "do NOT run the gate"
  was refused by the model, which cited Directive #9 and gated anyway — the law held at
  the cognition level before the net was even needed.
- `plan`/`update_plan`/`finish`/`delegate` are not served in native mode (classic-loop
  concepts); the session ends with a `SUMMARY:` line.

### 2. Multimodal vision — `read_image` (native-only)
MCP tool results can carry real image content — the text protocol never could. Verified
live: the model read `brand/aieos-logo.png` through the tool and described the actual
mark ("navy triangle framing a blue dot-bar 'i'") with the actual brand colors. Repo-root
containment, png/jpg/gif/webp, 5MB cap. `read_pdf` was deliberately NOT built: it needs a
parsing dependency, and per Directive #6 that is flagged here as a maintainer decision,
not taken unilaterally.

### 3. `--critical` — frontier on every step, per run
Collapses the whole tier ladder to `FORGE_MODEL` for one run (verified in dry-run: all 7
steps of a long scenario stamped with the strong model). A per-run flag, deliberately not
an environment default: the cheap-first ladder remains the daily policy.

## Verified
- Native run, live: goal → `mcp__forge__read_file` on `kernel/VERSION` → correct content
  ("1.17.0") reported, trace with per-action ok/output, 76k tokens served from cache.
- read_image, live: the logo genuinely SEEN and correctly described.
- Directive #9 net: 3/3 synthetic scenarios + the live refusal above.
- --critical: all steps stamped strong in dry-run.
- MCP handshake offline: initialize / tools/list (11 tools) / tools/call / guardrail
  refusal — all correct, no model needed.
- Full regression: 13 dry-run scenarios green, unit 13/13, gate 14 rules 0/0 CONFORMANT.

## Score, updated honestly
With native cognition (1), the frontier button (3→`--critical`) and vision (2), the
similarity to a Fable-5-style system sits at **~9–9.5 of 10** in what engineering can
reach. What remains is structural (headless process latency) and philosophical (the Forge
is an auditable background workforce with laws; Fable-in-session is a consultant in the
room — the last half-point is identity, and it should not be closed).

## Memory updates
- This record; its audio summary (`resumo/audio/0034-resumo.*`); `forge-lessons.md` gains
  entries from the verification runs (automatic, trusted-runtime write).
