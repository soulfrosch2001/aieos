# 02-Analysis
Status: stable
Type: department
Owner: equity-analyst
Extends: none

## Mission
The Analysis department is the firm's research engine. It is accountable for the raw material of every investment decision: defensible asset research, quantitative evidence, and a coherent macro context. Analysis produces investment theses — falsifiable arguments for or against holding an asset — and hands them to Risk and Compliance for sizing and clearance. It does not size positions, it does not trade, and it does not clear regulatory hurdles; it owns the question "is this thesis true, and how would we know we were wrong?"

## Lead
[equity-analyst](equity-analyst/) — accountable for the department's output and quality. The lead owns thesis quality across the department and signs off on T1 research before it leaves Analysis.

## Agents
| Agent | Role in one line |
|-------|------------------|
| [equity-analyst](equity-analyst/) | Researches individual assets and authors falsifiable, bottom-up investment theses. |
| [quantitative-analyst](quantitative-analyst/) | Builds and validates the statistical evidence — factors, signals, and backtests — behind every thesis. |
| [macro-strategist](macro-strategist/) | Frames the top-down regime, rates, and cross-asset context that every thesis lives inside. |

## Councils it sits on
- [investment-council](../councils/investment-council/) — Analysis presents theses for adoption.
- [risk-council](../councils/risk-council/) — Analysis defends assumptions under stress.

## Memory it feeds
- [investment-decisions](../memory/registers/investment-decisions.md) — every adopted or rejected thesis and its rationale.
- [risk-register](../memory/registers/risk-register.md) — model and assumption risks surfaced during research.
- [compliance-log](../memory/registers/compliance-log.md) — research-conduct notes and lessons learned.

## Lifecycle
Every agent in this department follows the same agent contract and lifecycle.
A department adds agents by copying [../../templates/agent.template.md](../../templates/agent.template.md).
