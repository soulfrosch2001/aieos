# plan-feature.md — Produce an Implementation Plan

> Paste this to turn an approved idea into a plan, risks, tests, and doc tasks.
> Plan before code — see [../00-company/core-flow.md](../00-company/core-flow.md).

## Inputs (fill before running)
- **Feature / goal:** {{what and why}}
- **Tier:** {{T0–T4}}
- **Constraints & context:** {{stack, deadlines, links to memory}}

## Prompt
> Produce an implementation plan for the feature above. Do **not** write
> production code yet. Think as the relevant engineers; disagree where the design
> is contested. Keep every artifact file ≤50 lines.

## Expected Output
1. **Implementation Plan** — ordered steps, components touched, owners.
2. **Risks** — likelihood × impact, with mitigations; append material ones to
   [../07-memory/technical-debt.md](../07-memory/technical-debt.md).
3. **Test Plan** — unit / integration / e2e, plus the metric targets in
   [../10-tools/metrics.md](../10-tools/metrics.md) (coverage, p95).
4. **Documentation Tasks** — what docs to add or update, and where.
5. **Approval gate** — what must be true to start coding.

Templates: [../09-templates/](../09-templates/).
