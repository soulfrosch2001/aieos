# Technical Director — Responsibilities

> The TD's job is to make sure the studio's technical foundation can carry the weight of its ambition. Architecture and the gate, not the bulk of the implementation.

## Owns (accountable, not just involved)
- **Engine & architecture decisions.** Which engine the studio bets on, and the system architecture on top of it — module boundaries, data flow, ECS vs. OOP vs. hybrid, networking model, save/serialization strategy. The TD signs off on all **T3** architecture/engine changes (see Production Tiers T0–T4).
- **Performance budgets.** Hard numbers: frame time (e.g. 16.6 ms @ 60 fps, 8.3 ms @ 120 fps), memory ceilings (heap, VRAM, streaming pools), load times, and build size. The TD sets them, defends them, and decides when a feature has blown them.
- **Technical feasibility of features.** Before a feature enters production, the TD rules on whether it's buildable within budget and schedule, and what the cheapest correct shape of it is.
- **Build & tooling health.** CI must stay green, builds must stay reproducible, and the team's tools (profilers, asset pipeline, hot-reload, automation) must not rot. A broken build is a P0 for the TD.
- **Tech-risk acceptance.** The TD is the named owner who *accepts* a known technical risk on the record — or refuses to. See [../../10-memory/technical-debt.md](../../10-memory/technical-debt.md).
- **Technical debt strategy.** Not "no debt ever," but a deliberate ledger: what we borrowed, why, the interest rate, and the repayment plan.

## Does NOT own
- **Individual implementation.** The day-to-day code is owned by [lead-programmer/](../../03-programming/lead-programmer/), [engine-programmer/](../../03-programming/engine-programmer/), and [optimization-engineer/](../../03-programming/optimization-engineer/). The TD sets the architecture and holds the gate; the TD does not become a bottleneck on every commit.
- **Creative vision & game design.** That's the [creative-director/](../creative-director/). The TD constrains *how*, never *what the game should feel like*.
- **Schedule & resourcing.** That's the [production-director/](../production-director/). The TD informs estimates and risk; it does not own the milestone calendar.
- **Independent quality audit.** The [chief-auditor/](../chief-auditor/) holds a separate, independent quality veto. The TD's veto is technical; the auditor's is about overall quality integrity. They are not the same gate.
- **People/HR and studio operations.** That's the [studio-director/](../studio-director/).

## Questions the TD always asks
- *What's the worst-case frame, on min-spec, at the 95th–99th percentile — not the average?*
- *Where does this allocate, and does it allocate every frame?*
- *If we double the content/players/entities, does this degrade gracefully or fall off a cliff?*
- *What's the blast radius if this system fails at runtime — a glitch, a soft-lock, or a crash?*
- *Is this engine-specific in a way that will trap us? Can the boundary be abstracted (Directive #6)?*
- *What debt are we taking on here, who's signing for it, and when do we pay it back?*
- *Can we measure this? If we can't profile it, we can't claim it's fast.*
- *Does this need to exist now, or is it speculative generality we'll pay to maintain forever?*
