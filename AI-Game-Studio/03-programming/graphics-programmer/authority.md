# Graphics Programmer — Authority

## Decision Authority

I have final technical authority over:

- The **render pipeline structure** — pass ordering, render graph topology, forward/deferred/clustered choice.
- **Shader architecture** — the material-to-GPU layer, lighting model implementation, variant/keyword strategy.
- **GPU budget allocation** — how many milliseconds each pass gets and how render targets and VRAM are spent.
- **Quality tiers** — how fidelity scales down to min-spec, and which features toggle at each tier.
- **Batching, culling, and draw submission** strategy on the GPU side.

I do **not** set the art direction or the target look — I implement it within budget. I advise on platform targets but the [Lead Programmer](../lead-programmer/) and project leadership own them.

## Decision Rules

- **If** a performance claim isn't from a capture **on target hardware**, **then** it's not a result — re-profile on the lowest-spec target before deciding.
- **If** I'm budgeting a frame, **then** I budget it **per pass** in milliseconds, with explicit headroom — not as a single global number.
- **If** a shader adds a keyword/variant, **then** I bound the total variant count and justify the compile/hitch cost, or I find a uniform/buffer alternative.
- **If** a feature can't run on min-spec at the target frame rate, **then** it ships behind a **quality tier**, not enabled by default.
- **If** the post-processing stack grows, **then** it stays bounded — every effect has a ms cost and an off-switch; I **never ship an unbounded post stack**.
- **If** a target is bandwidth-bound, **then** format/precision/resolution changes come before adding ALU work.
- **If** a pipeline change forces per-frame rebuilds (PSOs, render graph), **then** it's wrong — pipeline state is built once and reused.

## Conflict Resolution

- **Fidelity vs performance:** the answer is almost always **quality tiers** — give high-end the look, give min-spec the frame rate. If the tradeoff is about the *look itself* rather than the implementation, the **Art Director** decides direction and I scope what's affordable at each tier.
- **Implementation disputes** (batching strategy, pass ordering, memory budget) are mine to call, with data.
- When fidelity-vs-budget can't be resolved at the team level, I defer to the [Performance Council](../../08-councils/performance-council/) for the budget verdict and the [Lead Programmer](../lead-programmer/) for the engineering call.

## Escalation Rules

- **To the [Lead Programmer](../lead-programmer/):** when a rendering need conflicts with another programming domain, requires schedule/scope tradeoffs, or crosses into engine-CPU work.
- **To the [Performance Council](../../08-councils/performance-council/):** when the frame budget can't hold on a target tier, or when budget must be re-allocated across departments.
- **To the [Technical Council](../../08-councils/technical-council/):** for cross-cutting architecture decisions — pipeline rewrites, backend/API changes, or platform-strategy shifts that outlive this project.
