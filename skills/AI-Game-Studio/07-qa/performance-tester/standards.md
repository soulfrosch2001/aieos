# Performance Tester — Standards

## Quality Gates (Perf Budgets)
These are floors and ceilings, not aspirations. A build is measured against them per tier, with a capture on file.
- **Frame target:** 60fps (16.7ms) on mid and up; **hard floor 30fps (33.3ms)** on min-spec PC and handheld — and the floor must hold in the *worst-case* scene, not the menu.
- **Frame time, not FPS:** judged in milliseconds; 1% lows must stay under floor — sustained 1% low below floor is a fail even if the average is green.
- **Memory ceilings (per platform):** min-spec PC and handheld held to the platform's working budget (e.g. Steam Deck ~good fit under shared-memory pressure); console to the cert budget; peak *and* steady-state both inside, with no upward drift across a soak run.
- **Load times:** cold boot and level load inside the agreed target (player-patience, not SSD-spec); streaming with no visible hitch on traversal.
- **Stability:** **zero crashes and zero hard hitches in the soak/endurance test** (multi-hour); no leak (steady-state flat); no thermal throttle dropping the floor on handheld.
- **Verdict:** all gates green for the tier, or a recorded [../qa-lead/](../qa-lead/) / [../../08-councils/performance-council/](../../08-councils/performance-council/) risk acceptance for the exact breach.

## Acceptance Criteria
- [ ] Frame floor holds on min-spec **and** handheld in the worst-case scene, captured.
- [ ] 1% lows stay under floor; no sustained spikes attributable to a regression.
- [ ] Peak and steady-state memory inside the platform ceiling; no soak-run drift.
- [ ] Load and streaming targets met with no visible hitch.
- [ ] Soak test passes clean: no crash, no leak, no thermal floor-drop.
- [ ] Every regression is GPU/CPU-bound-identified, traced, and filed.

## Performance Bug Report Template
```
ID:               PERF-####
Title:            <system/scene> drops below floor on <tier>
Severity:         Blocker | Critical | Major | Minor
Build:            <build number / commit hash>
Platform/Tier:    Min-spec PC | Mid | High-end | Console <model> | Steam Deck/Handheld
Scene / Repro:    <exact level + steps to reproduce, deterministically>
Metric affected:  FPS | frametime (ms) | memory (MB) | load (s)
Budget vs Actual: <e.g. 33.3ms floor vs 41.2ms measured @ 1% low>
GPU / CPU bound:  GPU | CPU (thread: main | render | GC) | streaming I/O
Capture/trace:    <Insights / Unity Profiler / RenderDoc / Godot profile attached>
Frequency:        Always | Worst-case only | Intermittent (X/N runs) | After N hours
```

## Edge Cases
- **Worst-case scenes:** the boss arena with every particle and decal alive, the open-vista draw-call storm, max enemies + max VFX simultaneously. The average is fine; this is where the floor breaks.
- **Alt-tab / focus loss / resume:** device-lost, GPU resource rebuild, and the hitch on return to foreground.
- **Memory fragmentation over long sessions:** hours of load/unload cycling that fits at minute one and OOMs at hour three.
- **Streaming hitches:** fast travel, world-streaming seams, and texture/mip pop-in on slow storage.
- **Thermal throttling:** the handheld at hour two — clocks drop, the floor with them; test hot, not cold.
- **Min-spec reality:** spinning HDD load times, low VRAM eviction, and the integrated-GPU fallback path nobody profiles.

## Automation Suggestions
- **Per-commit frametime tracking:** automated perf capture in CI on a fixed benchmark scene, so a regression is caught at the commit that caused it — not at the RC.
- **Regression graphs:** trend frame time, peak memory, and load time per build; flag a delta past threshold automatically and post it to the [../../08-councils/performance-council/](../../08-councils/performance-council/).
- **Soak / endurance tests:** nightly multi-hour automated run on target hardware (incl. handheld) watching for crash, leak, and thermal floor-drop.
- **Automated captures attached to failures:** when CI flags a regression, auto-attach the Insights/Unity/CSV trace so triage starts with data, not a repro hunt.
- Feed every run into [../../10-memory/performance-reports.md](../../10-memory/performance-reports.md); cross-reference the workflow in [../../09-workflows/performance-optimization.md](../../09-workflows/performance-optimization.md).
