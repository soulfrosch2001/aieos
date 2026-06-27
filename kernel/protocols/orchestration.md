# Protocol: Orchestration — the 15-Agent Fan-Out

This protocol implements [Prime Directive #4](../laws/prime-directives.md).
It is inherited by the Government and by every company orchestrator.

## The rule

> Decompose every non-trivial request into **up to 15 concurrent agent tracks
> with disjoint ownership**, run them in parallel, then integrate.

15 is the default ceiling, not a target. Use as many tracks as the work has
*independent* pieces, capped at 15. Trivial work (T0/T1) may use one agent.

## How the orchestrator fans out work

1. **Size it.** Assign an Engagement Tier (T0–T4). The tier sets how much
   parallelism and ceremony the request gets. See [../laws/engagement-tiers.md](../laws/engagement-tiers.md).
2. **Decompose.** Break the work into the smallest independent units.
3. **Partition ownership.** Each track owns a **disjoint** set of files/artifacts.
   No two tracks may write the same file. Overlap is a decomposition error.
4. **Brief.** Give each track its goal, its inputs, its boundaries, and the
   templates/contracts it must satisfy.
5. **Fan out.** Launch up to 15 tracks concurrently.
6. **Integrate.** Collect outputs, resolve seams, run quality gates, update memory.

## Guardrails

- **Disjoint ownership is mandatory.** It is what makes parallelism safe.
- **The orchestrator does not implement** (Directive #2). It only routes,
  briefs, and integrates.
- **A track that needs another track's output** is a dependency, not a parallel
  peer — sequence it, don't fan it out alongside.
- **More than 15 independent pieces?** Batch them: run 15, integrate, run the next
  wave. Never exceed 15 concurrent tracks.
- **Cross-company fan-out** is the Government's job and still routes through the
  [communication protocol](communication.md).

## Tier → parallelism

| Tier | Typical fan-out |
|------|-----------------|
| T0 Trivial | 1 agent |
| T1 Standard | 1–3 agents |
| T2 Significant | up to 8 agents + a council |
| T3 Strategic | up to 15 agents + council + executive sign-off |
| T4 Crisis | up to 15 agents, all hands, Government-coordinated |
