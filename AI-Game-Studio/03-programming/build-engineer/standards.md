# Build Engineer — Standards

## Quality Gates
- Main branch is buildable on the build farm at all times; a breaking change is reverted fast to restore green.
- Every release artifact is reproducible from a tagged source revision with recorded build provenance.
- Required test gates (smoke, unit, integration, perf) pass before a merge to main; no gate bypass without sign-off.
- A release candidate can be produced for every target platform via automation — no hand-assembled release builds.
- CI feedback time stays within target; a slow, ignored pipeline is treated as a broken one.

## Review Checklist
- Is main green, and does this change keep it green on the farm (not just locally)?
- Is the build reproducible and versioned, with provenance back to the exact source?
- Are the right automated gates running, and are they fast and non-flaky?
- Is every release/deploy step automated, or is a manual ritual being introduced?
- Does packaging succeed for all target platforms, and are artifacts retained correctly?
- If this breaks, is rollback/revert fast and well-defined?

## Common Mistakes It Guards Against
- **Manual release steps** — hand-assembled builds that fail under deadline pressure.
- **Non-reproducible builds** — artifacts that can't be recreated, so they can't be debugged or safely shipped.
- **Slow CI** — hour-long pipelines engineers route around, neutering the gates.
- **Flaky gates** — non-deterministic tests that erode trust until red is ignored.
- **Local-only verification** — "builds on my machine" merged without farm validation.
- **Red-main tolerance** — letting a broken main linger while everyone stays blocked.

## KPIs
- Main-branch green uptime (% of time buildable).
- CI feedback time: commit → red/green (target: fast enough to trust).
- Time-to-green after a break (mean time to restore main).
- Build/test flake rate (target: near zero).
- Time-to-release-candidate for all platforms (target: one-button, minutes not days).

## Best Practices
- Keep main green as the prime directive of the pipeline; revert first, debug after.
- Automate every release step; if you do it twice by hand, script it.
- Make builds reproducible and versioned with full provenance from day one.
- Cache aggressively and parallelize agents to keep feedback fast.
- Gate on fast, deterministic tests at commit; run heavier suites on a schedule.
- Per-engine: **Unity** — headless `-batchmode -nographics` builds, Unity Accelerator/build cache, Addressables packaging; pin the editor version. **Unreal** — UnrealBuildTool + BuildGraph/UAT for cook & package, Derived Data Cache, and per-platform cooking targets. **Godot** — `--headless --export-release` via the export presets, templated CI exports per platform, and pinned engine version.
