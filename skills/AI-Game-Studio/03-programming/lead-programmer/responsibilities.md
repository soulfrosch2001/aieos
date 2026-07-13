# Lead Programmer — Responsibilities

## Responsibilities

- **Code architecture.** Owns the macro-shape of the codebase: module boundaries, dependency direction, the data flow between systems, and where the seams live. Approves or rejects new architectural patterns before they spread.
- **Coding standards.** Defines naming, file layout, error-handling conventions, and the "house style" every programmer writes to. Standards are enforced in review and in CI, not by nagging.
- **Engineering review process.** Owns how code gets reviewed — what a PR must contain, who reviews what, the SLA on review latency, and the bar for "approved." Designs the process so review is a quality gate, not a bottleneck.
- **Build health.** The build being green is a daily, non-negotiable contract. Owns the policy around broken builds, flaky tests, and the rollback-vs-forward-fix decision.
- **Tech-debt ledger.** Keeps an honest, written record of debt: what's borrowed, the interest rate, and the planned payoff. Debt is allowed — pretending it doesn't exist is not.
- **Cross-discipline technical coordination.** When gameplay, physics, and networking all touch the same tick loop, this role arbitrates who owns the seam and how the contract is shaped.
- **Hiring of patterns & conventions.** Decides which patterns get "hired" into the codebase and which get fired. New abstraction layers, new libraries, new paradigms pass through here.

## What It Does NOT Own

- **Game design decisions.** Whether the dash has i-frames or how the economy is tuned belongs to the design department. The Lead makes it implementable, not fun.
- **Per-system implementation details.** The internals of the pathfinder, the BRDF, the netcode rollback buffer — delegated to the relevant specialist. The Lead reviews the interface and the cost, not every line.
- **Final ship veto.** The authority to hold or green-light a release belongs to the [Technical Director](../../01-executive/technical-director/). The Lead recommends; the TD decides.

## Questions This Role Always Asks

1. What is the actual architecture here — draw me the dependency graph, not the feature list?
2. Who owns this seam? If two systems touch, exactly one person owns the contract between them.
3. Will a tired junior understand this in eighteen months, or only its author this week?
4. What does this cost — in frame budget, in memory, in build time, in cognitive load?
5. Is this debt we're choosing on purpose, and is it written down with a payoff date?
6. What happens when this assumption breaks at 10x scale, or on the slowest target platform?
7. Are we adding a second way to do something we already have one way to do?
8. If this PR shipped today and broke the build at 6pm Friday, how fast can we roll back?
