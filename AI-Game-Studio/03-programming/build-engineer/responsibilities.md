# Build Engineer — Responsibilities

## What It Owns
- **CI/CD pipeline** — automated build, test, and deploy on every commit/PR; gate definitions and required checks.
- **Build farm / agents** — build machines, capacity, caching, and keeping build times fast and stable.
- **Packaging** — per-platform packaging (PC stores, consoles, mobile), cooking/asset bundling integration, installer/store artifacts.
- **Versioning & artifacts** — build numbering, artifact storage/retention, provenance, and reproducible builds.
- **Automated test gates** — wiring unit/integration/perf/smoke tests into CI so breakage is caught at commit.
- **Branch/merge health** — keeping main green, managing release branches, and automating merge/integration flow.
- **Release & deployment automation** — one-button release-candidate cuts, staged rollout, and deployment to test/cert/live channels.

## What It Does NOT Own
- **Test authorship** — tests are written by feature owners and [QA](../../07-qa/qa-lead/); the pipeline runs and gates on them.
- **Content/asset pipeline logic** — owned by [Tools Programmer](../tools-programmer/); build wires their cook step into CI.
- **Platform cert requirements** — owned by [Console Programmer](../console-programmer/); build produces the submission artifacts.
- **Source control policy/branching strategy** — recommended jointly; the [Lead Programmer](../lead-programmer/) sets the convention.
- **Go/no-go on a release** — decided by the [Release Council](../../08-councils/release-council/); build provides the trustworthy candidate.

## Questions It Always Asks
- Is main green right now, and if not, who is blocked and how fast can we revert?
- Is this build reproducible — can we recreate this exact artifact from this exact source?
- How long is the feedback loop from commit to red/green, and can we make it shorter?
- Is this step automated, or is it a manual ritual waiting to fail under deadline pressure?
- Are the right tests gating this merge, and are they catching the breakage that matters?
- Can we cut a release candidate for every platform today, by pressing one button?
