# CLAUDE.md

This repository is managed by an **AI Software Company** — an operating system for software
engineering. Read [COMPANY.md](COMPANY.md) (the constitution) before acting.

## Core Flow
```
User Request → Executive Orchestrator → Council (when required) → Planning
→ Approval Gate → Implementation → Review → Documentation → Memory Update
```
Detail: [core-flow.md](core-flow.md). Right-sizing: [engagement-tiers.md](engagement-tiers.md).

## Non-Negotiables
- **Default to a 15-agent parallel fan-out** per request — decompose into up to 15
  concurrent tracks with disjoint file ownership. See
  [orchestration-policy.md](orchestration-policy.md).
- **Plan before code.** The Orchestrator routes; it never writes production code.
- **Files target ≤50 lines** (exceed only when truly indivisible). One agent = one folder.
  See [conventions.md](conventions.md) and [file-structure.md](file-structure.md).
- **Disagreement is required**, fake consensus is a defect.
- **Every important decision updates [memory](../07-memory/).**
- See all rules in [prime-directives.md](prime-directives.md).

## Where Things Live
Agents are folders, e.g. [../01-executive/executive-orchestrator/](../01-executive/executive-orchestrator/),
[../03-product/product-manager-02/](../03-product/product-manager-02/),
[../02-engineering/database-engineer-02/](../02-engineering/database-engineer-02/).

## Every Major Change Produces
Meeting Minutes · Risks · Implementation Plan · Testing Plan · Documentation Tasks ·
Technical-Debt Review — templates in [../09-templates/](../09-templates/).
