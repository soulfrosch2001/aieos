# Graphics Programmer — Standards

## Coding Standards

- **Shader authoring conventions:** consistent naming for stages/resources, documented BRDF and lighting model, no magic constants — drive parameters from buffers. Comment the *cost* of expensive blocks (loops, texture fetches, branches).
- **Bounded variants:** every keyword/permutation is justified and counted. Prefer uniform/buffer branches and static config over multiplying the variant matrix.
- **No per-frame pipeline rebuilds:** PSOs, render-graph layout, and shader pipelines are built once and cached. Rebuilding state mid-frame is a bug.
- **Platform-agnostic abstractions:** rendering code targets the engine's render abstraction, not a single backend. Backend-specific code is isolated and clearly fenced.

### Godot
`.gdshader` with explicit `render_mode`; use `RenderingDevice` compute/pipelines cached at setup, not per-frame. Don't allocate framebuffers or pipelines inside the render loop.

### Unity
One SRP per project (URP **or** HDRP). Strip Shader Graph variants in build settings; declare `ScriptableRenderPass` allocations up front. Avoid `Camera.Render`/material instantiation per frame.

### Unreal
Custom passes through RDG with pooled transient targets. Keep material instruction counts in check; use material instances over new materials. Budget Nanite cluster and Lumen trace cost explicitly.

## Review Checklist

- [ ] Profiled on **target/min-spec hardware**, capture attached.
- [ ] GPU-bound vs CPU-bound identified.
- [ ] Per-pass ms cost recorded against the frame budget.
- [ ] Overdraw measured; depth prepass / sort order justified.
- [ ] Shader variant count bounded and counted.
- [ ] Render targets aliased/reused; VRAM headroom confirmed on lowest target.
- [ ] Bandwidth (formats/precision/resolution) reviewed.
- [ ] Quality-tier behavior defined for min-spec.
- [ ] No per-frame pipeline/PSO rebuilds; no sync stalls introduced.

## Common Mistakes

- **Overdraw** — translucent layers and missing depth prepass shading the same pixel many times.
- **Shader variant explosion** — keywords multiplying compile time, build size, and runtime hitches.
- **Dev-box-only profiling** — "it's fine on my machine" that dies on min-spec.
- **Unbounded post stack** — effects piled on with no ms ceiling and no off-switch.
- **Bandwidth blowups** — fat formats, full-res targets, and ping-pong passes saturating memory.
- **Sync stalls** — CPU↔GPU readbacks or fences that drain the pipeline and spike frame time.

## Quality Gates

- No render change merges without a **target-hardware capture**.
- Frame must hold the **budget on every shipped tier**, including min-spec.
- Variant count stays under the agreed ceiling; build-time shader compile budget respected.
- VRAM stays within headroom on the lowest-memory target.
- No introduced GPU sync stalls or per-frame pipeline rebuilds.

## Performance Checklist

- **GPU frame ms on min-spec** within budget (and on each target tier).
- **Overdraw** within target — depth prepass and sort order doing their job.
- **Draw calls** within budget; batching/instancing applied.
- **Bandwidth** within memory limits; formats/precision chosen for cost.
- **VRAM** within headroom on the lowest target.
- Arbitrated by the [Performance Council](../../08-councils/performance-council/) when a tier can't hold.

## Best Practices

- Capture first, optimize second — let the GPU tell you where the time went.
- Budget the frame per pass and keep the ledger visible to the team.
- Build pipeline state once; reuse aggressively.
- Design quality tiers up front so fidelity degrades gracefully.
- Alias transient targets and pick the smallest format that holds quality.
- Keep the post stack bounded with explicit ms ceilings and off-switches.

## KPIs

- **GPU frame time** within budget across all target tiers (esp. min-spec).
- **Draw-call count** within target per frame.
- **VRAM headroom** maintained on the lowest-memory target.
- **Shader compile time / hitch** — bounded variant count, no runtime compile stutter.
