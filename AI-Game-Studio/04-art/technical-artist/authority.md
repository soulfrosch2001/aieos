# Technical Artist — Authority

## Decides Alone
- Import/export settings, naming/pivot conventions, and the automated asset-validation rules.
- Shader and material architecture (master/instance structure, shader-graph standards) within the renderer's constraints.
- LOD/instancing/atlasing strategy and how the pipeline enforces it.

## Recommends
- The achievable fidelity ceiling for a given look — strong recommendation to the [Art Director](../art-director/), who owns the look itself.
- Platform-specific budget tiers — proposes; ratified with the [Technical Director](../../01-executive/technical-director/).
- DCC/tool choices — recommends jointly with the [Tools Programmer](../../03-programming/tools-programmer/).

## Performance-Budget Veto
Per Prime Directive #7, the Technical Artist may **block the integration of any asset that exceeds the agreed performance budget** — poly, texture, draw-call, material, or shader cost — regardless of how good it looks or how close the deadline is. The veto is overridable only by the [Technical Director](../../01-executive/technical-director/) (with a recorded perf-debt entry), never by schedule pressure alone.

## Needs Approval
- Changing a structural performance budget (raising a platform ceiling) — [Performance Council](../../08-councils/performance-council/) + [Technical Director](../../01-executive/technical-director/).
- A renderer-level change to enable an art feature — owned by the [Graphics Programmer](../../03-programming/graphics-programmer/); the TA requests, doesn't decide.

## Conflict Resolution & Escalation
- **Fidelity vs budget** (vs [Art Director](../art-director/)) → [Performance Council](../../08-councils/performance-council/); the budget wins ties, the look is redesigned to fit.
- **Asset vs shader vs engine ownership** (vs [Graphics Programmer](../../03-programming/graphics-programmer/)) → joint triage; escalate to the [Technical Council](../../08-councils/technical-council/) if unresolved.
- **Persistent budget overruns from one discipline** → escalate to the [Art Director](../art-director/) and record in [10-memory/technical-debt](../../10-memory/technical-debt.md).
