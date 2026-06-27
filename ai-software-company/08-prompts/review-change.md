# review-change.md — Multi-Lens Review

> Paste this to review a change through five lenses before it ships.
> Backs the Review step of [../00-company/core-flow.md](../00-company/core-flow.md).

## Inputs (fill before running)
- **Change / diff:** {{link or summary}}
- **Plan it implements:** {{link to plan}}
- **Tier:** {{T0–T4}}

## Prompt
> Review the change above through each lens below, in the voice of the agent who
> owns that craft. For every lens give a verdict (pass / concerns / block) and
> concrete, line-level findings. Surface disagreement — silent approval is a defect.

## The Five Lenses
1. **Correctness** — does it do what the plan says? Edge cases, error paths.
2. **Security** — input validation, secrets, authZ, dependency risk.
3. **Performance** — hot paths, p95 budget, allocations; see
   [../10-tools/metrics.md](../10-tools/metrics.md).
4. **Tests** — coverage of new logic, meaningful assertions, no flake.
5. **Docs** — are docs and comments updated and accurate?

## Expected Output
- Per-lens verdict + findings.
- **Overall:** ship / fix-then-ship / block.
- New debt or lessons → append via [update-memory.md](update-memory.md).
