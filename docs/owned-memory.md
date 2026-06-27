# AIEOS Owned Memory — Design
Status: stable
Type: reference
Owner: CTO (Government)
Extends: none

## The question

How does AIEOS get memory it genuinely **owns** — memory that survives any model
swap, answers without a network, and makes the next run smarter than the last? The
honest answer starts by separating two things that are easy to conflate.

## The ownership boundary (honest)

**BORROWED, and unownable here.** Two things AIEOS rents and can never own without
owning a model:

- **Training knowledge** — the facts baked into `FORGE_MODEL`'s weights. Not in the
  repo; swap the model and it changes. Rented reasoning.
- **The context window** — the model's transient working memory. It is wiped every
  run and trimmed mid-run (`llm.mjs` drops the middle of long histories). Nothing
  durable may live there. Re-paid on every call.

**OWNED, and the only thing worth maximizing.** The repo's persistent store plus the
deterministic code that reads and consolidates it. This already runs with zero model
and zero dependencies:

- **Store** — `memory/registers/*`, `government/decisions/*`, `companies/*/memory/`,
  and the rich episodic traces in `forge/runs/*.json`.
- **Engine** — [`../forge/runtime/memory.mjs`](../forge/runtime/memory.mjs): gather →
  heading-chunk → lexical score (TF + recency half-life + Jaccard dedup) → inject;
  append-only writes via `appendLesson`.

That engine *is* owned operational memory. The mission is to deepen it, not replace it.

## What exists vs. what is missing

The **read** half is strong. The **write** half rots, and the richest owned record is
dark:

1. **No consolidation.** `forge-lessons.md` holds 17 byte-identical "Dry-run complete"
   rows. Capture works; nothing distills. Memory that only grows is a landfill.
2. **Episodic traces never feed retrieval.** `forge/runs/*.json` carries the full
   plan→act→observe→evaluate record — the richest owned memory — yet `gatherCorpus`
   reads only `.md` registers and ignores the traces entirely.
3. **Lexical scoring lacks IDF.** The current scorer (`Math.log(1+tf)`) lets common
   terms dominate; rare, discriminating terms — the ones that make a hit *relevant* —
   are not rewarded.
4. **Mid-run findings are lost.** A `stuck`/`incomplete` run leaves nothing behind;
   only `outcome === 'done'` writes a lesson, so failed-run learning evaporates with
   the window.

## Approved v1 — the three owned layers, closing the loop

We keep the model **stateless and borrowed**: every run rehydrates its working set
from the owned store and deposits what it learned back. v1 makes both halves real.

**Recall (deepen the read).** Add IDF to the existing scorer so rare terms win — true
BM25-style weighting, one corpus pass, fully deterministic and dry-run-testable.
- *Edit* [`../forge/runtime/memory.mjs`](../forge/runtime/memory.mjs): compute
  document-frequency over the chunk corpus once inside `retrieve()`, replace the inline
  `log(1+tf)` term with a BM25 score. Same file, same signature, no new dependency.

**Episodic layer (light up the dark store).** Make `forge/runs/*.json` retrievable.
- *Create* `forge/runtime/episodic.mjs`: `summarizeRun(trace)` →
  `{ id, ts, agent, goal, outcome, verdict, toolsUsed, summary, gateClean }` (pure,
  one record per trace); `gatherEpisodes(repoRoot)` maps traces into corpus docs
  (`text = goal + summary + tools`) so the existing `retrieve()` scores them unchanged.
- *Edit* `memory.mjs` `gatherCorpus()` to fold in `gatherEpisodes`, gated by
  `FORGE_MEMORY`. Cap episodes per retrieve and lean on recency decay so traces cannot
  swamp curated lessons.

**State digest (no learning lost).** Persist every run's working set, not just wins.
- *Edit* [`../forge/runtime/loop.mjs`](../forge/runtime/loop.mjs): call `appendLesson`
  (or a thin `appendDigest`) **unconditionally** at run end with
  `confidence: 'tentative'` for non-`done` outcomes, so a stuck run's plan and key facts
  survive into the next run's rehydration.

**Consolidation — the "sleep" step (fix the write half).** Distill, never erase.
- *Create* `forge/runtime/consolidate.mjs`, dependency-free, reusing `memory.mjs`
  internals (`terms`, `jaccard`): `dedupRegister(text)` folds exact/near-duplicate
  Lesson rows into one with a `×N seen` tally and the earliest date; `promote(facts)`
  graduates facts seen ≥3× and marked `firm` up into `lessons-learned.md` (knowledge
  flows down, decisions up — see [memory-flow](../kernel/protocols/memory-flow.md)).
  `consolidate(repoRoot, { dryRun = true })` returns a **diff plan** and writes only on
  `--apply`. Before any mutation it copies the register to
  `memory/registers/.attic/<file>.<ts>.md` and appends a `## Consolidation log` entry, so
  every fold is one file-restore or `git revert` away.
- *Run mode:* never auto-fires. A CTO/council step runs `--dry-run`, reads the plan,
  approves, then `--apply` — honoring Directives #7/#8 (append-mostly; correct by adding,
  supersede, never erase).

**Owned-layer map.** Episodic = `forge/runs/*.json` (+`episodic.mjs`). Semantic =
`government/decisions/*` + architecture/lessons registers. Procedural =
`lessons-learned.md` / quality standards, fed by `consolidate.mjs`. See
[`../memory/README.md`](../memory/README.md) and
[`../forge/runtime/README.md`](../forge/runtime/README.md).

## Deferred (and why)

- **Local embedding model** (owned weights, semantic recall). Deferred. It is a heavy,
  deliberate dependency, adds a build step, and is nondeterministic — hard to dry-run-
  test. BM25 + the episodic layer is fully owned, deterministic, dependency-free, and
  exploits structure embeddings ignore. Revisit behind a council gate only if lexical
  recall measurably fails *after* the store is consolidated and clean.
- **An API embedder.** Rejected outright: it re-borrows memory and breaks
  model-agnosticism.
- **A knowledge graph** (decisions → lessons → agents via ADR ids / `Links` /
  `Supersedes`). Deferred to a later tier; BM25 + episodic is the higher-leverage win
  first and carries less schema-coupling risk.

## Risks and mitigations

- *Over-dedup erases a real distinction.* Gate on exact-normalized matches first
  (near-zero false positives); keep Jaccard folding manual/CTO-run; append-only attic;
  dry-run by default; promotion requires `firm` confidence.
- *Episode flood swamps lexical scores.* Cap episodes per retrieve; recency decay
  already favors fresh, curated lessons.
- *Schema drift silently drops parsed rows/edges.* Guard the register parsers with a
  conformance test.

## The single highest-leverage first step

**Add IDF to the existing `retrieve()` scorer in
[`../forge/runtime/memory.mjs`](../forge/runtime/memory.mjs).** One function, one file,
no new dependency, fully dry-run-testable — the highest recall gain per line, and it
improves every existing and future retrieval immediately, before any new file is
created. Build BM25 first; episodic, digest, and consolidation follow.
