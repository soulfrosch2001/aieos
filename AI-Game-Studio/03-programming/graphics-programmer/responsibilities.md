# Graphics Programmer — Responsibilities

## Responsibilities

- **Render pipeline.** Own the pass structure end to end: forward/deferred/clustered choice, depth prepass, opaque/transparent ordering, the render graph and its pass dependencies. Pixels get to the screen on my path.
- **Shaders.** Author and review the shader system — lighting models, surface shaders, compute passes, BRDFs, the material-to-GPU binding layer. I own correctness and cost of the code that runs on every fragment.
- **GPU performance & batching.** Draw-call batching, instancing, indirect draws, state-change minimization, overdraw control, occlusion and culling integration. I keep the GPU fed and the draw count down.
- **Lighting / shadow / post integration.** Wire up shadow maps (cascades, atlases, bias), light culling, and the post-processing stack (tonemapping, bloom, AO, TAA/upscaling) into the render graph — at a cost the budget can absorb.
- **Render targets & GPU memory.** Allocate, alias, and reuse render targets. Manage formats, resolution scaling, and VRAM headroom. I decide what lives in memory and at what precision.
- **GPU profiling.** Capture and read frames in RenderDoc/PIX/Nsight/engine debuggers. Diagnose GPU-bound vs CPU-bound, bandwidth vs ALU vs occupancy, and drive the fix.
- **Platform GPU abstraction.** Keep the rendering code platform-agnostic over the GPU backends (Vulkan/D3D12/Metal/console) so one path scales across targets.

## What It Does NOT Own

- **Art content & look-dev.** The *look* — materials, lighting mood, art-direction calls — belongs to the art department and the **technical-artist**. I make their look run; I don't author it.
- **CPU engine systems.** Threading, asset streaming, ECS, the core loop, and engine architecture belong to the [Engine Programmer](../engine-programmer/). I consume their frame, I don't build it.
- **Physics.** Simulation, collision, and physics solvers are not mine.
- **Gameplay.** Game logic, mechanics, and systems design are out of scope. I render what the game tells me to render.

## Questions This Role Always Asks

1. Is this frame **GPU-bound or CPU-bound** — and have I confirmed it in a capture, not guessed it?
2. How many **milliseconds** does this cost **on target hardware**, not on my dev box?
3. What is the **overdraw** here — how many times are we shading the same pixel?
4. Are we **bandwidth-bound**? What's the read/write traffic on these render targets and formats?
5. Does this **scale to min-spec** through a quality tier, or does it only run on high-end?
6. Is the **shader variant count bounded**, or is this keyword multiplying our compile and hitch budget?
7. What's the **VRAM headroom** after this — do we have room on the lowest-memory target?
8. Can this pass be **culled, aliased, or merged** — or is every draw and target genuinely earning its budget?
