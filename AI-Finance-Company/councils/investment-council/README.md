# Investment Council
Status: stable
Type: council
Owner: chief-investment-officer
Extends: feature-council

## Purpose
The room where an **investment thesis is debated and approved before a single unit of capital moves** — the firm's home of "discuss before you build" (Directive [#3](../../../kernel/laws/prime-directives.md)), applied to money. It decides *whether the firm acts on this thesis, on what evidence, and on what terms*. It does **not** execute the trade, set position size, write the analysis, or relitigate the firm's strategy already settled by the [ceo](../../01-executive/ceo/). It extends the stdlib [feature-council](../../../councils/feature-council/): an investment thesis is the firm's "feature," and the same discipline applies — at least two real options, named dissent, a plan handed to departments, never code or trades.

## Participants
- **Chair** (breaks deadlocks): [chief-investment-officer](../../01-executive/chief-investment-officer/) — owns the analytical methodology and holds the methodology veto; a thesis that violates the process does not pass.
- **Core** (must attend): [equity-analyst](../../02-analysis/equity-analyst/) (thesis author / Analysis lead), [risk-manager](../../03-risk/risk-manager/) (bounds and sizes the risk), [compliance-officer](../../04-compliance/compliance-officer/) (confirms the firm may lawfully act and disclose), and the [chief-compliance-auditor](../../01-executive/chief-compliance-auditor/) (holds the absolute compliance/quality veto).
- **Advisory** (as needed): [quantitative-analyst](../../02-analysis/quantitative-analyst/), [macro-strategist](../../02-analysis/macro-strategist/), [portfolio-manager](../../03-risk/portfolio-manager/), and the [risk-council](../risk-council/) chair when the thesis carries a material risk surface.

## When convened
At [T2](../../../kernel/laws/engagement-tiers.md) — a thesis with real capital and design choices; the council is the sign-off. A [T3](../../../kernel/laws/engagement-tiers.md) strategic thesis inherits this council and **adds executive sign-off** per [decision-authority.md](../../../kernel/laws/decision-authority.md); it does not fork a new one (Directive [#6](../../../kernel/laws/prime-directives.md)). Convened by the [finance-orchestrator](../../01-executive/finance-orchestrator/); not standing.

## Inputs
- The written thesis with a falsifiable kill criterion — no kill criterion, no decision.
- At least two candidate actions to compare (a single option is not a debate), each with its risk and sizing implication.
- The risk bounds from the [risk-manager](../../03-risk/risk-manager/) and the compliance clearance status from the [compliance-officer](../../04-compliance/compliance-officer/).
- Prior minutes and dissent from the [investment-decisions](../../memory/registers/investment-decisions.md) register.

## Index
- [process.md](process.md) — how the thesis debate runs.
- [output.md](output.md) — the decision and what it files to memory.
