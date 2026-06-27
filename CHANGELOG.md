# Changelog

All notable changes to AIEOS are recorded here. Format follows
[Keep a Changelog](https://keepachangelog.com/); AIEOS uses date-stamped entries
because it has no compiled releases yet.

## [Unreleased]

### Phase 1 — Foundation (in progress)

#### Added — 2026-06-26
- Established the AIEOS root structure: `kernel/`, `government/`, `templates/`,
  `workflows/`, `councils/`, `memory/`, `shared/`, `companies/`, `docs/`,
  `examples/`, `tests/`, `roadmap/`.
- **Kernel core**: entity contract and the agent/company/department/council/
  workflow/memory-register/plugin contracts that every entity must satisfy.
- **Protocols**: communication, orchestration (the **15-agent parallel fan-out
  rule**, now a Kernel Law), escalation, memory-flow, lifecycle.
- **Laws**: prime directives, engagement tiers (T0–T4), decision authority.
- **Standard-library base templates** for every entity type.
- **Conventions, glossary, and quality standards** in `shared/`.
- Root docs: `README.md`, `CLAUDE.md`, `CONTRIBUTING.md`, `LICENSE`.

#### Added — 2026-06-26 (15-agent fan-out)
- Built the breadth of Phase 1 via a **16-track parallel fan-out** (disjoint file
  ownership, per Directive #4): completed kernel contracts (company, department,
  council, workflow, memory-register, plugin), the five protocols, loader +
  resolution-order + registry; the full **Government** (Supreme Orchestrator, CEO,
  CTO, COO, Chief Auditor, Chief Innovation Officer, 5 files each); the **stdlib**
  (10 workflows, 6 councils, memory architecture + 7 registers); docs (ARCHITECTURE,
  DESIGN-DECISIONS), ROADMAP, LICENSE, CONTRIBUTING, the companies registry, a
  `hello-company` example, and conformance tests. **123 files total.**

#### Fixed — 2026-06-26 (integration review)
- Reconciled the workflow↔memory seam: the 10 stdlib workflows now reference the 7
  real registers under `memory/registers/` instead of invented log names.
- Corrected an incident-council link and an illustrative link in conventions.
- Link audit: **972 relative links checked, 0 real broken** (remaining 12 are
  intentional placeholders inside `*.template.md`).

### Phase 2 — Company Migration (complete)

#### Added — 2026-06-26
- **Mount adapter pattern**: `templates/company-adapter.template.md` — a single
  `AIEOS.md` file binds an existing company to the kernel non-destructively.
- **Mounted the two legacy companies** via adapters (`ai-software-company/AIEOS.md`,
  `AI-Game-Studio/AIEOS.md`): executive→decision-authority mapping, legacy
  governance marked "superseded but retained", and full memory-register mapping to
  the 7 stdlib registers. **No existing file was renamed, moved, or deleted.**
- **Birthed `AI-Tabletop-Studio` as the first kernel-native company** (was empty):
  90 files — 5 executives, 8 agents across 3 departments (game-design, content,
  playtesting), 2 councils, 3 workflows, local memory registers, reports — all
  inheriting the kernel and overriding stdlib defaults strictly by name.
- Updated `kernel/registry/registry.md` (all three mounted), added
  `docs/MIGRATION.md`, and a "Mounted companies" section in `companies/README.md`.

#### Fixed — 2026-06-26 (Phase 2 integration review)
- Corrected relative-link depth in three `03-content` agents (kernel links needed
  `../../../`) and the companies registry table (companies live at repo root).
- Link audit across 216 files: **1,724 relative links checked, 0 real broken.**

### Phase 4 — Conformance Automation (complete)

#### Added — 2026-06-26
- **The AIEOS compiler**: a dependency-free Node.js conformance checker at
  `tests/conformance/` (`npm test`). Modular — one auto-discovered rule per file,
  over a shared, pure `lib/util.mjs` context.
- **7 rules**: `links`, `agent-structure`, `council-structure`, `identity-block`
  (errors); `folder-readme`, `workflow-sections`, `kebab-case` (warnings).
- **Scope model**: default scans kernel + stdlib + kernel-native companies; legacy
  internals out of scope (their `AIEOS.md` adapters always checked). `--include-legacy`
  quantifies reconciliation debt (currently 157 findings across 852 files).
- `package.json` (`npm test`), `tests/conformance/README.md`.

#### Fixed — 2026-06-26 (driven by the checker's first runs)
- Tightened the `identity-block` rule to match the actual contract (identity blocks
  live on entity READMEs + standalone files, not on agent sub-files).
- Added four missing READMEs the checker found (`shared/`, Tabletop `01-executive/`,
  `memory/registers/`, `reports/`).
- **Result: 0 errors, 0 warnings over 221 in-scope files.** The kernel, stdlib, and
  the kernel-native AI-Tabletop-Studio are provably conformant.

### Phase 3 — New Companies as Plugins (complete)

#### Added — 2026-06-26
- **Four kernel-native companies** birthed via a 28-track parallel fan-out
  (~93 files each, 372 total): **AI-Marketing-Agency**, **AI-Publishing-House**,
  **AI-Finance-Company**, **AI-Research-Lab**. Each: 5 executives mapped to
  decision-authority, 3 departments of agents, 2 councils + 3 workflows + 3 memory
  registers that **extend stdlib defaults by name**, reports, and an `AIEOS.md`
  adapter. Registered in `kernel/registry/registry.md` and `companies/README.md`.
- Proves the plugin system across four very different domains (creative/service,
  editorial, regulated finance, science) with zero kernel changes.

#### Fixed — 2026-06-26 (the Phase 4 compiler caught Phase 3)
- `npm test` flagged **108 link errors** in the fan-out output (registers linked as
  directories instead of `.md` files; company-root vs repo-root depth confusion).
- Wrote a **link auto-repairer** that fixes only broken links with a unique target:
  repaired **97 links, 0 unresolved**. Grandfathered the four company names in the
  kebab-case allowlist.
- **Result: 0 errors, 0 warnings over 593 in-scope files.** Every new company is
  provably conformant — the Phase 4 gate protected Phase 3 exactly as designed.

### Phase 5 — Legacy Reconciliation (complete)

Goal: make `npm test --include-legacy` pass (was 157 findings) without destroying the
legacy companies' domain content.

#### Changed — 2026-06-27
- **Inherit, don't fork (Directive #6) enforced on the legacy estates.** Converted
  12 duplicated governance files (6 each in `ai-software-company` and `AI-Game-Studio`:
  prime-directives, engagement-tiers, decision-authority, orchestration-policy,
  conventions, glossary) into thin **kernel pointers** — same filenames, identity
  blocks, `Extends:` the kernel authority. Genuinely company-specific rules were kept
  under "Local additions (stricter only)". Both `AIEOS.md` adapters updated.
- **Additively inserted identity blocks** into 105 legacy agent/council READMEs (no
  content removed) and **auto-repaired 137 broken legacy links** (a reusable link
  repairer that only touches broken links with a unique target).
- Fixed the one genuinely-broken legacy reference (a phantom `technical-artist` in
  programming → the real `tools-programmer`).

#### Changed — checker hardening (driven by the legacy run)
- `links` rule now **masks code spans/fences** so example links shown as code are not
  flagged. Agent-detection no longer false-positives on a memory folder holding a
  register named `standards.md`. `ADR-####`/`MTG-###` record IDs allowlisted.

#### Result
- **0 errors, 0 warnings in BOTH scopes** (`npm test` over 593 files; `--include-legacy`
  over 852). Every one of the 6 mounted companies is now provably conformant.

### Phase 6 — Hardening & Scale (complete)

Four parallel tracks requested together.

#### Added — kernel versioning
- `kernel/VERSION` (1.0.0) + `kernel/versioning.md` (semver policy for contracts,
  laws, protocols). New conformance rule `kernel-compat` (8th rule): every company
  adapter declares a `Requires kernel:` range compatible with `kernel/VERSION`. Added
  the declaration to all 7 existing adapters and the adapter template.

#### Added — checker `--fix` mode
- The runner now lets a rule export `fix()`. The `links` rule gained an official
  auto-repairer (the scratchpad tool, promoted): `node tests/conformance/run.mjs --fix`
  repairs broken links with a unique target. Verified end-to-end.

#### Added — continuous integration
- `.github/workflows/conformance.yml` runs `npm test` and `npm run conformance:all`
  on every push/PR. `scripts/pre-commit` + `scripts/install-hooks.sh` give a local gate.

#### Added — four more kernel-native companies (28-track fan-out, ~93 files each)
- **AI-RPG-Studio**, **AI-Architecture-Studio**, **AI-Legal-Advisors**,
  **AI-Education-Academy**. `npm test --fix` auto-repaired 28 links; registered in the
  registry and `companies/README.md`.

#### Result
- **11 companies** mounted (2 legacy + 9 kernel-native), ~1,600 files.
- **0 errors, 0 warnings in BOTH scopes.** Eight rules, a `--fix` mode, CI, and a
  versioned kernel. The OS now scales by repeating the Phase 3 pattern, gated end-to-end.

## [1.7.0] — 2026-06-27 — Owned memory begins (BM25/IDF retrieval)

Answering "how do we get our OWN memory, not a borrowed one": a council designed an
owned-memory v1 ([docs/owned-memory.md](docs/owned-memory.md)) — the model stays borrowed,
the operational memory becomes fully ours. Step 1 shipped.

### Added
- **BM25/IDF retrieval** in `forge/runtime/memory.mjs` — a term's weight is its corpus IDF
  (rare terms win), with TF saturation and length normalization. Dependency-free, model-free,
  deterministic. Verified: a rare on-point term now outranks a common one.

### Approved, not yet built (owned-memory v1 remainder)
- Episodic ingestion of run traces, a state digest on every outcome, and a gated
  consolidation ("sleep") loop. Deferred: local embeddings, knowledge graph.
- Honest boundary: model training weights + the context window stay borrowed forever.
  Kernel **1.6.0 → 1.7.0**; gate 0/0.

## [1.6.0] — 2026-06-27 — Forge next-leap + solo-AI position & roadmap

Three councils ran in parallel. Build council ([decision 0004](government/decisions/0004-forge-next-leap.md))
shipped; two reflective councils produced the solo-AI docs.

### Added (council-approved build)
- **Live-run smoke + preflight** — `preflight()` (model/auth probe, stubbed offline),
  `--smoke`, `FORGE_MAX_TOKENS`, and [forge/SETUP.md](forge/SETUP.md).
- **Sharper retrieval** — `forge/runtime/memory.mjs` scores heading-chunks with recency
  decay and dedups near-duplicates.
- **Gated in-lane sub-delegation** — bounded recursive `delegate` (same company/workspace,
  depth-capped), off by default behind `FORGE_SUBAGENTS`.

### Added (reflection)
- **[docs/forge-and-solo-ai.md](docs/forge-and-solo-ai.md)** — honest verdict: can't equal
  a model, can equal the *experience*; "solo" reachable as an autonomous agent-system, not
  a self-contained intelligence.
- **[docs/solo-ai-roadmap.md](docs/solo-ai-roadmap.md)** — 5 phases (Safety → Self-improvement
  → Persistence → Self-set goals → Model-portability); first step `forge/runtime/safety.mjs`.

### Deferred
- Model-judge eval and an explicit reflection loop (reasons + dissent in decision 0004).
  Kernel **1.5.0 → 1.6.0**; still model-agnostic; gate 0/0.

## [1.5.0] — 2026-06-27 — Forge runtime capabilities (council-approved)

Per the new rule (additions need council approval first), the **Forge Capability
Council** ([decision 0003](government/decisions/0003-forge-runtime-capabilities.md))
deliberated, approved a slate, and deferred the rest. Built and verified by running.

### Added (approved)
- **Memory & retrieval** (`forge/runtime/memory.mjs`) — dependency-free lexical retrieval
  over the memory registers and decisions; injects relevant context before acting and
  appends dated lessons to `memory/registers/forge-lessons.md`.
- **Live-run robustness** (`forge/runtime/llm.mjs`) — retry/backoff (honours `Retry-After`),
  token-usage surfacing, safe message trimming.
- **Observability** — per-step timing + usage, run totals, and a read-only
  `forge/inspect.mjs` (`--list` / `--last`).
- **Planning** (`forge/runtime/plan.mjs`) — a `plan`/`update_plan` tool persisted to the trace.
- **Structural self-check** (`forge/runtime/eval.mjs`, `forge/eval-rubric.md`) — a
  deterministic post-run verdict; advisory, never gates `finish`.

### Deferred
- Sub-delegation, model-judge evaluation, wall-clock deadline (reasons + dissent in
  decision 0003). Kernel **1.4.0 → 1.5.0**. Still model-agnostic; `--dry-run` 0/0.

## [1.4.0] — 2026-06-27 — The Forge runtime (executable agents)

### Added
- **[Forge runtime](forge/runtime/)** — the Forge's action loop made executable: an agent
  takes a goal and runs **plan → act → observe → reflect**, calling real tools, until done.
  `npm run forge:run -- <agent-dir> "<goal>" [--dry-run]`.
- **Model-agnostic by design** (a tool *like* a capable AI assistant, not tied to any one
  model): the model is chosen via `FORGE_MODEL` (no hardcoded default; a live run without
  it errors clearly). `--dry-run` runs end-to-end with no model and no API key.
- **Guardrails** (`forge/runtime/tools.mjs`): writes are symlink-hardened and restricted to
  the agent's workspace; the gate is a first-class tool; no company-cross. **Auditable run
  traces** under `forge/runs/`.
- Designed by a **7-lens council** (control loop, tools, guardrails, memory, evaluation,
  planning, DX) with a synthesis + red-team pass; built coherently and verified by running.

### Notes
- Kernel **1.3.0 → 1.4.0**. Gate clean (0/0); runtime traces and agent workspaces are
  gitignored. A first schema-constrained council run failed (structured-output retry cap);
  re-run schema-free.

## [1.3.0] — 2026-06-27 — The Forge + support-mode audio

### Added
- **The [Forge](forge/)** — AIEOS as a sharp AI that turns intent into agents and drives
  their actions. v0: the two loops ([creation](forge/creation-loop.md),
  [action](forge/action-loop.md)), the [action contract](forge/action-contract.md), and a
  runnable scaffolder (`npm run forge -- <dir> <name> "<mission>"`) that writes a
  contract-valid 5-file agent. Example: `forge/examples/balance-scout`.
- **Support-mode audio rule.** When AIEOS supports another project, summary audios go to a
  top-level [resumo/](resumo/) folder at the support root (not `government/decisions/resumo/`).
  Codified in the [operating doctrine](kernel/laws/operating-doctrine.md) and both `/aieos`
  commands. Kernel **1.2.0 → 1.3.0**.

## [Unreleased] — 2026-06-27 — "Jinx" default voice

### Changed
- The audio generator's default voice is now the **`jinx` preset**
  (`pt-BR-ThalitaNeural`, rate +22% / pitch +20%). `scripts/gen-audio.mjs` gained
  named presets (`jinx`, `francisca`, `thalita`, `antonio`) and optional rate/pitch.
- Regenerated `government/decisions/resumo/audio/0001-resumo.mp3` in the Jinx voice.
- Bumped the `msedge-tts` devDependency to `^2.0.6` (older 1.3.x failed to connect to
  the Edge TTS endpoint); ran `npm install` so `npm run audio` works out of the box.

## [Unreleased] — 2026-06-27 — Mandatory audio summaries

### Added
- **Rule: every recorded discussion ships an audio summary.** New `decision-audio`
  conformance rule (9th rule): a `government/decisions/<NNNN>-*.md` record fails the
  gate unless a matching audio exists under `government/decisions/resumo/`.
- **`government/decisions/resumo/`** with `audio/` and `pdf/` subfolders to separate
  artifacts. Decision 0001's summary moved here (`audio/0001-resumo.mp3` +
  `0001-resumo.txt`, `pdf/0001-relatorio-detalhado.pdf`).
