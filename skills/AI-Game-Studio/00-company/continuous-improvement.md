# ♻️ continuous-improvement.md — Directive #8 in Practice

`Status: stable`

> Finishing a task is the cheapest moment to make the game better. Part of the
> [charter](COMPANY.md). Owned operationally by [12-systems/continuous-improvement/](../12-systems/continuous-improvement.md).

## The Rule
**Completing any task triggers a post-task improvement scan** ([Directive #8](prime-directives.md)).
Before a track is marked done, its owner sweeps the area it just touched for nearby wins and
files them — not as silent edits, but as **proposals** the studio can prioritize.

## The Scan — Four Lenses
Look at the code, content, and systems immediately adjacent to what you changed and ask:
1. **Gameplay / Fun** — is there a cheap tweak that makes this moment more satisfying, clearer, or more replayable?
2. **Performance** — did this touch a hot path? Any obvious allocation, draw call, or load-time win within the frame budget?
3. **UX / Accessibility** — is anything now harder to read, remap, or play for someone with different abilities?
4. **Architecture / Maintainability** — is there duplication, a leaky abstraction, or rising [technical debt](../10-memory/) the next agent will curse?

## What Happens to a Finding
- **In-scope, trivial (T0):** fix it now and note it.
- **Out-of-scope or larger:** file a **proposal**, never a silent expansion ([Directive #2](prime-directives.md) keeps the Orchestrator in charge of scope).
  - Gameplay/feature ideas → [10-memory/future-features](../10-memory/).
  - Architecture/perf smells → [10-memory/technical-debt](../10-memory/).
  - Process or framework gaps → [12-systems/continuous-improvement/](../12-systems/continuous-improvement.md).
- Each proposal names the affected optimization target (see [COMPANY.md](COMPANY.md)) and a rough tier, so the Orchestrator can size it later.

## Why Proposals, Not Edits
Scope discipline is a feature: a track that quietly "improves" an unrelated system breaks
disjoint ownership, dodges the approval gate, and erodes trust. The scan makes the studio
**compound** — every task leaves a trail of vetted next steps — without letting any single
task sprawl. Improvements that survive prioritization re-enter through [the core flow](core-flow.md)
like any other request.

## Output of the Scan
A short, honest list: "found N improvements, filed N as proposals, fixed N trivially, found
nothing in M areas." Empty scans are valid and worth recording — they prove the area was checked.
