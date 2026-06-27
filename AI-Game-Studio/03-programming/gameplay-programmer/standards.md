# Gameplay Programmer — Standards

## Coding Standards

- **Deterministic-ish input handling.** Input is polled and buffered consistently; the same press at the same game state yields the same action. No swallowed inputs, no order-of-execution surprises.
- **No feel constants buried in code.** Buffer windows, coyote frames, shake amplitude/decay, hit-stop duration, accel curves — all live in data with named, documented fields and ranges.
- **Fixed vs variable timestep awareness.** Gameplay/physics logic runs on the fixed step; presentation runs per-frame and interpolates. Never mix; never let frame rate change behavior.

### Godot
`_physics_process` for movement/collision feel, `_process` for visual smoothing; input buffered in `_unhandled_input`. Feel data as exported `Resource`. Avoid logic in `_process` that affects gameplay state.

### Unity
`FixedUpdate` for movement, `Update` for input read + visuals, `Time.fixedDeltaTime` not `Time.deltaTime` in stepped logic. Interpolate rigidbodies. Feel data in `ScriptableObject`s.

### Unreal
Tick groups respected; physics-coupled logic on substeps. Use `Enhanced Input`. Avoid frame-rate-dependent timers — use accumulated `DeltaTime` or timeline curves.

## Review Checklist

- [ ] Input responds on the frame of press; buffer + coyote windows present and tuned.
- [ ] No magic feel numbers in code — all in data, hot-reloadable.
- [ ] Logic is frame-rate independent (verified at 30 and 144 fps).
- [ ] Feel decoupled from logic (events, not direct calls into gameplay).
- [ ] Controller is an explicit state machine; cancel windows correct.
- [ ] Screen shake/hit-stop reviewed for nausea and readability.

## Common Mistakes

- **Input lag** from reading input one frame late or buffering past the action frame.
- **Frame-dependent logic** — using `deltaTime` wrong, or per-frame increments that drift with fps.
- **Feel hardcoded** — magic numbers a designer can't reach.
- **Missing coyote time / input buffer** — jumps that feel "stolen," fair inputs dropped.
- **Screen-shake nausea** — over-amplified or non-decaying trauma that hides the action and sickens players.

## Quality Gates

- Input-to-action latency within budget on the worst supported platform.
- 100% of feel parameters data-driven and hot-reloadable.
- Zero frame-dependent gameplay logic.
- Feel systems pass an accessibility/nausea review (shake intensity options exposed).

## Performance Checklist

- Per-frame cost of feel systems (shake, particles, hit-stop, camera spring) measured and within budget.
- No allocations per frame in input/feel hot paths.
- Feel scales down gracefully under load without breaking responsiveness.
- Budget tradeoffs that threaten frame time escalated to [Performance Council](../../08-councils/performance-council/).

## Best Practices

- Prototype dirty to find the fun; harden only what earns it.
- Keep a live-tuning panel for designers from day one.
- Build feel as event listeners, never as dependencies of core logic.
- Measure latency; don't trust your thumbs alone.
- Always ship shake/rumble intensity options.

## KPIs

- **Input-to-action latency** (ms and frames) on worst supported hardware.
- **Playtest feel score** — perceived responsiveness/fun from hands-on sessions.
- **% of feel parameters that are data-driven** (target: 100%).