- **Reusable audio tool**: `scripts/gen-audio.mjs` + `npm run audio` — generates a
  spoken summary from narration text using the **free** Microsoft Edge neural TTS
  (no API key; default voice `pt-BR-FranciscaNeural`). `msedge-tts` added as a
  devDependency; `.gitignore` added for `node_modules`.
- `folder-readme` exempts media folders (`audio/`, `pdf/`).

### Verified
- `decision-audio` bites: removing the audio makes `npm test` fail; restoring it
  passes. Both scopes green (9 rules).

## [Dogfood] — 2026-06-27 — AIEOS operated through AIEOS

The system was used to extend itself: a request to create companies was run through
the documented Government flow rather than ad-hoc.

### Added
- **Government enterprise decision log** (`government/decisions/`) — where Government
  council decisions land (decisions flow up, memory-flow protocol). First record:
  [0001](government/decisions/0001-charter-four-new-companies.md) (T3).
- **Four more kernel-native companies** chartered by decision 0001 and built by a
  28-track fan-out: **AI-Film-Studio**, **AI-Healthcare-Clinic** (organizational
  structure only — no medical advice, per the Auditor's recorded condition),
  **AI-Music-Label**, **AI-Consulting-Firm**. Declared `Requires kernel: ^1.1.0`.

### Flow exercised (size → council → plan → fan-out → gate → memory → report)
- T3 sizing; council minutes with recorded dissent; 28-track fan-out; gate caught 23
  issues; `--fix` auto-repaired 17 links; Auditor cleared 6 by hand → **0/0 in both
  scopes**. Registry, companies index, and dashboard updated.

### State
- **15 companies, 258 agents, 42 councils**, kernel 1.1.0, both gates green. The OS
  demonstrably extends itself through its own flow.

## [1.1.0] — 2026-06-27 — Reporting & Enterprise Dashboard

First MINOR kernel release — a backwards-compatible capability addition.

### Added
- **Kernel: [reporting protocol](kernel/protocols/reporting.md)** (6th protocol) — the
  standing telemetry channel by which companies expose health/KPIs upward to the
  Government, read-only (Directive #2). Bumped `kernel/VERSION` → **1.1.0**.
- **Government [dashboard](government/dashboard/)** — `npm run dashboard` scans the
  registry and every company and emits an enterprise roll-up
  (`government/dashboard/dashboard.md`): **11 companies, 206 agents, 34 councils**.
  Read-only aggregation; it writes nothing inside any company.

### Verified — versioning works
- After the 1.0.0 → 1.1.0 bump, **all 11 companies (declaring `^1.0.0`) stayed
  compatible** and both conformance scopes remained green. A MINOR addition broke
  nothing — exactly what the `kernel-compat` rule guarantees.

### Context

AIEOS is extracted from three existing companies — AI Software Company,
AI Game Studio, AI Tabletop Studio — whose duplicated structure became the
kernel. The existing companies are **preserved**; migration onto the kernel is
planned for Phase 2 and is non-destructive.
